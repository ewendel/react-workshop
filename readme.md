# React workshop

Slides from the presentation are available [here](https://raw.githubusercontent.com/ewendel/slidesets/master/React%20Workshop%20FutureJS.pdf)

## Instructions

Ensure that you have Node.js installed, otherwise install from https://nodejs.org/.

Clone this repo:

```
git clone https://github.com/ewendel/react-workshop.git
```

Install the project's dependencies:

```
npm install
```

Start the webserver:

```
node app.js
```

## Tasks

Below you'll find all the tasks we will be working with in this workshop. For
the first parts of this workshop we have already created all the files you'll
need to solve these, so you don't have to create any new files yourself.
You can find all the files needed in the the `tasks` folder, where you should
also solve the tasks.

In these files, the source code for React.js and a JSX-transpiler are already
included so that we do not need to continously build our frontend code while
developing. Some of the exercises include pre-written CSS, so you shouldn't
have to write any CSS (unless you want to spice things up)

These files can be reached using the links at the following URL:

[`http://localhost:3000`](http://localhost:3000)

**Remember to peek at [React's
documentation](http://facebook.github.io/react/docs/) while doing the
exercises.**

# Part I: Becoming aquainted with React

## Task 1: Creating your first component

(for this task, edit the files in directory `/tasks/1/`. these changes should be visible in  [http://localhost:3000/1](http://localhost:3000/1)) 

Create a simple React component that prints "Hello World".

To solve this task we need to create a React component, implement a render
method in the component, and then render the React component into the DOM.

#### Tips

Helpful links:

- [`Getting started`](https://facebook.github.io/react/docs/getting-started.html)
- [`React.createClass`](https://facebook.github.io/react/docs/top-level-api.html#react.createclass)
- [`React.render`](https://facebook.github.io/react/docs/top-level-api.html#react.render)

## Task 2: Passing data & using JSX

Expand the component from ex. 1 to take in a property called `name` from its
parent and write out "Hello, {name}".<br> If the component is not passed a prop
it should use "World" as a default value.

Next, create a component called `Helloes`that accept a property `names` (array)
and utilizes the previous component to write out "Hello, {name}" for each of
the names in the `names`-array.

#### Tips

`props` are used to pass data from parent to child components - reached via
`this.props` and are immutable

`render()` has to return only one node

Remember that you can use ordinary JavaScript in JSX by using `{ }`

Helpful methods: `Array.prototype.map`

## Task 3: Stateful components: Timer

Create a component called `Timer` that prints out the time passed
since the component was initially rendered. Example:

`I was started 7.8 seconds ago`

The component should update itself ten times per second, and the component
should perform any necessary cleanup when unmounted, e.g timer methods.

#### Tips

We use `state` to store our data that changes during the lifetime of a
component. It can be accessed through `this.state`

Helpful methods: `setInterval, clearInterval`

Lifecycle hooks: `componentDidMount, componentWillUnmount`

## Task 4: More state: Real-time search

Create a component `Search`that is passed an array called `items` (a prop). The
elements contained in the array will have the following format: `{ name: "Some
string", url: "www.somesite.com" }`

The component should include a text field, and the elements in the array should
be filtered by which ones contain the current string in the input field. The
HTML-structure should look like this:

```html
<div>
    <input type="text" />
    <ul>
        return <li><a ...></a></li>
    </ul>
</div>
```
Also - ensure the input field has focus after the component has been rendered.

#### Tips

Helpful methods: `String.prototype.match, Array.prototype.filter`

Useful attributes i JSX: `onChange`, `refs`, `className` (because `class` is a reserved keyword in JavaScript)

--

# Part II: Twitter Dashboard

In this task you will create a super-cool Twitter Dashboard.

## Setup

If you do this workshop _outside_ of a conference, you have to
get access to the Twitter API before you start working on the
tasks. Follow the guide in
[`twitter-setup.md`](twitter-setup.md) to get access and setup the correct files.

**NB!** If you're at a conference with us you DON'T have to
set up Twitter API access!

### Local setup

Go to the `case/task` folder, then start by installing dependencies and starting
the development tool:

```
cd case/task

npm install
npm install -g gulp

npm run watch
```

Gulp is a build tool used to transpile our JSX code, minify and concatenate our
JavaScript and CSS, amongst other things. When we're running `watch` your code
will be built every time a file changes.

Then, in another terminal window (remember to go the the `case/task` folder first):

```
npm start
```

Finally open the following URL in your web browser: [http://localhost:9999](http://localhost:9999)

## Step-by-step guide

### Task 1: Rendering a single tweet

Create a component, `Tweet`, in `js/components` that accepts a
tweet object and renders this. For now, use this component from the
Dashboard component.

As we still haven't fetched tweets from Twitter, you can use
the example tweet object found in `case/task/example-tweet.json`.
As a hint, in Node you can actually require a json file directly:

```javascript
var jsObject = require('some-file.json');
```

The `Tweet` component should have the following HTML structure
(which gives you some free CSS):

```html
<div class="tweet">
    <div class="tweet-header">
        <img class="tweet-image" src="some/url/image.jpg" />
        <div class="tweet-image-offset tweet-name">Knut Olav</div>
        <div class="tweet-image-offset tweet-screen-name">@VerdensKongen</div>
    </div>

    <div class="tweet-text">Hello, fellow developers!</div>
    <div class="tweet-stats">
        <span class="tweet-user-followers">
            <strong>12,058</strong>
            <span class="tweet-stats-desc">followers</span>
        </span>
    </div>
    <span class="tweet-flag flag-icon flag-icon-no"></span>
    <span class="tweet-country tweet-stats-desc">Norge</span>
    <div class="tweet-city tweet-stats-desc">Langesund, Telemark</div>
</div>
```

(Remember that `class` and `className` are not the same)

Take note of the element with the class `flag-icon-no`, where
the two last letters incide the country code of the tweet's
origin. (i.e. `no` for Norway).

### Task 2: Fetching real tweets

Afterwards, set up a WebSocket connection to the server in order to
receive tweets from the API. This should be done in the `Dashboard`
component when it is mounted. Pass the most recently received tweet to
the `Tweet` component. (For easier debugging we don't push that many
tweets yet, so it might take a few seconds between each new tweet.)

Here's a list of lifecycle methods available in React:

- http://facebook.github.io/react/docs/component-specs.html#lifecycle-methods

This is the code needed to set up a WebSocket connection and receive tweets:

**NB!** If you haven't been through the Twitter API setup, remember to ask us
for the correct IP address to use instead of `localhost`!

```javascript
var ws = new WebSocket('ws://localhost:9999');
ws.onmessage = function(ms) {
    var newTweet = JSON.parse(ms.data);
}.bind(this);
```

(If you don't understand the use of `.bind(this)`, we recommend checking out
[Understanding JavaScript’s Function.prototype.bind](http://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)
after the workshop. For now you only need to know that it helps you use
`this` correctly when you want to set the newly arrived tweet on your
component's `state`.)

### Task 3: A list of tweets

Expand the `Dashboard` component to render a list of all
received tweets in a `<ul>`. This list should have the class
`tweetlist`.

Move all the code related to showing this list into a new component
`TweetList`, that receives a list of tweets to render. Only render the
last three received tweets.

Note: you should still use the `Tweet` component created
earlier to render each individual tweet.

### Task 4: TweetMap

Time to plot where on earth all these tweets are coming from!

You can find plenty of components made by other people at
http://react-components.com. We will use the component called
`react-googlemaps` (ensure that you choose the right package, as there are
others with similar names).

Now run `npm install` to install this package.

Create a `TweetMap` component that you use from the `Dashboard`
component. This new component should `render` a top-level div with the
CSS class `tweet-map`. With the help of the `react-googlemaps`
documentation, render a simple map into this div.

These map settings are a good starting point:

- `height`: 100%
- `width`: 100%
- `initialZoom`: 3
- `scaleControl`: `false`
- `streetViewControl`: `false`
- `panControl`: `false`
- `zoomControl`: `false`
- `mapTypeControl`: `false`
- `initialCenter`: 30.675226, -35.051272

Each tweet has a geolocation. Use this to the place markers on the map.

(If you've set up the Twitter API access yourself, you can control the
rate at which you receive tweets on the frontend.  In `twitter-ws.js`,
change the value of the `currentSpeed` variable to some other value, then
restart the backend, i.e.  re-run `npm start`.)

It can be wise to only use, let's say, the last hundred received tweets
in order to avoid your computer from crashing due to the vast amounts
of tweets.

### Task 5: InfluentialTweets

Now that we are receiving way more tweets, it is becoming harder to read the
tweets in our `TweetList`. Change this component to show the three tweets that
have the most followers amongst tweets that are shown on the map.

### Task 6: CurrentTweet

We want to to be able to click on one of our map markers in order to
highlight and show that tweet. Make a new component `CurrentTweet` to
be used for displaying the selected tweet. It should use the `Tweet`
component to render the tweet, and for some free styling, you can use
the class `current-tweet`.

The selected tweet should have its own marker color. The `Marker`
component accepts a prop called `icon` that takes an image url. Here
are some suitable images that can be used:

```
http://maps.google.com/mapfiles/ms/icons/red-dot.png
http://maps.google.com/mapfiles/ms/icons/yellow-dot.png
http://maps.google.com/mapfiles/ms/icons/blue-dot.png
http://maps.google.com/mapfiles/ms/icons/green-dot.png
```

Hint: Remember that you can pass functions into a component as a prop,
e.g. as with `onChange` in [forms](https://facebook.github.io/react/docs/forms.html).

Hint 2: It's possible to pass along all props to child components:
[docs](http://facebook.github.io/react/docs/transferring-props.html).

### Task 7: shouldComponentUpdate

Considering the amount of incoming tweets, it could be wise to help React
understand whether it needs to check if a component has changes that should be
rendered to the DOM. (That is, when a call to `render()` would produce the same
output as the previous call).

By using `console.log` in the `render`-method of our `CurrentTweet`
component we can see how often it is called. Check this again after
having implemented the lifecycle method `shouldComponentUpdate`. See
the docs for how this method works.

### Task 8: App Header

Our app needs a header. In addition to showing the app name (which is yours to
decide), it should display the number of seconds that has passed since it
started running (sounds familiar?) and the number of tweets it has processed so
far.

The HTML could look something like this:

```html
<div class="app-header">
    <h1>Crazy-name, yo</h1>
    <div>
        <span class="tweet-stats-desc">seconds running</span>
        <strong>12</strong>
    </div>
    (similar for no. of tweets)
</div>
```

(Remember to reuse the `Timer` component you created earlier!)

### Task 9: Country statistics

We would like to display which countries that create the most tweets. Create a
component `CountryList` that does this. It should take into account all tweets
ever received, not just the last hundred.

The HTML could look like this:

```html
<ul class="countrylist">
    <li>
       <span class="tweet-flag flag-icon flag-icon-no"></span>
       <span class="country-tweet-count">25</span>
    </li>
</ul>
```

Hint: You don't need to keep a record of all the tweets, only the
number of tweets per country.

### Task 10: Refactoring

We are now displaying small flag icons in two different places in our
app. It is not beneficial to have this code duplication, so refactor
this into a `Flag` component.

--

## Finished!

Now you should have quite a good grasp of how React works. If you want to
learn more about patterns for using React, you can take a look at
[this workshop on Flux](https://github.com/kjbekkelund/flux-workshop), in which
you'll create a simple chat application.

### Articles

* [Removing User Interface Complexity, or Why React is Awesome] (http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome)
* [Reacts diff algorithm](http://calendar.perfplanet.com/2013/diff/)
* [About ClojureScript and functional programming i React] (http://blog.getprismatic.com/om-sweet-om-high-functional-frontend-engineering-with-clojurescript-and-react/)

### Videos

* [The Secrets of React's Virtual DOM](https://www.youtube.com/watch?v=-DX3vJiqxm4)
* [Rethinking Best Practices](https://www.youtube.com/watch?v=x7cQ3mrcKaY)
* [Be Predictable, Not Correct](https://www.youtube.com/watch?v=h3KksH8gfcQ)
* [How Instagram.com Works](https://www.youtube.com/watch?v=VkTCL6Nqm6Y)
* [Hot Reloading with Time Travel](https://www.youtube.com/watch?v=xsSnOQynTHs)
* [High performance functional programming with React and Meteor](https://www.youtube.com/watch?v=qqVbr_LaCIo)

