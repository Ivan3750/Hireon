const EducationContent = () => {
    return ( <>
    <h2 className="font-bold text-[25px]">Education</h2>
    <div className="flex justify-center gap-8">
    <div className="flex flex-col w-full gap-2">
        <label className="label">Education level</label>
    <input type="text" className="input" placeholder="High school" />
        <label className="label">Education place</label>
    <input type="text" className="input" placeholder="city" />
        <label className="label">Started</label>
    <input type="text" className="input" placeholder="02-2020" />
        <label className="label">Ended</label>
    <input type="text" className="input" placeholder="02-2025" />

    </div>
    <div className="w-full ">
        <label className="label">More about this education</label>
        <textarea className="rounded-2xl bg-[#F8F8FF] resize-none focus:outline-none h-56 p-5 w-full"></textarea>
    </div>
    </div>
    </> );
}
 
export default EducationContent;