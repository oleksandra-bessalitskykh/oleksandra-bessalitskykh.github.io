import classes from './Album.module.css';

const Album = ({ title }) => {
    return (
        <li className={classes.item}>{title}</li>
    );
};

export default Album;
