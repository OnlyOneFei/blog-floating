<template>
    <div>
        <!--外层容器-->
        <el-container>
            <!--头部-->
            <el-header>
                <el-row :gutter="10">
                    <el-col :xs="2" :sm="4" :md="4" :lg="4" :xl="4">
                        <div class="grid-content bg-purple">
                            头像
                        </div>
                    </el-col>
                    <el-col :xs="6" :sm="8" :md="8" :lg="8" :xl="10">
                        <div class="grid-content bg-purple-light">
                            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                                <el-menu-item index="1">首页</el-menu-item>
                                <el-submenu index="2">
                                    <template slot="title">分类</template>
                                    <el-menu-item index="2-1">选项1</el-menu-item>
                                    <el-menu-item index="2-2">选项2</el-menu-item>
                                    <el-menu-item index="2-3">选项3</el-menu-item>
                                    <el-submenu index="2-4">
                                        <template slot="title">选项4</template>
                                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                                    </el-submenu>
                                </el-submenu>
                                <el-menu-item index="3">列表</el-menu-item>
                                <el-menu-item index="4">
                                    关于我
                                </el-menu-item>
                            </el-menu>
                        </div>
                    </el-col>
                    <el-col :xs="2" :sm="4" :md="4" :lg="4" :xl="4">
                        <div class="grid-content bg-purple">
                            间隔
                        </div>
                    </el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="8" :xl="4">
                        <div class="grid-content bg-purple-light">
                            <el-input placeholder="请输入内容" v-model="input" clearable suffix-icon="el-icon-search"></el-input>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <!--主要内容区-->
            <el-main>

                主要内容区

            </el-main>
            <!--底部-->
            <el-footer>

                底部
            </el-footer>

        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        text-align: center;
        /*默认60px*/
        line-height: 60px;
    }

</style>