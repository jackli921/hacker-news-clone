import Stories from './pages/stories.js'
import Item from './pages/item.js'
import Favorites from './pages/favorites.js';

const router = new Navigo(null, true, '#');
// null means no data to display in the route
// true means  start with the root url in the Navigo's constructor
// '#' indicates the root path for hosting the app 

export default class RouterHandler {
    // handles available routes as indicated in html
    constructor(){
        this.createRoutes()
    }

    createRoutes(){
        const routes = [
            { path:'/', page: Stories },  //the path value correspondes to the hyperlink in the index.html file 
            { path:'/new', page: Stories }, //the page value is the function which renders the html on that page in a different js file
            { path:'/ask', page: Stories },
            { path:'/show', page: Stories },
            { path:'/item', page: Item },
            { path: '/favorites', page: Favorites}
        ]
        routes.forEach(({path, page})=>{
            router.on(path, ()=>{
                page(path)
            }).resolve() //must add () to route.page because it's a function
        })
    }
}
