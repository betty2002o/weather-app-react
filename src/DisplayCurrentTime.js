import React from "react";

function DisplayCurrentTime() {
  let now = new Date();
  let day = now.getDay();
  let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  let dates = now.getDate();
  let month = now.getMonth();
  let months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let minute = now.getMinutes();
  let hour = now.getHours();
  let pmtime = hour - 12;

  if (minute < 10) {
    minute = `0${minute}`;
  }

  let currentTimePM = `${months[month]} ${dates} ${days[day]}, 0${pmtime}:${minute} PM`;
  let passtenPM = `${months[month]} ${dates} ${days[day]}, ${pmtime}:${minute} PM`;
  let currentTimeAM = `${months[month]} ${dates} ${days[day]}, 0${hour}:${minute} AM`;
  let passtenAM = `${months[month]} ${dates} ${days[day]}, ${hour}:${minute} `;

  if (hour >= 13 && pmtime > 9) {
    return <div>{passtenPM}</div>;
  } else if (hour >= 13) {
    return <div>{currentTimePM}</div>;
  } else if (hour > 9) {
    return <div>{passtenAM}</div>;
  } else {
    return <div>{currentTimeAM}</div>;
  }
}

export default DisplayCurrentTime;
