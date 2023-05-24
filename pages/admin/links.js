
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TbCheckbox } from "react-icons/tb";
import { ImLink } from "react-icons/im";
import { MdHome } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { CiLogout } from "react-icons/ci";
import { useRouter } from "next/router";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { apiUrl } from "../../constants";

function links({ initialData }) {
  const router = useRouter();
  const sideBarRef = useRef();
  const { logout } = useAuth();
if (router.isFallback) {
    return <h3>Loading...</h3>;
  }
  
  const [links,setLinks]=useState([])
//links edit check
  const [check_companyPolicy_edit, set_check_companyPolicy_edit] = useState({
   companyPolicy: '',
    edit: false,
  });
  const [check_companyConditions_edit, set_check_companyConditions_edit] = useState({
    companyConditions: '',
    edit: false,
  });
  const [check_companyFaqs_edit, set_check_companyFaqs_edit] = useState({
    comapnyFaqs: '',
    edit: false,
  });
  const [check_staffPolicy_edit, set_check_staffPolicy_edit] = useState({
    staffPolicy: '',
    edit: false,
  });
  const [check_staffConditions_edit, set_check_staffConditions_edit] = useState({
    staffConditions: '',
    edit: false,
  });
  const [check_staffFaqs_edit, set_check_staffFaqs_edit] = useState({
    staffFaqs: '',
    edit: false,
  });
  const [check_visitWebsite_edit, set_check_visitWebsite_edit] = useState({
    visitWebsite: '',
    edit: false,
  });

  //links edit fields
  const [get_companyPolicy_after_edit, set_companyPolicy_after_edit] = useState();
  const [get_companyConditions_after_edit, set_companyConditions_after_edit] = useState();
  const [get_companyFaqs_after_edit, set_companyFaqs_after_edit] = useState();
  const [get_staffPolicy_after_edit, set_staffPolicy_after_edit] = useState();
  const [get_staffConditions_after_edit, set_staffConditions_after_edit] = useState();
  const [get_staffFaqs_after_edit, set_staffFaqs_after_edit] = useState();
  const [get_visitWebsite_after_edit, set_visitWebsite_after_edit] = useState();

  

  //Get Request
  const fetchLink = async () => {
    console.log("hi rfresh");
    await axios.get(`${apiUrl}/api/links`).then((res) => {
      console.log(res.data);
      setLinks(res.data)
     
      
    });
  };

  //Put Request link

  const sendPutRequest = async () => {
    console.log("putt??? ", links);
    try {
      axios
        .put(`${apiUrl}/api/links`, {
          
          companyPolicy:get_companyPolicy_after_edit,
          companyConditions:get_companyConditions_after_edit,
          companyFaqs:get_companyFaqs_after_edit,
          staffPolicy:get_staffPolicy_after_edit,
          staffFaqs: get_staffFaqs_after_edit,
          staffConditions:get_staffConditions_after_edit,
          visitWebsite:get_visitWebsite_after_edit
        })
        .then(async (res) => {
          console.log(res);
          fetchLink();
        });
    } catch (error) {
      console.log("errorsss: ", error.message);
    }
  };

  

  useEffect(() => {
    fetchLink();
    //console.log("company policy? ", companyPolicy);
  }, []);

  function toogleSideBar() {
    sideBarRef.current.classList.toggle("-translate-x-full");
  }

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
      <div className="max-h-screen md:sticky  md:top-0 z-50 text-white">
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
            className="bg-cyan-600  w-64 space-y-10 px-5 py-7  absolute inset-y-0 left-0 transform -translate-x-full
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
              <nav className="mt-5 flex-1 space-y-1 bg-cyan-600 px-2">
               
                <div className="flex">
                  <MdHome className="mr-1 ml-2 text-white text-xl" />
                  <Link href="/" legacyBehavior>
                    <a className="text-white font-thin  hover:text-white group flex items-center px-2 py-2 text-sm -mt-2  rounded-md">

                      Dashboard
                    </a>
                  </Link></div>
                <div className="flex">
                  <HiBuildingOffice2 className="mr-1 ml-2 text-white text-xl" />
                  <Link href="/admin/companies" legacyBehavior>
                    <a className="text-white font-thin  hover:text-white group flex items-center px-2 py-2 text-sm -mt-2  rounded-md">

                      Companies
                    </a>
                  </Link></div>
                <div className="flex">
                  <TbCheckbox className="mr-1 ml-2 text-white text-xl" />
                  <Link href="/admin/checklist" legacyBehavior>
                    <a className="text-white font-thin  hover:text-white group flex items-center px-2 py-2 text-sm -mt-2  rounded-md">

                      Check list
                    </a>
                  </Link>
                </div>
                <div
                  className={` ${isActive(
                    "/admin/links"
                  )}  bg-lime-500 hover:bg-lime-500 group flex items-center w-52 h-9 px-2 py-2 text-sm font-medium rounded-md`}
                >
                  <ImLink className="mr-1  text-white text-xl" />
                  <h3 className="text-base ml-2 text-white group-hover:text-white font-thin ">
                    <Link href="/admin/links">Links</Link>
                  </h3>
                </div>
              </nav>

              <div className="flex flex-shrink-0 border-t border-lime-500 p-4">
                <div className="flex items-center">
                  <div className="bg-lime-500 h-9 w-9 font-abc rounded-full">
                    <button onClick={signOut}>
                      <CiLogout className="ml-2 mt-2 text-xl text-white  " />
                    </button>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-thin text-white group-hover:text-white ">
                      Log Out
                    </p>
                    {/*<p className="text-xs font-medium text-white group-hover:text-gray-700">(you will be loged out of your account)</p>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col md:pl-64  ">
          <div className="overflow-hidden bg-gray-100 ml-5 mt-5 mr-5 shadow sm:rounded-lg">
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  
                  <dt className="  text-sm font-light text-black">
                    Website
                    
                  </dt>

                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0">
                    <label className="flex font-abc ">Website</label>
                    <ul
                      role="list"
                      className="divide-y mt-2 divide-white p-0 rounded-md border bg-white border-white shadow-sm"
                    >
                      <li className="flex items-center justify-between p-2 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        {check_visitWebsite_edit.visitWebsite === null ? (
                        `${links.visitWebsite}`
                      ) : check_visitWebsite_edit.visitWebsite !== links.visitWebsite ? (
                        `${links.visitWebsite}`
                      ) : check_visitWebsite_edit.visitWebsite === links.visitWebsite &&
                        !check_visitWebsite_edit.edit ? (
                        `${links.visitWebsite}`
                      ) : (
                        <input
                          type="email"
                          className="block w-full rounded-md  border-gray-300 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                          value={get_visitWebsite_after_edit}
                          defaultValue={links.visitWebsite}
                          onChange={(e) => set_visitWebsite_after_edit(e.target.value)}
                        />
                      )}
                          
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                              id={links.visitWebsite}
                              key={links.visitWebsite}
                              onClick={(s) => {
                               
                                if (check_visitWebsite_edit.visitWebsite == null) {
                                 
                                  set_check_visitWebsite_edit({
                                    visitWebsite: links.visitWebsite,
                                    edit: true,
                                  });
                                } else if (check_visitWebsite_edit.visitWebsite === links.visitWebsite) {
                                 
                                  set_check_visitWebsite_edit({
                                    visitWebsite: null,
                                    edit: false,
                                  });
                                } else {
                                
                                  set_check_visitWebsite_edit({
                                    visitWebsite: null,
                                    edit: false,
                                  });
                                }
      
                                // focusUid();
                              }}
                              type="button"
                              className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                            >
                              <div>
                                {check_visitWebsite_edit.visitWebsite=== null ? (
                                  "Update"
                                ) : check_visitWebsite_edit.visitWebsite=== links.visitWebsite &&
                                  check_visitWebsite_edit.edit ? (
                                  <button
                                    type="button"
                                    onClick={() => sendPutRequest()}
                                  >
                                    Update
                                  </button>
                                ) : (
                                  "Update"
                                )}
                              </div>
                          </button>
                         
                        </div>
                      </li>
                    </ul>
               
                    

                  
                  
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      <div>
        <div className="flex flex-1 flex-col md:pl-64  ">
          <div className="overflow-hidden bg-gray-100 ml-5 mt-5 mr-5 shadow sm:rounded-lg">
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  
                  <dt className="  text-sm font-light text-black">
                    Companies
                    <p className="font-thin">
                    Attach Links.The links will you attach will appear for the companies
                  </p>
                  </dt>

                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0">
                    <label className="flex font-abc ">Privacy Policy</label>
                    <ul
                      role="list"
                      className="divide-y mt-2 divide-white p-0 rounded-md border bg-white border-white shadow-sm"
                    >
                      <li className="flex items-center justify-between p-2 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        {check_companyPolicy_edit.companyPolicy === null ? (
                        `${links.companyPolicy}`
                      ) : check_companyPolicy_edit.companyPolicy !== links.companyPolicy ? (
                        `${links.companyPolicy}`
                      ) : check_companyPolicy_edit.companyPolicy === links.companyPolicy &&
                        !check_companyPolicy_edit.edit ? (
                        `${links.companyPlocy}`
                      ) : (
                        <input
                          type="email"
                          className="block w-full rounded-md  border-gray-300 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                          value={get_companyPolicy_after_edit}
                          defaultValue={links.companyPolicy}
                          onChange={(e) => set_companyPolicy_after_edit(e.target.value)}
                        />
                      )}
                          
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                              id={links.companyPlocy}
                              key={links.comapnyPolicy}
                              onClick={(s) => {
                               
                                if (check_companyPolicy_edit.companyPolicy == null) {
                                 
                                  set_check_companyPolicy_edit({
                                    companyPolicy: links.companyPolicy,
                                    edit: true,
                                  });
                                } else if (check_companyPolicy_edit.companyPolicy === links.companyPolicy) {
                                 
                                  set_check_companyPolicy_edit({
                                    companyPolicy: null,
                                    edit: false,
                                  });
                                } else {
                                
                                  set_check_companyPolicy_edit({
                                    companyPolicy: null,
                                    edit: false,
                                  });
                                }
      
                                // focusUid();
                              }}
                              type="button"
                              className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                            >
                              <div>
                                {check_companyPolicy_edit.companyPolicy=== null ? (
                                  "Update"
                                ) : check_companyPolicy_edit.companyPolicy=== links.companyPolicy &&
                                  check_companyPolicy_edit.edit ? (
                                  <button
                                    type="button"
                                    onClick={() => sendPutRequest()}
                                  >
                                    Update
                                  </button>
                                ) : (
                                  "Update"
                                )}
                              </div>
                          </button>
                         
                        </div>
                      </li>
                    </ul>
                    <label className="flex mt-4 font-abc">Terms & Conditions</label>
                    <ul
                      role="list"
                      className="divide-y  divide-white mt-2 p-0 rounded-md border bg-white border-white shadow-sm"
                    >
                      <li className="flex items-center justify-between p-2 text-sm">
                        
                        <div className="flex w-0 flex-1 items-center">
                        {check_companyConditions_edit.companyConditions === null ? (
                        `${links.companyConditions}`
                      ) : check_companyConditions_edit.companyConditions !== links.companyConditions ? (
                        `${links.companyConditions}`
                      ) : check_companyConditions_edit.companyConditions === links.companyConditions &&
                        !check_companyConditions_edit.edit ? (
                        `${links.companyConditions}`
                      ) : (
                        <input
                          type="email"
                          className="block w-full rounded-md  border-gray-300 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                          value={get_companyConditions_after_edit}
                          defaultValue={links.companyConditions}
                          onChange={(e) => set_companyConditions_after_edit(e.target.value)}
                        />
                      )}
                          
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                              id={links.companyConditions}
                              key={links.companyConditions}
                              onClick={(s) => {
                               
                                if (check_companyConditions_edit.companyConditions == null) {
                                 
                                  set_check_companyConditions_edit({
                                    companyConditions: links.companyConditions,
                                    edit: true,
                                  });
                                } else if (check_companyConditions_edit.companyConditions === links.companyConditions) {
                                 
                                  set_check_companyConditions_edit({
                                    companyConditions: null,
                                    edit: false,
                                  });
                                } else {
                                
                                  set_check_companyConditions_edit({
                                    companyConditions: null,
                                    edit: false,
                                  });
                                }
      
                                // focusUid();
                              }}
                              type="button"
                              className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                            >
                              <div>
                                {check_companyConditions_edit.companyConditions=== null ? (
                                  "Update"
                                ) : check_companyConditions_edit.companyConditions=== links.companyConditions &&
                                  check_companyConditions_edit.edit ? (
                                  <button
                                    type="button"
                                    onClick={() => sendPutRequest()}
                                  >
                                    Update
                                  </button>
                                ) : (
                                  "Update"
                                )}
                              </div>
                          </button>
                         
                        </div>
                      </li>
                    </ul>

                    <label className="flex mt-4 font-abc">FAQs</label>
                    <ul
                      role="list"
                      className="divide-y shadow-sm divide-white mt-2 p-0 rounded-md border bg-white border-white"
                    >
                      <li className="flex items-center justify-between p-2 text-sm">
                        
                        <div className="flex w-0 flex-1 items-center">
                        {check_companyFaqs_edit.companyFaqs === null ? (
                        `${links.companyFaqs}`
                      ) : check_companyFaqs_edit.companyFaqs !== links.companyFaqs ? (
                        `${links.companyFaqs}`
                      ) : check_companyFaqs_edit.companyFaqs === links.companyFaqs &&
                        !check_companyFaqs_edit.edit ? (
                        `${links.companyFaqs}`
                      ) : (
                        <input
                          type="email"
                          className="block w-full rounded-md  border-gray-300 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                          value={get_companyFaqs_after_edit}
                          defaultValue={links.companyFaqs}
                          onChange={(e) => set_companyFaqs_after_edit(e.target.value)}
                        />
                      )}
                          
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                              id={links.companyFaqs}
                              key={links.comapnyFaqs}
                              onClick={(s) => {
                               
                                if (check_companyFaqs_edit.companyFaqs == null) {
                                 
                                  set_check_companyFaqs_edit({
                                    companyFaqs: links.companyFaqs,
                                    edit: true,
                                  });
                                } else if (check_companyFaqs_edit.companyFaqs === links.companyFaqs) {
                                 
                                  set_check_companyFaqs_edit({
                                    companyFaqs: null,
                                    edit: false,
                                  });
                                } else {
                                
                                  set_check_companyFaqs_edit({
                                    companyFaqs: null,
                                    edit: false,
                                  });
                                }
      
                                // focusUid();
                              }}
                              type="button"
                              className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                            >
                              <div>
                                {check_companyFaqs_edit.companyFaqs=== null ? (
                                  "Update"
                                ) : check_companyFaqs_edit.companyFaqs=== links.companyFaqs &&
                                  check_companyFaqs_edit.edit ? (
                                  <button
                                    type="button"
                                    onClick={() => sendPutRequest()}
                                  >
                                    Update
                                  </button>
                                ) : (
                                  "Update"
                                )}
                              </div>
                          </button>
                         
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="flex flex-1 mb-8 flex-col md:pl-64 ">
          <div className="overflow-hidden bg-gray-100 ml-5 mt-5 mr-5 shadow sm:rounded-lg">
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-light text-black ">
                    Staff
                    <p className="font-thin">
                    Attach Links.The links will you 
                    attach will appear for the staff
                  </p>
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0">
                    <label className="flex font-abc ">Privacy Policy</label>
                    <ul
                      role="list"
                      className="divide-y mt-2 shadow-sm divide-white p-0 rounded-md border bg-white border-white"
                    >
                      <li className="flex items-center justify-between p-2 text-sm">
                        <div className="flex w-0 flex-1 items-center">
                        {check_staffPolicy_edit.staffPolicy === null ? (
                        `${links.staffPolicy}`
                      ) : check_staffPolicy_edit.staffPolicy !== links.staffPolicy ? (
                        `${links.staffPolicy}`
                      ) : check_staffPolicy_edit.staffPolicy === links.staffPolicy &&
                        !check_staffPolicy_edit.edit ? (
                        `${links.staffPolicy}`
                      ) : (
                        <input
                          type="email"
                          className="block w-full rounded-md  border-gray-300 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                          value={get_staffPolicy_after_edit}
                          defaultValue={links.staffPolicy}
                          onChange={(e) => set_staffPolicy_after_edit(e.target.value)}
                        />
                      )}
                          
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                              id={links.staffPolicy}
                              key={links.staffPolicy}
                              onClick={(s) => {
                               
                                if (check_staffPolicy_edit.staffPolicy == null) {
                                 
                                  set_check_staffPolicy_edit({
                                    staffPolicy: links.staffPolicy,
                                    edit: true,
                                  });
                                } else if (check_staffPolicy_edit.staffPolicy === links.staffPolicy) {
                                 
                                  set_check_staffPolicy_edit({
                                    staffPolicy: null,
                                    edit: false,
                                  });
                                } else {
                                
                                  set_check_staffPolicy_edit({
                                    staffConditions: null,
                                    edit: false,
                                  });
                                }
      
                                // focusUid();
                              }}
                              type="button"
                              className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                            >
                              <div>
                                {check_staffPolicy_edit.staffPolicy=== null ? (
                                  "Update"
                                ) : check_staffPolicy_edit.staffPolicy=== links.staffPolicy &&
                                  check_staffPolicy_edit.edit ? (
                                  <button
                                    type="button"
                                    onClick={() => sendPutRequest()}
                                  >
                                    Update
                                  </button>
                                ) : (
                                  "Update"
                                )}
                              </div>
                          </button>
                          {/*<span
                            className="text-gray-300 ml-1 font-abc"
                            aria-hidden="true"
                          >
                            |
                          </span>
                          <button
                           
                            type="button"
                            className="rounded-md bg-white ml-1 font-abc font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                          >
                            Remove
                          </button>*/}
                        
                        </div>
                      </li>
                    </ul>

                    <label className="flex mt-4 font-abc">
                      Terms & Conditions
                    </label>
                    <ul
                      role="list"
                      className="divide-y mt-2 divide-white p-0 rounded-md border bg-white border-white shadow-sm"
                    >
                      <li className="flex items-center justify-between p-2 text-sm">
                        <div className="flex w-0 flex-1 items-center">
                        {check_staffConditions_edit.staffConditions === null ? (
                        `${links.staffConditions}`
                      ) : check_staffConditions_edit.staffConditions !== links.staffConditions ? (
                        `${links.staffConditions}`
                      ) : check_staffConditions_edit.staffConditions === links.staffConditions &&
                        !check_staffConditions_edit.edit ? (
                        `${links.staffConditions}`
                      ) : (
                        <input
                          type="email"
                          className="block w-full rounded-md  border-gray-300 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                          value={get_staffConditions_after_edit}
                          defaultValue={links.staffConditions}
                          onChange={(e) => set_staffConditions_after_edit(e.target.value)}
                        />
                      )}
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                                  id={links.staffConditions}
                                  key={links.staffConditions}
                                  onClick={(s) => {
                                   
                                    if (check_staffConditions_edit.staffConditions == null) {
                                     
                                      set_check_staffConditions_edit({
                                        staffConditions: links.staffConditions,
                                        edit: true,
                                      });
                                    } else if (check_staffConditions_edit.staffConditions === links.staffConditions) {
                                     
                                      set_check_staffConditions_edit({
                                        staffConditions: null,
                                        edit: false,
                                      });
                                    } else {
                                    
                                      set_check_staffConditions_edit({
                                        staffConditions: null,
                                        edit: false,
                                      });
                                    }
          
                                    // focusUid();
                                  }}
                                  type="button"
                                  className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                                >
                                  <div>
                                    {check_staffConditions_edit.staffConditions=== null ? (
                                      "Update"
                                    ) : check_staffConditions_edit.staffConditions=== links.staffConditions &&
                                      check_staffConditions_edit.edit ? (
                                      <button
                                        type="button"
                                        onClick={() => sendPutRequest()}
                                      >
                                        Update
                                      </button>
                                    ) : (
                                      "Update"
                                    )}
                                  </div>
                          </button>
                          
                        </div>
                      </li>
                    </ul>

                    <label className="flex mt-4 font-abc">FAQs</label>
                    <ul
                      role="list"
                      className="divide-y mt-2 shadow-sm divide-white p-0 rounded-md border bg-white border-white"
                    >
                      <li className="flex items-center justify-between p-2 text-sm">
                        <div className="flex w-0 flex-1 items-center">
                        {check_staffFaqs_edit.staffFaqs === null ? (
                        `${links.staffFaqs}`
                      ) : check_staffFaqs_edit.staffFaqs !== links.staffFaqs ? (
                        `${links.staffFaqs}`
                      ) : check_staffFaqs_edit.staffFaqs === links.staffFaqs &&
                        !check_staffFaqs_edit.edit ? (
                        `${links.staffFaqs}`
                      ) : (
                        <input
                          type="email"
                          className="block w-full rounded-md  border-gray-300 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                          value={get_staffFaqs_after_edit}
                          defaultValue={links.staffFaqs}
                          onChange={(e) => set_staffFaqs_after_edit(e.target.value)}
                        />
                      )}
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                           id={links.staffFaqs}
                           key={links.staffFaqs}
                           onClick={(s) => {
                            
                             if (check_staffFaqs_edit.staffFaqs == null) {
                              
                              set_check_staffFaqs_edit({
                                 staffFaqs: links.staffFaqs,
                                 edit: true,
                               });
                             } else if (set_check_staffFaqs_edit.staffFaqs === links.staffFaqs) {
                              
                              set_check_staffFaqs_edit({
                                 staffFaqs: null,
                                 edit: false,
                               });
                             } else {
                             
                               set_check_staffFaqs_edit({
                                 staffFaqs: null,
                                 edit: false,
                               });
                             }
   
                             // focusUid();
                           }}
                           type="button"
                           className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                         >
                           <div>
                             {check_staffFaqs_edit.staffFaqs=== null ? (
                               "Update"
                             ) : check_staffFaqs_edit.staffFaqs=== links.staffFaqs &&
                               check_staffFaqs_edit.edit ? (
                               <button
                                 type="button"
                                 onClick={() => sendPutRequest()}
                               >
                                 Update
                               </button>
                             ) : (
                               "Update"
                             )}
                           </div>
                         
                          </button>
                         
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default links;
