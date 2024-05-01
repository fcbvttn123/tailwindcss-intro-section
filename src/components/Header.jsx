import { Bars4Icon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { MobileMenu } from "./MobileMenu"

// Including "Logo (Left)" and "Menu Icon (Right)"
export function Header() {

    let [mobileMenuIsOpened, setMobileMenuIsOpened] = useState(false)

    function openMobileMenu() {
        setMobileMenuIsOpened(true)
    }

    function closeMobileMenu() {
        setMobileMenuIsOpened(false)
    }

    return (
        <>

            {/* Header Bar */}
            <div className="w-full px-4">
                <div className="flex items-center justify-between mx-auto py-4">
                    {/* Logo Button */}
                    <button>
                        <img src="./images/logo.svg" aria-hidden="true"/>
                        <span className="sr-only">Logo</span>
                    </button>
                    {/* Menu Icon Button */}
                    <button onClick={openMobileMenu}>
                        <Bars4Icon className="w-6 h-6" aria-hidden="true"/>
                        <span className="sr-only">Menu Button</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu isOpen={mobileMenuIsOpened} closeMobileMenu={closeMobileMenu} openMobileMenu={openMobileMenu}/>

        </>
    )

}