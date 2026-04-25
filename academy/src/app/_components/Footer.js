import { TrophyIcon } from "@heroicons/react/24/outline";
import Row from "./Row";
import { CameraIcon } from "@heroicons/react/24/outline";

export default function Footer() {
    return (
        <div>
            <Row>
        <div className='flex flex-col gap-4 py-4'>
            <h1 className=" text-sky-500  text-2xl font-semibold">BrightPath Academy</h1>
            <p className="text-wrap">Where curiosity grows and potential blooms into brilliance. A nurturing space for the leaders of tomorrow.</p>
            <div className="flex flex-row gap-5 items-center py-4">
                <div className="bg-blue-100 rounded-full p-2 hover:text-blue-50  text-blue-500  hover:bg-blue-300"><TrophyIcon className="w-5 h-5 "/></div>                  
                 <div className="bg-blue-100 rounded-full p-2 text-blue-500 hover:text-sky-100 "><CameraIcon className="w-5 h-5"/></div> 
            </div>
            
          
        
        </div>

         <div>aksdjfakslf</div>
          <div>aksdjfakslf</div>
          <div>aksdjfakslf</div>
      </Row>
      <div class="flex items-center justify-center border-t-2 border-t-blue-50 ">
  <span>Some text</span>
</div>
        </div>
      
    )
}
