import { useOutletContext } from 'react-router-dom';
import { ICity } from '../interfaces';

export const City = () => {
	const city: ICity = useOutletContext();

	return (
		<div className="city">
			<img src={`/images/cities/${city.idCode}.jpg`}/>
			<div className="info">
				<div className="name">{city.name}</div>
				<div className="description">{city.description}</div>
			</div>
		</div>
	);
};
