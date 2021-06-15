<template>
    <div class="row map">
       <!-- <h2>Center is {{currentCenter}}, zoom is {{currentZoom}}</h2> This is for testing purposes -->
        <!-- L-7. Paste the map into your template display from here: https://jsfiddle.net/nshevcun/23zxpLue/ -->
        <!-- The original JS Fiddle: https://jsfiddle.net/Boumi/k04zpLx9/ -->
        <!-- L-8. Add the ref="myMap" line to the l-map!-->
        <l-map 
            @update:zoom="zoomUpdate"
            @update:center="centerUpdate"
            :zoom="zoom" 
            :center="center"> <!-- ref="myMap" <- This property is from L-9 and was in the l-map line-->
        <!-- L-18. In l-map, we want to track when the zoom changes to record the latitude and longitude displayed onto the screen. Do this by adding the two @update events to the l-map. They are referencing two functions, zoomUpdate and centerUpdate, that will be referenced below. --->
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <!-- L-15. <l-marker :lat-lng="marker"></l-marker> <- This is what the <l-marker> looked like before. Now, we are going to turn it into a loop function to loop through our bewery data.-->
            <l-marker 
                v-for="brew, index in brews"
                :key="index"
                :lat-lng="latLng(brew.latitude, brew.longitude)" 
                
                ><!-- L-16. You can also place information for each brew instance in the opening loop of the HTML marker. This is what the lat-lng function looked like in L-15: :lat-lng="marker"-->
                <l-icon
                    :icon-size="brew.iconSize"  
                    :icon-url="icon"
                    >
                </l-icon> <!-- L-30. Create an icon component like so -->
                <!-- L-38. Instead of hard-coding icon size, use the new attribute you have attached to the data in the previous function. -->
            </l-marker>
        </l-map>
    </div>
</template>

<script>
// L-4. Import the necessary components into the component where you're planning to use the map. (start in main.js)
// You will need both the leaflet and vue2-leaflet lines for this. Make sure leaflet is imported separately.
import L from 'leaflet';
import {LMap, LTileLayer, LMarker, LIcon} from 'vue2-leaflet'; // L-25. Import LIcon
import beer from '../assets/beer.png'; // L-27.

export default {
    name: "BrewMap",
    // L-12. Create a property into which map data will be passed from the parents component Brew.
    props: {
        brews: Array
    },
    components: { // L-5. Indicate in the export which components you are using.
        LMap,
        LTileLayer,
        LMarker,
        LIcon // L-26. Mention LIcon
    },

    methods: { // L-14. Our returned data function must take in the latitude and longitude in the proper Leaflet format. The L library exposes the function that will format the latitude and longitude for us.

    //The method will helps get access to the Leaflet L.latLng function on our template when we iterate through the breweries, in order to format the latitude and longitude in the proper way.

    //When you want to access a function from within a <template>, you need to set up a "method" in <script>.
        latLng: function(lat, lng) {
            return L.latLng(lat, lng);
        },
        // This is just a wrapper around the latLng function in the "data". This method is exposing it to the <template>.

        centerUpdate: function(center) {
            this.currentCenter = center; // L-21. Defining method for updating the center
        },

        zoomUpdate: function(zoom) {
            this.currentZoom = zoom; // L-22. Defining method for updating the zoom.
        }
    },

    // L-6. Specify which values are going to be returned for the map.
    // These are the map attributes that we need.
    data() {
        return {
            zoom: 6, // L-24. Update this with currentZoom values
            center: L.latLng(40.061201, -82.976303), // L-23. Update this with currentCenter values
            currentCenter: L.latLng(40.061201, -82.976303), // L-19. Define currentCenter property as the default center at first.
            currentZoom: 6, // L-20. Define current zoom as whatever zoom you like.
            // L-11. I changed the map tiling to ThuderForest map tiling. You'll need to create an account with them to use it.
            url:'https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=e6af7839f94a43428e202e1290e0a2be',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: L.latLng(47.413220, -1.219482),
            icon: beer, // L-28. Link to your picture by adding the icon property.
            iconSize: [50,50] //L-29. Specify icon size in an array.
        }
    },

    // L-9. Post this "mounted" function below data to load the map to access Leaflet.
    // ! This step isn't needed for this particular tutorial, but this function is used to access the leaflet API.
    /*mounted() {
      this.$nextTick(() => {
        this.$refs.myMap.mapObject.ANY_LEAFLET_MAP_METHOD();
      });
    },*/
}
</script>

<style scoped>
/* L-10. This style will set up the height of the map. Add this style to the DIV wrapping the map. */
    .map {
       height: 95vh; 
    }
</style>