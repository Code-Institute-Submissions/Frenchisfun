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
  - Finish: 2.34 s
  - DOMContentLoaded: 1.76 s


* The following steps were followed on all major browsers.

    - On page load:

    - Main page:  
        ![enter name image](/testing_photos/Main_image_sm.JPG.jpg)

    - Enter name modal:
        - Checked that the 'enter name' modal appeared on page load.
        - Clicked on the button to start the game without entering a name. Validation appeared as intended.
        - Clicked outside the modal to make sure that the player could not bypass the modal without entering a name. Also pressed Esc.
        - Checked to ensure that validation text appeared when the text field was left blank.   
        - Entered a name in the text field then click on the start button.

        - Enter name modal validation 
        ![enter name image](/testing_photos/Enter name validation_sm.JPG.jpg)

    - Change name button:
        - Clicked on the change name button to test if the enter name modal appeared.
        - Entered a different name to check that the name change occurred.

    - Reloading page.
        - Forced a page to reload. The counter appeared as intended and the current player name appeared. The page functioned as intended.

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
      - The counter continued to run past zero even when the player completed the game. The countdown () function is updated to stop the clock when a player completes the game.
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