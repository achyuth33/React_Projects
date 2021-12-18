import "./index.css";

const SelectOpt = (props) => {
  const { ageValue } = props;
  const valueOfAge = (event) => ageValue(event.target.value);
  return (
    <div className="select-cont">
      <select className="select-main" onChange={valueOfAge}>
        <option value="ALL">ALL</option>
        <option value="13-18">13-18</option>
        <option value="18-25">18-25</option>
        <option value="25+">25+</option>
      </select>
    </div>
  );
};
export default SelectOpt;
