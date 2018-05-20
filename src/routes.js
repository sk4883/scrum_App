import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
	HashRouter,
	hashHistory
} from "react-router-dom";

import HomeApplication from "./Components/HomeApplication.js";
import SignUpPage from "./Components/SignUpPage/SignUpPage.js";
import LoginPage from "./Components/LoginPage/LoginPage.js";
import AddTeam from "./Components/AddTeam/AddTeam.js";
import TeamComponent from "./Components/TeamComponent/TeamComponent.js";
const appRoutes = [
	{
		path: "/",
		isExactPath: true,
		component: <HomeApplication />
	},
	{
		path: "/sign-up",
		isExactPath: true,
		component: <SignUpPage />
	},
	{
		path: "/login",
		isExactPath: true,
		component: <LoginPage />
	},
	{
		path: "/add-team",
		isExactPath: true,
		component: <AddTeam />
	},
	{
		path: "/add-member",
		isExactPath: true,
		component: <TeamComponent />
	}

];

const routes = (
	<HashRouter  history={hashHistory}>
		<Switch>
			{appRoutes.map((routeItem, idx) => {
				return <Route
					key={routeItem.path}
					path={routeItem.path}
					exact={routeItem.isExactPath}
					render={(params) => {
						return routeItem.component;
					}}
				/>;
			})}
		</Switch>
	</HashRouter>
);

export default routes;