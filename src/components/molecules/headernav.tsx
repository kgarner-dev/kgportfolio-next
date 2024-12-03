import { Menu, Linkedin, Github, Mail, CalendarClock, SquareUser, FileUser, UserSearch } from "lucide-react"
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
          <Link href='/about' className="flex items-center text-lg gap-2 p-1">
              <UserSearch />
              About Me
          </Link>
          <Link href='/resume' className="flex items-center text-lg gap-2 p-1">
              <FileUser />
              Resume
          </Link>
          <SheetHeader>
            <SheetTitle>Connect With Me</SheetTitle>
          </SheetHeader>
            <Link href='https://www.linkedin.com/in/kalebgarner/' target="_blank" className="flex items-center text-lg gap-2 p-1">
                <Linkedin />
                LinkedIn
            </Link>
            <Link href='https://github.com/kgarner-dev' target="_blank" className="flex items-center text-lg gap-2 p-1">
                <Github />
                GitHub
            </Link>
            <Link href='https://bsky.app/profile/kalebgarner.dev' target="_blank" className="flex items-center text-lg gap-2 p-1">
                <SquareUser />
                Bluesky
            </Link>
            <Link href='mailto:kaleb.garner.15@gmail.com' target="_blank" className="flex items-center text-lg gap-2 p-1">
                <Mail />
                Email
            </Link>
            <Link href='https://calendly.com/kalebgarner' target="_blank" className="flex items-center text-lg gap-2 p-1">
                <CalendarClock />
                Calendly
            </Link>
        </SheetContent>
      </Sheet>
    )
}