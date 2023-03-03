import { postActions } from './posts-slice';

export const fetchUserPosts = (id) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);

            if (!response.ok) {
                throw new Error('Could not fetch user posts!');
            }

            const data = await response.json();

            return data;
        };

        try {
            const postsData = await fetchData();
            dispatch(postActions.replacePosts({
                items: postsData || [],
            }));
        } catch (error) {
        }
    }
};
