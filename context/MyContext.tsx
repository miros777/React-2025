import {createContext} from "react";

type PropsContext = {
    theme: string,
    themChange: (them:string) => void
}
export const init = {
    theme: 'white-them',
    themChange: (them:string) => {
        console.log(them);
    }
}
export const MyContext = createContext<PropsContext>(init);