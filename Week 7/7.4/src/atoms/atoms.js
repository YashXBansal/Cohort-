import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 8,
});
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 23,
});
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 344,
});
export const messagingAtom = atom({
  key: "messagingAtom",
  default: 34,
});
export const totalnotificationSelector = selector({
    key: "totalnotificationSelector",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const NotificationAtomCount = get(notificationAtom);
        const messagingAtomCount = get(messagingAtom);
        return networkAtomCount + jobsAtomCount + NotificationAtomCount + messagingAtomCount;
    }
})
