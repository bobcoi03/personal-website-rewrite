import Link from "next/link";

export default function Footer() {
    return(
        <footer className="footer footer-center p-4 text-base-content bg-inherit">
            <div className="flex-row flex gap-8">
                <a
                className="normal-case text-sm font-bold link"
                href="https://github.com/bobcoi03" target="__blank">
                    Github
                </a>
                <a
                className="normal-case text-sm font-bold link"
                href="https://www.linkedin.com/in/minh-luong-95884219b/" target="__blank">
                    LinkedIn
                </a>
                <a
                className="normal-case text-sm font-bold link"
                href="mailto:luongquangminh23@gmail.com" target="__blank">
                    Email
                </a>
            </div>
        </footer>
    )
}