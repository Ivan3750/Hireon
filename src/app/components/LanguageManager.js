import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const LanguageManager = ({  }) => {
  const [languages, setLanguages] = useState([]);
  const userId = 8 
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/user/${userId}/language`);
        if (response.ok) {
          const data = await response.json();
          setLanguages(data.languages);
        }
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };
    fetchLanguages();
  }, [userId]);

  const addLanguage = () => {
    setLanguages([...languages, { language_name: "", proficiency_level: "", isNew: true }]);
  };

  const updateLanguage = (index, key, value) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index][key] = value;
    setLanguages(updatedLanguages);
  };

  const saveLanguage = async (index) => {
    const newLanguage = languages[index];
    if (!newLanguage.language_name || !newLanguage.proficiency_level) return;

    try {
      const response = await fetch(`http://localhost:5000/api/user/${userId}/language`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLanguage),
      });
      
      if (response.ok) {
        const savedLanguage = await response.json();
        const updatedLanguages = [...languages];
        updatedLanguages[index] = { ...savedLanguage, isNew: false };
        setLanguages(updatedLanguages);
      }
    } catch (error) {
      console.error("Error saving language:", error);
    }
  };

  const removeLanguage = async (index, language) => {
    if (!language.isNew) {
      try {
        await fetch(`http://localhost:5000/api/user/${userId}/language`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ language_name: language.language_name }),
        });
      } catch (error) {
        console.error("Error deleting language:", error);
        return;
      }
    }
    setLanguages(languages.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-2">
      {languages.map((language, index) => (
        <div key={index} className="bg-gray-100 p-5 rounded-3xl flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white h-10 w-10"></div>
            {language.isNew ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  className="input w-[175px]"
                  placeholder="Enter language"
                  onBlur={(e) => updateLanguage(index, "language_name", e.target.value)}
                  autoFocus
                />
                <input
                  type="text"
                  className="input"
                  placeholder="C2"
                  onBlur={(e) => {
                    updateLanguage(index, "proficiency_level", e.target.value);
                    saveLanguage(index);
                  }}
                />
              </div>
            ) : (
              <h4 className="text-black text-lg">{language.language_name} ({language.proficiency_level})</h4>
            )}
          </div>
          <div
            className="rounded-full bg-red-200 h-10 w-10 flex justify-center items-center hover:scale-95 cursor-pointer"
            onClick={() => removeLanguage(index, language)}
          >
            <FaTrash color="red" size={20} />
          </div>
        </div>
      ))}
      <button className="button" onClick={addLanguage}>Add language</button>
    </div>
  );
};

export default LanguageManager;
