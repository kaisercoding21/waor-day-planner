var hoursInDay = [
  {
    slot: "1",
    hour: "9",
    time: "09",
    toc: "AM",
  },
  {
    slot: "2",
    hour: "10",
    time: "10",
    toc: "AM",
  },
  {
    slot: "3",
    hour: "11",
    time: "11",
    toc: "AM",
  },
  {
    slot: "4",
    hour: "12",
    time: "12",
    toc: "PM",
  },
  {
    slot: "5",
    hour: "1",
    time: "13",
    toc: "PM",
  },
  {
    slot: "6",
    hour: "2",
    time: "14",
    toc: "PM",
  },
  {
    slot: "7",
    hour: "3",
    time: "15",
    toc: "PM",
  },
  {
    slot: "8",
    hour: "4",
    time: "16",
    toc: "PM",
  },
  {
    slot: "9",
    hour: "5",
    time: "17",
    toc: "PM",
  },
];

// header date function
function currentDate() {
  var getCurrentDay = moment().format("dddd, MMMM Do ");
  $("#currentDay").text(getCurrentDay);
}

// stringify array and save to local storage
function stringItUp() {
  localStorage.setItem(hoursInDay.slot, JSON.stringify(hoursInDay));
}

function retrieve() {
  localStorage.getItem("hourTime");
}

function startUp() {
  var storedDay = JSON.parse(localStorage.getItem("hoursInDay"));

  if (storedDay) {
    hoursInDay = storedDay;
  }
  stringItUp();
}

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
    id: currentHour.slot,
  });

  // retrieveNote;

  //   create save button
  var saveStuff = $("<button>").attr({
    class: "col-md-1 saveBtn far fa-save fa-lg",
  });

  timeSlot.append(timeHour, timeText, saveStuff);

  if (currentHour.time < moment().format("HH")) {
    timeText.attr({
      class: "past col-md-10 description p-0",
    });
  } else if (currentHour.time === moment().format("HH")) {
    timeText.attr({
      class: "present col-md-10 description p-0",
    });
  } else if (currentHour.time > moment().format("HH")) {
    timeText.attr({
      class: "future col-md-10 description p-0",
    });
  }
});

// saves data to be used in localStorage
$(".saveBtn").on("click", function (event) {
  event.preventDefault();

  var hourTime = $(this).siblings(".description").attr("id");

  var hourNote = $(this).siblings(".description").val();
  localStorage.setItem(hourTime, hourNote);
  stringItUp();
});

// displayNote();

// callbacks
currentDate();
startUp();
retrieve();
