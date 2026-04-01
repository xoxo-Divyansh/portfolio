import {
  FiArrowRight,
  FiArrowUpRight,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { usePortfolio } from "../Context/PortfolioProvider";

const getReadableLink = (url) => {
  if (!url) {
    return "";
  }

  try {
    const parsed = new URL(url);
    return parsed.pathname.replace(/^\/+/, "") || parsed.hostname;
  } catch {
    return url;
  }
};

const Contact = () => {
  const { contact, personal } = usePortfolio();
  const resumeUrl = contact.resume || personal.resume;
  const contactMethods = [
    {
      key: "email",
      label: "Email",
      value: contact.email,
      href: contact.email ? `mailto:${contact.email}` : "",
      icon: FiMail,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      value: getReadableLink(contact.linkedin),
      href: contact.linkedin,
      icon: FiLinkedin,
    },
    {
      key: "github",
      label: "GitHub",
      value: getReadableLink(contact.github),
      href: contact.github,
      icon: FiGithub,
    },
    {
      key: "resume",
      label: "Resume",
      value: "View current resume",
      href: resumeUrl,
      icon: FiFileText,
    },
    ...(contact.phone
      ? [
          {
            key: "phone",
            label: "Phone",
            value: contact.phone,
            href: `tel:${contact.phone.replace(/\s+/g, "")}`,
            icon: FiPhone,
          },
        ]
      : []),
  ].filter((item) => item.value && item.href);

  return (
    <section id="contact" data-section="contact" className="rebuild-contact">
      <div className="rebuild-container">
        <div className="rebuild-contact__shell">
          <div className="rebuild-contact__layout">
            <div className="rebuild-contact__content">
              <div className="rebuild-contact__kicker">
                <span className="rebuild-contact__kicker-line" aria-hidden="true" />
                Contact
              </div>

              <p className="rebuild-contact__eyebrow">Final section / open for work</p>
              <h2 className="rebuild-contact__title">Let&apos;s build something real.</h2>
              <p className="rebuild-contact__support">
                Open to internships, freelance work, and product collaborations.
                If you&apos;re building something that needs clarity, structure,
                and a strong interface layer, let&apos;s talk.
              </p>

              <div className="rebuild-contact__status">
                <span className="rebuild-contact__status-dot" aria-hidden="true" />
                <span>{personal.availability}</span>
              </div>

              <div className="rebuild-contact__actions">
                <a
                  href={`mailto:${contact.email}`}
                  className="rebuild-link rebuild-link--primary"
                >
                  Let&apos;s Talk
                  <FiArrowRight />
                </a>

                {resumeUrl ? (
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rebuild-link rebuild-link--secondary"
                  >
                    View Resume
                    <FiArrowUpRight />
                  </a>
                ) : null}
              </div>
            </div>

            <aside className="rebuild-contact__panel" aria-label="Contact methods">
              <div className="rebuild-contact__panel-head">
                <div>
                  <p className="rebuild-contact__panel-label">Direct contact</p>
                  <p className="rebuild-contact__panel-title">
                    Best reached by email, open across product, internship, and freelance conversations.
                  </p>
                </div>

                <div className="rebuild-contact__location">
                  <FiMapPin aria-hidden="true" />
                  <span>{contact.location}</span>
                </div>
              </div>

              <div className="rebuild-contact__methods">
                {contactMethods.map((item) => {
                  const Icon = item.icon;
                  const isExternal =
                    item.key === "linkedin" ||
                    item.key === "github" ||
                    item.key === "resume";

                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      className="rebuild-contact__method"
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      <span className="rebuild-contact__method-icon" aria-hidden="true">
                        <Icon />
                      </span>

                      <span className="rebuild-contact__method-copy">
                        <span className="rebuild-contact__method-label">
                          {item.label}
                        </span>
                        <span className="rebuild-contact__method-value">
                          {item.value}
                        </span>
                      </span>

                      <span className="rebuild-contact__method-arrow" aria-hidden="true">
                        <FiArrowUpRight />
                      </span>
                    </a>
                  );
                })}
              </div>
            </aside>
          </div>

          <div className="rebuild-contact__footer">
            <p>
              {personal.name} / {personal.title}
            </p>
            <p>{contact.location}</p>
            <p>Built with a product lens and a bias toward clarity.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
