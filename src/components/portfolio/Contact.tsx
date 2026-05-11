import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Phone, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactLink = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  mintValue?: boolean;
};

const links: ContactLink[] = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/anushna-patra",
    href: "https://www.linkedin.com/in/anushna-patra",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "AnushnaPatra05",
    href: "https://github.com/AnushnaPatra05",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "anushnapatrashreya@gmail.com",
    href: "mailto:anushnapatrashreya@gmail.com",
    mintValue: true,
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch {
      setServerError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="reveal max-w-2xl mx-auto text-center mb-10">
          <div className="label-mint mb-3">Contact</div>
          <h2 className="text-3xl md:text-[36px] font-bold gradient-text mb-4">Let's connect</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Form (always visible) */}
          <div>
            {sent && (
              <div
                className="reveal mb-4 text-center"
                style={{
                  backgroundColor: "rgba(62,207,164,0.1)",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  border: "0.5px solid rgba(62,207,164,0.4)",
                }}
              >
                <p className="text-mint text-sm font-medium">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              </div>
            )}
            <form
              onSubmit={onSubmit}
              className="reveal glass-card"
              style={{ padding: "32px" }}
              noValidate
            >
              <div className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-foreground text-xs uppercase tracking-wider">
                    Name
                  </Label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    maxLength={100}
                    className="mt-1.5 glass-input"
                  />
                  {errors.name && <p className="text-sm text-destructive mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground text-xs uppercase tracking-wider">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    maxLength={255}
                    className="mt-1.5 glass-input"
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1.5">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground text-xs uppercase tracking-wider">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    rows={4}
                    maxLength={1000}
                    className="mt-1.5 glass-input resize-none"
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1.5">{errors.message}</p>
                  )}
                </div>
                <Button type="submit" size="lg" className="w-full glass-btn-primary" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send"
                  )}
                </Button>
                {serverError && (
                  <p className="text-sm text-destructive text-center">{serverError}</p>
                )}
              </div>
            </form>
          </div>

          {/* Right: Links */}
          <div className="reveal">
            <div className="space-y-5">
              {links.map(({ icon: Icon, label, value, href, external, mintValue }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-md grid place-items-center shrink-0"
                    style={{ backgroundColor: "rgba(62,207,164,0.1)" }}
                  >
                    <Icon className="w-5 h-5 text-mint" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-foreground text-sm font-medium">{label}</div>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`text-[13px] truncate block transition-smooth hover:text-mint ${
                        mintValue ? "text-mint" : ""
                      }`}
                      style={mintValue ? undefined : { color: "#A0A0A0" }}
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm" style={{ color: "#A0A0A0" }}>
              Open to frontend roles, freelance projects, and collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
