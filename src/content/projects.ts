export interface Project {
  title: string;
  domain: string;
  year: string;
  /** Challenge → approach → result. What the problem actually was. */
  challenge: string;
  approach: string;
  result: string;
  tags: string[];
  href?: string;
}

export const projects: Project[] = [
  {
    title: "RoboProf",
    domain: "NLP · Knowledge graphs",
    year: "2023",
    challenge:
      "University course queries were answered by hand from scattered PDFs, outlines and slide decks. A plain language model answered fluently and wrongly, because nothing tied its output to an actual document.",
    approach:
      "Rasa NLU for intent, Apache Tika to ingest course material, and an RDF ontology queried over SPARQL so every answer is retrieved from a source rather than generated from recall.",
    result:
      "Grounded responses that cite the course record they came from, with unanswerable questions returning nothing instead of a confident invention.",
    tags: ["Rasa NLU", "SPARQL", "RDF", "Apache Tika", "Python"],
  },
  {
    title: "ASL Alphabet Classification",
    domain: "Computer vision",
    year: "2023",
    challenge:
      "American Sign Language letters differ by small hand-shape changes, and several pairs are near-identical from a single fixed camera angle.",
    approach:
      "A convolutional classifier in PyTorch over the ASL alphabet set, with augmentation for rotation and lighting to stop the model keying on background rather than hand shape.",
    result:
      "A working alphabet classifier, and a clear read on which letter pairs the confusion matrix says a single-frame model cannot separate.",
    tags: ["PyTorch", "CNN", "Computer Vision", "Python"],
  },
  {
    title: "Auction Avenue",
    domain: "Cloud application",
    year: "2022",
    challenge:
      "Build a multi-user bidding platform where concurrent bids on the same lot cannot corrupt the auction state.",
    approach:
      "Django MVT with server-side bid validation and transactional writes, deployed to Heroku with SQLite for the initial rollout.",
    result:
      "An end-to-end auction flow — listing, bidding, closing — with bid ordering enforced at the database rather than in the view.",
    tags: ["Django", "Python", "SQLite", "Heroku"],
  },
  {
    title: "Graph Colouring on Online Graphs",
    domain: "Algorithms research",
    year: "2023",
    challenge:
      "Online graph colouring must commit to a colour before seeing the rest of the graph. The question was how badly First Fit degrades against CBIP on bipartite inputs.",
    approach:
      "Implemented both algorithms, generated bipartite online instances across sizes and arrival orders, and measured colours used against the offline optimum.",
    result:
      "Empirical competitive ratios for both, confirming where First Fit's worst case actually bites versus where it is fine in practice.",
    tags: ["Algorithms", "Python", "Research"],
  },
];
