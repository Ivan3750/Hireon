import Link from "next/link";
export default function Notification({ text, jobName, companyName, link }) {
  return (
    {/* <div className="w-full flex flex-col gap-[5px]">
      <h2 className="text-[20px] font-medium">{text}</h2>
      <p>{jobName}</p>
      <div className="flex flex-row justify-between">
        <p>by {companyName}</p>
        <Link href={link}>More...</Link>
      </div>
    </div> */}
  );
}
