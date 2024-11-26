import ImagePopup from "./ImagePopup.jsx";
export default function Card(props) {
  const { name, link } = props.card; 
  const { handleOpenPopup } = props;
  return (
    <li className="card">
      <img
        className="card__photo"
        src={link}
        alt={name}
        onClick={() => handleOpenPopup({ 
          title: null, 
          children: <ImagePopup card={props.card} /> 
        })}
      />
      <button
        className="card__button-trash"
        id="buttonDelete"
        type="button"
      ></button>
      <p className="card__name-place">{name}</p>
      <button className="card__button-love"></button>
      <div className="card__like"></div>
    </li>
  );
}
