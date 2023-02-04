import styles from '../../Styles/Banner.module.scss'

export default function Banner() {

    return(
        <main className={styles.banner_section}>
            <div className={styles.banner_container}>
                <h1 className={styles.banner_title}>
                    This is my Mission Zero.
                </h1>
                <h2 className={styles.banner_subtitle}>
                    Project: Week One
                </h2>
            </div>

            <div className={styles.form_container}>
                <form>
                    <input type="search" placeholder="Search..." />
                    <input type="button" value="SEARCH" />
                </form>
            </div>
        </main>
    );
};