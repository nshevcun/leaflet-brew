<template>
    <!-- **Vue Directives** are a way of dynamically manipulating the DOM and displaying data based on the state of the component. E.g. v-if or v-for -->
    <!-- Use elastic search Algolea if you need to implement a search function -->
    <div class="card  brew-list">
        <ul class="list-group list-group-flush">
            <!-- L-31. We want each icon to enlarge when mouse passes over the corresponding brewery in the list. Create mouseover and mouseleave event listeners for each list element: -->
            <li 
                @mouseover="mouseOver(index)"
                @mouseleave="mouseLeave(index)"
                v-for="brew, index in brews"
                :key="index"
                class="list-group-item"
            >
                <!-- A CHILD component cannot access data of a PARENT component. -->
                <!-- That's because a child component needs to be as decoupled as possible from its parents component, to be independent and re-usable. -->
                <!-- Data needs to be passed from the PARENT component to the CHILD component. -->
                <!-- We have a one-way flow of data. -->

                {{brew.name}}, {{brew.state}}

            </li>
                        
        </ul>
    </div>
</template>

<script>
export default {
    name: "BrewList",
    // A way to pass data down from Parent to Child is via the PROPS component.

    // C-1 - specify the PROP property to be grabbed from parent's data.
    props: {
        brews: Array
        // Now, this child component BrewList can receive the data array called "brews" in the form of a property, and we have to pass it in from the parent component. .
    },
    methods: { 
        mouseOver: function(index) { //L-32. This function takes in the array index/position of each element.
            this.$emit('mouse-over-brew', index); // This will send the index of the element with that event upwards from the child to the parent

        },

        mouseLeave: function(index) { // L-33. Same as above, but for leaving the element.
            this.$emit('mouse-left-brew', index);
        }
    },
}
</script>

<style lang="scss" scoped>
.brew-list {
        // Make the list a scrollbar:
        overflow-y: scroll;
        // Tell this list to take up 95% of the view in height:
        height: 95vh;

        // Tell each list item to change BG color to dark-grey on hover (this is a SCSS styling method):
        li {
            &:hover {
                background-color: darkgrey;
            }
        }
    }

</style>