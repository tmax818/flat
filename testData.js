const data = [
    {
        id: 0, type: "module", title: "Welcome", sections: [
            {
                id: 0, type: "section", title: "", lessons: [
                    { title: "Welcome To Learn", link: "welcome-to-learn-verified", lab: false, readCount: 0 },
                    { title: "Navigating Curriculum On Learn", link: "prework-intro-navigating-curriculum-on-learn-ide", lab: false },
                    { title: "Ask A Question", link: "prework-intro-ask-a-question", lab: false },
                ]
            }
        ]
    },
    {
        id: 1, type: "module", title: "Git and GitHub", sections: [
            { id: 0, type: "section", title: "Using Git and GitHub", lessons: [] },
            { id: 1, type: "section", title: "Making Pull Requests", lessons: [] },
            { id: 2, type: "section", title: "Using Gems", lessons: [] },
        ]
    },
    {
        id: 2, type: "module", title: "Intro to Ruby Dev", sections: [
            { id: 0, type: "section", title: "Intro to Programming", lessons: [] },
            { id: 1, type: "section", title: "Debugging", lessons: [] },
            { id: 2, type: "section", title: "Variables", lessons: [] },
            { id: 3, type: "section", title: "Methods", lessons: [] },
            { id: 4, type: "section", title: "Command Line Applications", lessons: [] },
            { id: 5, type: "section", title: "Logic and Conditionals", lessons: [] },
            { id: 6, type: "section", title: "Loops", lessons: [] },
            { id: 7, type: "section", title: "Iteration", lessons: [] },
            { id: 8, type: "section", title: "Ruby Tic Tac Toe", lessons: [] },
        ]
    },
    {
        id: 3, type: "module", title: "Intro to HTML and CSS", sections: [
            { id: 0, type: "section", title: "The Web and HTML", lessons: [] },
            { id: 1, type: "section", title: "HTML Basics", lessons: [] },
            { id: 2, type: "section", title: "CSS Basics", lessons: [] },
            { id: 3, type: "section", title: "Transitioning Back to Ruby", lessons: [] },
        ]
    },
    {
        id: 4, type: "module", title: "Proc Ruby", sections: [
            { id: 0, type: "section", title: "[BONUS] Regex", lessons: [] },
            { id: 1, type: "section", title: "Variables and Methods", lessons: [] },
            { id: 2, type: "section", title: "Booleans", lessons: [] },
            { id: 3, type: "section", title: "Logic and Conditionals", lessons: [] },
            { id: 4, type: "section", title: "Looping", lessons: [] },
            { id: 5, type: "section", title: "Arrays", lessons: [] },
            { id: 6, type: "section", title: "Hashes", lessons: [] },
            { id: 7, type: "section", title: "Data Structures", lessons: [] },
        ]
    },
    {
        id: 5, type: "module", title: "OO Ruby", sections: [
            { id: 0, type: "section", title: "Intro to OO", lessons: [] },
            { id: 1, type: "section", title: "Classes and Instances", lessons: [] },
            { id: 2, type: "section", title: "Instance Methods", lessons: [] },
            { id: 3, type: "section", title: "Object Properties", lessons: [] },
            { id: 4, type: "section", title: "Object Lifecycle", lessons: [] },
            { id: 5, type: "section", title: "Object Orientation Review", lessons: [] },
            { id: 6, type: "section", title: "Object's Self", lessons: [] },
            { id: 7, type: "section", title: "Class Variables and Methods", lessons: [] },
            { id: 8, type: "section", title: "Object Models", lessons: [] },
            { id: 9, type: "section", title: "OO Tic Tac Toe", lessons: [] },
            { id: 10, type: "section", title: "Object Labs", lessons: [] },
            { id: 11, type: "section", title: "Object Relationships", lessons: [] },
            { id: 12, type: "section", title: "Object Architecture", lessons: [] },
            { id: 13, type: "section", title: "Metaprogramming", lessons: [] },
            { id: 14, type: "section", title: "Scraping", lessons: [] },
            { id: 15, type: "section", title: "Video Reviews of OO Ruby", lessons: [] },
            { id: 16, type: "section", title: "Final Projects", lessons: [] },
        ]
    },
    {
        id: 6, type: "module", title: "SQL", sections: [
            { id: 0, type: "section", title: "Topic Introduction", lessons: [] },
            { id: 1, type: "section", title: "Getting Started", lessons: [] },
            { id: 2, type: "section", title: "Table Relations", lessons: [] },
        ]
    },
    {
        id: 7, type: "module", title: "ORMs and ActiveRecord", sections: [
            { id: 0, type: "section", title: "ORMs", lessons: [] },
            { id: 0, type: "section", title: "ActiveRecord", lessons: [] },
            { id: 0, type: "section", title: "Associations", lessons: [] },
        ]
    },
    {
        id: 8, type: "module", title: "Rack", sections: [
            { id: 0, type: "section", title: "Rack and the Internet", lessons: [] }
        ]
    },
    {
        id: 9, type: "module", title: "HTML Continued", sections: [
            { id: 0, type: "section", title: "Document Structure and Lists", lessons: [] },
            { id: 1, type: "section", title: "HTML Fundamentals", lessons: [] },
            { id: 2, type: "section", title: "HTML Forms", lessons: [] },
            { id: 3, type: "section", title: "Embedding Content with the Inline Frame Element ", lessons: [] },
            { id: 4, type: "section", title: "HTML5 Media", lessons: [] },
            { id: 5, type: "section", title: "HTML5 Semantic Elements", lessons: [] },
        ]
    },
    {
        id: 10, type: "module", title: "CSS", sections: [
            { id: 0, type: "section", title: "CSS Fundamentals", lessons: [] },
            { id: 1, type: "section", title: "Page Layout and Box Styles", lessons: [] },
            { id: 2, type: "section", title: "Responsive Design", lessons: [] },
        ]
    },
    {
        id: 11, type: "module", title: "Sinatra", sections: [
            { id: 0, type: "section", title: "Sinatra Basics", lessons: [] },
            { id: 1, type: "section", title: "MVC and Forms", lessons: [] },
            { id: 2, type: "section", title: "Forms", lessons: [] },
            { id: 3, type: "section", title: "Sessions", lessons: [] },
            { id: 4, type: "section", title: "ActiveRecord", lessons: [] },
            { id: 5, type: "section", title: "ERB Outside of Sinatra", lessons: [] },
            { id: 6, type: "section", title: "Sinatra Project Mode", lessons: [] },
        ]
    },
    {
        id: 12, type: "module", title: "Rails", sections: [
            { id: 0, type: "section", title: "Introduction to Rails", lessons: [] },
            { id: 1, type: "section", title: "Rails Models Basics", lessons: [] },
            { id: 2, type: "section", title: "Intro to REST", lessons: [] },
            { id: 3, type: "section", title: "Intro to ActionView", lessons: [] },
            { id: 4, type: "section", title: "CRUD with Rails", lessons: [] },
            { id: 5, type: "section", title: "Validations and Forms", lessons: [] },
            { id: 6, type: "section", title: "Associations and Rails", lessons: [] },
            { id: 7, type: "section", title: "Layouts and Partials", lessons: [] },
            { id: 8, type: "section", title: "Refactoring with Helpers and Model Methods", lessons: [] },
            { id: 9, type: "section", title: "Routes and Resources", lessons: [] },
            { id: 10, type: "section", title: "Rails Review: TodoMVC", lessons: [] },
            { id: 11, type: "section", title: "Authentication", lessons: [] },
            { id: 12, type: "section", title: "Popular Gems", lessons: [] },
            { id: 13, type: "section", title: "Rails Project Mode", lessons: [] },
        ]
    },
    {
        id: 13, type: "module", title: "Front-End Web Programming in JavaScript", sections: [
            { id: 0, type: "section", title: "Defining Front-End Web Programming", lessons: [] },
            { id: 1, type: "section", title: "Manipulating the DOM", lessons: [] },
            { id: 2, type: "section", title: "Recognizing JavaScript Events", lessons: [] },
            { id: 3, type: "section", title: "Communication with the Server", lessons: [] },
            { id: 4, type: "section", title: "Pulling it all Together", lessons: [] },
            { id: 5, type: "section", title: "Rails as an API", lessons: [] },
            { id: 6, type: "section", title: "Formalizing JS: Data Types, Comparisons, Conditionals", lessons: [] },
            { id: 7, type: "section", title: "ES6 Syntax Sugar", lessons: [] },
            { id: 8, type: "section", title: "Advanced Function Usage", lessons: [] },
            { id: 9, type: "section", title: "Object Orientation in JavaScript", lessons: [] },
            { id: 10, type: "section", title: "OO JavaScript: Inheritance", lessons: [] },
            { id: 11, type: "section", title: "OO JavaScript: Prototypal Inheritance", lessons: [] },
            { id: 12, type: "section", title: "Project Mode", lessons: [] },
        ]
    },
    {
        id: 14, type: "module", title: "React", sections: [
            { id: 0, type: "section", title: "Node Package Manager", lessons: [] },
            { id: 1, type: "section", title: "Introduction to React", lessons: [] },
            { id: 2, type: "section", title: "Introduction to Components", lessons: [] },
            { id: 3, type: "section", title: "Props and State", lessons: [] },
            { id: 4, type: "section", title: "Events", lessons: [] },
            { id: 5, type: "section", title: "Forms", lessons: [] },
            { id: 6, type: "section", title: "Lifecycle Methods", lessons: [] },
            { id: 7, type: "section", title: "Async React", lessons: [] },
            { id: 8, type: "section", title: "Advanced Components", lessons: [] },
            { id: 9, type: "section", title: "React: Under the Hood", lessons: [] },
            { id: 10, type: "section", title: "Client-Side Routing", lessons: [] },
        ]
    },
    {
        id: 15, type: "module", title: "Redux", sections: [
            { id: 0, type: "section", title: "Building Redux", lessons: [] },
            { id: 1, type: "section", title: "Redux Library", lessons: [] },
            { id: 2, type: "section", title: "React Redux Continued", lessons: [] },
            { id: 3, type: "section", title: "Async Redux", lessons: [] },
            { id: 4, type: "section", title: "Redux Final Project", lessons: [] },
        ]
    }
]