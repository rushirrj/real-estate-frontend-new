import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./subcomponents/Navbar";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import AllBlogs from "./components/AllBlogs";
import AppsIcon from "@mui/icons-material/Apps";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import Footer from "./components/Footer";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
import EnquiryForm from "./subcomponents/EnquiryForm";
import ProductPage from "./components/ProductPage";
import AdminEnquiry from "./Admin/AdminEnquiry";
import { Link, Navigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import AllProductPage from "./components/AllProductPage";
import HomeLoanFaqs from "./components/HomeLoanFaqs";
import NriFaqs from "./components/NriFaqs";
import AboutUsNew from "./components/AboutUsNew";
import CompletedProjects from "./components/CompletedProjects";
import UpcomingProjectPage from "./components/UpcomingProjectPage";
import Main from "./Admin/Main";
import Login from "./Admin/Login";
import UploadProduct from "./Admin/UploadProduct";
import ScrollToTop from "./subcomponents/ScrollToTop";
import PageNotFound from "./components/PageNotFound";
import AdminProjectCreate from "./Admin/AdminProjectCreate";
import AdminAllProducts from "./Admin/AdminAllProducts";
import AdminProductEdit from "./Admin/AdminProductEdit";
import SuccessCard from "./Admin/SuccessCard";
import AdminBlogCreate from "./Admin/AdminBlogCreate";
import Search from "./components/Search";
import AdminAllBlogs from "./Admin/AdminAllBlogs";
import AdminBlogEdit from "./Admin/AdminBlogEdit";
import AdminSubscriptions from "./Admin/AdminSubscriptions";
import SearchComponent from "./subcomponents/SearchComponent";
import AdminSuperVisor from "./Admin/AdminSuperVisor";

function App() {
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState({ display: "none" });
  const [project, setProject] = useState({ display: "none" });
  const [searchInputs, setSearchInputs] = useState("");
  const [user, setUser] = useState("admin");
  const handleChange = (e) => {
    setSearchInputs(e.target.value);
  };

  const cancelButtonRef = useRef(null);
  const openModal = () => {
    setOpen(true);
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (bool) => {
    setIsAuthenticated(bool);
  };

  async function verifyAuth() {
    console.log("i was here");
    try {
      const response = await fetch("https://realestatebackend-1tat.onrender.com/auth/verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    verifyAuth();
  }, []);
  return (
    <Router>
      <div className="App">
        <div className="grid grid-cols-12">
          <div className="sidebar h-screen col-span-1 sticky bg-navBg top-0">
            <div className="flex flex-row items-center justify-center">
              <div className="flex items-center justify-center cursor-pointer mt-6">
                <AppsIcon
                  id="appiconsidebarreact"
                  className=" "
                  onClick={openModal}
                />
              </div>
            </div>
            <div
              className="flex flex-col justify-end "
              style={{ height: "85vh" }}
            >
              <div className="flex items-center justify-center">
                <div
                  class="h-20 m-3"
                  style={{ borderLeft: "3px solid black" }}
                ></div>
              </div>
              <div className="flex items-center justify-center p-3">
                <div
                  className="tracking-widest font-bold text-xl text-black"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  FOLLOW US
                </div>
              </div>
              <a
                className="flex items-center justify-center p-1 cursor-pointer"
                href="#"
                target="_blank"
              >
                <FaTwitter style={{ fontSize: "30px", color: "black" }} />
              </a>
              <a
                className="flex items-center justify-center p-1 cursor-pointer"
                href="#"
                target="_blank"
              >
                <FaInstagramSquare
                  style={{ fontSize: "30px", color: "black" }}
                />
              </a>
              <a
                className="flex items-center justify-center p-1 cursor-pointer"
                href="#"
                target="_blank"
              >
                <FaLinkedin style={{ fontSize: "30px", color: "black" }} />
              </a>
              <a
                className="flex items-center justify-center p-1 cursor-pointer"
                href="#"
                target="_blank"
              >
                <FaFacebook style={{ fontSize: "30px", color: "black" }} />
              </a>
            </div>
          </div>
          <div className="col-span-12 w-full md:col-span-11 ">
            <Navbar
              openModal={() => {
                openModal();
              }}
            />
            <ScrollToTop />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/about" element={<AboutUsNew />} />
              {/* <Route exact path="/aboutus" element={<AboutUsNew/>} /> */}
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/enquiry" element={<EnquiryForm />} />
              <Route exact path="/product" element={<ProductPage />} />
              {/* <Route exact path="/admin" element={<Admin />} /> */}
              <Route exact path="/products" element={<CompletedProjects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/allblogs" element={<AllBlogs />} />
              <Route path="/homeloanfaqs" element={<HomeLoanFaqs />} />
              <Route path="/nrifaqs" element={<NriFaqs />} />
              <Route path="/completedprojects" element={<AllProductPage />} />
              <Route exact path="/search" element={<Search />} />
              <Route
                path="/upcomingprojects"
                element={<UpcomingProjectPage />}
              />
              <Route exact path="/success" element={<SuccessCard />} />
              {/* Admin */}
              <Route
                exact
                path="/admin"
                element={
                  !isAuthenticated ? (
                    <Login setAuth={setAuth} setUser={setUser}/>
                  ) : (
                    user === "admin" ?
                    <Navigate to="/admin/main" />
                    :
                    <Navigate to="/admin/supervisor"/>
                  )
                }
              />
              <Route path="/admin/main" element={<Main setAuth={setAuth}/>} />
              <Route path="/admin/supervisor" element={<AdminSuperVisor setAuth={setAuth} />}/>
              {/* Project */}
              <Route
                exact
                path="/admin/main/add_product"
                element={
                  isAuthenticated ? (
                    <AdminProjectCreate />
                  ) : (
                    <Navigate to="/admin" />
                  )
                }
              />
              <Route
                exact
                path="/admin/main/products"
                element={
                  isAuthenticated ? (
                    <AdminAllProducts />
                  ) : (
                    <Navigate to="/admin" />
                  )
                }
              />
              <Route
                exact
                path="/admin/main/product/edit"
                element={
                  isAuthenticated ? (
                    <AdminProductEdit />
                  ) : (
                    <Navigate to="/admin" />
                  )
                }
              />
              <Route
                exact
                path="/admin/main/product/success"
                element={<SuccessCard />}
              />
              {/* Blog */}
              <Route
                exact
                path="/admin/main/add_blog"
                element={
                  isAuthenticated ? (
                    <AdminBlogCreate />
                  ) : (
                    <Navigate to="/admin" />
                  )
                }
              />
              <Route
                exact
                path="/admin/main/blogs"
                element={
                  isAuthenticated ? <AdminAllBlogs /> : <Navigate to="/admin" />
                }
              />
              <Route 
                exact path="/admin/main/blog/edit"
                element={
                  isAuthenticated ? <AdminBlogEdit/> : <Navigate to="/admin"/>
                }
              />
              {/* Enquiry */}
              <Route
                exact
                path="/admin/main/enquiry"
                element={
                  isAuthenticated ? <AdminEnquiry /> : <Navigate to="/admin" />
                }
              />
              { /* Subscribe */ }
              <Route 
                exact
                path="/admin/main/subscriptions"
                element={
                  isAuthenticated ? <AdminSubscriptions /> : <Navigate to="/admin" />
                }
              />
            <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
          </div>
        </div>
        {/* Modal Starts */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-sidebarDark   " />
            </Transition.Child>

            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex justify-end mt-3 mr-3 cursor-pointer">
                <CloseIcon style={{ color: "white", fontSize: "30px" }} />
              </div>
              <div className="flex items-start justify-center min-h-full p-4 text-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative  bg-sidebarDark  opacity-90  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                    <div className="p-2 ">
                      <div className="flex justify-center items-center ">
                        <div className="flex col-span-10 justify-start items-center h-32 w-32 md:col-span-9 cursor-pointer">
                          {/* <img src='https://heaven11.axiomthemes.com/wp-content/uploads/2018/06/logo1.png' className='invert' /> */}
                          <img
                            src="Metropolitian.png"
                            alt="logoChavan"
                            className="mt-3"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </div>
                      <div className="flex  justify-around flex-col gap-3 pl-7 py-5">
                        <Link to={"/"}>
                          <div
                            className="tracking-widest text-2xl font-semibold   text-navGreen cursor-pointer"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                          >
                            HOME
                          </div>
                        </Link>
                        {/* <Link to={"/about"}>
                          <div
                            className="tracking-widest text-2xl font-semibold  text-white hover:text-navGreen cursor-pointer"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                            onMouseEnter={(e) => {
                              setProject({ display: "none" });
                            }}
                          >
                            ABOUT US
                          </div>
                        </Link> */}
                        <div>
                          <div
                            className="tracking-widest text-2xl font-semibold  text-white hover:text-navGreen cursor-pointer"
                            onMouseEnter={(e) => {
                              setProject({ display: "block" });
                            }}
                          >
                            PROJECTS
                          </div>
                          
                          <div
                            className="mt-1 "
                            style={project}
                            onMouseLeave={(e) => {
                              setProject({ display: "none" });
                            }}
                          >
                            <Link to={"/completedprojects"}>
                              <div
                                className="pl-3 tracking-widest text-lg font-semibold  text-white hover:text-navGreen cursor-pointer"
                                onClick={() => {
                                  setOpen(false);
                                  setProject({ display: "none" });
                                }}
                                ref={cancelButtonRef}
                              >
                                Completed Projects
                              </div>
                            </Link>
                            <Link to={"/products"}>
                              <div
                                className="pl-3 tracking-widest text-lg font-semibold  text-white hover:text-navGreen cursor-pointer"
                                onClick={() => {
                                  setOpen(false);
                                  setProject({ display: "none" });
                                }}
                                ref={cancelButtonRef}
                              >
                                Ongoing Projects
                              </div>
                            </Link>
                            <Link to={""}>
                              <div
                                className="pl-3 tracking-widest text-lg font-semibold  text-white hover:text-navGreen cursor-pointer"
                                onClick={() => {
                                  setOpen(false);
                                  setProject({ display: "none" });
                                }}
                                ref={cancelButtonRef}
                              >
                                Upcoming Projects
                              </div>
                            </Link>
                          </div>
                          
                        </div>
                        <Link to={"/allblogs"}>
                          <div
                            className="tracking-widest text-2xl font-semibold  text-white hover:text-navGreen cursor-pointer"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                          >
                            BLOGS
                          </div>
                        </Link>
                        {/* <Link to={`/enquiry?q=${1}`}><div className="tracking-widest text-2xl font-semibold  text-white hover:text-navGreen cursor-pointer" onClick={() => setOpen(false)}ref={cancelButtonRef}>ENQUIRY</div></Link> */}
                        <Link to={"/contact"}>
                          <div
                            className="tracking-widest text-2xl font-semibold  text-white hover:text-navGreen cursor-pointer"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                            onMouseEnter={(e) => {
                              setStyle({ display: "none" });
                            }}
                          >
                            CONTACT US
                          </div>
                        </Link>

                        <div>
                          <div
                            className="tracking-widest text-2xl font-semibold  text-white hover:text-navGreen cursor-pointer"
                            onMouseEnter={(e) => {
                              setStyle({ display: "block" });
                            }}
                          >
                            FAQs
                          </div>
                          <div
                            className="mt-1 transition-all ease-in duration-75 "
                            style={style}
                            onMouseLeave={(e) => {
                              setStyle({ display: "none" });
                            }}
                          >
                            <Link to={"/homeloanfaqs"}>
                              <div
                                className="pl-3 tracking-widest text-lg font-semibold  text-white hover:text-navGreen cursor-pointer"
                                onClick={() => {
                                  setOpen(false);
                                  setStyle({ display: "none" });
                                }}
                                ref={cancelButtonRef}
                              >
                                HOME LOAN FAQs
                              </div>
                            </Link>
                            <Link to={"/nrifaqs"}>
                              <div
                                className="pl-3 tracking-widest text-lg font-semibold  text-white hover:text-navGreen cursor-pointer"
                                onClick={() => {
                                  setOpen(false);
                                  setStyle({ display: "none",opacity:"0" });
                                }}
                                ref={cancelButtonRef}
                              >
                                NRI FAQs
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-end h-32 mb-11">
                        <div class="flex justify-center">
                          <div class="mb-3 xl:w-96">
                            <div class="input-group relative flex  items-stretch w-full mb-4">
                              <input
                                type="search"
                                class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon2"
                                name="search"
                                onChange={(e) => handleChange(e)}
                                value={searchInputs}
                              />

                              {/* <Link 
                               to={`/search?q=${searchInputs}`}
                               ref={cancelButtonRef}
                              class="btn flex justify-center  px-6 py-2.5 bg-navGreen text-white font-medium text-xs leading-tight uppercase rounded shadow-md        transition duration-150 ease-in-out items-center"
                              > */}
                                
                               <SearchComponent setOpen={setOpen} searchInputs={searchInputs}/>
                              {/* </Link> */}

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        {/* Modal Ends */}
      </div>
    </Router>
  );
}

export default App;

