import PropTypes from 'prop-types';
import s from './Profile.module.css';
import defaultImage from './default.jpg';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <img className={s.img} src={avatar} alt={name} width="150" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.span}>Followers</span>
          <span className={s.stat}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.span}>Views</span>
          <span className={s.stat}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.span}>Likes</span>
          <span className={s.stat}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  name: 'unknown',
  tag: 'unknown',
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default Profile;
