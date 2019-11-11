<template>
    <div>
        <div v-for="(item, key) in authorsData" :key="key">
            <div v-if="item._id === AuthorId">
                <el-row>
                    <el-col :span="24" style="height: 270px">
                        <div class="backgroundImage">
                            <el-row style="margin: 12px">

                                <el-col :span="1">
                                    <span class="profileInfo"></span>
                                </el-col>
                                <el-col :span="13" style="margin-left: 147px" class="authorName">
                                    <span style="display: block; font-weight: bold; font-size: 20px">{{ item.first_name }} {{ item.last_name }}</span>
                                    <span style="display: block; font-size: 13px; margin: 5px 0">{{ item.location.lat }} {{ item.location.long }}</span>
                                    <span>
                                    <el-button size="small" type="info">
                                        <span style="color: #fff; font-weight: bold">
                                            Following
                                        </span>
                                    </el-button>
                                </span>
                                </el-col>

                                <el-col :span="5" class="authorProfileInfo">
                                    <el-row>
                                        <el-col :span="8" style="display: grid; border-right: 1px solid">
                                        <span style="font-weight: bold">
                                           24K
                                        </span>
                                            <span style="color: #747474; font-size: 15px; margin-top: 5px">
                                            Followers
                                        </span>
                                        </el-col>
                                        <el-col :span="8" style="display: grid; border-right: 1px solid">
                                        <span style="font-weight: bold">
                                           50
                                        </span>
                                            <span style="color: #747474; font-size: 15px; margin-top: 5px">
                                            Blogs
                                        </span>
                                        </el-col>
                                        <el-col :span="8" style="display: grid;">
                                        <span style="font-weight: bold">
                                            <span><button><i  style="font-size: 17px" class="el-icon-arrow-up"></i></button></span>
                                           24K
                                           <span><button><i style="font-size: 17px" class="el-icon-arrow-down"></i></button></span>
                                        </span>
                                            <span style="color: #747474; font-size: 15px; margin-top: 5px">
                                            Rate
                                        </span>
                                        </el-col>
                                    </el-row>
                                </el-col>

                            </el-row>
                        </div>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="7">
                        <div class="jobInfoCard">
                            <el-row style="margin: 10px">
                            <span style="font-weight: bold; font-size: 18px;">
                            {{ item.job }}
                        </span>
                            </el-row>
                            <el-row style="margin: 25px 12px">
                                <span style="font-size: 18px; color: #747474; display: block">Specialization</span>
                                <span style="font-size: 18px;">{{ item.specialization }}</span>
                            </el-row>
                            <el-row style="margin: 25px 12px">
                                <span style="font-size: 18px; color: #747474; display: block">About</span>
                                <span style="font-size: 18px;">{{ item.about }}</span>
                            </el-row>
                            <el-row style="margin: 25px 12px">
                                <span style="font-size: 18px; color: #747474; display: block">Contact</span>
                                <span style="font-size: 18px;">{{ item.email }}</span>
                            </el-row>
                            <el-row style="margin: 25px 12px">
                                <span style="font-size: 18px; color: #747474; display: block">Social Media</span>

                            </el-row>
                        </div>
                    </el-col>

                    <el-col :span="16" :offset="1">
                        <div class="blogs">
                            <el-row style="margin: 10px">
                                <span style="font-size: 17px;">
                                    Blogs ({{ authorsBlogData.length }})
                                </span>
                            </el-row>

                            <div style="margin: 47px;"  v-if="authorsBlogData.length === 0">
                                NO BLOGS !
                            </div>

                            <div style="margin: 47px; " v-for="(item,key) in authorsBlogData" :key="key" v-else>
                                <el-row style="border-left: 2px solid #000">
                                    <el-col :span="3">
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
                                </el-row>

                                    <el-col :span="19" style="margin-top: 8px">
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
                                        <span style="font-weight: bold">
                                            <span><button @click="blogVoteUp"><i style="font-size: 17px" class="el-icon-arrow-up"></i></button></span>
                                                <span style="color: #747474; margin: 0 3px">{{ item.blogPost_Vote_Number }}</span>
                                           <span><button @click="blogVoteDown"><i style="font-size: 17px" class="el-icon-arrow-down"></i></button></span>
                                        </span>
                                    </span>
                                        <span style="margin-right: 9px; float: right; font-size: 13px">
                                        {{ item.blogSubscribed }}
                                    </span>
                                    </el-col>
                            </div>
                        </div>
                    </el-col>

                    <el-col :span="7">
                        <div class="profileStatus">

                            <el-row style="margin: 25px 0 0 12px">
                                <el-col :span="21" style="margin-top: 5px">
                                <span style="font-size: 17px;">
                                    Reviews
                                </span>
                                </el-col>
                                <el-col :span="3">
                                <span>
                                    <el-tag style="color: #000; font-weight: bold" type="info">12</el-tag>
                                </span>
                                </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row style="margin: 25px 0 0 12px">
                                <el-col :span="21" style="margin-top: 5px">
                                <span style="font-size: 17px;">
                                    Following
                                </span>
                                </el-col>
                                <el-col :span="3">
                                <span>
                                    <el-tag style="color: #000; font-weight: bold" type="info">20</el-tag>
                                </span>
                                </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row style="margin: 25px 0 25px 12px">
                                <el-col :span="21" style="margin-top: 5px">
                                <span style="font-size: 17px;">
                                    Recent Comments
                                </span>
                                </el-col>
                                <el-col :span="3">
                                <span>
                                    <el-tag style="color: #000; font-weight: bold" type="info">18</el-tag>
                                </span>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {
                authorsData: [],
                authorsBlogData: [],
                AuthorId: ''
            }
        },
        methods: {
            getAuthorData() {
                this.$http({
                    crossDomain: true,
                    method: 'get',
                    url: this.$store.state.api + '/listAuthors',
                    headers: {
                        'content-type': 'application/json',
                        'cache-control': 'no-cache',
                    }
                }).then((response) => {
                    this.authorsData = response.data.data;
                    this.AuthorId = this.$route.params.bloggerId;
                    console.log(this.AuthorId);
                });
            },
            getAuthorBlogs() {
                this.$http.get(this.$store.state.api + '/getBlogForUser/' + this.$route.params.bloggerId)
                    .then((response) => {
                        console.log(response);
                        console.log(this.AuthorId);
                        this.authorsBlogData = response.data.data;
                    });
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
            this.getAuthorData();
            this.getAuthorBlogs()
        }
    }
</script>

<style>
    .backgroundImage {
        border: 1px solid #d7d7d7;
        border-radius: 10px;
        background-color: #f1f1f1;
    }

    .authorName {
        position: relative;
        margin-top: 83px;
    }

    .authorProfileInfo {
        margin-top: 110px;
        text-align: center;
    }

    .profileInfo {
        height: 110px;
        width: 110px;
        z-index: 2;
        margin-top: 116px;
        margin-bottom: -225px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
    }

    .jobInfoCard {
        padding: 10px;
        border: 1px solid #d7d7d7;
        border-radius: 10px;
    }

    .blogs {
        margin-bottom: 372px;
        padding: 10px;
        border: 1px solid #d7d7d7;
        border-radius: 10px;
    }
    .profileStatus {
        border: 1px solid #d7d7d7;
        border-radius: 10px;
    }
</style>