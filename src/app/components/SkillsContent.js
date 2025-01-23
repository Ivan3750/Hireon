"use client";

import { useState } from "react";

const SkillsContent = ({ onAddSkill }) => {
  const [inputValue, setInputValue] = useState("");

  const addSkill = () => {
    if (inputValue && onAddSkill) {
      onAddSkill(inputValue);
      setInputValue(""); // Clears the input after adding
    }
  };

  return (
    <>
      <h2 className="font-bold text-[25px]">Knowledge and Skills</h2>
      <div className="flex justify-center gap-8">
        <div className="bg-[#E3E6ED] w-full h-48 rounded-2xl p-5 flex items-center justify-center">
          <div className="flex gap-2">
            <input
              type="text"
              className="bg-transparent input"
              placeholder="Enter a skill"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} // Updating the input value
            />
            <button
              onClick={addSkill}
              className="bg-blue-500 text-white py-2 px-5 rounded-2xl"
            >
              Add Skill
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsContent;
