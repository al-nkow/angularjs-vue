<template>
    <div class="wrap">VUE COMPONENT: {{firstName}} {{lastName}}!</div>
</template>

<script>
import { helloService } from './services/hello.service'

export default {
    props: {
        firstName: String,
        lastName: String
    },
    mounted () {
        helloService.sayHello();
    }
}
</script>

<style>
    .wrap {
        border: 2px solid green;
        padding: 10px;
        width: 250px;
        margin: 20px auto;
    }
</style>