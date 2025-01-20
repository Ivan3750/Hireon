import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
const JobCard = ({id, name, title,country, city, info, age, typeWork}) => {
    return ( 
    <Link href={`/worker/${id}`}>
        <div className="bg-[#F8F8FF] w-[450px] h-[200px] rounded-2xl p-4 box-border hover:scale-[0.995] transition">
                <div>
                    <div className="flex items-center gap-4">
                    <h2 className="font-semibold text-[#11181C] text-[18px]">{name}</h2>
                        <Image  className="w-[20px] h-[20px]" src={`https://flagsapi.com/${country}/flat/24.png`} width={20} height={20} alt={country}></Image>
                    </div>
                    <h2 className="font-normal text-[#6D6D6D] text-[18px]">{title}</h2>
                    <div className="flex items-center">
                    <FaMapMarkerAlt size={20} color={"#FFB703"} />
                    <p className="font-normal text-[#5D5D5D] text-[14px]">  { city }     { age } years     { typeWork }</p>
                    </div>
                    <p className="font-light text-[#5D5D5D] text-[12px] mt-3">{info}</p>
                </div>
        </div> 
    </Link>
    );
}
 
export default JobCard;