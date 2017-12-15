(function($){
  $(function(){

    $('.button-collapse').sideNav();

    $.getJSON( "http://kajahno.me/speed-test-rpi/node/tableData.js", function( data ) {
      var items = [];
      
      data.sort(function(a,b){
        return a["reqDate"] - b["reqDate"];
      });
      
      var valLabels = [];
      var valDownload = [];
      var valUpload = [];
      var valPing = [];


      
      $.each( data, function( key, val ) {
        var sampleDate = new Date(val["reqDate"]);
        valLabels.push(sampleDate.toLocaleString('en-GB'));
        valDownload.push(val["data"]["speeds"]["download"])
        valUpload.push(val["data"]["speeds"]["upload"])
        valPing.push(val["data"]["server"]["ping"])
      });
     
      console.log(valLabels);
      console.log(valDownload);
      console.log(valUpload);
      console.log(valPing);

      var ctx = document.getElementById('download-speed-chart').getContext('2d');
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',
      
          // The data for our dataset
          data: {
              labels: valLabels,
              datasets: [{
                  label: "Download Speed",
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgb(255, 99, 132)',
                  data: valDownload,
                  fill: false,
              }]
          },      
          // Configuration options go here
          options: {
            responsive: true,
            title:{
                display:true,
                text:'Download Speed (higher is better)'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Date Taken'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Mbps'
                    }
                }]
            },
            pan: {
              // Boolean to enable panning
              enabled: true,
  
              // Panning directions. Remove the appropriate direction to disable 
              // Eg. 'y' would only allow panning in the y direction
              mode: 'xy'
            },
            zoom: {
              // Boolean to enable zooming
              enabled: true,
              // Zooming directions. Remove the appropriate direction to disable 
              // Eg. 'y' would only allow zooming in the y direction
              mode: 'xy'
            }            
        }
      });

      var ctx = document.getElementById('upload-speed-chart').getContext('2d');
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',
      
          // The data for our dataset
          data: {
              labels: valLabels,
              datasets: [{
                label: "Upload Speed",
                borderColor: 'rgb(255, 230, 132)',
                backgroundColor: 'rgb(255, 230, 132)',
                data: valUpload,
                fill: false,
              }]
          },      
          // Configuration options go here
          options: {
            responsive: true,
            title:{
                display:true,
                text:'Upload Speed (higher is better)'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Date Taken'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Mbps'
                    }
                }]
            }
        }
      });

      var ctx = document.getElementById('ping-speed-chart').getContext('2d');
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',
      
          // The data for our dataset
          data: {
              labels: valLabels,
              datasets: [{
                label: "Latency (ping)",
                borderColor: 'rgb(255, 99, 255)',
                backgroundColor: 'rgb(255, 99, 255)',
                data: valPing,
                fill: false,
              }]
          },      
          // Configuration options go here
          options: {
            responsive: true,
            title:{
                display:true,
                text:'Latency (lower is better)'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Date Taken'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'milliseconds'
                    }
                }]
            }
        }
      });
      

      var ctx = document.getElementById('all-speed-chart').getContext('2d');

      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',
      
          // The data for our dataset
          data: {
              labels: valLabels,
              datasets: [{
                  label: "Download Speed",
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgb(255, 99, 132)',
                  data: valDownload,
                  fill: false,
                  yAxisID: "Speed (Mbps)",
              },{
                label: "Upload Speed",
                borderColor: 'rgb(255, 230, 132)',
                backgroundColor: 'rgb(255, 230, 132)',
                data: valUpload,
                fill: false,
              },{
                label: "Ping",
                borderColor: 'rgb(255, 99, 255)',
                backgroundColor: 'rgb(255, 99, 255)',
                data: valPing,
                fill: false,
                yAxisID: "Latency (msec)"
              }]
          },      
          // Configuration options go here
          options: {
            responsive: true,
            title:{
                display:true,
                text:'All speeds'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Date Taken'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Kbps'
                    },
                    position: "left",
                    id: "Speed (Mbps)"
                },
                {
                  display: true,
                  scaleLabel: {
                      display: true,
                      labelString: 'milliseconds'
                  },
                  position: "right",
                  id: "Latency (msec)"
                }]
            }
        }
      });      

    });


  }); // end of document ready
})(jQuery); // end of jQuery name space