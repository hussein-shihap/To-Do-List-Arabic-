function addTask() {
  var task = $("#taskInput").val();
  if (task) {
    $("#taskList").append(
      "<li>" + task + " <button class='deleteBtn'>❌</button> "+ "<input type='checkbox' class='taskCheckbox'>"  +"</li>     "
    );
    $("#taskInput").val("");
  }

  $("#addBtn").addClass("pressed");
  setTimeout(function () {
    $("#addBtn").removeClass("pressed");
  }, 100);
}




$(document).on("click", ".deleteBtn", function () {
  $(this).parent().remove();
});





$("#addBtn").click(function () {
  addTask();
});

$(document).keydown(function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});








$(document).on("change", ".taskCheckbox", function () {
    var taskText = $(this).parent().clone().children().remove().end().text();

    if ($(this).is(":checked")) {
        $("#completedTasks").append("<li>" + taskText + "</li>");
        $(this).parent().remove();
    } 
});



