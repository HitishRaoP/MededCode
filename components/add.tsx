import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { IoIosAdd } from "react-icons/io";

export function Add() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className=" bg-blue-200 p-1 rounded-full flex gap-2  justify-center items-center">
                <IoIosAdd className="text-xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link href={'/personal'}>
                        Personal Info
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={'/excercise'}>
                        Excercise Info
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={'/progress'}>
                        Progress Info
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={'/success-stories-form'}>
                        Success Stories
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

