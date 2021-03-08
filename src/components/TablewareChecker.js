import { AiOutlineClose } from "react-icons/ai";

const TablewareChecker = ({ activeButton, setActiveButton, ingAndRec }) => {
  const CloseButtonPressed = () => {
    if (activeButton) {
      setActiveButton(!activeButton);
      document
        .getElementsByClassName("tableware-checker")[0]
        .setAttribute("id", "Hidden");
    }
  };
  const ButtonSubmit = () => {
    var Input = document.getElementById("tableware-question-input-id").value; //input integer

    var TablewareNameList = ingAndRec.Tableware.map((tab) => {
      //lista ordenada de nomes de tableware
      return tab.Name;
    });

    var TablewareQuantityList = ingAndRec.Tableware.map((tab) => {
      //lista ordenada de quantidades de tableware
      return tab.Quantity;
    });

    var Checkbox = document.getElementsByClassName("tableware-checkmark"); //literalmente as checkboxes ugh
    var TablewareValueList = []; //lista ordenada de verdadeiros e falsos
    var i;
    for (i = 0; i < Checkbox.length; i++) {
      TablewareValueList.push(Checkbox[i].checked);
    }

    var TrueValueList = [];
    var TrueNameList = [];
    var TrueQuantityList = [];

    for (i = 0; i < TablewareValueList.length; i++) {
      if (TablewareValueList[i]) {
        TrueValueList.push(TablewareValueList[i]);
        TrueNameList.push(TablewareNameList[i]);
        TrueQuantityList.push(TablewareQuantityList[i]);
      }
    }

    var FinalList = [];

    for (i = 0; i < TrueValueList.length; i++) {
      if (Input > TrueQuantityList[i]) {
        FinalList.push(TrueNameList[i]);
      }
    }

    console.log(TablewareNameList);
    console.log(TablewareQuantityList);
    console.log(TablewareValueList);
    console.log(TrueValueList);
    console.log(TrueNameList);
    console.log(TrueQuantityList);
    console.log(FinalList);
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

        {/* if tableware >= number of people:
            print("You have enough tableware. Enjoy your meal.")
          else:
            print("You don't have enough tableware. Maybe more [Tableware.Name].")  */}
      </div>
    </div>
  );
};

export default TablewareChecker;
