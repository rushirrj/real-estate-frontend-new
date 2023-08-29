import React from "react";
import { Fade } from "react-awesome-reveal";

const HomeLoanFaqs = () => {
  return (
    <div>
      {/* <!-- Container for demo purpose --> */}
      <div class="container my-24 px-6 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section class="mb-32 text-gray-800 rounded bg-slate-100">
          <div className="flex justify-center items-center px-4 md:px-28">
            <div className="flex flex-col gap-4 p-4 "  style={{width:"100%"}}>
              <Fade direction="up" triggerOnce>
                <h2 className="font-semibold text-3xl">
                  {/* <Fade> */}
                  {/* </Fade> */}
                  Home Loans Related Frequently Asked Questions(FAQs)
                </h2>
                <hr />
                <h4 className="font-semibold text-left">
                  What are the types of housing loans available?
                </h4>
                <hr />

                <p className="text-left">
                  Various housing loans are offered by financial institutions.
                  Prominent among these are:
                </p>

                <ul className="text-left list-disc">
                  <li>
                    <strong>Home Loans</strong>
                    <br />
                    This is the basic housing loan for the purchase of a new
                    home which covers cost of the flat, deposits and charges,
                    stamp duty and registration charges
                  </li>

                  <li>
                    <strong> Home Improvement / Extension Loans</strong>
                    <br />
                    For implementing repair works and renovations in a home that
                    has already been purchased by you.
                  </li>

                  <li>
                    <strong>Home Construction Loans</strong>
                    <br />
                    For the construction of a new house.
                  </li>

                  <li>
                    <strong> Bridge Loans</strong>
                    <br />
                    For people who wish to sell the existing house and purchase
                    another and need finance for the new house, until a buyer is
                    found for the old house.
                  </li>

                  <li>
                    <strong>Balance Transfer</strong>
                    <br />
                    To pay off an existing housing loan and avail of the option
                    of a loan with a lower rate of interest.
                  </li>

                  <li>
                    <strong> Refinance Loans</strong>
                    <br />
                    To pay off the debt you have incurred from private sources
                    such as relatives and friends, for the purchase of your
                    present house.
                  </li>
                </ul>
                <hr />

                {/* Accordion */}
                <div class="accordion accordion-flush bg-slate-100 "  id="accordionFlushExample">
                  <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingOne">
                      <button class="accordion-button
                          relative
                          flex
                          items-center
                          w-full
                          py-4
                          px-5
                          text-base text-left
                          border-0
                          rounded-none
                          text-navGreen
                          
                          transition
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                        aria-expanded="false" aria-controls="flush-collapseOne">
                        Who can apply for a housing loan?
                      </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                      aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">Any Indian citizen, including Non Resident Indians, with a steady source of income can borrow funds for financing the cost of a flat from housing finance companies and banks
                        the </div>
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
                          text-base text-left
                          text-navGreen
                          border-0
                          rounded-none
                          transition
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                        aria-expanded="false" aria-controls="flush-collapseTwo">
                        Can a Non Resident Indian avail of housing loans?
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">Yes, depending upon the eligibility criteria and policy of the bank. </div>
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
                          text-base text-left
                          text-navGreen
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                        aria-expanded="false" aria-controls="flush-collapseThree">
                        How much can a person borrow?
                      </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">Loans are generally disbursed between 70%-80% of the cost of the flat. The balance money is to be funded by the flat purchaser from his own contribution. The percentage of loan would vary from bank to bank.</div>
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
                          text-navGreen
                          px-5
                          text-base  text-left
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                        aria-expanded="false" aria-controls="flush-collapseFour">
                        What is an EMI?
                      </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">Equated Monthly Installment ("EMI") is the amount comprising a portion of the interest and the principal loan amount which is payable by a borrower to the lender every month.</div>
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
                          text-base text-left
                          border-0
                          text-navGreen
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                        aria-expanded="false" aria-controls="flush-collapseFive">
                        How is the rate of interest calculated in India?
                      </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">Interest rates vary from time to time and from institution to institution. The interest calculated either on a daily or monthly reducing or yearly reducing balances.</div>
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
                          text-base text-navGreen text-left                         
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix"
                        aria-expanded="false" aria-controls="flush-collapseSix">
                        What is a fixed-rate housing loan?
                      </button>
                    </h2>
                    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">A fixed-rate housing loan is a loan where the rate of interest is constant through the entire term of the loan period.</div>
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
                          text-base text-navGreen text-left                         
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven"
                        aria-expanded="false" aria-controls="flush-collapseSeven">
                        What is a floating interest rate housing loan?
                      </button>
                    </h2>
                    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">A floating interest rate loan is a loan where the interest rate payable is linked to the market conditions such as the base rate and rises and falls with the bank rate varies. Hence a borrower bears the risk of interest rate fluctuations.</div>
                    </div>
                  </div>
                  <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingEight">
                      <button class="accordion-button
                          collapsed
                          relative
                          flex
                          items-center
                          w-full
                          py-4
                          px-5
                          text-base text-navGreen text-left                         
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight"
                        aria-expanded="false" aria-controls="flush-collapseEight">
                        What are the repayment period options?
                      </button>
                    </h2>
                    <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">Repayment period options range generally from 5 to 20 years. Some of the banks may give loans up to 25 years also.</div>
                    </div>
                  </div>
                  <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingNine">
                      <button class="accordion-button
                          collapsed
                          relative
                          flex
                          items-center
                          w-full
                          py-4
                          px-5
                          text-base text-navGreen text-left                         
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine"
                        aria-expanded="false" aria-controls="flush-collapseNine">
                        What are the charges for availing a housing loan?
                      </button>
                    </h2>
                    <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">
                        <ul className="text-left list-disc p-3">
                          <li>
                            Processing Fees payable to the lender on applying for a loan
                            and is either a fixed amount not linked to the loan or may
                            also be a percentage of the loan amount.
                          </li>

                          <li>
                            Prepayment Penalty between 1% and 2% of the amount being pre
                            paid is charged by some institutions when a loan is paid
                            back before the end of the agreed duration. Many banks now
                            don't levy penalty on partial Prepayment
                          </li>

                          <li>
                            Stamp duty and registration fee as per prevailing rate of
                            Government Authority.
                          </li>

                          <li>
                            Miscellaneous costs: such as administrative costs, legal
                            documentation charges, technical consultant charges.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingTen">
                      <button class="accordion-button
                          collapsed
                          relative
                          flex
                          items-center
                          w-full
                          py-4
                          px-5
                          text-base text-navGreen text-left                         
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen"
                        aria-expanded="false" aria-controls="flush-collapseTen">
                        What security is required for a housing loan?
                      </button>
                    </h2>
                    <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">
                        The flat purchased is the primary security and is mortgaged to
                        the lending institution till the entire loan is repaid.
                        Additional security such as life insurance policies, shares,
                        bonds, fixed deposit receipts, national savings certificates
                        can also be offered, as per the requirements of the
                        institution.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingEleven">
                      <button class="accordion-button
                          collapsed
                          relative
                          flex
                          items-center
                          w-full
                          py-4
                          px-5
                          text-base text-navGreen text-left                         
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven"
                        aria-expanded="false" aria-controls="flush-collapseEleven">
                       Do lending companies require guarantors?
                      </button>
                    </h2>
                    <div id="flush-collapseEleven" class="accordion-collapse collapse" aria-labelledby="flush-headingEleven"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">
                      Yes. Many lending companies require 1 guarantor or a co-applicant.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingTwelve">
                      <button class="accordion-button
                          collapsed
                          relative
                          flex
                          items-center
                          w-full
                          py-4
                          px-5
                          text-base text-navGreen text-left                         
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve"
                        aria-expanded="false" aria-controls="flush-collapseTwelve">
                       What is the time required for approval of a loan application?
                      </button>
                    </h2>
                    <div id="flush-collapseTwelve" class="accordion-collapse collapse" aria-labelledby="flush-headingTwelve"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">
                      Varies from Bank to Bank but usually it is 15 – 20 days for a salaried person and 20 – 30 days for a self employed person depending on the applicant's documents.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingThirteen">
                      <button class="accordion-button
                          collapsed
                          relative
                          flex
                          items-center
                          w-full
                          py-4
                          px-5
                          text-base text-navGreen text-left                         
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirteen"
                        aria-expanded="false" aria-controls="flush-collapseThirteen">
                        What is the time required for disbursement of loans?
                      </button>
                    </h2>
                    <div id="flush-collapseThirteen" class="accordion-collapse collapse" aria-labelledby="flush-headingThirteen"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">
                      Usually loans are disbursed within 10 – 15 days after
                  completion of verification by the institution, documentation
                  (such as handing over of the original agreement for sale /
                  lodging receipt to the lender) and completion of all relevant
                  procedures and only after proof that the borrower's own
                  contribution has been paid by him to the Vendor / Builder /
                  Developer.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingFourteen">
                      <button class="accordion-button
                          collapsed
                          relative
                          flex
                          items-center
                          w-full
                          py-4
                          px-5
                          text-base text-navGreen text-left                         
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourteen"
                        aria-expanded="false" aria-controls="flush-collapseFourteen">
                        Do institutions accept joint loan applications?
                      </button>
                    </h2>
                    <div id="flush-collapseFourteen" class="accordion-collapse collapse" aria-labelledby="flush-headingFourteen"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">
                        Yes but it varies from Bank to Bank.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingFifteen">
                      <button class="accordion-button
                          collapsed
                          relative
                          flex
                          items-center
                          w-full
                          py-4
                          px-5
                          text-base text-navGreen text-left                         
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFifteen"
                        aria-expanded="false" aria-controls="flush-collapseFifteen">
                                          What are the documents required at the time of making an
                  Application for a housing loan?
                      </button>
                    </h2>
                    <div id="flush-collapseFifteen" class="accordion-collapse collapse" aria-labelledby="flush-headingFifteen"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">
                      <ul className="text-left list-disc p-3">
                  <li>Photographs</li>
                  <li>Proof of age</li>
                  <li>Identity papers</li>
                  <li>Proof of residence</li>
                  <li>For salaried individuals: Latest salary slip</li>
                  <li>
                    Bank statements reflecting salary credits for the previous
                    six months
                  </li>
                  <li>
                    For self employed individuals: certified copies of balance
                    sheet, profit and loss statement and tax challans / tax
                    returns for the previous 3 years
                  </li>
                  <li>
                    For partnership/private limited companies: the Articles of
                    Association, partnership deed and details about the firm
                  </li>
                  <li>
                    For NRIs Latest salary certificate specifying, Name (as it
                    appears in the passport), Date of joining, Passport Number,
                    Designation, Perquisites and salary, Photocopy of labour
                    card/identity card, Photocopy of valid resident visa stamped
                    on the passport, Photocopy of monthly statement of local
                    bank account, Property related documents
                  </li>
                </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="flush-headingSeventeen">
                      <button class="accordion-button
                          collapsed
                          relative
                          flex
                          items-center
                          w-full
                          py-4
                          px-5
                          text-base text-navGreen text-left                         
                          border-0
                          rounded-none
                          transition  
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeventeen"
                        aria-expanded="false" aria-controls="flush-collapseSeventeen">
                             Do lending institutions offer incentives for housing finance?
                      </button>
                    </h2>
                    <div id="flush-collapseSeventeen" class="accordion-collapse collapse" aria-labelledby="flush-headingSeventeen"
                      data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body py-4 px-5 text-left">
                        Sometimes lending institutions offer incentives for a
                    specified period or under a special scheme. Incentives could
                    be any of the following:

                    <ul className="text-left list-disc p-3">
                  <li>Free accident insurance</li>

                  <li>Waiving of pre payment penalty</li>

                  <li>Waiving of processing fee</li>

                  <li>Property insurance</li>
                </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Accordion */}
                <p className="text-left">
                  <strong>
                    * Loans are at the sole discretion of the bank
                  </strong>
                </p>
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

export default HomeLoanFaqs;
