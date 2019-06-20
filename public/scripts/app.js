// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(() => {
  // renders tweets to page
  function loadTweets() {
    $.ajax({ method: 'GET', url: '/tweets' }).done((result) => {
      renderTweets(result);
    });
  }
  loadTweets();

  // submit button + charactor validation
  $('form').on('submit', (event) => {
    function getTweets() {
      return $.ajax({
        method: 'POST',
        url: '/tweets',
        data: {
          text: content,
        },
      });
    }
    function fetchTweet() {
      loadTweets();
    }

    event.preventDefault();
    const content = $(event.target).find('textarea').val();
    if (content === '') {
      $('#error-message').text('Form is empty!');
      return;
    } else if (content.length >= 140) {
      $('#error-message').text('Form must be under 140 charactors!');
      return;
    }
    getTweets().done(fetchTweet);
  });

  renderTweets(data);
});
const data = [
  {
    user: {
      name: 'Newton',
      avatars: {
        small: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png',
        regular: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png',
        large: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png',
      },
      handle: '@SirIsaac',
    },
    content: {
      text: 'If I have seen further it is by standing on the shoulders of giants',
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: 'Descartes',
      avatars: {
        small: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png',
        regular: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png',
        large: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png',
      },
      handle: '@rd',
    },
    content: {
      text: 'Je pense , donc je suis',
    },
    created_at: 1461113959088,
  },
  {
    user: {
      name: 'Johann von Goethe',
      avatars: {
        small: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png',
        regular: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png',
        large: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png',
      },
      handle: '@johann49',
    },
    content: {
      text: 'Es ist nichts schrecklicher als eine tätige Unwissenheit.',
    },
    created_at: 1461113796368,
  },
];


function createTweetElement(Object) {
  const profileImgLink = Object.user.avatars.small;
  const nameHeader = Object.user.name;
  const nameHandle = Object.user.handle;
  const messageContent = Object.content.text;
  const createdDate = new Date(Object.created_at);
  const article = $('<article>');
  const header = $('<header>');
  const userInfo = $('<div>').addClass("userInfo")
  const img = $('<img>').attr('src', profileImgLink);
  const h2 = $('<h2>').text (nameHeader).addClass();
  const span = $('<span>').text(nameHandle);
  const p = $('<p>').text(createdDate);
  const footer = $('<footer>');
  const footerText = $('<p>').text(messageContent);
  userInfo.append(img).append(h2)
  footer.append(footerText);
  header.append(userInfo).append(span);
  article.append(header).append(footer).append(p);
  return article;
}
// rendering tweet loop
function renderTweets(tweets) {
  for (let i = 0; i < tweets.length; i++) {
    $('.tweets-container').prepend(createTweetElement(tweets[i]));
  }
}