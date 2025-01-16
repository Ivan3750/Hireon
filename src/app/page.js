import Header from "./components/Header";
export default function Home() {
  return (
    <section className="container flex flex-col gap-5">
      <div className="flex flex-row gap-2 items-end"><h2 className="text-3xl text-nowrap">hireon</h2>
      <p className="text-2xl">is the biggest job board website in EU</p></div>
      <p className="text-xl text-balance">Here anyone can find a job that fits you the best. Whether you are a graduate starting your career or a professional looking for your next big opportunity, we&apos;ve got you covered.</p>
      <div><input placeholder="Find dream job" className="rounded-s-md p-2 "></input><button className="bg-[#ffb703] p-2 rounded-e-md text-[#023047] hover:bg-[#023047] hover:text-[#ffb703] transition-all">Search</button></div>
    </section>
  )
}