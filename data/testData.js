const data = [
    {
        id: 0, type: "module", title: "Welcome", sections: [
            {
                id: 0, type: "section", title: "Welcome", lessons: [
                    { id: 0, title: "Welcome To Learn", link: "welcome-to-learn-verified", lab: false, readCount: 0 },
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
            {
                id: 6, type: "section", title: "Iteration", lessons: [
                    { title: "Iteration and Abstraction", link: "iterators-and-abstraction-ruby", lab: false },
                    { title: "Intro to Ruby Iterators", link: "intro-to-ruby-iterators", lab: false },
                    { title: "Square Array Lab", link: "square_array-v-000", lab: true },
                    { title: "Badges and Schedules Lab", link: "badges-and-schedules-v-000", lab: true },
                    { title: "Oxford Comma Lab", link: "oxford-comma-v-000", lab: true },
                    { title: "Deli Counter Lab", link: "deli-counter-v-000", lab: true },
                    { title: "Collect and Return Values", link: "each-vs-collect-readme", lab: false },
                    { title: "Reverse Each Word Lab", link: "reverse-each-word-v-000", lab: true },
                    { title: "Yield and Blocks", link: "yield-and-blocks-v-000", lab: true },
                    { title: "Each Lab", link: "my-each-v-000", lab: true },
                    { title: "Return from Yield Statements", link: "yield-and-return-values-v-000", lab: true },
                    { title: "Collect Lab", link: "my-collect-v-000", lab: true },
                    { title: "Boolean Enumerators", link: "ruby-boolean-enumerables", lab: false },
                    { title: "Search Enumerators", link: "ruby-search-enumerables", lab: false },
                    { title: "My All? Lab", link: "my_all-v-000", lab: true },
                    { title: "My Find Lab", link: "my_find_code_along-v-000", lab: true },
                    { title: "Cartoon Collections Lab", link: "cartoon-collections-v-000", lab: true },
                    { title: "Enumerators Code Challenge", link: "enumerator-coding-challenge", lab: false },
                    { title: "Prime? Lab", link: "prime-ruby-v-000", lab: true },
                    { title: "Sorting", link: "sorting-readme", lab: false },
                    { title: "Sorting Lab", link: "collections_practice-v-000", lab: true },
                ]
            },
            {
                id: 7, type: "section", title: "Hashes", lessons: [
                    { title: "Introduction to Hashes", link: "hash-overview-readme", lab: false },
                    { title: "Using Hashes", link: "my-first-hash-v-000", lab: true },
                    { title: "Symbols", link: "ruby-symbols", lab: false },
                    { title: "Hash Iteration with Each", link: "hash-iteration-v-000", lab: true },
                    { title: "Hash Iteration with Collect", link: "hash-iteration-collect", lab: true },
                    { title: "Hash Iteration Lab", link: "key-for-min-value-v-000", lab: true },
                ]
            },
            {
                id: 8, type: "section", title: "Data Structures", lessons: [
                    { title: "Intro to Nested Hashes", link: "nested-hashes-intro", lab: false },
                    { title: "Building Nested Hashes", link: "building-nested-hash-readme", lab: false },
                    { title: "Building Nested Hashes Lab", link: "building-nested-hashes-v-000", lab: true },
                    { title: "Nested Hashes Lab", link: "ruby-intro-to-hashes-lab-v-000", lab: true },
                    { title: "Multitype Collections Lab", link: "simple-nesting-v-000", lab: true },
                    { title: "Nested Hash Iteration", link: "nested-hash-iteration", lab: false },
                    { title: "Iterating over Nested Hashes Codealong", link: "nested-hash-iteration-code-along-v-000", lab: true },
                    { title: "Other Hashes Codealong", link: "other-hash-methods-code-along-v-000", lab: true },
                    { title: "Hashes Manipulation Lab", link: "apples-and-holidays-v-000", lab: true },
                ]
            },
        ]
    },
    {
        id: 5, type: "module", title: "Object Oriented Ruby", sections: [
            {
                id: 0, type: "section", title: "Intro to Object Oriented Ruby", lessons: [
                    { title: "Intro to Object Orientation", link: "uci-mod-3-introduction-to-object-orientation", lab: false },
                    { title: "OO Ruby Video: Object Orientation Overview", link: "oo-ruby-video-object-orientation-overview", lab: false },
                ]
            },
            {
                id: 1, type: "section", title: "Classes and Instances", lessons: [
                    { title: "Intro to Classes and Instances", link: "ruby-intro-to-classes-and-instances", lab: false },
                    { title: "Classes and Instances Lab", link: "classes-and-instances-lab-ruby-v-000", lab: true },
                ]
            },
            {
                id: 2, type: "section", title: "Instance Methods", lessons: [
                    { title: "Instance Methods", link: "instance-methods-readme-ruby", lab: false },
                    { title: "Instance Methods Lab", link: "instance-methods-lab-ruby-v-000", lab: true },
                ]
            },
            {
                id: 3, type: "section", title: "Object Properties", lessons: [
                    { title: "Instance Variables", link: "ruby-instance-variables-lab-v-000", lab: true },
                    { title: "Barking Dog Lab", link: "oo-barking-dog-v-000", lab: true },
                    { title: "Object Attributes", link: "ruby-object-attrs-readme", lab: false },
                    { title: "Object Attributes Lab", link: "ruby-object-attributes-lab-v-000", lab: true },
                    { title: "Object Accessors", link: "ruby-oo-macros-readme", lab: false },
                    { title: "Meowing Cat", link: "oo-meowing-cat-v-000", lab: true },
                    { title: "Video Review: Object Properties", link: "oo-ruby-video-review-object-properties", lab: false },
                ]
            },
            {
                id: 4, type: "section", title: "Object Lifecycle", lessons: [
                    { title: "Object Initialization", link: "ruby-initialization", lab: false },
                    { title: "Object Initialization Lab", link: "ruby-object-initialize-lab-v-000", lab: true },
                    { title: "OO Basics", link: "oo-basics-v-000", lab: true },
                    { title: "OO Basics with Class Constants", link: "oo-basics-with-class-constants-v-000", lab: true },
                    { title: "OO School Domain", link: "school-domain-v-000", lab: true },
                ]
            },
            {
                id: 5, type: "section", title: "Object Orientation Review", lessons: [
                    { title: "Intro to Object Orientation Ruby", link: "intro-to-object-orientation-ruby", lab: false },
                ]
            },
            {
                id: 6, type: "section", title: "Object's Self", lessons: [
                    { title: "Self", link: "ruby-self-readme", lab: false },
                    { title: "OO Counting Sentences", link: "oo-counting-sentences-v-000", lab: true },
                ]
            },
            {
                id: 7, type: "section", title: "Class Variables and Methods", lessons: [
                    { title: "Class Variables and Methods", link: "ruby-class-variables-and-class-methods-readme", lab: false },
                    { title: "Class Variables and Methods Lab", link: "ruby-class-variables-and-class-methods-lab-v-000", lab: true },
                    { title: "Private Methods", link: "ruby-public-private-methods-readme", lab: false },
                ]
            },
            {
                id: 8, type: "section", title: "Object Models", lessons: [
                    { title: "Remembering Objects", link: "ruby-remembering-objects-readme", lab: false },
                    { title: "Puppy Lab", link: "ruby-puppy-v-000", lab: true },
                    { title: "Advanced Class Methods", link: "ruby-advanced-class-methods-readme", lab: false },
                    { title: "Advanced Class Methods Lab", link: "ruby-advanced-class-methods-lab-v-000", lab: true },
                    { title: "Video Review: Object Models", link: "oo-ruby-video-review-object-models", lab: false },
                ]
            },
            {
                id: 9, type: "section", title: "OO Tic Tac Toe", lessons: [
                    { title: "Procedural vs Object Oriented Ruby", link: "procedural-vs-oo-ruby", lab: false },
                    { title: "OO Tic Tac Toe", link: "oo-tic-tac-toe-v-000", lab: true },
                ]
            },
            {
                id: 10, type: "section", title: "Object Labs", lessons: [
                    { title: "OO Email Parser", link: "oo-email-parser-v-000", lab: true },
                    { title: "OO Anagram Detector", link: "anagram-detector-v-000", lab: true },
                    { title: "OO Cash Register", link: "oo-cash-register-v-000", lab: true },
                ]
            },
            {
                id: 11, type: "section", title: "Object Relationships", lessons: [
                    { title: "Intro to Object Relationships", link: "ruby-intro-to-object-relationships-with-belongs-to", lab: false },
                    { title: "Belongs to Object Lab", link: "ruby-objects-belong-to-lab-v-000", lab: true },
                    { title: "Has Many Object", link: "ruby-objects-has-many-readme", lab: false },
                    { title: "Has Many Object Lab", link: "ruby-objects-has-many-lab-v-000", lab: true },
                    { title: "Collaborating Object", link: "ruby-collaborating-objects-readme", lab: false },
                    { title: "Collaborating Object Lab", link: "ruby-collaborating-objects-lab-v-000", lab: true },
                    { title: "Collaborating Objects Review", link: "collaborating-objects-review", lab: false },
                    { title: "OO My Pets", link: "oo-my-pets-v-000", lab: true },
                    { title: "OO Kickstarter", link: "oo-kickstarter-v-000", lab: true },
                    { title: "OO Banking", link: "oo-banking-v-000", lab: true },
                    { title: "Has Many Objects Through", link: "ruby-objects-has-many-through-readme-v-000", lab: true },
                    { title: "Has Many Objects Through Lab", link: "ruby-objects-has-many-through-lab-v-000", lab: true },
                ]
            },
            {
                id: 12, type: "section", title: "Object Architecture", lessons: [
                    { title: "Intro to Inheritance", link: "oo-inheritance-code-along-v-000", lab: true },
                    { title: "Intro to Inheritance Lab", link: "ruby-inheritance-lab-v-000", lab: true },
                    { title: "Super", link: "ruby-super-inheritance-", lab: false },
                    { title: "Super Lab", link: "ruby-super-inheritance-lab-v-000", lab: true },
                    { title: "Intro to Modules", link: "modules-reading-v-000", lab: true },
                    { title: "Intro to Modules Lab", link: "artist-song-modules-v-000", lab: true },
                ]
            },
            {
                id: 13, type: "section", title: "Metaprogramming", lessons: [
                    { title: "Mass Assignment", link: "keyword-args-mass-assignment", lab: false },
                    { title: "Mass Assignment and Metaprogramming", link: "mass-assignment-metaprogramming", lab: false },
                    { title: "Mass Assignment Lab", link: "mass-assignment-v-000", lab: true },
                    { title: "Custom Errors", link: "oo-custom-errors-v-000", lab: true },
                    { title: "OO Triangle", link: "triangle-classification-v-000", lab: true },
                ]
            },
            {
                id: 14, type: "section", title: "Scraping", lessons: [
                    { title: "Gems and Bundler", link: "using-bundler-v-000", lab: true },
                    { title: "Scraping", link: "scraping-reading-v-000", lab: true },
                    { title: "Scraping Lab", link: "scraping-flatiron-code-along-v-000", lab: true },
                    { title: "Kickstarter Scraping Lab", link: "scraping-kickstarter-v-000", lab: true },
                    { title: "Video Review: Object Orientation and Scraping", link: "oo-ruby-video-review-object-orientation-and-scraping", lab: false },
                ]
            },
            {
                id: 15, type: "section", title: "Video Reviews of OO Ruby", lessons: [
                    { title: "OO Ruby Object Orientation Video Review", link: "oo-ruby-object-orientation-video-review", lab: false },
                ]
            },
            { id: 16, type: "section", title: "Final Projects", lessons: [] },
        ]
    },
    {
        id: 6, type: "module", title: "SQL", sections: [
            {
                id: 0, type: "section", title: "Topic Introduction", lessons: [
                    { title: "What is SQL", link: "sql-topic-introduction", lab: false },
                ]
            },
            {
                id: 1, type: "section", title: "Getting Started", lessons: [
                    { title: "SQL Intro and Installation", link: "sql-intro-and-installation-readme", lab: false },
                    { title: "SQL Database Basics", link: "sql-database-basics-readme", lab: false },
                    { title: "SQL Databases and Text Editors", link: "sql-databases-and-text-editors-readme", lab: false },
                    { title: "SQL Data Types", link: "sql-sqlite-data-types-readme", lab: false },
                    { title: "SQL Inserting, Updating, and Selecting", link: "sql-insert-select-update-code-along", lab: false },
                    { title: "Basic SQL Queries", link: "sql-queries-basic-readme", lab: false },
                    { title: "SQL Aggregate Functions", link: "sql-aggregate-functions-readme", lab: false },
                    { title: "SQL Aggregate Functions Lab", link: "sql-aggregate-functions-lab-v-000", lab: true },
                    { title: "SQL Bear Organizer Lab", link: "SQL-bear-organizer-lab-v-000", lab: true },
                ]
            },
            {
                id: 2, type: "section", title: "Table Relations", lessons: [
                    { title: "Edgar Codd and Table Relations", link: "sql-relational-databases-readme", lab: false },
                    { title: "Table Relations", link: "sql-table-relations-readme", lab: false },
                    { title: "SQL JOINS", link: "sql-joins-readme", lab: false },
                    { title: "SQL Complex Joins", link: "sql-complex-joins-readme", lab: false },
                    { title: "SQL Joins Tables", link: "sql-join-tables-readme", lab: false },
                    { title: "Grouping and Sorting Data", link: "sql-grouping-and-sorting-readme", lab: false },
                    { title: "SQL Joins Review Lectures", link: "sql-joins-review-lectures", lab: false },
                    { title: "SQL Crowdfunding Lab", link: "sql-crowdfunding-lab-v-000", lab: true },
                ]
            },
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
            {
                id: 0, type: "section", title: "Rack and the Internet", lessons: [
                    { title: "How the Internet Works", link: "how-the-web-works-readme", lab: false },
                    { title: "Increasing Layers of Abstraction", link: "why-layers-of-abstraction", lab: false },
                    { title: "Inspecting the Web with Rack", link: "rack-intro-v-000", lab: true },
                    { title: "Dynamic Web Apps with Rack", link: "rack-dynamic-web-apps-v-000", lab: true },
                    { title: "Rack Responses Lab", link: "rack-responses-lab-v-000", lab: true },
                    { title: "The HTTP Request", link: "rack-http-request-readme", lab: false },
                    { title: "Rack Routes and GET Params Lab", link: "rack-get-params-lab-v-000", lab: true },
                    { title: "Dynamic URL Routes", link: "rack-dynamic-paths-readme", lab: false },
                    { title: "Rack Video Review How The Web Works Pt 1", link: "rack-video-review-how-the-web-works-pt-1", lab: false },
                    { title: "Rack Video Review How The Web Works Pt 2", link: "rack-video-review-how-the-web-works-pt-2", lab: false },
                    { title: "HTTP Status Codes", link: "rack-status-codes-readme", lab: false },
                    { title: "Dynamic URLs and Status Codes Lab", link: "rack-dynamic-routes-lab-v-000", lab: true },
                ]
            }
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
            {
                id: 0, type: "section", title: "Introduction to Rails", lessons: [
                    { title: "Intro To Rails", link: "intro-to-rails", lab: false },
                    { title: "Rails Application Basics", link: "rails-application-basics-readme", lab: false },
                    { title: "Rails MVC", link: "rails-model-view-controller-readme", lab: false },
                    { title: "Rails Static Request", link: "rails-static-request-readme-v-000", lab: true },
                    { title: "Rails Hello World", link: "rails-hello-world-lab-v-000", lab: true },
                    { title: "Video Review: Intro to Rails", link: "rails-video-review-intro-to-rails", lab: false },
                ]
            },
            {
                id: 1, type: "section", title: "Rails Models Basics", lessons: [
                    { title: "ActiveRecord Models and Rails", link: "rails-activerecord-models-and-rails-readme-v-000", lab: true },
                    { title: "ActiveRecord Models and Rails Lab", link: "rails-activerecord-model-rails-lab-v-000", lab: true },
                ]
            },
            {
                id: 2, type: "section", title: "Intro to REST", lessons: [
                    { title: "Intro to REST", link: "rails-intro-to-rest", lab: false },
                    { title: "RESTful Action Index Lab", link: "rails-restful-index-action-lab-v-000", lab: true },
                    { title: "Rails Dynamic Request", link: "rails-dynamic-request-readme-v-000", lab: true },
                    { title: "Rails Dynamic Request Lab", link: "rails-dynamic-request-lab-v-000", lab: true },
                ]
            },
            {
                id: 3, type: "section", title: "Intro to ActionView", lessons: [
                    { title: "Rails URL Helpers", link: "rails-url-helpers-readme-v-000", lab: true },
                    { title: "Rails URL Helpers Lab", link: "rails-url-helpers-lab-v-000", lab: true },
                    { title: "Rails form_tag", link: "rails-form_tag-readme-v-000", lab: true },
                    { title: "Rails form_tag Lab", link: "rails-form_tag-lab-v-000", lab: true },
                ]
            },
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
            {
                id: 0, type: "section", title: "Node Package Manager", lessons: [
                    { title: "Intro To Npm Readme", link: "intro-to-npm-readme", lab: false },
                    { title: "Npm Lab", link: "npm-lab-v-000", lab: true },
                ]
            },
            {
                id: 1, type: "section", title: "Introduction to React", lessons: [
                    { title: "This Is React Readme", link: "this-is-react-readme", lab: false },
                    { title: "A React App Example", link: "a-react-app-example-v-000", lab: true },
                    { title: "Some Useful Tools For Writing React", link: "some-useful-tools-for-writing-react", lab: false },
                ]
            },
            {
                id: 2, type: "section", title: "Introduction to Components", lessons: [
                    { title: "React Components", link: "react-components", lab: false },
                    { title: "Static Components Lab", link: "react-static-components-lab-v-000", lab: true },
                    { title: "Dynamic Components", link: "react-dynamic-components", lab: false },
                    { title: "Dynamic Components Lab", link: "react-dynamic-components-lab-v-000", lab: true },
                ]
            },
            {
                id: 3, type: "section", title: "Props and State", lessons: [
                    { title: "Props", link: "react-props-readme", lab: false },
                    { title: "Props Lab", link: "react-props-movie-lab-v-000", lab: true },
                    { title: "Modular Code", link: "react-modular-code", lab: false },
                    { title: "Events Crash Course Readme", link: "react-events-crash-course-readme", lab: false },
                    { title: "Events Crash Course Lab", link: "react-events-crash-course-lab-v-000", lab: true },
                    { title: "State", link: "react-state-readme", lab: false },
                    { title: "React Simple State", link: "react-simple-state-lab-v-000", lab: true },
                    { title: "Slider State Lab", link: "react-initial-state-lab-v-000", lab: true },
                    { title: "Using Callbacks To Pass Information Lab", link: "react-using-callbacks-to-pass-information-lab-v-000", lab: true },
                ]
            },
            {
                id: 4, type: "section", title: "Events", lessons: [
                    { title: "React Event System", link: "react-event-system", lab: false },
                    { title: "Event System Lab", link: "react-event-system-lab-v-000", lab: true },
                    { title: "Events In Detail", link: "react-events-in-detail", lab: false },
                    { title: "Events In Detail Lab", link: "react-events-in-detail-lab-v-000", lab: true },
                    { title: "Updating State", link: "react-updating-state-v-000", lab: false },
                    { title: "Updating State Lab", link: "react-updating-state-lab-v-000", lab: true },
                ]
            },
            {
                id: 5, type: "section", title: "Forms", lessons: [
                    { title: "Forms", link: "react-forms-v-000", lab: true },
                    { title: "Forms Lab", link: "react-forms-lab-v-000", lab: true },
                    { title: "Props, State, and Events Lab", link: "react-props-and-state-lab-v-000", lab: true },
                ]
            },
            {
                id: 6, type: "section", title: "Lifecycle Methods", lessons: [
                    { title: "React Component Lifecycle Overview", link: "react-component-lifecycle-overview", lab: false },
                    { title: "Component Mounting and Unmounting Readme", link: "react-component-mounting-lifecycle-readme", lab: false },
                    { title: "Component Mounting LabMultiTimer App", link: "react-component-mounting-lab-v-000", lab: true },
                    { title: "Component Mounting LabPancake Flipper", link: "react-component-mounting-and-unmounting-lab-v-000", lab: true },
                    { title: "Update Lifecycle Readme", link: "react-update-lifecycle-readme", lab: false },
                    { title: "Component Updating Lab", link: "react-component-updating-lab-v-000", lab: true },

                ]
            },
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