import Navigation from "./Navigation";

export default function Header() {
    return (
        <section className="flex flex-row justify-between  container mx-auto items-center">
            <p>Logo</p>
            <Navigation/>
            <button type="button" className="bg-sky-300 px-5 py-3 rounded-2xl cursor-pointer text-sky-800 hover:bg-sky-400 transition-all hover:text-white">Enroll Now</button>
        </section>
    )
}
