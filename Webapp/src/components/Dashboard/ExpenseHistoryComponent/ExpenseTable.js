import React from "react";
import { connect } from "react-redux";
import './ExpenseTable.scss';
import { instance } from '../../../utilities/AxiosConfig'
import { store } from '../../../redux/store';
import { userActionCreator } from '../../../redux/actionCreator/userAction';

var selectedUser;

function addNewClick() {
    const targetDiv = document.getElementById("expenseTableForm");
    targetDiv.style.display = "block";
}
// function to remove expense
async function removeData(rowData, user) {
    // this.setState({ sendingEmail: true })
    var pr = instance.post('/dashboard/deleteExpense', {
        expense: rowData,
        selectedUser: selectedUser,
        loggedInUser: user
    });
    pr.then((response) => {
        console.log(response.data.Status);
        if (response.data.Status == "S") {
            alert(response.data.msg);
            var action = userActionCreator(response.data.doc,'AddUser');
              store.dispatch(action);
            renderTableData(response.data.doc)
        } else {
            alert(response.data.msg);
        }
    })
}
// function to display table
function renderTableData(user) {
    if (user.expensis) {
        var selectedUserData = user.expensis.find((element) => {
            return element.name == selectedUser;
        })
        return selectedUserData.data.map((rowData, index) => {
            const { _id, desc, date, ammount } = rowData //destructuring
            return (
                <tr key={_id}>
                    <td>{desc}</td>
                    <td>{date}</td>
                    <td className={`${ammount > 0 ? "green" : "red"}`}>$ {ammount.toString().replace("-","")}</td>
                    <td className = "red"><a onClick={() => removeData(rowData, user)}><i class="fas fa-trash"></i> Delete</a></td>
                </tr>
            )
        });
    }
}
// function to display settlement information
function displaySettlementInfo(user) {
    if (user.expensis) {
        var selectedUserData = user.expensis.find((element) => {
            return element.name == selectedUser;
        })
        return selectedUserData.settlementData.map((rowData, index) => {
            const { _id, desc, date, ammount } = rowData //destructuring
            return (
                <tr key={_id}>
                    <td>{desc}</td>
                    <td>{date}</td>
                    <td className={`${ammount > 0 ? "green" : "red"}`}>$ {ammount.toString().replace("-","")}</td>
                    <td className = "red"><a onClick={() => removeData(rowData, user)}><i class="fas fa-trash"></i> Delete</a></td>
                </tr>
            )
        });
    }
}
// Fucntion to display the expenses tables
const ExpenseTable = props => {
    const clickedUser = props.expenseTable;
    selectedUser = props.expenseTable;
    return (
        <div>
            {/* Expense Table */}
            {clickedUser != '' &&
                <><h1 className="title-styling"><center>Expense List</center></h1><div>
                    <table className="todo-table" id="todoList">    
                        <thead>
                            <tr className = "green-background">
                                <th>Description</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableData(props.user)}
                        </tbody>
                    </table>
                </div><br />
                {/* settlement table */}
                <h1 className="title-styling"><center>Settlement List</center></h1><div>
                    <table className="todo-table" id="todoList">
                        <thead>
                            <tr className = "green-background">
                                <th>Description</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displaySettlementInfo(props.user)}
                        </tbody>
                    </table>
                </div><br /></>
            }</div>

    )
}
const mapStateToProps = state => {
    console.log("state is  ", state);
    return {
        user: state.user
    };
};

const fn = connect(mapStateToProps);
export default fn(ExpenseTable);