# StevenZCA.github.io

This UI is composed of two react components, one parent GameComponent and two children BoardComponent
Both components maintain their own React states and communicate each other via callbacks properties
Given more time, BoardComponent could be divided into smaller components that can separate out the input controls
Users have 4 methods to set up the Sudoku board, either 1.Type, 2.random pick, 3.manual pick, 4. pasted serialized value strings
Detailed input validation and responsive board set up have been implemented
The solved board distinguishes values from the initial board setup and those filled in
The core algorithm is implemented based on Peter Norvig http://norvig.com/ Sudoku solver algorithm.
I have also done research on different algorithms that includes backtracking, dancing links, algorithm X etc
I've decided to leverage Peter Norvig algorithm since the average computation time is closer to the best known JavaScript implementations online.
To make it simple, just clone the git repo, then run npm install
npm test will run Jest unit tests which test both React Components and Algorithms
The product is deployed using production build that have been built as chunks (JS and CSS)
source code can be found here: https://github.com/StevenZCA/StevenZCA.github.io
Also the performance benchmark shows better result in JEST unit test than running it on browser.

Thank you and Have great day!

StevenZCA
