import classes from './Post.module.css';

const Post = (props) => {
    const { title, body, id } = props.item;
    const postTitle = `${id}. ${title}`;

    return (
        <li className={classes.item}>
            <header>
                <h3>{postTitle}</h3>
            </header>
            <div className={classes.details}>
                <div className={classes.body}>
                    <span>{body}</span>
                </div>
            </div>
        </li>
    );
};

export default Post;
