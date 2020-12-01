import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import s from './FriendsList.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(({ id, isOnline, name, avatar }) => {
        return (
          <FriendItem
            key={id}
            isOnline={isOnline}
            name={name}
            avatar={avatar}
          />
        );
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendsList;
