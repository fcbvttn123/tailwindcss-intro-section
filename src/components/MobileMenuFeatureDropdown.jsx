import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline"

const links = [
    { id: 1, href: '/todolist', label: 'Todo List', iconName: "icon-todo.svg"},
    { id: 2, href: '/calendar', label: 'Calendar', iconName: "icon-calendar.svg"},
    { id: 3, href: '/reminders', label: 'Reminders', iconName: "icon-reminders.svg"},
    { id: 4, href: '/planning', label: 'Planning', iconName: "icon-planning.svg"},
]

export function MobileMenuFeatureDropdown() {
    return (
        <Menu>
            <Menu.Button className="flex items-center justify-between min-w-28">
                <span className="sr-only">Navigation Link: Features</span>
                <span className="text-slate-600 font-semibold text-lg">Features</span>
                <ChevronDownIcon className="w-4 h-4 text-slate-600" aria-hidden="true"/>
            </Menu.Button>
            <Menu.Items className={"flex flex-col gap-y-2"}>
                {
                    links.map(link => (
                        <Menu.Item key={link.id} className="text-slate-600 text-lg">
                            {({active}) => (<a className={`${active && "bg-slate-200"} flex items-center justify-start gap-x-4 px-4 py-2 rounded-2xl cursor-pointer`}> <img className="min-w-4" src={`./images/${link.iconName}`} /> <span>{link.label}</span> </a>)}
                        </Menu.Item>
                    ))
                }
            </Menu.Items>
        </Menu>
    )
}