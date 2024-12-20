import './App.css';
import Loader from './components/pages/Loader.js';
import {
	BrowserRouter,
	Route,
	Routes
} from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

// Pages
const Homepage = lazy(() => import('./components/homepage/Homepage.js'));
const GetStarted = lazy(() => import('./components/app/GetStarted.js'));
const Imprint = lazy(() => import('./components/pages/Imprint.js'));
const NotFound = lazy(() => import('./components/error/NotFound.js'));
// App
const Overview = lazy(() => import('./components/app/Overview.js'));
const Sections = lazy(() => import('./components/app/Sections.js'));
const Settings = lazy(() => import('./components/app/Settings.js'));
const BottomNav = lazy(() => import('./components/layout/BottomNav.js'));
// Layout
const PageLayout = lazy(() => import('./components/layout/PageLayout.js'));

// Define General Routing and Error handling
function App() {
	return (
		<Suspense fallback={<Loader />}>
			<BrowserRouter>
				<Routes>
					{/* Root ------------------------------------------------- */}
					<Route path='/'>
						<Route index element={<PageLayout><Homepage /></PageLayout>} />
						<Route path='get-started' element={<PageLayout title='Erste Schritte'><GetStarted /></PageLayout>} />
						<Route path='imprint' element={<PageLayout><Imprint /></PageLayout>} />
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
