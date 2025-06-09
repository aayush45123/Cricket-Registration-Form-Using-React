import { useState } from "react";
import styles from "./AddDetails.module.css";
import PlayingStyle from "./PlayingStyle";
import { MdFileDownloadDone } from "react-icons/md";

const AddDetails = ({ addPlayer }) => {
  const [userName, setuserName] = useState("");
  const [userAge, setuserAge] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPhone, setuserPhone] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");

  const handleOnClick = () => {
    if (userName && userAge && userEmail && userPhone && selectedStyle) {
      addPlayer(userName, userAge, userEmail, userPhone, selectedStyle);
      setuserName("");
      setuserAge("");
      setuserEmail("");
      setuserPhone("");
      setSelectedStyle("");
    }
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <div className={styles.inputField}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            key={"playerName"}
            value={userName}
            onChange={(event) => setuserName(event.target.value)}
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            required
            key={"playerAge"}
            value={userAge}
            onChange={(event) => setuserAge(event.target.value)}
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            key={"playerEmail"}
            value={userEmail}
            onChange={(event) => setuserEmail(event.target.value)}
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
            key={"playerPhone"}
            value={userPhone}
            onChange={(event) => setuserPhone(event.target.value)}
          />
        </div>

        <PlayingStyle
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
        />

        <button
          className={styles.submit}
          onClick={(addPlayer) => handleOnClick({ addPlayer })}
        >
          <MdFileDownloadDone />
        </button>
      </div>
    </>
  );
};
export default AddDetails;
