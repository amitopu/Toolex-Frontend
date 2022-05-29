import React from "react";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";

const Blog = () => {
    return (
        <>
            <Header></Header>
            <div className="lg:px-16 md:px-8 p-4 my-10 text-left">
                <h1 className="text-4xl text-center mb-8">
                    Welcome to our blog
                </h1>
                <div>
                    <h2 className="text-xl font-semibold my-5">
                        How will you improve the performance of a React
                        Application?
                    </h2>
                    <p>
                        Some practice in development can make react app faster
                        and give better performence. Unnecessary props are not
                        good for react app. To imporve performence one should
                        avoid unnecessary props. One should also keep state
                        locally where possible. Memoizing React components
                        prevents unnecessary re-renders that gives better
                        performence.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold my-5">
                        What are the different ways to manage a state in a React
                        application?
                    </h2>
                    <p>
                        There are several ways to manage state in react app.
                        Managin local state using useState() hook. Global state
                        is data we manage across multiple components. Global
                        state is necessary when we want to get and update data
                        anywhere in our app, or in multiple components at least
                        and useContext() is used in this case. Url state is data
                        that exists on our URLs, including the pathname and
                        query parameters and managed using useLocation() and
                        useHistory() hooks.Server state is the data that comes
                        from an external server that must be integrated with our
                        UI state. This is managed using fetch inside useEffect()
                        hook.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold my-5">
                        How does prototypical inheritance work?
                    </h2>
                    <p>
                        In Javascript every object has methods and properties
                        that contains an internal and hidden property known as
                        prototype. Prototypical inheritance enables adding
                        methods and porperties in objects. Actually a child
                        object gets porperties and methods from parent object
                        using prototypical inheritance.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold my-5">
                        Why you do not set the state directly in React. For
                        example, if you have const [products, setProducts] =
                        useState([]). Why you do not set products = [...]
                        instead, you use the setProducts
                    </h2>
                    <p>
                        In react data flows in a unidirectional way. React
                        states hold data of a component and a component is
                        rendered based on htis data. when a state changes it
                        renders its children components.React provides
                        setState() function which takes in an object of new
                        states and compares and merge over the previous state
                        and adds the new data to the state. This happens in the
                        entire lifecycle of a component. When state is changed
                        using setState() react can maintain and track that
                        change and re-renders components if necessary. Changing
                        state value directly may break this and shows abnormal
                        behaviour. As an example if an array is assigned to
                        state it just gives reference to that object and if
                        somehow the object is changed other things may break
                        associated with that object. To maintain it in an
                        intelligent way react porvides setState() to change
                        state. That is why in athe above example setProducts()
                        should be used to change products state.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold my-5">
                        What is a unit test? Why should write unit tests?
                    </h2>
                    <p>
                        Unit test is a test method that test small units/part of
                        porgram that constitute the entire program. Like a
                        porgram may have a lot of objects methods and functions.
                        In unit test these functions and object methods are
                        tested individually or some small features are tested
                        individually. This ensures that all the small parts of a
                        large program act as intended. It is easy to find early
                        bugs when testing small portion of a program than
                        testing the entire program.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Blog;
