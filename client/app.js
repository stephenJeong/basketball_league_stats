const React = require('react');
const { render } = 'react-dom';
const App = React.createFactory(require('components/App'));

if (typeof window !== 'undefined') {
  window.onload = function() {
    render(<App />, document.getElementById('app'));
  }
}
