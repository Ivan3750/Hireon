import Image from "next/image"
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
                <div className="bg-[#F8F8FF] h-1/3 w-full rounded-[20px] p-[20px]"></div>
            </div>
            <div className="flex flex-col gap-[20px] h-full w-2/3 rounded-[20px]">
                <div className="bg-[#F8F8FF] h-1/4 w-full rounded-[20px] p-[20px]"></div>
                <div className="bg-[#F8F8FF] h-1/4 w-full rounded-[20px] p-[20px]"></div>
                <div className="bg-[#F8F8FF] h-1/4 w-full rounded-[20px] p-[20px]"></div>
            </div>
        </div>
    )
}