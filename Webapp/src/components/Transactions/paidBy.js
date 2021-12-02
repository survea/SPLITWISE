// Using the required imports by react

import React from "react";

/**
 * PaidBy function adds to the transaction done by the person to their friends
 * @param {*} props 
 * @returns 
 */

export const PaidBy = (props) => {
    return (
        <div className="secondBox">
            <div className="frnd-header">
                <span className="paid-by">Paid By</span>
            </div>

            {/* Fetching the data passed through the props  */}

            {console.log(props.list)}

            <ul className="myList">

                {props.list.map((value) => {
                    return <li onClick={(event) => {
                        props.byValue(event.target.id);
                    }} id={value}>
                        <img className="pro-img" src={require("../../../public/Assets/person-profile.png")} alt="Paid To Person" />{value}</li>
                })
                }
            </ul>
        </div>
    )
}