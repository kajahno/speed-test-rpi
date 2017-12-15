(function($){
  $(function(){

    $('.button-collapse').sideNav();

    var getUrl = window.location;

    $.getJSON( getUrl + "../node/tableData.js", function( data ) {
      var items = [];
      
      data.sort(function(a,b){
        return a["reqDate"] - b["reqDate"];
      });
      
      var valLabels = [];
      var valDownload = [];
      var valUpload = [];
      var valPing = [];


      
      $.each( data, function( key, val ) {
        valLabels.push(val["reqDate"]);
        valDownload.push(val["data"]["speeds"]["download"])
        valUpload.push(val["data"]["speeds"]["upload"])
        valPing.push(val["data"]["server"]["ping"])
      });
     
      console.log(valLabels);
      console.log(valDownload);
      console.log(valUpload);
      console.log(valPing);

      var ctx = document.getElementById('speed-chart').getContext('2d');
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',
      
          // The data for our dataset
          data: {
              labels: valLabels,
              datasets: [{
                  label: "Download Speed",
                  borderColor: 'rgb(255, 99, 132)',
                  data: valDownload,
              },{
                label: "Upload Speed",
                borderColor: 'rgb(255, 230, 132)',
                data: valDownload,
              },{
                label: "Ping",
                borderColor: 'rgb(255, 99, 255)',
                data: valDownload,
              }]
          },      
          // Configuration options go here
          options: {}
      });


    });


  }); // end of document ready
})(jQuery); // end of jQuery name space