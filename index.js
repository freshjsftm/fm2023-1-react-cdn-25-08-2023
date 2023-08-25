//React;
//ReactDOM;

class HeadingH2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  add = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    console.log(this);
    const { className, children } = this.props;
    return React.createElement('h2', { className, onClick:this.add }, this.state.count, '&copy;',...children);
  }
}

const reactElement1 = React.createElement(
  HeadingH2,
  {
    className: 'main-heading',
  },
  'create first h2',
  '!!!'
);

const reactElement2 = React.createElement(
  HeadingH2,
  {
    className: 'heading2',
  },
  'Qerty',
  '!!!'
);

// const wrapperDiv = React.createElement(
//   'div',
//   null,
//   reactElement1,
//   reactElement2
// );

const wrapperDiv = React.createElement(React.Fragment, null, reactElement1, reactElement2);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(wrapperDiv);
