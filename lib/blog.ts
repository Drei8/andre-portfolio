export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: number;
  tags: string[];
  body: { type: "h2" | "p"; text: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cnn-lessons",
    title: "What Building a CNN Taught Me About Software Engineering",
    date: "March 15, 2026",
    excerpt:
      "Most people think machine learning is about math. After building a CNN for my thesis, I learned it is mostly about discipline, patience, and a new kind of debugging.",
    readTime: 4,
    tags: ["AI/ML", "Python", "Computer Vision"],
    body: [
      {
        type: "p",
        text: "Most people think machine learning is about math. After spending months building a convolutional neural network for my thesis — classifying vehicles into five categories for a cashless toll gate system — I learned it is mostly about discipline, patience, and debugging in ways that feel completely different from traditional software.",
      },
      {
        type: "h2",
        text: "The Debugging Is Different",
      },
      {
        type: "p",
        text: "In regular software, bugs are usually traceable. A variable holds the wrong value, a function returns null, a network request fails. With CNNs, bugs are silent. Your model trains, your loss curve looks reasonable, and then your validation accuracy stalls at 62% with no clear explanation. Is it the architecture? The learning rate? The dataset quality? The preprocessing pipeline? You rarely know which one broke things — so you change one variable at a time and wait hours for a result.",
      },
      {
        type: "p",
        text: "That process taught me to be more systematic than I had ever been. I started keeping a training log — not just loss and accuracy, but every hyperparameter change, every dataset modification, and why I made each decision. That habit has since carried over into how I approach regular software projects.",
      },
      {
        type: "h2",
        text: "Data Is the Real Codebase",
      },
      {
        type: "p",
        text: "Before I wrote a single model layer, I spent weeks cleaning and preparing the COCO dataset subset for vehicle categories. Annotation inconsistencies, class imbalance, image resolution variance — all of it compounds into noise that your model will faithfully learn. I started treating the dataset like source code: version-controlled, documented, and validated before any training run.",
      },
      {
        type: "p",
        text: "This changed how I think about data in all software. Whether it is a database schema, an API response shape, or a form input — the quality of data flowing through a system determines the quality of the output. Garbage in, garbage out applies everywhere.",
      },
      {
        type: "h2",
        text: "Metrics Lie a Little",
      },
      {
        type: "p",
        text: "Achieving high training accuracy felt like a milestone. Then I ran inference on real tollgate footage and watched it misclassify a motorcycle as a tricycle under rain conditions. That gap between benchmark accuracy and production performance is where real engineering lives. It pushed me to evaluate differently — not just overall accuracy, but precision per class, confusion matrices, and edge cases that the benchmark never surfaced.",
      },
      {
        type: "h2",
        text: "What It Gave Me",
      },
      {
        type: "p",
        text: "Building that CNN changed how I approach all software. I think more carefully about data before code, I separate concerns more strictly, and I have a lot more patience for things that fail without obvious error messages. Machine learning taught me to be a more methodical engineer — and that is a skill that transfers everywhere.",
      },
    ],
  },
  {
    slug: "ai-integration",
    title: "Why I Started Integrating AI Into Everything I Build",
    date: "February 20, 2026",
    excerpt:
      "A year ago, AI felt like a separate discipline — something you studied, not something you shipped. That changed when I realized how small the integration surface actually is.",
    readTime: 3,
    tags: ["AI", "Full-Stack", "Generative AI"],
    body: [
      {
        type: "p",
        text: "A year ago, AI felt like a separate discipline — something you studied in papers and trained in notebooks, not something you casually shipped into a production app. That changed when I started building with generative AI APIs and realized how small the actual integration surface is.",
      },
      {
        type: "h2",
        text: "The Shift from Studying AI to Using It",
      },
      {
        type: "p",
        text: "Most of my early AI experience was academic — training models, reading research papers, implementing architectures from scratch. Then I started building full-stack applications with LLM APIs, and the mental model shifted entirely. You stop thinking about weights, gradients, and activation functions, and you start thinking about prompts, context windows, latency budgets, and output validation.",
      },
      {
        type: "p",
        text: "The chatbot in this portfolio is a simple example of that shift. It is not a fine-tuned model — it is a well-prompted API call with a context window that includes my portfolio data. The AI does not know me by training; it knows me because I told it about me. That distinction matters for how you architect these systems.",
      },
      {
        type: "h2",
        text: "What It Actually Looks Like in a Full-Stack App",
      },
      {
        type: "p",
        text: "AI features behave like any other feature in a real application: they need error handling, fallbacks, rate limit awareness, and enough speed not to frustrate the user. The difference is that they are non-deterministic. The same input can produce meaningfully different outputs. You cannot unit test them the way you would a pure function, and you have to design around that uncertainty from the start.",
      },
      {
        type: "p",
        text: "In practice, this means validating outputs before displaying them, building graceful fallbacks for when the model returns something unexpected, and being honest with users about what they are interacting with.",
      },
      {
        type: "h2",
        text: "Why I Will Keep Doing It",
      },
      {
        type: "p",
        text: "The tools are good enough now that the integration cost is low and the value ceiling is genuinely high. I do not add AI to things for the sake of it. But when it solves a real problem faster or better than a deterministic approach — a smarter search, a more helpful assistant, a faster first draft of something — I use it. That is just good engineering judgment.",
      },
    ],
  },
  {
    slug: "intern-to-fullstack",
    title: "What a Real Codebase Taught Me",
    date: "January 10, 2026",
    excerpt:
      "I expected to fix bugs and write small features. I did not expect to own a document management system within the first few weeks. Here is what that experience taught me.",
    readTime: 5,
    tags: ["Career", "Full-Stack", "ASP.NET"],
    body: [
      {
        type: "p",
        text: "Starting as an intern at State Properties Corporation, I expected to fix bugs and write small features under close supervision. What I did not expect was to be handed ownership of a document management system within the first few weeks. That experience taught me more about software engineering than any course had.",
      },
      {
        type: "h2",
        text: "Reading Code Is a Skill",
      },
      {
        type: "p",
        text: "The first thing I had to do was understand an existing ASP.NET MVC codebase I had never seen before. No documentation, no onboarding guide, no previous developer to ask. I learned to trace execution paths, identify patterns in how the codebase was structured, and resist the urge to rewrite things I did not fully understand yet.",
      },
      {
        type: "p",
        text: "Reading unfamiliar code is genuinely difficult, and nobody talks about it enough. Schools teach you to write code. Real jobs require you to read it first. The sooner you accept that navigating someone else's decisions is a core engineering skill, the faster you grow.",
      },
      {
        type: "h2",
        text: "Translating Technical Problems for Non-Technical People",
      },
      {
        type: "p",
        text: "In school, everyone in the room has roughly the same context. In a real team, you constantly translate technical problems into language that makes sense to stakeholders who do not think in terms of queries and procedures. A stored procedure with a race condition becomes 'the report sometimes shows incorrect totals when two people submit at the same time.' Getting that translation right is its own skill, and it is one that directly affects how much trust you build with the people you work for.",
      },
      {
        type: "h2",
        text: "The Value of Boring Solutions",
      },
      {
        type: "p",
        text: "When you are new, there is a temptation to reach for the most elegant or technically interesting solution to every problem. Real production systems reward boring and reliable. An additional index on a SQL Server table fixed a query that was taking eight seconds to run. Not a refactor, not a new architecture — one line of SQL. That experience taught me to profile first, assume nothing, and appreciate solutions that do not require explanation.",
      },
      {
        type: "h2",
        text: "What I Carry Forward",
      },
      {
        type: "p",
        text: "The confidence to navigate unfamiliar codebases. The habit of asking why before how. The understanding that communication is as important as the code itself. I would not trade that internship experience for any number of solo side projects. The real world teaches you things that a controlled environment simply cannot.",
      },
    ],
  },
  {
    slug: "pose-estimation",
    title: "Pose Estimation and Body Measurement: How We Hit 95% Accuracy",
    date: "December 5, 2025",
    excerpt:
      "Getting a machine to measure a human body reliably sounded harder than it turned out to be — mostly because MediaPipe BlazePose did the heavy lifting.",
    readTime: 4,
    tags: ["Computer Vision", "MediaPipe", "Python"],
    body: [
      {
        type: "p",
        text: "When my team proposed automating body measurements for an apparel sizing system using computer vision, the reaction was skeptical. Body measurement is tactile, subjective, and highly dependent on posture and clothing. Getting a machine to do it reliably sounded like a research project, not a semester deliverable. It turned out to be more approachable than we expected — mostly because MediaPipe BlazePose did the heavy lifting on the vision side.",
      },
      {
        type: "h2",
        text: "Why BlazePose",
      },
      {
        type: "p",
        text: "We evaluated several approaches: depth cameras, custom keypoint detectors, and pre-trained pose estimation models. BlazePose won on three criteria: it runs in real-time on standard consumer hardware, it provides 33 anatomically meaningful body landmarks with solid out-of-the-box accuracy, and the Python API is clean enough to iterate on quickly. We were not trying to build a pose estimator — we were trying to measure bodies. BlazePose let us stay focused on that actual problem.",
      },
      {
        type: "h2",
        text: "The Measurement Pipeline",
      },
      {
        type: "p",
        text: "The core challenge was converting pixel-space landmark distances to real-world centimeters. We used a reference object in the frame — a standard card of known width held at chest height — to establish a pixels-per-centimeter ratio. From there, measuring shoulder width, chest circumference approximation, and inseam became a series of geometric calculations on the 2D landmark coordinates. The math is straightforward once the calibration step is solid.",
      },
      {
        type: "p",
        text: "We built the pipeline as a Flask web application, accepting both live camera input and uploaded images. The output was a measurement table alongside a wireframe overlay of the detected landmarks, which gave users visual confirmation that the system was reading their body correctly.",
      },
      {
        type: "h2",
        text: "Where the 5% Error Lives",
      },
      {
        type: "p",
        text: "Our 95% accuracy across 20 test subjects sounds clean. The remaining 5% breaks into two consistent patterns: loose or layered clothing that changes apparent body contour, and subjects standing at a slight angle to the camera. Both are solvable — multi-angle capture, clothing detection as a preprocessing step — but we scoped those solutions out for the initial version. Knowing precisely where your error comes from is as valuable as the accuracy number itself.",
      },
      {
        type: "h2",
        text: "The Broader Lesson",
      },
      {
        type: "p",
        text: "We did train other models such as YOLOv8-Pose-M, and HRNet-W32 followed by doing sensitivity analysis and trade-offs of each constraints(metrics) between these models but ended up using BlazePose because it offers the most robust performance under diverse evaluation priorities, making it well-suited for general-purpose use. By this information, we built a measurement system on top of an existing one and spent our engineering time on the domain problem — the geometry and calibration math — rather than the vision problem. That is the right way to use pre-trained models. Identify what the model already solves reliably, build on that foundation, and direct your effort toward the part that is actually specific to your problem.",
      },
    ],
  },
  {
    slug: "typescript-mindset",
    title: "Why TypeScript Changed How I Think About Code",
    date: "November 12, 2025",
    excerpt:
      "I resisted TypeScript longer than I should have. Adding types felt like extra work for the same output. I was wrong — not about the types, but about what they are actually for.",
    readTime: 3,
    tags: ["TypeScript", "JavaScript", "Developer Experience"],
    body: [
      {
        type: "p",
        text: "I resisted TypeScript longer than I should have. Adding type annotations felt like extra work for the same runtime output. Now, after several production applications built with it, I cannot imagine going back. Not primarily because types catch bugs — though they do — but because they force a kind of thinking that makes code genuinely better to write and to read.",
      },
      {
        type: "h2",
        text: "Types as Documentation",
      },
      {
        type: "p",
        text: "The most underrated benefit of TypeScript is not error catching at compile time. It is the self-documenting behavior of typed code. When I look at a function that accepts a UserProfile and returns a Promise of DashboardData, I understand the contract immediately without reading the implementation. No comment block needed, no mental model to reconstruct from reading the body. The types are the documentation, and unlike comments, they stay accurate because the compiler enforces them.",
      },
      {
        type: "h2",
        text: "The Refactoring Confidence",
      },
      {
        type: "p",
        text: "The moment TypeScript clicked for me was the first time I renamed a field in a shared data model and watched the compiler instantly surface every single usage across a 40-file codebase that needed to change. In plain JavaScript, that same refactor would have been a grep exercise followed by manual testing and a reasonable amount of prayer. That is not a small difference — it changes how willing you are to clean up technical debt and how confident you feel making structural changes.",
      },
      {
        type: "h2",
        text: "Where It Gets Uncomfortable",
      },
      {
        type: "p",
        text: "TypeScript is not free. Complex generic types can become harder to reason about than the code they are meant to describe. Third-party libraries with incomplete type definitions create friction at the worst moments. And there is a real risk of over-typing things — writing elaborate type machinery for problems that a simpler runtime check or a well-named variable would solve just as well. The skill is knowing when to lean on the type system and when the marginal benefit is not worth the complexity.",
      },
      {
        type: "h2",
        text: "The Mindset Shift",
      },
      {
        type: "p",
        text: "TypeScript did not just change my tooling. It changed how I think about the interfaces between systems, the contracts that functions make with their callers, and the importance of making intent explicit and machine-verifiable in code. That mindset is portable. It makes you think more carefully even in languages and contexts without static types — which, it turns out, is most of the real world.",
      },
    ],
  },
];
