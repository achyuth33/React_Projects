import { Component } from "react";
import SelectOpt from "../selectOption";
import "./index.css";

const ageStatus = {
  All: "All",
  age13: "13-18",
  age18: "18-25",
  age25: "25+",
};
class SecondAndThird extends Component {
  state = { ageStatusSet: ageStatus.All };
  setDetailsForm = () => {
    return (
      <>
        <div className="main-cont" key="1">
          <h1>Name</h1>
          <h1>Age</h1>
          <h1>Date of Birth</h1>
          <h1>Profession</h1>
          <h1>Guests</h1>
          <h1>Locality</h1>
          <h1>address</h1>
        </div>
        <hr />
      </>
    );
  };
  getDetailsList = () => {
    let getDetails = JSON.parse(localStorage.getItem("registration"));
    return getDetails.map((data) => (
      <>
        <div className="main-cont" key={data.name}>
          <p>{data.name}</p>
          <p>{data.age}</p>
          <p>{data.DOB}</p>
          <p>{data.profession}</p>
          <p>{data.guests}</p>
          <p>{data.locality}</p>
          <p>{data.address}</p>
        </div>
        <hr />
      </>
    ));
  };

  getDetails13 = () => {
    let getDetails = JSON.parse(localStorage.getItem("registration"));
    let age13 = getDetails.filter((data) => data.age < 18);
    console.log(age13);
    return age13.map((data) => (
      <>
        <div className="main-cont" key={data.name}>
          <p>{data.name}</p>
          <p>{data.age}</p>
          <p>{data.DOB}</p>
          <p>{data.profession}</p>
          <p>{data.guests}</p>
          <p>{data.locality}</p>
          <p>{data.address}</p>
        </div>
        <hr />
      </>
    ));
  };

  getDetails18 = () => {
    let getDetails = JSON.parse(localStorage.getItem("registration"));
    let age13 = getDetails.filter((data) => data.age < 25 && data.age >= 18);
    console.log(age13);
    return age13.map((data) => (
      <>
        <div className="main-cont" key={data.name}>
          <p>{data.name}</p>
          <p>{data.age}</p>
          <p>{data.DOB}</p>
          <p>{data.profession}</p>
          <p>{data.guests}</p>
          <p>{data.locality}</p>
          <p>{data.address}</p>
        </div>
        <hr />
      </>
    ));
  };

  getDetails25 = () => {
    let getDetails = JSON.parse(localStorage.getItem("registration"));
    let age13 = getDetails.filter((data) => data.age > 25);
    console.log(age13);
    return age13.map((data) => (
      <>
        <div className="main-cont" key={data.name}>
          <p>{data.name}</p>
          <p>{data.age}</p>
          <p>{data.DOB}</p>
          <p>{data.profession}</p>
          <p>{data.guests}</p>
          <p>{data.locality}</p>
          <p>{data.address}</p>
        </div>
        <hr />
      </>
    ));
  };
  ageValue = (value) => {
    this.setState({ ageStatusSet: value });
  };
  getListSelected = (value) => {
    switch (value) {
      case ageStatus.All:
        return this.getDetailsList();
      case ageStatus.age13:
        return this.getDetails13();
      case ageStatus.age18:
        return this.getDetails18();
      case ageStatus.age25:
        return this.getDetails25();
      default:
        return null;
    }
  };
  render() {
    const { ageStatusSet } = this.state;
    return (
      <div className="bg-container">
        <SelectOpt ageValue={this.ageValue} />
        <div className="list-cont">
          {this.setDetailsForm()}
          <div>{this.getListSelected(ageStatusSet)}</div>
        </div>
      </div>
    );
  }
}
export default SecondAndThird;
