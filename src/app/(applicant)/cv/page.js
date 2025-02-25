"use client"

import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import Modal from "@/app/components/Modal";
import EducationContent from "@/app/components/EducationContent";
import WorkContent from "@/app/components/WorkContent";
import LanguageManager from "@/app/components/LanguageManager";
import SkillsContent from "@/app/components/SkillsContent";
import { useTranslate } from "@/app/hooks/useTranslate";
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
    const [pageLoading, setPageLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [error, setError] = useState(null);  // Для збереження помилок
    const { translations, loading, lang, setLang } = useTranslate();
    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get("/api/user/data", {
                headers: {
                  Authorization: `Bearer ${localStorage.token}`
                }
              });
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
            setPageLoading(false);
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
            setPageLoading(true);
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
            setPageLoading(false);
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
    if (loading) return null
    return (
        <>
            <div className="flex bg-[#E3E3ED] w-full justify-between gap-[70px] lg:flex-nowrap flex-wrap lg:p-14 p-2">
                <div className="flex flex-col gap-2 w-full p-4">
                    <label className="label">{translations.cv.job}</label>
                    <input 
                        type="text" 
                        className="input" 
                        placeholder={translations.cv.job} 
                        value={job} 
                        onChange={handleChange} 
                        name="job" 
                    />
                    <label className="label">{translations.cv.ready}</label>
                    <input 
                        type="text" 
                        className="input" 
                        placeholder={translations.cv.city}  
                        value={city} 
                        onChange={handleChange} 
                        name="city" 
                    />
                    <label className="label">{translations.cv.salary}</label>
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
                    <label className="label">{translations.login.phone}</label>
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="+380 67 100 88 11" 
                        value={phone} 
                        onChange={handleChange} 
                        name="phone" 
                    />
                    <label className="label">{translations.login.email}</label>
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="name@hireon.com" 
                        value={email} 
                        onChange={handleChange} 
                        name="email" 
                    />
                    <label className="label">{translations.cv.additional}</label>
                    <textarea 
                        className="rounded-2xl bg-[#F8F8FF] resize-none focus:outline-none h-52 p-5 max-[500px]:text-[12px]" 
                        value={additionalInfo} 
                        onChange={handleChange} 
                        name="additionalInfo" 
                    ></textarea>
                </div>

                <div className="flex flex-col gap-2 w-full p-4">
                    <h3 className="max-[500px]:text-[14px]">{translations.settings.education}</h3>
                    <div className="bg-[#F8F8FF] p-5 rounded-3xl flex justify-between">
                        <div>
                            <h4 className="text-[#141313] text-[16px] max-[500px]:text-[14px]">High Name</h4>
                            <p className="text-[10px] max-[500px]:text-[8px]" >2020 - 2025</p>
                        </div>
                        <div>
                            <div className="rounded-full bg-[#FAD7DC] h-10 w-10 flex justify-center items-center hover:scale-[0.95] cursor-pointer">
                                <FaTrash color="#F94861" size={20} />
                            </div>
                        </div>
                    </div>
                    <button className="button" onClick={() => handleOpenModal(<EducationContent />)}>{translations.cv.addInst}</button>

                    <h3 className="max-[500px]:text-[14px]">{translations.cv.lang}</h3>
                    <LanguageManager  /> 

                    <h3 className="max-[500px]:text-[14px]">{translations.cv.knowledges}</h3>
                    <div className="bg-[#F8F8FF] p-5 rounded-3xl">
                        <div className="flex flex-wrap justify-start gap-2 py-2 ">
                            {skills.map((skill, index) => (
                                <p key={index} className="bg-[#E4E4E4] p-2 w-max rounded-xl font-normal max-[500px]:text-[12px]">{skill}</p>
                            ))}
                        </div>
                        <button className="button" onClick={() => handleOpenModal(<SkillsContent onAddSkill={addSkill} skills={skills} />)}>Edit</button>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full p-4">
                    <h2 className="max-[500px]:text-[14px]">Work experience</h2>
                    <div className="bg-[#F8F8FF] p-5 rounded-3xl">
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-[#141313] font-semibold max-[500px]:text-[12px]">SharkIT</h3>
                                <p className="text-[#59585A] font-medium text-[14px] max-[500px]:text-[10px]">Full Stack Dev</p>
                                <p className="text-[#4A4A4D] font-normal text-[12px] max-[500px]:text-[8px]">02.2022 - 03.2025</p>
                            </div>
                            <div className="rounded-full bg-[#FAD7DC] h-10 w-10 flex justify-center items-center hover:scale-[0.95] cursor-pointer">
                                <FaTrash color="#F94861" size={20} />
                            </div>
                        </div>
                        <div>
                            <p className="text-[#706F72] text-[12px] max-[500px]:text-[8px]">Text text text...</p>
                        </div>
                    </div>

                    <button className="button" onClick={() => handleOpenModal(<WorkContent />)}>Add work experience</button>
                </div>
            </div>
    
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div>{modalContent}</div>
                <div className="mt-5 flex justify-end gap-5">
                    <button className="button-disable" onClick={handleCloseModal}>Cancel</button>
                    <button className="button">Save</button>
                </div>
            </Modal>

            {error && <div className="error-message">{error}</div>}
        </>
    );
};

export default CvPage;
