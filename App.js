const parents = React.createElement(
  "div",
  { id: "parents" },
  "Namaste React Parents"
);

const parent = React.createElement(
  "div",
  { id: "parents" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "Namaste React")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
