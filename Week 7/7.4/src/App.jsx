import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalnotificationSelector,
} from "./atoms/atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobsAtom);
  const messagesAtomCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const totalNotificationCount = useRecoilValue(totalnotificationSelector);

  return (
    <>
      <button>Home</button>
      <button>
        My network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobAtomCount})</button>
      <button>Messages ({messagesAtomCount})</button>
      <button>Notifications ({notificationCount})</button>
      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
