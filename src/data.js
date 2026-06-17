export const DONATION_CAUSES = [
  {
    id: 'food',
    title: 'Food Distribution Program',
    description: 'Provide freshly cooked, hygienic, and highly nutritious meals to homeless families, daily wage laborers, and children of shelter homes across major target cities.',
    unitCost: 35, // ₹35 per meal
    unitName: 'meals',
    icon: 'Apple',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'clothing',
    title: 'Warm Clothes & Blanket Drive',
    description: 'Ensure the elderly and young infants in outdoor shelters are protected from extreme winters by distributing warm woolens, jackets, sweaters, and robust winter blankets.',
    unitCost: 250, // ₹250 per blanket/winter kit
    unitName: 'winter kits',
    icon: 'Shirt',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'education',
    title: 'NayePankh Pathshala (Education)',
    description: 'Sponsor uniforms, notebooks, stationary items, and direct basic primary tutorial funding for underprivileged students who cannot afford traditional primary schools.',
    unitCost: 600, // ₹600 per student school-kit
    unitName: 'school kits',
    icon: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'general',
    title: 'General Support & Operations Fund',
    description: 'Empower our rapid deployment teams with resources, fuel, storage spaces, and volunteer travel expenses to organize distribution drives instantly during heavy rainfalls or cold waves.',
    unitCost: 100, // ₹100 block
    unitName: 'operations units',
    icon: 'HeartHandshake',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop',
  }
];

export const CERTIFICATES = [
  {
    id: 'cert80g',
    title: 'Section 80G Approval Certificate',
    regNo: '80G/Registration/2022-23/A-9014',
    issuedBy: 'Commissioner of Income Tax (Exemptions), Government of India',
    validFrom: 'Life time (from AY 2023-24 onwards)',
    type: 'Income Tax Exemption',
    description: 'Enables Indian donors to claim up to a 50% tax deduction on their total donation value under Section 80G of the Indian Income Tax Act.'
  },
  {
    id: 'cert12a',
    title: 'Section 12A Registration',
    regNo: '12A/Exemption/2021-22/REG-8742',
    issuedBy: 'Income Tax Department, Government of India',
    validFrom: 'Life time (subject to terms of compliance)',
    type: 'NGO Income Tax Immunity',
    description: 'Confirms NayePankh Foundation as a non-profit entity, rendering all incoming philanthropic funds completely tax-free to maximize utilization.'
  },
  {
    id: 'certdarpan',
    title: 'NITI Aayog NGO Darpan Registration',
    regNo: 'UP/2019/0248719',
    issuedBy: 'NITI Aayog, Planning Commission of India',
    validFrom: 'Verified (Updated regularly)',
    type: 'Government NGO Registry',
    description: 'Uniquely identifies NayePankh Foundation on the central government portal, qualifying it for legitimate community initiatives and public-interest task scopes.'
  },
  {
    id: 'certincorporation',
    title: 'Government Certificate of Incorporation',
    regNo: 'CIT/KNP/CO-INCORP/72314-B',
    issuedBy: 'Registrar of Societies, Uttar Pradesh State Govt.',
    validFrom: 'Incorporated since 2019',
    type: 'Legal Business Identity',
    description: 'The foundational registration granting the entity legal status to operate social service programs, open dedicated banking, and sign partner agreements.'
  }
];

export const PRESS_ARTICLES = [
  {
    id: 'news1',
    source: 'Dainik Jagran',
    date: 'December 12, 2024',
    title: 'नए पंख फाउंडेशन ने बांटे ५०० से अधिक कंबल, बच्चों के चेहरे खिले',
    excerpt: 'कड़ाके की ठंड और शीतलहर को देखते हुए समाज सेवी संस्था नए पंख फाउंडेशन ने शहर के मलिन बस्तियों में कंबल वितरण अभियान चलाया। संस्थापक प्रशांत शुक्ला ने बताया कि यह अभियान पूरे जाड़े भर जारी रहेगा ताकि किसी को ठंड में बिना ओढ़ने के न सोना पड़े...',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'news2',
    source: 'The Times of India',
    date: 'October 18, 2025',
    title: 'Empowering Kanpur Slum Children Through Education: NayePankh Initiative',
    excerpt: 'A student-led local non-governmental organization, NayePankh Foundation, is transforming primary schooling in Kanpur slums. Providing stationery, uniforms, and regular tutoring, they have re-enrolled over 150 school dropouts back into curriculum streams...',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'news3',
    source: 'Amar Ujala',
    date: 'March 05, 2026',
    title: 'भूख के खिलाफ जंग: प्रतिदिन ३०० बेसहारा लोगों को मुफ्त गरम भोजन',
    excerpt: 'घासीराम बस्ती और रेलवे स्टेशन के समीप नए पंख फाउंडेशन की रसोई द्वारा निरंतर ताजा और स्वादिष्ट भोजन जरूरतमंदों को परोसा जा रहा है। युवाओं की यह अनोखी पहल सचमुच समाज के लिए मिसाल है। संस्था युवाओं के सहयोग से चलती है और पारदर्शी लेखा-जोखा रखती है...',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop'
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'Prashant Shukla',
    role: 'Founder & President',
    bio: 'Prashant envisioned NayePankh during his university days with a target to build India\'s largest student-mobilized grassroots foundation, bridging the gap between donors and raw operational ground reality. Under his guidance, the group has served lakhs of smiles.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Anjali Sharma',
    role: 'Head of Operations & City Leads',
    bio: 'Anjali coordinates with city-level student chiefs across Ghaziabad and Kanpur to structure daily distribution schedules, verify beneficiary lists, and maintain raw photographic transparency files on social handles.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Rohan Verma',
    role: 'Treasurer & Compliance Officer',
    bio: 'Rohan handles the financial audits, ensuring every rupee donated online is properly recorded, receipts for Tax Section 80G are dispatched instantly, and standard annual administrative expenses are kept strictly minimal.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  }
];
