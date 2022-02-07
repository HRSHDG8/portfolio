import {FC, useEffect, useState} from "react";
interface AutoIncrementProps{
    num : number;
    speed?: number
}
export const AutoIncrement:FC<AutoIncrementProps>=({num, speed=100})=>{
    const [state, setState] = useState(0);
    useEffect(()=>{
        const interval = window.setInterval(()=>{
            if(state<num){
                setState(state+1)
            }else{
                clearInterval(interval);
            }
        }, speed);
        return ()=>{
            clearInterval(interval);
        }
    },[num, speed, state])

    return <>{state}</>
}