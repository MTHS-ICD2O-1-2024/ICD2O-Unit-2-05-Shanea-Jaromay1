// Copyright (c) 2020 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: March 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates salary.
 */
function takeHomeSalary () {
  // input
  const hoursWorked= parseFloat(document.getElementById('hours-worked').value)
  const hourlyWage = parseFloat(document.getElementById('hourly-wage').value)

  // process
  const pay = (hoursWorked * hourlyWage) * (1.00 - 0.18)
  const taxes = (hoursWorked * hourlyWage) * 0.18

  // output
  document.getElementById('pay').innerHTML = 
  `Your pay will be: $${pay.toFixed(2)}
  <br> The government will take: $${taxes.toFixed(2)}` 
}
