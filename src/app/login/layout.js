import "@/app/globals.css";
export default function LoginLayout({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-[#F8F8FF] w-full h-full">{children}</div>
    </Suspense>
  );
}
