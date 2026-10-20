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
    introduction: string | string[];
    closing?: string;
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
        "At Soul Balm Massage Therapy in Kansas City, your Swedish massage experience is designed to encourage relaxation, ease everyday muscle tension, and promote an overall sense of well-being. Through rhythmic, flowing movements, this gentle yet effective approach helps calm the nervous system, reduce stress, and support the body’s natural ability to rest and restore.",
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
        { title: "Promotes Deep Relaxation", body: "Gentle, rhythmic strokes help calm the nervous system, ease stress, and encourage a deeper sense of relaxation and well-being." },
        { title: "Eases Everyday Muscle Tension", body: "Flowing movements and gentle kneading help relieve muscular tightness and discomfort associated with daily activities and stress." },
        { title: "Supports Rest and Restoration", body: "Encourages your body to slow down and unwind, offering a restorative break from the demands of everyday life while promoting a sense of calm and overall well-being." },
        { title: "A Personalized Relaxation Experience", body: "Each massage is tailored to your individual needs, combining flowing techniques and comfortable pressure to create a soothing, restorative experience." },
      ],
    },
    pricing: {
      titleLine1: "Choosing Your Swedish",
      titleLine2: "Massage Session Length",
      introduction: [
        "The length of your session determines how much hands-on massage time you’ll receive.",
        "Sessions shorter than 60 minutes are best suited for focused attention on specific areas rather than a full-body massage.",
        "While a 60-minute session allows for a full-body massage, longer sessions provide additional time to slow down, unwind, and experience deeper relaxation. It can take time for the nervous system to settle, making an unhurried massage especially beneficial.",
        "A 75-minute session offers a more relaxed pace, while a 90-minute session is often the sweet spot for a truly restorative experience. It provides ample time for a full-body massage, allowing the body to unwind naturally while still offering additional attention to areas of tension.",
        "For those seeking an extended relaxation experience, a 120-minute session provides the opportunity to fully immerse yourself in a slower, more nurturing massage.",
      ],
      note: "Session duration does not guarantee a specific result. The best choice depends on your personal preferences, the areas you would like to discuss, your comfort with pressure, and the time you have available.",
      details: {
        "30 minutes": "Ideal for a brief, focused massage addressing one specific area of tension while providing an opportunity to relax and unwind.",
        "45 minutes": "Allows additional time for focused relaxation and attention to a primary area of concern and surrounding muscle groups.",
        "60 minutes": "Provides time for a full-body relaxation massage, although the pace may be more structured to accommodate the entire body.",
        "75 minutes": "Offers a more leisurely full-body massage, allowing additional time to unwind and give attention to areas of tension.",
        "90 minutes": "The sweet spot for a restorative full-body massage, providing ample time for relaxation along with additional attention to areas needing extra care.",
        "120 minutes": "An extended, unhurried full-body experience designed for those seeking prolonged relaxation, nurturing touch, and a deeper sense of restoration.",
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
      summary: "Ashiatsu is a specialized massage technique that uses the therapist’s feet to deliver broad, sustained pressure and long, flowing strokes.",
      visualLabel: "Calm, professional Ashiatsu massage setting",
    },
    definition: {
      eyebrow: "Focused care, your way",
      title: "What Is Ashiatsu Massage?",
      paragraphs: [
        "Ashiatsu is a specialized barefoot massage technique. The name comes from the Japanese words *ashi*, meaning foot, and *atsu*, meaning pressure.",
        "Unlike traditional massage techniques that primarily use the hands and forearms, Ashiatsu uses the therapist’s feet to deliver broad, sustained pressure and long, flowing strokes. Overhead bars provide balance and support, allowing the therapist to control the pressure while performing the massage.",
      ],
    },
    why: {
      eyebrow: "Is it right for you?",
      title: "Why Choose Ashiatsu Massage?",
      paragraphs: [
        "Ashiatsu offers a unique approach to deep pressure massage, using the broad surface of the therapist’s feet to deliver smooth, sustained compression across larger muscle groups. It’s an excellent option for those who enjoy firm, substantial pressure or are looking for an alternative to traditional hands-on massage.",
        "Many of my Ashiatsu clients report experiencing relief for several days following their sessions, often describing benefits that last longer than what they’ve experienced with traditional hands-on massage.",
      ],
      points: [
        { title: "Broad, Deep Pressure", body: "The larger surface area of the foot distributes pressure more evenly, providing deep, sustained compression without the concentrated pressure of thumbs or elbows." },
        { title: "Relief from Muscle Tension", body: "Deep, flowing strokes and sustained compression may help ease muscular tightness, stiffness, and discomfort, particularly in larger muscle groups." },
        { title: "Deep Work with Less Pinpoint Pressure", body: "Ideal for those who prefer firm pressure but find traditional deep tissue techniques too concentrated or uncomfortable." },
        { title: "Relaxation and Stress Relief", body: "Long, rhythmic strokes combined with sustained pressure can promote deep relaxation while addressing muscular tension." },
      ],
    },
    pricing: {
      titleLine1: "Choosing Your Ashiatsu",
      titleLine2: "Massage Session Length",
      introduction: "The time you reserve helps shape the pace and focus of your Ashiatsu session. A 60-minute appointment offers time for a full-body introduction, while 75- and 90-minute appointments allow a more unhurried pace and additional time for the areas you would like to prioritize.",
      note: "Session duration does not guarantee a specific result. The best choice depends on your personal preferences, the areas you would like to discuss, your comfort with pressure, and the time you have available.",
      details: {
        "60 minutes": "A full-body introduction to Ashiatsu’s broad, deep compression, with time to share your preferences and check in about comfort.",
        "75 minutes": "Additional time for sustained compression and long, flowing strokes, allowing for a more thorough session at a comfortable pace.",
        "90 minutes": "More time for sustained compression, long gliding work, assisted stretching, and an unhurried pace across the areas you would like to prioritize.",
      },
    },
    faqs: [
      { question: "What is Ashiatsu massage?", answer: "Ashiatsu is a barefoot massage technique in which the therapist uses bare feet to provide broad compression, long gliding strokes, and assisted stretching." },
      { question: "What does barefoot massage mean?", answer: "Barefoot massage is another name commonly used for Ashiatsu. It means the therapist uses bare feet to deliver massage techniques rather than relying exclusively on hands." },
      { question: "Is Ashiatsu the same as deep tissue massage?", answer: "Not exactly. Ashiatsu is a specific barefoot technique, while deep tissue massage is a style of focused bodywork often performed with hands, fingers, forearms, or elbows. Both can involve focused or deeper pressure, but the experience and techniques differ." },
      { question: "Can the pressure be adjusted during an Ashiatsu session?", answer: "Yes. Before the session, you can share your pressure preferences, and you are encouraged to speak up during the massage if you would like an adjustment." },
      { question: "What should I expect during my first Ashiatsu massage?", answer: "Your therapist can explain the barefoot approach before beginning. The session may include broad compression, long gliding strokes, and assisted stretching, with check-ins about your comfort." },
      { question: "How do I choose between the 60-, 75-, and 90-minute Ashiatsu sessions?", answer: "A 60-minute session is a full-body introduction to Ashiatsu. A 75-minute session allows additional time for sustained compression and long, flowing strokes at a comfortable pace. A 90-minute session provides more time for an unhurried pace and additional attention across the areas you would like to prioritize." },
      { question: "What if I have a health-related question before booking?", answer: "Massage is not a substitute for medical care. If you have a question about whether massage is appropriate for a health concern, injury, or treatment, seek guidance from a qualified healthcare professional before booking and share relevant information with your massage therapist." },
    ],
  },
  "lymphatic-massage": {
    hero: {
      eyebrow: "Gentle, Rhythmic Care",
      summary: "A specialized massage technique using gentle, rhythmic skin-stretching movements to stimulate lymphatic flow.",
      visualLabel: "Quiet, welcoming treatment-room atmosphere",
    },
    definition: {
      eyebrow: "A Gentler Approach",
      title: "What Is Manual Lymphatic Drainage Massage?",
      paragraphs: [
        "Manual lymphatic drainage (MLD) is a specialized, light-touch technique designed to encourage the movement of lymphatic fluid through the body’s lymphatic system. Unlike traditional massage, which focuses on muscles and soft tissues, MLD uses gentle, rhythmic skin-stretching movements to stimulate superficial lymphatic vessels and support the body’s natural drainage process.",
        "MLD is performed without oils or lotions, allowing the therapist to gently stretch the skin rather than glide over it. This technique can help manage certain types of swelling, fluid retention, and conditions affecting lymphatic flow.",
        "If you are searching for lymphatic massage, lymphatic drainage massage, or MLD massage in Kansas City, this specialized treatment is designed to support lymphatic flow and help manage swelling and fluid retention.",
      ],
    },
    why: {
      eyebrow: "Is It Right for You?",
      title: "Why Choose Manual Lymphatic Drainage Massage?",
      paragraphs: [
        "Manual lymphatic drainage may be beneficial for individuals experiencing swelling, fluid retention, or certain conditions that affect lymphatic flow. This specialized technique encourages the movement of lymphatic fluid and supports the body’s natural drainage process.",
        "Every appointment at Soul Balm Massage Therapy begins with a conversation about your concerns, health history, and areas of swelling or fluid buildup. This helps determine whether MLD is appropriate for you and which areas need attention.",
      ],
      points: [
        { title: "Helps Manage Swelling", body: "Encourages the movement of excess lymphatic fluid to help reduce certain types of swelling and fluid buildup." },
        { title: "Supports Healthy Lymphatic Flow", body: "Uses specialized techniques to encourage the one-way movement of lymphatic fluid through the lymphatic system, supporting the body’s natural drainage process." },
        { title: "Gentle, Targeted Treatment", body: "Uses light, rhythmic skin-stretching movements without oils or lotions, focusing on the lymphatic system rather than the muscles." },
        { title: "Individualized Care", body: "Treatment is tailored to your specific concerns, health history, and areas requiring attention." },
      ],
    },
    pricing: {
      titleLine1: "Choosing Your Manual Lymphatic",
      titleLine2: "Drainage Massage Session Length",
      introduction: "The appropriate session length depends on your individual needs, the areas requiring treatment, and the extent of swelling or fluid retention. A shorter session may be sufficient for one localized area, while multiple areas or more involved conditions may require additional time.",
      closing: "Session length is determined by your individual treatment needs rather than the amount of pressure or relaxation desired. If you’re unsure which appointment length is appropriate, please contact Soul Balm Massage Therapy for guidance before booking.",
      note: "Session duration does not guarantee a specific result. The best choice depends on your personal preferences, the areas you would like to discuss, your comfort, and the time you have available. If you are unsure, use the booking page or contact Soul Balm Massage Therapy to discuss the appointment options.",
      details: {
        "45 minutes": "Ideal for focused treatment of one localized area, depending on the condition and treatment needs.",
        "60 minutes": "Suitable for treating one or more areas that require additional attention.",
        "75 minutes": "Allows additional treatment time for multiple areas or more involved lymphatic concerns.",
        "90 minutes": "Best suited for more extensive treatment needs involving multiple areas or conditions requiring a longer session.",
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
      introduction: [
        "The length of your session determines how much hands-on massage time you’ll receive. Sessions shorter than 60 minutes are best suited for focused attention on specific areas, as they don’t allow adequate time for a comfortable, unhurried full-body massage.",
        "A 60-minute session allows for a full-body massage, while 75- and 90-minute sessions offer additional time to settle in, get comfortable, and enjoy a more relaxed, nurturing experience. These longer sessions are especially beneficial during pregnancy, when comfort and positioning are important.",
      ],
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
