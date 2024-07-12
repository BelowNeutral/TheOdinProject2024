Pseudocode will be written via comments in the script.js file. However, this file will be used as scratch paper, so I apologize if nothing here makes sense.

1. Declare 3 variables with corresponding numbers: rock (1), paper (2), and scissors (3)

2. Take user input

3. Create a function called "getComputerChoice()"
    - Use "math.random," which only takes whole numbers from 1-3
    - return the value of math.random when the function is called

4. IF input from user is rock AND output from computer is paper, OUTPUT "computer wins with paper"

    - ELSE-IF input from user is rock AND output from computer is scissors, OUTPUT "computer loses with scissors"

    - ELSE-IF input from user is rock AND output from computer is rock, OUTPUT "computer ties with rock"

    - ELSE-IF input from user is paper AND output from computer is paper, OUTPUT "computer ties with paper"

    - ELSE-IF input from user is paper AND output from computer is scissors, OUTPUT "computer wins with scissors"

    - ELSE-IF input from user is paper AND output from computer is rock, OUTPUT "computer loses with rock"

    - ELSE-IF input from user is scissors AND output from computer is paper, OUTPUT "computer loses with paper"

    - ELSE-IF input from user is scissors AND ouput from computer is rock, OUTPUT "computer wins with rock"

    - ELSE-IF input from user is scissors AND output from computer is scissors, OUTPUT "computer ties with scissors"

