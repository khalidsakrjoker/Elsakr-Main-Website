export const contact = {
    title: "Project Inquiry",
    subtitle: "Submit your technical requirements.",
    form: {
      steps: ["Contact Info", "Project Scope", "Tech Needs", "Review"],
      fields: {
        name: "Full Name",
        email: "Work Email",
        company: "Organization",
        projectType: "Category",
        budget: "Budget Range",
        currency: "Currency",
        details: "Technical Specs",
        timeline: "Target Delivery"
      },
      types: ["Web App", "Mobile App", "AI Solution", "Cloud Migration", "Consultation"],
      currencies: ["USD", "EUR", "EGP", "AED"]
    },
    faq: [
      { q: "What's your engagement model?", a: "T&M for Agile projects, Fixed Price for well-defined scopes." },
      { q: "Do you provide source code ownership?", a: "Yes, upon final payment, you own 100% of the IP and source code." },
      { q: "What's your tech stack?", a: "We are tech-agnostic but prefer React/Node.js/Python/AWS ecosystems." },
      { q: "How do you handle data privacy?", a: "We sign NDAs and DPAs to ensure full compliance." }
    ]
  };
