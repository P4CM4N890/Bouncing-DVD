import React, { useEffect, useState } from 'react'

interface Collision {
    horizontal: number,
    vertical: number
};

    // TODO: add more colors
const colors = [ '#60D833', 'blue', 'aqua', 'purple', 'orange', 'yellow' ];

export const useDimensions = () => {

        // To move SVG
    const [ top, setTop ] = useState( 0 );
    const [ left, setLeft ] = useState( 0 );

        // To change color
    const [ color, setColor ] = useState( '#60D833' );

        // To change direction
    const [ flagHorizontal, setFlagHorizontal ] = useState( true );
    const [ flagVertical, setFlagVertical ] = useState( true );

        // To detect borders
    const [ collision, setCollision ] = useState< Collision >(
        {
            horizontal: window.innerWidth - 200,
            vertical: window.innerHeight - 90
        }
    );

    const getDimensions = () => {

        const width = window.innerWidth;
        const height = window.innerHeight;
        
        setCollision(
            {
                horizontal: width - 200,
                vertical: height - 90
            }
        );
    };

    const moveVertical = ( numColor: number ) => {

        if ( flagVertical ) {
            setTop( top + 1 );

            if ( top >= collision.vertical ) {
                setFlagVertical( false );
                setColor( colors[ numColor ] );
            }
        } else {
            setTop( top - 1 );

            if ( top === 0 ) {
                setFlagVertical( true );
                setColor( colors[ numColor ] );
            }
        }
    };

    const moveHorizontal = ( numColor: number ) => {

        if ( flagHorizontal ) {
            setLeft( left + 2 );
            
            if ( left >= collision.horizontal ) {
                setFlagHorizontal( false );
                setColor( colors[ numColor ] );
            }
        } else {
            setLeft( left - 2 );

            if ( left === 0 ) {
                setFlagHorizontal( true );
                setColor( colors[ numColor ] );
            }
        }
    };

        // This useEffect is to get size of window
    useEffect( () => {
                // Event listener when the window is resize
            window.addEventListener( 'resize', getDimensions );

            return () => {
                    // Remove the event listener when the component is unmounted
                window.removeEventListener( 'resize', getDimensions );
            }
        }
    );

        // This useEffect is to move DVD logo
    useEffect( () => {
            setTimeout( () => {
                    // Generate a random number to change the color
                let random = Math.round( Math.random() * ( colors.length - 1 ) );

                moveVertical( random );
                moveHorizontal( random );
            }, 10 );
        }
    );

    return { color, top, left }
}
