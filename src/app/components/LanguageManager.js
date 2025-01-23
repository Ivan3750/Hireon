import { useState } from "react"
import { FaTrash } from "react-icons/fa"

const LanguageManager = () => {
  const [languages, setLanguages] = useState(["English", "Ukrainian"])

  const addLanguage = () => {
    setLanguages([...languages, ""])
  }

  const updateLanguage = (index, value) => {
    const updatedLanguages = [...languages]
    updatedLanguages[index] = value
    setLanguages(updatedLanguages)
  }

  const removeLanguage = (index) => {
    const updatedLanguages = languages.filter((_, i) => i !== index)
    setLanguages(updatedLanguages)
  }

  return (
    <div className="flex flex-col gap-2">
      {languages.map((language, index) => (
        <div key={index} className="bg-[#F8F8FF] p-5 rounded-3xl flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
          <div className="rounded-full bg-[#FFF] h-10 w-10"></div>
          {language === "" ? (
            <input
              type="text"
              className="input"
              placeholder="Enter language"
              onBlur={(e) => updateLanguage(index, e.target.value)}
              autoFocus
            />
          ) : (
            <h4 className="text-[#141313] text-[16px]">{language}</h4>
          )}
          <div>
          </div>
          </div>
            <div
              className="rounded-full bg-[#FAD7DC] h-10 w-10 flex justify-center items-center hover:scale-[0.95] cursor-pointer"
              onClick={() => removeLanguage(index)}
            >
              <FaTrash color="#F94861" size={20} />
            </div>
         
        </div>
      ))}
      <button
        className="button"
        onClick={addLanguage}
      >
        Add language
      </button>
    </div>
  )
}

export default LanguageManager
