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
              new google.maps.LatLng(36.111896,-115.146010)
                   ],icons: [{
                             icon: lineSymbol,
                             offset: '100%'
                             }],strokeColor: '#FF0000'
          
                                            }
               // var ending =new google.maps.LatLng(36.110019,-115.141532)
                );

      paths[2] = new google.maps.Polyline({
          path: [
              new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              new google.maps.LatLng(36.102245,-115.138720)
                   ], icons: [{
                              icon: lineSymbol,
                              offset: '100%'
                              }],strokeColor: '#FF0000'
      });

      paths[3] = new google.maps.Polyline({
          path: [
            new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              new google.maps.LatLng(36.104797,-115.141270)
                   ], icons: [{
                              icon: lineSymbol,
                              offset: '100%'
                              }],strokeColor: '#FF0000'
      });

      paths[4] = new google.maps.Polyline({
          path: [
            new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              new google.maps.LatLng(36.111023,-115.145230)
                   ], icons: [{
                              icon: lineSymbol,
                              offset: '100%'
                              }],strokeColor: '#FF0000'
      });

      paths[5] = new google.maps.Polyline({
          path: [
            new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              new google.maps.LatLng(36.106148,-115.139870)
                   ], icons: [{
                              icon: lineSymbol,
                              offset: '100%'
                              }],strokeColor: '#FF0000'
      });

      paths[6] = new google.maps.Polyline({
          path: [
            new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              new google.maps.LatLng(36.112220,-115.143950)
                   ], icons: [{
                              icon: lineSymbol,
                              offset: '100%'
                              }],strokeColor: '#FF0000'
      });

      paths[7] = new google.maps.Polyline({
          path: [
            new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              new google.maps.LatLng(36.109985,-115.144229)
                   ], icons: [{
                              icon: lineSymbol,
                              offset: '100%'
                              }],strokeColor: '#FF0000'
      });
      
      paths[8] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.105280,-115.138920),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });

      //-------------------change it!!!!!!!!!!!1
 paths[9] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.110355,-115.138050),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
  paths[10] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.109170,-115.143620),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[11] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.107980,-115.139990),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[12] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.105774,-115.142384),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[13] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.105775,-115.141161),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[14] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.109104,-115.140220),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[15] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.109112,-115.142289),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[16] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.103420,-115.139600),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[17] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.104180,-115.143340),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[18] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.104850,-115.148090),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[19] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.101807,-115.142040),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[20] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.104736,-115.140600),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[21] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.108337,-115.149930),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[22] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.108144,-115.142867),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[23] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.106686,-115.138390),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[24] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.107335,-115.145583),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[25] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.111235,-115.138730),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[26] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.108593,-115.147480),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[27] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.108610,-115.138200),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[28] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.107499,-115.136864),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[29] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.104965,-115.137910),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[30] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.110464,-115.141971),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[31] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.110082,-115.139725),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[32] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.109372,-115.139894),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[33] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.109467,-115.138400),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[34] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.102700,-115.139550),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[35] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.107307,-115.144690),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[36] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.110134,-115.138790),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[37] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.110703,-115.146150),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[38] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.110896,-115.144143),
                 ], icons: [{
                             icon: lineSymbol,
                             offset: '100%'
                             }],strokeColor: '#FF0000'
      });
   paths[39] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.104153,-115.139720),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[40] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.108331,-115.141027),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[41] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.107150,-115.142380),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[42] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.108104,-115.139479),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[43] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.103723,-115.143779),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[44] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.109360,-115.145880),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[45] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.113056,-115.146520),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[46] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.107060,-115.141100),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[47] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.106418,-115.145088),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[48] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.100435,-115.144808),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[49] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.100521,-115.144089),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[50] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.100324,-115.143918),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[51] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.100151,-115.143899),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[52] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.099995,-115.143923),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[53] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.099780,-115.143990),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[54] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.099522,-115.144146),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[55] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.111717,-115.144930),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[56] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.107365,-115.135834),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[57] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.111233,-115.140180),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[58] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.102920,-115.142980),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[59] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.107254,-115.143250),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[60] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.107500,-115.143910),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[61] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.106552,-115.144530),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[62] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.108580,-115.139720),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[63] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.102257,-115.139890),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[64] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.108080,-115.141390),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[65] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.113686,-115.144221),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[66] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.103214,-115.142070),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[67] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.102180,-115.141250),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[68] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.085476,-115.016670),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[69] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.107742,-115.140510),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[70] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.110820,-115.141540),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[71] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.114293,-115.145823),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[72] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.159954,-115.163610),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[73] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.160442,-115.164580),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[74] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.161090,-115.164670),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[75] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.159320,-115.163640),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[76] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.101980,-115.140729),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[77] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.104797,-115.141944),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[78] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.109074,-115.144400),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[79] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.106037,-115.138420),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[80] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.109335,-115.141112),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[81] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.108145,-115.138527),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[82] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.114060,-115.144390),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[83] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.110019,-115.141532),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[84] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.108437,-115.141430),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[85] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.104925,-115.144250),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[86] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.106569,-115.146525),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[87] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.105133,-115.139951),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[88] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.106225,-115.144562),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[89] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.104095,-115.140840),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[90] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.107494,-115.143330),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[91] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.106980,-115.143980),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
   paths[92] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.104315,-115.138596),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
       paths[93] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.111038,-115.148140),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
       paths[94] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.109886,-115.142890),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
      });
       paths[95] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.107142,-115.139744),
                 ],icons: [{
                           icon: lineSymbol,
                           offset: '100%'
                           }],strokeColor: '#FF0000'
      });
       paths[96] = new google.maps.Polyline({
          path: [
             new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                new google.maps.LatLng(36.103374,-115.140880),
                 ], icons: [{
                            icon: lineSymbol,
                            offset: '100%'
                            }],strokeColor: '#FF0000'
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


