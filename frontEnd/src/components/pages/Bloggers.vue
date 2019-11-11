<template>
    <div>
        <h2 style="margin-bottom: 15px">Bloggers</h2>
        <el-row style="border-top: 2px solid">
            <div style="margin-top: 15px">
                <el-button @click="getAuthorData" class="navButton" id="index1" style="color: black;" type="text">All</el-button>
                <el-button @click="getAuthorData" class="navButton" id="index2" style="color: black;" type="text">Top Rated</el-button>
                <el-button @click="getAuthorData" class="navButton" id="index3" style="color: black;" type="text">Rising</el-button>
                <el-button @click="getAuthorData" class="navButton" id="index4" style="color: black;" type="text">Specialization</el-button>
                <el-button @click="getAuthorData" class="navButton" id="index5" style="color: black;" type="text">Locality</el-button>
                <el-button @click="getAuthorData" class="navButton" id="index6" style="color: black;" type="text">More</el-button>
            </div>
        </el-row>
        <el-row>
            <div v-for="(item, key) in authorsData" :key="key">
                <el-col :span="5" :offset="2" style="margin-top: 45px">
                    <div class="boxCard">
                        <el-row style="margin: 12px">
                            <el-col :span="7">
                                <span class="profileBlogger"></span>
                            </el-col>
                            <el-col :span="14">
                                <span style="display: block; font-weight: bold; font-size: 20px">{{ item.first_name }} {{ item.last_name }}</span>
                                <span style="display: block; color: #747474; font-size: 13px">{{ item.job }}</span>
                                <span style="display: block; font-size: 13px">{{ item.location.lat }} {{ item.location.long }}</span>
                            </el-col>
                            <el-col :span="2">
                        <span style="display: block; text-align: center">
                            <span style="display: block;"><button @click="authorVoteUp"><i style="font-size: 20px !important;" class="el-icon-arrow-up"></i></button></span>
                            <span style="font-size: 15px">
                                {{ 1 }}
                            </span>
                            <span style="display: block;"><button @click="authorVoteDown"><i style="font-size: 20px !important;" class="el-icon-arrow-down"></i></button></span>
                        </span>
                            </el-col>
                        </el-row>
                        <el-divider></el-divider>
                        <el-row style="margin: -17px 0px -17px 18px;">
                            <span style="font-size: 14px">Specialization :</span>
                            <span style="margin-left: 8px; font-size: 14px; color: #747474">{{ item.specialization }}</span>
                        </el-row>
                        <el-divider></el-divider>
                        <el-row style="margin: 0 0 14px 18px">
                            <el-col :span="22">
                                <span class="aboutTextStyle">
                                    {{ item.about }}
                                </span>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12" :offset="8" style="margin-bottom: 6px">
                                    <el-button @click="authorsInfo(item._id)"
                                               type="info" round size="small" class="moreButton">
                                        <span style="color: #000; font-weight: bold">
                                            Learn More
                                        </span>
                                    </el-button>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </div>
        </el-row>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                authorsData: []
            }
        },
        methods: {
            getAuthorData () {
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
                });
            },
            authorsInfo (id) {
                this.$router.push({name:'blogger_info',params:{bloggerId:id}})
            },
            authorVoteUp() {
                this.$http({
                    crossDomain: true,
                    method: 'POST',
                    url: this.$store.state.api + '/upVote_author',
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
            authorVoteDown() {
                this.$http({
                    crossDomain: true,
                    method: 'POST',
                    url: this.$store.state.api + '/downVote_author',
                    headers: {
                        'content-type': 'application/json',
                        'cache-control': 'no-cache',
                    },
                    data: {
                        voteAuthor: ''
                    }
                }).then(() => {

                });
            }
        },
        mounted() {
            this.getAuthorData()
        }
    }
</script>

<style>
    .navButton {
        color: black;
        font-size: 15px;
    }
    .boxCard {
        border: 1px solid #d7d7d7;
        border-radius: 21px;
    }
    .profileBlogger {
        height: 60px;
        width: 60px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
    }
    .moreButton {
        background-color: #7d7d7d;
    }
    .aboutTextStyle {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        max-height: 85px;
        line-height: 20px;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
</style>