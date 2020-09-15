


# French is fun -  A fun French / English word matching game

![readme image](/assets/images/readme_image.jpg)

A live demo can be found [here](https://jammerref2015.github.io/Frenchisfun/)

'French is fun' is a simple word matching game inspired by a real-world word game **Kids 'French Kit by Magnetic Poetry** that uses double-sided magnets with the English word on one side, the French word on the other.
As someone learning the French language, I wanted to develop a fun word matching game aimed at people that are at the
early stages of learning French. The aim of the game is « Très facile! » Simply match the English word with the correct French word!
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

The **goal** for this project was to make an easy to use word matching game that could help increase one's vocabulary. I have been learning French for a while now and I have used many language learning applications in the past, they inspired me when it came to creating 'French is fun'. I decided to keep the concept simple along with the execution. 'French is fun' needed to be super easy to use.

- Wireframes for this project are available in the Mockups folder.

### User Goals ###

* Provide players a fun way to learn the French language.
* To provide a tool to help increase vocabulary.

### User Stories ###

* As a **player**, I want a **fun and interactive language learning application ** so I will be **educated and entertained**.
* As a **player**, I want to improve my French and help increase my vocabulary.
* As a **player**, I want to be able to learn in a fun way by playing a game that will test my knowledge.

### Site Owner Goals ###

* As a **site owner**, I want to provide players with a fun way to learn the French language.
* As a **site owner**, I want to communicate my love for the French language by including images that highlight many French traditions.
* Matching games have been shown to provide the following benefits:
  * Improve concentration
  * Train visual memory
  * Increase short term memory
  * Increase attention to detail improve the ability to find similarities and differences in objects
  * Help to classify objects that are grouped by similar traits and can improve vocabulary

Source: https://www.montessoriprintshop.com/benefits-of-match-up-and-memory-games.html

### User Requirements and Expectations ###

**Requirements**
* Two word-groups presented.
* Display selected words in a specific place.
* Content displayed in a **visually appealing** manor.
* A visual cue that tells me when I achieve a successful word match.


**Expectations**
* Content is **visually satisfying** and presented.
* The aim of the game is explained clearly and simply.
* Buttons are clear and easy to read.
* It is clear when I have completed the game.
* It is easy to start playing the game.


### Design Choices ###
---
**Fonts**

I went with Google Fonts [Comfortaa](https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Dosis&display=swap). I felt that this font had a certain friendliness to it.

**Colours**

- I went with a mostly off-white color to contrast the colors of the buttons in their various states.
- A light-ish purple color was used for the border.
- I used [coolors.co](https://coolors.co/) to help create a balanced color scheme.
- Images/illustrations with a wide range of colors and a French theme were used.
- Validation text is in bold red which contrasts against the white background.
- The buttons are blue which contrasts nicely with the off-white background.
- The selected buttons are a grey color.
- Successfully matched buttons turn green before fading out as a visual cue to the player that a match has been made.

## Wireframing ##
---
Balsamiq was used for wireframing. This produced some basic wireframes, which were used to get an overall feeling for what would go where and how things would look on different screen sizes.

In the early stage of the project, the buttons were displayed on either side of the textarea's. Placing in on top and underneath worked better in regards to mobile design.


## Features ##
---
**Features** that have been **implemented:**

* Easy to use **navigation** on all screen sizes.
* Popup modals for starting the game, countdown running out, and completing the game.
* **Attractive** design aimed at ease of use of friendly images were used.
* Player can log in. Currently, the name is displayed next to the counter.

**Features** that will be **implemented** in the **future:**

* The ability to change the difficulty. Perhaps by adjusting the countdown time. For example, an easy difficulty level providing more time in which to complete the level.

* Turn the counter off. Learn without the pressure of the timer.

* Multiple levels. Increasing in difficulty as the player progresses utilizing including more difficult words. Counter continuing to countdown as they progress.

* Audio. Hear the word when a player clicks on a button. Also include some kind of sound on a successful match and/or successfully
completing a level.

* Include a different game style such as including a series of words alongside an image. The player selects the correct word to match the image.

* Allow the player to create a profile. This can include the ability to save scores/times.

* Enable player to have a word list showing the words that they have learned.

* Implement a dark mode feature.

* Allow the player to change UI colors by including some color schemes.

## Technologies used ##
---
**Languages**

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS](https://nl.wikipedia.org/wiki/JavaScript)


**Tools & Libraries**

* [JQuery](https://jquery.com/)
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
- JS was validated via https://jshint.com/ - no major issues were found.

- Page loading speed was tested using via chrome Developer tools -> Network.
  - Finish: 2.72 s
  - DOMContentLoaded: 2.01 s


* The following steps were followed on all major browsers.

    - On page load:
        - If new user('player') a enter name modal appears.
        - If a returning user('player') no modal appears and game counter starts counting down.

    - Change user button:
        - Clicked on the change user button, enter name modal appeared as intended.
        - Entered a new name which then appeared in on the main page. Entering a new name during a game results in a bug with the counter (see bugs section below).

    - Enter name modal:
        - Checked that the 'enter name' modal appeared on page load.
        - Clicked on the button to start the game without entering a name. Validation appeared as intended.
        - Clicked outside the modal to make sure that the player could not bypass the modal without entering a name. Also pressed Esc.
        - Checked to ensure that validation text appeared when the text field was left blank.   
        - Entered a name in the text field then click on the start button.

    - Change name button:
        - Clicked on the change name button to test if the enter name modal appeared.
        - Entered a different name to check that the name change occurred.

    - Reloading page.
        - Forced a page to reload. The counter appeared as intended and the current player name appeared. The page functioned as intended.
        - Changed player name during a game results in multiple countdowns. Reloading the page removes the countdown from the previous player.

    - Main game:
        - Checked to see that name entered in the text field matches that which appears on the screen.
        - Checked to see that counter was displayed and showed the correct timing.
        - Clicked on various buttons to make sure that the selected button changed color.
          - Grey when selected.
          - Restored to blue when a different button in the same language group was selected.
          - On a successful match checked that buttons changed to green, faded out, and became unselect-able.  
        - Let the timer run down to ensure that the timer expired modal appeared and the counter did not go into minus.
          - Clicked outside the modal to make sure that could not bypass modal. Also pressed Esc.
          - Checked that the restart button reloaded the page.
        - Matched all buttons to ensure that a 'Super' modal appears and counter stops.
          - Clicked outside the modal to make sure that the player could not bypass the modal. Also pressed Esc.
          - Checked that the restart button reloaded the page.

    - All of these actions were repeated with the console open. No errors were found.

    - The following bugs occurred during development

    - Counter issue:
      - The counter continued to run past zero even when the player completed the game. The countdown () function was updated to stop the clock when a player completes the game.
    - Randomize feature:
      - Adding the randomize feature caused buttons to randomize on click as opposed to on page load. This was corrected with changes made to the randomize function.
    - Rows too close to each other:
      - Setting margins and padding corrected this.
    - Enter name modal:
      - Player able to bypass enter name modal by clicking outside the modal. This was corrected by adding data-keyboard="false" data-backdrop="static".
      - Players were able to begin the game without entering a name. An if statement was added to check for a blank field.  
    - Timer expired modal:
      - The player able to bypass the timer expired modal by clicking outside the modal. This was corrected by adding data-keyboard="false" data-backdrop="static".
    - Player able to resize text-areas which affected the positioning of other elements.  
      - Styling was added to prevent this.
    - Modal images too large:
      - Added styling to the modals which fixed this.
    - Timer expired modal appearing on game completion:
      - Changes made to counter function to prevent this from happening.
    - Player needs to enter name when restarting:
      - implemented local storage to store player name and therefore remove the need to constantly re-enter name on page reload. Included a button to allow the player to change name.
    - Button sections styling issue.
      - Removing buttons resulted in rows getting smaller. Using a different technique to remove the buttons fixed this issue.
    - The Counter did not show if the player reloaded the page.
      - Updated main.js to run countdown if a player's name is in storage. Counter now appears.
    - Multiple counters running if the player's name changed during a game.
      - This bug needs to be corrected. The game should restart upon a name change.


    - The following bugs were discovered upon validation/testing

    - 'enter name' modal Firefox issue:
      - When clicking on the start button with a blank text field the validation text read 'Enter Nome'. Font not displaying correctly.
    - 'time out' modal Firefox issue:
      - Image is not displaying correctly.
    - The player name and counter were not visible when accessed on mobile without clicking on the accordion button:
      - Replaced navbar with a row with styling.

## Deployment

The website was developed using both *GitPod* and using *Git* pushed to *GitHub*, which hosts the repository. I made the following steps to deploy the site using *GitHub Pages*:

- Opened up **GitHub** in the browser.
- Signed in with my **username** and **password**.
- Selected my **repositories**.
- Navigated to **Jammerref2015/Frenchisfun**.
- In the top navigation clicked **settings**.
- Scrolled down to the **GitHub Pages** area.
- Selected **Master Branch** from the **Source** dropdown menu.
- Clicked to **confirm** my **selection**.
- [Frenchisfun](https://jammerref2015.github.io/Frenchisfun/) is now **live** on **GitHub Pages**.


## Credits

- Images available from Shutterstock.


### Media

- The images used in this application were obtained from Shutterstock.
  - Sad France image by svtdesign.
  - French dogs image by Bibadash
  - French characters by Sabelskaya

### Acknowledgements
- I received inspiration for this project from different language learning apps.
- Thank you to the people that help me test and fine tune the game.
- Thank you to my mentor at the code institute, Caleb Mbakwe.
- Thank you to Edward Walsh for testing and proof reading the Readme.


### Updates

15/09/20
  - Readme updated. 

14/09/20
  - Text changed in enter name modal.
  - Readme updated.

13/09/20
  - Main.js updated to fix bug when a player restarted the page the counter would not load.
  - Readme updated, checked with gramerly.com.
  - Some comments added to main.js

12/09/20
  - Styling for English and French boxes updated. Readme updated. Counter updated, time increased.
  - Added the ability for a player to store their username name via local storage eliminating the need to re-enter name on restart.

11/09/20
  - Images are compressed in an attempt to increase performance. Readme updated.

10/09/20
  - Code formatting.
  - Readme update.

06/09/20
  - Validation for enter name modal updated. Text now appears on the modal when the form is left blank. Alert no longer appears.

04/09/20
  - Added modal for counter reaching zero
  - On successful word matches, buttons now change to green and fade out.

03/09/20
  - Added modal for counter reaching zero
  - On successful word matches, buttons now change to green and fade out.

03/09/20
  - Randomize the location of buttons on page load.
  - Added styling to text areas to prevent the player from re-sizing.
  - Increased word count.
  - Added some styling.
  - Some code tiding.


02/09/20
  - The countdown timer now stops on the successful completion of the game.

01/09/20
  - Modal now appears when all buttons have been successfully matched.

01/09/20
- Added modal that appears on page load to request player name which is then added to the page.
- Added a timer that begins when the player clicks the let's begin button.
- A modal appears when the timer gets to zero. The Player has the option of restarting the game.
- Added an image to enter name modal and changed the background to match the image. Added temp text to 'enter name' modal.
- Change font sitewide.

17/08/20
- Added countdown functionality. Popup now appears if the player has completed a task in the set time.

29/07/20
- index.html
  - Added id's to French buttons.
  - Added id's to English buttons.
  - Added values to English buttons.
- main.js
  - Added functionality to buttons. They now change color when selected. Buttons now disappear when words correctly match.
- style.css
  - Added remove class.
