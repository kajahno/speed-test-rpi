var currDate = Date.now();

require('speedtest-net')().on('data', data => {
  
  var newDate = Date.now();

  var newData = {
    "reqDate" : currDate,
    "data" : data,
    "duration": newDate - currDate
  };

  // console.log("speed_download, speed_upload, speed_originalDownload, speed_originalUpload, clnt_ip, clnt_lat, clnt_lon, clnt_isp, clnt_isprating, clnt_rating, clnt_ispdlavg, clnt_ispuplavg, srv_host, srv_lat, srv_lon, srv_location, srv_country, srv_cc, srv_sponsor, srv_distanceKm, srv_distanceMi, srv_ping, srv_id");

  // console.log(data['speeds']['download'] + ", " + data['speeds']['upload'] + ", " + data['speeds']['originalDownload'] + ", " + data['speeds']['originalUpload'] + ", " + data['client']['ip'] + ", " + data['client']['lat'] + ", " + data['client']['lon'] + ", " + data['client']['isp'] + ", " + data['client']['isprating'] + ", " + data['client']['rating'] + ", " + data['client']['ispdlavg'] + ", " + data['client']['ispulavg'] + ", " + data['server']['lat'] + ", " + data['server']['lon'] + ", " + data['server']['location'] + ", " + data['server']['country'] + ", " + data['server']['cc'] + ", " + data['server']['sponsor'] + ", " + data['server']['distance'] + ", " + data['server']['distanceMi'] + ", " + data['server']['ping'] + ", " + data['server']['id']);

  console.dir(newData);

  

});
