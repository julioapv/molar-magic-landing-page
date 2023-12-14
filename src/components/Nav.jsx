import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

let Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="w-1/3 p-5 flex justify-end items-center">
            <ul className="hidden w-full gap-5 justify-between md:flex">
                <li>Location</li>
                <li>About us</li>
                <li>Testimonies</li>
                <li>Contact us</li>
            </ul>
            <div>
                <button
                onClick={toggleNavBar}
                className='md:hidden w-10'
                >
                {isOpen ? <XMarkIcon /> : <Bars3Icon  />}
                </button>
            </div>

            {isOpen && (
            <div className='flex flex-col items-center basis-full'>
                <li>Location</li>
                <li>About us</li>
                <li>Testimonies</li>
                <li>Contact us</li>
            </div>
            )}
        </nav>
    )
}

export { Nav }
