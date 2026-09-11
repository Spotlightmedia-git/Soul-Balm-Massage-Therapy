import { useEffect, useState } from "react";
import { Link, Route, Switch } from "wouter";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Gift,
  Leaf,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { services, type Service } from "./service-content";
import { standardServiceContent, type StandardServiceContent } from "./standard-service-content";

const BOOKING_URL = "https://www.massagebook.com/business/21948933/select-product/services";
const DEEP_TISSUE_BOOKING_URL = "https://www.massagebook.com/therapists/SoulBalmMassageTherapy";
const GIFT_CERTIFICATE_URL = "https://www.massagebook.com/business/21948933/select-product/gift-certificates";
const GOOGLE_REVIEWS_URL = "https://share.google/aUmBJQzV8F1xphb8B";
const FACEBOOK_URL = "https://www.facebook.com/soulbalmmassagetherapy";
const PHONE = "6603412202";
const ADDRESS = "216 NE Barry Rd, Kansas City, MO 64155";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=216+NE+Barry+Rd%2CKansas+City%2CMO+64155";
const MAPS_SHARE_URL = "https://share.google/Rm6CNLfwqt1LrZTtQ";
const MAPS_EMBED_URL = "https://www.google.com/maps?q=216+NE+Barry+Rd%2CKansas+City%2CMO+64155&output=embed";
const LOGO = "/images/soul-balm-logo_9b444d79.png";
const STOREFRONT_IMAGE = "/images/soul-balm-storefront.jpg";
const TERESA_PORTRAIT = "/images/teresa-nerem-portrait.png";

const SERVICE_SEO_TITLES: Record<string, string> = {
  "swedish-massage": "Swedish Massage in Kansas City, MO | Soul Balm",
  "ashiatsu-massage": "Ashiatsu Massage in Kansas City, MO | Soul Balm",
  "lymphatic-massage": "Lymphatic Drainage Massage Kansas City, MO | Soul Balm",
  "prenatal-massage": "Prenatal Massage in Kansas City, MO | Soul Balm",
};

const CLIENT_TESTIMONIALS = [
  { reviewer: "W.", date: "July 31, 2026", service: "Swedish", review: "Once again, absolutely phenomenal. Teresa is incredibly knowledgeable and skilled. I left a new person, thank you so much." },
  { reviewer: "Anonymous", date: "August 11, 2026", service: "Swedish (with Teresa N.)", review: "Teresa listens to you and always take care to make your experience wonderful" },
  { reviewer: "Amanda G.", date: "June 12, 2026", service: "Deep Tissue", review: "I booked with Teresa on a whim, and I’m so happy I did. I received a deep tissue massage that significantly helped my tension and aches in my back and neck. Teresa has a warm, caring energy that was just what my soul needed. She also did a wonderful job of talking through what I wanted, how she would approach the massage and areas of pain, and communication preferences." },
  { reviewer: "Tony B.", date: "June 20, 2026", service: "Deep Tissue", review: "Best massage i have ever had. Very attentive to problem areas (sore back, muscles)" },
  { reviewer: "Erin G.", date: "August 12, 2026", service: "Deep Tissue", review: "Always a great massage! Teresa is so great at communicating during the effort massage to make sure it’s just right for you!" },
  { reviewer: "Aaron H.", date: "June 14, 2026", service: "Swedish with Teresa N.", review: "I had been experiencing pretty bad neck and upper back discomfort. Teresa removed the pain. There are many options when it comes to massage, but if you want to feel much better than when you showed up for your appointment, book one with Teresa. She clearly knows what to do when so many others give a standard service. This is true therapeutic massage by someone who cares about you and your well being." },
  { reviewer: "Anonymous", date: "June 28, 2026", service: "Bodywork", review: "Very skilled practitioner. Able to assess and provide relief of long standing pain issues." },
  { reviewer: "Diana R.", date: "June 27, 2026", service: "Bodywork", review: "Excellent experience at Soul Balm! Thank you, Teresa, for taking time with me to understand exactly what I needed. Looking forward to booking again." },
  { reviewer: "Mandy H.", date: "July 11, 2026", service: "Bodywork", review: "Teresa is approachable, professional, and passionate about her work. The setting is wonderful. My 1st time receiving Ashiatsu and I am a big fan! Highly recommend." },
  { reviewer: "Rudy H.", date: "August 8, 2026", service: "Swedish with Teresa N.", review: "Best massage I’ve ever had." },
];

function PageMeta({ title, description, fullTitle }: { title?: string; description?: string; fullTitle?: string }) {
  useEffect(() => {
    document.title = fullTitle ?? `${title} | Soul Balm Massage Therapy`;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [title, description, fullTitle]);
  return null;
}

function BookingButton({ label = "Book your session", className = "", href = BOOKING_URL }: { label?: string; className?: string; href?: string }) {
  return (
    <a className={`button button-primary rounded-btn ${className}`} href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}

function Wordmark({ compact = false }: { compact?: boolean }) {
  return <img className={compact ? "wordmark wordmark-compact" : "wordmark"} src={LOGO} alt="Soul Balm Massage Therapy" />;
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" onClick={closeMenu} className="brand-link" aria-label="Soul Balm Massage Therapy home">
          <Wordmark compact />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <div className="service-menu-wrap">
            <button className="nav-link service-menu-button" onClick={() => setServicesOpen((value) => !value)} aria-expanded={servicesOpen}>
              Services <ChevronDown size={15} className={servicesOpen ? "chevron-up" : ""} />
            </button>
            {servicesOpen && (
              <div className="service-menu" onMouseLeave={() => setServicesOpen(false)}>
                <div className="service-menu-label">Massage offerings</div>
                {services.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="service-menu-item" onClick={() => setServicesOpen(false)}>
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>
        <div className="desktop-booking"><BookingButton label="Book now" className="button-small" /></div>
        <button className="menu-toggle" onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
          {isOpen ? <X size={23} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <div className="container mobile-menu-inner">
            <Link href="/" onClick={closeMenu}>Home</Link>
            <Link href="/about" onClick={closeMenu}>About</Link>
            <span className="mobile-menu-heading">Services</span>
            {services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`} onClick={closeMenu}>{service.name}</Link>)}
            <Link href="/contact" onClick={closeMenu}>Contact</Link>
            <BookingButton label="Book your session" className="mobile-booking" />
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <div className="footer-logo-panel"><img src={LOGO} alt="Soul Balm Massage Therapy" /></div>
          <p>A dedicated table for one, with space to pause and reconnect with yourself.</p>
          <a className="footer-phone" href={`tel:${PHONE}`}><Phone size={15} /> (660) 341-2202</a>
        </div>
        <div className="footer-links">
          <p className="footer-kicker">Explore</p>
          <Link href="/about">About Soul Balm</Link>
          <Link href="/contact">Contact & location</Link>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer">Book online</a>
          <a href={GIFT_CERTIFICATE_URL} target="_blank" rel="noreferrer">Gift certificates</a>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">Google reviews</a>
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Facebook page</a>
        </div>
        <div className="footer-links">
          <p className="footer-kicker">Services</p>
          {services.map((service) => <Link className={`footer-service-link${service.slug === "lymphatic-massage" ? " footer-service-link-lymphatic" : ""}`} key={service.slug} href={`/services/${service.slug}`}>{service.slug === "lymphatic-massage" ? <>Manual Lymphatic<br />Drainage Massage</> : service.name}</Link>)}
        </div>
        <div className="footer-visit">
          <p className="footer-kicker">Visit</p>
          <p className="footer-hours"><strong>Monday–Friday</strong><span>By appointment only</span></p>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="selectable-address">
            {ADDRESS}
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Soul Balm Massage Therapy, LLC</p>
        <div><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms & Conditions</Link></div>
      </div>
    </footer>
  );
}

function PageLayout({ children }: { children: React.ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>;
}

function SectionHeading({ eyebrow, title, body, center = false }: { eyebrow: string; title: React.ReactNode; body?: string; center?: boolean }) {
  return (
    <div className={`section-heading ${center ? "section-heading-center" : ""}`}>
      <p className="eyebrow"><span></span>{eyebrow}</p>
      <h2>{title}</h2>
      {body && <p className="section-intro">{body}</p>}
    </div>
  );
}

function GiftCardCta({ className = "" }: { className?: string }) {
  return (
    <section className={`appointment-banner pause-cta-banner ${className}`.trim()}>
      <div className="container compact-gift-cta">
        <div className="compact-gift-cta-title">
          <h2>A little time set aside<br /><em>can mean a lot.</em></h2>
        </div>
        <div className="compact-gift-cta-action">
          <p>Gift someone you care about<br />the permission to pause.</p>
          <a href={GIFT_CERTIFICATE_URL} target="_blank" rel="noreferrer" className="button button-primary rounded-btn"><Gift size={16} strokeWidth={1.8} aria-hidden="true" /> Buy a gift card</a>
        </div>
      </div>
    </section>
  );
}

function PhotoPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`photo-placeholder ${className}`.trim()} role="img" aria-label={label}>
      <Leaf size={25} strokeWidth={1.4} aria-hidden="true" />
      <span>Visual placeholder</span>
      <strong>{label}</strong>
      <small>Approved photography to be added.</small>
    </div>
  );
}

function LocationMap() {
  return (
    <iframe
      className="soul-balm-map"
      src={MAPS_EMBED_URL}
      title="Map to Soul Balm Massage Therapy at 216 NE Barry Road, Kansas City, Missouri"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % CLIENT_TESTIMONIALS.length);
    }, 7000);
    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showPrevious = () => setActiveIndex((index) => (index - 1 + CLIENT_TESTIMONIALS.length) % CLIENT_TESTIMONIALS.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % CLIENT_TESTIMONIALS.length);
  const testimonial = CLIENT_TESTIMONIALS[activeIndex];

  return (
    <div className="testimonial-carousel" aria-roledescription="carousel" aria-label="Client testimonials" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocus={() => setIsPaused(true)} onBlur={() => setIsPaused(false)}>
      <div className="testimonial-carousel-topline">
        <span>Client testimonial</span>
      </div>
      <article className="testimonial-slide" key={`${testimonial.reviewer}-${testimonial.date}`}>
        <div className="review-stars" aria-label="5 out of 5 stars"><span aria-hidden="true">★★★★★</span></div>
        <blockquote>“{testimonial.review}”</blockquote>
        <footer>
          <strong>{testimonial.reviewer}</strong>
          <span>{testimonial.service}</span>
          <time dateTime={new Date(testimonial.date).toISOString().slice(0, 10)}>{testimonial.date}</time>
        </footer>
      </article>
      <div className="testimonial-carousel-controls">
        <button type="button" onClick={showPrevious} aria-label="Show previous testimonial"><ChevronLeft size={20} aria-hidden="true" /></button>
        <div className="testimonial-carousel-dots" role="tablist" aria-label="Choose a testimonial">
          {CLIENT_TESTIMONIALS.map((item, index) => <button type="button" key={`${item.reviewer}-${item.date}`} role="tab" aria-selected={activeIndex === index} aria-label={`Show testimonial ${index + 1}`} onClick={() => setActiveIndex(index)} />)}
        </div>
        <button type="button" onClick={showNext} aria-label="Show next testimonial"><ChevronRight size={20} aria-hidden="true" /></button>
      </div>
    </div>
  );
}

function Home() {
  return (
    <PageLayout>
      <div className="home-page">
      <PageMeta fullTitle="Massage Therapy in Kansas City, MO | Soul Balm" description="Thoughtful, client-centered massage therapy in Kansas City, MO. Explore Soul Balm's massage services and book your session online." />
      <section className="hero">
        <PhotoPlaceholder className="hero-image-placeholder" label="Calm, professional massage therapy atmosphere" />
        <div className="hero-scrim"></div>
        <div className="container hero-content">
          <p className="hero-kicker"><Leaf size={17} /> Kansas City massage therapy</p>
          <h1>Make space<br />for <em>yourself.</em></h1>
          <p className="hero-lede">Massage is a chance to pause, listen to your body, and make self-care part of your rhythm.</p>
          <div className="hero-actions">
            <BookingButton label="Book your session" />
            <a className="button button-secondary rounded-btn" href="#services">Explore services</a>
          </div>
        </div>
        <div className="hero-note"><span>Scroll to settle in</span><i></i></div>
      </section>

      <section className="intro-band">
        <div className="container intro-grid">
          <div className="intro-copy">
            <p className="eyebrow"><span></span>A place to exhale</p>
            <h2>Thoughtful touch.<br /><em>One table, just for you.</em></h2>
            <div className="home-intro-body">
              <p>Soul Balm Massage Therapy is an invitation to step out of the hurry. Every session begins with a conversation about your goals and is shaped around the care you are looking for that day.</p>
              <Link href="/about" className="button button-primary rounded-btn">Meet Soul Balm</Link>
            </div>
          </div>
          <PhotoPlaceholder className="intro-photo-placeholder" label="Soul Balm treatment-room image" />
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="container">
          <SectionHeading center eyebrow="Massage offerings" title={<>Choose the attention<br />your body is asking for.</>} body="Each service is an opportunity to begin with where you are and move at a pace that feels right." />
          <div className="services-list">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="service-row">
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.heroSummary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container values-grid">
          <PhotoPlaceholder className="values-photo-placeholder" label="Soul Balm welcoming treatment space" />
          <div className="values-content">
            <SectionHeading eyebrow="The Soul Balm approach" title={<>Your session<br />starts with <em>listening.</em></>} />
            <div className="value-list">
              <div><span><Sparkles size={17} /></span><div><h3>Your goals are the starting point</h3><p>We will talk through what you would like from your time before your session begins.</p></div></div>
              <div><span><Clock3 size={17} /></span><div><h3>Time held just for you</h3><p>This is a private, one-on-one appointment in a calm, dedicated setting.</p></div></div>
              <div><span><Leaf size={17} /></span><div><h3>Self-care without the rush</h3><p>Come as you are. Let your appointment be a pause in the middle of your day.</p></div></div>
            </div>
            <BookingButton label="Find a time that works" />
          </div>
        </div>
      </section>

      <section className="reviews-section client-reviews-section">
        <div className="container reviews-grid">
          <div>
            <p className="eyebrow"><span></span>Client Reviews</p>
            <h2>Kind words from the<br /><em>people we serve.</em></h2>
          </div>
          <div className="reviews-card" aria-label="Client review summary">
            <div className="review-stars" aria-label="5 out of 5 stars"><span aria-hidden="true">★★★★★</span></div>
            <dl>
              <div><dt>Rating</dt><dd>5 out of 5 stars</dd></div>
              <div><dt>Total Reviews</dt><dd>163 reviews</dd></div>
            </dl>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      <GiftCardCta />

      <section className="location-map-section">
        <div className="container location-grid">
          <div className="location-info">
            <SectionHeading 
              eyebrow="Visit Soul Balm" 
              title={<>Centrally located in<br /><em>Kansas City, MO.</em></>} 
              body="Soul Balm is located inside the Cause Chiropractor office at 216 NE Barry Rd, conveniently accessible across Northland and the KC metro area."
            />
            <div className="location-details">
              <p><MapPin size={18} /> <strong>Address:</strong><br /><a href={MAPS_URL} target="_blank" rel="noreferrer" className="selectable-address">{ADDRESS}</a></p>
              <p><Phone size={18} /> <strong>Phone:</strong><br /><a href={`tel:${PHONE}`}>(660) 341-2202</a></p>
              <div className="social-links">
                <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="button button-primary button-small rounded-btn">
                  Follow on Facebook
                </a>
              </div>
            </div>
          </div>
          <figure className="location-signage">
            <img src={STOREFRONT_IMAGE} alt="Soul Balm Massage Therapy signage in the window inside the Cause Chiropractor office" />
            <figcaption>Look for the Soul Balm signage in the window when you arrive.</figcaption>
          </figure>
          <div className="map-embed-wrap">
            <LocationMap />
            <a href={MAPS_SHARE_URL} target="_blank" rel="noreferrer" className="map-open-link">Open the interactive map</a>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container faq-layout">
          <div className="faq-intro">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to begin planning your time at Soul Balm.</p>
          </div>
          <div className="faq-list">
            <details open>
              <summary>How do I book a massage?<ChevronDown size={18} /></summary>
              <p>Use the online booking link to explore current availability and schedule your appointment through MassageBook.</p>
            </details>
            <details>
              <summary>Where is Soul Balm located?<ChevronDown size={18} /></summary>
              <p>Soul Balm Massage Therapy is located at 216 NE Barry Rd in Kansas City, Missouri. Use the address link above for directions.</p>
            </details>
            <details>
              <summary>What are your appointment hours?<ChevronDown size={18} /></summary>
              <p>Appointments are available Monday through Friday, by appointment only. Soul Balm is closed Saturday and Sunday.</p>
            </details>
            <details>
              <summary>What massage services do you offer?<ChevronDown size={18} /></summary>
              <p>Soul Balm offers Deep Tissue, Swedish, Prenatal, Ashiatsu, and Lymphatic Massage. Visit the service pages or online booking for details.</p>
            </details>
            <details>
              <summary>Can I purchase a gift certificate?<ChevronDown size={18} /></summary>
              <p>Yes. Gift certificates are available through the secure MassageBook gift certificate page.</p>
            </details>
            <details>
              <summary>Who should I contact with a question?<ChevronDown size={18} /></summary>
              <p>Call Soul Balm Massage Therapy at (660) 341-2202 with questions about your visit or scheduling.</p>
            </details>
          </div>
        </div>
      </section>

      </div>
    </PageLayout>
  );
}

function About() {
  return (
    <PageLayout>
      <PageMeta fullTitle="About Soul Balm Massage Therapy | Kansas City, MO" description="Meet Teresa Nerem and learn about Soul Balm Massage Therapy's thoughtful, one-on-one approach in Kansas City, Missouri." />
      <section className="page-hero about-hero">
        <div className="container page-hero-grid">
          <div><p className="eyebrow"><span></span>Meet Teresa</p><h1>Care that honors<br /><em>the whole of you.</em></h1><p>At Soul Balm, massage is more than a scheduled appointment. It is permission to pause.</p></div>
          <div className="about-hero-image about-practitioner-image"><img src={TERESA_PORTRAIT} alt="Teresa Nerem of Soul Balm Massage Therapy" /><div className="about-portrait-caption">Teresa Nerem<span>License: MO 2021007307</span></div></div>
        </div>
      </section>
      <section className="about-story">
        <div className="container about-story-grid">
          <div className="story-side"><p>Kindness, intuition,<br />and dedicated care.</p><p className="about-signature">Massage therapist—because<br /><em>“bad ass miracle worker”</em><br />isn’t an official job title.</p></div>
          <div className="story-copy"><p className="story-large">Teresa believes self-care begins by giving yourself permission to pause.</p><p>Life is full of ups and downs, and everyday activity, overuse, and emotional demands can leave us carrying tension in our bodies. Soul Balm is an invitation to step out of the hurry, share what you are looking for, and make room for yourself.</p><p>Before your session, Teresa will visit with you about your goals. She has created a relaxing ambience for your reservation at a table for one—dedicated to tending to the back, neck, shoulders, arms, glutes, legs, hands, and feet that carry you through your days.</p><p>Teresa has long appreciated the value of thoughtful touch. She began her helping-profession path in social work, then followed her intuition to massage school. She is grateful for the trust clients place in her as part of their self-care journey.</p><a href={BOOKING_URL} target="_blank" rel="noreferrer" className="button button-primary rounded-btn">Begin your self-care time</a></div>
        </div>
      </section>
      <section className="about-background"><div className="container about-background-grid"><div><p className="eyebrow"><span></span>Professional background</p><h2>A career built around<br /><em>helping people.</em></h2></div><div className="about-background-card"><p className="about-background-kicker">Teresa’s confirmed experience</p><div><strong>Massage-school training</strong><span>Teresa followed her intuition into massage therapy after beginning her helping-profession journey in social work.</span></div><div><strong>Thoughtful, one-on-one care</strong><span>Every appointment begins with a conversation about your goals, comfort, and the kind of attention you are seeking that day.</span></div><div><strong>Modalities offered</strong><span>Swedish, Deep Tissue, Prenatal, Ashiatsu, Ashi/Thai, and Lymphatic Massage.</span></div></div></div></section>
      <section className="about-beliefs"><div className="container"><SectionHeading center eyebrow="What to expect from Teresa" title={<>A session shaped by<br /><em>your needs.</em></>} body="Her philosophy is simple: slow down, listen first, and make the time at the table feel dedicated to you." /><div className="belief-grid"><article><h3>Your goals guide the session</h3><p>Teresa begins by asking what you would like to focus on and welcomes feedback throughout your appointment.</p></article><article><h3>A calm table for one</h3><p>Your time is reserved in a relaxing, private setting designed to help you step out of the hurry.</p></article><article><h3>Care without the rush</h3><p>Each visit is an opportunity to pause, reconnect with yourself, and receive thoughtful attention at a comfortable pace.</p></article></div></div></section>
      <section className="reviews-section client-reviews-section about-client-reviews"><div className="container reviews-grid"><div><p className="eyebrow"><span></span>Client Reviews</p><h2>Kind words from the<br /><em>people Teresa serves.</em></h2></div><div className="reviews-card" aria-label="Client review summary"><div className="review-stars" aria-label="5 out of 5 stars"><span aria-hidden="true">★★★★★</span></div><dl><div><dt>Rating</dt><dd>5 out of 5 stars</dd></div><div><dt>Total Reviews</dt><dd>163 reviews</dd></div></dl></div><TestimonialCarousel /></div></section>
      <section className="soft-cta about-soft-cta"><div className="container"><div><p className="eyebrow"><span></span>Make time for you</p><h2>Your table is<br /><em>waiting.</em></h2></div><BookingButton label="Reserve your session" /></div></section>
    </PageLayout>
  );
}

const deepTissueFaqs = [
  {
    question: "What is deep tissue massage?",
    answer: "Deep tissue massage is a massage modality that uses slower, focused strokes and intentional pressure to give extra attention to the areas you would like to prioritize.",
  },
  {
    question: "Does deep tissue massage hurt?",
    answer: "No. Pressure preferences differ from person to person. You are encouraged to share feedback during the session so your therapist can adjust the pressure and techniques to your comfort.",
  },
  {
    question: "What should I expect during a deep tissue massage session?",
    answer: "Before the session, you can discuss your wellness goals, the areas you would like to prioritize, and your pressure preferences. Communication is encouraged throughout the massage.",
  },
  {
    question: "What areas can I ask to prioritize?",
    answer: "You can discuss the areas you would like to focus on, such as the back, neck, shoulders, or other areas of concern. Your session is tailored around your preferences and comfort.",
  },
  {
    question: "How is deep tissue massage different from Swedish massage?",
    answer: "Deep tissue massage typically uses a slower, more focused approach and may involve more intentional pressure. The best fit depends on the type of massage experience, pressure, and areas of focus you prefer.",
  },
  {
    question: "Can the pressure be adjusted during the massage?",
    answer: "Yes. Let your therapist know at any time if you would like more or less pressure, a different technique, or extra attention in a particular area.",
  },
  {
    question: "What if I have a medical condition, injury, or treatment-related question?",
    answer: "If you have questions about whether massage is appropriate for a medical condition, injury, or treatment, seek guidance from a qualified healthcare professional before booking. Share relevant information with your massage therapist so you can discuss your comfort and session preferences.",
  },
];

const deepTissuePricing = [
  { duration: "30 minutes", price: "$45", detail: "A focused option when you would like to prioritize one area or have limited time. It allows for a brief conversation about your preferences and targeted attention during the session." },
  { duration: "45 minutes", price: "$60", detail: "Offers additional time for a more unhurried, focused session. This can be a good fit when you would like attention in one primary area with time to check in about pressure and comfort." },
  { duration: "60 minutes", price: "$85", detail: "Provides time for a more balanced session, including discussion of your preferences and focused attention across the areas you would like to prioritize." },
  { duration: "75 minutes", price: "$100", detail: "Allows for a slower pace and more flexibility in how the session is structured, particularly if you would like to include more than one priority area." },
  { duration: "90 minutes", price: "$125", detail: "Gives the most time for a relaxed pace, ongoing pressure check-ins, and attention across multiple areas you would like to prioritize." },
];

function DeepTissueVisual({ variant, label }: { variant: "hero" | "room" | "detail"; label: string }) {
  return (
    <div className={`deep-tissue-visual deep-tissue-visual-${variant}`} role="img" aria-label={label}>
      <div className="deep-tissue-visual-orb deep-tissue-visual-orb-one" />
      <div className="deep-tissue-visual-orb deep-tissue-visual-orb-two" />
      <div className="deep-tissue-visual-card">
        <Leaf size={24} strokeWidth={1.4} aria-hidden="true" />
        <span>Visual placeholder</span>
        <strong>{label}</strong>
        <small>Approved treatment-room photography to be added.</small>
      </div>
    </div>
  );
}

function DeepTissuePage() {
  return (
    <PageLayout>
      <PageMeta
        fullTitle="Deep Tissue Massage in Kansas City, MO | Soul Balm"
        description="Deep tissue massage in Kansas City, MO, customized to your comfort, pressure preferences, and priority areas. Book your session with Soul Balm."
      />
      <section className="deep-tissue-hero">
        <DeepTissueVisual variant="hero" label="Calm, professional massage therapy atmosphere" />
        <div className="deep-tissue-hero-scrim" />
        <div className="container deep-tissue-hero-content">
          <div className="deep-tissue-hero-copy">
            <p className="eyebrow"><span></span>Intentional, focused care</p>
            <h1>Deep Tissue Massage in Kansas City, MO</h1>
            <p>Targeted, therapeutic massage customized to your comfort, wellness goals, and pressure preferences.</p>
            <BookingButton label="Book Your Session" href={DEEP_TISSUE_BOOKING_URL} />
          </div>
        </div>
      </section>

      <section className="deep-tissue-info-section">
        <div className="container deep-tissue-info-grid">
          <div className="deep-tissue-info-copy">
            <p className="eyebrow"><span></span>Focused care, your way</p>
            <h2>What Is Deep Tissue Massage?</h2>
            <p>Deep tissue massage is a massage modality that uses slower, more focused strokes and intentional pressure to work with deeper layers of muscle and connective tissue, often called fascia. It is commonly chosen by people who prefer focused attention in areas that feel tight, overworked, or especially tense—such as the back, neck, and shoulders.</p>
            <p>Your deep tissue massage can be tailored around the areas you would like to prioritize, your comfort level, and your preferred pressure. Deep pressure does not have to mean unbearable pressure. Open communication is encouraged throughout the session, so your therapist can adjust techniques and pressure based on your feedback.</p>
          </div>
          <DeepTissueVisual variant="room" label="Warm treatment room setting" />
        </div>
      </section>

      <section className="deep-tissue-info-section deep-tissue-info-section-tint">
        <div className="container deep-tissue-info-grid deep-tissue-info-grid-reverse">
          <DeepTissueVisual variant="detail" label="Relaxing massage table setting" />
          <div className="deep-tissue-info-copy">
            <p className="eyebrow"><span></span>Is it right for you?</p>
            <h2>Why Choose Deep Tissue Massage?</h2>
            <p>A deep tissue massage may be a good option if you prefer a more focused, therapeutic-style massage experience. Before the session begins, you can discuss your wellness goals, the areas you would like to address, and the pressure that feels right for you.</p>
            <p>People often choose deep tissue massage when they want extra attention for areas affected by long periods of sitting, repetitive movement, workouts, or everyday physical demands. Your session is designed around your feedback and comfort, with techniques and pressure adjusted as needed.</p>
            <div className="deep-tissue-points">
              <div><Check size={18} aria-hidden="true" /><div><strong>Focused attention</strong><span>Spend more time on the areas you want to prioritize, including the back, neck, shoulders, or other areas of concern.</span></div></div>
              <div><Check size={18} aria-hidden="true" /><div><strong>Pressure tailored to you</strong><span>Share your preferred pressure level and communicate throughout the session if you would like an adjustment.</span></div></div>
              <div><Check size={18} aria-hidden="true" /><div><strong>Support for active and everyday routines</strong><span>A deep tissue session can be a thoughtful addition to your self-care routine, whether you work at a desk, exercise regularly, or carry physical tension from daily activities.</span></div></div>
              <div><Check size={18} aria-hidden="true" /><div><strong>A personalized massage experience</strong><span>Begin with a conversation about your goals, preferences, and comfort so the session can be shaped around you.</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-pricing deep-tissue-pricing">
        <div className="container">
          <div className="service-pricing-heading">
            <p className="eyebrow"><span></span>Session lengths & pricing</p>
            <h2>Choosing Your Deep Tissue<br /><em>Massage Session Length</em></h2>
            <p>The amount of time you book helps shape the pace and focus of your session. A shorter appointment can allow for a focused conversation and attention to one priority area, while a longer appointment gives more time to discuss your preferences, move through more of the body, or spend additional time on the areas you would like to prioritize.</p>
          </div>
          <div className="pricing-table" role="table" aria-label="Deep Tissue Massage session lengths and prices">
            <div className="pricing-header" role="row"><span role="columnheader">Session length</span><span role="columnheader">Displayed price</span><span role="columnheader">Why the time matters</span></div>
            {deepTissuePricing.map((option) => <div className="pricing-row" role="row" key={option.duration}><strong role="cell">{option.duration}</strong><b role="cell">{option.price}</b><span role="cell">{option.detail}</span></div>)}
          </div>
          <p className="deep-tissue-pricing-note">Session duration does not guarantee a specific result. The best choice depends on your personal preferences, the areas you would like to discuss, your comfort with pressure, and the time you have available. If you are unsure, use the booking page or contact Soul Balm Massage Therapy to discuss the appointment options.</p>
          <BookingButton label="Book Deep Tissue Massage on MassageBook" href={DEEP_TISSUE_BOOKING_URL} className="service-pricing-cta" />
        </div>
      </section>

      <GiftCardCta className="service-gift-cta" />
      <section className="service-faq-section deep-tissue-faq-section">
        <div className="container service-faq-grid">
          <div>
            <p className="eyebrow"><span></span>Questions, answered simply</p>
            <h2>Deep Tissue Massage<br /><em>FAQs</em></h2>
            <p className="section-intro">Every visit begins with a conversation. Here are a few helpful answers before your appointment.</p>
          </div>
          <div className="faq-list service-faq-list">
            {deepTissueFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}<ChevronDown size={19} /></summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function ServicePage({ service }: { service: Service }) {
  if (service.slug === "deep-tissue-massage") return <DeepTissuePage />;
  const content = standardServiceContent[service.slug];
  if (!content) return null;

  return (
    <PageLayout>
      <PageMeta fullTitle={SERVICE_SEO_TITLES[service.slug]} description={service.metaDescription} />
      <section className={`standard-service-hero standard-service-hero-${service.accent}`}>
        <DeepTissueVisual variant="hero" label={content.hero.visualLabel} />
        <div className="standard-service-hero-scrim" />
        <div className="container standard-service-hero-content">
          <div className="standard-service-hero-copy">
            <p className="eyebrow"><span></span>{content.hero.eyebrow}</p>
            <h1>{service.pageTitle}</h1>
            <p>{content.hero.summary}</p>
            <BookingButton label="Book Your Session" />
          </div>
        </div>
      </section>
      <StandardServiceInformation content={content} variant="definition" />
      <StandardServiceInformation content={content} variant="why" />
      <StandardServicePricing service={service} content={content} />
      <GiftCardCta className="service-gift-cta" />
      <StandardServiceFaqs content={content} serviceName={service.name} />
    </PageLayout>
  );
}

function StandardServiceInformation({ content, variant }: { content: StandardServiceContent; variant: "definition" | "why" }) {
  const isWhy = variant === "why";
  const section = isWhy ? content.why : content.definition;
  return (
    <section className={`standard-service-info-section ${isWhy ? "standard-service-info-section-tint" : ""}`}>
      <div className={`container standard-service-info-grid ${isWhy ? "standard-service-info-grid-reverse" : ""}`}>
        {!isWhy && <div className="standard-service-info-copy"><p className="eyebrow"><span></span>{section.eyebrow}</p><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
        <DeepTissueVisual variant={isWhy ? "detail" : "room"} label={isWhy ? "Calm, focused massage treatment setting" : "Warm treatment room setting"} />
        {isWhy && <div className="standard-service-info-copy"><p className="eyebrow"><span></span>{section.eyebrow}</p><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="standard-service-points">{content.why.points.map((point) => <div key={point.title}><Check size={18} aria-hidden="true" /><div><strong>{point.title}</strong><span>{point.body}</span></div></div>)}</div></div>}
      </div>
    </section>
  );
}

function StandardServicePricing({ service, content }: { service: Service; content: StandardServiceContent }) {
  return (
    <section className="service-pricing standard-service-pricing">
      <div className="container">
        <div className="service-pricing-heading"><p className="eyebrow"><span></span>Session lengths & pricing</p><h2>{content.pricing.titleLine1}<br /><em>{content.pricing.titleLine2}</em></h2><p>{content.pricing.introduction}</p></div>
        <div className="pricing-table" role="table" aria-label={`${service.name} session lengths and prices`}><div className="pricing-header" role="row"><span role="columnheader">Session length</span><span role="columnheader">Displayed price</span><span role="columnheader">Why the time matters</span></div>{service.pricing.map((option) => <div className="pricing-row" role="row" key={option.duration}><strong role="cell">{option.duration}</strong><b role="cell">{option.price}</b><span role="cell">{content.pricing.details[option.duration] ?? option.detail}</span></div>)}</div>
        <p className="deep-tissue-pricing-note">{content.pricing.note}</p>
        <BookingButton label={`Book ${service.name} on MassageBook`} className="service-pricing-cta" />
      </div>
    </section>
  );
}

function StandardServiceFaqs({ content, serviceName }: { content: StandardServiceContent; serviceName: string }) {
  return (
    <section className="service-faq-section standard-service-faq-section">
      <div className="container service-faq-grid">
        <div><p className="eyebrow"><span></span>Questions, answered simply</p><h2>{serviceName}<br /><em>FAQs</em></h2><p className="section-intro">Every visit begins with a conversation. Here are a few helpful answers before your appointment.</p></div>
        <div className="faq-list service-faq-list">{content.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<ChevronDown size={19} /></summary><p>{faq.answer}</p></details>)}</div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <PageLayout>
      <PageMeta fullTitle="Contact Soul Balm Massage Therapy | Kansas City, MO" description="Contact Soul Balm Massage Therapy in Kansas City, MO for appointment questions, directions, and online booking information." />
      <section className="contact-simple-section"><div className="container contact-simple-grid"><div className="contact-phone-block"><p className="eyebrow"><span></span>Contact Soul Balm</p><h1>Call Soul<br /><em>Balm.</em></h1><p className="contact-phone-label">Phone</p><a className="contact-simple-phone" href={`tel:${PHONE}`}><Phone size={18} />(660) 341-2202</a></div><div className="contact-hours-block"><p className="eyebrow"><span></span>Appointment hours</p><h2>Time for<br /><em>your reset.</em></h2><div className="contact-hours-list"><div><strong>Monday</strong><span>9:00 AM–4:00 PM</span><small>By appointment only</small></div><div><strong>Tuesday</strong><span>9:00 AM–5:00 PM</span><small>By appointment only</small></div><div><strong>Wednesday</strong><span>9:00 AM–5:00 PM</span><small>By appointment only</small></div><div><strong>Thursday</strong><span>9:00 AM–5:00 PM</span><small>By appointment only</small></div><div><strong>Friday</strong><span>9:00 AM–4:00 PM</span><small>By appointment only</small></div><div><strong>Saturday</strong><span>Closed</span></div><div><strong>Sunday</strong><span>Closed</span></div></div></div><div className="map-embed-wrap contact-simple-map"><LocationMap /><a className="button button-primary button-small rounded-btn" href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin size={15} /> Get directions</a></div></div></section>
    </PageLayout>
  );
}

function LegalPage({ type }: { type: "privacy" | "terms" }) {
  const isPrivacy = type === "privacy";
  return (
    <PageLayout>
      <PageMeta title={isPrivacy ? "Privacy Policy" : "Terms & Conditions"} />
      <section className="legal-hero"><div className="container"><p className="eyebrow"><span></span>Soul Balm Massage Therapy</p><h1>{isPrivacy ? "Privacy Policy" : "Terms & Conditions"}</h1><p>Last updated: September 2026</p></div></section>
      <article className="legal-content container">
        <div className="legal-notice"><ShieldCheck size={19}/><p><strong>Draft notice:</strong> This page is a launch-ready framework and must be reviewed by Soul Balm Massage Therapy before publication to reflect confirmed contact, booking, cancellation, and data-handling practices.</p></div>
        {isPrivacy ? <PrivacyCopy /> : <TermsCopy />}
      </article>
    </PageLayout>
  );
}

function PrivacyCopy() { return <><h2>Overview</h2><p>This policy explains how Soul Balm Massage Therapy may handle information provided through this website. The website is intended to help visitors learn about massage services, find the studio, and access the online booking platform.</p><h2>Information provided through booking</h2><p>Online booking is provided through MassageBook. When you follow a booking link, information you provide there is governed by MassageBook’s applicable policies and the service policies presented during the booking process.</p><h2>Website communications</h2><p>If you contact Soul Balm by phone or through an approved communication channel, the information you provide may be used to respond to your question or help with your appointment. Please do not send sensitive health information through unprotected channels.</p><h2>Updates to this policy</h2><p>This policy may be updated as business practices or website tools change. The effective date above will be updated when material changes are made.</p><h2>Questions</h2><p>For questions about this policy, please contact Soul Balm Massage Therapy by phone at <a href={`tel:${PHONE}`}>(660) 341-2202</a>.</p></> }
function TermsCopy() { return <><h2>Website use</h2><p>This website provides general information about Soul Balm Massage Therapy and its massage services. It is not medical advice and is not a substitute for consultation with a qualified healthcare professional.</p><h2>Appointments and booking</h2><p>Appointments are scheduled through MassageBook. Available services, appointment times, pricing, policies, and any applicable intake requirements are presented in the booking process and are subject to confirmation there.</p><h2>Health considerations</h2><p>Please discuss questions about health conditions, medications, pregnancy, or whether massage is appropriate for you with your healthcare provider. Share relevant information requested through the approved intake process before your session.</p><h2>Changes to availability</h2><p>Service availability, appointment options, and studio information may change. The online booking page is the most current source for available appointments.</p><h2>Questions</h2><p>For questions about a planned visit, please call Soul Balm Massage Therapy at <a href={`tel:${PHONE}`}>(660) 341-2202</a>.</p></> }

function NotFound() { return <PageLayout><PageMeta title="Page Not Found" /><section className="not-found"><div className="container"><p className="eyebrow"><span></span>Page not found</p><h1>Let’s find your way<br /><em>back to calm.</em></h1><Link href="/" className="button button-primary rounded-btn">Return home</Link></div></section></PageLayout> }

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    {services.flatMap((service) => [
      <Route key={service.slug} path={`/services/${service.slug}`} component={() => <ServicePage service={service} />} />,
      <Route key={service.legacySlug} path={`/services/${service.legacySlug}`} component={() => <ServicePage service={service} />} />,
    ])}
    <Route path="/contact" component={Contact} />
    <Route path="/privacy-policy" component={() => <LegalPage type="privacy" />} />
    <Route path="/terms-and-conditions" component={() => <LegalPage type="terms" />} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
