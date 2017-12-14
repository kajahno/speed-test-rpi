var fs = require('fs');

var currDate = Date.now();

var tableData = JSON.parse(fs.readFileSync('tableData.js', 'utf8'));

if (tableData == undefined){
  tableData = [];
}

require('speedtest-net')().on('data', data => {
  
  var newDate = Date.now();

  var newData = {
    "reqDate" : currDate,
    "data" : data,
    "duration": newDate - currDate
  };

  // console.log("speed_download, speed_upload, speed_originalDownload, speed_originalUpload, clnt_ip, clnt_lat, clnt_lon, clnt_isp, clnt_isprating, clnt_rating, clnt_ispdlavg, clnt_ispuplavg, srv_host, srv_lat, srv_lon, srv_location, srv_country, srv_cc, srv_sponsor, srv_distanceKm, srv_distanceMi, srv_ping, srv_id");

  console.log("New data gathered: ");
  console.dir(newData);

  console.log("All entries: ");
  
  tableData.push(newData);
  console.dir(tableData);

  var tableDataStr = JSON.stringify(tableData);

  fs.writeFile("./tableData.js", tableDataStr, function(err) {
  
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");

  });

});