# reddit React Components

## What?

This is mostly an experiment to toy around with React and webpack together which is extremely fun. webpack's idea of including images and CSS as JS assets fits perfectly with the component architecture of React.

This is intended to be an embeddable reddit link though right now it isn't really fit for production use. You cannot very well use webpack componennts outside of webpack very easily, a fact I just discovered. I'll keep toying with it.

## Use

You can open up `test/index.html` in a browser to see it how it's compiled as-is right now.

To modify for your own use:

1. Run `npm install`
1. Run `npm install -g webpack`
1. Modify `js/components.jsx` to suit what you want it do.
1. Run `webpack --display-error-details --colors` from the root directory of the project to recompile.
1. Check test/index.html again to see changes.

## API

Right now there's only one component, the humble RedditLink. It only accepts one parameter as a prop, `url`. Go to a reddit comment thread for the link you're using and grab the URL. It'll look like `https://www.reddit.com/r/lunapuppy/comments/1q71jj/luna_playing_with_her_sock_monkey_which_she_then/`. Pass that in as a prop to the RedditLink and it should display it.

## Roadmap

- Tests
- Be able to do lists of links like subreddits or search results.
- Handle self posts and embeds.
- Definitely to be able to import the bundle to non-webpack code so you could potentially throw this anywhere, just like you do with tweets. Ideally the embed would be dead simple to include on a website.

## Authors

- [@btholt](https://twitter.com/holtbt)

