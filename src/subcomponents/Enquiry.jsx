import React from 'react'

function Enquiry({ email, name, phone, property_name, scheduled_time, date, id, updateApi, type_of_enquiry, additional_info }) {
  const deleteEnquiry = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://realestatebackend-1tat.onrender.com/admin/enquiry/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const parseRes = await response.json();
    updateApi();
    console.log(parseRes);
  }
  return (
    <div>
     
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">Enquiry on {date.slice(0, 10)}</div>
            <p class="text-gray-700 text-base">{property_name}</p>
            <br />
            <p class="text-gray-700 text-base">{name}</p>
            <br />
            <p class="text-gray-700 text-base">{phone}</p>
            <br />
            <p class="text-gray-700 text-base">{email}</p>
            <br />
            <p class="text-gray-700 text-base">{type_of_enquiry}</p>
            <br />
            <p class="text-gray-700 text-base">{additional_info}</p>
            <br />
            <p class="text-gray-700 text-base">{scheduled_time}</p>
          </div>
          <button type="button" onClick={(e) => deleteEnquiry(e)} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Enquiry