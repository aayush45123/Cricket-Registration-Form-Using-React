import styles from './InputContainer.module.css';

const InputContainer = ({ children }) => {
  return <div className={styles.inputContainer}>{children}</div>;
};

export default InputContainer;
