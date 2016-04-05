var React = require('react')
var ReactDOM = require('react-dom')

// components
var Avatar = require('./components/avatar/')
var Button = require('./components/button/')
var Content = require('./components/content/')
var Review = require('./components/review/')
var Sidebar = require('./components/sidebar/')
var UserInfo = require('./components/user-info/')
var Stars = require('./components/stars/')
var Card = require('./components/card/')
var Tree = require('./components/tree/')

// example data
var FIVE_STAR = 5
var SAMPLE_REVIEW = 2
var sample = require('./data/reviews.json')[SAMPLE_REVIEW]

var Documentation = React.createClass({
  render: function render () {
    return (
      <div className="documentation">
        <h1>{'Yelp Front End Code Test'}</h1>

        <h2>{'by Edward Breen'}</h2>

        <div className="documentation-summary">
          <p>{'This documentation page gives an overview of how I assembled the project. Please open the index.html file to see the final result.'}</p>
          <p>{'I used React to complete this assignment. In order to modularize the project, I built several individual components and assembled them to replicate the mock. See below for details.'}</p>
          <p>{'I used the styling guide that was included to style everything. You can find all of my CSS in the css folder. I split up the CSS into separate files for organizational and modularization purposes.'}</p>
          <p>{'Since I was not able to use a server and database, I stored the sample data in localStorage and created a function to fetch the data from localStorage. This special function is simulating a potential ajax request.'}</p>
          <p>{'For ease of development, I used npm and Browserify to package and build this project, including my custom React components and npm modules. (moment, classnames, babelify, react) Babelify was required because I used JSX to build my React components. The final html file uses a script that was bundled by Browserify. All of the source code is included.'}</p>
          <p>{'If you have any questions about how I built this or if you have any technical difficulties, please let me know. Thank you!'}</p>
        </div>

        <h1>{'React component tree'}</h1>

        <div className="documentation-tree-container">
          <Tree title="Page">
            <Tree title="Button" />
            <Tree title="Review" >
              <Tree title="Sidebar" >
                <Tree title="Avatar" />
                <Tree title="UserInfo" />
              </Tree>
              <Tree title="Content" >
                <Tree title="Stars" />
              </Tree>
            </Tree>
          </Tree>
        </div>

        <h1>{'React components'}</h1>

        <Card
          name="Button"
          propList={['children', 'handleClick', 'disabled']}
        >
          <Button disabled={false}>{'Enabled'}</Button><br /><br />
          <Button>{'Disabled'}</Button>
        </Card><hr />

        <Card
          name="Avatar"
          propList={['profileURL', 'url', 'width', 'height', 'alt']}
        >
          <Avatar />
        </Card><hr />

        <Card
          name="UserInfo"
          propList={['name', 'profileURL', 'location', 'reviewCount', 'friendCount', 'eliteYear']}
        >
          <UserInfo
            name={sample.user.name}
            profileURL={sample.user.profileURL}
            location={sample.user.location}
            reviewCount={sample.user.reviewCount}
            friendCount={sample.user.friendCount}
            eliteYear={sample.user.eliteYear}
          />
        </Card><hr />

        <Card
          name="Sidebar"
          propList={['avatarURL', 'name', 'profileURL', 'location', 'reviewCount', 'friendCount', 'eliteYear']}
        >
          <Sidebar
            name={sample.user.name}
            profileURL={sample.user.profileURL}
            location={sample.user.location}
            reviewCount={sample.user.reviewCount}
            friendCount={sample.user.friendCount}
            eliteYear={sample.user.eliteYear}
          />
        </Card><hr />

        <Card
          name="Stars"
          propList={['size', 'rating', 'date']}
        >
          <Stars
            rating={FIVE_STAR}
            date={sample.date}
            size="xLarge"
          /><br />
          <Stars
            rating={FIVE_STAR}
            date={sample.date}
          />
        </Card><hr />

        <Card
          name="Content"
          propList={['text', 'rating', 'date']}
        >
          <Content
            text={sample.reviewText}
            rating={FIVE_STAR}
            date={sample.date}
          />
        </Card><hr />

        <Card
          name="Review"
          propList={['reviewText', 'rating', 'date', 'user']}
        >
          <Review
            reviewText={sample.reviewText}
            rating={FIVE_STAR}
            date={sample.date}
            user={sample.user}
          />
        </Card>
      </div>
    )
  }
})

// render the Documentation
ReactDOM.render(<Documentation/>, document.getElementById('documentation'))
