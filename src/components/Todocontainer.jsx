import Addtodoform from "./Addtodoform";
import Todolist from "./Todolist";
import {useState} from "react"

function Todocontainer() {
    const [activityArr,setActivityArr] = useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Have Breakfast"
        },
        {
            id:3,
            activity:"Take Shower"
        }
    ])
    return (
        <div>

            <div className="flex gap-5 flex-wrap">
                
                <Addtodoform activityArr={activityArr} setActivityArr={setActivityArr}/>

               <Todolist activityArr={activityArr} setActivityArr={setActivityArr}/>
            </div>
        </div>
    )
}

export default Todocontainer