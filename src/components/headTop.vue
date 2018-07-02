<template>
    <div>
        <Header>
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="layout-logo" v-show="isLayoutLogo">
                    <span style="color:#fff;">管理系统</span>
                </div>
                <div class="layout-nav" v-show="isLayoutNav">
                    <MenuItem name="1">
                        <Icon type="ios-navigate"></Icon>
                        首页
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-keypad"></Icon>
                        我的
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>
                        关于
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="ios-paper"></Icon>
                        联系方式
                    </MenuItem>
                </div>
            </Menu>
        </Header>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {},
        props:['isLayoutLogo','isLayoutNav']
    }
</script>

<style scoped>
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
        line-height: 30px;
        text-align: center;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
</style>
