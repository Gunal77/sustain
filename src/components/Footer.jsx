import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return(
        <div className="font-spaceGrotsek">
            <div className=" text-white bg-black text-xl">
                <h1 className="p-10 text-2xl font-bold">Newsletter</h1>
                <div className=" text-center flex flex-col gap-9">
                    <h1  data-name="Newsletter" id="uppercase-after" className="pt-3 text-2xl font-bold">Subscribe to news flash</h1>
                    <p className="pt-3 ml-[32%] max-w-[35%] text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quos fugiat consequatur libero aliquid alias.
                    </p>
                    <form className="pt-5 pb-10 text-black">
                      <input type="email" value={"enter your email"} placeholder="Enter your email" />
                      <button className="btn form-btn border-white " type="submit">
                        <div className="text-white  border-[2px] border-white ">
                      <MdEmail />
                      </div>
                      </button>
                    </form>
                </div>
            </div>
            <div className="end-footer py-5 pl-4 flex gap-44 pr-36 bg-[#252830] text-lg text-gray-400">
              <div className=" flex flex-col gap-5">
                <h1 className="text-2xl text-white">Newsflash</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id aliquam quae?</p>
                <div className="flex text-2xl gap-2">
                    <FaInstagram />
                    <CiFacebook />
                    <FaTwitter />
                    <FaPinterest />
                  </div>
                  <p className="pt-10">@2021 newsflash all rights reseved</p>
              </div>
              <div className="flex flex-col gap-5 list-none">
                <h1 className="text- 2xl text-white ">Categories</h1>
                  <li>Travel</li>
                  <li>Foot</li>
                  <li>Health</li>
                  <li>Nature</li>
                  <li>Fitness</li>
              </div>
              <div className="flex flex-col gap-5 list-none">
                <h1 className="text- 2xl text-white">Useful-Links</h1>
                <li>Travel</li>
                <li>Foot</li>
                <li>Health</li>
                <li>Nature</li>
                <li>Fitness</li>
              </div>
              <div className="flex flex-col gap-5 list-none">
                <h1 className="text- 2xl text-white">Company</h1>
                <li>Travel</li>
                <li>Foot</li>
                <li>Health</li>
                <li>Nature</li>
                <li>Fitness</li>
              </div>
            </div>
        </div>
    )
}

export default Footer;