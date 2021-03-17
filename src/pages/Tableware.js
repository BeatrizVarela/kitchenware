import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { useState } from "react";
import TablewareChecker from "../components/TablewareChecker";
import "../styles/Tableware.scss";

//função para a construção da página /tableware
const Tableware = ({ ingAndRec }) => {
  //console.log(ingAndRec)
  const [activeButton, setActiveButton] = useState(false); //definição do useState para o botao Tableware Checker

  // botão Tableware Checker
  const ButtonPressed = () => {
    if (!activeButton) {
      // carregar para abrir
      setActiveButton(!activeButton);
      document
        .getElementsByClassName("tableware-checker")[0]
        .setAttribute("id", "Active");
    } else {
      // após aberto, carregar para fechar
      setActiveButton(!activeButton);
      document
        .getElementsByClassName("tableware-checker")[0]
        .setAttribute("id", "Hidden");
    }
  };

  return (
    <section className="tableware">
      {/* definição do back button */}
      <Link to="/" id="Back">
        <BiArrowBack />
      </Link>
      {/* export do TablewareChecker.js, atraves do botão Tableware Checker */}
      <TablewareChecker
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        ingAndRec={ingAndRec}
      />
      <div className="table">
        {" "}
        {/* definição da tabela de Tableware */}
        <div className="header">
          {" "}
          {/* header da tabela */}
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
          {" "}
          {/* conteudos da tabela */}
          <ul>
            {ingAndRec.Tableware.map((tab) => (
              <li>
                {/* nomes dos tablewares */}
                <p id="stock-name">{tab.Name}</p>
                {/* quantidades dos tablewares */}
                <p id="stock-quantity">{tab.Quantity}</p>
                {/* tipos dos tablewares */}
                <p id="stock-type">{tab.Type}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="button">
        {/* botão para aceder ao Tableware Checker */}
        <button onClick={ButtonPressed} id="check-button">
          <GiKnifeFork />
          <p>Tableware Checker</p>
        </button>
      </div>
    </section>
  );
};

export default Tableware;
