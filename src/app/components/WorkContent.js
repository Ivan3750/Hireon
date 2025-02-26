const LanguageContent = () => {
    return ( <>
    <h2 className="font-bold text-[25px]">Work experience</h2>
    <div className="flex justify-center gap-8 flex-wrap">
    <div className="flex flex-col w-full gap-2">
        <label className="label">Job title</label>
    <input type="text" className="input" placeholder="High school" />
        <label className="label">Company's name</label>
    <input type="text" className="input" placeholder="Name" />
        <label className="label">City</label>
    <input type="text" className="input" placeholder="London" />
        <label className="label mt-5">Time</label>

    <div className="flex items-center gap-5 mt-1">

    <input type="date" className="input" placeholder="city" />
        <label className="label"> --- </label>
    <input type="date" className="input" placeholder="02-2020" />
    </div>

    </div>
    <div className="w-full ">
        <label className="label">More about this education</label>
        <textarea className="rounded-2xl bg-[#F8F8FF] resize-none focus:outline-none h-40 p-5 w-full"></textarea>
    </div>
    </div>
    </> );
}
 
export default LanguageContent;