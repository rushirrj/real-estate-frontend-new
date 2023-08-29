import React from "react";
import { Fade } from "react-awesome-reveal";
const NriFaqs = () => {
  return (
    <div>
      {/* <!-- Container for demo purpose --> */}
      <div class="container my-24 px-6 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section class="mb-32 text-gray-800 rounded bg-slate-100">
          <div className="flex justify-center items-center px-4 md:px-28">
            <div className="flex flex-col gap-4 p-4" style={{ width: "100%" }}>
              <Fade direction="up" triggerOnce>

                <h2 className="font-semibold text-center text-3xl">
                  NRI's most frequently asked questions (FAQs)
                </h2>
                <hr />
                {/* Accordion */}
                <div class="accordion accordion-flush" id="accordionFlushExample">
                  <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingOne">
                      <button class="accordion-button
                        relative
                        flex
                        items-center
                        w-full
                        py-4
                        px-5
                        text-base text-gray-800 text-left
                        bg-white
                        border-0
                        rounded-none
                        transition
                        focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                        aria-expanded="false" aria-controls="flush-collapseOne">
                        WHO IS NRI?
                      </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                      aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">
                      An Indian citizen who stays abroad for employment/carrying on business or vocation outside India or stays abroad under circumstances indicating an intention for an uncertain duration of stay abroad is a non-resident. (Persons posted in U.N. organisations and officials deputed abroad by Central/State Governments and Public Sector undertakings on temporary assignments are also treated as non-temporary assignments are also treated as non-residents). Non-resident foreign citizens of Indian origin are treated on par with non- resident Indian citizens (NRIs).
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingTwo">
                      <button class="accordion-button
                        collapsed
                        relative
                        flex
                        items-center
                        w-full
                        py-4
                        px-5
                        text-base text-gray-800 text-left
                        bg-white
                        border-0
                        rounded-none
                        transition
                        focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                        aria-expanded="false" aria-controls="flush-collapseTwo">
                        Who can apply for a housing loan?
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">
                      Any Indian citizen, including Non Resident Indians, with a steady source of income can borrow funds for financing the cost of a flat from housing finance companies and banks
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingThree">
                      <button class="accordion-button
                          collapsed
                          relative
                          flex
                          items-center
                          w-full
                          py-4
                          px-5
                          text-base text-gray-800 text-left
                          bg-white
                          border-0
                          rounded-none
                          transition
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                        aria-expanded="false" aria-controls="flush-collapseThree">
                        WHO IS PIO?
                      </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5">
                      <p className="text-left">
                        A person of Indian origin means an individual (not being a
                        citizen of Pakistan or Bangladesh or Sri Lanka or Afghanistan
                        or China or Iran or Nepal or Bhutan) who:
                      </p>

                      <ul className="text-left list-disc p-3">
                        <li>held an Indian Passport at any time, or</li>

                        <li>
                          who or whose father or paternal grand father was a citizen
                          of India by virtue of the Constitution of India or the
                          Citizenship Act, 1955
                        </li>
                      </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingFour">
                      <button class="accordion-button
                          collapsed
                          relative
                          flex
                          items-center
                          w-full
                          py-4
                          px-5
                          text-base text-gray-800 text-left
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                        aria-expanded="false" aria-controls="flush-collapseFour">
                        What are the facilities available to NRI/ OCBS?
                      </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">
                      <p className="text-left">
                            <strong>
                              NRIs/OCB's are granted the following facilities:
                            </strong>
                          </p>

                          <ul className="text-left list-disc p-3">
                            <li>Maintenance of bank accounts in India</li>

                            <li>
                              Investments in securities/shares of, and deposits with,
                              Indian firms/companies
                            </li>

                            <li>Investments in immovable properties in India</li>
                          </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingFive">
                      <button class="accordion-button
                          collapsed
                          relative
                          flex
                          items-center
                          w-full
                          py-4
                          px-5
                          text-base text-gray-800 text-left
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                        aria-expanded="false" aria-controls="flush-collapseFive">
                       Who can purchase immovable property in India?
                      </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">
                        
                <p className="text-left">
                  Under the general permission available, the following
                  categories can freely purchase immovable property in India:
                </p>

                <ul className="text-left list-disc p-3">
                  <li>
                    Non-Resident Indian (NRI) – that is a citizen of India
                    resident outside India
                  </li>

                  <li>
                    Person of Indian Origin (PIO) – that is an individual (not
                    being a citizen of Pakistan or Bangladesh or Sri Lanka or
                    Afghanistan or China or Iran or Nepal or Bhutan), who at any
                    time, held Indian passport, or
                  </li>

                  <li>
                    who or either of whose father or grandfather was a citizen
                    of India by virtue of the Constitution of India or the
                    Citizenship Act, 1955 (57 of 1955).
                  </li>
                </ul>

                <p className="text-left">
                  The general permission, however, covers only purchase of
                  residential and commercial property.
                </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingSix">
                      <button class="accordion-button
                          collapsed
                          relative
                          flex
                          items-center
                          w-full
                          py-4
                          px-5
                          text-base text-gray-800 text-left                         
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix"
                        aria-expanded="false" aria-controls="flush-collapseSix">
                        Can NRIS acquire or dispose residential property by way of gift?
                      </button>
                    </h2>
                    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">
                      Yes, the Reserve Bank has granted general permission to NRIs to acquire or dispose of NRI India Properties by way of gift from or to a relative who may be an Indian citizen or a person of Indian origin (PIO) whether resident in India or not.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingSeven">
                      <button class="accordion-button
                          collapsed
                          relative
                          flex
                          items-center
                          w-full
                          py-4
                          px-5
                          text-base text-gray-800 text-left                         
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven"
                        aria-expanded="false" aria-controls="flush-collapseSeven">
                        Can NRIS acquire commercial properties in India?
                      </button>
                    </h2>
                    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">Yes, under the general permission granted by the Reserve Bank, property other than agricultural land/farm house/plantation property can be acquired by NRIs provided the purchase consideration is met either out of inward remittances in foreign exchange through normal banking channels or out of funds from the purchaser's NRE/FCNR accounts maintained with banks in India and a declaration is submitted to the Central Office of Reserve Bank in form IPI 7 within a period of 90 days from the date of purchase of the property/final payment of purchase consideration.</div>
                    </div>
                  </div>
                  <div class="pr-2 accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingEight">
                      <button class="accordion-button
                          collapsed
                          relative
                          flex
                          items-center
                          w-full
                          py-4
                          px-5
                          text-base text-gray-800 text-left                         
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight"
                        aria-expanded="false" aria-controls="flush-collapseEight">
                        Can NRIS obtain loans for acquisition of a house/flat for residential purpose from financial institutions providing housing finance?
                      </button>
                    </h2>
                    <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">The Reserve Bank has granted some general permission to certain financial institutions providing housing finance e.g. HDFC, LIC Housing Finance Ltd., etc, and authorized dealers to grant housing loans to NRI nationals for acquisition of a NRI house/flat for self-occupation subject to certain conditions. Criteria regarding the purpose of the loan, margin money and the quantum of loan will be at par with those applicable to resident Indians. Repayment of the loan should be made within a period not exceeding 15 years, out of inward remittance through banking channels or out of funds held in the investors' NRE/FCNR/NRO accounts.</div>
                    </div>
                  </div>
                </div>
                {/* Accordion */}
                
              </Fade>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose --> */}
    </div>
  );
};

export default NriFaqs;
