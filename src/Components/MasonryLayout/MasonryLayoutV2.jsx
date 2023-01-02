// import styles of this component
import styles from "./MasonryLayout.module.css"

// import other react pkg to use
import Masonry from "react-masonry-css"

// import other component to use
import MasonryBox from './MasonryBox/MasonryBox';

// MasonryLayout Component
const MasonryLayoutV2 = ({ images }) => {
  const breakpointColumnsObj = {
    default: 2,
    1000: 1,
  };

  return (
    <div >
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles["my-masonry-grid"]}
        columnClassName={styles["my-masonry-grid_column"]}
        height={"100%"}
      >
        {images.map(item => (
          <MasonryBox
            key={item.id}
            wallSrc={item.src}
            userProf={item.user.src}
            userName={item.user.name}
            userJob={item.user.description}
          />
        ))}
      </Masonry>
    </div>
  )
}

export default MasonryLayoutV2