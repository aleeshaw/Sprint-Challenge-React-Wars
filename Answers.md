# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

- React JS is a JavaScript library used for building UIs using reusable UI components. It gives us the option to change data on the page without reloading it.

2. What does it mean to think in react?

- Thinking in react is a way of planning out your applications before you start building and as you actively them. Starting with your end product in mind, it's advisable to plan out what components you'll need to make up your application and what parts of your components will pass down props and what parts will hold and change state. It's also important to think about what will be exported and imported between documents.

3. Describe state.

- State is the value of an object in JavaScript. State can be used to update the data of an object and re-render that object so it reflects that data.

4. Describe props.

- Props are a way for a component in React to pass down data to a child componenet.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

- Side effects are things that happen in response to the DOM rendering. They can be logs, functions, changes in state, etc. You can sync effects in a React component by using a parameter in useEffect(). If an empty array is placed in the parameter, the effect will only run the first time the DOM loads, if you only want the effect to run under a specific condition like when there's a chinge in state or a prop is changed, you would put the name of said change in the parameter.