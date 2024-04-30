import { Bars4Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Dialog } from "@headlessui/react"
import { useState } from "react"

export function Header() {
    let [isOpen, setIsOpen] = useState(false)
    return (
        <>
            {/* Header */}
            <div className="flex items-center justify-between max-w-sm mx-auto py-4 xsm:max-w-md">
                <button>
                    <img src="./images/logo.svg" aria-hidden="true"/>
                    <span className="sr-only">Logo</span>
                </button>
                <button onClick={() => setIsOpen(true)}>
                    <Bars4Icon className="w-6 h-6" aria-hidden="true"/>
                    <span className="sr-only">Menu Button</span>
                </button>
            </div>

            {/* Dialog (headlessui) */}
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="fixed inset-0 bg-black/30 -z-10" aria-hidden="true" />
                <Dialog.Panel className={"bg-white absolute inset-0 left-32 px-6 pt-16"}>
                    <div className="flex flex-col items-start gap-y-4">
                        <button className="flex items-center justify-between min-w-28">
                            <span className="sr-only">Navigation Link: Features</span>
                            <span className="text-slate-600 font-semibold text-lg">Features</span>
                            <ChevronDownIcon className="w-4 h-4 text-slate-600" aria-hidden="true"/>
                        </button>
                        <button className="flex items-center justify-between min-w-28">
                            <span className="sr-only">Navigation Link: Company</span>
                            <span className="text-slate-600 font-semibold text-lg">Company</span>
                            <ChevronDownIcon className="w-4 h-4 text-slate-600" aria-hidden="true"/>
                        </button>
                        <button className="text-slate-600 font-semibold text-lg">Careers</button>
                        <button className="text-slate-600 font-semibold text-lg">About</button>
                    </div>
                    <div className="flex flex-col items-center gap-y-4">
                        <button className="text-slate-600 font-semibold text-lg">Login</button>
                        <button className="text-slate-600 font-semibold text-lg border-2 border-slate-600 rounded-2xl w-full py-2">Register</button>
                    </div>
                    <button onClick={() => setIsOpen(false)}>
                        <span className="sr-only">Close Dialog</span>
                        <XMarkIcon className="w-10 h-10 text-slate-600 absolute right-4 top-4" aria-hidden="true"/>
                    </button>
                </Dialog.Panel>
            </Dialog>
        </>
    )
}




// RWD 

// Code Clean 