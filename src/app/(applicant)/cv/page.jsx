"use client"

import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Modal from "@/app/components/Modal";
import EducationContent from "@/app/components/EducationContent";
import WorkContent from "@/app/components/WorkContent";
import LanguageManager from "@/app/components/LanguageManager"
import SkillsContent from "@/app/components/SkillsContent"
const cvPage = () => {
    const [skills, setSkills] = useState(["HTML"])

    const addSkill = (newSkill) => {
        if (!skills.includes(newSkill)) {
          setSkills((prevSkills) => [...prevSkills, newSkill])
        }
      }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
  
    const handleOpenModal = (content) => {
      setModalContent(content);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setModalContent("");
    };
    return ( <>
        <div className="flex  bg-[#E3E3ED] w-full p-14 justify-between gap-[70px]">
            <div className="flex flex-col gap-2 w-full p-4">
                <label className="label">Job</label>
                <input type="text" className="input" placeholder="Job"/>
                <label className="label">Ready to work in</label>
                <input type="text" className="input" placeholder="City"/>
                <label className="label">Salary</label>
                <input type="number" min="0" max="1000000" className="input"  placeholder="20 000"/>
                <label className="label">Phone</label>
                <input type="text" className="input" placeholder="+380 67 100 88 11"/>
                <label className="label">Email</label>
                <input type="text" className="input" placeholder="name@hireon.com" />
                <label className="label">Additional information</label>
                <textarea name="" id="" className="rounded-2xl bg-[#F8F8FF] resize-none focus:outline-none h-52 p-5"></textarea>
            </div>
            <div className="flex flex-col gap-2 w-full p-4">
                <h3>Education</h3>
                <div className="bg-[#F8F8FF] p-5 rounded-3xl flex justify-between">
                    <div>
                    <h4 className="text-[#141313] text-[16px]" >High Name </h4>
                    <p className="text-[10px]">2020 - 2025</p>
                    </div>
                    <div>
                    <div className="rounded-full bg-[#FAD7DC] h-10 w-10 flex justify-center items-center hover:scale-[0.95] cursor-pointer"><FaTrash className="" color="#F94861" size={20}></FaTrash></div>                    </div>
                </div>
                <button className="button"   onClick={() => handleOpenModal(<SkillsContent onAddSkill={addSkill} />)}>
                Add an educational institution
                </button>
                <h3>Language</h3>
                <LanguageManager/>
                <h3>Knowledge and skills</h3>
                <div className="bg-[#F8F8FF] p-5 rounded-3xl">
                    <div className="flex flex-wrap justify-between gap-1">
                        <p className="bg-[#E4E4E4] p-2 w-max rounded-xl font-normal">React.js</p>
                        <p className="bg-[#E4E4E4] p-2 w-max rounded-xl font-normal">React.js</p>
                        <p className="bg-[#E4E4E4] p-2 w-max rounded-xl font-normal">React.js</p>
                        <p className="bg-[#E4E4E4] p-2 w-max rounded-xl font-normal">React.js</p>
                        <p className="bg-[#E4E4E4] p-2 w-max rounded-xl font-normal">React.js</p>
                        <p className="bg-[#E4E4E4] p-2 w-max rounded-xl font-normal">React.js</p>
                        <p className="bg-[#E4E4E4] p-2 w-max rounded-xl font-normal">React.js</p>
                    </div>
                    <button className="button" onClick={() => handleOpenModal(SkillsContent)}>Edit</button>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full p-4">
                <h2>Work experience</h2>
                <div className="bg-[#F8F8FF] p-5 rounded-3xl">
                    <div className="flex justify-between">
                    <div>
                        <h3 className="text-[#141313] font-semibold">SharkIT</h3>
                        <p className="text-[#59585A] font-medium text-[14px]">Full Stack Dev</p>
                        <p className="text-[#4A4A4D] font-normal text-[12px]">02.2022 - 03.2025</p>
                    </div>
                    <div className="rounded-full bg-[#FAD7DC] h-10 w-10 flex justify-center items-center hover:scale-[0.95] cursor-pointer"><FaTrash className="" color="#F94861" size={20}></FaTrash></div>
                    </div>
                    <div>
                    <p className="text-[#706F72] text-[12px]"> Text text text text text text text text text text text text text text text text text text text text text text  text text text text text text text text text text text text text text </p>
                    </div>
                </div>
                <div className="bg-[#F8F8FF] p-5 rounded-3xl">
                    <div className="flex justify-between">
                    <div>
                        <h3 className="text-[#141313] font-semibold">SharkIT</h3>
                        <p className="text-[#59585A] font-medium text-[14px]">Full Stack Dev</p>
                        <p className="text-[#4A4A4D] font-normal text-[12px]">02.2022 - 03.2025</p>
                    </div>
                    <div className="rounded-full bg-[#FAD7DC] h-10 w-10 flex justify-center items-center hover:scale-[0.95] cursor-pointer"><FaTrash className="" color="#F94861" size={20}></FaTrash></div>
                    </div>
                    <div>
                    <p className="text-[#706F72] text-[12px]"> Text text text text text text text text text text text text text text text text text text text text text text  text text text text text text text text text text text text text text </p>
                    </div>
                </div>
                <button className="button" onClick={() => handleOpenModal(WorkContent)}>
                Add work experience                </button>
                <div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div>{modalContent}</div>
        <div className="mt-5 flex justify-end gap-5">
        <button
          className="button-disable"
          onClick={handleCloseModal}
        >
          Cencel
        </button>
        <button className="button">Save</button>

        </div>
      </Modal>
        </div>
    </> );
}
 
export default cvPage;