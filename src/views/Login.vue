<template>
    <div>   
        <el-container>
            <el-header>
                <img class="f_logo" src="../assets/logo_main.png" alt="">
            </el-header>
            <el-main>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="login-ruleForm">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="ruleForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="ruleForm.password" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
         
    </div>
</template>
<style>
    .el-header, .el-footer {
        /*background-color: #B3C0D1;*/
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        /*background-color: #E9EEF3;*/
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    .f_logo {
        height: 100%;
    }

    .login-ruleForm {
        max-width: 500px;
        margin: 0 auto;
    }
</style>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    username: 'admin',
                    password: 'admin'
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 4, max: 16, message: '长度在 4 到 16 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 4, max: 16, message: '长度在 4 到 16 个字符', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const _this = this;
                        this.$axios.post("/login", this.ruleForm).then(res => {
                            const jwt = res.headers["authorization"];
                            const userInfo = res.data.data;
                            // 数据共享至store中
                            _this.$store.commit("SET_TOKEN", jwt);
                            _this.$store.commit("SET_USER_INFO", userInfo);
                            this.$router.push("./blogs")
                        })
                    } else {

                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>