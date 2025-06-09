import styles from "./ResultContainer.module.css";
import { IoIosRemoveCircle } from "react-icons/io";

const ResultContainer = ({
  userData,
  handleRemoveRegistration,
  cancellationMessage,
  showSuccessMessage,
}) => {
  return (
    <>
      <div className={styles.resultContainer}>
        {showSuccessMessage && (
          <div className={styles.resultContent}>
            <h2 className={styles.resultHeading}>Registration Successful!</h2>
            <p className={styles.resultMessage}>
              Thank you for registering with our cricket academy. We look
              forward to seeing you on the field!
            </p>
          </div>
        )}

        {cancellationMessage && (
          <p className={styles.cancelMessage}>{cancellationMessage}</p>
        )}

        {userData.map((player, index) => (
          <div className={styles.submittedDetails} key={index}>
            <h3>Name : {player.name}</h3>
            <p>Age : {player.age}</p>
            <p>Email : {player.email}</p>
            <p>Phone : {player.phone}</p>
            <p>Playing Style : {player.playingStyle}</p>

            <button onClick={() => handleRemoveRegistration(player.name)}>
              <IoIosRemoveCircle />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default ResultContainer;
