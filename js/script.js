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

function submit() {}
