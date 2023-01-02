
import Story from '../components/Story.js'
import Comment from '../components/Comment.js'
import view from '../utils/view.js'
import baseUrl from '../utils/baseUrl.js'

export default async function Item() {
    // create muitable variables outside try and catch{} to overcome variable block scoping 
    let story = null
    let hasError = false;
    let hasComments = false

    try{
        story = await getStory()   
        hasComments = story.comments.length > 0
    } catch(error){
        console.error(error)
        hasError = true
    }

    if (hasError){
          view.innerHTML = `<div class="error">Error fetching story</div>`
    }
    
    view.innerHTML = `
    <div>
        ${Story(story)}
    </div>

    <hr/>
    
    <div>
    ${hasComments ? story.comments.map(comment => Comment(comment)).join(''): "no comments"}
    </div>
    
    `
}



async function getStory(){
    // by this point, we're already on a separate page through a hyperlink, with the endpoint of clicked item's Id
    // we can get info about the route we're on using windows.location property

    const storyId = window.location.hash.split('?id=')[1]
    const response = await fetch(`${baseUrl}/item/${storyId}`)
    const story = await response.json()
    return story 

}