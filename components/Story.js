

export default function Story(story){
  
    const { index, url, domain, id, title, points, user, time_ago, comments_count} = story
    return `
        <div class="story">

            <div>
                <span class="gray">${index || ""}</span>
                <span class="upvote>▲</span>
                <a href="${url}">${title}</a>
                <span>${domain}</span>
            </div>

            <div>
                <div class="gray">
                    ${points} points by ${user} ${time_ago}
                    |
                    <a href='#/item?id=${id}'>${comments_count} comments</a>
                    |
                    <span class="favorite" data-story='${JSON.stringify(story)}'>
                    <i class="fa-solid fa-heart heart"></i></i>
                       ${story.isFavorite ? "Remove From Favorites" : " Add To Favorites"}
                    </span>
                </div>
            </div>
        </div>
    `
}