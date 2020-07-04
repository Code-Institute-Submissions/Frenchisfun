$(document).ready(function () {
  $(".frbtn").click(function () {
    console.log(this.value);
    $(this).removeClass("btn-primary").addClass("btn-secondary");
    $("#frenchText").val(this.value);
  });
});
