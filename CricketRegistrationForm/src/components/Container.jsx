import styles from './Container.module.css';

const Contaniner = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
export default Contaniner;