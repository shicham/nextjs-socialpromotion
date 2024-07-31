
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Archive,
  ArchiveX,
  Clock,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Trash2,Search,ArrowUpDown,Calendar
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,TooltipProvider,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
const ProductFilter = async () => {
  const mail = true;
  return (
    <div className="content-header flex items-center lg:h-[60px] lg:px-[25px] justify-between border-b  pl-[65px] h-[55px]">
		
				<div className="tab-filter flex flex-row gap-1 text-xs whitespace-nowrap h-full  ">
					<div className="tab-filter-item  h-full   flex items-center active"><Button variant="secondary" className=''>All  <Badge variant="outline" className='px-1 ml-1 border-slate-600 text-xs0'>128</Badge></Button></div>
					<div className="tab-filter-item  h-full   flex items-center "><Button variant="ghost">Active <Badge variant="outline" className='px-1 ml-1 border-slate-600 text-xs0'>56</Badge></Button></div>
					<div className="tab-filter-item  h-full   flex items-center "><Button variant="ghost">Pending <Badge variant="outline" className='px-1 ml-1 border-slate-600 text-xs0'>12</Badge> </Button></div>
					<div className="tab-filter-item  h-full   flex items-center"><Button variant="ghost">Archived <Badge variant="outline" className='px-1 ml-1 border-slate-600 text-xs0'>24</Badge></Button></div>
				</div>
		
		<nav className="flex flex-wrap">
			<div className="flex items-center -gap-2">
			<TooltipProvider>
			 <Tooltip>
		 
            <TooltipTrigger asChild>
              <Button variant="btnTol" size="icon" disabled={!mail}>
                <Calendar className="h-4 w-4" />
                <span className="sr-only">Archive</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Archive</TooltipContent>
          </Tooltip>
		  <Separator orientation="vertical" className="mx-1 h-6" />
          <Tooltip>
		 
            <TooltipTrigger asChild>
              <Button variant="btnTol" size="icon" disabled={!mail}>
                <Archive className="h-4 w-4" />
                <span className="sr-only">Archive</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Archive</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="btnTol" size="icon" disabled={!mail}>
                <ArrowUpDown className="h-4 w-4" />
                <span className="sr-only">Move to junk</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Move to junk</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="btnTol" size="icon" disabled={!mail}>
                <Search className="h-4 w-4" />
                <span className="sr-only">Move to trash</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Move to trash</TooltipContent>
          </Tooltip>
		  </TooltipProvider>
		  <Separator orientation="vertical" className="mx-1 h-6" />
			<Button  variant='sky' className='rounded-full py-1 ml-[8px] '>Share</Button>
		  </div>
		  
		</nav>
	</div>
  );
}

export default ProductFilter
