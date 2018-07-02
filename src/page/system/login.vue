<template>
    <div class="system">
        <!--<head-top v-bind="headTopProp"></head-top>-->
        <div>
            <transition name="form-fade" mode="in-out">
                <section class="system_pancel" v-show="showLogin">
                    <Form ref="formInline" :model="formInline" :rules="ruleInline">
                        <div class="tip">
                            <p>帐号登录</p>
                        </div>
                        <FormItem prop="username">
                            <Input type="text" v-model="formInline.username" placeholder="username">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="formInline.password" placeholder="password">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formInline')" long>sign</Button>
                        </FormItem>
                    </Form>
                </section>
            </transition>
        </div>
    </div>
</template>

<script>
    import headTop from '../../components/headTop'
    export default{
        data(){
            return {
                msg: 'hello vue',
                formInline:{
                    username:'',
                    password:'',
                },
                ruleInline:{
                    username:[
                        { required: true, message: '请输入用户名', trigger: 'change' }
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'change'}
                    ]
                },
                showLogin:false,
                headTopProp:{
                    isLayoutLogo:true,
                    isLayoutNav:false,
                }
            }
        },
        components: {
            headTop
        },
        mounted(){
            this.showLogin = true;
        },
        methods:{
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                        this.$router.push({path:'/manage'})
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
        }
    }
</script>

<style scoped>
    @import '../../style/common.css';
    .system{
        background-image: url('../../assets/star-bg.svg');
        -webkit-background-size:cover;
        background-size:cover;
        background-color: #363636;
    }
    .system_pancel{
        width: 350px;
        border:1px solid #ccc;
        border-radius:5px;
        position:absolute;
        left:50%;
        margin-left:-175px;
        top:50%;
        margin-top:-150px;
        padding:5px;
    }
    .form-fade-enter-active, .form-fade-leave-active {
        transition: all 1s;
    }
    .form-fade-enter, .form-fade-leave-active {
        transform: translate3d(0, -50px, 0);
        opacity: 0;
    }
    .tip{
        color:#fff;
        font-size:16px;
    }
</style>
