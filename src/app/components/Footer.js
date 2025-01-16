import Image from "next/image";
import icon from '@/app/favicon.ico'
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex flex-col footer w-full absolute bottom-0">
        <hr></hr>
        <div className="flex flex-row gap-2 p-5 items-center justify-center"><Image alt='logo' src={icon} width={30} height={30}></Image><h2>&copy; 2024, hireon</h2></div>
        <section className="flex flex-row justify-evenly w-full mb-10">
        <ul>
            <li>Tools</li>
            <hr></hr>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        <ul>
            <li>Useful links</li>
            <hr></hr>
            <li>Help</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        <ul>
            <li>Contact us</li>
            <hr></hr>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        </section>
    </footer>
  )
}