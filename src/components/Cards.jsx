const Cards = ({ imageUrl, imageTitle }) => {
  return (
    <div>
      <figure>
        <img src={imageUrl} alt="products" />
        <figcaption>{imageTitle}</figcaption>
      </figure>
    </div>
  );
};

export default Cards;
