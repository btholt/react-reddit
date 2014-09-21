var React = require("React");
var RedditLinkInternal = require("./_RedditLinkInternal.jsx");
var ajax = require("./microajax.js");

module.exports = React.createClass({
  getInitialState: function() {
    return {
      link: "",
      author: "",
      thumbnail: "",
      score: 0,
      self: false,
      subreddit: "",
      commentThread: "",
      loaded: false,
      commentsCount: 0,
      title: "",
      domain: "",
      likes: null,
      linkId: "",
    };
  },
  componentDidMount: function() {
    // typically making AJAX request
    // that's impossible on a jet air-o-plane
    // so I cheated


    var id = this.getRedditLinkId(this.props.url);

    ajax("https://www.reddit.com/api/info.json?id=t3_" + id, function(data) {
      var obj = JSON.parse(data);
      var post = obj.data.children[0].data;
      console.log("response", obj);
      var newState = {
        link: post.url,
        author: post.author,
        thumbnail: post.thumbnail,
        score: post.score,
        self: post.is_self,
        subreddit: post.subreddit,
        commentThread: post.permalink,
        commentsCount: post.num_comments,
        title: post.title,
        domain: post.domain,
        likes: post.likes,
        loaded: true,
        linkId: id
      };
      this.replaceState(newState);
    }.bind(this));

    console.log(id);

  },
  getRedditLinkId: function(url) {
    var parts = url.split('/');

    for (var i = 0; i < parts.length; i++) {
      if (parts[i] === "comments" && i+1 < parts.length && parts[i+1]) {
        return parts[i+1];
      }
    }
    return false;
  },
  render: function() {
    return (
      <RedditLinkInternal
        title={this.state.title}
        score={this.state.score}
        link={this.state.link}
        self={this.state.self}
        subreddit={this.state.subreddit}
        commentThread={"http://www.reddit.com" + this.state.commentThread}
        thumbnail={this.state.thumbnail}
        author={this.state.author}
        commentsCount={this.state.commentsCount}
        domain={this.state.domain}
        likes={this.state.likes}
        linkId={this.state.linkId}
      />
    );
  }
});