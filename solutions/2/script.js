var Hello = React.createClass({
  render: function() {
    return <div>
        Hello, {this.props.name}
        </div>;
  }
});

var Helloes = React.createClass({
    render: function() {
    
        var helloes = this.props.names.map(function(name) {
                return <Hello name={name} />
            });
        return <div>
            {helloes}
            </div>
    }
})

React.render(<Helloes names={['Kyle', 'Stan', 'Kenny', 'Cartman']} />, document.body);
