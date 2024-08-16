"use client";

import Image from "next/image";
import {
  HomeIcon,
  Menu,
  BookUserIcon,
  VenetianMaskIcon,
  LinkedinIcon,
  SmartphoneIcon,
  GithubIcon,
  InstagramIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetClose,
  SheetFooter,
} from "./sheet";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Card className="shadow-sm shadow-muted">
        <CardContent className="flex items-center justify-between px-5 py-0">
          <figure>
            <Image
              src="/logo.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="Logo Marvel"
              className="w-24"
            ></Image>
          </figure>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="text-3xl text-white" size={16} />
              </Button>
            </SheetTrigger>

            <SheetContent className="flex h-full flex-col gap-8">
              <SheetHeader className="text-lg font-semibold">Menu</SheetHeader>
              <SheetClose asChild>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <HomeIcon size={16} />
                    Home
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <VenetianMaskIcon size={16} />
                    Characters
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <BookUserIcon size={16} />
                    Comics
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    Contact
                  </Button>
                </Link>
              </SheetClose>

              <SheetFooter className="mt-auto w-full">
                <SheetClose className="flex gap-3">
                  <Link href="https://linkedin.com/in/helcio-anicio">
                    <Button>
                      <LinkedinIcon />
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/helcio-anicio">
                    <Button>
                      <SmartphoneIcon />
                    </Button>
                  </Link>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>
    </>
  );
};

export default Header;
