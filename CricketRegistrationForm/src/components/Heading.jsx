import styles from './Heading.module.css';

const Heading = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Welcome to Our Cricket Academy 🏏</h1>
            <p className={styles.subHeading}>
                Empowering the next generation of cricket stars with expert coaching and world-class training.
            </p>
        </div>
    );
};

export default Heading;
