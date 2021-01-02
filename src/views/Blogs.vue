<template>
    <div>
        <!--引入公共头部-->
        <Header></Header>
        <el-timeline>
            <el-timeline-item :timestamp="blog.insertTime" placement="top" v-for="blog in blogs">
                <el-card>
                    <router-link :to="{name: 'BlogDetail', params:{blogId:blog.id}}">
                        <h4>{{blog.title}}</h4>
                    </router-link>
                    <p>{{blog.description}}</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
        <el-pagination class="f-page"
                       background
                       layout="prev, pager, next"
                       :current-page="pageNo"
                       :page-size="pageSize"
                       :total="total"
                       @current-change=page
        >
        </el-pagination>
    </div>
</template>

<script>
    import Header from "../components/Header"
    // 声明
    export default {
        name: "Blogs.vue",
        components: {Header},
        data() {
            return {
                blogs: {},
                pageNo: 1,
                total: 0,
                pageSize: 5
            }
        },
        methods: {
            page(pageNo) {
                const _this = this;
                // 请求分页接口，并将查询结果进行赋值。
                _this.$axios.get("/blog/blogs?pageNo=" + pageNo).then(res => {
                    _this.blogs = res.data.data.records;
                    _this.total = res.data.data.total;
                    _this.pageSize = res.data.data.size;
                    _this.pageNo = res.data.data.current;
                })
            }
        },
        // 页面渲染时加载的函数
        created() {
            this.page(1);
        }
    }
</script>

<style scoped>
    /*css 样式设置*/
    .f-page {
        margin: 0 auto;
        text-align: center;
    }
</style>