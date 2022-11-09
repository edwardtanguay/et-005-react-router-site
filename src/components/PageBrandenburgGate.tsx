import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

export const PageBrandenburgGate = () => {
	return (
		<>
			<p>Welcome to the Brandenburg Gate page which is located in <NavLink to="/germany/berlin">Berlin</NavLink>.</p>
		</>
	);
};