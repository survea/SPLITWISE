import React from "react";
export  const PaidTo = (props)=>{
 return(
     <div className = "boxtwo">
          <div className = "fheader">   
        <span>Paid To</span>
        </div>
        {/*displayig the names in list */}
        <ul className = "list">
        {props.list.map((value)=>{
               return  <li onClick = {(event)=>{
                    props.toValue(event.target.id);
                  
                }} id = {value}>
                    <img className = "pro-img"src={require("../../../images/person-profile.png")} alt="" srcset=""/>
                    {value}</li>
    
            })}
        </ul>
     </div>
 )   
}