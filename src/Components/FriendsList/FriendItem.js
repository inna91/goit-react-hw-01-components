import PropTypes from 'prop-types';
import s from './FriendItem.module.css';

const FriendItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? s.online : s.offline;
  return (
    <li className={s.item}>
      <span className={status}></span>
      <img className={s.img} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
