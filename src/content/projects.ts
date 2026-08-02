export interface Project {
  /** Rendered as an oversized mono watermark behind the title. */
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href?: string;
  /** Bento emphasis — the first card spans two columns. */
  span?: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "RoboProf",
    subtitle: "Chatbot using intelligent systems",
    description:
      "Academic support chatbot that answers university-related queries by combining NLP, a knowledge graph and deep learning. Built with Rasa NLU for intent handling, SPARQL over an RDF course ontology for grounded retrieval, and Apache Tika to ingest lecture material.",
    tags: ["NLP", "Rasa NLU", "SPARQL", "Knowledge Graphs", "Deep Learning"],
    span: "md:col-span-2",
  },
  {
    number: "02",
    title: "Auction Avenue",
    subtitle: "Cloud-hosted bidding platform",
    description:
      "Auction and bidding system built on Django's MVT architecture with Python, SQLite3 and a hand-written HTML/CSS frontend, deployed to Heroku.",
    tags: ["Django", "Python", "SQLite3", "Heroku"],
  },
  {
    number: "03",
    title: "ASL Classification",
    subtitle: "American Sign Language recognition",
    description:
      "PyTorch image-classification model for ASL alphabet recognition, built to support more inclusive communication workflows.",
    tags: ["PyTorch", "Computer Vision", "Machine Learning"],
  },
  {
    number: "04",
    title: "Graph Colouring on Online Graphs",
    subtitle: "Algorithms research",
    description:
      "Empirical study of the First Fit and CBIP algorithms on bipartite online graphs, including implementation and competitive-ratio analysis.",
    tags: ["Algorithms", "Python", "Research"],
    span: "md:col-span-2",
  },
];
