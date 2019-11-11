import Login from './components/Login'
import Register from './components/Register.vue'
import Home from './views/Home.vue'
import Blogs from './components/pages/Blogs.vue'
import BlogInfo from './components/pages/BlogInfo.vue'
import Bloggers from './components/pages/Bloggers.vue'
import BloggersInfo from './components/pages/BloggersInfo.vue'
// import CreateBlog from './components/CreateBlog.vue'
// import YourBlog from './components/YourBlog.vue'
const view = {
  template: `<router-view></router-view>`
};
export const routes = [
  { path: '', component: Login },
  { path: '/register', component: Register },
  { path: '/home', component: Home,
    children: [
      { path:'blogs', component: view,
        children: [
        { path:'', component: Blogs, name: "blogs" },
        { path:'info/:blogId', component: BlogInfo, name: "blog_info" }
      ]},
      { path:'bloggers',component :view,
      children: [
        { path:'', component: Bloggers, name: "bloggers" },
        { path:'info/:bloggerId', component: BloggersInfo, name: "blogger_info" }
      ]},
      ]
  },
  { path: '/redirect-me', redirect: '' },
];

