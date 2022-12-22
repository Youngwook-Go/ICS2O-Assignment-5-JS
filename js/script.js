// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-5-JS/sw.js", {
    scope: "/ICS2O-Assignment-5-JS/",
  })
}

// function description

function update() {
  console.log("submit")
  const number = parseInt(document.getElementById("user-input").value)
  console.log("input is : " + number)
  var count = 0
  var answer = 0
  var denominator = 1
  var sign = 1
  while (number >= count)
  {
    answer = answer + (4 / denominator)
    sign = (Math.abs(denominator) / denominator) * -1
    denominator = (Math.abs(denominator) + 2) * sign

    count = count + 1
    console.log("answer is : " + answer.toFixed(2))
    console.log("denominator is : " + denominator)
    console.log("count is : " + count)
  }
  document.getElementById("answer").innerHTML = "The answer is : " + answer.toFixed(2)
  console.log("end")
}
