import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  
    { icon: Github, href: "https://github.com/Spandan-Shah" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/spandan-shah0312/" },
    { icon: Twitter, href: "https://twitter.com/your-username" },
    { icon: Mail, href: "mailto:spandanshah10@gmail.com" },
  
];

const Footer = () => (
  <footer className="border-t border-border bg-background py-12">
    <div className="container">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="font-jet text-lg tracking-widest">
            <span className="text-muted-foreground"></span>{" "}
            <span className="text-foreground">./PORTFOLIO</span>
            <span className="text-primary">.</span>
          </Link>
          <p className="mt-4 font-jet text-sm text-foreground leading-relaxed">
            Cybersecurity specialist dedicated to protecting digital assets and investigating cyber threats across the globe.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-jet text-md tracking-widest text-foreground">NAVIGATION</h4>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Portfolio", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="font-jet text-sm text-foreground transition-colors hover:text-primary"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

{/*
        <div>
          <h4 className="mb-4 font-jet text-md tracking-widest text-foreground">SERVICES</h4>
          <div className="flex flex-col gap-2">
            {["Cybersecurity", "Threat Analysis", "Criminal Investigations", "Digital Forensics"].map((s) => (
              <span key={s} className="font-jet text-sm text-foreground">{s}</span>
            ))}
          </div>
        </div>
*/}
        <div>
          <h4 className="mb-4 font-jet text-md tracking-widest text-foreground">CONNECT</h4>
          <div className="flex gap-4">

              {socialLinks.map(({icon: Icon, href}, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  <Icon size={20} />

                </a>  
              )
              )}
           

          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-center">
        <p className="font-sans text-sm text-muted-foreground">
          © 2026 Spandan Shah Portfolio. All rights reserved. Built with precision.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
