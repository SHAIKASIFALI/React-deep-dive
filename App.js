// const heading = React.createElement('h1',{},'hello world from react');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// Mock this using ReactApis

/* <div>
      <h1>Hello World</h1>
      <div>
        <h2>Subheading 1</h2>
        <div>
          <h3>Subheading 2</h3>
        </div>
      </div>
    </div> */

 const parent = React.createElement("div",{},[
    React.createElement('h1',{},"Hello World!"),
    React.createElement("div",{},[
        React.createElement('h2',{},'subheading1'),
        React.createElement('div',{},React.createElement('h3',{},'subheading3'))
    ])
 ])

 console.log(parent); // here the parent is the javascript object

 const root = ReactDOM.createRoot(document.getElementById('root'));

 root.render(parent); // now the js object converts to the html code.. understood by the browser.

 // react will replace all the stuff if anything is written inside the root..
 // We can also make react work only inside our root app ..
 // React is just an javascipt ui library because it can simply work on small part of application as well..