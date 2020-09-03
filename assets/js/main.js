// Randomise buttons
function randomiseWords() {
    $(".frenchCard").randomize(".frbtn");
    $(".englishCard").randomize(".engbtn");
}

(function ($) {
    $.fn.randomize = function (childElem) {
        return this.each(function () {
            var $this = $(this);
            var elems = $this.children(childElem);
            elems.sort(function () {
                return Math.round(Math.random()) - 0.8;
            });
            $this.remove(childElem);
            for (var i = 0; i < elems.length; i++) $this.append(elems[i]);
        });
    };
})(jQuery);

// Counter
function countdown(minutes) {
    let seconds = minutes * 60;
    var interval = setInterval(() => {
        counter.innerHTML =
            parseInt(seconds / 60) +
            ":" +
            (seconds % 60 < 10 ? "0" : "") +
            (seconds % 60);
        seconds--;
        var myNodeList = $(".removeTest");
        if (seconds == 0 || myNodeList.length >= 26) {
            clearInterval(interval);
            $("#gameCompleteModal").modal("show");
        }
    }, 1000);
}

$(document).ready(function () {
    // Show pop up on page load
    $("#enterNameModal").modal("show");
    // english word > french word
    $(".frbtn").click(function () {
        $(".frbtn").removeClass("btn-secondary").addClass("btn-primary");
        $(this).removeClass("btn-primary").addClass("btn-secondary");
        $("#frenchText").val(this.value);
        if (words[$("#englishText").val()] === this.value) {
            $(this).addClass("removeTest");
            let englishWord = $("#englishText").val();
            $("#" + englishWord).addClass("removeTest");
            matchAll();
        }
    });

    // french word > english word
    $(".engbtn").click(function () {
        $(".engbtn").removeClass("btn-secondary").addClass("btn-primary");
        $(this).removeClass("btn-primary").addClass("btn-secondary");
        $("#englishText").val(this.value);
        if (words[this.value] === $("#frenchText").val()) {
            $(this).addClass("removeTest");
            let frenchWord = $("#frenchText").val();
            $("#" + frenchWord).addClass("removeTest");
            matchAll();
        }
    });

    function matchAll() {
        var myNodeList = $(".removeTest");
        if (myNodeList.length >= 26) {
            $("#gameCompleteModal").modal("show");
        }
    }

    // Enter name on page load.
    $("#enterNameButton").click(function () {
        var str = $("#nameInput").val();
        if (str == "") {
            alert("Please enter a name to begin.");
        } else {
            document.getElementById("name").innerHTML = str;
            countdown(1);
            $("#enterNameModal").modal("hide");
        }
    });
});
