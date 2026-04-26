import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ YOUR GOOGLE SCRIPT URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbykSJDiDWlTwk-qJ8pawyjVD5uEneiLHxdtlNPBCYIXlUr6DpOlwzfoeNrCuU11SKYE/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;

    const serviceID = "service_jyhf51k";
    const templateID = "template_j323b8m";
    const publicKey = "fHlUQp1G8Rq5esZ23";

    try {
      // ✅ 1. SEND EMAIL
      await emailjs.sendForm(serviceID, templateID, form, publicKey);

      // ✅ 2. SEND DATA TO GOOGLE SHEETS (CORS SAFE)
      const formBody = new URLSearchParams();
      formBody.append("name", form.name.value);
      formBody.append("email", form.email.value);
      formBody.append("message", form.message.value);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // IMPORTANT
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });

      toast({
        title: "Message sent! ✅",
        description: "Saved in Google Sheets + Email sent 🚀",
      });

      form.reset();
    } catch (error) {
      console.error("Error:", error);

      toast({
        title: "Error ❌",
        description: "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind? Feel free to contact me.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="bg-card p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 border-b pb-2">
              Contact Info
            </h3>

            <div className="space-y-4 text-muted-foreground">
              <p>
                <Mail className="inline mr-2" />
                <a
                  href="mailto:ufaruque524@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  ufaruque524@gmail.com
                </a>
              </p>

              <p>
                <Phone className="inline mr-2" />
                <a
                  href="tel:+919122636896"
                  className="hover:text-primary transition-colors"
                >
                  +91 9122636896
                </a>
              </p>

              <p>
                <MapPin className="inline mr-2" />
                Ghaziabad, India
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-card p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 border-b pb-2">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full p-3 border rounded"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full p-3 border rounded"
              />

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                className="w-full p-3 border rounded"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full bg-primary text-white py-3 rounded flex justify-center items-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed",
                )}
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
