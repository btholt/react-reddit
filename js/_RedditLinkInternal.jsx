(function() {
  require("../css/_RedditLinkInternal.css");

  var React = require("React");
  var RedditLinkTitle = React.createClass({
    render: function() {
      return (
        <div className="reddit-title">
          <a className="reddit-title-a" href={this.props.link}>{this.props.title}</a> <small className="reddit-title-domain">({this.props.domain})</small>
        </div>
      );
    }
  });

  var RedditLinkVotingBox = React.createClass({
    popupLink: function(e) {
      e.preventDefault();
      var newWindow=window.open("https://www.reddit.com/api/info?id=t3_" + this.props.linkId, 'name','height=190,width=840,toolbar=no,titlebar=no,location=no,status=no,menubar=no');
      if (window.focus) {
        newWindow.focus()
      }
    },
    render: function() {

      return (
        <div className="reddit-votebox">
          <a href="#" onClick={this.popupLink}>
            <div className="reddit-votearrow reddit-votearrow-upvote"></div>
          </a>
          <div className="reddit-votescore">{this.props.score}</div>
          <a href="#" onClick={this.popupLink}>
            <div className="reddit-votearrow reddit-votearrow-downvote"></div>
          </a>
        </div>
      );
    }
  });

  var RedditLinkThumbnail = React.createClass({
    render: function() {
      return (
        <div className="reddit-thumbnail">
          <a href={this.props.link} className="reddit-thumbnail-a">
            <img className="reddit-thumbnail-img" src={this.props.thumbnail} alt="Thumbnail for reddit link" />
          </a>
        </div>
      );
    }
  });

  var RedditLinkTools = React.createClass({
    render: function() {
      console.log(this.props);
      return (
        <div className="reddit-tools">
          <div className="reddit-subreddit">
            submitted 4 hours ago by <a className="reddit-subreddit-a" href={"http://www.reddit.com/user/" + this.props.author}>{this.props.author}</a> to <a className="reddit-subreddit-a" href={"http://www.reddit.com/r/" + this.props.subreddit}>
              /r/{this.props.subreddit}</a>
          </div>
          <div className="reddit-tools-additional">
            <a href={this.props.commentThread} className="reddit-tool-a">
              view comments({this.props.commentsCount})
            </a>
            <a href={"https://ssl.reddit.com/gold?goldtype=gift&months=1&edit=true&recipient=" + this.props.author} className="reddit-tool-a">
              give gold
            </a>
            <a href={this.props.commentThread} className="reddit-tool-a">
              view on reddit
            </a>
          </div>
        </div>
      );
    }
  });

  module.exports = React.createClass({
    render: function() {
      console.log("props", this.props);
      return (
        <div className="reddit-link">
          <RedditLinkVotingBox
            score={this.props.score}
            likes={this.props.likes}
            linkId={this.props.linkId}
          />
          <RedditLinkThumbnail
            thumbnail={this.props.thumbnail}
            link={this.props.link}
          />
          <div className="reddit-text">
            <RedditLinkTitle
              title={this.props.title}
              link={this.props.link}
              domain={this.props.domain}
            />
            <RedditLinkTools
              author={this.props.author}
              subreddit={this.props.subreddit}
              author={this.props.author}
              timePosted={this.props.timePosted}
              commentsCount={this.props.commentsCount}
              commentThread={this.props.commentThread}
            />
          </div>
        </div>
      );
    }
  });
})();