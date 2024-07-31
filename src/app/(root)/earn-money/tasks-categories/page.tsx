
import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import TasksList from './tasks-list';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import clientPromise from "@/backend/config/dbConnect";
import dbConnection from "@/backend/config/database";
dbConnection();
async function getCategories() {
    const client = await clientPromise;
    const db = client.db("app_shop");
    const movies = await db
        .collection("categories")
        .find()
        .limit(15)
        .toArray();
    return JSON.parse(JSON.stringify(movies));
}
import CategoryModel from "@/backend/models/categoryModel";
async function getCategoriess() {
    const movies =  CategoryModel.find().limit(15);
    return movies;
}
export default async function TasksCategories(){
   const categories = await getCategories()
  return (
			<ScrollArea className='lg:h-[calc(100%-120px)]  h-[calc(100%-110px)]'>
				<div className="">
					<div className="">
						<div className="card-body pd-0">
							<div className="">
								<div className="">
								<TasksList categories={categories}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ScrollArea>
			
  )
}
