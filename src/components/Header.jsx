import { Bars4Icon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { MobileMenu } from "./MobileMenu"

export function Header() {

    let [isOpen, setIsOpen] = useState(false)

    function openMobileMenu() {
        setIsOpen(true)
    }

    function closeMobileMenu() {
        setIsOpen(false)
    }

    return (
        <>

            <div className="w-full px-4">
                <div className="flex items-center justify-between mx-auto py-4">
                    <button>
                        <img src="./images/logo.svg" aria-hidden="true"/>
                        <span className="sr-only">Logo</span>
                    </button>
                    <button onClick={openMobileMenu}>
                        <Bars4Icon className="w-6 h-6" aria-hidden="true"/>
                        <span className="sr-only">Menu Button</span>
                    </button>
                </div>
            </div>

            <MobileMenu isOpen={isOpen} closeMobileMenu={closeMobileMenu} openMobileMenu={openMobileMenu}/>

        </>
    )

}