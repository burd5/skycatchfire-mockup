import React from 'react'
import NavLink from 'next/link'
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();
  return (
    <div className="header">
        <nav className="flex justify-around mt-24 font-mono cursor-pointer">
            <div className="flex justify-center items-center">
            <img className="w-14 h-14 mr-5" src="https://media-exp1.licdn.com/dms/image/C560BAQFTVJTAQUFLsA/company-logo_200_200/0/1668300025724?e=2147483647&v=beta&t=7Oy9bYe_NfhZe25SHUO5xEsVwVjyzUvbRjSkohbmEog" alt="skycatchfire logo" />
            <NavLink href="/">
            <h1 className="text-3xl text-center tracking-wider">SKYCATCHFIRE</h1>
            </NavLink>
            </div>
            <div className="self-center">
                <ul className="flex flex-row gap-14 text-2xl">
                    <NavLink href='/projects' className={router.pathname == "/projects" ? "active" : ""}>
                    <li>INSIGHTS</li>
                    </NavLink>
                    <NavLink href='/teamMembers' className={router.pathname == "/teamMembers" ? "active" : ""}>
                    <li>TEAM MEMBERS</li>
                    </NavLink>
                    <NavLink href='/portfolio' className={router.pathname == "/portfolio" ? "active" : ""}>
                    <li>PORTFOLIO</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    </div>
  )
}
