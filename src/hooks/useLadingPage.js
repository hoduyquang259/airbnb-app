import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getRoomListRequest, landingPageSelector } from "../slice/landingPage";

const useLandingPage = () => {
  const roomList = useSelector(landingPageSelector);

  const dispatch = useDispatch();

  const onGetRoomList = useCallback((data) => {
    dispatch(getRoomListRequest(data));
  }, []);

  return {
    roomList,
    onGetRoomList,
  };
};

export default useLandingPage;
