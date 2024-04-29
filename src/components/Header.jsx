import { Bars4Icon } from "@heroicons/react/24/outline"

export function Header() {
    return (
        <div className="flex items-center justify-between max-w-96 mx-auto py-4">
            <button>
                <img src="./images/logo.svg" aria-hidden="true"/>
                <span className="sr-only">Logo</span>
            </button>
            <button>
                <Bars4Icon className="w-6 h-6" aria-hidden="true"/>
                <span className="sr-only">Menu Button</span>
            </button>
        </div>
    )
}