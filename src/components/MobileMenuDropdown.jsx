import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline"

export function MobileMenuDropdown(props) {
    return (
        <Menu>
            <Menu.Button className="flex items-center justify-between min-w-28">
                <span className="sr-only">Navigation Link: {props.menuButton}</span>
                <span className="text-slate-600 font-semibold text-lg">{props.menuButton}</span>
                <ChevronDownIcon className="w-4 h-4 text-slate-600" aria-hidden="true"/>
            </Menu.Button>
            <Menu.Items className={"flex flex-col gap-y-2"}>
                {
                    props.menuItems.map(link => (
                        <Menu.Item key={link.id} className="text-slate-600 text-lg">
                            {({active}) => (
                                <a className={`${active && "bg-slate-200"} flex items-center justify-start gap-x-4 px-4 py-2 rounded-2xl cursor-pointer`}> 
                                    {link?.iconName && <img className="min-w-4" src={`./images/${link.iconName}`} /> }
                                    <span>{link.label}</span> 
                                </a>
                            )}
                        </Menu.Item>
                    ))
                }
            </Menu.Items>
        </Menu>
    )
}