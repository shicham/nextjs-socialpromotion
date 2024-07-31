"use client"
import {
  LayoutDashboard, CreditCard, Wallet, PackagePlus, Logs, ListTodo, Megaphone, Users
  
} from "lucide-react";
export const advertise =  [
  {
    text: "DASHBOARD",
	path: "",
    items: [
		{
			text: "Home",
			path: "/",
			icon: LayoutDashboard,
		},
		{
			text: "Add Funds",
			path: "/add-funds",
			icon: CreditCard,
		},
		{
			text: "Withdraw Funds",
			path: "/withdraw-funds",
			icon: Wallet,
		}
		
	]
  },
  {
    text: "SOCIAL PROMOTION",
	path: "/social-promotion",
    items: [
		{
			text: "Add New Campaign",
			path: "/add-new-compaign",
			icon: PackagePlus,
		},
		{
			text: "My Campaigns",
			path: "/my-campaigns",
			icon: Logs,
		}
	]
  },
  {
    text: "EARN MONEY",
	path: "/earn-money",
    items: [
		{
			text: "Tasks Categories",
			path: "/tasks-categories",
			icon: ListTodo,
		},
		{
			text: "New Category",
			path: "/new-category",
			icon: ListTodo,
		},
		{
			text: "Contests",
			path: "/user-contests",
			icon: Megaphone,
		},
		{
			text: "Affiliates",
			path: "/user-affiliates",
			icon: Users,
		}
	]
  },
  
]