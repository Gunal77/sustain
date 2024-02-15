import React from "react";
import Footer from "./Footer";

function Contact() {
    return(
        <div>
        <div className="flex justify-evenly m-[5rem] gap-8">
            <div>
                <img className="w-[100%] h-[100%]" src="https://images.unsplash.com/photo-1469545638519-c8c20fba687d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div>
                <h1 className="font-spaceGrotsek text-5xl font-bold pb-5">Sustainable Development</h1>
                <p className="text-xl py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vel ipsam error sed repellat impedit.</p>
                <div className="list-none text-2xl flex justify-evenly pt-5 ">
                    <div>
                        <li>New Business
                            <p className="text-lg pt-5 underline hover:no-underline">gunal878@gmail.com</p>
                        </li>
                        <li className="pt-20">General
                        <p className="text-lg pt-5 underline hover:no-underline">gunal878@gmail.com</p>
                        </li>
                    </div>
                    <div className="pl-[5rem]">
                        <li className="pb-[2px]">Press
                        <p className="underline pt-5 text-lg hover:no-underline">gunal878@gmail.com</p>
                        </li>
                        <li className="pt-20">Join us
                        <p className="text-lg pt-5 underline hover:no-underline">gunal878@gmail.com</p>
                        <p className="text-lg font-semibold">(Various openings)</p>
                        <button className="mt-[1rem] border-[1px] rounded-full border-gray-400 p-1 px-2 uppercase text-sm text-white bg-black" type="button">Apply now</button>
                        </li>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1 className="text-5xl text-center font-bold uppercase">Offices</h1>
            <div className="flex list-none m-[5rem] gap-[1rem] justify-center">
            <div className="w-[42%] h-[48%]">
                <li className="mb-[1rem]">
                    <img src="https://images.unsplash.com/photo-1629517797905-ee64c208d9f9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span className="flex justify-between pt-5">
                    <span className="text-2xl font-spaceGrotsek font-bold">Neyvelli</span><span>4:30 AM PST</span>
                    </span>
                    <p className="pt-4 uppercase">12 street avenue<br></br>south street</p>
                </li>
                <li  className="mb-[1rem]">
                    <img src="https://images.unsplash.com/photo-1564417947365-8dbc9d0e718e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span className="flex justify-between pt-5">
                    <span className="text-2xl font-spaceGrotsek font-bold">Neyvelli</span><span>4:30 AM PST</span>
                    </span>
                    <p className="pt-4 uppercase">12 street avenue<br></br>south street</p>
                </li>
                <li  className="mb-[1rem]">
                    <img src="https://images.unsplash.com/photo-1632103996718-4a47cf68b75e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span className="flex justify-between pt-5">
                    <span className="text-2xl font-spaceGrotsek font-bold">Neyvelli</span><span>4:30 AM PST</span>
                    </span>
                    <p className="pt-4 uppercase">12 street avenue<br></br>south street</p>
                </li>
                <li  className="mb-[1rem]">
                    <img src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span className="flex justify-between pt-5">
                    <span className="text-2xl font-spaceGrotsek font-bold">Neyvelli</span><span>4:30 AM PST</span>
                    </span>
                    <p className="pt-4 uppercase">12 street avenue<br></br>south street</p>
                </li>
            </div>
            <div className="w-[42%] h-[48%]">
                <li  className="mb-[1rem]">
                    <img src="https://plus.unsplash.com/premium_photo-1680210006949-a0b4754d70b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span className="flex justify-between pt-5">
                    <span className="text-2xl font-spaceGrotsek font-bold">Neyvelli</span><span>4:30 AM PST</span>
                    </span>
                    <p className="pt-4 uppercase">12 street avenue<br></br>south street</p>
                </li>
                <li  className="mb-[1rem]">
                    <img src="https://images.unsplash.com/photo-1619246117564-9dd109a1fe17?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span className="flex justify-between pt-5">
                    <span className="text-2xl font-spaceGrotsek font-bold">Neyvelli</span><span>4:30 AM PST</span>
                    </span>
                    <p className="pt-4 uppercase">12 street avenue<br></br>south street</p>
                </li>
                <li  className="mb-[1rem]">
                    <img src="https://images.unsplash.com/photo-1566218246241-934ad8b38ea6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span className="flex justify-between pt-5">
                    <span className="text-2xl font-spaceGrotsek font-bold">Neyvelli</span><span>4:30 AM PST</span>
                    </span>
                    <p className="pt-4 uppercase">12 street avenue<br></br>south street</p>
                </li>
                <li  className="mb-[1rem] ">
                    <img src="https://images.unsplash.com/photo-1626174630159-5331060caa95?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span className="flex justify-between pt-5">
                    <span className="text-2xl font-spaceGrotsek font-bold">Neyvelli</span><span>4:30 AM PST</span>
                    </span>
                    <p className="pt-4 uppercase">12 street avenue<br></br>south street</p>
                </li>
            </div>
            </div>
        </div>
        <div>
            <div className="border-b-2 border-black w-[95%] mx-[2rem] mb-[3rem]"></div>
        </div>
        <div className="flex gap-[14rem] ml-[8rem]">
            <div className="text-4xl font-bold uppercase">Follow</div>
            <div className="list-none text-lg font-spaceGrotsek pb-[6rem]">
                <li className="uppercase font-bold text-2xl pb-4">social</li>
                <li className="underline">Instagram</li>
                <li className="underline">Twitter</li>
                <li className="underline">Linkedin</li>
                <li className="underline">Facebook</li>
            </div>
        </div>
        <Footer />
        </div>
    )
}
export default Contact;