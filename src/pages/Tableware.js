import { Link } from "react-router-dom";
import "../styles/Tableware.scss";

const Tableware = ({ ingAndRec }) => {
  return (
    <section className="tableware">
      <Link to="/">Back</Link>

      <div className="table">
        <div className="bars"></div>
        <div className="header">
          <ul>
            <li id="header-name">
              <p>Name</p>
            </li>
            <li id="header-quantity">
              <p>Quantity</p>
            </li>
            <li id="header-type">
              <p>Type</p>
            </li>
          </ul>
        </div>

        <div className="tableware-stock">
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

      <div className="filter"></div>
    </section>
  );
};

export default Tableware;
