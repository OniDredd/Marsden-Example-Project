import styles from '../../Styles/Tile.module.scss';

const Tile = (props) => {

    return(
        <div className={styles.tile_container}>

            <div className={styles.tile_imagebox}>
                <img className={styles.tile_image} src={props.src} alt="" />
            </div>
            <div className={styles.tile_bottomtext}>
                <h2 className={styles.tile_title}>{props.title}</h2>
                <h3 className={styles.tile_subtext}>{props.subtext}</h3>
            </div>
        </div>
    );
};

export default Tile;