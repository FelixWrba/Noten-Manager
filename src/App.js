import './App.css';
import Loader from './components/pages/Loader';
import {
	BrowserRouter,
	Route,
	Routes
} from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

// Pages
const Homepage = lazy(() => import('./components/homepage/Homepage'));
const GetStarted = lazy(() => import('./components/app/GetStarted'));
const Imprint = lazy(() => import('./components/pages/Imprint'));
const NotFound = lazy(() => import('./components/error/NotFound'));
// App
const Overview = lazy(() => import('./components/app/Overview'));
const Sections = lazy(() => import('./components/app/Sections'));
const Settings = lazy(() => import('./components/app/Settings'));
const BottomNav = lazy(() => import('./components/layout/BottomNav'));
// Layout
const PageLayout = lazy(() => import('./components/layout/PageLayout'));

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
