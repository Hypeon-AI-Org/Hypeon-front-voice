import type { Metadata } from "next";
import PrivacyPageContent from "@/components/PrivacyPageContent";

export const metadata: Metadata = {
  title: "Privacy Policy - HypeOn-Voice",
  description: "How HypeOn-Voice collects, uses, and protects your information. Voice calls, recordings, and AI assistant data.",
};

export default function PrivacyPage() {
  return <PrivacyPageContent />;
}
