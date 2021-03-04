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
    </section>
  );
};

export default Tableware;
