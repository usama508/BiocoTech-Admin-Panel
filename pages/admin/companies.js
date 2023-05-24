/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import companies from "../../Components/CompaniesData";

import axios from "axios";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { MdHome } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TbCheckbox } from "react-icons/tb";
import { ImLink } from "react-icons/im";
import { CiLogout } from "react-icons/ci";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { withProtected } from "../../context/Route";
import { apiUrl } from "../../constants";



function comp() {
  const [company, setCompany] = useState([]);
  const [staff, setStaff] = useState([])
  const [totalCompany, setTotalCompany] = useState([])
  const [totalStaff, setTotalStaff] = useState([])
  const [totalUnits, setTotalUnits] = useState([])
  const [totalSingleStaff, setTotalSingleStaff] = useState([])
  const [totalSingleUnit, setTotalSingleUnit] = useState([])
  const [query, setQuery] = useState("");
  //console.log(totalCompany.results);


  const router = useRouter();
  const sideBarRef = useRef();



  const { logout } = useAuth();

  if (router.isFallback) {
    return <h3>Loading...</h3>;
  }

  function toogleSideBar() {
    sideBarRef.current.classList.toggle("-translate-x-full");
  }

  {/*const fetchData = async () => {
    await axios.get(`${apiUrl}/api/companies`).then((res) => {
      setCompany(res.data.companies);
      setTotalCompany(res.data)

    });
    await axios.get(`${apiUrl}/api/staff`).then((res) => {

      setTotalStaff(res.data)

    });
    await axios.get(`${apiUrl}/api/units`).then((res) => {

      setTotalUnits(res.data)

    });
    await axios.get(`${apiUrl}/api/staff?company=${company._id}`).then((res) => {

      setTotalSingleStaff(res.data)
      console.log(res.data)

    });
    await axios.get(`${apiUrl}/api/units?company=${company._id}`).then((res) => {

      setTotalSingleUnit(res.data)
      //console.log(res.data)

    });
  };

  useEffect(() => {
    fetchData();

  }, []);*/}






  async function signOut() {
    try {
      await logout();
      router.push("/login");
    } catch {
      console.log("error occured");
    }
  }

  function isActive(route) {
    if (route == router.pathname) {
      return "active";
    } else {
      return "";
    }
  }



  return (
    <>
      <div className="max-h-screen md:sticky md:top-0 z-50 text-white">
        {/* MOBILE SIDEBAR */}
        <div className="bg-cyan-600 md:hidden flex justify-between p-2 items-center sticky top-0 z-30">
          <img className="h-8 w-auto" src="/logo.png" alt="Your Company" />
          <button className="rounded focus:bg-cyan-600" onClick={toogleSideBar}>
            <RxHamburgerMenu size={32} />
          </button>
        </div>
        <div>
          {/* MAIN SIDEBAR */}
          <div
            ref={sideBarRef}
            style={{ position: 'fixed' }}
            className="bg-cyan-600  w-64 space-y-10 px-5 py-7  absolute inset-y-0 left-0 transform -translate-x-full
            md:translate-x-0 z-50 transition duration-200 ease-in-out flex flex-col child:transition-all md:max-h-screen md:min-h-screen  md:top-0"
          >
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <img
                  className="h-8 w-auto "
                  src="/logo.png"
                  alt="Your Company"
                />
              </div>

              <nav className="mt-5 flex-1 space-y-1 bg-cyan-600 px-2">
                {/*<div className={`${isActive('/admin/dashboard')} hover:bg-lime-500 text-white  group flex items-center px-2 py-2 text-sm font-medium rounded-md`}>
                <Link href='/admin/dashboard' >
                  

                    <MdHome className='mr-1 text-white' />
                    Dashboard
                 
                </Link></div>*/}
                <div className="flex">
                  <MdHome className="mr-1 ml-2 text-white text-xl" />
                  <Link href="/" legacyBehavior>
                    <a className="text-white font-thin  hover:text-white group flex items-center px-2 py-2 text-sm -mt-2  rounded-md">

                      Dashboard
                    </a>
                  </Link>
                </div>
                <div
                  className={` ${isActive(
                    "/admin/companies"
                  )} bg-lime-500 hover:bg-lime-500 group flex items-center w-52 h-9 px-2 py-2 text-sm font-medium rounded-md `}
                >
                  <HiBuildingOffice2 className="mr-1 text-xl text-white" />
                  <h3 className="text-base ml-2 text-white group-hover:text-white font-thin ">
                    <Link href="/admin/companies">Companies</Link>
                  </h3>
                </div>
                <div className="flex">
                  < TbCheckbox className="mr-1 ml-2 text-white text-xl" />
                  <Link href="/admin/checklist" legacyBehavior>
                    <a className="text-white font-thin  hover:text-white group flex items-center px-2 py-2 text-sm -mt-2  rounded-md">

                      Checklists
                    </a>
                  </Link></div>
                <div className="flex">
                  <ImLink className="mr-1 ml-2 text-white text-xl" />
                  <Link href="/admin/links" legacyBehavior>
                    <a className="text-white font-thin  hover:text-white group flex items-center px-2 py-2 text-sm -mt-2  rounded-md">

                      Links
                    </a>
                  </Link></div>
              </nav>

              <div className="flex flex-shrink-0   border-t  border-lime-500 p-4 ">
                <div className="flex items-center ">
                  <div className="bg-lime-500 h-9 w-9 rounded-full">
                    <button onClick={signOut}>
                      <CiLogout className=" ml-2 mt-2 text-xl text-white " />
                    </button>
                  </div>
                  <div className="ml-3 ">
                    <p className="text-sm font-thin text-white group-hover:text-white ">
                      Log Out
                    </p>

                  </div> {/*<p className="text-xs font-light  text-white group-hover:text-gray-700">(you will be loged out of your account)</p>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <main className="flex-1">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <div className="">
                <div className="mx-auto flex flex-col md:px-8 xl:px-0 mt-5">
                  <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-cyan-400 bg-white">
                    <div className="flex flex-1 justify-between px-4 md:px-0">
                      <div className="flex flex-1">
                        <form
                          className="flex w-full md:ml-0"
                          action="#"
                          method="GET"
                        >
                          <label
                            htmlFor="search-field"
                            className="sr-only font-light text-cyan-400"
                          >
                            Search Company
                          </label>
                          <div className="relative w-full text-cyan-400 focus-within:text-cyan-600">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                              <MagnifyingGlassIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </div>
                            <input
                              id="search-field"
                              onChange={(e) => setQuery(e.target.value)}
                              className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 font-abc focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                              placeholder="Search Company"
                              type="search"
                              name="search"
                            />
                          </div>

                        </form>

                      </div>
                    </div>
                    <div className="ml-4 flex items-center  md:ml-6">
                      <button
                        type="button"
                        className=" inline-flex items-center font-light rounded-md border border-transparent bg-cyan-600   md:px-10 py-3  text-xs text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 font-abc"
                      >
                        <Link href={"/admin/addCompany"}>Add New Company</Link>
                      </button>

                    </div>
                  </div>

                  <main className="flex-1 md:-ml-10">
                    <div className="py-6">
                      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        {/*<h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>*/}
                      </div>
                      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <div className="py-4">
                          {/*<div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>*/}
                        </div>

                        <div className="px-4 sm:px-6 py-4 sm:py-6 lg:px-8 lg:py-8 rounded-lg bg-gray-100">
                          <div className="sm:flex sm:items-center  ">
                            <div className="sm:flex-auto font-Semilight">
                              <h1 className="   text-black font-thin">
                                List of all the Companies
                              </h1>
                              <p className="mt-2 text-sm text-gray-500 font-light">
                                These are the list of all the companies listed
                                with BIOCo Tech
                              </p>
                            </div>
                          </div>
                          <div className="mt-8 flex flex-col">
                            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                  <table className="min-w-full divide-y divide-gray-300 ">
                                    <thead className="bg-lime-500 font-light">

                                      <tr>
                                        <th
                                          scope="col"
                                          className=" py-3.5 pl-4 pr-3 text-left text-sm   text-white sm:pl-6 font-light"
                                        >
                                          Company     {<span className="ml-5">(4)</span>}

                                        </th>
                                        <th
                                          scope="col"
                                          className=" px-3 py-3.5 font-abc text-left text-sm  text-white font-light"
                                        >
                                          Staff Member {<span className="ml-5">(6787)</span>}
                                        </th>
                                        <th
                                          scope="col"
                                          className="px-3 py-3.5 font-abc text-left text-sm  text-white font-light"
                                        >
                                          Total Units {<span className="ml-5">(6790)</span>}
                                        </th>

                                        <th
                                          scope="col"
                                          className="relative py-3.5 font-abc pl-3 pr-4 sm:pr-6 text-right text-white font-light"
                                        >
                                          Action
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-lime-50">

                                      {companies
                                        .filter((user) =>
                                          user.company

                                            .toLowerCase()
                                            .includes(query)

                                        )
                                        .map((company) => (

                                          <tr key={company.company}>

                                            <td className="whitespace-nowrap font-light py-4 pl-4 pr-3 text-sm font-light text-gray-500 sm:pl-6">

                                              
                                                {company.company}
                                              
                                            </td>
                                            <td className="whitespace-nowrap font-abc px-3 py-4 text-sm font-light text-gray-500">
                                             
                                                {company.staff}
                                              

                                            </td>
                                            <td className="whitespace-nowrap px-3 font-light py-4 text-sm  w-[560] h-[55] text-gray-900">
                                              
                                                {company.units}
                                             

                                            </td>
                                            <td className="font-light relative whitespace-nowrap py-4 font-abc pl-3 pr-4 text-cyan-600  text-right text-sm  sm:pr-6">
                                              <Link
                                                href={`/companies/${company._id}`}
                                              >
                                                Go to details
                                              </Link>
                                            </td>
                                          </tr>
                                        ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default withProtected(comp);
