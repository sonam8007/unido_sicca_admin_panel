// import { instance} from "react-chartjs-2";

// ##############################
// // // Chart variables
// #############################

let chart1_2_options = {
  layout: {
    padding: {
      left: 20,
      right: 20,
      top: 0,
      bottom: 0
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    backgroundColor: '#fff',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 8,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  legend: {
    position: "bottom",
    fillStyle: "#fff",
    display: false
  },
  scales: {
    yAxes: [{
      ticks: {
        fontColor: "rgba(255,255,255,0.8)",
        fontSize: 14,
        beginAtZero:true,
          callback: function(value, index, values) {
            if(value === 0){
              return 'Litres';
            }
            else{
              return value;
            }
          },
        maxTicksLimit: 10,
        padding: 5,
        
        // min:0,
        // stepSize: 1000
      },
      

    }],
    xAxes: [{
      // gridLines: {
      //   zeroLineColor: "transparent",
      //   display: false,

      // },
      gridLines: {
        drawTicks: true,
        drawBorder: false,
        display: true,
        color: "rgba(255,255,255,0.1)",
        zeroLineColor: "rgba(255,255,255,0.1)",
        zeroLineWidth:1
      },
      ticks: {
        padding: 10,
        fontColor: "rgba(255,255,255,0.8)",
        fontSize: 16,
      }
    }]
  }
};
let bar1_2_options = {
    scales: {
      yAxes: [{
        ticks: {
          fontColor:"#bbb",
          beginAtZero:false,
          callback: function(value, index, values) {
            if(value === 0){
              return 'Kwh';
            }
            else{
              return value;
            }
          },
          maxTicksLimit: 5,
              
        }
      }],
      xAxes: [{
        ticks: {
          fontColor:"#bbb"
        },
        barThickness: 20
      }]
    },
    legend: {
      display: false
    },
  
};

let pump_options = {
  scales: {
    yAxes: [{
      ticks: {
        fontColor:"#bbb",
        beginAtZero:true,
        maxTicksLimit: 5,
        padding: 10,
        min:0,
        stepSize: 5
      },

    }],
    xAxes: [{
        ticks: {
          fontColor:"#bbb"
        },
        barThickness: 20
      }]
    },
    legend: {
      labels: {
            fontColor: "#fff"
        },
      display: false
  },
}
// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample2 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 120, 80]
        }
      ]
    };
  },
  options: chart1_2_options
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample3 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

    return {
      labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
      datasets: [
        {
          label: "Countries",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: "#d048b6",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [53, 20, 10, 80, 100, 45]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample4 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [90, 27, 60, 12, 80]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },

    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(0,242,195,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};

module.exports = {
  chart1_2_options,
  bar1_2_options,
  pump_options,
  chartExample2, // in src/views/Dashboard.js
  chartExample3, // in src/views/Dashboard.js
  chartExample4 // in src/views/Dashboard.js
};
