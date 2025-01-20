import Link from "next/link";

const JobCard = ({id,title, company, country, city, info}) => {
    return ( 
    <Link href={`/job/${id}`}>
        <div className="bg-[#F8F8FF] w-[950px] h-[200px] rounded-2xl p-4 box-border hover:scale-[0.995] transition">
            <div className="flex">
                <div>
                    <h2 className="font-semibold text-[#11181C] text-[20px]">{title}</h2>
                    <p className="font-normal text-[#5D5D5D] text-[14px]">{company} <span>{country}</span> {city} </p>
                    <p className="font-light text-[#5D5D5D] text-[16px] mt-3">{info}</p>
                </div>
                <div>
                    Image
                </div>
            </div>
        </div> 
    </Link>
    );
}
 
export default JobCard;