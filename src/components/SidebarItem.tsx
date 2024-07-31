"use client"

export default function SidebarItem({ items  }) {
  return (
		{items.map((head) => (
			<div className="relative text-[10px] font-medium uppercase  mb-1 text-[var(--menu-head-color)] font-jakarta mt-6 nav-heading">{head.text}</div>
		))}
					
  )
 };