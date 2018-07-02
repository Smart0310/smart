<template>
    <div>
        <div>this is template body</div>
        <div>{{value}}</div>
        <Button type="primary" @click="click">点击</Button>
    </div>
</template>

<script>
    import mockdata from "../../util/mock";
    export default{
        data(){
            return {
                msg: 'hello vue',
                value:'',
            }
        },
        components: {},
        methods:{
            click(){
                this.value = mockdata.data
            }
        }
    }
</script>

<style>

</style>
