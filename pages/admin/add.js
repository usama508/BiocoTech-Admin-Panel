/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import company from '../../Components/Company'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { RiDeleteBin5Line } from 'react-icons/ri'
import staff from '../../Components/StaffData'
import Link from 'next/link'

//react-icon imports
import { IoIosArrowBack } from 'react-icons/io';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function add() {
    const [enabled, setEnabled] = useState(false)
    return (
        <>

<button className="text-lg ml-5 mt-5 font-medium leading-6 text-gray-900" ><span className=' text-md'> <Link className='flex justify-center flex-row items-center' href='/admin/companies'><IoIosArrowBack />Back</Link></span></button>
    
            <div className='flex p-4 px-4 py-4'>

                <div className='ml-5 mr-5 mt-5 mb-5 w-1/2'>
                    <div >


                    </div>
                    <div className="mt-5  border-gray-200">
                        <dl className="divide-y divide-lime-200">
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Company Name</dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <span className="flex-grow">Pizza Hut</span>
                                    <span className="ml-4 flex-shrink-0">
                                        <button
                                            type="button"
                                            className="rounded-md bg-white  text-sm font-thin text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                        >
                                            Edit
                                        </button>
                                    </span>
                                </dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Company ID</dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <span className="flex-grow">8914</span>
                                    <span className="ml-4 flex-shrink-0">
                                        <button
                                            type="button"
                                            className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                        >
                                            Edit
                                        </button>
                                    </span>
                                </dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Company Pin</dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <span className="flex-grow">3456</span>
                                    <span className="ml-4 flex-shrink-0">
                                        <button
                                            type="button"
                                            className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                        >
                                            Edit
                                        </button>
                                    </span>
                                </dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Status</dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <span className="flex-grow">Action</span>
                                    <span className="ml-4 flex-shrink-0">
                                        <Switch
                                            checked={enabled}
                                            onChange={setEnabled}
                                            className={classNames(
                                                enabled ? 'bg-lime-600' : 'bg-gray-200',
                                                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2'
                                            )}
                                        >
                                            <span className="sr-only">Use setting</span>
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    enabled ? 'translate-x-5' : 'translate-x-0',
                                                    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                )}
                                            />
                                        </Switch>
                                    </span>
                                </dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Web/Link(options)</dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <span className="flex-grow">www.pizzahut.com</span>

                                </dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">About/Other details</dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <span className="flex-grow">
                                        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                        qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure
                                        nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                    </span>
                                    <span className="ml-4 flex-shrink-0">
                                        <button
                                            type="button"
                                            className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                        >
                                            Edit
                                        </button>
                                    </span>
                                </dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                            <div className="flex w-0 flex-1 items-center">

                                                <span className="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
                                            </div>
                                            <div className="ml-4 flex flex-shrink-0 space-x-4">
                                                <button
                                                    type="button"
                                                    className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                                >
                                                    Update
                                                </button>
                                                <span className="text-gray-300" aria-hidden="true">
                                                    |
                                                </span>
                                                <button
                                                    type="button"
                                                    className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </li>
                                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                            <div className="flex w-0 flex-1 items-center">

                                                <span className="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
                                            </div>
                                            <div className="ml-4 flex flex-shrink-0 space-x-4">
                                                <button
                                                    type="button"
                                                    className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                                >
                                                    Update
                                                </button>
                                                <span className="text-gray-300" aria-hidden="true">
                                                    |
                                                </span>
                                                <button
                                                    type="button"
                                                    className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                                >
                                                    Remove
                                                </button>
                                            </div>

                                        </li>
                                    </ul>

                                </dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 border-b border-gray-200 sm:gap-4 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Unit</dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <span className="flex-grow"> <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                                Options
                                                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Account settings
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Support
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                License
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <form method="POST" action="#">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <button
                                                                    type="submit"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block w-full px-4 py-2 text-left text-sm'
                                                                    )}
                                                                >
                                                                    Sign out
                                                                </button>
                                                            )}
                                                        </Menu.Item>
                                                    </form>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu></span>
                                    <span className="  flex flex-shrink-0 space-x-4">
                                        <button
                                            type="button"
                                            className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                        >
                                            Update
                                        </button>
                                        <span className="text-gray-300 mt-2" aria-hidden="true">
                                            |
                                        </span>
                                        <button
                                            type="button"
                                            className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                        >
                                            Remove
                                        </button>
                                    </span>


                                </dd>
                                <dt className="text-sm font-medium text-gray-500">Unit ID</dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">8915</dd>
                                <dt className="text-sm font-medium text-gray-500">Unit Details</dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0"> Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                    qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure
                                    nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
                            </div>

                         

                            <div>
                                <button
                                    type="button"
                                    className="inline-flex mt-2 items-center float-right mb-3 rounded-md border border-transparent bg-cyan-600 px-2 py-2 text-xs font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                >
                                    Add New Unit
                                </button>
                            </div>
                        </dl>
                    </div>


                </div>
                <div className="px-4 sm:px-6 -mt-10  lg:px-8 w-3/4 float-right">
                    <div className=" z-10 flex h-16 flex-shrink-0  mb-5 border-b border-cyan-400 bg-white">

                        <div className="flex flex-1 border border-transparent  justify-between mt-0 sm:px-2 px-4 md:px-0">
                            <div className="flex flex-1">
                                <form className="flex w-full md:ml-0" action="#" method="GET">
                                    <label htmlFor="search-field" className="sr-only text-cyan-400">
                                        Search Company
                                    </label>
                                    <div className="relative w-full text-cyan-400  focus-within:text-cyan-600">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="search-field"
                                            className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                                            placeholder="Search Company"
                                            type="search"
                                            name="search"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>


                    <div className="px-4 sm:px-6 py-4 sm:py-6 lg:px-8 lg:py-8 rounded-lg bg-gray-100">
                        <div className="sm:flex sm:items-center ">
                            <div className="sm:flex-auto">
                                <h1 className="text-xl font-semibold text-gray-900">Pizza Hut</h1>
                                <p className="mt-2 text-sm text-gray-700">
                                    Below the details of this company
                                </p>
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button>
                                    <RiDeleteBin5Line />
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col">
                            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-300">
                                            <thead className="bg-lime-500 ">
                                                <tr>
                                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                                                        Staff
                                                        (4)
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                        Registered Data & Time
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                        Ibs Processes
                                                        (125,675)
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                        MTCO
                                                        (5785)
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-lime-50">
                                                {staff.map((person) => (
                                                    <tr key={person.name}>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                            {person.name}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.date}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.ibs}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.mtco}</td>

                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> </div>
            </div>
        </>
    )
}

export default add