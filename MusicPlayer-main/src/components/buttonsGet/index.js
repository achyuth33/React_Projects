import "./index.css";

const ButtonsGet = (props) => {
  const { givenData, onclickButton, isActive } = props;
  const { id, filter } = givenData;
  const clickButton = () => {
    onclickButton(id);
  };
  const activeClass = isActive ? "but-border" : "";
  return (
    <button className={`but-size ${activeClass}`} onClick={clickButton}>
      {filter}
    </button>
  );
};

export default ButtonsGet;
