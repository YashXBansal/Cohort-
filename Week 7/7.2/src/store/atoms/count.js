import { atom, selector } from "recoil";

export const coundAtom = atom({
    key: 'countAtom',
    default: 0
})

export const evenSelector = selector({
    name: "evenSelector",
    get: (props) => {
        const count = props.get(coundAtom)
        return count % 2;
    }
})