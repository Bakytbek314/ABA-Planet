import React, {useEffect} from "react";

export const useClickOutSide = ( ref: React.RefObject<HTMLElement>, callback: () => void ) => {
    useEffect( () => {
        const handleOutSide = ( event: MouseEvent ) => {
            if ( ref.current && !ref.current.contains( event.target as Node ) ) {
                callback();
            }
        };

        document.addEventListener( "mouseup", handleOutSide );
        return () => {
            document.addEventListener( "mouseup", handleOutSide );
        };
    }, [ callback, ref ] );
};
