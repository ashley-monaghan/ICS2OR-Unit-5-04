// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Unit-5-04/sw.js", {
    scope: "/ICS2OR-Unit-5-04/",
  })
}

/**
 * This function displays an alert.
 * Words
 */
function calculate() {
  let inputedAge = document.getElementById("age").value
  let inputedDay = document.getElementById("day").value

  if ((day == "Tuesday") || (day == "Wednesday") || (age > 12 && age < 21)) {
    document.getElementById("answer").innerHTML =
      "You're able to get the discount! :)"
  } else {
    document.getElementById("answer").innerHTML =
      "Sorry, you must pay for regular pricing. :("
  }
}
