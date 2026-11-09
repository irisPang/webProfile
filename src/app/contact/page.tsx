import { PageShell } from "@/components/layout/PageShell";
import { enquiryTypes } from "@/lib/site";
import { pageTitle } from "@/lib/seo";

export const metadata = pageTitle("Contact");

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Every connection starts with a conversation."
      dek="For conversations, shared ideas and future collaborations. Contact details are coming soon."
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {enquiryTypes.map((item) => (
          <li key={item.id} className="border border-ink/10 px-5 py-6">
            <p className="font-serif text-2xl text-ink">{item.label}</p>
          </li>
        ))}
      </ul>
      <p className="mt-10 max-w-xl text-sm leading-6 text-ink/55">
        Enquiries are not open yet. In the meantime, explore the Journal and conversations.
      </p>
    </PageShell>
  );
}
