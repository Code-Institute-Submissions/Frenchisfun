


# French / English word matching game

// Include image here! 

'French is fun' is a simple word matching game inspired by a real world word matching game that uses double sided magnets with the English
word on one side, the French word on the other. 
As someone learning the French langauge i wanted to develop a fun word matching game aimed at people that are at the 
early stages of learning French. The aim is Très facile! Simply match the English word to the corresponding French word! 
Try to match all the words before the time runs out! 

I wanted to create a fun game that also teaches basic vocabulary. 


## UX

- As someone who is themselve learning a language i have used a number of applications in the past so i was inspired 
by those. 

- Wire frames for this project are available in the Mockups folder. 

Useful: useful to the user who wants to interact with your product.
Useable: when interacting with your product, it is also an enjoyable experience - it generates a positive emotional response.
Valuable: valuable to the user and the product owner.

## Features

- The game features a selection of words in English and French. The aim of the game is the user has to match the English/French words
in the alloted time.  

### Existing Features

- User can display a name.  

### Possible features that could be included.

- The abilty to change difficulty. Perhaps by making an adjustment to the countdown time. For example an easy difficulty level providing more 
time in which to complete the game. 

- Turn the counter off. Learn on your time without the pressure of the timer. 

- Multiple levels. Increasing in difficulty as the user progresses by means of including more difficult words. Counter continuing to countdown as they progress. 

- Audio. Hear the word when a user clicks on a button. Also include some kind of sound on a successful match and/or successfully 
completing a level. 

- Different style of game such as including a series of words alongside an image. The user selects the correct word to match the image. 

- Allow user to create a profile. This can include the abilty to safe scores/times. 

- Enable user to have a word list showing the words that they have learned. 

- Dark mode feature. 

- Allow user to change UI colors from included options. 



### Features Left to Implement

- Todo

## Technologies Used

- [Bootstrap](https://getbootstrap.com/)
  - The project uses a **Bootstrap** framework.
- [Google fonts](https://fonts.google.com) - The project uses google fonts.
- [jQuery] (https://jquery.com/)  - Many of the features in this application use jquery. 
- [Coolors](https://coolors.co) - Coolors was used to aid in creating a colour scheme. Using colours that complimented each other. 



## Testing

- The application was tested manually. This involved the following steps. 


Tested on multilpe browsers! 

Tested responseisve using dev tools mobile view. 

Markup was validated via https://validator.w3.org/ no errors were found.

CSS was validated via http://jigsaw.w3.org/css-validator/ no errors were found.

    1. On page load:

    Enter name modal. 
        Clicked on button to start game without entering a name. 
        Clicked outside the modal to make sure that user cannot get passed without entering a name. Also pressed Esc.
        When alert appears on blank field also tried clicking the screen and pressing Esc to make sure that user cannot skip the enter name modal/alert.  
        Entered a name then clicked on button. Checked to see that correct name appreared on screen.  


    Main game. 
        Clicked on buttons to make sure that selected button changed color. 
        Clicked on different button within the same language to ensure that it was restored to its orginial color. 


        Let timer run down to ensure that the restart modal appeared. 
        Clicked outside the modal to ensure that it was not possible to bypass modal.
        Pressed Esc to ensure that it was not possible to bypass modal.
        Clicked on 'restart' to test wheater or not the page reloaded. 



* Bugs

- Bugs that occured during production included. 

 
- - Counter continued to run past zero even when user succesfullly completed the game.
- Adding the Randomise feature caused buttons to Randomise on click as opposed to on page load. 

- Enter name modal:
    - User able to bypass enter name modal by clicking outside the modal. 
    - User able to begin game without entering a name. 
    - User able to bypass enter name modal/alert by clicking outside the alert when no username added.

- User needs to enter name when restarting. 
    - Need to implement something that would not require the same user to constantly re-enter their name. 

- User name and counter was not visible when accessed on mobile without clicking on the accordion button:
    - Replaced navbar with a row with styling. 

## Deployment

- Depolyment was achvied via github at this link: https://jammerref2015.github.io/Frenchisfun/


## Credits



### Media

- The images used in this application were obtained from Shutterstock. 

Images need Credits!

### Acknowledgements

- I received inspiration for this project from different langauge learning apps.


### Updates

04/09/20
- Added modal for counter reaching zero
- On successful word matches buttons now change to green and fade out. 

03/09/20

- Randomise location of buttons on page load.
- Added styling to textarea's to prevent user from re-sizing.
- Incresed word count.
- Added some styling. 
- Some code tiding. 


02/09/20

- Countdown timer now stops on succesful completion of game.

01/09/20

- Modal now appears when all buttons have been successfully matched.

01/09/20

- Added modal that appears on page load to request player name which is then added to the page.

- Added a timer which begins when the player clicks the lets begin button.

- Modal appears when timer gets to zero. Player has the option of restarting the game.

- Added an image to welcome modal and changed background to match image. Added temp text to 'welcome' modal.

- Change font site wide.

17/08/20

- Added countdown functionality. Popup now appears if user has completed a task in the set time.

29/07/20

- index.html

- Added id's to French buttons.
- Added id's to English buttons.
- Added values to English buttons.

- main.js

- Added functionality to buttons. They now change color when selected. Buttons now disappear when words correctly match.

- style.css

- Added remove class.
