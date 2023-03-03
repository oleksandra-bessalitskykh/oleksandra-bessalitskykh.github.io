import { useSelector } from 'react-redux';

import Card from '../UI/Card/Card';
import Post from './components/Post/Post';
import classes from './Posts.module.css';


const Posts = () => {
    const posts = useSelector((state) => state.posts.posts);

    return (
        <Card className={classes.posts}>
            <h2>Posts</h2>
            <ul>
                {posts.map(item => (
                    <Post
                        key={item.id}
                        item={{
                            id: item.id,
                            title: item.title,
                            body: item.body,
                        }}
                    />
                ))}
            </ul>
        </Card>
    );
};

export default Posts;
