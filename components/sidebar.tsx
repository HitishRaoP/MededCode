import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const list = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Dashboard",
        href: "/dashboard",
    },
    {
        name: "Success Stories",
        href: "/success-stories",
    }
]
export function Sidebar() {
    return (
        <Sheet>
            <SheetTrigger>
                <RxHamburgerMenu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-4">
                        <span className="font-bold font-mono text-xl text-blue-700 px-0">NeuroTrack</span>
                    </SheetTitle>
                    <SheetDescription className="flex flex-col gap-4 py-4">
                        {
                            list.map((item) => (
                                <Button variant={'ghost'} className="text-lg flex justify-start m-0" asChild key={item.name}>
                                    <Link href={item.href}>{item.name}</Link>
                                </Button>
                            ))
                        }
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}