import { DETAILED_ROOM_INFORMATION, HOME } from "./constants/breakCrumb";
import DetailedRoomPage from "./pages/DetailedRoomPage";
import LandingPage from "./pages/LandingPage";

const routes = [
  {
    path: HOME.id,
    component: <LandingPage />,
    exact: true,
    requiredAuthentication: false,
  },
  {
    path: DETAILED_ROOM_INFORMATION.id,
    component: <DetailedRoomPage />,
    exact: true,
    requiredAuthentication: false,
  },
];

export default routes;
