import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaYoutube, FaLinkedin, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa6"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
export default function Settings() {
    return (
        <div className="w-full h-3/4 bg-[#dcdcdc] flex flex-row items-center justify-center gap-[20px] p-[20px]">
            <div className="flex flex-col gap-[20px] h-full w-1/3 rounded-[20px]">
                <div className="bg-[#F8F8FF] h-2/3 w-full rounded-[20px] p-[20px] flex flex-col">
                    <h2 className="text-[1.6vw] font-medium my-[20px]">Name Surname</h2>
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-row gap-[20px] text-[0.9vw] font-light">
                            <ul className="text-[#808080]">
                                <li>Email:</li>
                                <li>Phone:</li>
                                <li>Age:</li>
                                <li>City of residence:</li>
                                <li>Country:</li>
                            </ul>
                            <ul>
                                <li>email@gmail.com</li>
                                <li>+1234567890</li>
                                <li>42</li>
                                <li>Kyiv</li>
                                <li>Ukraine</li>
                            </ul>
                        </div>
                        <Image src='/bg.jpg' width={200} height={200} alt="avatar" className="bg-cover h-[7.5vw] w-[7.5vw]"></Image>
                    </div>
                    <h2 className="text-[1.4vw] font-medium my-[20px]">Social networks</h2>
                    <div className="flex flex-row text-[1.3vw] gap-[10px] py-[5px]">
                        <FaFacebook color="#1877F2"/><FaYoutube color="#FF0000"/><FaLinkedin color="#0077B5"/><FaTiktok/><FaInstagram/><FaTwitter color="#1DA1F2"/>
                    </div>
                </div>
                <div className="bg-[#F8F8FF] h-1/3 w-full rounded-[20px] p-[20px]">
                    <h2 className="text-[1.3vw] font-medium">Frontend Developer</h2>
                    <div className="flex flex-row text-[1vw] text-[#808080] gap-[30px] mb-[10px]">
                        <p>Full time</p>
                        <p>Remote</p>
                    </div>
                    <div className="flex flex-col text-[0.8vw] font-light">
                        <p className="text-[#808080] text-nowrap">About me:</p>
                        <p className="break-words w-full overflow-ellipsis">i am frontend developer and i know react lol also i have 100 words to type so im gonna do it</p>
                    </div>
                </div>
                <div className="bg-[#F8F8FF] h-1/3 w-full rounded-[20px] p-[20px] grid gap-[20px] grid-rows-2 grid-cols-2">
                    <div className="flex flex-col w-full">
                        <h2 className="text-[1.3vw] font-medium">Login</h2>
                        <h2 className="text-[0.9vw] text-[#808080]">mylogin1337</h2>
                    </div>
                    <div className="flex flex-col w-full">
                        <h2 className="text-[1.3vw] font-medium">Password</h2>
                        <h2 className="text-[0.9vw] text-[#808080]">********</h2>
                    </div>
                    <div className="flex flex-col w-full">
                        <h2 className="text-[1.3vw] font-medium">Own link</h2>
                        <h2 className="text-[0.9vw] text-[#808080]">iamaworker</h2>
                    </div>
                    <div className="flex flex-col w-full">
                        <Link href="/mfa" className="text-[1.3vw] font-medium flex flex-row items-center gap-[10px]">MFA<FaArrowUpRightFromSquare></FaArrowUpRightFromSquare></Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[20px] h-full w-2/3 rounded-[20px]">
                <div className="bg-[#F8F8FF] h-1/4 w-full rounded-[20px] p-[20px]">
                    <h2 className="text-[1.3vw] font-medium">Skills</h2>
                    <div className="flex flex-row gap-[10px] flex-wrap">
                        <div className="bg-[#FFB703] rounded-full p-[10px] w-fit">C++</div>
                        <div className="bg-[#FFB703] rounded-full p-[10px] w-fit">C++</div>
                        <div className="bg-[#FFB703] rounded-full p-[10px] w-fit">C++</div>
                        <div className="bg-[#FFB703] rounded-full p-[10px] w-fit">C++</div>
                        <div className="bg-[#FFB703] rounded-full p-[10px] w-fit">C++</div>
                    </div>
                </div>
                <div className="bg-[#F8F8FF] h-1/4 w-full rounded-[20px] p-[20px]">
                    <h2 className="text-[1.3vw] font-medium">Statistics</h2>
                    <div className="flex flex-col gap-[10px] text-[1vw]">
                        <h3>25</h3>
                        <h3>helps</h3>
                    </div>
                </div>
                <div className="bg-[#F8F8FF] h-1/4 w-full rounded-[20px] p-[20px]">
                    <h2 className="text-[1.3vw] font-medium">Useful information</h2>
                    <div>
                        <h2 className="text-[1vw] font-medium">My CV</h2>
                    </div>
                </div>
                <div className="bg-[#F8F8FF] h-1/4 w-full rounded-[20px] p-[20px]">
                    <h2 className="text-[1.3vw] font-medium">General</h2>
                    <div className="text-[1vw] flex flex-row items-center gap-[10px]">
                        <label>Send notifications</label>
                        <input type="checkbox" className="w-[0.7vw] h-[0.7vw]"></input>
                    </div>
                    <div className="text-[1vw] flex flex-row items-center gap-[10px]">
                        <label>Theme</label>
                        <select name="themes" id="theme-select" className="bg-[#F8F8FF] outline-none font-light">
                            <option value="system" className="font-light">System</option>
                            <option value="light" className="font-light">Light</option>
                            <option value="dark" className="font-light">Dark</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}