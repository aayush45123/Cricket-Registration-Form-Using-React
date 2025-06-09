import { useState } from "react";
import styles from "./PlayingStyle.module.css";

const PlayingStyle = ({ selectedStyle, setSelectedStyle }) => {
  const options = [
    "Right-hand Bat, Right-arm Fast",
    "Right-hand Bat, Right-arm Medium",
    "Right-hand Bat, Right-arm Off-spin",
    "Right-hand Bat, Left-arm Orthodox",
    "Left-hand Bat, Left-arm Fast",
    "Left-hand Bat, Left-arm Chinaman",
    "Left-hand Bat, Right-arm Leg-spin",
    "Left-hand Bat, Right-arm Medium",
    "Bowling All-rounder",
    "Batting All-rounder",
    "Wicket-keeper Batsman (Right-hand)",
    "Wicket-keeper Batsman (Left-hand)",
  ];

  return (
    <div className={styles.dropdownContainer}>
      <label htmlFor="playing-style" className={styles.dropdownLabel}>
        Select Playing Style
      </label>
      <select
        id="playing-style"
        className={styles.dropdownSelect}
        value={selectedStyle}
        onChange={(e) => setSelectedStyle(e.target.value)}
      >
        <option value="">Choose your style</option>
        {options.map((style, index) => (
          <option key={index} value={style}>
            {style}
          </option>
        ))}
      </select>

      {selectedStyle && (
        <p className="dropdownOutput">
          <strong>You selected:</strong> {selectedStyle}
        </p>
      )}
    </div>
  );
};

export default PlayingStyle;
