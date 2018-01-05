$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyB5K00suYqokuUoTk7OaXZP-mqCbDy8isQ",
        authDomain: "timesheet-f042b.firebaseapp.com",
        databaseURL: "https://timesheet-f042b.firebaseio.com",
        projectId: "timesheet-f042b",
        storageBucket: "",
        messagingSenderId: "1025750617929"
      };
    
    firebase.initializeApp(config);

    var database = firebase.database();

    $("#addEmployee").on("click", function(event) {
      event.preventDefault();

      name = $("#employeeName").val().trim();
      role = $("#employeeRole").val().trim();
      date = $("#startDate").val().trim();
      rate = $("#hourlyRate").val().trim();

      database.ref().push({
        name: name,
        role: role,
        date: date,
        rate: rate
      });

      alert("Employee successfully added!");

    });
    
    database.ref().on("child_added", function(snapshot) {
      // Log everything that's coming out of snapshot
      console.log(snapshot.val().name);
      console.log(snapshot.val().role);
      console.log(snapshot.val().date);
      console.log(snapshot.val().rate);
      // Change the HTML to reflect
      var newRow = $("<tr>");
      newRow.append("<td>" + snapshot.val().name + "</td>");
      newRow.append("<td>" + snapshot.val().role + "</td>");
      newRow.append("<td>" + snapshot.val().date + "</td>");

      var employeeHours = moment().diff(snapshot.val().date, "hours");
      console.log(employeeHours);
      newRow.append("<td>" + employeeHours + "</td>");
      

      newRow.append("<td>" + snapshot.val().rate + "</td>");


      var employeeBilled = employeeHours * snapshot.val().rate;
      newRow.append("<td>" + employeeBilled + "</td>");
      
      $(".table").append(newRow);
      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
});