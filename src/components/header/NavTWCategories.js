import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './navbar.css';
import './dist/output.css';
import logo from "../../assets/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import CartWidget from './CartWidget';


const navigation = [
  { name: 'HOME', href: '/', current: false },
  { name: 'SUMMER VIBES', href: '/categories/Summer vibes', current: false },
  { name: 'INVIERNITO', href: '/categories/Inviernito', current: false },
  { name: 'IPA', href: '/categories/IPA', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function NavTWCategories({numItems}) {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                
              </div>
              
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                  <img className="block h-8 w-auto lg:hidden" src={logo} alt="Demister Brewing"/>
                  
                  <img className="hidden h-8 w-auto lg:block" src={logo} alt="Demister Brewing"/>
                  </Link>
                  <div className="px-4 text-white font-medium">DEMISTER BREWING</div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                    
                  <div className="flex space-x-4">
                    
                    {navigation.map((item) => (
                      <NavLink key={item.name} to={item.href} className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}>
                        {item.name}
                      </NavLink>

                      /* <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a> */

                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                 


<CartWidget />
                

                {/* Profile dropdown */}
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavTWCategories;