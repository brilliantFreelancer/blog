<template>
    <div>
        <el-header style="margin-left: 10px">
            <el-button class="navButton" style="color: black; margin-left: 15px" type="text">Subscribed</el-button>
            <el-button @click="getBlogData" class="navButton" id="index1" style="color: black; margin-left: 15px" type="text">All</el-button>
            <el-button @click="getBlogDataCategory('cinema')" class="navButton" id="index2" style="color: black; margin-left: 15px" type="text">Cinema</el-button>
            <el-button @click="getBlogDataCategory('Athlete')" class="navButton" id="index3" style="color: black; margin-left: 15px" type="text">Athlete</el-button>
            <el-button @click="getBlogDataCategory('Technology')" class="navButton" id="index4" style="color: black; margin-left: 15px" type="text">Technology</el-button>
            <el-button @click="getBlogDataCategory('More')" class="navButton" id="index5" style="color: black; margin-left: 15px" type="text">More</el-button>
        </el-header>
        <el-row style="margin: 0 68px 0 91px">
            <el-col :span='23'><span style="font-size: 13px">Date</span></el-col>
            <el-col :span='1'><span style="font-size: 13px">Votes</span></el-col>
        </el-row>
        <div class="block" style="flex-direction: column; justify-content: center; margin-top: -35px">
            <div style="margin: 47px; " v-for="(item,key) in blogsData" :key="key">
                <el-row style="border-left: 2px solid #000">
                    <div style="cursor: pointer" v-on:click="openBlog(item._id)">
                        <el-col :span="2">
                            <div style="text-align: center">
                            <span style="display: block; margin-top: 5px">
                                {{ item.blogDate | moment("D") }}
                            </span>
                                <span style="display: block; margin-top: 5px">
                                {{ item.blogDate | moment("MMMM") }}
                            </span>
                                <span style="display: block; margin-top: 5px">
                                {{ item.blogDate | moment("YYYY") }}
                            </span>
                            </div>
                        </el-col>
                        <el-col :span="20" style="margin-top: 8px">
                        <span style="display: block; margin-bottom: 5px; font-weight: bold">
                            {{ item.blogTitle }}
                        </span>
                            <span style="display: block; margin-bottom: 5px;">
                            {{ item.blogSummery }}
                        </span>
                            <span style="color: #747474; font-size: 13px">
                            {{ item.blogTags.firsTag }}
                        </span>
                            <el-divider direction="vertical"></el-divider>
                            <span style="color: #747474; font-size: 13px">
                            {{ item.blogTags.secondTag }}
                        </span>
                            <el-divider direction="vertical"></el-divider>
                            <span style="color: #747474; font-size: 13px">
                            {{ item.blogTags.thirdTag }}
                        </span>
                            <span style="color: #747474; font-size: 13px; margin-left: 30px">
                            {{ item.blogCommentsNumber }} comments
                        </span>
                            <span style="float: right; font-size: 13px">
                                <span style="color:#747474; margin-right: 3px">Posted by</span>
                                {{ item.blogAuthor.first_name }}
                            </span>
                            <span style="margin-right: 9px; float: right; font-size: 13px">
                            {{ item.blogSubscribed }}
                        </span>
                        </el-col>
                    </div>
                    <el-col :span="2">
                        <div style="display: block; text-align: center">
                            <span style="display: block;"><button @click="blogVoteUp"><i style="font-size: 25px !important;" class="el-icon-arrow-up"></i></button></span>
                            <span style="font-size: 20px; font-weight: bold">
                                {{ item.blogPost_Vote_Number }}
                            </span>
                            <span style="display: block;"><button @click="blogVoteDown"><i style="font-size: 25px !important;" class="el-icon-arrow-down"></i></button></span>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script slot="scope">
    export default {
        data () {
            return {
                blogsData: [],
                categoryName: '',
                time: {}
            }
        },
        methods:{
            getBlogData(){
                this.$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
                this.$http({
                    crossDomain: true,
                    method: 'get',
                    url: this.$store.state.api + '/listBlogs',
                    headers: {
                        'content-type': 'application/json',
                        'cache-control': 'no-cache',
                    },
                }).then((response) => {
                    console.log(response);
                    this.blogsData = response.data.data;
                });
            },
            getBlogDataCategory(name) {
                this.$http.get(this.$store.state.api + '/getBlogForCategory/' + name)
                    .then((response) => {
                        this.blogsData = response.data.data;
                    });
            },
            openBlog(id) {
                this.$router.push({name:'blog_info',params:{blogId:id}})
            },
            blogVoteUp() {
                this.$http({
                    crossDomain: true,
                    method: 'POST',
                    url: this.$store.state.api + '/upVote_Post',
                    headers: {
                        'content-type': 'application/json',
                        'cache-control': 'no-cache',
                    },
                    data: {
                        voteAuthor: ''
                    }
                }).then(() => {

                });
            },
            blogVoteDown () {
                this.$http({
                    crossDomain: true,
                    method: 'POST',
                    url: this.$store.state.api + '/downVote_Post',
                    headers: {
                        'content-type': 'application/json',
                        'cache-control': 'no-cache',
                    },
                    data: {
                        voteAuthor: ''
                    }
                }).then((response) => {
                    console.log(response);
                    this.blogsData = response.data.data;
                });
            }
        },
        mounted() {
            this.getBlogData()
        }
    };
</script>

<style>
    #index1:visited {
        font-weight: bold;
    }
    #index2:visited {
        font-weight: bold;
    }
    #index3:visited {
        font-weight: bold;
    }
    #index4:visited {
        font-weight: bold;
    }
    #index5:visited {
        font-weight: bold;
    }
</style>