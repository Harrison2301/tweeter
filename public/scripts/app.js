
// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {
 
  
    //renders tweets to page 
    function loadTweets(){
        $.ajax({method:"GET",url:"/tweets"}).done(function(result){
            renderTweets(result)
        })
    }
    loadTweets()

 //submit button + charactor validation
    $("form").on("submit", function(event){
      function getTweets(){
        return $.ajax({
          method:"POST",
          url: "/tweets",
          data: {
              text: content
          }
      })
    }
      function fetchTweet(){
        loadTweets()
      }
      
        event.preventDefault();
        const content = $(event.target).find("textarea").val();
        if(content === ""){
         $("#error-message").text("Form is empty!") 
         return;
         
        } else if(content.length >= 140){
          $("#error-message").text("Form must be under 140 charactors!");
          return;
        } else {
          getTweets().done(fetchTweet)
          
        
    
  
  
        }  
})
  
renderTweets(data);
})
const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];


function createTweetElement(Object){
let profileImgLink = Object.user.avatars.small;
let nameHeader = Object.user.name;
let nameHandle = Object.user.handle;
let messageContent = Object.content.text;
let createdDate = new Date(Object.created_at);
let article =$("<article>")
let header = $("<header>")
let img = $("<img>").attr("src", profileImgLink)
let h2 = $("<h2>").text(nameHeader)
let span = $("<span>").text(nameHandle)
let p = $("<p>").text(createdDate)
let footer =$("<footer>");
let footerText = $("<p>").text(messageContent)
footer.append(footerText)
header.append(img).append(h2).append(span)
article.append(header).append(footer).append(p)
return article
}
//rendering tweet loop
function renderTweets(tweets) {
    for(let i = 0; i < tweets.length; i++){
        $('.tweets-container').prepend(createTweetElement(tweets[i]))  
    }
}