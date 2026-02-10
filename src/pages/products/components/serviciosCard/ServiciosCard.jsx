import './ServiciosCard.scss';
export const ServiciosCard = ({ name, description, image, price }) => {
	return (
		<div className='ServiciosCard'>
			<div className='ServiciosCard__container'>
				<div className='ServiciosCard__media'>
					<img src={image} alt={name} className='ServiciosCard__image' />
				</div>

				<div className='ServiciosCard__content'>
					<h3 className='ServiciosCard__h3'>{name}</h3>
					<p className='ServiciosCard__p'>{description}</p>
					<span className='ServiciosCard__price'>{price}</span>
				</div>
			</div>
		</div>
	);
};
