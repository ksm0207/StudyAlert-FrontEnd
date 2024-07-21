<template>
    <div>
        <p>Value : {{count}} </p>
        <button @click="increment()">Increment Value ! </button> | 
        <button @click="decrement()">Minus Value !</button> | 
        <button @click="initialize()">initialize</button>

    </div>
</template>

<script setup>

import {ref} from 'vue'

const count = ref(0)

const increment = () =>{
    count.value ++;
}

const decrement = () => {
    count.value --;
}

const initialize = () => {
    count.value = 0
}


</script>