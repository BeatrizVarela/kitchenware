import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { useState } from "react";
import TablewareChecker from "../components/TablewareChecker";
import "../styles/Tableware.scss";

const Tableware = ({ ingAndRec }) => {
  console.log(ingAndRec)
  const [activeButton, setActiveButton] = useState(false);

  const ButtonPressed = () => {
    if (!activeButton) {
      setActiveButton(!activeButton);
      document
        .getElementsByClassName("tableware-checker")[0]
        .setAttribute("id", "Active");
    } else {
      setActiveButton(!activeButton);
      document
        .getElementsByClassName("tableware-checker")[0]
        .setAttribute("id", "Hidden");
    }
  };

  return (
    <section className="tableware">
      <Link to="/" id="Back">
        <BiArrowBack />
      </Link>
      <TablewareChecker
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        ingAndRec={ingAndRec}
      />
      <div className="table">
        <div className="header">
          <ul>
            <li id="header-name">
              <h1>Name</h1>
            </li>
            <li id="header-quantity">
              <h1>Quantity</h1>
            </li>
            <li id="header-type">
              <h1>Type</h1>
            </li>
          </ul>
        </div>

        <div className="tableware-stock">
          <div className="bars"></div>
          <ul>
            {ingAndRec.Tableware.map((tab) => (
              <li>
                <p id="stock-name">{tab.Name}</p>
                <p id="stock-quantity">{tab.Quantity}</p>
                <p id="stock-type">{tab.Type}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="button">
        <button onClick={ButtonPressed} id="check-button">
          <GiKnifeFork />
          <p>Tableware Checker</p>
        </button>
      </div>
    </section>
  );
};

export default Tableware;
