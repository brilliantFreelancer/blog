<template>
    <div>
        <el-header>
            <p style="font-size: 18px; float: left; margin: 9px">BitNorm Blog</p><router-link to="/">
            <el-button type="text" class="navButton" id="index1" style="color: black; margin-left: 15px">Featured</el-button></router-link>
            <router-link :to="{name:'blogs'}"><el-button type="text" class="navButton" id="index2" style="color: #000; margin-left: 15px">Blogs</el-button></router-link>
            <router-link :to="{name:'bloggers'}"><el-button type="text" class="navButton" id="index3" style="color: #000; margin-left: 15px">Bloggers</el-button></router-link>
            <router-link to="/"><el-button type="text" class="navButton" id="index4" style="color: #000; margin-left: 15px">Search</el-button></router-link>
            <router-link to="/"><el-button type="text" class="navButton" id="index5" style="color: #000; margin-left: 15px; float: right;">Create a Blog</el-button></router-link>
            <router-link to="/"><el-button type="text" class="navButton" id="index6" style="color: #000; margin-left: 15px; float: right; ">Your Blog</el-button></router-link>
        </el-header>
    </div>
</template>

<script>
    export default {
    };
</script>

<style>
    .navButton {
        margin-left: 28px;

    }
    #index1:focus {
        font-weight: bold;
    }
    #index2:focus {
        font-weight: bold;
    }
    #index3:focus {
        font-weight: bold;
    }
    #index4:focus {
        font-weight: bold;
    }
    #index5:focus {
        font-weight: bold;
    }
</style>