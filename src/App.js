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
const ErrorPage = lazy(()=>import('./components/error/ErrorPage.js'));
// App
const Overview = lazy(() => import('./components/app/Overview.js'));
const Subjects = lazy(() => import('./components/app/Subjects.js'));
const Subject = lazy(() => import('./components/app/Subject.js'));
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
					<Route path='/' errorElement={<ErrorPage/>}>
						<Route index element={<PageLayout><Homepage /></PageLayout>} />
						<Route path='get-started' element={<PageLayout title='Erste Schritte'><GetStarted /></PageLayout>} />
						<Route path='imprint' element={<PageLayout><Imprint /></PageLayout>} />
					</Route>
					{/* App -------------------------------------------------- */}
					<Route path='app' element={<BottomNav />} errorElement={<ErrorPage/>}>
						<Route index element={<Overview />} />
						<Route path='subjects' element={<Subjects />} />
						<Route path='subjects/:subjectId' element={<Subject />} />
						<Route path='settings' element={<Settings />} />
					</Route>
					{/* 404 -------------------------------------------------- */}
					<Route path='*' element={<NotFound />} errorElement={<ErrorPage/>} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

export default App;
