var words = {
  Dog: "Chien",
  Bike: "Vélo",
  Guitar: "Guitare",
  Book: "Livre",
};

// Count down function
function countdown(minutes) {
  let seconds = minutes * 60; // Set time limit here.
  var interval = setInterval(() => {
    //Reset to let?!?
    //  console.log(seconds)
    counter.innerHTML =
      parseInt(seconds / 60) +
      ":" +
      (seconds % 60 < 10 ? "0" : "") +
      (seconds % 60);
    seconds--;
    // Display pop up if timer runs out.
    if (seconds == 0) {
      clearInterval(interval); // Stop the clock from continuing to run once pop up shows
      $("#gameCompleteModal").modal("show");
    }
  }, 1000);

  setTimeout(() => clearInterval(interval), minutes * 60 * 1000);
}

$(document).ready(function () {
  $("#enterNameModal").modal("show"); // Display modal for player to enter name

  // If the user clicks on a english word then an french word run this function
  $(".frbtn").click(function () {
    $(".frbtn").removeClass("btn-secondary").addClass("btn-primary"); // Change button color to show selection
    $(this).removeClass("btn-primary").addClass("btn-secondary"); // Restore to org color if user selects another button
    $("#frenchText").val(this.value); // Display selected word in textarea
    if (words[$("#englishText").val()] === this.value) {
      // If eng word from 'words' matches then run...
      $(this).addClass("removeTest"); // Add CSS class to remove button on successful match.
      let englishWord = $("#englishText").val();
      document.getElementById(englishWord).classList.add("removeTest");
      console.log(englishWord); // Word appears on a correct match
      matchAll();
    }
  });

  // If the user clicks on a french word then an english word run this function
  $(".engbtn").click(function () {
    $(".engbtn").removeClass("btn-secondary").addClass("btn-primary");
    $(this).removeClass("btn-primary").addClass("btn-secondary");
    $("#englishText").val(this.value);
    if (words[this.value] === $("#frenchText").val()) {
      $(this).addClass("removeTest");
      let frenchWord = $("#frenchText").val();
      document.getElementById(frenchWord).classList.add("removeTest");
      matchAll();
    }
  });

  function matchAll() {
    var myNodeList = $(".removeTest");
    if (myNodeList.length >= 8) {
      $("#gameCompleteModal").modal("show");
    }
  }

  // Button to retrive information entered in the input. Needs some work!
  $("#enterNameButton").click(function () {
    var str = $("#nameInput").val();

    if (str == "") {
      // If textfield is blank
      alert("Please enter a name to begin.");
    } else {
      // User enters a name.
      document.getElementById("name").innerHTML = str;
      countdown(1); // Start countdown
      $("#enterNameModal").modal("hide"); // Requires user to enter an name.
    }
  });
});
