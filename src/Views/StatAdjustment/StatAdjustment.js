import React, { useState } from "react";
import { Checkbox } from "../../Components/Checkbox/Checkbox";
import Slider from "@mui/material/Slider";

import styles from "./stat-adjustment.module.css";

export const StatAdjustment = () => {
  const [weaselCount, setWeaselCount] = useState(false);

  const [stats, setStats] = useState({
    weaselCount: { enable: false, value: 50 },
    defensiveWeasels: { enable: false, value: 50 },
  });

  function handleCheck({ name, checked }) {
    setWeaselCount(!weaselCount);
    setStats({
      ...stats,
      [name]: { enable: checked, value: stats[name].value },
    });
  }

  const handleSlide = (event, newValue) => {
    setStats({
      ...stats,
      [event.target.name]: {
        enable: stats[event.target.name].enable,
        value: newValue,
      },
    });
  };

  function displaySliders() {
    return Object.keys(stats).map((key, index) => {
      if (stats[key].enable) {
        return (
          <div className={styles.slider}>
            <label>{key}</label>
            <Slider
              name={key}
              onChange={handleSlide}
              valueLabelDisplay="auto"
              max={100}
              min={0}
              // marks={[
              //   {
              //     value: 0,
              //     label: "0",
              //   },
              //   {
              //     value: 100,
              //     label: "100",
              //   },
              // ]}
              value={stats[key].value}
            />
          </div>
        );
      }
    });
  }

  return (
    <>
      <div className={styles.statAdjustment}>
        <Checkbox
          isChecked={weaselCount}
          name="weaselCount"
          setIsChecked={(e) => handleCheck(e.target)}
          text="Weasel Count"
        />
        <Checkbox
          isChecked={weaselCount}
          name="defensiveWeasels"
          setIsChecked={(e) => handleCheck(e.target)}
          text="Defensive Weasel"
        />
        {/* <Checkbox
          isChecked={weaselCount}
          setIsChecked={setWeaselCount}
          text="Weasel Count"
        />
        <Checkbox
          isChecked={weaselCount}
          setIsChecked={setWeaselCount}
          text="Weasel Count"
        />
        <Checkbox
          isChecked={weaselCount}
          setIsChecked={setWeaselCount}
          text="Weasel Count"
        />
        <Checkbox
          isChecked={weaselCount}
          setIsChecked={setWeaselCount}
          text="Weasel Count"
        />
        <Checkbox
          isChecked={weaselCount}
          setIsChecked={setWeaselCount}
          text="Weasel Count"
        />
        <Checkbox
          isChecked={weaselCount}
          setIsChecked={setWeaselCount}
          text="Weasel Count"
        />
        <Checkbox
          isChecked={weaselCount}
          setIsChecked={setWeaselCount}
          text="Weasel Count"
        />
        <Checkbox
          isChecked={weaselCount}
          setIsChecked={setWeaselCount}
          text="Weasel Count"
        />
        <Checkbox
          isChecked={weaselCount}
          setIsChecked={setWeaselCount}
          text="Weasel Count"
        />
        <Checkbox
          isChecked={weaselCount}
          setIsChecked={setWeaselCount}
          text="Weasel Count"
        />
        <Checkbox
          isChecked={weaselCount}
          setIsChecked={setWeaselCount}
          text="Weasel Count"
        /> */}
      </div>
      <div className={styles.statAdjustment}>{displaySliders()}</div>
    </>
  );
};
