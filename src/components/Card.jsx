export function Card({children, className}) {
    return (
        <div className={`bg-zinc-900 mx-auto p-5 rounded-md w-2/3 ${className}`}>
            {children}
        </div>
    )
}
