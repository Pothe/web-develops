"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Children } from "react"


 function Filter() {

    // const searchParams = useSearchParams()
    // const router = useRouter()
    // const pathname = usePathname()
  
    // function handleClick(filter){
    //    const  params = new URLSearchParams(searchParams)
    //    params.set("capacity",filter)        
    //    router.replace(`${pathname}?${params.toString()}`,{scroll:false})

    // }

    const searchParams= useSearchParams()
    const router = useRouter()
    const pathName = usePathname()
    const isActive = searchParams.get("capacity")??"all"

    function handleClick(filter){
        const params = new URLSearchParams(searchParams)
        params.set("capacity",filter)
        router.replace(`${pathName}?${params.toString()}`,{scroll:false})

    }
    return (
        <div className="border w-fit flex gap-2 right-auto mb-2 ">
            <Button filter={"all"} isActive={isActive} onClick={handleClick} >
                all Cabins
            </Button>
               <Button filter={"small"} isActive={isActive} onClick={handleClick} >
                1&amp;3 cabins
            </Button>
             <Button filter={"medium"} isActive={isActive} onClick={handleClick} >
                4&amp;7 cabins
            </Button>
              <Button filter={"large"} isActive={isActive} onClick={handleClick} >
                8 cabins plus
            </Button>
           
           
           
           
        </div>
    )
}


 function Button({children, filter,onClick,isActive}){
    return <button onClick={()=>onClick(filter)}  className={` hover:bg-slate-400 px-5 py-3  ${filter===isActive?"bg-slate-400":""}`}>
        {children}
    </button>
 }

export default Filter