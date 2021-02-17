import axios from "axios";
import React, { Component } from "react";
import "./Employee.css";
class Employees extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((result) => {
        console.log(result);
        this.setState({employees: result.data.results});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClick = () => {
    // sort by name
    const sortedArray = this.state.employees.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
     this.setState({employees: sortedArray})
    console.log(sortedArray);
  
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">
                    <span id="name" onClick={this.handleClick}>
                      Name
                    </span>
                  </th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map((employees) => {
                  return (
                    <tr>
                      <td>
                        <img src={employees.picture.thumbnail} alt="" />
                      </td>
                      <td>
                        {employees.name.first} {employees.name.last}
                      </td>
                      <td>{employees.phone}</td>
                      <td>{employees.email}</td>
                      <td>{employees.dob.date.slice(0, 10)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Employees;
