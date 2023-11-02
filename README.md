# Requirements

1. We created a simple React app with a shared footer and a counter button/label on the home page.
2. The counter on the home page starts at zero every time the page loads and increments with each button click. This functionality is currently working.
3. Additionally, in the footer, I want to keep track of and display the total number of times the button has been clicked during the current user's session.
4. We have only covered a basic introduction to props and state. Do you have any thoughts on the best approach for this? Should we pass props, use context, or utilize a reducer?

---

## Answer:

1. There are different ways to manage state in React applications.

   1. For a simple application, useContext and useReducer can be used together (they are both included in a single package).
   2. For a more complex application with multiple frontends and backends, including microservices, we can implement Redux (or Redux Toolkit) to manage state across the entire application. We can use useContext for managing internal state within specific features. However, it's important to combine it with useMemo (or memo), useEffectLayout, or useCallback to ensure that only the UI of a particular frontend is refreshed instead of the entire application.
   3. Another method worth considering for state management is Jotai.

2. Overall, useReducer or Redux, and Jotai are tools that work alongside our application to control state and pass it to specific components.

## How to implement

Yes, there are many ways to integrate Redux/useReducer into an application. However, in this example, let me show you the simplest approach.

We will create:

- An action file to list all types of actions.
- A reducer file to receive action types from the action file and execute corresponding functions, then return the state.
- A global provider to store and share state throughout the application.

In this exercise, I have done the following:

1. Defined the actions in the app (updateCount, resetCount).
2. Written the actions.js file.
3. Written the reducer file and used action types to categorize actions with corresponding functions.
4. Created a store file to store and create an app provider for passing props between components.
5. Wrapped the app in the app provider.
6. Accessed `src/views/Home.js` and used the functions in useContext instead of the component's functions.
7. Accessed `src/views/shared/Footer.js` to call the state and display it.

For more details, you can refer to the [React Context documentation](https://react.dev/reference/react/createContext).

Please feel free to ask if you have any questions. I'm here to help.
