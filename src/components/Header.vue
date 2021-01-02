<template>
    <div class="f-content">
        <h3>欢迎来到 柚子攻城狮 的博客</h3>
        <div class="block">
            <el-avatar :size="50" :src="user.avatar"></el-avatar>
            <!--<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>-->
            <div>{{user.username}}</div>
        </div>
        <div class="f-action">
            <span> <el-link href="/blogs">主页</el-link></span>
            <el-divider direction="vertical"></el-divider>
            <span><el-link type="primary" @click="addBlog">发表博客</el-link></span>
            <el-divider direction="vertical"></el-divider>
            <span v-show="!hasLogin"><el-link type="success" @click="logout">登录</el-link></span>
            <span v-show="hasLogin"><el-link type="danger" @click="logout">退出</el-link></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                user: {
                    username: "请先登录",
                    avatar: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                },
                hasLogin: false
            }
        },
        methods: {
            logout() {
                const _this = this;
                if (this.hasLogin) {
                    _this.$axios.get("/logout", {
                        headers: {
                            "Authorization": localStorage.getItem("token")
                        }
                    }).then(res => {
                    });
                }
                _this.$store.commit("REMOVE_INFO");
                _this.$router.push("/login");
            },
            addBlog() {
                console.log(this.$router.currentRoute.fullPath);
                if (this.$router.currentRoute.fullPath !== "/blog/add") {
                    this.$router.push("/blog/add");
                }
            }
        },
        created() {
            if (this.$store.getters.getUser.username) {
                this.user.username = this.$store.getters.getUser.username;
                this.user.avatar = this.$store.getters.getUser.avatar;
                this.hasLogin = true;
            }
        }
    }
</script>

<style scoped>
    .f-content {
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
    }

    .f-action {
        margin: 10px 0;
    }
</style>