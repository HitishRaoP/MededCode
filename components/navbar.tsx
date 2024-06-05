"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sidebar } from "@/components/sidebar"
import { Profile } from "@/components/profile"
import { Add } from "./add"

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: NavbarProps) {
    return (
        <NavigationMenu className={cn("my-4", className)}>
            <div className="hidden sm:flex justify-between items-center w-full">
                <NavigationMenuList className="flex w-full gap-x-4 justify-between items-center">
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-bold font-mono text-xl text-blue-700 px-0")}>
                                NeuroTrack
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/dashboard" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Dashboard
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/success-stories" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Success Stories
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList className="flex items-center gap-4">
                    <NavigationMenuItem>
                        <Profile />
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Add />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </div>
            <div className="flex items-center justify-between w-full sm:hidden">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Sidebar />
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList className="flex items-center gap-4">
                    <NavigationMenuItem>
                        <Add />
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Profile />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </div>
        </NavigationMenu>
    )
}