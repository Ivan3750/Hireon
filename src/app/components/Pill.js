import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
export default function Pill({ text, color, disabled, deletePill}) {
  const [content, setContent] = useState(text);
  const [isDeleted, setIsDeleted] = useState(false)
  if (isDeleted || (!content && disabled)) return null;
  return (
    <div
      className={`bg-[${color}] flex flex-row justify-center items-center transition-all rounded-full p-[10px] xl:text-[14px] md:text-[12px] text-[11px] min-w-[50px] text-center gap-[5px]`}
    >
      <input
        disabled={disabled}
        placeholder="Your skill"
        onInput={(e) => setContent(e.target.value)}
        className="bg-transparent" style={{fieldSizing: "content"}}
        defaultValue={text}
      >
      </input>
      {disabled || <FaXmark onClick={() => {setIsDeleted(true);deletePill()}} className="cursor-pointer text-[0.75vw]"></FaXmark>}
    </div>
  );
}
