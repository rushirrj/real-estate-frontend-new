import React, { useEffect, useState } from "react";
import Enquiry from "../subcomponents/Enquiry";

function AdminEnquiry() {
  const [enquiry, setenquiry] = useState([]);

    const deleteEnquiry = async (e) => {
      const id= e.target.id;
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

  const fetchEnquires = async () => {
    const response = await fetch(
      "https://realestatebackend-1tat.onrender.com/admin/enquiries",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const parseRes = await response.json();
    console.log(parseRes);
    // console.log(parseRes.success);
    setenquiry(parseRes.success);
  };
  function updateApi() {
    fetchEnquires();
  }
  useEffect(() => {
    fetchEnquires();
  }, []);
  return (
    enquiry.length &&
    <div className="my-10 overflow-scroll p-4" >
       {/* table starts */}
       
      <table class="table-auto">
        <thead>
          <tr>
            <th>Enquired On</th>
            <th>Property name</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>Email</th>
            <th>Type of Enquiry</th>
            <th>Additional info</th>
            <th>Schedule Date</th>
            <th>Schedule Time</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
        {enquiry.map((element, key) => {
        return (
          <tr key={key}>
            {/* <Enquiry */}
            <td>{element.date.slice(0, 10)}</td>
            <td>{element.property_name}</td>
            <td>{element.name}</td>
            <td>{element.phone}</td>
            <td>{element.email}</td>
            <td>{element.type_of_enquiry}</td>
            <td>{element.additional_info}</td>

            <td>{element.scheduled_time.slice(0,10)}</td>
            <td>{element.scheduled_time.slice(11,19)}</td>
            <td><button id={element._id} type="button" onClick={(e) => deleteEnquiry(e)} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button></td>
          </tr>
        );
      })}
        </tbody>
      </table>
      {/* table ends */}

    </div>
  );
}

export default AdminEnquiry;
