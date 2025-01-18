import RootLayout from "@/app/RootLayout";
export default function Home() {
  return (
    <>
    <RootLayout>
      <div className="flex flex-col h-screen w-screen">
        <div className="flex flex-col items-center">
          <h2 className="text-[40px] text-nowrap">Hireon is the best way to success</h2>
          <p className="text-xl">Here anyone can find a job that suits them</p>
        </div>
        <div className="flex flex-row flex-nowrap mt-3 justify-center"><input placeholder="Find dream job" className="rounded-s-full p-3 w-[700px]"></input><button className="bg-[#ffb703] p-3 rounded-e-full text-[#023047] hover:bg-[#023047] hover:text-[#ffb703] transition-all">Search</button></div>
      </div>
      </RootLayout>
    </>
  )
}