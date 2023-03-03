import { albumsActions } from './albums-slice';

export const fetchAlbumsData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');

            if (!response.ok) {
                throw new Error('Could not fetch user albums!');
            }

            const data = await response.json();

            return data;
        };

        try {
            const albumsData = await fetchData();
            dispatch(albumsActions.replaceAlbums({
                items: albumsData || [],
            }));
        } catch (error) {
        }
    }
};
