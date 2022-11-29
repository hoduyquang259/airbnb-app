import React, { memo, useEffect } from "react";
import useLandingPage from "../../hooks/useLadingPage";

import "./styles.scss";

const LandingPage = () => {
  const { roomList, onGetRoomList } = useLandingPage();

  console.log(roomList);

  useEffect(() => {
    onGetRoomList();
  }, []);

  return <div>LandingPage</div>;
};

export default memo(LandingPage);
