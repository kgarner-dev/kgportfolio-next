import { Menu, Linkedin, Github, Mail, CalendarClock, SquareUser, FileUser, UserSearch, PanelsTopLeft, House } from "lucide-react"

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
        <SheetTrigger asChild>
        <Link href='/' className="flex items-center text-lg gap-2 p-1">
              <House />
              Home
          </Link>
          </SheetTrigger>
          <SheetTrigger asChild>
          <Link href='/about' className="flex items-center text-lg gap-2 p-1">
              <UserSearch />
              About Me
          </Link>
          </SheetTrigger>
          <SheetTrigger asChild>
          <Link href='/resume' className="flex items-center text-lg gap-2 p-1">
              <FileUser />
              Resume
          </Link>
          </SheetTrigger>
          <SheetTrigger asChild>
          <Link href='/projects' className="flex items-center text-lg gap-2 p-1">
              <PanelsTopLeft />
              Projects
          </Link>
          </SheetTrigger>
          <SheetHeader>
            <SheetTitle>Connect With Me</SheetTitle>
          </SheetHeader>
            <SheetTrigger asChild>
            <Link href='https://www.linkedin.com/in/kalebgarner/' target="_blank" className="flex items-center text-lg gap-2 p-1">
                <Linkedin />
                LinkedIn
            </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
            <Link href='https://github.com/kgarner-dev' target="_blank" className="flex items-center text-lg gap-2 p-1">
                <Github />
                GitHub
            </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
            <Link href='https://bsky.app/profile/kalebgarner.dev' target="_blank" className="flex items-center text-lg gap-2 p-1">
                <SquareUser />
                Bluesky
            </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
            <Link href='mailto:kaleb.garner.15@gmail.com' target="_blank" className="flex items-center text-lg gap-2 p-1">
                <Mail />
                Email
            </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
            <Link href='https://calendly.com/kalebgarner' target="_blank" className="flex items-center text-lg gap-2 p-1">
                <CalendarClock />
                Calendly
            </Link>
            </SheetTrigger>
        </SheetContent>
      </Sheet>
    )
}