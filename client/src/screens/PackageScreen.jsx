import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck,faLocationDot } from '@fortawesome/free-solid-svg-icons'

function PackageScreen() {

    const {packageId} = useParams();
    const [pack,setPack] = useState(null);
    const [error,setError] = useState('');
    const [readMore,setReadMore] = useState(false);
    console.log(pack)

    useEffect(()=>{
        
        const fetchPackage = async()=>{
            try{
                const res = await fetch(`/api/v1/package/${packageId}`)
                const data = await res.json();
                if(data.status === 'fail'){
                    return setError(data.message)
                }
                setPack(data.data)
            }
            catch(err){
                console.log(err.message)
            }
        }
        fetchPackage()

    },[])
    console.log("Read More", readMore)

  return (
    
    <div>
        {pack && (
            <div className='max-w-7xl mx-auto p-3 flex flex-col gap-3 text-slate-700'>
                <h1 className='text-3xl font-bold text-blue-950'>{pack.name}</h1>
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faLocationDot} className='text-green-700' />
                    <p className='text-sm'>{pack.country}</p>
                </div>
                <div className="flex flex-col items-start">
                    <p className={`text-justify text-md ${readMore === false? 'line-clamp-2':''} `}>{pack.description}</p>
                    <button onClick={()=>setReadMore(prevValue=>!prevValue)} className='hover:cursor-pointer text-green-700 text-sm'>Read More...</button>
                </div>
                <p className='flex gap-2'>
                    <span className='font-semibold'>Duration: </span>
                    {pack.duration} days
                </p>

                <div className="w-full h-[300px] sm:h-[550px]">
                    <img src={pack.images[0]} alt="Cover Image" className='h-full w-full object-cover overflow-hidden' />
                </div>
                   

                <div className="flex flex-col gap-2 border-b-2 pb-2">
                    <h2 className='font-semibold'>Highlights</h2>
                    <div className="flex max-w-[800px] flex-wrap">
                        {
                            pack.inclusions.map((inclusion,index)=>(
                                <div key={index} className='min-w-[300px] flex gap-2 items-center p-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='text-green-700' />
                                    <p>{inclusion}</p>
                                </div>
                            ))
                        }

                    </div>
                    
                </div>


                <div className="flex flex-col gap-2">
                    <h2 className='font-semibold'>Itenary</h2>
                    {
                        pack.itenary.map((itenary,index)=>(
                            <div key={index}>
                            <ol class="relative border-s border-green-600 dark:border-gray-700">                  
                                <li class="ms-4">
                                    <div class="absolute w-3 h-3 bg-green-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time class="mb-1 text-sm font-normal leading-none text-slate-600 dark:text-gray-700">Day {index+1}</time>
                                    <h3 class="text-md font-semibold text-slate-600 dark:text-white">{itenary}</h3>
                                    {/* <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p> */}
                                </li>
                            </ol>
                            </div>
                        ))
                    }
                    
                </div>

               
            </div>
        )}
        {error && error}
    </div>
  )
}

export default PackageScreen