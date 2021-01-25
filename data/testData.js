const data = [
    {
        id: 0, type: "module", title: "Welcome", sections: [
            {
                id: 0, type: "section", title: "Welcome", lessons: [
                    { title: "Welcome To Learn", link: "welcome-to-learn-verified", lab: false, readCount: 0 },
                    { title: "Navigating Curriculum On Learn", link: "prework-intro-navigating-curriculum-on-learn-ide", lab: false },
                    { title: "Ask A Question", link: "prework-intro-ask-a-question", lab: false },
                ]
            }
        ]
    },
    {
        id: 1, type: "module", title: "Git and GitHub", sections: [
            {
                id: 0, type: "section", title: "Using Git and GitHub", lessons: [
                    { title: "Introduction To Version Control", link: "git-version-control-introduction-to-version-control", lab: false },
                    { title: "Version Control Basics", link: "git-version-control-git-basics", lab: false },
                    { title: "Getting Code With Git", link: "git-version-control-getting-code-with-git", lab: false },
                    { title: "Pushing Code With Git", link: "git-version-control-pushing-code-with-git", lab: false },
                    { title: "Git Basics Lab", link: "git-basics-lab-v-000", lab: true },
                    { title: "Thinking Ahead: GitHub as Career Differentiator", link: "careers-online-presence-github", lab: false },
                ]
            },
            {
                id: 1, type: "section", title: "Making Pull Requests", lessons: [
                    { title: "GitHub Pull Request Basics", link: "github-pull-request-basics", lab: false },
                    { title: "Git Collaboration", link: "git-collaboration-readme", lab: false },
                    { title: "Git Collaboration Quiz", link: "git-collaboration-quiz", lab: false },
                    { title: "Git Basics Quiz", link: "git-github-learn-quiz", lab: false },
                ]
            },
            {
                id: 2, type: "section", title: "Using Gems", lessons: [
                    { title: "TDD Rspec And Learn", link: "intro-to-tdd-rspec-and-learn-v-000", lab: true }
                ]
            },
        ]
    },
    {
        id: 2, type: "module", title: "Intro to Ruby Development", sections: [
            {
                id: 0, type: "section", title: "Intro to Programming", lessons: [
                    { title: "Intro to Tic Tac Toe", link: "intro-to-tic-tac-toe-rb", lab: false },
                    { title: "MINSWAN- Yukihuro Matsumoto", link: "matz-readme", lab: false },
                    { title: "What is a Program?", link: "ruby-lecture-intro-what-is-a-program", lab: false },
                    { title: "Hello World", link: "hello-world-ruby-v-000", lab: true },
                ]
            },
            {
                id: 1, type: "section", title: "Debugging", lessons: [
                    { title: "Intro to IRB", link: "irb-readme", lab: false },
                    { title: "Reading Error Messages", link: "ruby-lecture-reading-error-messages-v-000", lab: false }
                ]
            },
            {
                id: 2, type: "section", title: "Variables", lessons: [
                    { title: "About Variable Assignment", link: "variable-readme", lab: false },
                    { title: "Variable Assignment Lab", link: "ruby-variable-assignment-v-000", lab: true },
                    { title: "Ruby Data Types", link: "data-types-readme", lab: false },
                    { title: "Array Basics", link: "array-readme-qualifying", lab: false },
                    { title: "Tic Tac Toe Board", link: "ttt-2-board-rb-v-000", lab: true },
                ]
            },
            {
                id: 3, type: "section", title: "Methods", lessons: [
                    { title: "Intro To Tdd Rspec And Learn", link: "intro-to-tdd-rspec-and-learn-v-000", lab: true },
                    { title: "Intro to Methods", link: "ruby-methods-readme-v-000", lab: true },
                    { title: "String Interpolation", link: "interpolation-readme", lab: false },
                    { title: "Puts and Return", link: "puts-print-and-return-readme", lab: false },
                    { title: "Display Tic Tac Toe Board Example", link: "ttt-3-display_board-example-v-000", lab: true },
                    { title: "Methods and Arguments", link: "ruby-arguments-readme", lab: false },
                    { title: "Default Arguments", link: "methods-default-arguments", lab: false },
                    { title: "Say Hello", link: "say-hello-ruby-v-000", lab: true },
                    { title: "Interpolation Super Power", link: "interpolation-super-power-v-000", lab: true },
                    { title: "Display Tic Tac Toe Board", link: "ttt-4-display-board-rb-v-000", lab: true },
                ]
            },
            {
                id: 4, type: "section", title: "Command Line Applications", lessons: [
                    { title: "Intro to CLI Applications", link: "intro-to-cli-applications", lab: false },
                    { title: "CLI Applications in Ruby", link: "ruby-cli-applications-readme", lab: false },
                    { title: "gets CLI Input", link: "ruby-gets-input-v-000", lab: true },
                    { title: "Greeting CLI Lab", link: "greeting-cli-v-000", lab: true },
                    { title: "Tic Tac Toe Move", link: "ttt-5-move-rb-v-000", lab: true },
                ]
            },
            {
                id: 5, type: "section", title: "Logic and Conditionals", lessons: [
                    { title: "Truthiness", link: "truthiness-in-ruby-readme", lab: false },
                    { title: "Booleans", link: "booleans-ruby-readme", lab: false },
                    { title: "About Ruby Conditionals", link: "conditional-readme", lab: false },
                    { title: "Rspec Fizzbuzz", link: "rspec-fizzbuzz-v-000", lab: true },
                    { title: "Tic Tac Toe Position Taken", link: "ttt-6-position-taken-rb-v-000", lab: true },
                    { title: "Valid Tic Tac Toe Move", link: "ttt-7-valid-move-v-000", lab: true },
                ]
            },
            {
                id: 6, type: "section", title: "Loops", lessons: [
                    { title: "Intro to Loops", link: "looping-introduction", lab: false },
                    { title: "Loops", link: "looping-readme", lab: false },
                    { title: "While and Until Loops", link: "while-and-until-looping-readme", lab: false },
                    { title: "While and Until Loops Lab", link: "looping-while-until-v-000", lab: true },
                    { title: "Tic Tac Toe Turn", link: "ttt-8-turn-v-000", lab: true },
                    { title: "Tic Tac Toe Play Loop", link: "ttt-9-play-loop-v-000", lab: true },
                ]
            },
            {
                id: 7, type: "section", title: "Iteration", lessons: [
                    { title: "Iteration and Abstraction", link: "iterators-and-abstraction-ruby", lab: false },
                    { title: "Intro to Ruby Iterators", link: "intro-to-ruby-iterators", lab: false },
                    { title: "Tic Tac Toe Current Player", link: "ttt-10-current-player-v-000", lab: true },
                ]
            },
            {
                id: 8, type: "section", title: "Ruby Tic Tac Toe", lessons: [
                    { title: "Nested Arrays", link: "nested-arrays-ruby", lab: false },
                    { title: "Boolean Enumerables", link: "ruby-boolean-enumerables", lab: false },
                    { title: "Search Enumerables", link: "ruby-search-enumerators", lab: false },
                    { title: "Tic Tac Toe Game Status", link: "ttt-game-status-v-000", lab: true },
                    { title: "Tic Tac Toe in Ruby", link: "tic-tac-toe-rb-v-000", lab: true },
                ]
            },
        ]
    },
    {
        id: 3, type: "module", title: "Intro to HTML and CSS", sections: [
            {
                id: 0, type: "section", title: "The Web and HTML", lessons: [
                    { title: "Transitioning from Ruby to HTML", link: "phrg-transitioning-from-ruby-to-html", lab: false },
                    { title: "A Quick Tour of the Web", link: "a-quick-tour-of-the-web", lab: false },
                    { title: "Welcome To HTML", link: "welcome-to-html-readme", lab: false },
                    { title: "Files And Filetypes", link: "files-and-filetypes-readme", lab: false },
                    { title: "Experiencing HTML Lab", link: "experiencing-html-lab-v-000", lab: true },
                ]
            },
            {
                id: 1, type: "section", title: "HTML Basics", lessons: [
                    { title: "Crafting HTML Documents", link: "crafting-html-docs-readme", lab: false },
                    { title: "HTML Introduction", link: "html-introduction-novideo", lab: false },
                    { title: "First HTML Tag Lab", link: "first-html-tag-lab-v-000", lab: true },
                    { title: "Well Formed HTML Document Lab", link: "well-formed-html-document-lab-v-000", lab: true },
                    { title: "Nested Tags And Attributes", link: "nested-tags-and-attributes", lab: false },
                    { title: "Anchor Tag with HREF Attribute Lab", link: "a-tag-with-href-attributes-lab-v-000", lab: true },
                    { title: "HTML Elements Types Overview", link: "html-elements", lab: false },
                    { title: "Researching HTML Elements", link: "researching-HTML-elements", lab: false },
                ]
            },
            {
                id: 2, type: "section", title: "CSS Basics", lessons: [
                    { title: "Separation Of Content And Presentation", link: "separation-of-content-and-presentation", lab: false },
                    { title: "Introduction to CSS", link: "introduction-to-css", lab: false },
                    { title: "Introduction to CSS Lab", link: "introduction-to-css-lab-v-000", lab: true },
                ]
            },
            {
                id: 3, type: "section", title: "Transitioning Back to Ruby", lessons: [
                    { title: "Transitioning Back to Ruby", link: "transitioning-back-to-ruby", lab: false },
                ]
            },
        ]
    },
    {
        id: 4, type: "module", title: "Proc Ruby", sections: [
            {
                id: 0, type: "section", title: "[BONUS] Regex", lessons: [
                    { title: "What's a Pattern", link: "regex-what-is-a-pattern", lab: false },
                    { title: "Regex Basics", link: "regex-basics-readme", lab: false },
                    { title: "Ruby Methods with Regex", link: "regex-match-scan-grep-methods-readme", lab: false },
                    { title: "Regex Lab", link: "regex-lab-v-000", lab: true },
                ]
            },
            {
                id: 1, type: "section", title: "Variables and Methods", lessons: [
                    { title: "About Variable Assignment", link: "variable-readme", lab: false },
                    { title: "Variable Assignment Lab", link: "ruby-variable-assignment-v-000", lab: true },
                    { title: "String Interpolation", link: "interpolation-readme", lab: false },
                    { title: "Defining Methods", link: "ruby-methods-readme-v-000", lab: true },
                    { title: "Methods and Arguments", link: "ruby-arguments-readme", lab: false },
                    { title: "Methods and Arguments Lab", link: "method-arguments-lab-v-000", lab: true },
                    { title: "Methods and Default Arguments", link: "methods-default-arguments", lab: false },
                    { title: "Methods and Default Arguments Lab", link: "say-hello-ruby-v-000", lab: true },
                    { title: "Return Values", link: "puts-print-and-return-readme", lab: false },
                    { title: "Return Values Lab", link: "parrot-ruby-v-000", lab: true },
                    { title: "Debugging with Pry", link: "debugging-with-pry-v-000", lab: true },
                    { title: "Method Scope", link: "method-scope", lab: false },
                    { title: "Method Scope Lab", link: "method-scope-lab-v-000", lab: true },
                ]
            },
            {
                id: 2, type: "section", title: "Booleans", lessons: [
                    { title: "Booleans and Truthiness in Ruby", link: "truthiness-in-ruby-readme", lab: false },
                    { title: "Boolean Operations", link: "booleans-ruby-readme", lab: false },
                    { title: "Truthiness Code Challenge", link: "truthiness-code-challenge", lab: false },
                ]
            },
            {
                id: 3, type: "section", title: "Logic and Conditionals", lessons: [
                    { title: "If Statements", link: "conditional-readme", lab: false },
                    { title: "If Statements Lab", link: "speaking-grandma-v-000", lab: true },
                    { title: "Ternary Operators and Statement Modifiers", link: "operators-v-000", lab: true },
                    { title: "If Statements Quiz", link: "conditional-operators-quiz", lab: false },
                    { title: "Case Statements", link: "case-statements-readme", lab: false },
                    { title: "Case Statements Quiz", link: "case-statements-quiz", lab: false },
                    { title: "Logic and Conditionals Quiz", link: "conditional-quiz-vowels", lab: false },
                ]
            },
            {
                id: 4, type: "section", title: "Looping", lessons: [
                    { title: "Intro to Loops", link: "looping-introduction", lab: false },
                    { title: "Looping", link: "looping-readme", lab: false },
                    { title: "Looping Lab", link: "looping-loop", lab: true },
                    { title: "Times", link: "looping-times-v-000", lab: true },
                    { title: "Looping Quiz", link: "looping-quiz", lab: false },
                    { title: "While and Until Loops", link: "while-and-until-looping-readme", lab: false },
                    { title: "While and Until Loops Lab", link: "looping-while-until-v-000", lab: true },
                    { title: "Countdown to Midnight Lab", link: "countdown-to-midnight-v-000", lab: true },
                ]
            },
            {
                id: 5, type: "section", title: "Arrays", lessons: [
                    { title: "Intro to Arrays", link: "array-introduction", lab: false },
                    { title: "Using Arrays", link: "array-readme", lab: false },
                    { title: "Using Arrays Lab", link: "array-CRUD-lab-v-000", lab: true },
                    { title: "Arrays and Methods", link: "array-methods-readme", lab: false },
                    { title: "Arrays and Methods Lab", link: "array-methods-lab-v-000", lab: true },
                ]
            },
            { id: 6, type: "section", title: "Iteration", lessons: [] },
            { id: 7, type: "section", title: "Hashes", lessons: [] },
            { id: 8, type: "section", title: "Data Structures", lessons: [] },
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

module.exports = data