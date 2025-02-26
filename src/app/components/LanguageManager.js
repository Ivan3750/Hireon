import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

async function getCountryCode(language) {
  const response = await fetch("https://restcountries.com/v3.1/lang/" + language.toLowerCase());
  const data = await response.json();
  return data[0]?.cca2.toLowerCase();
}

async function getFlag(language) {
  const countryCode = await getCountryCode(language);
  return countryCode ? `https://flagcdn.com/w40/${countryCode}.png` : "";
}


const LanguageItem = ({ language, index, updateLanguage, saveLanguage, removeLanguage }) => {
  const [flagUrl, setFlagUrl] = useState("");

  useEffect(() => {
    if (language.language_name) {
      getFlag(language.language_name).then(setFlagUrl);
    }
  }, [language.language_name]);

  return (
    <div className="bg-gray-100 p-5 rounded-3xl flex justify-between items-center w-full">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-white h-10 w-10 overflow-hidden">
          {flagUrl ? (
            <img
              src={flagUrl}
              alt={`${language.language_name} flag`}
              className="h-full w-full object-cover"
            />
          ) : null}
        </div>
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
              className="input w-[60px]"
              placeholder="C2"
              onBlur={(e) => {
                updateLanguage(index, "proficiency_level", e.target.value);
                saveLanguage(index);
              }}
            />
          </div>
        ) : (
          <h4 className="text-black text-lg max-[500px]:text-sm">
            {language.language_name} ({language.proficiency_level})
          </h4>
        )}
      </div>
      <div
        className="rounded-full bg-red-200 h-10 w-10 flex justify-center items-center hover:scale-95 cursor-pointer"
        onClick={() => removeLanguage(index, language)}
      >
        <FaTrash color="red" size={20} />
      </div>
    </div>
  );
};

const LanguageManager = () => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(`/api/user/language`,{
          headers:{
            Authorization: `Bearer ${localStorage.token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setLanguages(data.languages);
        }
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };
    fetchLanguages();
  }, []);

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
      const response = await fetch(`/api/user/language`, {
        method: "POST",
        headers: { "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`

         },
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
        await fetch(`/api/user/language`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
           },
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
        <LanguageItem
          key={index}
          language={language}
          index={index}
          updateLanguage={updateLanguage}
          saveLanguage={saveLanguage}
          removeLanguage={removeLanguage}
        />
      ))}
      <button className="button" onClick={addLanguage}>
        Add language
      </button>
    </div>
  );
};

export default LanguageManager;
