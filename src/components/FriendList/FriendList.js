import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { FriendListContainer } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <FriendListContainer>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </FriendListContainer>
  );
}

// Тут ключ я вказав на самому компоненті FriendListItem, спочатку вказував на лішці, були помилки в консолі
// але глянув в компонентах, а там така структура що тегом обгорткою є сам компонент, це вірно?

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
