export default function Pill({children, color}) {
    return (
        <div className={`bg-[${color}] rounded-full p-[10px] text-[0.75vw] w-fit`}>{children}</div>
    )
}