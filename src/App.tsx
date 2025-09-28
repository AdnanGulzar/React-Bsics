
import './App.css'

function App() {

  return (
    <div  style={{textAlign:"left"}}>
    <h1>React Basics</h1>
     <div>

     <h2>Jsx</h2>
     <p>Jsx is use to add javascript expression inside markup.It use "{}" to escape back expressions.Its optional to use but make easier to work with react</p>
     </div>
     <div>

     <h2>Thinking in react Steps</h2>
     <h5 style={{textAlign:"left"}}>
      1. Break the UI into a component hierarchy.<br/>
      2. Build a static version in React.<br/>
      3. Identify the minimal (but complete) representation of UI state.<br/>
      4. Identify where your state should live.<br/>
      5. Add inverse data flow.<br/>
     </h5>
     </div>
     <div>

     <h2>Installation</h2>
     <h5 style={{textAlign:"left"}}>
      From Scratch<br/>
      Using nextjs<br/>
      Using vite<br/>
      Using Other react frameworks<br/>
     </h5>
     </div>
     <div>

     <h2>Describing the UI</h2>
     <h5 style={{textAlign:"left"}}>
     React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components. From web sites to phone apps, everything on the screen can be broken down into components. In this chapter, you’ll learn to create, customize, and conditionally display React components.
     </h5>
     </div>
     <div>

     <h2>Responding to Events</h2>
     <h5 style={{textAlign:"left"}}>
     You can handle events by passing a function as a prop to an element like {"<button>."}
Event handlers must be passed, not called! {"onClick={handleClick}"}, not {"onClick={handleClick()}"}.
You can define an event handler function separately or inline.
Event handlers are defined inside a component, so they can access props.
You can declare an event handler in a parent and pass it as a prop to a child.
You can define your own event handler props with application-specific names.
Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.
Events may have unwanted default browser behavior. Call e.preventDefault() to prevent that.
Explicitly calling an event handler prop from a child handler is a good alternative to propagation.
     </h5>
     </div>
     <div>

     <h2>State</h2>
     <h5 style={{textAlign:"left"}}>
     Use a state variable when a component needs to “remember” some information between renders.
State variables are declared by calling the useState Hook.
Hooks are special functions that start with use. They let you “hook into” React features like state.
Hooks might remind you of imports: they need to be called unconditionally. Calling Hooks, including useState, is only valid at the top level of a component or another Hook.
The useState Hook returns a pair of values: the current state and the function to update it.
You can have more than one state variable. Internally, React matches them up by their order.
State is private to the component. If you render it in two places, each copy gets its own state.
     </h5>
     </div>
     <div>

     <h2>Render and Commit</h2>
     <h5 style={{textAlign:"left"}}>
     Any screen update in a React app happens in three steps:<br/>
Trigger<br/>
Render <br/>
Commit <br/>
You can use Strict Mode to find mistakes in your components <br/>
React does not touch the DOM if the rendering result is the same as last time
     </h5>
     </div>
    </div>
  )
}

export default App
