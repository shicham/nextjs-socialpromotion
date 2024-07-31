"use client"
import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import TasksList from './tasks-list';

export default function TasksCategories(){
  return (
		<div className='content-body lg:h-[calc(100%-60px)]  h-[calc(100%-55px)] overflow-hidden'>
			<ScrollArea className='lg:h-[calc(100%-120px)]  h-[calc(100%-110px)]'>
				<div className="">
					<div className="">
						<div className="card-body pd-0">
							<div className="">
								<div className="">
								<TasksList />
								</div>
							</div>
						</div>
					</div>
				</div>
			</ScrollArea>
			<div className='fixed bottom-0 border-t p-1 flex flex-row items-center justify-between px-[25px] w-full bg-[#eee]'>
				<div>hhh</div>
				<div>hhh</div>
			</div>
		</div>
  )
}
