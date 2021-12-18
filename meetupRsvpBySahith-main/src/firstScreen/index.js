import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "./index.css";
import "react-datepicker/dist/react-datepicker.css";

const errorMassage = "Invalid Input";
class FirstScreen extends Component {
  state = {
    name: "",
    age: 0,
    startDate: new Date(),
    DOB: "",
    profession: "Working",
    locality: "",
    guests: 0,
    address: "",
    errName: "",
    errAge: "",
    errDOB: "",
    errLocality: "",
    errAddress: "",
  };
  dateChange = (date) => {
    if (date === null) {
      date = this.state.startDate;
    }
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    this.setState({
      DOB: `${day}/${month}/${year}`,
      startDate: date,
    });
  };

  nameChange = (event) => {
    if (event.target.value === "") {
      this.setState({
        errName: errorMassage,
      });
    } else {
      this.setState({
        errName: "",
        name: event.target.value,
      });
    }
  };

  ageChange = (event) => {
    if (event.target.value === "" || Number.isInteger(event.target.value)) {
      this.setState({
        errAge: errorMassage,
      });
    } else {
      this.setState({
        errAge: "",
        age: parseInt(event.target.value),
      });
    }
  };

  professionChange = (event) => {
    this.setState({
      profession: event.target.value,
    });
  };

  localityChange = (event) => {
    if (event.target.value === "") {
      this.setState({
        errLocality: errorMassage,
      });
    } else {
      this.setState({
        errLocality: "",
        locality: event.target.value,
      });
    }
  };

  guestsChange = (event) => {
    this.setState({
      guests: parseInt(event.target.value),
    });
  };

  addressChange = (event) => {
    if (event.target.value === "") {
      this.setState({
        errAddress: errorMassage,
      });
    } else {
      this.setState({
        errAddress: "",
        address: event.target.value,
      });
    }
  };

  postTheData = async () => {
    const stringfy = localStorage.getItem("registration");
    let parsefy = JSON.parse(stringfy);
    if (stringfy === null) {
      parsefy = [];
    }
    const getRegistration = parsefy;
    console.log(getRegistration);
    const {
      name,
      age,
      DOB,
      profession,
      locality,
      guests,
      address,
    } = this.state;
    const newDetail = {
      name: name,
      age: age,
      DOB: DOB,
      profession: profession,
      locality: locality,
      guests: guests,
      address: address,
    };
    getRegistration.push(newDetail);
    localStorage.setItem("registration", JSON.stringify(getRegistration));
  };

  formSubmit = (event) => {
    event.preventDefault();
    this.postTheData();
    const { history } = this.props;
    history.replace("/allDetails");
  };

  render(props) {
    const { errAge, errAddress, errDOB, errLocality, errName } = this.state;
    return (
      <div className="container-reg">
        <h1 className="main-head">To travel is to live</h1>
        <div className="cont-form-reg">
          <div className="form-div">
            <h1>Registration</h1>
            <form onSubmit={this.formSubmit}>
              <div className="form-cont-input">
                <label htmlFor="name">Name</label>
                <input
                  className="input-edit"
                  type="text"
                  id="name"
                  onChange={this.nameChange}
                />
                <p>{errName}</p>
              </div>
              <div className="form-cont-input">
                <label htmlFor="age">Age</label>
                <input
                  className="input-edit"
                  type="text"
                  id="age"
                  onChange={this.ageChange}
                />
                <p>{errAge}</p>
              </div>
              <div className="form-cont-input">
                <label htmlFor="date">Date Of Birth</label>
                <DatePicker
                  className="input-edit"
                  id="date"
                  selected={this.state.startDate}
                  onChange={this.dateChange}
                  name="startDate"
                  dateFormat="dd/MM/yyyy"
                />
                <p>{errDOB}</p>
              </div>
              <div className="form-cont-input">
                <label htmlFor="status">Profession</label>
                <select
                  className="input-edit"
                  id="status"
                  onChange={this.professionChange}
                >
                  <option value="Working">Working</option>
                  <option value="Student">Student</option>
                </select>
              </div>
              <div className="form-cont-input">
                <label htmlFor="locality">Locality</label>
                <input
                  className="input-edit"
                  type="text"
                  id="locality"
                  onChange={this.localityChange}
                />
                <p>{errLocality}</p>
              </div>
              <div className="form-cont-input">
                <label htmlFor="guests">Number Of Guests</label>
                <select
                  className="input-edit"
                  id="guests"
                  onChange={this.guestsChange}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="form-cont-input">
                <label htmlFor="address">Address</label>
                <textarea id="address" onChange={this.addressChange} />
                <p>{errAddress}</p>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="img-div">
            <img
              className="img-pro"
              alt="travel"
              src="https://res.cloudinary.com/sahith/image/upload/v1625821337/travel%20submition/julentto-photography-CIuakYIjadc-unsplash_ducmgr.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FirstScreen);
