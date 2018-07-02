<template>
    <div class="system">

    </div>
</template>

<script>
    import headTop from '../components/headTop'
    export default{
        data(){
            return {
                msg: 'hello vue',
                headTopProp:{
                  isLayoutLogo:true,
                  isLayoutNav:true,
                }
            }
        },
        components: {
            headTop
        }
    }
</script>

<style scoped>
    @import '../style/common.css';
    .system{
        background-image: url('../assets/star-bg.svg');
        -webkit-background-size:cover;
        background-size:cover;
        /*background-color: #363636;*/
    }
</style>
