/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Link from "next/link";
import { MdHome } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TbCheckbox } from "react-icons/tb";
import { ImLink } from "react-icons/im";
import { CiLogout } from "react-icons/ci";
import { useRouter } from "next/router";

import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
//import { useAuth } from "../../context/AuthContext";
//import { withProtected } from "../../context/Route";

import { useState } from "react";

import axios from "axios";
import { apiUrl } from "../../constants";



function checklist() {
  
  const [items, setItems] = useState([]);
  const [showform, setShowform] = useState(false);
  const [loading,setLoading] = useState(false)
  const [text, setText] = useState("");

const router = useRouter();
  if (router.isFallback) {
    return <h3>Loading...</h3>;
  }
  const sideBarRef = useRef();
  //const { logout } = useAuth();
  // checklist edit Check
  const [check_list_edit, set_check_list_edit] = useState({
    list: null,
    edit: false,
  });
  // checklist edit fields
  const [get_list_after_edit, set_list_after_edit] = useState();


//Put Request
  const PutRequest = (id) => {
    axios.put(`${apiUrl}/api/checklists/${id}`, { text: get_list_after_edit}).then((res) => {
      fetchList();
      
      //setItems(res.data);
      //console.log("-- res.data --", res.data);
    });
    
    
};


  
//Get Request
  const fetchList = async () => {
    await axios.get(`${apiUrl}/api/checklists`).then((res) => {
      
      setItems(res.data);
      setLoading(true)
      // setChange(res.data.reverse())
    });
  };
  //Delete Request

  const deleteList = (id) => {
    axios.delete(`${apiUrl}/api/checklists/${id}`).then((res) => {
      fetchList();
      //setItems(res.data);
      //console.log("-- res.data --", res.data);
    });
  };

  

  useEffect(() => {
    fetchList();
 
  }, []);
//Post Request
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`${apiUrl}/api/checklists`, { text }).then((res) => {
      fetchList();
      //console.log(res);
      //console.log(res.data);
    });
  };

  

 

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
  //notify

  const notify = () =>
    toast.success("checklist deleted!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const added = () =>
    toast.success("checklist added!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    
  const updated = () =>
  toast.success("checklist updated!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  

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
            className="bg-cyan-600  w-56 space-y-10 px-5 py-7  absolute inset-y-0 left-0 transform -translate-x-full
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
                <Link href="/" legacyBehavior>
                  <a className="text-white font-abc hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <MdHome className="mr-1 text-white" />
                    Dashboard
                  </a>
                </Link>
                <Link href="/admin/companies" legacyBehavior>
                  <a className="text-white font-abc hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <HiBuildingOffice2 className="mr-1 text-white" />
                    Companies
                  </a>
                </Link>
                <div
                  className={` ${isActive(
                    "/admin/checklist"
                  )} bg-lime-500 hover:bg-lime-500 group flex items-center px-2 py-2 text-sm font-medium rounded-md `}
                >
                  <TbCheckbox className="mr-1 text-white" />
                  <h3 className="text-base text-white font-abc group-hover:text-white ">
                    <Link href="/admin/checklist">Check list</Link>
                  </h3>
                </div>

                <Link href="/admin/links" legacyBehavior>
                  <a className="text-white  hover:text-white font-abc group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <ImLink className="mr-1 text-white" />
                    Links
                  </a>
                </Link>
              </nav>

              <div className="flex flex-shrink-0 border-t border-lime-500 p-4">
                <div className="flex items-center">
                  <div className="bg-lime-500 h-9 w-9 rounded-full">
                    <button onClick={signOut}>
                      <CiLogout className=" ml-2 mt-3 font-abc text-white " />
                    </button>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium font-abc text-white group-hover:text-white ">
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

     
      



      

      <div className="flex flex-1 flex-col md:pl-64">
        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {/*<h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>*/}
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <div className="py-4">
                {/*<div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>*/}
              </div>

              { (
                <div className="px-4 sm:px-6 py-4 sm:py-6 lg:px-8 lg:py-8 rounded-lg bg-gray-100">
                  <div className="sm:flex sm:items-center  ">
                    <div className="sm:flex-auto ">
                      <h1 className="text-xl font-semibold text-gray-900 font-abc">
                        List of all the companies
                      </h1>
                      <p className="mt-2 text-sm font-abc text-gray-700">
                        These are the list of all the companies listed with
                        BIOCo Tech
                      </p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none font-abc">
                      <button
                        type="button"
                        onClick={() => setShowform(true)}
                        className="inline-flex items-center justify-center font-abc rounded-md border border-transparent bg-cyan-600 text-white hover:bg-cyan-700 px-4 py-2 text-xs font-medium  shadow-sm  focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2   sm:w-auto"
                      >
                        Add new daily checklist item
                      </button>
                    </div>
                  </div>
                </div>
              )}
            
                <div className="mt-8 flex flex-col">
                  <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead className="bg-lime-500">
                            <tr>
                              <th
                                scope="col"
                                className="py-3.5 font-abc pl-4 pr-3 text-left text-sm font-semibold  text-white sm:pl-6"
                              >
                                List of Checklists
                              </th>

                              <th
                                scope="col"
                                className="relative font-abc py-3.5 pl-3 pr-4 sm:pr-6 text-left text-white"
                              >
                                Action
                              </th>
                            </tr>
                          </thead>
                       {showform?(<div className="flex"><input
                                      type="email"
                                      name="email"
                                      id="email"
                                      placeholder="Add list"
                                      className="block w-full  ml-7 rounded-md mt-2.5 mb-2.5 border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                                      
                                      value={text}
                                      onChange={(e) => setText(e.target.value)}
                                    /><span className="  flex flex-shrink-0 space-x-4">
                                    <button
                                        onClick={(e) => { setShowform(false),handleSubmit(e),added()}}
                                        type="button"
                                        className="rounded-md ml-12 bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                                    >

                                        Save


                                    </button>

                                </span></div>):''} 
                          {loading?<tbody className="divide-y  divide-gray-200 bg-lime-50">
                            {items.map((list) => (
                              <tr key={list.text}>
                                <td className="whitespace-nowrap font-abc py-4 pl-4 pr-3 text-sm font-light text-gray-500 sm:pl-6 contentEditable:outline-none">
                                  {check_list_edit.list === null ? (
                                    `${list.text}`
                                  ) : check_list_edit.list !== list.text ? (
                                    `${list.text}`
                                  ) : check_list_edit.list === list.text &&
                                    !check_list_edit.edit ? (
                                    `${list.text}`
                                  ) : (
                                    <input
                                      type="text"
                                      
                                      className="block w-full  rounded-md -mt-2.5 border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                                       defaultValue={list.text}
                                      value={get_list_after_edit}
                                      
                                      onChange={(e) => set_list_after_edit(e.target.value)}
                                    />
                                    
                                  )}

                                  {/*
                               } <input type="text" value={list.text} onChange={(e) => {
                                  setChange(e.target.value)
                               } />*/}
                                </td>

                                <td className=" flex relative font-abc whitespace-nowrap py-7  pl-4 pr-3 text-black  text-sm font-thin sm:pr-6">
                                  {/*<CiEdit className='cursor-pointer' onClick={() => {
                                  updateList(list._id);
                                  // items.target.value = "";

                                }} />*/}
                                  {/*
                                <Link href={`/update`}>
                                <CiEdit onClick={()=>{
                                  usama2 = list._id;
                                  usama3 = list.text;
                                }} />
                                </Link>
                              */}

                                  <button
                                    id={list.text}
                                    key={list.text}
                                    onClick={(s) => {
                                      // console.log(s);

                                      // setOpenMenu(!openMenu);
                                      // console.log(check_unit_edit);
                                      // if (check_unit_edit.unitId == null) {
                                      //   handleEdit(unit.id)
                                      // } else if (check) { }
                                      // set_check_unit_edit({
                                      //   unitId:
                                      //     // s.target.innerHTML == "Edit" ? unit.id : null,
                                      //     unit.id,
                                      //   edit: !check_unit_edit.edit,
                                      // });

                                      console.log(list.text);
                                      if (check_list_edit.list == null) {
                                        console.log("1");
                                        // If the unitId is null, set the unitId to the current unit's id and set the edit mode to true
                                        set_check_list_edit({
                                          list: list.text,
                                          edit: true,
                                        });
                                      } else if (check_list_edit.list === list.text) {
                                        console.log("2");
                                        // If the unitId is not null and it matches the current unit's id, set the edit mode to false
                                        set_check_list_edit({
                                          list: null,
                                          edit: false,
                                        });
                                      } else {
                                        console.log("3");
                                        set_check_list_edit({
                                          list: null,
                                          edit: false,
                                        });
                                      }

                                      // focusUid();
                                    }}
                                    type="button"
                                    className=" rounded-md  font-thin text-sm text-black hover:text-black font-abc"
                                  >
                                    <div>
                                      {check_list_edit.list === null
                                        ? <><div className="flex  cursor-pointer"><CiEdit />  <RiDeleteBin5Line
                                      className="ml-1"
                                      onClick={() => {
                                        deleteList(list._id), notify();
                                      }}
                                    />
                                    </div>
                                  </>
                                        : check_list_edit.list === list.text &&
                                          check_list_edit.edit
                                          ? <button type='button' className="text-cyan-500" onClick={()=>{PutRequest(list._id),updated()}}>Update</button>
                                          : <><div className="flex  cursor-pointer"><CiEdit />  <RiDeleteBin5Line
                                                 className="ml-1"
                                          onClick={() => {
                                            deleteList(list._id), notify();
                                          }}
                                        />
                                        </div>
                                      </>}
                                    </div>
                                  </button>

                                 
                                  <ToastContainer />
                                </td>
                              
                              </tr>
                            ))}
                          </tbody>:<iDeleteBin5Line/>}
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default /*withProtected*/(checklist);
