function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialState = `
Paragraph

# Heading 1
# Heading 2

- list item 1
- list item 2
- list item 3

[This is a link](https://github.com/DobarBREND)

This is inline code \`<div></div>\`

This is a block of code
\`\`\`
let x = 25;
let y = 35;
let result = x + y;
\`\`\`
\`\`\`
<h1>Text goes here</h1>
\`\`\`

[image](https://cdn.pixabay.com/photo/2016/05/08/14/58/icon-1379228_960_720.png);

**This is a text with a font set to bold**
>Block quote
`;

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: initialState });_defineProperty(this, "handleChange",


    event => {
      this.setState({
        text: event.target.value //value={text} is connected to the state property 'text'
      });
    });}
  render() {
    const { text } = this.state;

    const markdown = marked.parse(text, { breaks: true });

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h2", { className: "text-center m-4" }, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h6", { className: "text-center bg-cl" }, "Enter your markdown here:"), /*#__PURE__*/
      React.createElement("textarea", { className: "form-control", id: "editor", value: text, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h6", { className: "text-center bg-cl" }, "This is the result:"), /*#__PURE__*/
      React.createElement("div", { className: "preview rounded  p-2", id: "preview", dangerouslySetInnerHTML: { __html: markdown } }))), /*#__PURE__*/


      React.createElement("p", { className: "copyright" }, "\xA9 Vladimir Jovanovic :: DobarBREND 2022")));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));