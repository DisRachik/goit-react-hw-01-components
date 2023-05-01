import clsx from 'clsx';
import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ dataItem: { isOnline, avatar, name } }) => (
  <li className={css.item}>
    <span className={clsx([css.status], { [css.isOnline]: isOnline })}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  dataItem: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
