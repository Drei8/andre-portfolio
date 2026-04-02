import { Mail, Linkedin, Phone } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/data";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: portfolioData.email,
    href: `mailto:${portfolioData.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "andre-jhon-a-413aafaf21",
    href: portfolioData.linkedin,
  },
  {
    icon: Phone,
    label: "Phone",
    value: portfolioData.phone,
    href: `tel:${portfolioData.phone.replace(/\s/g, "")}`,
  },
];

export function Contact() {
  return (
    <Card className="animate-fade-in [animation-delay:400ms] opacity-0">
      <CardHeader>
        <CardTitle>Get in touch</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {links.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3 py-1.5 text-sm hover:text-foreground text-foreground/70 transition-colors group"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-muted group-hover:bg-accent transition-colors">
              <Icon className="h-3.5 w-3.5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="text-sm font-medium truncate">{value}</p>
            </div>
          </a>
        ))}
      </CardContent>
    </Card>
  );
}
