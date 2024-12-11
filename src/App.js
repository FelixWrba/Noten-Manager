import './App.css';
import Loader from './components/pages/loader';
import {
	BrowserRouter,
	Route,
	Routes
} from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

// Pages
const Homepage = lazy(() => import('./components/homepage/homepage'));
const GetStarted = lazy(() => import('./components/app/get-started'));
const Imprint = lazy(() => import('./components/pages/imprint'));
const NotFound = lazy(() => import('./components/error/NotFound'));
// App
const Overview = lazy(() => import('./components/app/overview'));
const Sections = lazy(() => import('./components/app/sections'));
const Settings = lazy(() => import('./components/app/settings'));
const BottomNav = lazy(() => import('./components/layout/bottomNav'));

// Define General Routing and Error handling
function App() {
	return (
		<Suspense fallback={<Loader />}>
			<BrowserRouter>
				<Routes>
					{/* Root ------------------------------------------------- */}
					<Route path='/'>
						<Route index element={<Homepage />} />
						<Route path='get-started' element={<GetStarted />} />
						<Route path='imprint' element={<Imprint />} />
					</Route>
					{/* App -------------------------------------------------- */}
					<Route path='app' element={<BottomNav />}>
						<Route index element={<Overview />} />
						<Route path='sections' element={<Sections />} />
						<Route path='settings' element={<Settings />} />
					</Route>
					{/* 404 -------------------------------------------------- */}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

export default App;
