import React from 'react';
import "../../Styles/Dashboard.scss";
import FriendList from './FriendList'
export const AddFriend = (props)=>{
    return(
        <div className = "AddFriendBox">
         
         <div className = "content">
         <div>
            <label htmlFor="">FRIENDS</label>
            <button onClick = {props.friend} className = "float-right">+Add</button>
         </div>
         <div>
               <FriendList/>
         </div>
         </div>
        </div>
    )
}