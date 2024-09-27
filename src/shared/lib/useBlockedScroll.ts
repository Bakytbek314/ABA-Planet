import {useEffect} from "react";

export const useBlockedScroll = (arg: boolean) => {
    useEffect( () => {
        if ( arg ) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [ arg ] );
}