import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageGermany } from './components/PageGermany';
import { PageFrance } from './components/PageFrance';
import { PageSpain } from './components/PageSpain';
import { PageInfo } from './components/PageInfo';
import { Page404 } from './components/Page404';
import _cities from './data/spanishCities.json';
import { City } from './components/City';
import { ICity } from './interfaces';
import { CityChooseMessage } from './components/CityChooseMessage';

const cities: ICity[] = _cities;

function App() {
	return (
		<div className="App">
			<h1>
				<NavLink to="info">Travel Info Site</NavLink>
			</h1>
			<nav>
				<NavLink to="germany">Germany</NavLink>
				<NavLink to="france">France</NavLink>
				<NavLink to="spain">Spain</NavLink>
			</nav>

			<Routes>
				<Route path="info" element={<PageInfo />} />
				<Route path="germany/*" element={<PageGermany />} />
				<Route path="france" element={<PageFrance />} />
				<Route path="spain" element={<PageSpain cities={cities} />}>
					<Route path=":idCode" element={<City />} />
					<Route index element={<CityChooseMessage />} />
				</Route>
				<Route path="/" element={<Navigate to="info" replace />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</div>
	);
}

export default App;
