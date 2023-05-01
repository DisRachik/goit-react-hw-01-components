import clsx from 'clsx';
import PropTypes from 'prop-types';

export const FriendListItem = ({ dataItem: { isOnline, avatar, name } }) => (
  <li className="item">
    <span className={clsx('status', isOnline && 'isOnline')}></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  dataItem: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
