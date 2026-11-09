export const site = {
  name: "IRIS PANG",
  shortName: "IRIS",
  pillars: ["Technology", "Media", "Community"] as const,
  statement: "Where Consciousness Creates the World.",
  statementLead: "Where Consciousness",
  statementAccent: "Creates",
  statementTail: "the World.",
  dek: "A space for ideas, conversations and collective creation at the intersection of consciousness, technology and human civilization.",
  description:
    "Iris Pang — a personal editorial space for conversations, writing and community at the intersection of technology, media and consciousness.",
  keywords: ["Ideas", "People", "Technology", "Culture", "Civilization"] as const,
};

export const navItems = [
  { href: "/conversations", label: "Conversations" },
  { href: "/journal", label: "Journal" },
  { href: "/community", label: "Community" },
  { href: "/experiences", label: "Experiences" },
  { href: "/about", label: "About" },
] as const;

export const enquiryTypes = [
  { id: "hello", label: "Say hello" },
  { id: "story", label: "Share a story" },
  { id: "conversation", label: "Invite a conversation" },
  { id: "collaboration", label: "Collaboration" },
] as const;
