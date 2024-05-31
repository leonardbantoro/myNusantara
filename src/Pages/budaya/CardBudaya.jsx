import './CardBudaya.css';

const CardBudaya = ({ title, imgurl, penjelasan }) => {
    return (
      <div className="card-budaya">
        {title && <h2 className="card-title">{title}</h2>}
        <div className="card-budaya-content">
          {imgurl && <img className="card-img" src={imgurl} alt={title || 'Image'} />}
          <p className="card-description">{penjelasan}</p>
        </div>
      </div>
    );
};

export default CardBudaya;
