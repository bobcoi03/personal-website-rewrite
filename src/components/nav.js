"use client";

import Link from "next/link";
import ThemePickerModal from "./themePickerModal";

export default function Nav() {
    return (
        <div className="navbar">
            <div className="flex-1">
                <Link href="/" legacyBehavior>
                    <a className="btn btn-ghost normal-case text-xl">
                        Minh
                    </a>
                </Link>
            </div>
            <div className="navbar-end">
                <Link href="/blogs" className="btn btn-ghost normal-case">
                    Blog
                </Link>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a onClick={()=>window.my_modal_2.showModal()}>
                        Themes
                        </a>
                    </li>
                </ul>
                </div>
            </div>
            <ThemePickerModal/>
        </div>
    )
}

