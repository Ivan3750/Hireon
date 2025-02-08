import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
export default function Pill({ text, color, contentEditable }) {
  const [content, setContent] = useState(text);
  const [isDeleted, setIsDeleted] = useState(false)
  if (isDeleted || !content) return null;
  return (
    <div
      className={`bg-[${color}] flex flex-row justify-center items-center transition-all rounded-full p-[10px] text-[0.75vw] w-fit min-w-[50px] text-center gap-[5px]`}
    >
      <p
        contentEditable={contentEditable}
        onInput={(e) => setContent(e.target.innerText)}
      >
        {text}
      </p>
      {contentEditable && <FaXmark onClick={() => {setIsDeleted(true)}} className="cursor-pointer text-[0.75vw]"></FaXmark>}
    </div>
  );
}
