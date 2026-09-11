export type StandardFaq = {
  question: string;
  answer: string;
};

export type StandardPoint = {
  title: string;
  body: string;
};

export type StandardServiceContent = {
  hero: {
    eyebrow: string;
    summary: string;
    visualLabel: string;
  };
  definition: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  why: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    points: StandardPoint[];
  };
  pricing: {
    titleLine1: string;
    titleLine2: string;
    introduction: string;
    note: string;
    details: Record<string, string>;
  };
  faqs: StandardFaq[];
};

export const standardServiceContent: Record<string, StandardServiceContent> = {
  "swedish-massage": {
    hero: {
      eyebrow: "A calming, flowing approach",
      summary: "A classic Swedish massage experience shaped around your comfort, preferred pressure, and time to pause at Soul Balm in Kansas City, MO.",
      visualLabel: "Calm, professional massage therapy atmosphere",
    },
    definition: {
      eyebrow: "A classic massage approach",
      title: "What Is Swedish Massage?",
      paragraphs: [
        "Swedish massage is a classic massage approach that uses flowing strokes, kneading, and adjustable pressure. Massage oil or cream supports smooth, gliding movements and an unhurried massage experience.",
        "At Soul Balm Massage Therapy in Kansas City, your session begins with a conversation about how you are feeling, the areas you would like to prioritize, and the pressure that feels comfortable. The time can be shaped around a full-body experience or additional attention to areas such as the neck, shoulders, back, or legs.",
      ],
    },
    why: {
      eyebrow: "Is it right for you?",
      title: "Why Choose Swedish Massage?",
      paragraphs: [
        "Swedish massage may be a fitting choice when you are looking for a calm, flowing massage experience and dedicated time for yourself. It can be a comfortable place to begin if you are new to massage or prefer gentle-to-moderate pressure.",
        "Before your appointment begins, you can share your preferences and the areas you would like to include. Communication is welcome throughout the session, so pressure and the focus of the massage can be adjusted around your comfort.",
      ],
      points: [
        { title: "A flowing full-body style", body: "Swedish massage uses smooth, connected strokes for a classic massage experience that can include balanced attention across the body." },
        { title: "Pressure shaped around you", body: "Discuss whether you prefer gentle, moderate, lighter, or firmer pressure, and share feedback during the appointment." },
        { title: "Time set aside for self-care", body: "Choose an appointment length that gives you room to slow down and make time for yourself in your Kansas City routine." },
        { title: "Your priorities guide the session", body: "Start with a conversation about the areas you would like to include, such as the neck, shoulders, back, or legs." },
      ],
    },
    pricing: {
      titleLine1: "Choosing Your Swedish",
      titleLine2: "Massage Session Length",
      introduction: "The session length you choose helps shape the pace and focus of your Swedish massage. A shorter appointment can center on a smaller set of priorities, while a longer appointment offers more time for a full-body experience, conversation, and a slower pace.",
      note: "Session duration does not guarantee a specific result. The best choice depends on your personal preferences, the areas you would like to discuss, your comfort with pressure, and the time you have available.",
      details: {
        "30 minutes": "A shorter option when you would like a focused Swedish massage session or have limited time.",
        "45 minutes": "Offers more time to include a few priority areas and check in about pressure and comfort.",
        "60 minutes": "A balanced option for a classic full-body Swedish massage at an unhurried pace.",
        "75 minutes": "Provides additional time for a full-body experience with room to spend longer where you would like attention.",
        "90 minutes": "Gives more time for a relaxed full-body session, ongoing comfort check-ins, and your selected priorities.",
        "120 minutes": "An extended option for clients who would like the most time to slow down and enjoy a longer session.",
      },
    },
    faqs: [
      { question: "What is Swedish massage?", answer: "Swedish massage is a classic massage approach that uses flowing strokes, kneading, massage oil or cream, and adjustable pressure for a calm, full-body experience." },
      { question: "What should I expect during a Swedish massage?", answer: "Your appointment begins with a conversation about your preferences, the areas you would like to include, and what pressure feels comfortable. You are welcome to share feedback throughout the session." },
      { question: "Can the pressure be adjusted during my massage?", answer: "Yes. Let your therapist know if you would like lighter or firmer pressure, a different approach, or more attention in a particular area." },
      { question: "Is Swedish massage a good option if I am new to massage?", answer: "Swedish massage can be a comfortable option for people who are new to massage because the session can be customized around your pressure preferences and comfort." },
      { question: "How is Swedish massage different from deep tissue massage?", answer: "Swedish massage generally emphasizes flowing strokes and a calming full-body experience. Deep tissue massage uses a slower, more focused approach and may involve more intentional pressure. The best fit depends on your preferred experience, pressure, and areas of focus." },
      { question: "How do I choose a Swedish massage session length?", answer: "Consider the time you have available, whether you would like a focused or full-body experience, and the areas you would like to discuss. A longer session allows for a slower pace and more flexibility, but does not guarantee a specific result." },
      { question: "What if I have a medical condition, injury, or treatment-related question?", answer: "If you have questions about whether massage is appropriate for a medical condition, injury, or treatment, seek guidance from a qualified healthcare professional before booking. Share relevant information with your massage therapist so you can discuss your comfort and session preferences." },
    ],
  },
  "ashiatsu-massage": {
    hero: {
      eyebrow: "A distinctive, grounded approach",
      summary: "A barefoot massage option in Kansas City with broad compression, long gliding strokes, and pressure shaped around your comfort.",
      visualLabel: "Calm, professional Ashiatsu massage setting",
    },
    definition: {
      eyebrow: "Focused care, your way",
      title: "What Is Ashiatsu Massage?",
      paragraphs: [
        "Ashiatsu is a barefoot massage technique in which the therapist uses bare feet, rather than relying only on hands and forearms, to create broad, sustained pressure across the body. The session may include broad compression, long gliding strokes, and assisted stretching.",
        "Because the foot distributes pressure over a larger surface area, Ashiatsu offers a different experience from traditional hand-based massage. Before your session at Soul Balm Massage Therapy in Kansas City, you can share the areas you would like to prioritize and the pressure that feels comfortable for you.",
      ],
    },
    why: {
      eyebrow: "Is it right for you?",
      title: "Why Choose Ashiatsu Massage?",
      paragraphs: [
        "Ashiatsu may be a thoughtful choice if you enjoy broad, sustained pressure and would like to experience a barefoot approach to massage. It offers an alternative to traditional hand-based work while keeping the conversation centered on your preferences and comfort.",
        "Your session begins with a discussion of what you would like from your time on the table. Feedback is welcome throughout, so the therapist can adjust pressure and techniques to suit your comfort in the moment.",
      ],
      points: [
        { title: "A distinctive barefoot approach", body: "Experience massage techniques delivered with the therapist’s bare feet rather than exclusively with hands and forearms." },
        { title: "Broad, sustained pressure", body: "The larger surface area of the foot creates a broad compression style that can feel different from more pinpoint hand-based work." },
        { title: "Room to share your preferences", body: "Discuss the areas you would like to prioritize and the pressure you prefer before the session begins." },
        { title: "Communication throughout", body: "Let your therapist know how the pressure feels so techniques and pressure can be adjusted to your comfort." },
      ],
    },
    pricing: {
      titleLine1: "Choosing Your Ashiatsu",
      titleLine2: "Massage Session Length",
      introduction: "The time you reserve helps shape the pace and focus of your Ashiatsu session. A 60-minute appointment offers time for a full-body introduction, while a 90-minute appointment allows a more unhurried pace and additional time for the areas you would like to prioritize.",
      note: "Session duration does not guarantee a specific result. The best choice depends on your personal preferences, the areas you would like to discuss, your comfort with pressure, and the time you have available.",
      details: {
        "60 minutes": "A full-body introduction to Ashiatsu’s broad, deep compression, with time to share your preferences and check in about comfort.",
        "90 minutes": "More time for sustained compression, long gliding work, assisted stretching, and an unhurried pace across the areas you would like to prioritize.",
      },
    },
    faqs: [
      { question: "What is Ashiatsu massage?", answer: "Ashiatsu is a barefoot massage technique in which the therapist uses bare feet to provide broad compression, long gliding strokes, and assisted stretching." },
      { question: "What does barefoot massage mean?", answer: "Barefoot massage is another name commonly used for Ashiatsu. It means the therapist uses bare feet to deliver massage techniques rather than relying exclusively on hands." },
      { question: "Is Ashiatsu the same as deep tissue massage?", answer: "Not exactly. Ashiatsu is a specific barefoot technique, while deep tissue massage is a style of focused bodywork often performed with hands, fingers, forearms, or elbows. Both can involve focused or deeper pressure, but the experience and techniques differ." },
      { question: "Can the pressure be adjusted during an Ashiatsu session?", answer: "Yes. Before the session, you can share your pressure preferences, and you are encouraged to speak up during the massage if you would like an adjustment." },
      { question: "What should I expect during my first Ashiatsu massage?", answer: "Your therapist can explain the barefoot approach before beginning. The session may include broad compression, long gliding strokes, and assisted stretching, with check-ins about your comfort." },
      { question: "How do I choose between the 60- and 90-minute Ashiatsu sessions?", answer: "A 60-minute session is a full-body introduction to Ashiatsu. A 90-minute session provides more time for an unhurried pace and additional attention across the areas you would like to prioritize." },
      { question: "What if I have a health-related question before booking?", answer: "Massage is not a substitute for medical care. If you have a question about whether massage is appropriate for a health concern, injury, or treatment, seek guidance from a qualified healthcare professional before booking and share relevant information with your massage therapist." },
    ],
  },
  "lymphatic-massage": {
    hero: {
      eyebrow: "Gentle, rhythmic care",
      summary: "A light-pressure massage experience with slow, mindful movements and room to pause.",
      visualLabel: "Quiet, welcoming treatment-room atmosphere",
    },
    definition: {
      eyebrow: "A gentler approach",
      title: "What Is Manual Lymphatic Drainage Massage?",
      paragraphs: [
        "Manual lymphatic drainage, often called MLD, is a gentle massage approach that uses light, rhythmic movements. It feels distinctly different from deep tissue massage, which uses more focused pressure.",
        "If you are searching for lymphatic massage, lymphatic drainage massage, or MLD massage in Kansas City, this service offers a slower, light-touch experience. Before your appointment begins, you can share your preferences and ask questions about what the session will feel like.",
      ],
    },
    why: {
      eyebrow: "Is it right for you?",
      title: "Why Choose Manual Lymphatic Drainage Massage?",
      paragraphs: [
        "Manual lymphatic drainage massage may be a good fit if you are looking for a very gentle style of bodywork rather than deep muscle work. The focus is on light, rhythmic touch and a pace that feels calm and unhurried.",
        "Every appointment at Soul Balm begins with a conversation. You can talk through what you are looking for, how the pressure feels, and whether this light-touch approach matches the kind of massage experience you prefer.",
      ],
      points: [
        { title: "Very light pressure", body: "Choose a massage style that uses a much lighter touch than deep tissue or other pressure-focused approaches." },
        { title: "Slow, rhythmic movements", body: "Experience a measured, gentle approach with movements that feel different from a traditional massage session." },
        { title: "A quieter pace", body: "Set aside time for a slower appointment in a dedicated, one-on-one setting in Kansas City." },
        { title: "Conversation-led care", body: "Share your preferences before and during the session so the experience can stay centered on your comfort." },
      ],
    },
    pricing: {
      titleLine1: "Choosing Your Manual Lymphatic",
      titleLine2: "Drainage Massage Session Length",
      introduction: "The time you book helps shape the pace of your appointment. A shorter session offers time for a conversation and a gentle, focused experience, while a longer session allows for a more unhurried pace and additional time to discuss your preferences.",
      note: "Session duration does not guarantee a specific result. The best choice depends on your personal preferences, the areas you would like to discuss, your comfort, and the time you have available. If you are unsure, use the booking page or contact Soul Balm Massage Therapy to discuss the appointment options.",
      details: {
        "45 minutes": "A shorter option when you would like a light-touch session with a focused, unhurried pace.",
        "60 minutes": "Provides time for a gentle session, including a conversation about your preferences and comfort.",
        "75 minutes": "Allows for a slower pace and more flexibility in how the session is structured around your preferences.",
        "90 minutes": "Gives the most time for an unhurried appointment, ongoing check-ins, and a gentle pace.",
      },
    },
    faqs: [
      { question: "What is manual lymphatic drainage massage?", answer: "Manual lymphatic drainage, or MLD, is a gentle massage approach that uses light, rhythmic movements. It is different from deep tissue massage and other styles that use more focused pressure." },
      { question: "Is manual lymphatic drainage massage deep?", answer: "No. This approach uses very light pressure and slow, rhythmic movements rather than the deeper pressure associated with deep tissue massage." },
      { question: "Is MLD the same as lymphatic massage?", answer: "MLD is short for manual lymphatic drainage. People may use MLD massage, lymphatic massage, and lymphatic drainage massage when searching for this gentle, lymphatic-focused service." },
      { question: "What should I expect during an MLD massage session?", answer: "Your appointment begins with a conversation about your preferences. During the session, expect light touch and slow, rhythmic movements rather than deep or digging pressure." },
      { question: "Can I share feedback about pressure during the session?", answer: "Yes. Communication is encouraged. Let your therapist know how the pressure and pace feel so your preferences can be part of the conversation throughout the appointment." },
      { question: "How do I choose between a 45-, 60-, 75-, or 90-minute session?", answer: "Consider the amount of time you would like to set aside, the pace you prefer, and the areas you would like to discuss. Longer appointments allow for a more unhurried session, but session duration does not guarantee a specific result." },
      { question: "Is manual lymphatic drainage massage the same as deep tissue massage?", answer: "No. Deep tissue massage generally uses more focused pressure, while manual lymphatic drainage uses a much lighter, rhythmic approach. Your preference for pressure and overall experience can help guide your choice." },
      { question: "What if I have a medical condition or a medical question before booking?", answer: "Massage is not a substitute for medical care. If you have questions about a medical condition, treatment, or whether this service is appropriate for you, seek guidance from a qualified healthcare professional before booking." },
    ],
  },
  "prenatal-massage": {
    hero: {
      eyebrow: "Comfort-centered care for pregnancy",
      summary: "A gentle, customized massage experience in Kansas City, shaped around your comfort, positioning, relaxation, and the changing needs of pregnancy.",
      visualLabel: "Calm, welcoming prenatal massage setting",
    },
    definition: {
      eyebrow: "Comfort, considered throughout",
      title: "What Is Prenatal Massage?",
      paragraphs: [
        "Prenatal massage, also called pregnancy massage, is a massage session adapted for people who are pregnant. It is designed with comfort, positioning, and your preferences in mind, with time to talk about how you are feeling on the day of your appointment.",
        "Like other massage sessions, prenatal massage can be a quiet opportunity to pause and focus on relaxation. At Soul Balm Massage Therapy in Kansas City, the session can be tailored around the areas you would like to prioritize and the positioning that feels most comfortable for you.",
      ],
    },
    why: {
      eyebrow: "Is it right for you?",
      title: "Why Choose Prenatal Massage?",
      paragraphs: [
        "People choose prenatal massage when they want a massage experience that takes pregnancy-related comfort and positioning into account. Before the session begins, you can share your preferences, the areas you would like to focus on, and anything that would help you feel more at ease.",
        "Every pregnancy and every day can feel different. Your session is guided by ongoing communication, so you can check in about positioning, pressure, and comfort throughout your time at Soul Balm.",
      ],
      points: [
        { title: "Positioning centered on comfort", body: "The session setup can be adapted to help you settle in comfortably during your appointment." },
        { title: "A gentle, personalized pace", body: "Share the pace and pressure you prefer so the massage can be shaped around your comfort." },
        { title: "Time for the areas you choose", body: "Use the conversation before your session to identify the areas you would like to prioritize." },
        { title: "A calm pause in your routine", body: "Set aside one-on-one time for relaxation and self-care during pregnancy." },
      ],
    },
    pricing: {
      titleLine1: "Choosing Your Prenatal",
      titleLine2: "Massage Session Length",
      introduction: "The amount of time you book helps shape the pace and focus of your session. A shorter appointment may be a good fit when you would like a focused massage, while a longer appointment allows more time to settle in, discuss your preferences, and move at an unhurried pace.",
      note: "Session duration does not guarantee a specific result. The best choice depends on your personal preferences, your comfort with positioning and pressure, the areas you would like to discuss, and the time you have available. If you are unsure, use the booking page or contact Soul Balm Massage Therapy to discuss the appointment options.",
      details: {
        "30 minutes": "A shorter session for focused attention and a minimal time commitment.",
        "45 minutes": "Allows more time to settle in and prioritize the areas you would like to discuss.",
        "60 minutes": "A balanced option with time for a relaxed, customized prenatal massage experience.",
        "75 minutes": "Offers additional time for an unhurried pace and your chosen areas of focus.",
        "90 minutes": "The longest session option, with extra time to settle in and move at a comfortable pace.",
      },
    },
    faqs: [
      { question: "What is prenatal massage?", answer: "Prenatal massage is massage adapted for people who are pregnant, with comfort, positioning, and individual preferences considered throughout the session." },
      { question: "How is prenatal massage different from a regular massage?", answer: "Prenatal massage is planned with pregnancy-related comfort and positioning in mind. The conversation before and during the session helps guide the setup, pace, and pressure." },
      { question: "Should I tell my massage therapist that I am pregnant?", answer: "Yes. Let Soul Balm know that you are pregnant so the session can be planned with that information in mind." },
      { question: "What happens before a prenatal massage session?", answer: "You can talk about how you are feeling, the areas you would like to prioritize, and any preferences around comfort, positioning, and pressure before the massage begins." },
      { question: "Can I ask for adjustments during my session?", answer: "Yes. Ongoing communication is welcome. Let your therapist know if you would like to adjust your positioning, pressure, pace, or focus during the appointment." },
      { question: "Which prenatal massage session length should I choose?", answer: "The choice depends on the time you have available, the pace you prefer, and how much time you would like for conversation, settling in, and the areas you want to prioritize." },
      { question: "How often should I book prenatal massage?", answer: "There is no one schedule that fits everyone. Choose appointments based on your preferences, comfort, and plans, and contact Soul Balm if you would like help choosing a session length." },
    ],
  },
};
