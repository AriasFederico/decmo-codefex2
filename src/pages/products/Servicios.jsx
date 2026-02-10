import './Servicios.scss';
import { global } from '../../data/global';
import { listaDeServicios } from '../../data/products';
import { ServiciosCard } from './components/serviciosCard/ServiciosCard';

const { servicios } = global;
const { title, description } = servicios;
export const Servicios = () => {
	return (
		<section className='Servicios' id='servicios'>
			<div className='Servicios__container'>
				<div className='Servicios__sectionTitle'>
					<h2 className='Servicios__h2'>{title}</h2>
					<p className='Servicios__p'>{description}</p>
				</div>
				<div className='Servicios__content'>
					{listaDeServicios?.map(({ image, name, description, price }) => (
						<ServiciosCard
							name={name}
							image={image}
							description={description}
							price={price}
							key={name}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
