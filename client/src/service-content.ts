export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServicePrice = {
  duration: string;
  price: string;
  detail: string;
};

export type Service = {
  slug: string;
  legacySlug: string;
  name: string;
  pageTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroSummary: string;
  intro: string;
  definitionTitle: string;
  definition: string[];
  whyTitle: string;
  whyIntro?: string;
  points: string[];
  comparisonTitle?: string;
  comparison: string[];
  expectationTitle: string;
  expectations: string[];
  faqs: ServiceFaq[];
  pricing: ServicePrice[];
  accent: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "deep-tissue-massage",
    legacySlug: "deep-tissue",
    name: "Deep Tissue Massage",
    pageTitle: "Deep Tissue Massage in Kansas City",
    metaDescription: "Deep tissue massage in Kansas City, MO for tight muscles and focused bodywork. Explore 30–90 minute sessions at Soul Balm Massage Therapy.",
    eyebrow: "Intentional, focused work",
    heroSummary: "Customized, more focused bodywork shaped around your comfort level and goals.",
    intro: "Looking for deep tissue massage in Kansas City for tight muscles, stubborn tension, or areas that need more focused pressure? Soul Balm Massage Therapy provides customized deep tissue bodywork based on your comfort level and goals.",
    definitionTitle: "What is deep tissue massage?",
    definition: [
      "Deep tissue massage uses slower, more focused techniques to work with muscles and connective tissue below the surface. Your therapist can adjust pressure and spend additional time on areas that need focused attention.",
      "It may be a good fit when you are looking for more targeted bodywork than a traditional relaxation massage.",
    ],
    whyTitle: "Why choose deep tissue massage?",
    whyIntro: "Clients often choose a deep tissue session when they want:",
    points: [
      "Focused work on areas of significant muscle tension",
      "More pressure than a typical relaxation massage",
      "Attention to tight or overworked muscles",
      "A goal-oriented massage session",
      "More time for several areas during a longer appointment",
    ],
    comparisonTitle: "Deep tissue vs. Swedish massage",
    comparison: [
      "Choose Swedish massage when your priority is relaxation, flowing movement, and a calming full-body experience.",
      "Choose deep tissue massage when your priority is more focused, sustained pressure for areas of significant muscle tension. You can also discuss your goals before your session if you are unsure.",
    ],
    expectationTitle: "What to expect",
    expectations: [
      "Before your massage, your therapist will discuss your goals, areas of concern, and pressure preferences. During the session, techniques and pressure can be adjusted based on your feedback.",
      "Deep tissue massage does not need to feel unbearable. Communication is encouraged if pressure feels too intense or uncomfortable.",
      "The back, neck, and shoulders can accumulate tension from repetitive activities, workouts, long periods of sitting, or everyday demands. Your session can be customized to give those areas more attention.",
    ],
    faqs: [
      { question: "Does deep tissue massage hurt?", answer: "Deep tissue massage can feel intense, but intense should not mean unbearable. Your therapist should work within a pressure level you can comfortably tolerate. Speak up if something feels too painful." },
      { question: "Is deep tissue massage good for tight muscles?", answer: "Deep tissue massage is commonly chosen for persistent muscle tightness because it uses slower, more focused pressure than a typical relaxation massage." },
      { question: "How often should I get deep tissue massage?", answer: "The ideal frequency depends on your goals, activity level, and how your body responds. Your massage therapist can help you determine a schedule that makes sense for you." },
    ],
    pricing: [
      { duration: "30 minutes", price: "$45", detail: "Focused work on one primary area." },
      { duration: "45 minutes", price: "$60", detail: "More time for a couple of areas with focused pressure." },
      { duration: "60 minutes", price: "$85", detail: "A standard option for broader bodywork and general tension." },
      { duration: "75 minutes", price: "$100", detail: "Thorough work throughout the body with additional attention where needed." },
      { duration: "90 minutes", price: "$125", detail: "Extra time for multiple areas or a slower, more comprehensive session." },
    ],
    accent: "deep",
    image: "/images/deep-tissue_41b61e76.webp",
    imageAlt: "Focused massage work on a client’s back in a warm treatment setting",
  },
  {
    slug: "swedish-massage",
    legacySlug: "swedish",
    name: "Swedish Massage",
    pageTitle: "Swedish Massage in Kansas City",
    metaDescription: "Relaxing Swedish massage in Kansas City, MO. Explore 30–120 minute sessions at Soul Balm Massage Therapy.",
    eyebrow: "A calming full-body reset",
    heroSummary: "A classic, flowing massage experience created for pause, ease, and self-care.",
    intro: "If you are looking for a relaxing Swedish massage in Kansas City, Soul Balm Massage Therapy offers a classic, flowing massage experience designed to help you slow down, release everyday muscle tension, and reconnect with your body.",
    definitionTitle: "What is Swedish massage?",
    definition: [
      "Swedish massage is a classic massage therapy technique that uses flowing strokes, kneading, and varying levels of pressure. Massage oil or cream is used to help create smooth, gliding strokes.",
      "Your session can be customized around how you are feeling that day, whether you want general relaxation or extra attention to areas such as your neck, shoulders, back, or legs.",
    ],
    whyTitle: "Why choose Swedish massage?",
    whyIntro: "Clients often choose Swedish massage when they want to:",
    points: [
      "Relax and decompress",
      "Reduce the feeling of everyday muscle tension",
      "Give tired or overworked muscles some attention",
      "Enjoy a calming full-body massage",
      "Take dedicated time for self-care",
      "Experience gentle-to-moderate, customizable pressure",
    ],
    comparisonTitle: "Swedish vs. deep tissue massage",
    comparison: [
      "Swedish massage generally emphasizes flowing, relaxing techniques, while deep tissue massage uses more focused, sustained work on areas of significant muscle tension.",
      "Consider Swedish massage if relaxation is your priority, and deep tissue massage if you want more targeted, deeper pressure.",
    ],
    expectationTitle: "What to expect during your Swedish massage",
    expectations: [
      "Your therapist will discuss your goals and comfort level before beginning. Pressure can be adjusted throughout the session, so you can communicate if you want lighter or firmer work.",
      "The goal is simple: give you space to relax while your therapist works with your body’s current needs.",
      "Swedish massage can be a good option if you are new to massage, prefer a relaxing experience, or want a full-body session with customizable pressure.",
    ],
    faqs: [
      { question: "What is Swedish massage?", answer: "Swedish massage is a classic massage technique using flowing strokes, kneading, and adjustable pressure to create a relaxing full-body experience." },
      { question: "Is Swedish massage good for stress?", answer: "Many people choose Swedish massage because the slower, flowing style can create a relaxing environment and provide dedicated time to unwind." },
      { question: "Is Swedish massage painful?", answer: "Swedish massage is generally intended to be comfortable and relaxing. Tell your therapist if you want lighter or firmer pressure at any point." },
      { question: "How often should I get a Swedish massage?", answer: "There is no single schedule that works for everyone. Some clients book massage occasionally for self-care, while others prefer regular sessions based on their lifestyle and goals." },
      { question: "What is the difference between Swedish and deep tissue massage?", answer: "Swedish massage generally emphasizes relaxation and flowing techniques. Deep tissue massage uses more focused pressure for areas of persistent or significant muscle tension." },
    ],
    pricing: [
      { duration: "30 minutes", price: "$45", detail: "A quick relaxation reset or focused session when time is limited." },
      { duration: "45 minutes", price: "$60", detail: "Time to address two or three key areas." },
      { duration: "60 minutes", price: "$85", detail: "A classic full-body Swedish massage with balanced time throughout." },
      { duration: "75 minutes", price: "$100", detail: "Full-body relaxation with extra time for areas carrying tension." },
      { duration: "90 minutes", price: "$125", detail: "A longer, unhurried full-body experience." },
      { duration: "120 minutes", price: "$170", detail: "An extended session for clients who want maximum time to slow down." },
    ],
    accent: "swedish",
    image: "/images/hand-massage_ff238df8.webp",
    imageAlt: "Gentle hand massage in a calm treatment setting",
  },
  {
    slug: "ashiatsu-massage",
    legacySlug: "ashiatsu",
    name: "Ashiatsu Massage",
    pageTitle: "Ashiatsu Massage in Kansas City",
    metaDescription: "Ashiatsu barefoot massage in Kansas City, MO using deep compression, long gliding strokes, and assisted stretching. Explore 60 and 90 minute sessions.",
    eyebrow: "A distinctive, grounded approach",
    heroSummary: "A barefoot massage technique offering broad compression, long gliding strokes, and a different way to experience pressure.",
    intro: "Curious about Ashiatsu massage or looking for a barefoot massage in Kansas City? Ashiatsu is a unique style of bodywork in which the therapist uses their bare feet to provide broad, deep compression, long gliding strokes, and assisted stretching.",
    definitionTitle: "What is Ashiatsu massage?",
    definition: [
      "Ashiatsu is a barefoot massage technique. Rather than relying only on hands and forearms, the therapist uses their feet to create broad, sustained pressure across the body.",
      "Because the foot can distribute pressure over a larger surface area, Ashiatsu can provide a distinctive deep-compression experience.",
    ],
    whyTitle: "Why choose Ashiatsu?",
    whyIntro: "Clients may choose Ashiatsu when they:",
    points: [
      "Prefer deeper or broader pressure",
      "Enjoy a different massage experience",
      "Have significant muscle tension",
      "Like the feeling of sustained compression",
      "Want an alternative to traditional hand-based deep tissue work",
    ],
    comparisonTitle: "Ashiatsu vs. deep tissue massage",
    comparison: [
      "Both can provide focused, deeper pressure, but the techniques are different. Deep tissue massage typically uses hands, fingers, forearms, or elbows for focused work.",
      "Ashiatsu uses the therapist’s bare feet to deliver broad compression, gliding strokes, and assisted stretching. If you enjoy deep pressure but want to experience a different technique, Ashiatsu may be worth trying.",
    ],
    expectationTitle: "What to expect during an Ashiatsu session",
    expectations: [
      "Ashiatsu can feel different from traditional hand-based massage. The therapist may use broad compression, long gliding strokes, and assisted stretching.",
      "Your therapist will discuss your goals and pressure preferences before beginning. Let them know how the pressure feels so the session can be adjusted to your comfort level.",
      "If you are new to Ashiatsu, let your therapist know. They can explain what to expect and work with you to find an appropriate pressure level.",
    ],
    faqs: [
      { question: "What is barefoot massage?", answer: "Barefoot massage is another common way people describe Ashiatsu. The therapist uses their bare feet to deliver massage techniques rather than relying exclusively on their hands." },
      { question: "Does Ashiatsu massage hurt?", answer: "Ashiatsu can provide deep pressure, but it should be adapted to your comfort level. If pressure is too intense, tell your therapist so it can be adjusted." },
      { question: "Is Ashiatsu the same as deep tissue?", answer: "Not exactly. Ashiatsu is a specific barefoot technique, while deep tissue describes a style of focused, deeper bodywork. Ashiatsu can create the deep compression some clients seek from deep tissue massage." },
      { question: "Should I try Ashiatsu if I have never had it before?", answer: "Many first-time clients try Ashiatsu. Let your therapist know it is your first session so they can explain the process and check in on your comfort throughout." },
    ],
    pricing: [
      { duration: "60 minutes", price: "$85", detail: "A full-body introduction to Ashiatsu’s broad, deep compression." },
      { duration: "90 minutes", price: "$125", detail: "More time for sustained compression, gliding work, and assisted stretching." },
    ],
    accent: "ashiatsu",
    image: "/images/relaxing-treatment_7acaac42.webp",
    imageAlt: "Relaxing massage treatment in a softly lit setting",
  },
  {
    slug: "lymphatic-massage",
    legacySlug: "lymphatic",
    name: "Manual Lymphatic Drainage Massage",
    pageTitle: "Manual Lymphatic Drainage Massage in Kansas City",
    metaDescription: "Gentle manual lymphatic drainage massage in Kansas City, MO. Explore 45–90 minute sessions at Soul Balm Massage Therapy.",
    eyebrow: "A gentle, mindful modality",
    heroSummary: "A light, rhythmic massage approach that feels very different from deep-tissue work.",
    intro: "Looking for lymphatic drainage massage in Kansas City? Soul Balm Massage Therapy offers a gentle, specialized approach that uses light, rhythmic techniques rather than the deeper pressure used in many traditional massages.",
    definitionTitle: "What is manual lymphatic drainage?",
    definition: [
      "Manual lymphatic drainage, often abbreviated MLD, is a gentle massage technique using light, rhythmic movements. It is not the same as deep tissue massage.",
      "People may also search for this service as lymphatic massage, lymphatic drainage massage, or MLD massage.",
    ],
    whyTitle: "Why choose lymphatic-focused work?",
    whyIntro: "This approach may be a fit when you are looking for:",
    points: [
      "Very light pressure rather than deep muscle work",
      "Slow, rhythmic massage movements",
      "A session that feels different from a traditional massage",
      "Gentle, client-led communication throughout the appointment",
      "A dedicated one-on-one setting for a slower experience",
    ],
    comparisonTitle: "Manual lymphatic drainage vs. regular massage",
    comparison: [
      "Traditional massage may use moderate-to-deep pressure to work with muscles and areas of tension. Manual lymphatic drainage uses very light, rhythmic techniques instead.",
      "If you are looking for deep pressure, MLD is generally not the right choice. If you are specifically looking for gentle lymphatic-focused work, it may be a better fit.",
    ],
    expectationTitle: "What to expect during your MLD session",
    expectations: [
      "Your therapist will discuss your goals before beginning. Because MLD uses gentle techniques, the session may feel very different from deep tissue or Swedish massage.",
      "Unlike deep tissue massage, MLD uses very light pressure and slow, rhythmic movements. It should not feel like someone is digging into the muscles.",
      "Massage is not a substitute for medical care. Please speak with your healthcare provider about health questions, and reach out to Soul Balm before booking if you would like to discuss the service.",
    ],
    faqs: [
      { question: "What is lymphatic drainage massage?", answer: "Lymphatic drainage massage is a gentle, rhythmic massage technique focused on lymphatic drainage techniques." },
      { question: "Is lymphatic drainage massage deep?", answer: "No. Manual lymphatic drainage uses light pressure and rhythmic movements rather than the deep pressure associated with deep tissue massage." },
      { question: "What is MLD massage?", answer: "MLD stands for manual lymphatic drainage. It is a specialized form of gentle massage focused on lymphatic drainage techniques." },
    ],
    pricing: [
      { duration: "45 minutes", price: "$60", detail: "A shorter gentle session when a full-length appointment is not needed." },
      { duration: "60 minutes", price: "$85", detail: "A standard option that allows time for a complete, unhurried MLD session." },
      { duration: "75 minutes", price: "$100", detail: "Additional time for a slow, thorough session without rushing the technique." },
      { duration: "90 minutes", price: "$125", detail: "A longer appointment when additional time is preferred." },
    ],
    accent: "lymphatic",
    image: "/images/oil-treatment_40ef51ac.webp",
    imageAlt: "Calming massage treatment with oil in a warm setting",
  },
  {
    slug: "prenatal-massage",
    legacySlug: "prenatal",
    name: "Prenatal Massage",
    pageTitle: "Prenatal Massage in Kansas City",
    metaDescription: "Gentle prenatal massage in Kansas City, MO for pregnancy-related comfort and relaxation. Explore 30–90 minute sessions at Soul Balm Massage Therapy.",
    eyebrow: "Nurturing care for expecting clients",
    heroSummary: "A gentle, customized massage experience designed around comfort, positioning, relaxation, and the changing needs of pregnancy.",
    intro: "Pregnancy can bring major changes to the body. If you are looking for prenatal massage in Kansas City, Soul Balm Massage Therapy offers a gentle, customized massage experience designed around comfort, positioning, relaxation, and the changing needs of pregnancy.",
    definitionTitle: "What is prenatal massage?",
    definition: [
      "Prenatal massage, also called pregnancy massage, is massage therapy adapted for people who are pregnant. The session can focus on relaxation and areas of everyday pregnancy-related muscle tension while taking comfort and positioning into account.",
      "It is similar in some ways to Swedish massage, with the session adapted for pregnancy-related comfort and positioning needs.",
    ],
    whyTitle: "Why do people choose prenatal massage?",
    whyIntro: "People may seek prenatal massage for:",
    points: [
      "Relaxation and self-care during pregnancy",
      "Everyday muscle tension",
      "Back, hip, shoulder, or neck discomfort",
      "A calming massage experience adapted to pregnancy",
      "Comfort and positioning during a massage session",
    ],
    comparisonTitle: "Prenatal vs. regular massage",
    comparison: [
      "Prenatal massage is adapted specifically for pregnancy, including positioning and technique considerations. A regular massage may not be designed around pregnancy-related comfort and positioning.",
      "As pregnancy progresses, changes in posture, activity, and body mechanics can contribute to muscle tension in areas such as the low back, hips, shoulders, and legs.",
    ],
    expectationTitle: "What to expect during a prenatal massage",
    expectations: [
      "Your comfort comes first. Your therapist will discuss how far along you are, what areas you would like addressed, and how you are feeling that day.",
      "Positioning may be adapted from a traditional massage setup to accommodate pregnancy and help you remain comfortable. Pressure and techniques are also adjusted as appropriate.",
      "Let your therapist know that you are pregnant so your session can be planned accordingly.",
    ],
    faqs: [
      { question: "What is the difference between prenatal and regular massage?", answer: "Prenatal massage is adapted specifically for pregnancy, including positioning and technique considerations. A regular massage may not be designed around pregnancy-related comfort and positioning." },
      { question: "Do I need to tell my massage therapist that I am pregnant?", answer: "Yes. Your therapist needs to know that you are pregnant so the session can be adapted appropriately." },
      { question: "How often can I get a prenatal massage?", answer: "There is no universal schedule—it depends on your comfort, goals, and how your pregnancy is going." },
    ],
    pricing: [
      { duration: "30 minutes", price: "$45", detail: "A shorter session for focused work and a minimal time commitment." },
      { duration: "45 minutes", price: "$60", detail: "Time to address key areas such as the low back, hips, shoulders, or neck." },
      { duration: "60 minutes", price: "$85", detail: "A balanced option for a full prenatal massage experience." },
      { duration: "75 minutes", price: "$100", detail: "Full-body attention with extra time for areas that need it." },
      { duration: "90 minutes", price: "$125", detail: "A longer, unhurried prenatal session when comfort and positioning permit." },
    ],
    accent: "prenatal",
    image: "/images/studio-lobby_f9d9b0ad.jpg",
    imageAlt: "Soul Balm Massage Therapy’s welcoming studio space",
  },
];

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug || service.legacySlug === slug);
