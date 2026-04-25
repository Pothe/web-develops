

export default function Row({children}) {
    return (
        <div className='flex flex-row justify-between gap-2 '>
            {children}
        </div>
    )
}
