//Map Function    
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var map;
    var paths = [];

      function writeAddressName(latLng) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
          "location": latLng
        },
        function(results, status) {
          if (status == google.maps.GeocoderStatus.OK)
            document.getElementById("address").innerHTML = results[0].formatted_address;
          else
            document.getElementById("error").innerHTML += "Unable to retrieve your address" + "<br />";
        });
      }
 
      function geolocationSuccess(position) {
        var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        // Write the formatted address
        writeAddressName(userLatLng);
        var lineSymbol = {
            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
        };
 
        var myOptions = {
          //zoom: 18,
          maxZoom: 70,
          minZoom: 16,
          
          center : userLatLng,
          mapTypeId : google.maps.MapTypeId.ROADMAP
        };

        //------------------------------------
      //Paths
      //we need to make so many paths if we will end up doing it manually
        paths[1] = new google.maps.Polyline({
          path: [
              new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              new google.maps.LatLng(36.110019,-115.141532)
                   ],icons: [{
                             icon: lineSymbol,
                             offset: '100%'
                             }],strokeColor: '#FF0000'
          });

      paths[2] = new google.maps.Polyline({
          path: [
              new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              new google.maps.LatLng(36.107150,-115.142380)
          ], strokeColor: '#FF0000'
      });

      paths[3] = new google.maps.Polyline({
          path: [
            new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              new google.maps.LatLng(36.107150,-115.142380),
              new google.maps.LatLng(36.105774,-115.142384)
          ], strokeColor: '#0000FF'
      });

      paths[4] = new google.maps.Polyline({
          path: [
            new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              new google.maps.LatLng(36.107150,-115.142380),
              new google.maps.LatLng(36.105775,-115.141161)
          ], strokeColor: '#0000FF'
      });

      paths[5] = new google.maps.Polyline({
          path: [
            new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              new google.maps.LatLng(36.107150,-115.142380),
              new google.maps.LatLng(36.104797,-115.141944)
          ], strokeColor: '#0000FF'
      });

      paths[6] = new google.maps.Polyline({
          path: [
            new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              new google.maps.LatLng(36.107150,-115.142380),
              new google.maps.LatLng(36.106037,-115.138420)
          ], strokeColor: '#0000FF'
      });

      paths[7] = new google.maps.Polyline({
          path: [
            new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              new google.maps.LatLng(36.107150,-115.142380),
              new google.maps.LatLng(36.104797,-115.141944),
              new google.maps.LatLng(36.104925,-115.144250)
          ], strokeColor: '#00FF00'
      });

    //------------------------------------

        // Draw the map
        var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
        map = mapObject;
        // Place the marker
        new google.maps.Marker({
          map: mapObject,
          position: userLatLng
        });
        // Draw circle
        var circle = new google.maps.Circle({
          center: userLatLng,
          radius: 5,
          map: mapObject,
          fillColor: '#0000FF',
          fillOpacity: 0.5,
          strokeColor: '#0000FF',
          strokeOpacity: 1.0
        });

        mapObject.fitBounds(circle.getBounds());
      }
 
      function geolocationError(positionError) {
        document.getElementById("error").innerHTML += "Error: " + positionError.message + "<br />";
      }
 
      function geolocateUser() {
        // If the browser supports the Geolocation API
        if (navigator.geolocation)
        {
          var positionOptions = {
            enableHighAccuracy: true,
            timeout: 10 * 1000 // 10 seconds
          };
          navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
        }
        else
          document.getElementById("error").innerHTML += "Your browser doesn't support the Geolocation API";
      }
 
      window.onload = geolocateUser;
//------------------------------------
      function drawDirections() {
      var destination = 1 + document.getElementById('destination').selectedIndex;
      var i;

      // Hide all polylines
      for (i in paths) {
        paths[i].setOptions({ map: null });
      }

      // Show the route
      if (typeof paths[destination] !== 'undefined') {
        paths[destination].setOptions({ map: map });
      }

    }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Back Button
//------------------------------------
function goBack() {
  window.history.back()
}
//Login----------------------------------------------------------------------
var UserEmail;
var PassEmail;
var UserNSHE;
var PassNSHE;
//-------------------------------------

function GmailLogin(){
  var check = confirm("Is your email " + document.getElementById('GmailUserText').value + " ?");
  if(check == true){
    UserEmail = document.getElementById('GmailUserText').value;
    PassEmail = document.getElementById('GmailPassText').value;
    //test
    alert(UserEmail);
    alert(PassEmail);
    window.location.href = "logedInGmail.html";
  }
}

function UNLVLogin(){
  var check = confirm("Is your email " + document.getElementById('UnlvUserText').value + " ?");
  if(check == true){
    UserNSHE = document.getElementById('UnlvUserText').value;
    PassNSHE = document.getElementById('UnlvPassText').value;
    //test
    alert(UserNSHE);
    alert(PassNSHE);
    window.location.href = "logedInMyUNLV.html";
  }
}

//-------------------------------------