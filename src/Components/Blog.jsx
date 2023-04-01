import React from "react";

const Blog = () => {
  return (
    <div className="cursor-default">
      <div className="rounded-md bg-gray-100 p-5 drop-shadow-xl mb-8">
          <p className="font-bold text-4xl my-1 mb-5 pt-3">Props vs State</p>
          <p className="font-semibold text-zinc-800 text-xl my-2">
            Props and state are both ways to manage data in React components, but they serve different purposes. Props
            (short for "properties") are used to pass data from a parent component to a child component. They are read-only
            and cannot be modified by the child component. Props are typically used for static data that doesn't change
            during the lifetime of the component. State, on the other hand, is used to manage dynamic data that can change
            during the lifetime of the component. State is managed within the component and can be updated using the
            setState() method. State changes trigger a re-render of the component, allowing for dynamic updates to the UI.
            In summary, props are used for passing data down from a parent component to a child component, while state is
            used for managing dynamic data within a component.
          </p>
      </div>
      <div  className="rounded-md bg-gray-100 p-5 drop-shadow-xl mb-8">
          <p className="font-bold text-4xl my-1 mb-5 pt-3">How does useState work?</p>
          <p className="font-semibold text-zinc-800 text-xl my-2">
          
            the useState hook is used to manage state within functional components. It takes an initial value as an argument
            and returns an array containing the current state value and a function to update the state. Here's how the
            useState hook works in more detail: We import the useState hook from the React library. Then we call the
            useState hook and pass in an initial value for the state.The useState hook returns an array containing the
            current state value and a function to update the state. We use array destructuring to assign these values to
            variables.
          </p>
      </div>
      <div  className="rounded-md bg-gray-100 p-5 drop-shadow-xl mb-8">
          <p className="font-bold text-4xl my-1 mb-5 pt-3">What is the purpose of useEffect other than fetching data?</p>
          <p className="font-semibold text-zinc-800 text-xl my-2">
            1. Updating the document title: You can use the useEffect hook to update the document title when the component
            mounts or when the state changes. 2. Setting up event listeners: You can use the useEffect hook to set up event
            listeners when the component mounts and remove them when it unmounts. 3. Managing subscriptions: You can use the
            useEffect hook to manage subscriptions to external services. In summary, the useEffect hook is a powerful tool
            for managing side effects in React components. It can be used for a wide variety of tasks beyond fetching data,
            such as updating the document title, setting up event listeners, and managing subscriptions.
          </p>
      </div>
      <div  className="rounded-md bg-gray-100 p-5 drop-shadow-xl mb-12">
          <p className="font-bold text-4xl my-1 mb-5 pt-3">How Does React work?</p>
          <p className="font-semibold text-zinc-800 text-xl my-2">
            React provides a powerful and efficient way to build user interfaces using components, a virtual DOM, state
            management, event handling, and a component lifecycle. By focusing on declarative programming, React makes it
            easier to build complex UIs that are easy to reason about and maintain.
          </p>
      </div>
    </div>
  );
};

export default Blog;
