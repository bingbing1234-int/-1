import HomePage from "./pages/HomePage.vue"
import LoginPage from "./pages/LoginPage.vue"
import ProfilePage from "./pages/ProfilePage.vue"
import ProfileEdit from "./pages/ProfileEdit.vue"
import SeachResult from "./pages/SearchResult.vue"
import {createRouter,createWebHistory} from "vue-router"


const routes =[
    {
        path:'/',
        name:'home',
        component:HomePage
    },
    {
        path:"/search_result",
        name:'search_result',
        component:SeachResult
    },
    {
        path:"/profile",
        name:'ProfilePage',
        component:ProfilePage
    },
    {
        path:"/profile/edit",
        name:'profiledit',
        component:ProfileEdit
    },
    {
        path:"/login",
        name:'login',
        component:LoginPage
    },

]

const router = createRouter({
    routes,
    history:createWebHistory()
})
export {router};
