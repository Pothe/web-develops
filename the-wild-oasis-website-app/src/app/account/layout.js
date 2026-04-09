import SideNavigation from "../_components/SideNavigation";


export const metadata={
    title:{
         template:"%s => Guest Area",
        default:`Guest Area`
    },
    description:`guest profile`
}

export default function layout({children}) {
    return (
        <section className="grid grid-cols-[16rem_1fr] ">
            <SideNavigation/>
            <main className="bg-blue-400">{children}</main>
        </section>
    )
}
