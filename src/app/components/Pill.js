import { useRef, useState, useEffect } from "react";
export default function Pill({ text, color, contentEditable }) {
  const [isExited, setIsExited] = useState(false);
  const [content, setContent] = useState(text);
  const contentRef = useRef(null);
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerText = content;
    }
  }, [content]);
  if (isExited && !content.length) return null;
  return (
    <div
      className={`bg-[${color}] transition-all rounded-full p-[10px] text-[0.75vw] w-fit min-w-[50px] text-center`}
    >
      <p
        ref={contentRef}
        contentEditable={contentEditable}
        onBlur={() => {setIsExited(true);setContent(contentRef.current.innerText);}}
        onFocus={() => setIsExited(false)}
      >
        {content}
      </p>
    </div>
  );
}
