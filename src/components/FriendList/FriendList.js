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



FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
