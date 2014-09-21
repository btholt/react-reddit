var React = require('React');
var RedditLink = require("./RedditLink.jsx");

React.renderComponent(
  <RedditLink
    url={"https://www.reddit.com/r/lunapuppy/comments/1q71jj/luna_playing_with_her_sock_monkey_which_she_then/"}
  />,
  document.getElementById('target')
);

// modules.export = {
//   Link: require("./RedditLink.jsx")
// };