import { NavLink, Routes, Route } from 'react-router-dom';
import { PageBerlin } from './PageBerlin';
import { PageHamburg } from './PageHamburg';
import { PageHannover } from './PageHannover';

export const PageGermany = () => {
	return (
		<>
			<p>
				Germany officially the Federal Republic of Germany, is a country
				in Central Europe. It is the second most populous country in
				Europe after Russia. Be sure to visit cities like <NavLink to="/germany/hamburg">Hamburg</NavLink> or the <NavLink to="/germany/berlin/mitte/brandenburgGate">Brandenburg Gate</NavLink>.
			</p>
			<nav>
				<NavLink to="hamburg">Hamburg</NavLink>
				<NavLink to="hannover">Hannover</NavLink>
				<NavLink to="berlin">Berlin</NavLink>
			</nav>
			<Routes>
				<Route path="hamburg" element={<PageHamburg />} />
				<Route path="hannover" element={<PageHannover />} />
				<Route path="berlin/*" element={<PageBerlin />} />
			</Routes>
		</>
	);
};
