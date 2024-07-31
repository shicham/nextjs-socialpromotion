import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,UserRound
} from "lucide-react";

export const advertise = [
  {
    text: "DASHBOARD",
    type: "nav-heading",
    items: [
		{
			text: "Dashboard",
			path: "/",
			icon: <Inbox />,
			type: "nav-item",
		},
		{
			text: "Add Funds",
			path: "/add-funds",
			icon: <AlertCircle />,
			type: "nav-item",
		}
	]
  },
  {
    text: "SOCIAL PROMOTION",
    type: "nav-heading",
    items: [
		{
			text: "Add New Campaign",
			path: "/add-new-compaign",
			icon: <Inbox />,
			type: "nav-item"
		},
		{
			text: "My Campaigns",
			path: "/my-campaigns",
			icon: <AlertCircle />,
			type: "nav-item"
		}
	]
  },
  
]

export type AdvertiseMenu = (typeof advertise)[number]
