"use client";

import { useState } from "react";
import { MouseEvent } from "react";
function LangButton() {
	//  false corresponds to Georgian and true to English.
	const [language, setLanguage] = useState<boolean>(false);

    const handleClick = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setLanguage(prev => !prev)
    }

	return (
		<label
			onClick={(e) => handleClick(e)}
			className="relative inline-flex items-center cursor-pointer h-[40px] w-[80px] rounded-full bg-main-green-dark"
		>
			<input type="checkbox" className="sr-only peer " />

			<div
				className={`absolute bg-black rounded-full p-[2px] pointer-events-none ${
					!language ? "left-1" : "left-[65%]"
				} transition-all `}
			>
				{!language ? "ge" : "en"}
			</div>
		</label>
	);
	// return (
	// 	<label className="relative inline-flex items-center cursor-pointer">
	// 		<input className="sr-only peer" value="" type="checkbox" />
	// 		<div
	// 			className={`w-20 h-8 rounded-full ring-0 peer duration-500 outline-none bg-main-green-dark overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['ge'] before:text-black before:text-xs before:font-bold before:absolute before:h-6 before:w-6 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:transition-all before:duration-700 shadow-lg peer-checked:shadow-lg after:content-['en'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:w-6 after:h-6 after:z-[-1] peer-checked:after:z-30 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-0 peer-checked:after:translate-y-0`}
	// 		></div>
	// 	</label>
	// );
}

export default LangButton;
