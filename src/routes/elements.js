import {lazy, Suspense} from 'react';
import LoadingScreen from "../Components/loading/LoadingScreen";

const Loadable = (Component) => (props) =>
    (
        <Suspense fallback={<LoadingScreen/>}>
            <Component {...props} />
        </Suspense>
    );


export const ProfileManagementScreen = Loadable(
    lazy(() =>
        import('../screens/dashboard/hrtech/mySpace/ProfileManagementScreen')
    )
);

