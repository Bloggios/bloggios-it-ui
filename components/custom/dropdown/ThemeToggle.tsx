"use client";

import {useTheme} from "next-themes";
import {IoIosCloudyNight} from "react-icons/io";
import {Button} from "@/components/ui/button";
import {SunIcon} from "lucide-react";

const ThemeToggle = () => {

    const { setTheme, theme } = useTheme();

    return (
        <Button
            onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}
            size={"icon"}
            variant={"outline"}
            className={"rounded-full"}
        >
            <SunIcon size={20} />
        </Button>
    )
}

export default ThemeToggle;