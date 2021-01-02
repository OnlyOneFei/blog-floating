<template>
    <div>
        <Header></Header>
        <div class="f-blog">
            <h2>{{ blog.title }}</h2>
            <el-divider></el-divider>
            <el-link icon="el-icon-edit" v-if="ownBlog">
                <router-link :to="{name: 'BlogEdit', params: {blogId: blog.id}}">
                    编辑
                </router-link>
            </el-link>
            <el-divider></el-divider>
            <div class="content markdown-body" v-html="blog.content"></div>
        </div>
    </div>
</template>

<script>
    import Header from "../components/Header";

    export default {
        name: "BlogDetail",
        components: {Header},
        data() {
            return {
                blog: {
                    id: "",
                    title: "默认",
                    content: "内容",
                    description: ""
                },
                ownBlog: false
            }
        },
        created() {
            const blogId = this.$route.params.blogId;
            const _this = this;
            if (blogId) {
                this.$axios.get("/blog/" + blogId).then(res => {
                    const blog = res.data.data;
                    _this.blog.id = blog.id;
                    _this.blog.title = blog.title;
                    _this.blog.description = blog.description;
                    let MarkDownIt = require("markdown-it");
                    let md = new MarkDownIt();
                    _this.blog.content = md.render(blog.content);
                    if (blog.userId === _this.$store.getters.getUser.id) {
                        _this.ownBlog = true;
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .f-blog {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        width: 100%;
        min-height: 700px;
        padding: 20px 15px;
    }
</style>