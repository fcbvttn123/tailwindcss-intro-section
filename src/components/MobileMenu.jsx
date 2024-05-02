import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Dialog } from "@headlessui/react"
import { MobileMenuFeatureDropdown } from "./MobileMenuFeatureDropdown"

export function MobileMenu({isOpen, closeMobileMenu}) {
    return (
        <Dialog open={isOpen} onClose={closeMobileMenu}>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/30 -z-10" aria-hidden="true" />
            {/* Mobile Menu */}
            <Dialog.Panel className={"bg-white absolute inset-0 left-32 px-6 pt-16"}>
                {/* Container: Features, Company, Careers, About */}
                <div className="flex flex-col items-start gap-y-4">
                    <MobileMenuFeatureDropdown />
                    <button className="flex items-center justify-between min-w-28">
                        <span className="sr-only">Navigation Link: Company</span>
                        <span className="text-slate-600 font-semibold text-lg">Company</span>
                        <ChevronDownIcon className="w-4 h-4 text-slate-600" aria-hidden="true"/>
                    </button>
                    <button className="text-slate-600 font-semibold text-lg">Careers</button>
                    <button className="text-slate-600 font-semibold text-lg">About</button>
                </div>
                {/* Container: Login, Register */}
                <div className="flex flex-col items-center gap-y-4">
                    <button className="text-slate-600 font-semibold text-lg">Login</button>
                    <button className="text-slate-600 font-semibold text-lg border-2 border-slate-600 rounded-2xl w-full py-2">Register</button>
                </div>
                {/* X Icon to close the mobile menu */}
                <button onClick={closeMobileMenu}>
                    <span className="sr-only">Close Dialog</span>
                    <XMarkIcon className="w-10 h-10 text-slate-600 absolute right-4 top-4" aria-hidden="true"/>
                </button>
            </Dialog.Panel>
        </Dialog>
    )
}