var mapIt = function() {
    //These are the coordinates to center in minneapolis[44.96479793033104, -93.262939453125]
    var map = L.map('map').setView([44.951961, -93.316341], 11);

    L.tileLayer('http://{s}.tiles.mapbox.com/v3/jmbjones.j044g478/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy;',
      maxZoom: 20
      }).addTo(map);

   var theatre = L.MakiMarkers.icon({icon: "theatre", color: "#b0b", size: "m"});
   var art_gallery = L.MakiMarkers.icon({icon: "art-gallery", color: "#b0b", size: "m"});
   var beer = L.MakiMarkers.icon({icon: "beer", color: "#b0b", size: "m"});
   var baseball = L.MakiMarkers.icon({icon: "baseball", color: "#b0b", size: "m"});
   var airport = L.MakiMarkers.icon({icon: "airport", color: "#5e00bb", size: "m"});
   var place_of_worship = L.MakiMarkers.icon({icon: "place-of-worship", color: "#5e00bb", size: "m"});
   var building = L.MakiMarkers.icon({icon: "building", color: "#5e00bb", size: "m"});
   var basketball = L.MakiMarkers.icon({icon: "basketball", color: "#b0b", size: "m"});
   var shop = L.MakiMarkers.icon({icon: "shop", color: "#b0b", size: "m"});
   var harbor = L.MakiMarkers.icon({icon: "harbor", color: "#b0b", size: "m"});
   var restaurant = L.MakiMarkers.icon({icon: "restaurant", color: "#b0b", size: "m"});
   var town_hall = L.MakiMarkers.icon({icon: "town-hall", color: "#b0b", size: "m"});
   var fast_food = L.MakiMarkers.icon({icon: "fast-food", color: "#b0b", size: "m"});
   var lodging = L.MakiMarkers.icon({icon: "lodging", color: "#b0b", size: "m"});

    L.marker([44.9817, -93.2783], {icon: baseball}).bindPopup('Target Field<br>Where the Twins play!<br><a href="http://minnesota.twins.mlb.c    om/schedule/?c_id=min#y=2014&m=7&calendar=DEFAULT">Twins Schedule</a>').addTo(map);

    L.marker([44.883904, -93.229151], {icon: airport}).bindPopup('MSP Airport, where everyone will fly in and out of.<br><a href="https://www.mspairport.com/">MSP</a>').addTo(map);

    L.marker([44.987293, -93.277306], {icon: beer}).bindPopup('The Freehouse<br>Our favorite restaurant in our neighborhood.<br>They brew their beer in house, but the food is really where it is at!<br><a href="http://    www.freehousempls.com/">The Freehouse</a>').addTo(map);

//    L.marker([]).bindPopup('').addTo(map);

    L.marker([44.950769, -93.084472], {icon: baseball}).bindPopup('The St. Paul Saints Minor League Baseball team just moved into a new stadium in St. Paul. And more importantly, they are owned by Bill Murray!<br><a href="http://www.saintsbaseball.com">Saints Baseball</a>').addTo(map);

    L.marker([44.954997, -93.102340], {icon: town_hall}).bindPopup('When Minnesota was growing the three major cities were all competing for the jail, university, and state capital. Minneapolis got the university, St. Cloud the jail, and St. Paul the capital.<br><a href="http://www.mnhs.org>Minnesota State Capitol</a>').addTo(map);

    L.marker([44.913933, -93.139561], {icon: beer}).bindPopup('Summit Brewing does great tours (with lots of free beer).<br><a href="http://www.summitbrewing.com">Summit Brewery</a>').addTo(map);

    L.marker([44.818370, -93.482206], {icon: fast_food}).bindPopup('Lions Tap Burgers are famous in Eden Prairie, where Kyle grew up. It is a Minnesota classic for sure.<br><a href="http://lionstap.com">Lions Tap</a>').addTo(map);

    L.marker([44.985826, -93.260522], {icon: restaurant}).bindPopup('Nicollet Island Inn is a lovely spot in the middle of the Mississippi. It also happens to be right where we got engaged!!<br><a href="http://www.nicolletislandinn.com">Nicollet Island Inn</a>').addTo(map);

    L.marker([44.933200, -93.531129], {icon: place_of_worship}).bindPopup('The Minnetonka Yacht Club is where both the ceremony and reception will be held.<br><a href="http://www.minnetonkayachtclub.org/">MYC</a>').addTo(map);

    L.marker([44.988732, -93.277716], {icon: building}).bindPopup('Else Warehouse where we live in downtown Minneapolis.<br><a href="http://www.elsewarehouse.com/">Our Place!</a>').addTo(map);

    L.marker([44.979551, -93.276160], {icon: basketball}).bindPopup('Turns out the best team in Minnesota Sports are playing the week of the wedding. This would be our own Minnesota Lynx WNBA team. They have won two championships in the last 4 years.<br><a href="http://www.wnba.com/lynx/">Go Lynx!</a>').addTo(map);

    L.marker([44.970211, -93.289248], {icon: art_gallery}).bindPopup('The Walker Art Museum has the Minnesota Sculpture Garden which has a myriad of beautiful pieces including the piece most associated with Minneapolis, the Spoonbridge and Cherry.<br><a href="http://www.walkerart.org/garden/">Walker Museum</a>').addTo(map);

    L.marker([44.856037, -93.242446], {icon: shop}).bindPopup('Now of course we would be remiss not to mention the largest mall in America. And big it is!<br><a href="http://www.mallofamerica.com/">The Mall of America</a>').addTo(map);

    L.marker([44.973229, -93.209828], {icon: beer}).bindPopup('Minnesota is known for their craft beer and Surly was one of the first to make it big. Their new tap room is a great place to see why Minnesotans are so crazy for the stuff.<br> <a href="http://surlybrewing.com/breweries-tap-room/tap-room/#directions">Surly Tap Room</a>').addTo(map);

    L.marker([44.978267, -93.255857], {icon: theatre}).bindPopup("The historic Guthrie Theatre will be showing the Music Man. Morgan's mom's favorite fact is that Minnesota has the most theatre seats per captia after New York.<br><a href='http://www.guthrietheater.org/plays_events/plays/_music_man'>Music Man</a>").addTo(map);

    L.marker([44.947852, -93.305984], {icon: harbor}).bindPopup("You can rent a paddle board (one of Kyle's mom's favorite activties) on Lake Calhoun. You will get a great view of the Minneapolis skyline.<br><a href='http://www.wheelfunrentals.com/Locations/Minneapolis'>Wheel Fun Rentals</a>").addTo(map);

    L.marker([44.903117, -93.561470], {icon: restaurant}).bindPopup("Grab a burger and beer at Maynard's on Lake Minnetonka. Boats drive up to grab dinner and it is a very popular summer spot.<br><a href='http://maynards-excelsior.com/'>Maynard's</a>").addTo(map);

    L.marker([44.941768, -93.618611], {icon: restaurant}).bindPopup('You must get the walleye sandwich while lakeside here at Lord Fletchers (people here are obbessed with this fish).<br><a href="http://www.lordfletchers.com/">Lord Fletchers</a>').addTo(map);

    L.marker([44.989623, -93.278485], {icon: restaurant}).bindPopup('The best Italian food in the Twin Cities (in our opinion) happens to be literally next door to our building. Defintily head to Bar La Grassa if you want an amazing dinner while in town.<br><a href="http://www.barlagrassa.com">BLG</a>').addTo(map);

};
