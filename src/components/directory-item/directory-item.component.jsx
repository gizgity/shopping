import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.style.jsx';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  return (
    <DirectoryItemContainer to={route}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
