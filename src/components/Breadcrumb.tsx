"use client"
import * as React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation'
interface BreadcrumbProps {
  text: '',
  items: BreadcrumbProps[]
};


export function found(menuItems,key,value) {
	return menuItems.find((ele) => ele[key] === value);
}
export default function Breadcrumb({ menuItems  }: BreadcrumbProps) {
const router = useRouter()
	const pathname = usePathname().replace('/','');
	const main = pathname.split("/")[0];
	const page = pathname.split("/")[1];
	console.log('pathname.replace',pathname );
    console.log('main',main );
	console.log('page',page );
	//console.log('router',router );
	//const menus = menuItems.find((ele) => ele.path === pathname.split("/")[1]);
	return (
		<nav>
			{menuItems.filter((ele) => ele.path.replace("/", '') === main).map( (head) => (
					<ol key={head.text+'head'} className="breadcrumb">
					
					<li key={head.text} className="breadcrumb-item"><a href="#">{head.text}</a></li>
					{head.items.filter((ele) => ele.path.replace("/", '') === page).map( (link) => (
						<li key={link.text} className="breadcrumb-item active">{link.text}</li>
					))}
					
					</ol>
			))}
				
			
		</nav>
	
	)
}