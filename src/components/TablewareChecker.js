import { AiOutlineClose } from "react-icons/ai";
import { GiCookingPot } from "react-icons/gi";
import { useState } from "react";

const TablewareChecker = ({ activeButton, setActiveButton, ingAndRec }) => {
  const [
    missingTablewareDictionaries,
    setMissingTablewareDictionaries,
  ] = useState([]); //definição do useState para o botao Submit

  const [finalActiveButton, setFinalActiveButton] = useState(false); //definição do useState para o botao de close

  // botao close da tableware checker
  const CloseButtonPressed = () => {
    if (activeButton) {
      setActiveButton(!activeButton);
      document
        .getElementsByClassName("tableware-checker")[0]
        .setAttribute("id", "Hidden");
    }
  };
  // botao close da final message
  const CloseButtonPressedFinalMessage = () => {
    if (finalActiveButton) {
      setFinalActiveButton(!finalActiveButton);
      document
        .getElementsByClassName("final-message")[0]
        .classList.add("Hidden");
    }
  };
  // botao submit
  const ButtonSubmit = () => {
    let Input = document.getElementById("tableware-question-input-id").value; //input integer

    let TablewareNameList = ingAndRec.Tableware.map((tab) => {
      //lista ordenada de nomes de tableware
      return tab.Name;
    });

    let TablewareQuantityList = ingAndRec.Tableware.map((tab) => {
      //lista ordenada de quantidades de tableware
      return tab.Quantity;
    });

    let Checkbox = document.getElementsByClassName("tableware-checkmark"); //checkboxes
    let TablewareValueList = []; //lista ordenada de verdadeiros e falsos
    let i;
    for (i = 0; i < Checkbox.length; i++) {
      TablewareValueList.push(Checkbox[i].checked);
    }

    let TrueValueList = []; //lista de trues
    let TrueNameList = []; //lista de nomes
    let TrueQuantityList = []; //lista de quantidades

    for (i = 0; i < TablewareValueList.length; i++) {
      if (TablewareValueList[i]) {
        TrueValueList.push(TablewareValueList[i]);
        TrueNameList.push(TablewareNameList[i]);
        TrueQuantityList.push(TablewareQuantityList[i]);
      }
    }

    let MissingTablewareName = []; //lista de nomes de tableware que falta
    let MissingTablewareQuantity = []; //lista de quantidade de tableware que falta

    for (i = 0; i < TrueValueList.length; i++) {
      if (Input > TrueQuantityList[i]) {
        MissingTablewareName.push(TrueNameList[i]);
        MissingTablewareQuantity.push(TrueQuantityList[i]);
      }
    }

    let TablewareDifference = []; //lista do calculo final de tableware que falta

    for (i = 0; i < MissingTablewareName.length; i++) {
      TablewareDifference.push(Input - MissingTablewareQuantity[i]);
    }

    var MissingTablewareDictionaries = []; //dicionario do calculo final de tableware que falta

    for (i = 0; i < MissingTablewareName.length; i++) {
      let Dict = {
        name: MissingTablewareName[i],
        missingQuantity: TablewareDifference[i],
      };
      MissingTablewareDictionaries.push(Dict);
    }

    setMissingTablewareDictionaries(MissingTablewareDictionaries);

    setFinalActiveButton(!finalActiveButton);
    document
      .getElementsByClassName("final-message")[0]
      .classList.toggle("Hidden");

    // console.log(TablewareNameList);
    // console.log(TablewareQuantityList);
    // console.log(TablewareValueList);
    // console.log(TrueValueList);
    // console.log(TrueNameList);
    // console.log(TrueQuantityList);
    // console.log(MissingTablewareName);
    // console.log(MissingTablewareQuantity);
    // console.log(TablewareDifference);
  };

  //função para os calculos da tableware em falta
  const TablewareText = () => {
    let Text = "Uh-oh! It appears like you're missing ";
    let Go = "You have enough tableware. Enjoy your meal!";
    if (missingTablewareDictionaries.length > 0) {
      let MissingTablewareDictionaries = [...missingTablewareDictionaries];
      let i = 0;
      return (
        Text +
        MissingTablewareDictionaries.map((item) => {
          i++;
          if (i + 1 == MissingTablewareDictionaries.length) {
            return item.missingQuantity + " " + item.name + " and";
          } else if (i + 1 < MissingTablewareDictionaries.length) {
            return item.missingQuantity + " " + item.name + ",";
          } else if (i == MissingTablewareDictionaries.length) {
            return item.missingQuantity + " " + item.name + ".";
          }
        }).join(" ")
      );
    } else {
      return Go;
    }
  };

  return (
    <div className="tableware-checker">
      <div className="button-close">
        {/* close button */}
        <button onClick={CloseButtonPressed} id="button-close-id">
          <AiOutlineClose />
          <p>Close</p>
        </button>
      </div>

      {/* tabela Tableware Checker */}
      <div className="tableware-checker-content">
        {/* primeira pergunta */}
        <p className="tableware-question">
          How many people are going to have this meal?
        </p>
        {/* answer box */}
        <input
          className="tableware-question-input"
          id="tableware-question-input-id"
          type="number"
        />
        {/* segunda pergunta */}
        <p className="tableware-second-question">
          What tableware do you need for your meal?
        </p>
        <div className="outer-checktable">
          {ingAndRec.Tableware.map((tab) => {
            {
              /* definição das checkboxes com o nome de cada tableware item */
            }
            return (
              <div className="checktable" id="checktable-id">
                <label>
                  <input
                    type="checkbox"
                    id="tableware-name"
                    className="tableware-checkmark"
                    value={tab}
                  />
                  {tab.Name}
                </label>
              </div>
            );
          })}
        </div>

        {/* botao submit */}
        <button
          onClick={ButtonSubmit}
          className="tableware-question-submit-button"
        >
          Submit
        </button>
      </div>
      {/* final message em modo hidden */}
      <div className="final-message Hidden">
        {/* respetivo botao de close */}
        <div className="button-close">
          <button onClick={CloseButtonPressedFinalMessage} id="button-close-id">
            <AiOutlineClose />
            <p>Close</p>
          </button>
        </div>
        {/* If you know, you know */}
        <div className="final-fantasy">
          {/* mensagem final com o icon e o texto, com o numero de tableware em falta */}
          <p className="final-message-icon">
            <GiCookingPot />
          </p>
          <p className="final-message-text">
            <TablewareText />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TablewareChecker;
