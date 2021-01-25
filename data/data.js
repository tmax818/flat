const data = [

    /// Welcome1
    { title: "Welcome To Learn", link: "welcome-to-learn-verified", lab: false, readCount: 0 },
    { title: "Navigating Curriculum On Learn", link: "prework-intro-navigating-curriculum-on-learn-ide", lab: false },
    { title: "Ask A Question", link: "prework-intro-ask-a-question", lab: false },

    /// Git GitHub2
    { title: "Introduction To Version Control", link: "git-version-control-introduction-to-version-control", lab: false },
    { title: "Version Control Basics", link: "git-version-control-git-basics", lab: false },
    { title: "Getting Code With Git", link: "git-version-control-getting-code-with-git", lab: false },
    { title: "Pushing Code With Git", link: "git-version-control-pushing-code-with-git", lab: false },
    { title: "Git Basics Lab", link: "git-basics-lab-v-000", lab: true },
    { title: "Thinking Ahead: GitHub as Career Differentiator", link: "careers-online-presence-github", lab: false },
    ///2
    { title: "GitHub Pull Request Basics", link: "github-pull-request-basics", lab: false },
    { title: "Git Collaboration", link: "git-collaboration-readme", lab: false },
    { title: "Git Collaboration Quiz", link: "git-collaboration-quiz", lab: false },
    { title: "Git Basics Quiz", link: "git-github-learn-quiz", lab: false },
    ///3
    { title: "TDD Rspec And Learn", link: "intro-to-tdd-rspec-and-learn-v-000", lab: true },

    /// Intro to Ruby Dev3
    { title: "Intro to Tic Tac Toe", link: "intro-to-tic-tac-toe-rb", lab: false },
    { title: "MINSWAN- Yukihuro Matsumoto", link: "matz-readme", lab: false },
    { title: "What is a Program?", link: "ruby-lecture-intro-what-is-a-program", lab: false },
    { title: "Hello World", link: "hello-world-ruby-v-000", lab: true },
    ////2
    { title: "Intro to IRB", link: "irb-readme", lab: false },
    { title: "Reading Error Messages", link: "ruby-lecture-reading-error-messages-v-000", lab: true },
    ////3
    { title: "About Variable Assignment", link: "variable-readme", lab: false },
    { title: "Variable Assignment Lab", link: "ruby-variable-assignment-v-000", lab: true },
    { title: "Ruby Data Types", link: "data-types-readme", lab: false },
    { title: "Array Basics", link: "array-readme-qualifying", lab: false },
    { title: "Tic Tac Toe Board", link: "ttt-2-board-rb-v-000", lab: true },
    ////
    { title: "Intro to Methods", link: "ruby-methods-readme-v-000", lab: true },
    { title: "String Interpolation", link: "interpolation-readme", lab: false },
    { title: "Puts and Return", link: "puts-print-and-return-readme", lab: false },
    { title: "Display Tic Tac Toe Board Example", link: "ttt-3-display_board-example-v-000", lab: true },
    { title: "Methods and Arguments", link: "ruby-arguments-readme", lab: false },
    { title: "Default Arguments", link: "methods-default-arguments", lab: false },
    { title: "Say Hello", link: "say-hello-ruby-v-000", lab: true },
    { title: "Interpolation Super Power", link: "interpolation-super-power-v-000", lab: true },
    { title: "Display Tic Tac Toe Board", link: "ttt-4-display-board-rb-v-000", lab: true },
    ////
    { title: "Intro to CLI Applications", link: "intro-to-cli-applications", lab: false },
    { title: "CLI Applications in Ruby", link: "ruby-cli-applications-readme", lab: false },
    { title: "gets CLI Input", link: "ruby-gets-input-v-000", lab: true },
    { title: "Greeting CLI Lab", link: "greeting-cli-v-000", lab: true },
    { title: "Tic Tac Toe Move", link: "ttt-5-move-rb-v-000", lab: true },
    ////
    { title: "Truthiness", link: "truthiness-in-ruby-readme", lab: false },
    { title: "Booleans", link: "booleans-ruby-readme", lab: false },
    { title: "About Ruby Conditionals", link: "conditional-readme", lab: false },
    { title: "Rspec Fizzbuzz", link: "rspec-fizzbuzz-v-000", lab: true },
    { title: "Tic Tac Toe Position Taken", link: "ttt-6-position-taken-rb-v-000", lab: true },
    { title: "Valid Tic Tac Toe Move", link: "ttt-7-valid-move-v-000", lab: true },
    ////
    { title: "Intro to Loops", link: "looping-introduction", lab: false },
    { title: "Loops", link: "looping-readme", lab: false },
    { title: "While and Until Loops", link: "while-and-until-looping-readme", lab: false },
    { title: "While and Until Loops Lab", link: "looping-while-until-v-000", lab: true },
    { title: "Tic Tac Toe Turn", link: "ttt-8-turn-v-000", lab: true },
    { title: "Tic Tac Toe Play Loop", link: "ttt-9-play-loop-v-000", lab: true },
    ////
    { title: "Iteration and Abstraction", link: "iterators-and-abstraction-ruby", lab: false },
    { title: "Intro to Ruby Iterators", link: "intro-to-ruby-iterators", lab: false },
    { title: "Tic Tac Toe Current Player", link: "ttt-10-current-player-v-000", lab: true },
    ////
    { title: "Nested Arrays", link: "nested-arrays-ruby", lab: false },
    { title: "Boolean Enumerables", link: "ruby-boolean-enumerables", lab: false },
    { title: "Search Enumerables", link: "ruby-search-enumerators", lab: false },
    { title: "Tic Tac Toe Game Status", link: "ttt-game-status-v-000", lab: true },
    { title: "Tic Tac Toe in Ruby", link: "tic-tac-toe-rb-v-000", lab: true },
    //Intro to HTML
    { title: "Transitioning from Ruby to HTML", link: "phrg-transitioning-from-ruby-to-html", lab: false },
    { title: "A Quick Tour of the Web", link: "a-quick-tour-of-the-web", lab: false },
    { title: "Welcome To HTML", link: "welcome-to-html-readme", lab: false },
    { title: "Files And Filetypes", link: "files-and-filetypes-readme", lab: false },
    { title: "Experiencing HTML Lab", link: "experiencing-html-lab-v-000", lab: true },
    ////
    { title: "Crafting HTML Documents", link: "crafting-html-docs-readme", lab: false },
    { title: "HTML Introduction", link: "html-introduction-novideo", lab: false },
    { title: "First HTML Tag Lab", link: "first-html-tag-lab-v-000", lab: true },
    { title: "Well Formed HTML Document Lab", link: "well-formed-html-document-lab-v-000", lab: true },
    { title: "Nested Tags And Attributes", link: "nested-tags-and-attributes", lab: false },
    { title: "Anchor Tag with HREF Attribute Lab", link: "a-tag-with-href-attributes-lab-v-000", lab: true },
    { title: "HTML Elements Types Overview", link: "html-elements", lab: false },
    { title: "Researching HTML Elements", link: "researching-HTML-elements", lab: false },
    ////
    { title: "Separation Of Content And Presentation", link: "separation-of-content-and-presentation", lab: false },
    { title: "Introduction to CSS", link: "introduction-to-css", lab: false },
    { title: "Introduction to CSS Lab", link: "introduction-to-css-lab-v-000", lab: true },
    ////
    { title: "Transitioning Back to Ruby", link: "transitioning-back-to-ruby", lab: false },
    ////
    //Proc Ruby05
    { title: "What's a Pattern", link: "regex-what-is-a-pattern", lab: false },
    { title: "Regex Basics", link: "regex-basics-readme", lab: false },
    { title: "Ruby Methods with Regex", link: "regex-match-scan-grep-methods-readme", lab: false },
    { title: "Regex Lab", link: "regex-lab-v-000", lab: true },
    ////
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
    ////
    { title: "Booleans and Truthiness in Ruby", link: "truthiness-in-ruby-readme", lab: false },
    { title: "Boolean Operations", link: "booleans-ruby-readme", lab: false },
    { title: "Truthiness Code Challenge", link: "truthiness-code-challenge", lab: false },
    ////
    { title: "If Statements", link: "conditional-readme", lab: false },
    { title: "If Statements Lab", link: "speaking-grandma-v-000", lab: true },
    { title: "Ternary Operators and Statement Modifiers", link: "operators-v-000", lab: true },
    { title: "If Statements Quiz", link: "conditional-operators-quiz", lab: false },
    { title: "Case Statements", link: "case-statements-readme", lab: false },
    { title: "Case Statements Quiz", link: "case-statements-quiz", lab: false },
    { title: "Logic and Conditionals Quiz", link: "conditional-quiz-vowels", lab: false },
    ////
    { title: "Intro to Loops", link: "looping-introduction", lab: false },
    { title: "Looping", link: "looping-readme", lab: false },
    { title: "Looping Lab", link: "looping-loop", lab: true },
    { title: "Times", link: "looping-times-v-000", lab: true },
    { title: "Looping Quiz", link: "looping-quiz", lab: false },
    { title: "While and Until Loops", link: "while-and-until-looping-readme", lab: false },
    { title: "While and Until Loops Lab", link: "looping-while-until-v-000", lab: true },
    { title: "Countdown to Midnight Lab", link: "countdown-to-midnight-v-000", lab: true },
    ////
    { title: "Intro to Arrays", link: "array-introduction", lab: false },
    { title: "Using Arrays", link: "array-readme", lab: false },
    { title: "Using Arrays Lab", link: "array-CRUD-lab-v-000", lab: true },
    { title: "Arrays and Methods", link: "array-methods-readme", lab: false },
    { title: "Arrays and Methods Lab", link: "array-methods-lab-v-000", lab: true },
    ////
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
    ////
    { title: "Introduction to Hashes", link: "hash-overview-readme", lab: false },
    { title: "Using Hashes", link: "my-first-hash-v-000", lab: true },
    { title: "Symbols", link: "ruby-symbols", lab: false },
    { title: "Hash Iteration with Each", link: "hash-iteration-v-000", lab: true },
    { title: "Hash Iteration with Collect", link: "hash-iteration-collect", lab: true },
    { title: "Hash Iteration Lab", link: "key-for-min-value-v-000", lab: true },
    ///
    { title: "Intro to Nested Hashes", link: "nested-hashes-intro", lab: false },
    { title: "Building Nested Hashes", link: "building-nested-hash-readme", lab: false },
    { title: "Building Nested Hashes Lab", link: "building-nested-hashes-v-000", lab: true },
    { title: "Nested Hashes Lab", link: "ruby-intro-to-hashes-lab-v-000", lab: true },
    { title: "Multitype Collections Lab", link: "simple-nesting-v-000", lab: true },
    { title: "Nested Hash Iteration", link: "nested-hash-iteration", lab: false },
    { title: "Iterating over Nested Hashes Codealong", link: "nested-hash-iteration-code-along-v-000", lab: true },
    { title: "Other Hashes Codealong", link: "other-hash-methods-code-along-v-000", lab: true },
    { title: "Hashes Manipulation Lab", link: "apples-and-holidays-v-000", lab: true },
    ////
    // OO Ruby6 first repo missing
    { title: "Intro to Object Orientation", link: "uci-mod-3-introduction-to-object-orientation", lab: false },
    { title: "OO Ruby Video: Object Orientation Overview", link: "oo-ruby-video-object-orientation-overview", lab: false },
    //// classes/instances
    { title: "Intro to Classes and Instances", link: "ruby-intro-to-classes-and-instances", lab: false },
    { title: "Classes and Instances Lab", link: "classes-and-instances-lab-ruby-v-000", lab: true },
    //// instance methods
    { title: "Instance Methods", link: "instance-methods-readme-ruby", lab: false },
    { title: "Instance Methods Lab", link: "instance-methods-lab-ruby-v-000", lab: true },
    //// obj props
    { title: "Instance Variables", link: "ruby-instance-variables-lab-v-000", lab: true },
    { title: "Barking Dog Lab", link: "oo-barking-dog-v-000", lab: true },
    { title: "Object Attributes", link: "ruby-object-attrs-readme", lab: false },
    { title: "Object Attributes Lab", link: "ruby-object-attributes-lab-v-000", lab: true },
    { title: "Object Accessors", link: "ruby-oo-macros-readme", lab: false },
    { title: "Meowing Cat", link: "oo-meowing-cat-v-000", lab: true },
    { title: "Video Review: Object Properties", link: "oo-ruby-video-review-object-properties", lab: false },
    ////
    { title: "Object Initialization", link: "ruby-initialization", lab: false },
    { title: "Object Initialization Lab", link: "ruby-object-initialize-lab-v-000", lab: true },
    { title: "OO Basics", link: "oo-basics-v-000", lab: true },
    { title: "OO Basics with Class Constants", link: "oo-basics-with-class-constants-v-000", lab: true },
    { title: "OO School Domain", link: "school-domain-v-000", lab: true },
    ////
    { title: "Intro to Object Orientation Ruby", link: "intro-to-object-orientation-ruby", lab: false },
    ////
    { title: "Self", link: "ruby-self-readme", lab: false },
    { title: "OO Counting Sentences", link: "oo-counting-sentences-v-000", lab: true },
    //// 
    { title: "Class Variables and Methods", link: "ruby-class-variables-and-class-methods-readme", lab: false },
    { title: "Class Variables and Methods Lab", link: "ruby-class-variables-and-class-methods-lab-v-000", lab: true },
    { title: "Private Methods", link: "ruby-public-private-methods-readme", lab: false },
    ////
    { title: "Remembering Objects", link: "ruby-remembering-objects-readme", lab: false },
    { title: "Puppy Lab", link: "ruby-puppy-v-000", lab: true },
    { title: "Advanced Class Methods", link: "ruby-advanced-class-methods-readme", lab: false },
    { title: "Advanced Class Methods Lab", link: "ruby-advanced-class-methods-lab-v-000", lab: true },
    { title: "Video Review: Object Models", link: "oo-ruby-video-review-object-models", lab: false },
    ////
    { title: "Procedural vs Object Oriented Ruby", link: "procedural-vs-oo-ruby", lab: false },
    { title: "OO Tic Tac Toe", link: "oo-tic-tac-toe-v-000", lab: true },
    ////
    { title: "OO Email Parser", link: "oo-email-parser-v-000", lab: true },
    { title: "OO Anagram Detector", link: "anagram-detector-v-000", lab: true },
    { title: "OO Cash Register", link: "oo-cash-register-v-000", lab: true },
    ////
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
    ////


    // SQL
    { title: "What is SQL", link: "sql-topic-introduction", lab: false },
    ////
    { title: "SQL Intro and Installation", link: "sql-intro-and-installation-readme", lab: false },
    { title: "SQL Database Basics", link: "sql-database-basics-readme", lab: false },
    { title: "SQL Databases and Text Editors", link: "sql-databases-and-text-editors-readme", lab: false },

    // ORMs and ActiveRecord8
    { title: "Why an ORM is Useful", link: "ruby-orm", lab: false },


    // React15
    { title: "Intro To Npm Readme", link: "intro-to-npm-readme", lab: false },





]

module.exports = data

