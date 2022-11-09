import { NavLink, Routes, Route, Outlet } from 'react-router-dom';

export const PageMitte = () => {
	return (
		<>
			<p>Welcome to Mitte page.</p>

			<nav>
				<NavLink to="checkpointCharlie">Checkpoint Charlie</NavLink>
				<NavLink to="brandenburgGate">Brandenburg Gate</NavLink>
				<NavLink to="unterDenLinden">Unter den Linden</NavLink>
			</nav>

			<div className="showArea">
				<Outlet />
			</div>
		</>
	);
};
