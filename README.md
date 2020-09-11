


# French is fun - French / English word matching game

![readme image](/assets/images/readme_image.jpg)

A live demo can be found [here](https://jammerref2015.github.io/Frenchisfun/)


'French is fun' is a simple word matching game inspired by a real world word game **Kids 'French Kit by Magnetic Poetry** that uses double sided magnets with the English word on one side, the French word on the other.
As someone learning the French language I wanted to develop a fun word matching game aimed at people that are at the
early stages of learning French. The aim is Très facile! Simply match the English word to the corresponding French word!
Try to match all the words before the time runs out!

## Contents ##
---
* UX
    * Project Goals
    * User Goals
    * User Stories
    * Site Owner Goals
    * User Requirements and Expectations
    * Design Choices
        * Fonts
        * Icons
        * Colours
* Technologies
* Features
    * Features that have been developed
    * Features that will be implemented in the future
* Testing
* Bugs
* Deployment
* Credit


## UX

### Project Goals ###

The **goal** for this project is to make people was to make an easy to use word matching game to help increase vocabulary. I have been learning French for a while now and I have used a number of language learning applications in the past so I was inspired by those. The concept was to be kept simple along with the execution. 'French is fun' needed to be super easy to grasp.

- Wire frames for this project are available in the Mockups folder.

### User Goals ###

* Provide users a fun a way to learn the French language in a fun way.
* To provide a tool to help increase vocabulary.

### User Stories ###

* As a **user**, I want an **fun and interactive language learning application ** so I will be **educated and entertained**.
* As a **user**, I want to improve my French and help increase my vocabulary.
* As a **user**, I want to be able to learn in a fun way by playing a game that will test my knowledge.

### Site Owner Goals ###

* As a **site owner**, I want to provide users with a fun way to learn the French language.
* As a **site owner**, I want to communicate my love for the French language by including images that highlight many French traditions.
* Matching games have been shown to provide the following benefits:
  * improve concentration
  * train visual memory
  * increase short term memory
  * increase attention to detail improve the ability to find similarities and differences in objects
  * help to classify objects that are grouped by similar traits and can improve vocabulary

Source: https://www.montessoriprintshop.com/benefits-of-match-up-and-memory-games.html

### User Requirements and Expectations ###

**Requirements**
* Two word groups clearly presented.
* Display selected words in a specific place .
* Content displayed in a **visually appealing** manor.
* A visual cue that tells me when I achieve a successful word match.


**Expectations**
* Content is **visually satisfying** and clearly presented.
* The aim of the game is explained in a clear and simple manner.
* Buttons are clear and easy to read.
* It is clear when I have successfully completed the game.
* It is easy to start playing the game.


### Design Choices ###
---
**Fonts**

I went with Google Fonts [Comfortaa](https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Dosis&display=swap). I felt that this font had a certain friendliness to it.

**Colours**

- I went with a mostly off-white colour to contrast the colours of the buttons in their various states.
- A light-ish purple colour was used for the border.
- coolors.co was used to help create a balanced colour scheme.
- Images with a wide range of colours and a French theme.
- Validation text is in bold red which contrasts against the white background.
- Buttons are blue which contrasts nicely with the off-white background.
- Selected buttons are a grey colour.
- Successfully matched buttons turn green before fading out as a visual cue to the user that a match has been made.

* For some headers and titles: #F5F0F6 ![#F5F0F6](https://placehold.it/15/F5F0F6/000000?text=+) #F5F0F6
* For body background: #574D68 ![#574D68](https://placehold.it/15/#574D68/000000?text=+) #574D68
* For additional backgrounds:  #F5F0F6 ![#F5F0F6](https://placehold.it/15/#F5F0F6/000000?text=+) #F5F0F6


## Wireframing ##
---
For **wireframing** I used Balsamiq. This produced some **basic** wireframes, used to get an overall **feel** for what would go where and how things would look on different screen sizes.

In the early stage of the project the buttons were displayed on either side of the <textarea>'s'. Placing in on top and underneath worked better in regards to mobile design.


## Features ##
---
**Features** that have been **implemented:**

* Easy to use **navigation** on all screen sizes.
* Popup modals for starting the game, countdown running out and successfully completing the game.
* **Attractive** design aimed at ease of use.
* User can display a name.

**Features** that will be **implemented** in the **future:**

* The ability to change difficulty. Perhaps by making an adjustment to the countdown time. For example an easy difficulty level providing more time in which to complete the game.

* Turn the counter off. Learn on your time without the pressure of the timer.

* Multiple levels. Increasing in difficulty as the user progresses by means of including more difficult words. Counter continuing to countdown as they progress.

* Audio. Hear the word when a user clicks on a button. Also include some kind of sound on a successful match and/or successfully
completing a level.

* Different style of game such as including a series of words alongside an image. The user selects the correct word to match the image.

* Allow user to create a profile. This can include the ability to safe scores/times.

* Enable user to have a word list showing the words that they have learned.

* Dark mode feature.

* Allow user to change UI colours from included options.

## Technologies used ##
---
**Languages**

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS](https://nl.wikipedia.org/wiki/JavaScript)
* [JQuery](https://jquery.com/)
* [Popper](https://popper.js.org/)

**Tools & Libraries**

* [Git](https://git-scm.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Google fonts](https://fonts.google.com/)
* [Google Developer tools](https://developers.google.com/web/tools/chrome-devtools/)
* [GitPod](https://www.gitpod.io/)
* [Balsamiq](https://balsamiq.com/)
* [Git](https://git-scm.com/)
* [Coolors](https://coolors.co)
* [Am I responsive](http://ami.responsivedesign.is/Responsive)
* [imagecompressor](https://imagecompressor.com/)

## Testing

- The application was tested manually using the following browsers. Testing involved going through the steps listed below as well as checking for responsiveness.  
  - Chrome.
  - Firefox.
  - Microsoft Edge.
  - Safari.

- Mark-up was validated via https://validator.w3.org/ - no errors were found.
- CSS was validated via http://jigsaw.w3.org/css-validator/ - no errors were found.
- JS was validated via https://jshint.com/ - no major issues found.


- Page loading speed was tested using via chrome Developer tools -> Network.
  - Finish: 2.34 s
  - DOMContentLoaded: 1.76 s


* The following steps were followed on all major browsers.

    - On page load:

    - Enter name modal:
        - Checked that 'welcome' modal appeared on page load.
        - Clicked on button to start game without entering a name. Validation appeared as intended.
        - Clicked outside the modal to make sure that user could not bypass modal without entering a name. Also pressed Esc.
        - Checked to insure that validation text appeared when text field was left blank.   
        - Entered a name in text field then clicked on button.  

    - Main game:
        - Checked to see that name entered in text field matches that which appears on screen.
        - Checked to see that counter was displayed and showed the correct timing.
        - Clicked on various buttons to make sure that the selected button changed colour.
          - Grey when selected.
          - Restored to blue when a different button in the same language group was selected.
          - On a successful match checked that buttons changed to green, faded out and became unselect-able.  
        - Let timer run down to ensure that the timer expired modal appeared and counter did not go in to minus.
          - Clicked outside the modal to make sure that user could not bypass modal. Also pressed Esc.
          - Checked that restart button reloaded the page.
        - Matched all buttons to ensure that a successfully completed modal appears and counter stops.
          - Clicked outside the modal to make sure that user could not bypass modal. Also pressed Esc.
          - Checked that restart button reloaded the page.

    - All of these actions were repeated with the console open. No errors were found.
    - The following bugs occurred during development

    - Counter issue:
      - Counter continued to run past zero even when user successfully completed the game.
    - Randomise feature:
      - Adding the randomise feature caused buttons to randomise on click as opposed to on page load.
    - Rows too close to each other:
      - Set margins and padding.
    - Enter name modal:
      - User able to bypass enter name modal by clicking outside the modal.
      - User able to begin game without entering a name.
    - Timer expired modal:
      - User able to bypass timer expired modal by clicking outside the modal.
      - User able to resize text-areas which affected the positioning of other elements.  
      - Styling was added to prevent this.
    - Modal images too large:
      - Added styling to the modals which fixed this.
    - Timer expired modal appearing on game completion:
      - Changes made to counter function to prevent this from happening.
    - User needs to enter name when restarting:
      - Need to implement something that would not require the same user to constantly re-enter their name.
    - Button sections styling issue.
      - Removing buttons resulted in rows getting smaller. Using a different technique to remove the buttons fixed this issue.

    - The following bugs were discovered upon validation/testing

    - 'Welcome' modal Firefox issue:
      - When clicking on button with a blank text field the validation text read 'Enter Nome'.
    - User name and counter was not visible when accessed on mobile without clicking on the accordion button:
      - Replaced navbar with a row with styling.

## Deployment

- Deployment was achieved via GitHub at this link: https://jammerref2015.github.io/Frenchisfun/


## Credits



### Media

- The images used in this application were obtained from Shutterstock.
  - Sad France image by svtdesign.
  - French dogs image by Bibadash
  - French characters by Sabelskaya

### Acknowledgements
- I received inspiration for this project from different language learning apps.

### Updates

11/09/20
  - Images compressed in an attempt to increase performance. Readme updated. 

10/09/20
  - Code formatting.
  - Readme update.

06/09/20
  - Validation for welcome modal updated. Text now appears on the modal when form is left blank. Alert no longer appears.


04/09/20
  - Added modal for counter reaching zero
  - On successful word matches buttons now change to green and fade out.

03/09/20
  - Added modal for counter reaching zero
  - On successful word matches buttons now change to green and fade out.

03/09/20
  - Randomise location of buttons on page load.
  - Added styling to textarea's to prevent user from re-sizing.
  - Increased word count.
  - Added some styling.
  - Some code tiding.


02/09/20
  - Countdown timer now stops on successful completion of game.

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
