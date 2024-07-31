"use client"
import { Button } from "@/components/ui/button"
import Breadcrumb from "@/components/Breadcrumb"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function Header({ user, type = 'desktop', menuItems }: HeaderProps) {
  return (
		<div className="content-header flex items-center lg:h-[60px] lg:px-[25px] justify-between border-b p-[15px] pl-[65px] h-[55px]">
				<div className="content-search  flex items-center">
					
								<Breadcrumb menuItems={menuItems}/>
					
				</div>
				<nav className="flex flex-wrap">
					<ClerkProvider> <SignedIn>
						<UserButton />
					  </SignedIn></ClerkProvider>
				</nav>
			</div>
  )
 };