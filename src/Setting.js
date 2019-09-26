import React from "react";
const Setting = props => {
  const { name, initialValue, setValue, param, condition, type } = props;
  const hasCondition = condition === undefined ? true : condition;
  const hasType = type === undefined ? "selection" : type;

  if (hasType === "selection") {
    const options = Object.keys(props.options).map(key => {
      let option = key;
      if (!isNaN(key)) {
        option = Number(key);
      }
      return (
        <button
          key={option}
          onClick={() => setValue(option, param)}
          className={initialValue === option ? "selected" : ""}
        >
          {props.options[option]}
        </button>
      );
    });
    return (
      <tr className={hasCondition ? "shown" : "hidden"}>
        <td>{name}:</td>
        <td className="setting_value">
          {options}
          <hr className="hr_settings" />
        </td>
      </tr>
    );
  }
};

export default Setting;
