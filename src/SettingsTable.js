import React from "react";
import Setting from "./Setting";

const SettingsTable = ({ settings }) => {
  return (
    <table>
      <tbody>
        <Setting
          name="Theme"
          options={{
            light: "Light",
            dark: "Dark"
          }}
          initialValue={settings.theme}
          setValue={settings.setTheme}
        />
      </tbody>
    </table>
  );
};

export default SettingsTable;
