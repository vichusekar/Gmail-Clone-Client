import { lazy } from 'react';
import SignIn from '../components/SignIn';

const Main = lazy(() => import('../pages/Main'));
const Emails = lazy(() => import('../components/Emails'));
const ViewEmail = lazy(() => import('../components/ViewEmail'));
const SignUp = lazy(() => import('../components/SignUp'));

const routes = {
    main: {
        path: '/',
        element: Main
    },
    emails: {
        path: '/emails',
        element: Emails
    },
    invalid: {
        path: '/*',
        element: Emails
    },
    view: {
        path: '/view',
        element: ViewEmail
    },
    signup: {
        path: '/signup',
        element: SignUp
    },
    signin: {
        path: '/signin',
        element: SignIn
    }
}

export { routes };