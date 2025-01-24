"use client"

import { useState } from "react"



const VacancyPage = () => {

    const [content, setContent] = useState(`
        <p class="font-medium text-[16px]"><b>Main responsibilities:</b></p>
        <p class="font-medium text-[16px]"><b>Requirements:</b></p>
        <p class="font-medium text-[16px]"><b>For us, the following are important:</b></p>
        <p class="font-medium text-[16px]"><b>What we offer:</b></p>
      `)
    
      const handleInput = (e) => {
        setContent(e.target.innerHTML)
      }
    return ( 
       
    <>
    <div className="w-full bg-[#E5E5E5] p-10 ">
        <div className="flex justify-center gap-14">
            <div className="flex flex-col w-[70%]">
                <label className="label">Job</label>
                <input type="text" className="input" placeholder="Front end" />
                <label className="label">Salary</label>
                <input type="text" className="input" placeholder="2 000" />
                <label className="label">Address</label>
                <input type="text" className="input" placeholder="Hireon street 1" />
                <label className="label">Contact</label>
                <input type="text" className="input" placeholder="+38 067 320 70 22" />
                <label className="label">Email</label>
                <input type="text" className="input"placeholder="hireon@gmail.com"  />

            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="">About this job</label>
                <div
      contentEditable="true"
      className="rounded-2xl bg-[#F8F8FF] resize-none focus:outline-none h-96 w-full p-5 text-[12px] font-normal"
      onInput={handleInput}
      dangerouslySetInnerHTML={{ __html: content }}
    />



            </div>
        </div>
        <div className="my-5">
        <button className="button-disable">
          Cencel
        </button>
        <button className="button">Save</button>
        </div>

    </div>
    </> 
    )
}
 
export default VacancyPage