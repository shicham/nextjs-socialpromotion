import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { advertise } from '@/app/components/MenuItem'
import Breadcrumb from "@/components/Breadcrumb"
export default async function RootLayout({
  children,
  breadcrumbs 
}: Readonly<{
  children: React.ReactNode
  , breadcrumbs: ReactNod;
}>) {


  return (
  
    <main className=''>
	  <Sidebar menuItems={advertise}/>
      <div className="content h-screen pd-0 overflow-hidden">
		
			<Header menuItems={[]}/>
			<div className='content-body content-body lg:h-[calc(100%-60px)]  h-[calc(100%-55px)]'>
				<div className='flex relative  border-b flex items-center justify-between'>
					<div className='font-semibold text-2xl px-8 py-5 '>
						<Breadcrumb menuItems={advertise}/>
						<span className='inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'>PLEASE NOTE! Tasks performed using empty social network accounts (without a profile photo, without friends/subscribers, without several own posts) WILL NOT BE ACCOUNTED AND PAID WHILE WITHDRAWAL OF FUNDS!</span>
					</div>
				</div>
				<div className='content-body lg:h-[calc(100%-30px)]  h-[calc(100%-120px)] '>
					{children}
				</div>
			</div>
      </div>
    </main>
  );
}
