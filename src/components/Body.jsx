import { useContext } from "react"
import { ThemeContext } from "../App"

export function Body() {
    const {windowWidth} = useContext(ThemeContext)
    return (
        <div className="pt-4 md:flex md:flex-row-reverse items-center justify-between">
            <img src={`./images/${windowWidth >= 740 ? "image-hero-desktop.png" : "image-hero-mobile.png"}`} />
            <div className="px-4">
                <h1 className="text-3xl font-bold text-center mt-10">Make Remote Work</h1>
                <p className="text-slate-600 font-semibold text-lg text-center my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt pariatur eos totam. Sapiente, ad quae!</p>
                <div className="grid place-items-center"><button className="bg-black text-white font-semibold px-5 py-2 rounded-xl">Learn More</button></div>
                <div className="flex items-center justify-center flex-wrap gap-6 mt-10">
                    <img src="./images/client-databiz.svg" alt="" />
                    <img src="./images/client-audiophile.svg" alt="" />
                    <img src="./images/client-meet.svg" alt="" />
                    <img src="./images/client-maker.svg" alt="" />
                </div>
            </div>
        </div>
    )
}