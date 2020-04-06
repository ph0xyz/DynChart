/*!
 * DynCharts
 * https://github.com/anumpho/DynChart
 *
 * Made with
 * 
 * D3.js
 * https://github.com/d3/d3
 * Version 4.13.0.
 *
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.3
 * 
 * Feather Icons
 * https://github.com/feathericons/feather
 * 
 * Bootstrap
 * https://github.com/twbs/bootstrap
 * 
 * Released under the MIT license
 * 
 *
 * Date: 2019-04-06
 */

var text0, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10;
var text_data = new Array;
var labels = new Array;
var col1_numbers = new Array;
var col2_numbers = new Array;
var col3_numbers = new Array;
var col4_numbers = new Array;
var col5_numbers = new Array;
var col6_numbers = new Array;
var col7_numbers = new Array;
var col8_numbers = new Array;
var col9_numbers = new Array;
var col10_numbers = new Array;
var last_date;
var last_id;
var last = new Array;

d3.csv("data.csv", function (data) {

  for (var i = 1; i < data.length; i++) {
    labels.push(data[i].label);
    col1_numbers.push(data[i].col1);
    col2_numbers.push(data[i].col2);
    col3_numbers.push(data[i].col3);
    col4_numbers.push(data[i].col4);
    col5_numbers.push(data[i].col5);
    col6_numbers.push(data[i].col6);
    col7_numbers.push(data[i].col7);
    col8_numbers.push(data[i].col8);
    col9_numbers.push(data[i].col9);
    col10_numbers.push(data[i].col10);
    last_date = data[i].label;
    last_id = i - 1;
  }

  last.push(data[last_id].col1);
  last.push(data[last_id].col2);
  last.push(data[last_id].col3);
  last.push(data[last_id].col4);
  last.push(data[last_id].col5);
  last.push(data[last_id].col6);
  last.push(data[last_id].col7);
  last.push(data[last_id].col8);
  last.push(data[last_id].col9);
  last.push(data[last_id].col10);

  text_data.push(data[0].col1);
  text_data.push(data[0].col2);
  text_data.push(data[0].col3);
  text_data.push(data[0].col4);
  text_data.push(data[0].col5);
  text_data.push(data[0].col6);
  text_data.push(data[0].col7);
  text_data.push(data[0].col8);
  text_data.push(data[0].col9);
  text_data.push(data[0].col10);
  console.log(last);

  for (var j = 0; i < text_data.length; i++) {
    if (text_data[i] === undefined) {
      text_data[i] = "nAn";
    }

  }


  for (var t = 1; t < 11; t++) {
    var help = t - 1;
    $('#tbl_label' + t).text(text_data[help]);
  }

  $('#display_last_date').text(last_date);

  $('#tbl_value1').text(col1_numbers[last_id]);
  $('#tbl_value2').text(col2_numbers[last_id]);
  $('#tbl_value3').text(col3_numbers[last_id]);
  $('#tbl_value4').text(col4_numbers[last_id]);
  $('#tbl_value5').text(col5_numbers[last_id]);
  $('#tbl_value6').text(col6_numbers[last_id]);
  $('#tbl_value7').text(col7_numbers[last_id]);
  $('#tbl_value8').text(col8_numbers[last_id]);
  $('#tbl_value9').text(col9_numbers[last_id]);
  $('#tbl_value10').text(col10_numbers[last_id]);

  console.log(col4_numbers[last_id]);



  (function () {
    'use strict'


    feather.replace()



    // Graphs
    var ctx = document.getElementById('myChart')
    
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
            data: col1_numbers,
            label: text_data[0],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#4C45FF',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          },
          {
            data: col2_numbers,
            label: text_data[1],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#FF5042',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          },
          {
            data: col3_numbers,
            label: text_data[2],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#B8B5FF',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          },
          {
            data: col4_numbers,
            label: text_data[3],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#FFE457',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          },
          {
            data: col5_numbers,
            label: text_data[4],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#29FF83',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          },
          {
            data: col6_numbers,
            label: text_data[5],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#C1FF45',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          },
          {
            data: col7_numbers,
            label: text_data[6],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#42E4FF',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          },
          {
            data: col8_numbers,
            label: text_data[7],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#E6FFB5',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          },
          {
            data: col9_numbers,
            label: text_data[8],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#D557FF',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          },
          {
            data: col10_numbers,
            label: text_data[9],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#FF811D',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          }

        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: true
        }
      }
    })

  }())



});