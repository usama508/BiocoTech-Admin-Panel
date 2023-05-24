/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TbCheckbox } from "react-icons/tb";
import { ImLink } from "react-icons/im";
import { MdHome } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { CiLogout } from "react-icons/ci";
import { useRouter } from "next/router";
import Chart from './Chart'
import { RiPhoneFill } from 'react-icons/ri'
import { BsEnvelopeFill } from 'react-icons/bs'
import Stats from "./Stats";
import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { withProtected } from "../context/Route";
import { apiUrl } from "../constants";
import dashboard from "./DashboardData";



function SideBars({ auth }) {
  const router = useRouter();
  const sideBarRef = useRef();
  const { logout } = auth;
  const [company, setCompany] = useState([]);
  const [staff, setStaff] = useState([]);
  const [data, setData] = useState([]);
  const [totalUnits, setTotalUnits] = useState([])
  const [totalProcess, setTotalProcess] = useState([])

  function toogleSideBar() {
    sideBarRef.current.classList.toggle("-translate-x-full");
  }

  async function signOut() {
    try {
      await logout();
      router.push("/login");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  }

  function isActive(route) {
    if (route == router.pathname) {
      return "active";
    } else {
      return "";
    }
  }
  //fetch data

  {/*useEffect(() => {
    const fetchCompany = async () => {
      await axios.get(`${apiUrl}/api/companies`).then((res) => {
        setCompany(res.data.companies);
        // setChange(res.data.reverse())
      });
      await axios.get(`${apiUrl}/api/staff`).then((res) => {
        setStaff(res.data.staff);
        // setChange(res.data.reverse())
      });
    };
    const fetchData = async () => {
      await axios.get(`${apiUrl}/api/units`).then((res) => {

        setTotalUnits(res.data)

      });
    };
    const fetch = async () => {
      await axios.get(`${apiUrl}/api/staff`).then((res) => {

        setTotalProcess(res.data.staff)

      });
    };
    fetchCompany();
    fetchData()
    fetch()
  }, []);

  useEffect(() => {
    const arr = [];
    if (company.length > 0 && staff.length > 0) {
      staff.map((item, index) => {
        company.map((s, i) => {
          let obj = {};

          obj["companyName"] = s.companyName
          obj["staffName"] = item.staffName

          arr.push(obj)
        })


      })
      setData(arr)
    }

  }, [staff, company])*/}





  {
    /*const fetchStaff = async () => {
    await axios.get("${apiUrl}/api/companies/staff").then((res) => {
      setStaff(res.data.reverse());
      // setChange(res.data.reverse())
      
    });
  };*/
  }




  return (
    <>
      <div className="max-h-screen  md:absolute md:top-0 z-50 text-white ">
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
            className="bg-cyan-600 font-Italic w-64 space-y-10 px-5 py-7  absolute inset-y-0 left-0 transform -translate-x-full
         md:translate-x-0 z-50 transition duration-200 ease-in-out flex flex-col child:transition-all md:max-h-screen md:min-h-screen  md:top-0"
          >
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt="Your Company"
                />
              </div>

              <nav className="mt-5 flex-1 space-y-1 bg-cyan-600 px-2 ">
                {/*<div className={`${isActive('/admin/dashboard')} hover:bg-lime-500 text-white  group flex items-center px-2 py-2 text-sm font-medium rounded-md`}>
                <Link href='/admin/dashboard' >
                  

                    <MdHome className='mr-1 text-white' />
                    Dashboard
                 
                </Link></div>*/}<div
                  className={` ${isActive(
                    "/admin/dashboard"
                  )}  bg-lime-500 hover:bg-lime-500 group flex items-center w-52 h-9 px-2 py-2 text-sm  rounded-md `}
                >
                  <MdHome className="mr-1 text-xl text-white" />
                  <h3 className="text-base ml-2 text-white group-hover:text-white font-thin">
                    <Link href="/">Dashboard</Link>
                  </h3>
                </div >
                <div className="flex ">
                  <HiBuildingOffice2 className="mr-1 ml-2 text-white text-xl" />
                  <Link href="/admin/companies" legacyBehavior>
                    <a className="text-white font-thin  hover:text-white group flex items-center px-2 py-2 text-sm -mt-2  rounded-md">

                      Companies
                    </a>
                  </Link>
                </div>
                <div className="flex ">
                  <TbCheckbox className="mr-1 ml-2 text-white text-xl" />
                  <Link href="/admin/checklist" legacyBehavior>
                    <a className="text-white  hover:text-white  group flex items-center px-2 py-2 text-sm font-thin rounded-md -mt-2">

                      Check list
                    </a>
                  </Link></div>
                <div className="flex ">
                  <ImLink className="mr-1 ml-2 text-white text-xl" />
                  <Link href="/admin/links" legacyBehavior>
                    <a className="text-white  hover:text-white font-abc group flex items-center px-2 py-2 text-sm font-thin rounded-md -mt-2">

                      Links
                    </a>
                  </Link></div>
              </nav>

              <div className="flex flex-shrink-0 border-t  border-lime-500 p-4">
                <div className="flex items-center font-abc ">
                  <div className="bg-lime-500 h-9 w-9 rounded-full">
                    <button onClick={signOut}>
                      <CiLogout className=" ml-2 mt-2 text-xl text-white " />
                    </button>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm -mt-4 font-thin text-white group-hover:text-white ">
                      Log Out
                    </p>
                    {/*<p className="text-xs font-medium text-white group-hover:text-gray-700">(you will be loged out of your account)</p>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col md:pl-64 ">
          <main className="flex-1 ml-8">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                {/*<h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>*/}
              </div >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div className='flex'>
                  <div className=" w-32 ">
                    {/*<div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>*/}
                    <Chart />
                  </div>
                  <div className="  ml-5 lg:ml-32 mt-5">
                    <p className='text-black font-normal'>20</p>

                    <p className="text-gray-500 font-light">units operating worldwide</p>


                    <p className='text-black md:mt-2 font-normal'>40</p>

                    <p className="text-gray-500 font-light">Orgainc waste processed</p>
                    <p className='text-black md:mt-2 font-light'>900</p>

                    <p className="text-gray-500 font-light">MTCO 2 Diverted</p>

                  </div>
                </div>
                <div className="lg:h-28 px-4  py-4 sm:px-6  justify-center sm:py-6 mt-5 lg:px-8 lg:py-8 rounded-lg bg-gray-100">
                  <Stats />
                </div>
                <div className="px-4 sm:px-6 py-4 sm:py-6 mt-5 lg:px-8 lg:py-8 rounded-lg bg-gray-100">
                  <div className="sm:flex sm:items-center  ">
                    <div className="sm:flex-auto ">
                      <h1 className="  text-black font-thin">
                        Redeem Points
                      </h1>
                      <p className="mt-2 text-sm text-gray-500 font-light">
                        These are the staff people who have hightest redeem
                        points
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-lime-500">
                              <tr>
                                <th
                                  scope="col"
                                  className="text-left
                                    text-sm text-white sm:pl-6 font-light"
                                >
                                  Staff Member
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 font-light text-left text-sm text-white"
                                >
                                  Company
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 font-light text-left text-sm text-white"
                                >
                                  Redeem Points
                                </th>

                                <th
                                  scope="col"
                                  className="relative font-light py-3.5 pl-3 pr-4 sm:pr-6 text-right text-white"
                                >
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-lime-50">

                              {dashboard.map((person) => (
                                <tr key={person.member}>

                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-light font-abc  text-gray-500 sm:pl-6">
                                    <div className="flex -ml-5">
                                      <RiPhoneFill className="ml-2 text-cyan-600 " />
                                      <BsEnvelopeFill className="ml-2 text-cyan-600 bg-white " />
                                      <div className="ml-2 font-light">
                                        {person.staff}</div>
                                    </div>

                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm font-light text-gray-500  ">
                                    {person.company}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm  w-[560] h-[55] text-gray-900 font-thin">
                                    {person.points}
                                  </td>
                                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-cyan-600 text-right text-sm font-thin sm:pr-6 font-abc ">
                                    {person.action}
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
    </>
  );
}
export default withProtected(SideBars);

{/*export async function getServerSideProps() {
  
  const staff = await fetch(`${apiUrl}/api/staff`);
  
 
  console.log(units);
  const staffData = await staff.json();
  return {
      props: {
          staff: staffData,
        
          // data:{}
      },
  };
}*/}
