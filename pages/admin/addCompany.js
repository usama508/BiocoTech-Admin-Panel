/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiUrl } from "../../constants";

function addCompany() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pin, setPin] = useState("");
  const [website, setWebsite] = useState("");
  const [about, setAbout] = useState("");
  const [uploading, setUploading] = useState(false)
  //const [selectedFile, setSelectedFile] = useState<File>('');
  const [loading, setLoading] = useState(false)

  const router = useRouter();
  if (router.isFallback) {
    return <h3>Loading...</h3>;
  }
//notify
  const notify = () =>
    toast.success("add company!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

   //file uploading



  const hiddenFileInput = React.useRef(null);


  const handleClick = () => {
    hiddenFileInput.current.click();
    
  };

  const uploadFile =(e)=>{
    //console.log(files[0]);
     Formdata = new FormData();
    Formdata.append('attachments',e.target.files[0])
    axios.post(`${apiUrl}/api/file`,Formdata).then((res)=>{
      console.log('file',res.data)
    })
  }

   
    //Post Request companies

  const handleSubmit = (event) => {
    event.preventDefault();

  


    axios
      .post(`${apiUrl}/api/companies`, { companyName:name, id:id, pin:pin, website:website, about:about })
      .then((res) => {
        
        setLoading(true)
      });

    router.push("/admin/companies");
  };
  return (
    <>
      <button className="text-lg ml-5 mt-5 font-light leading-6 text-gray-900">
        <span className=" ">
          {" "}
          <Link
            className="flex justify-center flex-row font-abc items-center"
            href="/admin/companies"
          >
            <IoIosArrowBack />
            Back
          </Link>
        </span>
      </button>
      <div className="bg-gray-200 mt-2 ml-6 mr-6 mb-6 px-2 sm:px-6 py-4 sm:py-6 lg:px-4 lg:py-4 rounded-lg">
        <div className="mt-3 sm:mt-0 ">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="">
              <div className="px-4 ml-5 sm:px-0">
                <h3 className="text-lg font-light leading-6 text-black">
                  New Company
                </h3>
                <p className="mt-1  text-gray-600 font-light">
                  Add the information of new company
                </p>
              </div>
            </div>
            <div className="mt-2  md:mt-0">
              <div className="overflow-hidden  sm:rounded-md">
                <div className=" px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 -mt-3 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="first-name"
                        className="block font-light text-sm mb-2  text-gray-700"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block border lg:w-64 w-full p-2 rounded-md border-gray-300 shadow-sm   sm:text-sm focus:outline-none focus:ring-2 focus:border-cyan-500 focus:ring-cyan-500 focus:ring-offset-2"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block font-light text-sm mb-2  text-gray-700"
                      >
                        Company ID
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block border lg:w-64 w-full p-2 rounded-md border-gray-300 shadow-sm   sm:text-sm focus:outline-none focus:ring-2 focus:border-cyan-500 focus:ring-cyan-500  focus:ring-offset-2"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block font-light mb-2 text-sm  text-gray-700"
                      >
                        Company PIN
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 lg:w-64 block w-full rounded-md p-2   border border-gray-300 shadow-sm   sm:text-sm focus:outline-none focus:ring-2 focus:border-cyan-500 focus:ring-cyan-500  focus:ring-offset-2"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block font-light mb-2 text-sm  text-gray-700"
                      >
                        Website/Other link(optional)
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 lg:w-64 block w-full rounded-md   p-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:border-cyan-500 focus:ring-cyan-500 focus:ring-offset-2   sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block  mb-2 text-sm font-light text-gray-700"
                      >
                        About/Other details(optional)
                      </label>
                      <textarea
                        rows={4}
                        name="comment"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        id="comment"
                        placeholder="  Add new unit..."
                        className="block lg:w-64  w-full rounded-md border  p-2 border-gray-300 shadow-sm  sm:text-sm focus:outline-none focus:ring-2 focus:border-cyan-500 focus:ring-cyan-500 focus:ring-offset-2 "
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block  mb-2 text-sm font-light text-gray-700"
                      >
                        Attachments(optional)
                      </label>
                      <div className="flex ">
                       
                        <button
                         onClick={handleClick}
                        // disabled={uploading}
                          className="flex w-32 p-1 lg:w-32 justify-center rounded-lg border border-gray-300 bg-white  text-sm  text-gray-700 shadow-sm hover:bg-gray-50 
                         focus:outline-none focus:ring-2 font-light focus:border-cyan-500 focus:ring-cyan-500 focus:ring-offset-2"
                        >
                          Upload
                        </button>
                        <button
                         onClick={handleClick}
                        // disabled={uploading}
                          className="flex w-32 ml-2 p-1 lg:w-32 justify-center border rounded-lg border-gray-300 bg-white  text-sm font-light text-gray-700 shadow-sm hover:bg-gray-50 
                         focus:outline-none focus:ring-2  focus:border-cyan-500 focus:ring-cyan-500 focus:ring-offset-2"
                        >
                          Upload
                        </button>
                        <input
                          type="file"

                          ref={hiddenFileInput}
                          onChange={uploadFile}
                          style={{ display: 'none' }}
                        />
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <button
                        type="button"
                        onClick={(e) => {
                          handleSubmit(e), notify();
                        }}
                        className="flex w-full lg:w-64 ml-2 p-2 justify-center border rounded-lg border-gray-300 bg-cyan-600 text-sm  text-white shadow-sm hover:bg-cyan-500 
                      focus:outline-none focus:ring-2 font-light focus:ring-cyan-500 focus:ring-offset-2"
                      >
                        Create and Save
                      </button>
                      <ToastContainer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default addCompany;
