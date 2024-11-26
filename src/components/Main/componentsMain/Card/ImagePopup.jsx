export default function ImagePopup(props) {
  const card = props.card;
  return (
    <div className="popup__container">
        <img src={card.link} alt={card.name} className="popup__photo" />
        <h3 className="popup__photo-title">{card.name}</h3>
      </div>
  );
}
