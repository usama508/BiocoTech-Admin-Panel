import React from 'react'

import {TbPlant} from 'react-icons/tb'
import {MdLandscape} from 'react-icons/md'
import {MdRecycling} from 'react-icons/md'


 

function Stats() {
return (
  <div>
  <h2 className="text-sm lg:-mt-5 text-black font-thin">Waste managed</h2>
  <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
    
      <li  className="col-span-1    flex rounded-md shadow-sm">
        <div
          className={
            
          
            `flex-shrink-0 flex items-center  lg:h-12 shadow-md justify-center w-16 bg-lime-500 text-white text-sm  rounded-l-md`
          }
        >
          <TbPlant className='text-3xl'/>
      
        </div>
        <div className="flex shadow-md flex-1 lg:px-32 lg:h-12 items-center  truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
          <div className="flex-1 truncate ml-3 lg:-ml-28  text-sm">
            <p className=' font-thin text-black'>Organic waste</p>
           
            <p className=" font-light text-gray-500">15,000  metric tones</p>
          </div>
         
        </div>
      </li>
    


      <li className="col-span-1   flex rounded-md shadow-sm">
        <div
          className={
            
          
            `flex-shrink-0 flex items-center lg:ml-16  shadow-md lg:h-12 justify-center w-16 bg-cyan-600  text-white text-sm font-medium rounded-l-md`
          }
        >
          <MdLandscape className='text-3xl'/>
        
        </div>
        <div className="flex shadow-md flex-1 lg:px-32 lg:h-12 items-center  truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
          <div className="flex-1 truncate ml-3 lg:-ml-28 text-sm">
            <p className='text-black font-thin'>Landfill</p>
           
            <p className=" font-light text-gray-500">0 metric tones</p>
          </div>
         
        </div>
      </li>

      <li className="col-span-1   flex rounded-md shadow-sm">
        <div
          className={
            
          
            `flex-shrink-0 flex items-center shadow-md lg:ml-32 lg:h-12 justify-center w-16 bg-gray-400  text-white text-sm font-medium rounded-l-md`
          }
        >
         <MdRecycling className='text-3xl'/>
        
        </div>
        <div className="flex shadow-md flex-1 lg:px-32 lg:h-12 items-center  truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
          <div className="flex-1  ml-3 lg:-ml-28 text-sm">
            <p className=' font-thin text-black'>Recycled</p>
           
            <p className=" font-light text-gray-500">0 metric tones</p>
          </div>
         
        </div>
      </li>
   
   
    
  </ul>
</div>
  )
}

export default Stats