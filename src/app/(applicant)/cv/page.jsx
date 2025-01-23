import RootLayout  from "@/app/RootLayout"

const cvPage = () => {
    return ( <RootLayout>
        <div className="flex  bg-[#E3E3ED] w-full p-14 justify-between gap-[70px]">
            <div className="flex flex-col gap-2 w-full p-4">
                <label className="label">Job</label>
                <input type="text" className="input" placeholder="Job"/>
                <label className="label">Ready to work in</label>
                <input type="text" className="input" placeholder="City"/>
                <label className="label">Salary</label>
                <input type="number" min="0" max="1000000" className="input"  placeholder="20 000"/>
                <label className="label">Phone</label>
                <input type="text" className="input" placeholder="+380 67 100 88 11"/>
                <label className="label">Email</label>
                <input type="text" className="input" placeholder="name@hireon.com" />
                <label className="label">Additional information</label>
                <textarea name="" id="" className="rounded-2xl bg-[#F8F8FF] resize-none focus:outline-none h-52 p-5"></textarea>
            </div>
            <div className="flex flex-col gap-2 w-full p-4">
                <h3>Education</h3>
                <div className="bg-[#F8F8FF] p-5 rounded-3xl">
                    <div>
                    <h4 className="text-[#141313] text-[16px]" >High Name </h4>
                    <p className="text-[10px]">2020 - 2025</p>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>
                <button className="button">
                Add an educational institution
                </button>
                <h3>Language</h3>
                <div className="bg-[#F8F8FF] p-5 rounded-3xl">
                    <div>
                    <h4 className="text-[#141313] text-[16px]" >English</h4>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>
                    <button className="button">
                    Add language
                </button>
                <h3>Knowledge and skills</h3>
                <div className="bg-[#F8F8FF] p-5 rounded-3xl">
                    <div className="flex flex-wrap justify-between gap-1">
                        <p className="bg-[#E4E4E4] p-2 w-max rounded-xl font-normal">React.js</p>
                        <p className="bg-[#E4E4E4] p-2 w-max rounded-xl font-normal">React.js</p>
                        <p className="bg-[#E4E4E4] p-2 w-max rounded-xl font-normal">React.js</p>
                        <p className="bg-[#E4E4E4] p-2 w-max rounded-xl font-normal">React.js</p>
                        <p className="bg-[#E4E4E4] p-2 w-max rounded-xl font-normal">React.js</p>
                        <p className="bg-[#E4E4E4] p-2 w-max rounded-xl font-normal">React.js</p>
                        <p className="bg-[#E4E4E4] p-2 w-max rounded-xl font-normal">React.js</p>
                    </div>
                    <button>Edit</button>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full p-4">
                <h2>Work experience</h2>
                <div className="bg-[#F8F8FF] p-5 rounded-3xl">
                    <div className="flex justify-between">
                    <div>
                        <h3 className="text-[#141313] font-semibold">SharkIT</h3>
                        <p className="text-[#59585A] font-medium text-[14px]">Full Stack Dev</p>
                        <p className="text-[#4A4A4D] font-normal text-[12px]">02.2022 - 03.2025</p>
                    </div>
                    <div className="rounded-full bg-[#FAD7DC] h-10 w-10"></div>
                    </div>
                    <div>
                    <p className="text-[#706F72] text-[12px]"> Text text text text text text text text text text text text text text text text text text text text text text  text text text text text text text text text text text text text text </p>
                    </div>
                </div>
                <div className="bg-[#F8F8FF] p-5 rounded-3xl">
                    <div className="flex justify-between">
                    <div>
                        <h3 className="text-[#141313] font-semibold">SharkIT</h3>
                        <p className="text-[#59585A] font-medium text-[14px]">Full Stack Dev</p>
                        <p className="text-[#4A4A4D] font-normal text-[12px]">02.2022 - 03.2025</p>
                    </div>
                    <div className="rounded-full bg-[#FAD7DC] h-10 w-10"></div>
                    </div>
                    <div>
                    <p className="text-[#706F72] text-[12px]"> Text text text text text text text text text text text text text text text text text text text text text text  text text text text text text text text text text text text text text </p>
                    </div>
                </div>
                <button className="button">
                Add work experience                </button>
                <div>
                </div>
            </div>
        </div>
    </RootLayout> );
}
 
export default cvPage;