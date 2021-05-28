var hoursInDay = [
  {
    slot: "1",
    hour: "9",
    time: "09",
    toc: "AM",
    note: "",
  },
  {
    slot: "2",
    hour: "10",
    time: "10",
    toc: "AM",
    note: "",
  },
  {
    slot: "3",
    hour: "11",
    time: "11",
    toc: "AM",
    note: "",
  },
  {
    slot: "4",
    hour: "12",
    time: "12",
    toc: "PM",
    note: "",
  },
  {
    slot: "5",
    hour: "1",
    time: "13",
    toc: "PM",
    note: "",
  },
  {
    slot: "6",
    hour: "2",
    time: "14",
    toc: "PM",
    note: "",
  },
  {
    slot: "7",
    hour: "3",
    time: "15",
    toc: "PM",
    note: "",
  },
  {
    slot: "8",
    hour: "4",
    time: "16",
    toc: "PM",
    note: "",
  },
  {
    slot: "9",
    hour: "5",
    time: "17",
    toc: "PM",
    note: "",
  },
];

// header date function
function currentDate() {
  var getCurrentDay = moment().format("dddd, MMMM Do ");
  $("#currentDay").text(getCurrentDay);
}

// stringify array and save to local storage
// function stringItUp() {
//   localStorage.setItem("hoursInDay", JSON.stringify(hoursInDay.note));
// }

// function displayNote() {
//   hoursInDay.forEach(function (currentHourNote) {
//     $(currentHourNote.slot).val(currentHourNote.note);
//   });
//   console.log(currentHourNote.slot);
// }

// function startUp() {
//   var storedDay = JSON.parse(localStorage.getItem("myDay"));

//   if (storedDay) {
//     myDay = storedDay;
//   }
//   stringItUp();
//   displayNote();
// }

hoursInDay.forEach(function (currentHour) {
  // creates timeblocks row
  var timeSlot = $("<form>").attr({
    class: "row",
  });
  $(".container").append(timeSlot);

  // creates time field
  var timeHour = $("<div>")
    .text(currentHour.hour + currentHour.toc)
    .attr({ class: "col-md-1  hour " });

  // create text area
  var timeText = $("<textarea>");
  timeHour.append(timeText);
  timeText.attr({
    class: "col-md-10 description  p-0 ",
  });

  //   create save button
  var saveStuff = $("<button>").attr({
    class: "col-md-1 saveBtn far fa-save fa-lg",
  });

  timeSlot.append(timeHour, timeText, saveStuff);

  if (currentHour.time < moment().format("H")) {
    timeText.attr({
      class: "past col-md-10  description p-0",
    });
  } else if (currentHour.time === moment().format("H")) {
    timeText.attr({
      class: "present col-md-10  description p-0",
    });
  } else if (currentHour.time > moment().format("H")) {
    timeText.attr({
      class: "future col-md-10  description p-0",
    });
  }
  console.log(currentHour.hour);
});

// startUp();

// saves data to be used in localStorage
$(".saveBtn").on("click", function (event) {
  event.preventDefault();

  //   console.log(currentHour.note);

  //   stringItUp();
  //   displayNote();
});

// callbacks
currentDate();
