import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { ModalState, Photo } from './types/photo';
import { AxiosError } from 'axios';

import { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import fetchImages from './apiService/images';

function App() {
  const MODAL_INITIAL_STATE: ModalState = {
    modalIsOpen: false,
    srcUrl: '',
    altDescription: '',
    authorName: '',
    likes: '',
    largeDescription: '',
  };
  const [search, setSearch] = useState<null | string>(null);
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<null | Photo[]>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState<boolean>(false);
  const [modalState, setModalState] = useState<ModalState>(MODAL_INITIAL_STATE);
  const mainElem = useRef<HTMLDivElement>(null);

  const handleSearch = (newSearch: string): void => {
    setSearch(newSearch);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = (): void => {
    setPage(prevPage => prevPage + 1);
  };

  const handleModalOpen = (
    srcUrl: string,
    altDescription: string,
    authorName: string,
    likes: string,
    largeDescription: string
  ): void => {
    setModalState({
      modalIsOpen: true,
      srcUrl,
      altDescription,
      authorName,
      likes,
      largeDescription,
    });
  };

  const handleModalClose = (): void => {
    setModalState(MODAL_INITIAL_STATE);
  };

  useEffect(() => {
    async function getImagesData():Promise<void> {
      //Для того щоб функція не спрацьовувала при монтуванні
      if (search === null) {
        return;
      }
      setError(null);
      setLoading(true);
      setShowLoadMoreBtn(false);
      try {
        const data = await fetchImages(search, page);
        if (data.total === 0) {
          toast('There are no results matching your query!');
          return;
        }
        setImages(prevImages => [...(prevImages as Photo[]), ...data.results]);
        setShowLoadMoreBtn(data.total_pages !== page);
      } catch (error: any) {
        const err = error as AxiosError;
        setError(err.message);
      } finally {
        console.log('finally');

        setLoading(false);
      }
    }
    getImagesData();
  }, [search, page]);

  useEffect(() => {
    if (page === 1) return;
    mainElem.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [images, page]);

  return (
    <div ref={mainElem}>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {images && images?.length > 0 && (
        <ImageGallery images={images} onImageClick={handleModalOpen} />
      )}
      {showLoadMoreBtn && !loading && (
        <LoadMoreBtn onLoadMoreBtn={handleLoadMore} />
      )}
      {loading && <Loader />}
      <ImageModal onModalClose={handleModalClose} modalState={modalState} />
    </div>
  );
}

export default App;
