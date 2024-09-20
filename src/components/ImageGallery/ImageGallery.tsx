import { Photo } from '../../types/photo';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface Props {
  images: Photo[];
  onImageClick: (
    srcUrl: string,
    altDescription: string,
    authorName: string,
    likes: string,
    largeDescription: string
  ) => void;
}

const ImageGallery: React.FC<Props> = ({ images, onImageClick }) => {
  return (
    <ul className={css.imgList}>
      {images.map(image => {
        return (
          <li className={css.imgItem} key={image.id}>
            <ImageCard
              image={image}
              onImageClick={(): void =>
                onImageClick(
                  image.urls.regular,
                  image.alt_description,
                  image.user.name,
                  image.likes,
                  image.description
                )
              }
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
