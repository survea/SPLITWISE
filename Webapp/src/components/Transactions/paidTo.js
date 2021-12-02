// Using the required imports by react

import React from "react";

/**
 * PaidTo function adds to the transaction done by the person to their friends
 * @param {*} props 
 * @returns 
 */
export const PaidTo = (props) => {
    return (
        <div className="secondBox">
            <div className="frnd-header">
                <span className="paid-to">Paid To</span>
            </div>

            {/* Fetching the data passed through the props  */}

            {console.log(props.list)}

            <ul className="myList">
                {props.list.map((value) => {
                    return <li onClick={(event) => {
                        props.toValue(event.target.id);
                    }} id={value}><img className="pro-img" src={require("../../../public/Assets/person-profile-to.png")} alt="Paid To Person"/>{value}</li>

                })}
            </ul>
        </div>
    )
}