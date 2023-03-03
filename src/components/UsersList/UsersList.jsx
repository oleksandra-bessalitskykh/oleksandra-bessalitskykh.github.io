import { useSelector } from 'react-redux';

import ListItem from './components/ListItem/ListItem';
import classes from './UsersList.module.css';

const UsersList = () => {
    const users = useSelector((state) => state.users.items);

    return (
        <section className={classes.users}>
            <h2>Users List</h2>
            <ul>
                {users.map((user) => (
                    <ListItem
                        key={user.id}
                        id={user.id}
                        name={user.name}
                    />
                ))}
            </ul>
        </section>
    );
};

export default UsersList;
