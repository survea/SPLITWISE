import React from "react";
export  const PaidBy = (props)=>{
 return(
     <div className = "boxtwo">
          <div className = "fheader">   
        <span>Paid By</span>
        </div>
        {console.log(props.list)}
        {/* displaying the names in list */}
        <ul className = "list">

            {props.list.map((value)=>{
               return  <li onClick = {(event)=>{
                    props.byValue(event.target.id);
                  
                }} id = {value}><img className = "pro-img"src={require("../../images/person-profile.png")} alt="" srcset=""/>{value}</li>
    
            })}
           
        </ul>
     </div>
 )   
}