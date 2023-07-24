# Bouncing DVD Logo

I made this project based on the old screensaver from the DVD to practice React with TypeScript.

I created a custom hook ( useDimensions ) that enables movement and changes the color of the SVG image. It's built with two functions for horizontal and vertical movement, which use flags to detect edges and then change the direction and color of the image. 'useDimensions' returns the color, top, and left positions.

Additionally, I created a component to utilize the SVG image and pass the props returned by 'useDimensions', as well as setting its size.

Open [https://p4cm4n890.github.io/Bouncing-DVD/](https://p4cm4n890.github.io/Bouncing-DVD/) to view it.\
![](https://github.com/P4CM4N890/Bouncing-DVD/blob/main/src/img/Bouncing-DVD.gif)
