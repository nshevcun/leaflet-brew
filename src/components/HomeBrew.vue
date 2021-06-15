<template>
  <div class="hello">
    <!-- A-1. The {{msg}} is a placeholder for the value "message" in the HelloWorld component.-->
    <h1>Hello there! {{ msg }}</h1> 
  </div>
</template>

<script>
export default {
  // Information can be passed **down** FROM a PARENT component TO a CHILD component via PROPS.
  name: 'HomeBrew',
  // A-2. The HelloWorld component can receive a property "msg", and it will be a string
  props: {
    msg: String
  }
}
</script>

<!-- 2. Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
