/* ============================================================
   CHALLENGE CONTENT — the only file you edit to change the course.
   - Prompts: edit the text below.
   - Datasets: drop the CSV into the /datasets folder and list it here.
   ============================================================ */
const CHALLENGE = {
  days: [
    {
      id: 1, title: "Meet Claude",
      goal: "Learn a simple prompt structure and get your first genuinely useful answers.",
      duration: "45–60 min",
      objective: "Understand how role, context, task and format shape Claude's output, and practise rewriting a weak prompt into a strong one.",
      prompts: [
        { title: "The four-part prompt formula",
          text: "You are an experienced [ROLE].\nContext: [who I am and why I need this].\nTask: [exactly what you want done].\nFormat: [length, structure, tone]." },
        { title: "Explain it simply",
          text: "Explain what a large language model is to a 12-year-old in 5 bullet points, then give one everyday analogy." },
        { title: "Improve my prompt",
          text: "Here is my prompt: [paste your prompt].\nRewrite it to be clearer and more specific, then explain the three changes you made and why." }
      ],
      datasets: [
        { name: "weak_prompts.csv", file: "datasets/weak_prompts.csv",
          description: "10 vague prompts to rewrite using the four-part formula." }
      ],
      tasks: ["Read the four-part prompt formula","Run the 'Explain it simply' prompt","Download weak_prompts.csv and rewrite 3 of the prompts","Rewrite one of your own prompts using the formula"]
    },
    {
      id: 2, title: "Write Better",
      goal: "Use Claude to summarise, rewrite and sharpen everyday writing.",
      duration: "60 min",
      objective: "Turn messy notes into clear actions, adapt one message to several tones, and get specific editorial feedback.",
      prompts: [
        { title: "Summarise meeting notes",
          text: "Summarise the notes below into:\n1) Decisions made\n2) Action items with owners\n3) Open questions\n\nNotes:\n[paste notes]" },
        { title: "Tone shifter",
          text: "Rewrite this message three ways: formal, friendly and direct. Keep each version under 80 words.\n\nMessage:\n[paste message]" },
        { title: "Critique my draft",
          text: "Act as a sharp editor. List the 5 weakest sentences in this draft, explain why each is weak, and show a fixed version.\n\nDraft:\n[paste draft]" }
      ],
      datasets: [
        { name: "meeting_notes.csv", file: "datasets/meeting_notes.csv",
          description: "6 sets of messy raw meeting notes to summarise." }
      ],
      tasks: ["Download meeting_notes.csv and summarise two meetings","Create three tone versions of one message","Get editorial feedback on a draft"]
    },
    {
      id: 3, title: "Analyse Data",
      goal: "Go from a raw spreadsheet to clear insights with Claude as your analyst.",
      duration: "75 min",
      objective: "Profile a dataset, find the story in the numbers, and get chart recommendations with code you can run.",
      prompts: [
        { title: "Profile the dataset",
          text: "Here is a CSV of Q3 sales (paste or attach it). Describe each column, check for missing values or outliers, and list the questions this data can answer." },
        { title: "Find the story",
          text: "Identify the top 3 regions by revenue and the month-over-month trend for each. Show the calculation behind every figure." },
        { title: "Chart it",
          text: "Suggest the best chart type for revenue by region and product, then write Python (matplotlib) code to draw it with clear titles and labels." }
      ],
      datasets: [
        { name: "sales_q3.csv", file: "datasets/sales_q3.csv",
          description: "12 rows of monthly sales by region and product (July–September)." }
      ],
      tasks: ["Download sales_q3.csv","Run the profiling prompt","Find the top 3 regions and their trends","Generate and run the chart code"]
    },
    {
      id: 4, title: "Build a Tool",
      goal: "Turn an idea into a working single-file web app with Claude.",
      duration: "90 min",
      objective: "Generate a complete HTML app, improve it through iteration, and review it for bugs and risks.",
      prompts: [
        { title: "Single-file HTML app",
          text: "Build a single-file HTML habit tracker with a clean modern design, saved progress in localStorage, and a weekly progress summary. Return the complete code only." },
        { title: "Iterate on it",
          text: "Update the code above to add dark mode, keyboard shortcuts and accessibility labels. Explain what changed." },
        { title: "Review for issues",
          text: "Review this code for bugs, security risks and performance problems. Rank each issue by severity and show the fix." }
      ],
      datasets: [
        { name: "habit_log.csv", file: "datasets/habit_log.csv",
          description: "14 days of sample habit check-ins to test your tracker with." }
      ],
      tasks: ["Generate the habit tracker","Open it in your browser and test it","Ask for one improvement and apply it","Run the review prompt"]
    },
    {
      id: 5, title: "Capstone",
      goal: "Combine everything you have learned into one real project.",
      duration: "2 hours",
      objective: "Plan a real task you own, build a working solution, test it, and present the result clearly.",
      prompts: [
        { title: "Plan the project",
          text: "I want to automate [describe your task]. Ask me up to 5 clarifying questions first, then produce a step-by-step plan with time estimates." },
        { title: "Build and test",
          text: "Create the solution based on this plan. Then write 5 test cases that prove it works, including one edge case." },
        { title: "Present the result",
          text: "Turn my project summary into a 5-slide outline: problem, approach, result, lessons learned and next steps." }
      ],
      datasets: [
        { name: "support_tickets.csv", file: "datasets/support_tickets.csv",
          description: "12 customer support tickets — a ready-made task to automate (categorise and prioritise)." }
      ],
      tasks: ["Answer Claude's planning questions","Build the solution","Pass all five test cases","Write your 5-slide summary"]
    }
  ]
};
