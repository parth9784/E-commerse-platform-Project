import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default function Heading({c}){
    return(
        <div className="flex justify-between items-center shadow-lg mt-3 bg-white">
            <img src="data:image/png;base64,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" className="h-[80px] ml-[50px]"/>
            <div className="flex gap-8 mr-5">
                <Link to="/" className="flex gap-2 items-center text-center"><i class="fa-solid fa-house"></i>Home</Link>
                <Link className="flex gap-2 items-center text-center"><i class="fa-solid fa-address-card"></i>About</Link>
                <Link className="flex gap-2 items-center text-center"><FaShoppingCart />Cart</Link>
                <span className="w-[25px] h-[25px] bg-black rounded-full p-1 text-white absolute top-[22px] right-[143px]">{c}</span>
                <Link className="flex gap-2 items-center text-center"><i class="fa-solid fa-user"></i>
                Account</Link>
            </div>
        </div>
    );
}