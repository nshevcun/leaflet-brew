<template>
    <div class="container">
       <div class="row">
           <div class="col-12">
               <h1 class="text-center">Breweries List</h1>
           </div>

            <div class="row">
                <div class="col-6">
                    <!-- This v-binds the data array ("brews") to the child's prop (:brews) -->
                    <!-- L-34. Add the emit listeners to BrewList -->
                    <BrewList 
                        @mouse-over-brew="mouseOverBrew"
                        @mouse-left-brew="mouseLeftBrew"
                        :brews="brews" />
                        
                </div>

                <div class="col-6">
                    <!-- L-13. Bind the data array ("brews") to the Map (child) component's prop (:brews) -->
                    <BrewMap :brews="brews" />
                </div>
            </div>
       </div>
    </div>
</template>

<script>
// https://api.openbrewerydb.org/breweries
import axios from 'axios';
import BrewList from './BrewList.vue';
import BrewMap from './BrewMap.vue';

export default {
    name: 'Brew',
    
    components: {
        BrewList,
        BrewMap
    },

    // Data items can be accessed within our component in the same way as props.
    data() {
        return {
            // This array of brews will be populated from the API link above
            brews: [],
            normalIcon: [50,50], // L-36. Define sizes for norm & large icons
            largeIcon: [80,80]
        }  
    },

    // Vue has a number of Lifecycle Components that tell the app what event to listen for to perform a certain action.
    mounted() {
        // This GET function returns an UNresolved promise
        axios.get('https://api.openbrewerydb.org/breweries?by_state=ohio')
            .then((res) => { // This "then" returns the data in the promise ("r")
                this.brews = res.data.filter(res => res.latitude != null)
                .map(res => { // L-37. Map (iterate) through the breweries, and add an iconSize attribute to each record.
                    res.iconSize = this.normalIcon;
                    return res;
                }); // Fetching breweries and pushing them into the array
                // this.brews = res.data; <- L-17. This is what this step looked like in prior step. We will change this function to filter the breweries. I changed the URL to Ohio and am filtering by the presence of latitude, as otherwise, no markers display
        })
    },

    methods: {
        mouseOverBrew: function(index) { // L-35. Create the methods for prior step. They grab the index emitted by the child BrewList.
            this.brews[index].iconSize = this.largeIcon; // L-39. When the mouse is over the brewery in the list, its icon will inherit the large icon size attribute.
        },

        mouseLeftBrew: function(index) {
            this.brews[index].iconSize = this.normalIcon; //L-40. When mouse leaves brewery in list, its icon size goes back to normal.
        }
    },

}
</script>

<style lang="scss" scoped>
// Each component's styles should go into that component's file
</style>