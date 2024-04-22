var map = L.map('map').setView([15.92089137885494, -61.637999775238015], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 12,
    minZoom: 9,
    //attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if(xmlhttp.readyState = 4){
        if(xmlhttp.status = 200){
            //fichier geojson chargé
            let geojson = JSON.parse(xmlhttp.responseText);
            let geojsonlayer = L.geoJSON(geojson, {
                style: {
                    "color": "blue",
                    "opacity": 1,
                    "fillColor": "blue",
                    "fillOpacity": 0.2
                },
                onEachFeature: function(feature, layer){
                    layer.bindPopup(feature.properties.nom);
                    layer.on('mouseover', function(e){
                        this.openPopup()
                    })

                }
            }).addTo(map)
            
        }else{
            console.log(xmlhttp.statusText);
        }
    }
}

xmlhttp.open("GET", "json/CommunesBasseTerre.geojson", true);
xmlhttp.send(null);

