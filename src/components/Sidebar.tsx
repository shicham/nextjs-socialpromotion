"use client"
import * as React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
interface MenuItemsProps {
  text: '',
  items: MenuItemsProps[]
}

export default function Sidebar({ menuItems  }: MenuItemsProps) {
	const pathname = usePathname()
	return (
		<aside className='fixed top-0 bottom-0 left-0 z-[1000] w-60 h-full -translate-x-full xl:translate-x-0 	 '>
			<div className="aside-head flex items-center justify-between h-[54px] px-[18px] border-r translate-x-[54px] lg:px-5 lg:transform-none lg:h-[59px] 	 	">
				<a href="../../index.html" className="text-[22px]  font-bold tracking-tight mt-[-3px] aside-head-logo">dash<span className="font-normal">forge</span></a>
				<a href="">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu w-5 h-5 stroke-2 mt-[-3px]"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x  hidden w-5 h-5 stroke-2 mt-0"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
				</a>
			</div>
			<div className="aside-body relative overflow-hidden  h-[calc(100%-59px)] border-t border-r ">
				<div className="aside-user  p-[5px] border-b px-6 lg:h-[60px] h-[55px] mb-6 flex flex-row items-center justify-between">
						<div className="avatar w-auto relative flex items-center justify-between">
							<a className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-[#d44f00] text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package2 h-4 w-4 transition-all group-hover:scale-110"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path><path d="M12 3v6"></path></svg><span className="sr-only">Acme Inc</span></a>
						</div>
						<div className="flex ml-auto items-center aside-alert-link max-lg:opacity-0 max-lg:invisible max-lg:fixed">
						  <a href="" className="new relative text-slate-500 block">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square w-4 h-4 stroke-2 pointer-events-none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></a>
						  <a href="" className="new relative text-slate-500 block ml-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell w-4 h-4 stroke-2 pointer-events-none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></a>
						</div>
					
				</div>
				
					{menuItems.map( (head) => (
						<ul key={head.text+'head'} className="aside-menu flex-col leading-[1.6] text-xs whitespace-nowrap mb-6 px-6">
						<li key={ head.text } className="relative text-[10px] font-medium uppercase  mb-1 text-[var(--menu-head-color)] font-jakarta mt-6 nav-heading">{head.text}</li>
							{head.items.map( (link) => (
								<li key={ link.text } 
									className={cn(
										"nav-item relative ",
										pathname === link.path &&
										  "active"
									)}
								>
									<Link href={head.path+link.path} className="aside-menu-link flex items-center h-7 text-sm font-medium  ">
										<link.icon className="feather feather-globe h-4 w-4 mr-4"/>
										<span>{ link.text }</span>
									</Link>
								</li>
							))}
						</ul>
					))}
				
			</div>
		</aside>
  )
 };