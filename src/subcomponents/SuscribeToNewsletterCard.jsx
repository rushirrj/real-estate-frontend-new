import React, { useState } from 'react'


const SuscribeToNewsletterCard = ({onSubmitForm, download}) => {
    const [text, setText] = useState("Subscribe");
    const [inputs, setInputs] = useState("");
    const onSubmit = async () => {
        console.log(inputs);
        // e.preventDefault();
        const response = await fetch("https://realestatebackend-1tat.onrender.com/user/subscribe", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({email : inputs}),
        });
        const parseRes = await response.json();
        setInputs("");
        if(download){
            onSubmitForm();
        }
        console.log(parseRes);
    }
    const onChange = (e) => {
        setInputs(e.target.value);
        console.log(inputs)
    }
    return (
        <div class=" font-sans bg-gradient-to-b from-slate-200 to-gray-100 gap-2 rounded-lg shadow-xl p-4 text-center flex flex-col md:flex-row justify-between items-center ">
            <p class="font-bold break-normal text-xl">
                {download ? "Please Enter Your Email to Download our Brochure" : "Subscribe to our Newsletter"}
            </p>
            {/* <h3 class="font-bold break-normal text-gray-600 text-sm md:text-base">
                {!download ?  "Get the latest posts delivered right to your inbox" : ""}
            </h3> */}
            <div class="text-center ">
                <form action="#">
                    <div class="p-1 pr-0 flex flex-col gap-2 sm:flex-row items-center">
                        <input
                            value={inputs}
                            onChange={(e) => onChange(e)}
                            type="email"
                            placeholder="youremail@example.com"
                            class="flex-1  appearance-none border border-gray-400 rounded shadow-md p-2 text-gray-600 mr-2 focus:outline-none"
                        />
                        <button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                if(text == "Subscribe" || text == 'Download'){
                                   
                                    setText("Subscribed")
                                    
                                    onSubmit();
                                }
                            }}

                            className={`flex-1  ml-2   ${text == "Subscribe" ? "bg-navGreen" : "bg-green-500"} text-black text-base font-normal   p-2 rounded `}
                        >
                            {download ? text === "Subscribe" ? "Download" : "Thank You" : text}
                        </button>


                    </div>
                </form>
            </div>
        </div>
    )
}

export default SuscribeToNewsletterCard