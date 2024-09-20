export interface PhotoUrls {
	regular: string;
	small: string;
}

export interface Photo {
	id: string;
	alt_description: string;
    urls: PhotoUrls;
    user: { name: string };
    likes: string;
    description: string;
}

export interface FetchGalleryPhotosResponse {
	total: number;
	total_pages: number;
	results: Photo[];
}

export interface ModalState {
    modalIsOpen: boolean;
    srcUrl: string;
    altDescription: string;
    authorName: string;
    likes: string;
    largeDescription: string;
}