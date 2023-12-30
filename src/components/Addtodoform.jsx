import { useState } from "react";


function Addtodoform(props) {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newactivity,setnewactivity] = useState("")

    function handleChange(evt) {
        setnewactivity(evt.target.value)
    }

    function addActivity()
    {
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setnewactivity("")
    }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activies</h1>
            <div>
                <input value={newactivity} onChange={handleChange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?"></input>
                <button onClick={addActivity} className="bg-black text-white p-1 border border-black">Add</button>
            </div>
        </div>
    )
}

export default Addtodoform