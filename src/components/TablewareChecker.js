import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const TablewareChecker = ({ activeButton, setActiveButton, ingAndRec }) => {
  const [
    missingTablewareDictionaries,
    setMissingTablewareDictionaries,
  ] = useState([]);
  const CloseButtonPressed = () => {
    if (activeButton) {
      setActiveButton(!activeButton);
      document
        .getElementsByClassName("tableware-checker")[0]
        .setAttribute("id", "Hidden");
    }
  };
  const CloseButtonPressedFinalMessage = () => {
    if (activeButton) {
      setActiveButton(!activeButton);
      document
        .getElementsByClassName("final-message")[0]
        .setAttribute("id", "Hidden");
    }
  };

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

    let Checkbox = document.getElementsByClassName("tableware-checkmark"); //literalmente as checkboxes ugh
    let TablewareValueList = []; //lista ordenada de verdadeiros e falsos
    let i;
    for (i = 0; i < Checkbox.length; i++) {
      TablewareValueList.push(Checkbox[i].checked);
    }

    let TrueValueList = [];
    let TrueNameList = [];
    let TrueQuantityList = [];

    for (i = 0; i < TablewareValueList.length; i++) {
      if (TablewareValueList[i]) {
        TrueValueList.push(TablewareValueList[i]);
        TrueNameList.push(TablewareNameList[i]);
        TrueQuantityList.push(TablewareQuantityList[i]);
      }
    }

    let MissingTablewareName = [];
    let MissingTablewareQuantity = [];

    for (i = 0; i < TrueValueList.length; i++) {
      if (Input > TrueQuantityList[i]) {
        MissingTablewareName.push(TrueNameList[i]);
        MissingTablewareQuantity.push(TrueQuantityList[i]);
      }
    }

    let TablewareDifference = [];

    for (i = 0; i < MissingTablewareName.length; i++) {
      TablewareDifference.push(Input - MissingTablewareQuantity[i]);
    }

    var MissingTablewareDictionaries = [];

    for (i = 0; i < MissingTablewareName.length; i++) {
      let Dict = {
        name: MissingTablewareName[i],
        missingQuantity: TablewareDifference[i],
      };
      MissingTablewareDictionaries.push(Dict);
    }

    setMissingTablewareDictionaries(MissingTablewareDictionaries);

    console.log(TablewareNameList);
    console.log(TablewareQuantityList);
    console.log(TablewareValueList);
    console.log(TrueValueList);
    console.log(TrueNameList);
    console.log(TrueQuantityList);
    console.log(MissingTablewareName);
    console.log(MissingTablewareQuantity);
    console.log(TablewareDifference);
  };

  const TablewareText = () => {
    let MissingTablewareDictionaries = [...missingTablewareDictionaries];
    let i = 0;
    let Text = "Uh-oh! It appears like you're missing ";
    let Go = "You have enough tableware. Enjoy your meal!";
    return MissingTablewareDictionaries.map((item) => {
      i++;
      if (i + 1 == MissingTablewareDictionaries.length) {
        return item.missingQuantity + " " + item.name + " and ";
      } else if (i + 1 < MissingTablewareDictionaries.length) {
        return item.missingQuantity + " " + item.name + ", ";
      } else if (i == MissingTablewareDictionaries.length) {
        return item.missingQuantity + " " + item.name + ".";
      } else {
        return "";
      }
    });
  };

  return (
    <div className="tableware-checker">
      <div className="button-close">
        <button onClick={CloseButtonPressed} id="button-close-id">
          <AiOutlineClose />
          <p>Close</p>
        </button>
      </div>

      <div className="tableware-checker-content">
        <p className="tableware-question">
          How many people are going to have this meal?
        </p>
        <input
          className="tableware-question-input"
          id="tableware-question-input-id"
          type="number"
        />
        <p className="tableware-second-question">
          What tableware do you need for your meal?
        </p>
        <div className="outer-checktable">
          {ingAndRec.Tableware.map((tab) => {
            return (
              <div className="checktable" id="checktable-id">
                <input
                  type="checkbox"
                  id="tableware-name"
                  className="tableware-checkmark"
                  value={tab}
                />
                <label for="tableware-name"> {tab.Name} </label>
              </div>
            );
          })}
        </div>

        <button
          onClick={ButtonSubmit}
          className="tableware-question-submit-button"
        >
          Submit
        </button>
      </div>
      <div className="final-message">
        <div className="button-close">
          <button onClick={CloseButtonPressedFinalMessage} id="button-close-id">
            <AiOutlineClose />
            <p>Close</p>
          </button>
        </div>
        <div className="something-missing">
          <p className="something-missing-text">
            Uh-oh! It appears like you're missing <TablewareText />
          </p>
        </div>
        <div className="nothing-missing">
          <p className="nothing-missing-text">
            You have enough tableware. Enjoy your meal!
          </p>
          {/* if tableware >= number of people:
              print("You have enough tableware. Enjoy your meal.")
            else:
            print("You don't have enough tableware. Maybe more [Tableware.Name].")*/}
        </div>
      </div>
    </div>
  );
};

export default TablewareChecker;
