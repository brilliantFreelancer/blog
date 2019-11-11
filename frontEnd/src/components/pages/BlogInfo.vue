<template>
    <div>
        <div v-for="(item, key) in blogsData" :key="key">
            <div v-if="blogId === item._id">
                <el-row>
                    <h2 style="text-align: center; font-weight: bold">{{ item.blogTitle }}2</h2>
                </el-row>
                <el-row>
                    <div style="border-bottom: 1.5px solid #c6c6c6">
                        <span style="font-size: 14px; color: #747474;">
                            {{ item.blogDate | moment("D MMMM  YYYY") }}
                        </span>
                            <span style="float: right">
                            <span style="font-size: 14px; color: #2b2b2b;">
                            {{ item.blogSubscribed }}
                            </span>
                            <span style="font-size: 14px; color: #747474;">
                                Posted By
                            </span>
                            <span style="font-size: 14px; color: #2b2b2b;">
                                {{ item.blogAuthor.first_name }}
                            </span>
                        </span>
                    </div>
                </el-row>
                <div>
                    <img src="https://www.sylvansport.com/wp/wp-content/uploads/2018/11/image-placeholder-1200x800.jpg" style="width: 92%; height: 25vw; margin: 50px; border-radius: 20px" alt="Profile pic">
                </div>
                <el-row>
                    <div style="line-height: 1.5em">
                        {{ item.blogContent }}
                    </div>
                </el-row>
                <el-row>
                    <div style="margin-top: 50px; font-weight: bold">
                        <span>Comments({{ item.blogCommentsNumber }})</span>
                        <span style="float: right">
                            <el-button type="text" style="padding: 0 !important;"><span style="font-weight: bold; color: black; font-size: 16px">Share</span></el-button>
                            <el-button type="text" style="padding: 0 !important;"><span style="margin-left: 15px; font-weight: bold; color: black; font-size: 16px">Report</span></el-button>
                        </span>
                    </div>
                </el-row>
                <el-row>
                    <div style="margin-top: 50px; font-weight: bold">
                        <span>Share your thoughts !</span>
                        <div style="margin: 20px 0">
                            <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 2, maxRows: 4}"
                                    placeholder="Please input"
                                    v-model="textarea">
                            </el-input>
                        </div>
                        <div>
                            <el-button style="float: right; background-color: #000; color: #fff;">Comment</el-button>
                        </div>
                    </div>
                </el-row>
                <el-row>
                    <div style="border-bottom: 1.5px solid #c6c6c6">
                        <span style="font-size: 14px; color: #747474;">
                            Sort by
                        </span>
                        <el-dropdown>
                            <span class="el-dropdown-link">TOP RATED<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>Action 1</el-dropdown-item>
                                <el-dropdown-item>Action 2</el-dropdown-item>
                                <el-dropdown-item>Action 3</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-row>
                <el-row style="border-left: 2px solid #959595; margin: 25px 0">
                    <el-col :span="2">
                        <img src="https://www.sylvansport.com/wp/wp-content/uploads/2018/11/image-placeholder-1200x800.jpg" style="width: 79%; height: 5vw; margin: 2px 11px" alt="Profile pic">
                    </el-col>
                    <el-col :span="20" style="margin-top: 8px">
                        <div v-for="(i, key) in item.blogComment" :key="key">
                            <span style="display: block; margin-bottom: 5px; font-weight: bold">
                                {{ item.blogTitle }} <span style="font-size: 11px; color: #757575">.{{ i.date | moment("D MMMM YYYY") }}</span>
                            </span>

                                <span style="display: block; margin-bottom: 5px;">
                                {{ i.content }}
                            </span>
                        </div>
                        <span>
                            <el-button type="text" style="color: #747474; padding: 0 !important;">Reply</el-button>
                        </span>
                        <span style="color: #747474; margin-left: 7px">
                            <el-button type="text" style="color: #747474; padding: 0 !important;">Report</el-button>
                        </span>
                        <span style="color: #747474; margin-left: 7px">
                            <el-button type="text" style="color: #747474; padding: 0 !important;">Share</el-button>
                        </span>
                        <span style="color: #747474; margin-left: 7px">
                            <el-button type="text" style="color: #747474; padding: 0 !important;">Save</el-button>
                        </span>
                    </el-col>
                    <el-col :span="2">
                        <span style="display: block; text-align: center">
                            <span style="display: block"><button @click="commentVoteUp"><i class="el-icon-arrow-up"></i></button></span>
                            <span style="font-size: 20px; font-weight: bold">
                                {{ item.blogPost_Vote_Number }}
                            </span>
                            <span style="display: block"><button @click="commentVoteDown"><i class="el-icon-arrow-down"></i></button></span>
                        </span>
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
                blogId: '',
                textarea: ''
            }
        },
        methods: {
            getBlogInfoData(){
                this.blogId = this.$route.params.blogId;
                this.$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
                this.$http({
                    crossDomain: true,
                    method: 'get',
                    url: this.$store.state.api + '/getOneBlogForUser/' +this.blogId,
                    headers: {
                        'content-type': 'application/json',
                        'cache-control': 'no-cache',
                    }
                }).then((response) => {
                    console.log(this.blogsData);
                    this.blogsData = response.data;
                });
            },
            commentVoteUp() {
                this.$http({
                    crossDomain: true,
                    method: 'POST',
                    url: this.$store.state.api + '/upVote_comment',
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
            commentVoteDown() {
                this.$http({
                    crossDomain: true,
                    method: 'POST',
                    url: this.$store.state.api + '/downVote_comment',
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
        },
        mounted() {
            this.getBlogInfoData()
        }
    };
</script>

<style>
    .el-dropdown-link {
        cursor: pointer;
        color: #000;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>