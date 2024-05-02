import { XMarkIcon } from "@heroicons/react/24/outline"
import { Dialog } from "@headlessui/react"
import { MobileMenuDropdown } from "./MobileMenuDropdown"

const featuresItems = [
    { id: 1, href: '/todolist', label: 'Todo List', iconName: "icon-todo.svg"},
    { id: 2, href: '/calendar', label: 'Calendar', iconName: "icon-calendar.svg"},
    { id: 3, href: '/reminders', label: 'Reminders', iconName: "icon-reminders.svg"},
    { id: 4, href: '/planning', label: 'Planning', iconName: "icon-planning.svg"},
]

const companyItems = [
    { id: 1, href: '/history', label: 'History'},
    { id: 2, href: '/ourteam', label: 'Our Team'},
    { id: 3, href: '/blog', label: 'Blog'},
]

export function MobileMenu({isOpen, closeMobileMenu}) {
    return (
        <Dialog open={isOpen} onClose={closeMobileMenu}>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/30 -z-10" aria-hidden="true" />
            {/* Mobile Menu */}
            <Dialog.Panel className={"bg-white absolute inset-0 left-32 px-6 pt-16"}>
                {/* Container: Features, Company, Careers, About */}
                <div className="flex flex-col items-start gap-y-4">
                    <MobileMenuDropdown menuButton={"Features"} menuItems={featuresItems} />
                    <MobileMenuDropdown menuButton={"Company"} menuItems={companyItems} />
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