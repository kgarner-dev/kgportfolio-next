import { Menu, Linkedin, Github, Mail, CalendarClock, SquareUser } from "lucide-react"
import { Button } from "../atoms/button"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "../atoms/sheet"
import Link from "next/link"

export function HeaderNav() {
    return (
        <Sheet>
        <SheetTrigger asChild>
          <Menu className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-start gap-4">
          <SheetHeader>
            <SheetTitle>Connect With Me</SheetTitle>
          </SheetHeader>
            <Link href='/' className="flex items-center text-lg gap-2 p-1">
                <Linkedin />
                LinkedIn
            </Link>
            <Link href='/' className="flex items-center text-lg gap-2 p-1">
                <Github />
                GitHub
            </Link>
            <Link href='/' className="flex items-center text-lg gap-2 p-1">
                <SquareUser />
                Bluesky
            </Link>
            <Link href='/' className="flex items-center text-lg gap-2 p-1">
                <Mail />
                Email
            </Link>
            <Link href='/' className="flex items-center text-lg gap-2 p-1">
                <CalendarClock />
                Calendly
            </Link>
        </SheetContent>
      </Sheet>
    )
}