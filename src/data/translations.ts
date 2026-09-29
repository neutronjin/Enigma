import { Language } from '../types';

export interface TranslationDictionary {
  // Brand
  brandName: string;
  brandTagline: string;
  mottoTitle: string;
  mottoSubtitle: string;
  officialMotto: string;

  // Nav
  navHome: string;
  navMotto: string;
  navEvents: string;
  navLeads: string;
  navFaq: string;
  navFeedback: string;
  navSocials: string;
  navJoin: string;

  // Hero
  heroBadge: string;
  heroHeadline: string;
  heroDescription: string;
  heroCtaEvents: string;
  heroCtaJoin: string;
  heroStatMembers: string;
  heroStatEvents: string;
  heroStatYears: string;
  heroStatProjects: string;

  // Motto & About Section
  mottoSectionTitle: string;
  mottoSectionSubtitle: string;
  missionTitle: string;
  missionText: string;
  visionTitle: string;
  visionText: string;
  valuesTitle: string;
  value1Title: string;
  value1Desc: string;
  value2Title: string;
  value2Desc: string;
  value3Title: string;
  value3Desc: string;
  value4Title: string;
  value4Desc: string;
  quoteText: string;
  quoteAuthor: string;

  // Events
  eventsTitle: string;
  eventsSubtitle: string;
  eventsYearLabel: string;
  eventsAllYears: string;
  eventDate: string;
  eventTime: string;
  eventVenue: string;
  eventMentor: string;
  eventSeats: string;
  eventRegisterBtn: string;
  eventViewDetailsBtn: string;
  eventCompletedBadge: string;
  noEventsFound: string;

  // Core Leads
  leadsTitle: string;
  leadsSubtitle: string;
  leadRoleLabel: string;
  leadDeptLabel: string;
  leadFocusLabel: string;
  leadBlankNotice: string;

  // FAQ
  faqTitle: string;
  faqSubtitle: string;
  faqMoreQuestions: string;

  // Feedback
  feedbackTitle: string;
  feedbackSubtitle: string;
  feedbackTypeLabel: string;
  feedbackRatingLabel: string;
  feedbackNameLabel: string;
  feedbackEmailLabel: string;
  feedbackMsgLabel: string;
  feedbackSubmitBtn: string;
  feedbackSuccessMsg: string;

  // Socials
  socialsTitle: string;
  socialsSubtitle: string;
  officialEmailTitle: string;
  officialEmailDesc: string;

  // Footer
  footerRights: string;
  footerMadeWith: string;
  footerQuickLinks: string;
  footerContactTitle: string;

  // Common UI
  darkMode: string;
  lightMode: string;
  languageSelect: string;
  closeBtn: string;
  submitBtn: string;
  cancelBtn: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    brandName: "ENIGMA",
    brandTagline: "Unraveling Technology, Innovation & Creativity",
    mottoTitle: "The Guiding Creed",
    mottoSubtitle: "The foundational compass that guides every student builder at ENIGMA.",
    officialMotto: "Decoding the Unknown, Building the Future",

    navHome: "Home",
    navMotto: "Motto",
    navEvents: "Events",
    navLeads: "Council",
    navFaq: "FAQ",
    navFeedback: "Feedback",
    navSocials: "Connect",
    navJoin: "Join Club",

    heroBadge: "University Technical Club",
    heroHeadline: "Where curiosity meets code and innovation has no boundaries.",
    heroDescription: "A welcoming, student-driven collective deciphering engineering mysteries, building real software and hardware, and empowering tomorrow's builders.",
    heroCtaEvents: "Explore Events",
    heroCtaJoin: "Join Community",
    heroStatMembers: "Active Students",
    heroStatEvents: "Annual Meetups",
    heroStatYears: "Years of Impact",
    heroStatProjects: "Projects Shipped",

    mottoSectionTitle: "The Philosophy of ENIGMA",
    mottoSectionSubtitle: "Every line of code and every soldered circuit starts with an inquisitive mind willing to solve a mystery.",
    missionTitle: "Our Mission",
    missionText: "To demystify emerging technologies through peer-to-peer mentoring, practical workshops, competitive hackathons, and inclusive collaborative spaces where no question is too basic.",
    visionTitle: "Our Vision",
    visionText: "To cultivate an open, empathetic community of engineers and creators who leverage technological breakthroughs to solve genuine societal and campus problems.",
    valuesTitle: "Core Values",
    value1Title: "Peer-to-Peer Learning",
    value1Desc: "Seniors mentor juniors with warmth and patience; knowledge is freely shared, never hoarded.",
    value2Title: "Ship Real Products",
    value2Desc: "We go beyond rote classroom theory to deploy production code, hardware rigs, and usable tools.",
    value3Title: "Radical Inclusivity",
    value3Desc: "Open to students from every department and year, regardless of prior coding experience.",
    value4Title: "Open Source Spirit",
    value4Desc: "We contribute back to the public domain and celebrate community-first building.",
    quoteText: "Technology is not an exclusive fortress. It is a welcoming puzzle waiting to be decoded by curious minds.",
    quoteAuthor: "ENIGMA Student Council",

    eventsTitle: "Club Events & Gatherings",
    eventsSubtitle: "Curated workshops, hackathons, and technical bootcamps organized year by year.",
    eventsYearLabel: "Select Year",
    eventsAllYears: "All Years",
    eventDate: "Date",
    eventTime: "Time",
    eventVenue: "Venue",
    eventMentor: "Speaker / Lead",
    eventSeats: "Seats Remaining",
    eventRegisterBtn: "Register / RSVP",
    eventViewDetailsBtn: "View Overview",
    eventCompletedBadge: "Completed",
    noEventsFound: "No events recorded for this year.",

    leadsTitle: "Core Leadership Council",
    leadsSubtitle: "Dedicated portfolios overseeing club operations, technical direction, and student mentorship.",
    leadRoleLabel: "Designation",
    leadDeptLabel: "Department",
    leadFocusLabel: "Domain Focus",
    leadBlankNotice: "Positions for current academic cycle",

    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Everything you need to know about joining, participating in events, and learning with ENIGMA.",
    faqMoreQuestions: "Have another question?",

    feedbackTitle: "Member & Student Feedback",
    feedbackSubtitle: "Help us shape upcoming workshops, suggest hackathon themes, or share your thoughts on the club.",
    feedbackTypeLabel: "Feedback Category",
    feedbackRatingLabel: "Overall Experience",
    feedbackNameLabel: "Your Name (Optional)",
    feedbackEmailLabel: "Your Email (Optional)",
    feedbackMsgLabel: "Your Suggestions & Remarks *",
    feedbackSubmitBtn: "Send Feedback",
    feedbackSuccessMsg: "Thank you! Your feedback has been received.",

    socialsTitle: "Official Social Channels",
    socialsSubtitle: "Join our active community channels on Instagram, Discord, and WhatsApp.",
    officialEmailTitle: "Direct Inquiries & Contact",
    officialEmailDesc: "For official college correspondences, speaker invites, or collaborations, reach out directly at:",

    footerRights: "All rights reserved. Built with pride by ENIGMA Student Council.",
    footerMadeWith: "Crafted for students, by students.",
    footerQuickLinks: "Quick Links",
    footerContactTitle: "Official Email",

    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    languageSelect: "Language",
    closeBtn: "Close",
    submitBtn: "Submit",
    cancelBtn: "Cancel",
  },

  kn: {
    brandName: "ಎನಿಗ್ಮಾ (ENIGMA)",
    brandTagline: "ತಂತ್ರಜ್ಞಾನ, ನಾವೀನ್ಯತೆ ಮತ್ತು ಸೃಜನಶೀಲತೆಯ ಅನಾವರಣ",
    mottoTitle: "ಮಾರ್ಗದರ್ಶಿ ಧ್ಯೇಯ",
    mottoSubtitle: "ಎನಿಗ್ಮಾದಲ್ಲಿ ಪ್ರತಿಯೊಬ್ಬ ವಿದ್ಯಾರ್ಥಿ ಬಿಲ್ಡರ್‌ಗೆ ದಾರಿದೀಪವಾಗಿರುವ ಪ್ರಮುಖ ಧ್ಯೇಯವಾಕ್ಯ.",
    officialMotto: "ಅಜ್ಞಾತವನ್ನು ಅರ್ಥೈಸುತ್ತಾ, ಭವಿಷ್ಯವನ್ನು ನಿರ್ಮಿಸೋಣ",

    navHome: "ಮುಖಪುಟ",
    navMotto: "ಧ್ಯೇಯ",
    navEvents: "ಕಾರ್ಯಕ್ರಮಗಳು",
    navLeads: "ಕೌನ್ಸಿಲ್",
    navFaq: "ಪ್ರಶ್ನೋತ್ತರ (FAQ)",
    navFeedback: "ಪ್ರತಿಕ್ರಿಯೆ (Feedback)",
    navSocials: "ಸಂಪರ್ಕ",
    navJoin: "ಕ್ಲಬ್ ಸೇರಿ",

    heroBadge: "ವಿಶ್ವವಿದ್ಯಾಲಯ ತಾಂತ್ರಿಕ ಕ್ಲಬ್",
    heroHeadline: "ಕುತೂಹಲವು ಕೋಡಿಂಗ್ ಜೊತೆಗೂಡುವ ಜಾಗ, ನಾವೀನ್ಯತೆಗೆ ಎಲ್ಲೆಗಳಿಲ್ಲ.",
    heroDescription: "ಸಂಕೀರ್ಣ ಇಂಜಿನಿಯರಿಂಗ್ ರಹಸ್ಯಗಳನ್ನು ಬಿಡಿಸಿ, ನೈಜ ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಹಾರ್ಡ್‌ವೇರ್ ನಿರ್ಮಿಸುವ, ಮುಂದಿನ ತಲೆಮಾರಿನ ನಾಯಕರನ್ನು ರೂಪಿಸುವ ವಿದ್ಯಾರ್ಥಿ ನೇತೃತ್ವದ ಕ್ಲಬ್.",
    heroCtaEvents: "ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    heroCtaJoin: "ಸದಸ್ಯರಾಗಿ ಸೇರಿ",
    heroStatMembers: "ಸಕ್ರಿಯ ವಿದ್ಯಾರ್ಥಿಗಳು",
    heroStatEvents: "ವಾರ್ಷಿಕ ಸಮಾವೇಶಗಳು",
    heroStatYears: "ವರ್ಷಗಳ ಅನುಭವ",
    heroStatProjects: "ಪೂರ್ಣಗೊಂಡ ಯೋಜನೆಗಳು",

    mottoSectionTitle: "ಎನಿಗ್ಮಾದ ತತ್ವಶಾಸ್ತ್ರ ಮತ್ತು ಧ್ಯೇಯ",
    mottoSectionSubtitle: "ಪ್ರತಿಯೊಂದು ಕೋಡ್ ಸಾಲು ಮತ್ತು ಸರ್ಕ್ಯೂಟ್ ಹೊಸತನ್ನು ಅನ್ವೇಷಿಸುವ ಕುತೂಹಲದ ಮನಸ್ಸಿನಿಂದ ಆರಂಭವಾಗುತ್ತದೆ.",
    missionTitle: "ನಮ್ಮ ಗುರಿ (Mission)",
    missionText: "ಪರಸ್ಪರ ಕಲಿಕೆ, ಕಾರ್ಯಾಗಾರಗಳು, ಹ್ಯಾಕಥಾನ್‌ಗಳು ಮತ್ತು ಎಲ್ಲರನ್ನೂ ಒಳಗೊಳ್ಳುವ ಸ್ನೇಹಪರ ವಾತಾವರಣದ ಮೂಲಕ ಉದಯೋನ್ಮುಖ ತಂತ್ರಜ್ಞಾನಗಳನ್ನು ಸರಳಗೊಳಿಸುವುದು.",
    visionTitle: "ನಮ್ಮ ದೂರದೃಷ್ಟಿ (Vision)",
    visionText: "ತಂತ್ರಜ್ಞಾನದ ಮೂಲಕ ಸಮಾಜ ಮತ್ತು ಕ್ಯಾಂಪಸ್‌ನ ನೈಜ ಸಮಸ್ಯೆಗಳನ್ನು ಬಗೆಹರಿಸುವ ನವೀನ ಇಂಜಿನಿಯರ್‌ಗಳ ಸಶಕ್ತ ಸಮುದಾಯವನ್ನು ಕಟ್ಟುವುದು.",
    valuesTitle: "ಮೂಲ ಮೌಲ್ಯಗಳು",
    value1Title: "ಪರಸ್ಪರ ಸ್ನೇಹಪರ ಕಲಿಕೆ",
    value1Desc: "ಹಿರಿಯ ವಿದ್ಯಾರ್ಥಿಗಳು ಕಿರಿಯರಿಗೆ ತಾಳ್ಮೆಯಿಂದ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾರೆ; ಜ್ಞಾನ ಎಲ್ಲರಿಗೂ ಉಚಿತ.",
    value2Title: "ನೈಜ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳ ನಿರ್ಮಾಣ",
    value2Desc: "ಕೇವಲ ಪುಸ್ತಕದ ಜ್ಞಾನಕ್ಕೆ ಸೀಮಿತವಾಗದೆ, ನೈಜವಾಗಿ ಬಳಸಬಹುದಾದ ಅಪ್ಲಿಕೇಶನ್ ಮತ್ತು ಹಾರ್ಡ್‌ವೇರ್ ನಿರ್ಮಾಣ.",
    value3Title: "ಎಲ್ಲರಿಗೂ ಮುಕ್ತ ಅವಕಾಶ",
    value3Desc: "ಯಾವುದೇ ವಿಭಾಗದ ಹಾಗೂ ಯಾವುದೇ ವರ್ಷದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಮುಕ್ತ ಪ್ರವೇಶ.",
    value4Title: "ಮುಕ್ತ ತಂತ್ರಜ್ಞಾನ (Open Source)",
    value4Desc: "ತಯಾರಿಸಿದ ಪರಿಹಾರಗಳನ್ನು ಸಮುದಾಯದ ಒಳಿತಿಗಾಗಿ ಮುಕ್ತವಾಗಿ ಹಂಚಿಕೊಳ್ಳುವುದು.",
    quoteText: "ತಂತ್ರಜ್ಞಾನ ಯಾರೊಬ್ಬರ ಸ್ವತ್ತಲ್ಲ. ಅದು ಕುತೂಹಲವುಳ್ಳ ಪ್ರತಿಯೊಬ್ಬ ವಿದ್ಯಾರ್ಥಿಯೂ ಬಿಡಿಸಬಹುದಾದ ಸುಂದರ ಒಗಟು.",
    quoteAuthor: "ಎನಿಗ್ಮಾ ವಿದ್ಯಾರ್ಥಿ ಮಂಡಳಿ",

    eventsTitle: "ಕ್ಲಬ್ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಮಾವೇಶಗಳು",
    eventsSubtitle: "ವರ್ಷವಾರು ಆಯೋಜಿಸಲಾದ ಪ್ರಮುಖ ಕಾರ್ಯಾಗಾರಗಳು ಮತ್ತು ಹ್ಯಾಕಥಾನ್‌ಗಳು.",
    eventsYearLabel: "ವರ್ಷ ಆಯ್ಕೆಮಾಡಿ",
    eventsAllYears: "ಎಲ್ಲಾ ವರ್ಷಗಳು",
    eventDate: "ದಿನಾಂಕ",
    eventTime: "ಸಮಯ",
    eventVenue: "ಸ್ಥಳ",
    eventMentor: "ಮಾರ್ಗದರ್ಶಕರು",
    eventSeats: "ಉಳಿದಿರುವ ಸ್ಥಾನಗಳು",
    eventRegisterBtn: "ನೋಂದಾಯಿಸಿ (RSVP)",
    eventViewDetailsBtn: "ವಿವರಗಳನ್ನು ನೋಡಿ",
    eventCompletedBadge: "ಮುಕ್ತಾಯವಾಗಿದೆ",
    noEventsFound: "ಈ ವರ್ಷಕ್ಕೆ ಯಾವುದೇ ಕಾರ್ಯಕ್ರಮಗಳು ದಾಖಲಾಗಿಲ್ಲ.",

    leadsTitle: "ಕೋರ್ ಲೀಡರ್‌ಶಿಪ್ ಕೌನ್ಸಿಲ್",
    leadsSubtitle: "ಕ್ಲಬ್‌ನ ಕಾರ್ಯಚಟುವಟಿಕೆಗಳು ಮತ್ತು ತಾಂತ್ರಿಕ ಮಾರ್ಗದರ್ಶನವನ್ನು ಮುನ್ನಡೆಸುವ ಪ್ರಮುಖ ಹುದ್ದೆಗಳು.",
    leadRoleLabel: "ಹುದ್ದೆ",
    leadDeptLabel: "ವಿಭಾಗ",
    leadFocusLabel: "ಕಾರ್ಯಕ್ಷೇತ್ರ",
    leadBlankNotice: "ಪ್ರಸ್ತುತ ಶೈಕ್ಷಣಿಕ ವರ್ಷದ ಅಧಿಕೃತ ಹುದ್ದೆಗಳು",

    faqTitle: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು (FAQ)",
    faqSubtitle: "ಕ್ಲಬ್ ಸೇರ್ಪಡೆ, ಕಾರ್ಯಾಗಾರಗಳು ಮತ್ತು ಹ್ಯಾಕಥಾನ್‌ಗಳ ಬಗ್ಗೆ ಅಗತ್ಯ ಮಾಹಿತಿ.",
    faqMoreQuestions: "ಬೇರೆ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ?",

    feedbackTitle: "ವಿದ್ಯಾರ್ಥಿ ಪ್ರತಿಕ್ರಿಯೆ (Feedback)",
    feedbackSubtitle: "ಮುಂದಿನ ಕಾರ್ಯಾಗಾರಗಳ ವಿಷಯಗಳನ್ನು ಸೂಚಿಸಲು ಮತ್ತು ನಿಮ್ಮ ಅನಿಸಿಕೆಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ಇಲ್ಲಿ ಬರೆಯಿರಿ.",
    feedbackTypeLabel: "ಪ್ರತಿಕ್ರಿಯೆಯ ವರ್ಗ",
    feedbackRatingLabel: "ನಿಮ್ಮ ರೇಟಿಂಗ್",
    feedbackNameLabel: "ಹೆಸರು (ಐಚ್ಛಿಕ)",
    feedbackEmailLabel: "ಇಮೇಲ್ (ಐಚ್ಛಿಕ)",
    feedbackMsgLabel: "ನಿಮ್ಮ ಸಲಹೆಗಳು *",
    feedbackSubmitBtn: "ಪ್ರತಿಕ್ರಿಯೆ ಸಲ್ಲಿಸಿ",
    feedbackSuccessMsg: "ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ.",

    socialsTitle: "ಅಧಿಕೃತ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮಗಳು",
    socialsSubtitle: "ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್, ಡಿಸ್ಕಾರ್ಡ್ ಮತ್ತು ವಾಟ್ಸಾಪ್ ಗ್ರೂಪ್‌ಗೆ ಸೇರಿ.",
    officialEmailTitle: "ಅಧಿಕೃತ ಸಂಪರ್ಕ ಇಮೇಲ್",
    officialEmailDesc: "ಕಾಲೇಜು ಆಡಳಿತ ಅಥವಾ ಅಧಿಕೃತ ಸಹಯೋಗಗಳಿಗಾಗಿ ಈ ಇಮೇಲ್ ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ:",

    footerRights: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. ಎನಿಗ್ಮಾ ವಿದ್ಯಾರ್ಥಿ ಮಂಡಳಿಯಿಂದ ನಿರ್ಮಿತ.",
    footerMadeWith: "ವಿದ್ಯಾರ್ಥಿಗಳಿಂದ, ವಿದ್ಯಾರ್ಥಿಗಳಿಗಾಗಿ ರೂಪಿಸಲಾಗಿದೆ.",
    footerQuickLinks: "ತ್ವರಿತ ಕೊಂಡಿಗಳು",
    footerContactTitle: "ಅಧಿಕೃತ ಇಮೇಲ್",

    darkMode: "ಡಾರ್ಕ್ ಮೋಡ್",
    lightMode: "ಲೈಟ್ ಮೋಡ್",
    languageSelect: "ಭಾಷೆ",
    closeBtn: "ಮುಚ್ಚಿ",
    submitBtn: "ಸಲ್ಲಿಸಿ",
    cancelBtn: "ರದ್ದುಮಾಡಿ",
  },

  hi: {
    brandName: "एनिग्मा (ENIGMA)",
    brandTagline: "तकनीक, नवाचार और रचनात्मकता का अनावरण",
    mottoTitle: "मार्गदर्शक ध्येय",
    mottoSubtitle: "एनिग्मा के हर छात्र को प्रेरित करने वाला आधारभूत आदर्श वाक्य।",
    officialMotto: "अज्ञात को सुलझाते हुए, भविष्य का निर्माण",

    navHome: "होम",
    navMotto: "ध्येय",
    navEvents: "कार्यक्रम",
    navLeads: "काउंसिल",
    navFaq: "FAQ",
    navFeedback: "फीडबैक",
    navSocials: "संपर्क",
    navJoin: "क्लब से जुड़ें",

    heroBadge: "विश्वविद्यालय तकनीकी क्लब",
    heroHeadline: "जहाँ जिज्ञासा कोडिंग से मिलती है और नवाचार की कोई सीमा नहीं होती।",
    heroDescription: "जटिल इंजीनियरिंग पहेलियों को सुलझाने, वास्तविक सॉफ्टवेयर और हार्डवेयर बनाने और कल के तकनीकी दिग्गजों को तैयार करने वाला छात्र-संचालित क्लब।",
    heroCtaEvents: "कार्यक्रम देखें",
    heroCtaJoin: "समुदाय से जुड़ें",
    heroStatMembers: "सक्रिय छात्र",
    heroStatEvents: "वार्षिक मीटअप्स",
    heroStatYears: "वर्षों का अनुभव",
    heroStatProjects: "निर्मित प्रोजेक्ट्स",

    mottoSectionTitle: "एनिग्मा का दर्शन और ध्येय",
    mottoSectionSubtitle: "कोड की हर पंक्ति और हर सर्किट बोर्ड की शुरुआत एक जिज्ञासु मस्तिष्क से होती है।",
    missionTitle: "हमारा मिशन (Mission)",
    missionText: "साथी-से-साथी शिक्षण, कार्यशालाओं, 36-घंटे के हैकाथॉन और समावेशी वातावरण के जरिए उभरती तकनीकों को सरल और सुलभ बनाना।",
    visionTitle: "हमारा विज़न (Vision)",
    visionText: "इंजीनियरों और रचनाकारों का एक सशक्त समुदाय बनाना जो समाज और परिसर की वास्तविक समस्याओं को तकनीक से हल करें।",
    valuesTitle: "मूल मूल्य",
    value1Title: "सहानुभूतिपूर्ण पीयर लर्निंग",
    value1Desc: "सीनियर छात्र नए छात्रों को धैर्यपूर्वक सिखाते हैं; ज्ञान सबके लिए सुलभ है।",
    value2Title: "वास्तविक उत्पाद निर्माण",
    value2Desc: "किताबी ज्ञान से आगे बढ़कर वास्तविक काम करने वाले ऐप्स और हार्डवेयर तैयार करना।",
    value3Title: "सबका स्वागत (Inclusivity)",
    value3Desc: "सभी विभागों और वर्षों के छात्रों के लिए खुला, बिना पूर्व कोडिंग अनुभव की बाध्यता के।",
    value4Title: "ओपन सोर्स भावना",
    value4Desc: "निर्मित तकनीकी समाधानों को समुदाय के हित में स्वतंत्र रूप से साझा करना।",
    quoteText: "तकनीक कोई बंद किला नहीं है। यह एक सुंदर पहेली है जिसे जिज्ञासु मन सुलझा सकते हैं।",
    quoteAuthor: "एनिग्मा छात्र परिषद",

    eventsTitle: "क्लब कार्यक्रम और समवेत सत्र",
    eventsSubtitle: "वर्षवार आयोजित प्रैक्टिकल कार्यशालाएं, हैकाथॉन और तकनीकी सत्र।",
    eventsYearLabel: "वर्ष चुनें",
    eventsAllYears: "सभी वर्ष",
    eventDate: "तारीख",
    eventTime: "समय",
    eventVenue: "स्थान",
    eventMentor: "वक्ता / मेंटॉर",
    eventSeats: "उपलब्ध सीटें",
    eventRegisterBtn: "पंजीकरण करें (RSVP)",
    eventViewDetailsBtn: "विवरण देखें",
    eventCompletedBadge: "सम्पन्न",
    noEventsFound: "इस वर्ष के लिए कोई कार्यक्रम दर्ज नहीं है।",

    leadsTitle: "कोर लीडरशिप काउंसिल",
    leadsSubtitle: "क्लब संचालन और छात्र मार्गदर्शन का दायित्व संभालने वाले प्रमुख प्रभाग।",
    leadRoleLabel: "पद",
    leadDeptLabel: "विभाग",
    leadFocusLabel: "कार्यक्षेत्र",
    leadBlankNotice: "वर्तमान सत्र के आधिकारिक पद",

    faqTitle: "अक्सर पूछे जाने वाले सवाल (FAQ)",
    faqSubtitle: "क्लब से जुड़ने, कार्यशालाओं और गतिविधियों से जुड़े सभी मुख्य प्रश्न।",
    faqMoreQuestions: "क्या आपका कोई अन्य सवाल है?",

    feedbackTitle: "छात्र फीडबैक और सुझाव",
    feedbackSubtitle: "आगामी कार्यशालाओं के विषय सुझाएं या क्लब के अनुभव पर अपनी राय साझा करें।",
    feedbackTypeLabel: "फीडबैक श्रेणी",
    feedbackRatingLabel: "समग्र अनुभव",
    feedbackNameLabel: "नाम (वैकल्पिक)",
    feedbackEmailLabel: "ईमेल (वैकल्पिक)",
    feedbackMsgLabel: "आपके सुझाव व विचार *",
    feedbackSubmitBtn: "फीडबैक भेजें",
    feedbackSuccessMsg: "धन्यवाद! आपका फीडबैक सफलतापूर्वक दर्ज कर लिया गया है।",

    socialsTitle: "आधिकारिक सोशल मीडिया चैनल्स",
    socialsSubtitle: "इंस्टाग्राम, डिस्कॉर्ड और व्हाट्सएप कम्युनिटी से जुड़ें।",
    officialEmailTitle: "आधिकारिक संपर्क ईमेल",
    officialEmailDesc: "कॉलेज पत्राचार या आधिकारिक सहयोग के लिए इस ईमेल पर संपर्क करें:",

    footerRights: "सर्वाधिकार सुरक्षित। एनिग्मा छात्र परिषद द्वारा निर्मित।",
    footerMadeWith: "छात्रों द्वारा, छात्रों के लिए समर्पित।",
    footerQuickLinks: "त्वरित लिंक",
    footerContactTitle: "आधिकारिक ईमेल",

    darkMode: "डार्क मोड",
    lightMode: "लाइट मोड",
    languageSelect: "भाषा",
    closeBtn: "बंद करें",
    submitBtn: "जमा करें",
    cancelBtn: "रद्द करें",
  },
};
