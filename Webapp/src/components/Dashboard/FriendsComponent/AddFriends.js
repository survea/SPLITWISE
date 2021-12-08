import React from 'react';
import "../Styles/Dashboard.scss";
import FriendList from './FriendList'

export const AddFriend = (props)=>{
    return(
        <div className = "AddFriendBox">
         {/* to add the friends */}
         <div className = "content">
            <div className = "friend">
                <label htmlFor="">FRIENDS</label>
                <button onClick = {props.friend} className = " addBtn float-right">+Add</button>
            </div>
            <div>
                <FriendList/>
            </div>
         </div>
        </div>
    )
}