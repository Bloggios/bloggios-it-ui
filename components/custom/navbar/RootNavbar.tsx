import React from 'react';
import Link from "next/link";
import Image from "next/image";
import NavbarLinks from "@/components/custom/navbar/component/NavbarLinks";
import ThemeToggle from "@/components/custom/dropdown/ThemeToggle";
import {Button} from "@nextui-org/react";

const RootNavbar = () => {
    return (
        <nav className={"sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"}>
            <div className={"container h-14 flex max-w-screen-xl items-center justify-between"}>
                <div className={"flex flex-row gap-10 items-center"}>
                    <MainLogo />
                    <NavbarLinks />
                </div>

                <div className={"flex gap-2 items-center"}>
                    <Button className={"rounded-full bg-[#4258ff] text-white"} size={"md"}>
                        Get Started
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

/**
 * Main Logo Widget for Navbar
 * @constructor
 */
const MainLogo = () => {
    return (
        <Link href={"/"} className={"flex flex-shrink-0 items-center gap-1"} >
            <Image
                src={"/assets/bg-accent_rounded.svg"}
                alt={"Bloggios"}
                width={28}
                height={28}
            />
            <span className={"hidden text-xl sm:inline-block pt-[2px] font-light"}>
                        Bloggios
                    </span>
        </Link>
    )
}

export default RootNavbar;