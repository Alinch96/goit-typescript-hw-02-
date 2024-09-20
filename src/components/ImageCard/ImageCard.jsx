import { CiHeart, CiUser } from "react-icons/ci";
import css from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={css.imgContainer}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onImageClick}
      />
      <ul className={css.imgList}>
        <li className={css.imgItem}>
          <CiUser size="20" />
          {image.user.name}
        </li>
        <li className={css.imgItem}>
          <CiHeart size="20" />
          {image.likes}
        </li>
      </ul>
    </div>
  );
};

export default ImageCard;