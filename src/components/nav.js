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
            </div>
            <ThemePickerModal/>
        </div>
    )
}

