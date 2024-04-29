import { Bars4Icon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { Dialog } from "@headlessui/react"
import { useState } from "react"

export function Header() {
    let [isOpen, setIsOpen] = useState(false)
    return (
        <>
            {/* Header */}
            <div className="flex items-center justify-between max-w-96 mx-auto py-4">
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
                <Dialog.Panel>
                    <div>
                        <button className="flex items-center justify-between gap-x-4">
                            <span className="sr-only">Navigation Link: Features</span>
                            <span className="text-slate-600 font-semibold text-lg">Features</span>
                            <ChevronDownIcon className="w-4 h-4 text-slate-600" aria-hidden="true"/>
                        </button>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    )
}