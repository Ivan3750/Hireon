import { useState } from "react";
import axios from "axios";

const EducationContent = () => {
  const [formData, setFormData] = useState({
    education_level: "",
    education_place: "",
    started: "",
    ended: "",
    more_info: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("/api/user/education", formData, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      alert("Education updated: " + response.data);
    } catch (error) {
      console.error("Error updating education: ", error);
      alert("Failed to update education");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-bold text-[25px]">Education</h2>
      <div className="flex justify-center gap-8">
        <div className="flex flex-col w-full gap-2">
          <label className="label">Education level</label>
          <input
            type="text"
            name="education_level"
            className="input"
            placeholder="High school"
            value={formData.education_level}
            onChange={handleChange}
          />

          <label className="label">Education place</label>
          <input
            type="text"
            name="education_place"
            className="input"
            placeholder="City"
            value={formData.education_place}
            onChange={handleChange}
          />

          <label className="label">Started</label>
          <input
            type="date"
            name="started"
            className="input"
            placeholder="02-2020"
            value={formData.started}
            onChange={handleChange}
          />

          <label className="label">Ended</label>
          <input
            type="date"
            name="ended"
            className="input"
            placeholder="02-2025"
            value={formData.ended}
            onChange={handleChange}
          />
        </div>

        <div className="w-full">
          <label className="label">More about this education</label>
          <textarea
            name="more_info"
            className="rounded-2xl bg-[#F8F8FF] resize-none focus:outline-none h-56 p-5 w-full"
            value={formData.more_info}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
      >
        Save Education
      </button>
    </form>
  );
};

export default EducationContent;