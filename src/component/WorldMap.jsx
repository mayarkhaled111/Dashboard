import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { scaleLinear } from 'd3-scale';


export default function WorldMap() {
    const [geoData, setGeoData] = useState(null);

    // Example data for coloring countries
    const countryData = [
        { country: 'USA', value: 5000 },
        { country: 'Canada', value: 3000 },
        { country: 'Brazil', value: 2000 },
        { country: 'Germany', value: 4000 },
        { country: 'France', value: 3500 },
        { country: 'India', value: 1000 },
        { country: 'China', value: 6000 },
        { country: 'Australia', value: 4500 },
        { country: 'Russia', value: 2800 },
        { country: 'Japan', value: 3600 },
        { country: 'South Africa', value: 1500 },
        { country: 'Mexico', value: 2300 },
        { country: 'Italy', value: 2700 },
        { country: 'Spain', value: 2900 },
        { country: 'United Kingdom', value: 3800 },
        { country: 'Argentina', value: 1600 },
        { country: 'Netherlands', value: 3200 },
        { country: 'Turkey', value: 2100 },
        { country: 'Saudi Arabia', value: 3500 },
        { country: 'Sweden', value: 1900 },
        { country: 'Norway', value: 2200 },
    ];
  
    const colorScale = scaleLinear()
      .domain([0, 6000])
      .range(['#e0f3ff', '#0050b3']);

      const styleFeature = (feature) => {
        const countryDataObj = countryData.find(c => c.country === feature.properties.name);
        return {
          fillColor: countryDataObj ? colorScale(countryDataObj.value) : '#EAEAEC',
          weight: 1,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7,
        };
      };
    
      useEffect(() => {
        // Fetch the GeoJSON data
        fetch('https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson')
          .then(response => response.json())
          .then(data => setGeoData(data));
      }, []);
    
      return (
        
        <MapContainer center={[20, 0]} zoom={2} style={{ height: '500px', width: '100%' , margin:'10px'}}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {geoData && (
            <GeoJSON
              data={geoData}
              style={styleFeature}
              onEachFeature={(feature, layer) => {
                layer.bindPopup(`<strong>${feature.properties.name}</strong>`);
              }}
            />
          )}
        </MapContainer>

      );
};
