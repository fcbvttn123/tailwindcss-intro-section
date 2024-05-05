import { useContext } from "react"
import { ThemeContext } from "../App"

export function Body() {
    const {windowWidth} = useContext(ThemeContext)
    return (
        <div className="pt-4 md:px-10 md:flex md:flex-row-reverse items-center justify-between md:gap-x-10">
            <div>
                <img className="w-full h-full" src={`./images/${windowWidth >= 740 ? "image-hero-desktop.png" : "image-hero-mobile.png"}`} />
            </div>
            <div className="px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-center md:text-start mt-10">Make Remote Work</h1>
                <p className="text-slate-600 font-semibold text-lg text-center md:text-start my-4 md:my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt pariatur eos totam. Sapiente, ad quae!</p>
                <div className="grid place-items-center md:place-items-start"><button className="bg-black text-white font-semibold px-5 py-2 rounded-xl">Learn More</button></div>
                <div className="flex items-center justify-center md:justify-start flex-wrap gap-6 mt-10 md:mt-20">
                    <img className="md:max-w-20" src="./images/client-databiz.svg" alt="" />
                    <img className="md:max-w-20" src="./images/client-audiophile.svg" alt="" />
                    <img className="md:max-w-20" src="./images/client-meet.svg" alt="" />
                    <img className="md:max-w-20" src="./images/client-maker.svg" alt="" />
                </div>
            </div>
        </div>
    )
}