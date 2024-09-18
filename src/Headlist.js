import React from "react";
import { useContext } from "react";
import data from "./create";


export default function HeadlistData(){

      const Deadser=useContext(data)
    return(

        <div>

            <h1>Headline component:{Deadser}</h1>
        </div>
    );
}