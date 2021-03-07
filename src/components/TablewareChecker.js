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
    var Input = document.getElementById("tableware-question-input-id").value;
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
              <div className="checktable">
                <input
                  type="checkbox"
                  id="tableware-name"
                  name="tableware-name"
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
            print("You don't have enough tableware. Maybe buy more? Or don't invite so many people idk.")  */}
      </div>
    </div>
  );
};

export default TablewareChecker;
