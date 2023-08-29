import React, { useState, useEffect } from 'react'

const AdminSubscriptions = () => {

    const [subs, setSubs] = useState([]);

    const getSubs = async () => {
        const response = await fetch("https://realestatebackend-1tat.onrender.com/admin/subscriptions", {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            }
        });

        const parseRes = await response.json();
        setSubs(parseRes.data);
    }
    useEffect(() => {
        getSubs();
    }, []);
  return (
    <div className='mb-4'>
        <div className="flex justify-center items-center h-24 text-5xl font-semibold text-grey  tracking-wider">
        Subscriptions 
      </div>
      <div className='rounded flex flex-col gap-4 justify-center items-center'>
        {
            subs.map((ele, key) => {
                return (
                    <div key={key} className="font-semibold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" >
                        {ele.email}
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default AdminSubscriptions