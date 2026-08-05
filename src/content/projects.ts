export interface Project {
  /**
   * The field a reader actually gains something from. These replaced a
   * decorative 01–04 counter: the projects are not a sequence, so numbering
   * them encoded nothing true about them.
   */
  domain: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href?: string;
  /** Bento emphasis — the two research-weight cards span two columns. */
  span?: string;
}

export const projects: Project[] = [
  {
    domain: "Natural language · Knowledge graphs",
    title: "RoboProf",
    subtitle: "Chatbot using intelligent systems",
    description:
      "Academic support chatbot that answers university-related queries by combining NLP, a knowledge graph and deep learning. Rasa NLU handles intent, SPARQL queries an RDF course ontology for grounded retrieval, and Apache Tika ingests lecture material. Answers are retrieved from the ontology rather than generated, so every response traces to a source.",
    tags: ["NLP", "Rasa NLU", "SPARQL", "Knowledge Graphs", "Deep Learning"],
    span: "md:col-span-2",
  },
  {
    domain: "Cloud application",
    title: "Auction Avenue",
    subtitle: "Hosted bidding platform",
    description:
      "Auction and bidding system on Django's MVT architecture with Python and SQLite3, deployed to Heroku.",
    tags: ["Django", "Python", "SQLite3", "Heroku"],
  },
  {
    domain: "Computer vision",
    title: "ASL Classification",
    subtitle: "American Sign Language recognition",
    description:
      "PyTorch image-classification model for ASL alphabet recognition, built to support more inclusive communication workflows.",
    tags: ["PyTorch", "Computer Vision", "Machine Learning"],
  },
  {
    domain: "Algorithms research",
    title: "Graph Colouring on Online Graphs",
    subtitle: "First Fit vs CBIP",
    description:
      "Empirical study of the First Fit and CBIP algorithms on bipartite online graphs, including implementation and competitive-ratio analysis.",
    tags: ["Algorithms", "Python", "Research"],
    span: "md:col-span-2",
  },
];
