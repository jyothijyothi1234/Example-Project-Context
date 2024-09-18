import React, { useState } from "react";
import HeadlistData from "./Headlist";
import data from "./create";

export default function FormContext(){

    const Formdata = "usecontext"
    const[update,setUpdate]=useState("");
const[dataUpdate,setDataUpdate]=useState("")

    const EnterData=(e)=>{

        setUpdate(e.target.value)
    }


    return(
        <div>

            <input   placeholder="enter the value"  onChange={EnterData} />
           
            <button onClick={()=>setDataUpdate(update)} >click</button>
            {dataUpdate}
<button   onClick={()=>setDataUpdate("")}>clear</button>

           <data.Provider   value={Formdata}>
<HeadlistData />
           </data.Provider>

        </div>
    );
}