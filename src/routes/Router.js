import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import AuthGuard from '../guards/AuthGuard';
import BlankLayout from '../layouts/BlankLayout';
import MainLayout from "../layouts/MainLayout";
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';
import About from "../pages/About"
import { PATH_DASHBOARD, PATH_AUTH } from './paths';
import Home from "../pages/Home";
import PeopleManagementCaseStudyScreen from "../pages/PeopleManagementCaseStudyScreen";
import WebDesignCaseStudyScreen from "../pages/WebDesignCaseStudyScreen";
import TradeIndiaCaseStudyScreen from "../pages/TradeIndiaCaseStudyScreen";
import Resume from "../pages/Resume";

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <Navigate to="/ncDesign/myspace/home" replace />,
        },
        {
            path: 'ncDesign',
            element: <MainLayout />,
            children: [
                {
                    path: 'myspace',
                    children: [
                        {path: 'about', element:  <About />},
                        {path: 'resume', element:  <Resume />},
                        {path: 'profile', element:  <Profile />},
                        {path: 'home', element:  <Home />},
                        {path: 'caseStudy1', element:  <PeopleManagementCaseStudyScreen />},
                        {path: 'caseStudy2', element:  <WebDesignCaseStudyScreen />},
                        {path: 'caseStudy3', element:  <TradeIndiaCaseStudyScreen />},
                    ],
                },
            ]
        },
        {
            path: 'login',
            element: (
                <BlankLayout>
                    <Login />
                </BlankLayout>
            ),
        },

        {
            path: '*',
            element: <NotFound />,
        },
    ]);
}