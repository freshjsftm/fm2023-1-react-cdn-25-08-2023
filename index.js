//React;
//ReactDOM;

const reactElement1 = React.createElement(
  'h2',
  { className: 'main-heading', title: 'title value' },
  'hi',
  77
);
const reactElement2 = React.createElement(
  'h2',
  { className: 'main-heading', title: 'new title' },
  'qwerty'
);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(reactElement1);
