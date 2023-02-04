import styles from '../../Styles/Content.module.scss';
import Tile from '../../Components/Content/Tile.js';
import Image1 from '../../Assets/exampleimage1.png';
import Image2 from '../../Assets/exampleimage2.png';
import Image3 from '../../Assets/exampleimage3.png';

export default function Content() {
    
    return(
        <section className={styles.content_section}>
            <div className={styles.content_container}>
                <Tile 
                    title="Example1"
                    subtext="A little bit of subtext."
                    src={Image1}
                />
                <Tile 
                    title="Example2"
                    subtext="A little bit of subtext."
                    src={Image2}
                />
                <Tile 
                    title="Example3"
                    subtext="A little bit of subtext."
                    src={Image3}
                />
            </div>
        </section>
    )
};