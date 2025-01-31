"use client"

import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import Modal from "@/app/components/Modal";
import EducationContent from "@/app/components/EducationContent";
import WorkContent from "@/app/components/WorkContent";
import LanguageManager from "@/app/components/LanguageManager";
import SkillsContent from "@/app/components/SkillsContent";
import axios from "axios";

const CvPage = () => {
    const [userData, setUserData] = useState(null);
    const [skills, setSkills] = useState([]);
        const [job, setJob] = useState("");
    const [city, setCity] = useState("");
    const [salary, setSalary] = useState(0);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [error, setError] = useState(null);  // Для збереження помилок

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get("/api/user/8/data");
            const { skills: userSkills, user} = response.data;
            console.log(response.data)
            setUserData(response.data);
            setSkills(userSkills.map(skill => skill.skill_name));
            setJob(user.job ||"");
            setCity(user.city || "");
            setSalary(user.salary || 0);
            setPhone(user.phone || "");
            setEmail(user.email || "");
            setAdditionalInfo(user.additionalInfo ||"");
        } catch (error) {
            setError("Error fetching user data.");
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = async (e) => {
        const { name, value } = e.target;
                if (name === "job") setJob(value);
        else if (name === "city") setCity(value);
        else if (name === "salary") setSalary(value);
        else if (name === "phone") setPhone(value);
        else if (name === "email") setEmail(value);
        else if (name === "additionalInfo") setAdditionalInfo(value);
   
        try {
            setLoading(true);
            await axios.put("/api/user/8/data", {
                user: {
                    job: name === "job" ? value : job,
                    city: name === "city" ? value : city,
                    salary: name === "salary" ? value : salary,
                    phone: name === "phone" ? value : phone,
                    email: name === "email" ? value : email,
                    additionalInfo: name === "additionalInfo" ? value : additionalInfo
                }
            });
            console.log("Data updated successfully!");
        } catch (error) {
            setError("Error updating data.");
            console.error("Error updating user data:", error);
        } finally {
            setLoading(false);
        }
    };
   

    const addSkill = (newSkill) => {
        if (!skills.includes(newSkill)) {
            setSkills((prevSkills) => [...prevSkills, newSkill]);
        }
    };

    const handleOpenModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalContent("");
    };

    return (
        <>
            <div className="flex bg-[#E3E3ED] w-full p-14 justify-between gap-[70px]">
                <div className="flex flex-col gap-2 w-full p-4">
                    <label className="label">Job</label>
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Job" 
                        value={job} 
                        onChange={handleChange} 
                        name="job" 
                    />
                    <label className="label">Ready to work in</label>
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="City" 
                        value={city} 
                        onChange={handleChange} 
                        name="city" 
                    />
                    <label className="label">Salary</label>
                    <input 
                        type="number" 
                        min="0" 
                        max="1000000" 
                        className="input" 
                        placeholder="20 000" 
                        value={salary} 
                        onChange={handleChange} 
                        name="salary" 
                    />
                    <label className="label">Phone</label>
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="+380 67 100 88 11" 
                        value={phone} 
                        onChange={handleChange} 
                        name="phone" 
                    />
                    <label className="label">Email</label>
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="name@hireon.com" 
                        value={email} 
                        onChange={handleChange} 
                        name="email" 
                    />
                    <label className="label">Additional information</label>
                    <textarea 
                        className="rounded-2xl bg-[#F8F8FF] resize-none focus:outline-none h-52 p-5" 
                        value={additionalInfo} 
                        onChange={handleChange} 
                        name="additionalInfo" 
                    ></textarea>
                </div>

                <div className="flex flex-col gap-2 w-full p-4">
                    <h3>Education</h3>
                    <div className="bg-[#F8F8FF] p-5 rounded-3xl flex justify-between">
                        <div>
                            <h4 className="text-[#141313] text-[16px]">High Name</h4>
                            <p className="text-[10px]">2020 - 2025</p>
                        </div>
                        <div>
                            <div className="rounded-full bg-[#FAD7DC] h-10 w-10 flex justify-center items-center hover:scale-[0.95] cursor-pointer">
                                <FaTrash color="#F94861" size={20} />
                            </div>
                        </div>
                    </div>
                    <button className="button" onClick={() => handleOpenModal(<EducationContent />)}>Add an educational institution</button>

                    <h3>Language</h3>
                    <LanguageManager  /> 

                    <h3>Knowledge and skills</h3>
                    <div className="bg-[#F8F8FF] p-5 rounded-3xl">
                        <div className="flex flex-wrap justify-between gap-1">
                            {skills.map((skill, index) => (
                                <p key={index} className="bg-[#E4E4E4] p-2 w-max rounded-xl font-normal">{skill}</p>
                            ))}
                        </div>
                        <button className="button" onClick={() => handleOpenModal(<SkillsContent onAddSkill={addSkill} skills={skills} />)}>Edit</button>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full p-4">
                    <h2>Work experience</h2>
                    <div className="bg-[#F8F8FF] p-5 rounded-3xl">
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-[#141313] font-semibold">SharkIT</h3>
                                <p className="text-[#59585A] font-medium text-[14px]">Full Stack Dev</p>
                                <p className="text-[#4A4A4D] font-normal text-[12px]">02.2022 - 03.2025</p>
                            </div>
                            <div className="rounded-full bg-[#FAD7DC] h-10 w-10 flex justify-center items-center hover:scale-[0.95] cursor-pointer">
                                <FaTrash color="#F94861" size={20} />
                            </div>
                        </div>
                        <div>
                            <p className="text-[#706F72] text-[12px]">Text text text...</p>
                        </div>
                    </div>

                    <button className="button" onClick={() => handleOpenModal(<WorkContent />)}>Add work experience</button>
                </div>
            </div>
    
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div>{modalContent}</div>
                <div className="mt-5 flex justify-end gap-5">
                    <button className="button-disable" onClick={handleCloseModal}>Cancel</button>
                    <button className="button">Save Modal Date</button>
                </div>
            </Modal>

            {error && <div className="error-message">{error}</div>}
        </>
    );
};

export default CvPage;
