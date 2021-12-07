import React from "react";
import { connect } from "react-redux";
import './ExpenseTable.scss';

  var selectedRow;
  function addNewClick() {
    const targetDiv = document.getElementById("expenseTableForm");
    targetDiv.style.display = "block";
  }
  function renderTableData(props) {
    if(props.user.expensis){
        var selectedUserData = props.user.expensis.find((element) => {
            return element.name == props.expenseTable;
          })
            return selectedUserData.data.map((rowData, index) => {
                const { _id, desc, date, ammount } = rowData //destructuring
                return (
                  <tr key={_id}>
                    <td>{desc}</td>
                    <td>{date}</td>
                    <td>{ammount}</td>
                    <td><a onClick={() => this.removeData(_id)}>Delete</a></td>
                  </tr>
                )
             });
}
  }
  async function removeData(id) {
  }
  const ExpenseTable = props => {
    const clickedUser = props.expenseTable;
    return (
        <div>
        {clickedUser != '' &&
      

        <><h1 className="title-styling"><center>Expense List</center></h1><div className="todo-table">
                    <table className="list" id="todoList">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableData(props)}
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