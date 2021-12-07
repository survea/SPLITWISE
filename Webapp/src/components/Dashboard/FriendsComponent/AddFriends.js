import React from 'react';
import "../Styles/Dashboard.scss";
import FriendList from './FriendList'
export const AddFriend = (props)=>{
    return(
        <div className = "AddFriendBox">
         
         <div className = "content">
         <div class="input-prepend">
            <span class="add-on"><i class="fa fa-search"><input class="span2" id="filter_search" type="text" placeholder="Filter by name"/></i></span>
         </div>
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