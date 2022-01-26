const data = [
  {
    title: "Dark Reader",
    category: "Accessibility",
    about:
      "Eye-care browser extension to switch any website into dark mode with full customizability.",
    link: "https://darkreader.org/",
    logo: "https://repository-images.githubusercontent.com/26682105/4d22e080-070e-11eb-8930-c69a17260e45",
    location_specific: false,
    location: "",
    tags: [
      "photophobia",
      "eye-care",
      "dark mode",
      "computer filter",
      "light sensitivity",
      "vision",
      "technology",
      "open-source",
      "free",
      "sensory processing",
    ],
  },
  {
    title: "f.lux",
    category: "Accessibility",
    about: "Eye-care software that adapts the color of your computer display.",
    link: "https://justgetflux.com/",
    logo: "https://tamezatu.com/wp-content/uploads/2015/05/flux.png",
    location_specific: false,
    location: "",
    tags: [
      "photophobia",
      "eye-care",
      "blue-light filter",
      "adaptive display",
      "computer filter",
      "light sensitivity",
      "vision",
      "technology",
      "desktop application",
      "free",
      "sensory processing",
    ],
  },
  {
    title: "OpenDyslexic",
    category: "Accessibility",
    about:
      "Free, downloadable typeface to reduce dyslexia symptoms. It's this font!",
    link: "https://opendyslexic.org/",
    logo: "https://d144mzi0q5mijx.cloudfront.net/img/O/P/OpenDyslexic.png",
    location_specific: false,
    location: "",
    tags: [
      "dyslexia",
      "eye-care",
      "font",
      "text",
      "reading",
      "vision",
      "technology",
      "free",
      "visual processing",
    ],
  },
  {
    title: "Twilight",
    category: "Accessibility",
    about:
      "Fully-customizable mobile eye-care app for filtering your phone screen.",
    link: "http://twilight.urbandroid.org/",
    logo: "https://play-lh.googleusercontent.com/gxoSf8gKOiXJSkRcMjLXOvntd36Jt8sX5dg8X3vrSjsctjbpReFle797xPnUfNaUm6U",
    location_specific: false,
    location: "",
    tags: [
      "photophobia",
      "eye-care",
      "dark mode",
      "computer filter",
      "light sensitivity",
      "vision",
      "technology",
      "mobile application",
      "free",
      "sensory processing",
    ],
  },
  {
    title: "Brain Injury Alliance",
    category: "Advocacy",
    about:
      "Resource facilitation, education, outreach, events, & case management, plus state-specific chapters.",
    link: "https://usbia.org/",
    logo: "https://biacolorado.org/wp-content/uploads/2011/12/USBIA-Logo.jpg",
    location_specific: false,
    location: "",
    tags: [
      "newsletter",
      "case manager",
      "support group",
      "check-in",
      "referrals",
      "support services",
    ],
  },
  {
    title: "Brain Trauma Foundation",
    category: "Education",
    about:
      "Develops evidence-based guidelines, research partnerships, & educational outreach.",
    link: "http://www.braintrauma.org/",
    logo: "https://med.stanford.edu/braincenter/research/_jcr_content/main/panel_builder/panel_1/panel_builder/panel_0/feature_box.img.620.high.png/neurosurgery_concussion_BTF.png",
    location_specific: false,
    location: "",
    tags: ["peer-reviewed", "articles", "scholarly", "study", "teaching"],
  },
  {
    title: "Concussion Alliance",
    category: "Education",
    about:
      "Education & advocacy nonprofit: helps manage recovery & find treatment options. ",
    link: "https://www.concussionalliance.org/",
    logo: "https://images.squarespace-cdn.com/content/v1/59979fb48419c2c65c51fe21/4352a9be-5f60-40e7-a411-11be6a4ce9af/NEW+LOGO+DARKER+BLUE.png?format=1500w",
    location_specific: false,
    location: "",
    tags: [
      "peer-reviewed",
      "articles",
      "scholarly",
      "study",
      "teaching",
      "advocate",
      "referrals",
      "advocacy",
      "support services",
    ],
  },
  {
    title: "National Resource Center for Traumatic Brain Injury",
    category: "Education",
    about: "Evidence-based research & educational sources.",
    link: "https://tbi.vcu.edu/",
    logo: "https://tbiresources.partnership.vcu.edu/media/tbi-resources/TBIresourceswebsiteheader_rev111021.png",
    location_specific: false,
    location: "",
    tags: ["peer-reviewed", "articles", "scholarly", "study", "teaching"],
  },
  {
    title: "Schroeder & Mandel",
    category: "Legal",
    about:
      "Personal injury lawyers in St Paul, MN: Work Comp as well as auto, bike, & pedestrian accidents.",
    link: "https://schroeder-mandel.com/",
    logo: "https://media-exp1.licdn.com/dms/image/C5612AQEggkuEHNblKA/article-inline_image-shrink_1500_2232/0/1520188627674?e=1645056000&v=beta&t=qcok-oIuLoKDkgd0OXGbyK3aYbQawRAMEA8LG6x8RZo",
    location_specific: false,
    location: "*MN only",
    tags: [
      "Minnesota",
      "Twin Cities",
      "worker's compensation",
      "lawyers",
      "financial",
      "settlement",
      "file claim",
      "consult",
      "motor vehicle accidents",
      "car accident",
      "benefits",
      "advocacy",
    ],
  },
  {
    title: "Bearable",
    category: "Products",
    about:
      "App to track mood, symptoms, sleep, food, steps, meds, daily activities, etc.",
    link: "https://bearable.app",
    logo: "https://bearable.app/wp-content/uploads/2020/08/Group-3449.jpg",
    location_specific: false,
    location: "",
    tags: [
      "brain fog",
      "tracking software",
      "memory care",
      "medications",
      "meals",
      "habits",
      "scheduling",
      "calendar",
      "memory impairment",
    ],
  },
  {
    title: "Lucky Edibles Microdose Mints",
    category: "Products",
    about:
      "Mints with 2mg THC microdose: Symptom relief in about 45 minutes with low cognitive effect.",
    link: "https://www.luckyedibles.com/",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsbWfDTJxIMTiKxGkFfTtC6Ko2D36ySfIjBmOE5AsddCNCAOSSuYqp8jY1xrgwPQ3HWw&usqp=CAU",
    location_specific: false,
    location: "*CO & NV only",
    tags: [
      "Colorado",
      "Nevada",
      "medical",
      "marijuana",
      "dispensary",
      "overstimulation",
      "de-stim",
      "destim",
      "migraine",
      "pain relief",
      "drug",
      "sensory processing",
    ],
  },
  {
    title: "Hearprotek Earplugs",
    category: "Products",
    about:
      "Set of 2 silicone high fidelity 20db earplugs that come in a durable aluminum clip-on case.",
    link: "https://www.amazon.com/gp/product/B08PBQFQH6/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&th=1",
    logo: "https://m.media-amazon.com/images/I/61pjAx7azgL._AC_SL1080_.jpg",
    location_specific: false,
    location: "",
    tags: [
      "overstimulation",
      "de-stim destim",
      "hearing",
      "ear care",
      "noise sensitivity",
      "decibals",
      "technology",
      "sensory processing",
    ],
  },
  {
    title: "Pill Organizer",
    category: "Products",
    about:
      "Color-coded all-in-one extra large AM & PM pill organizer for twice-daily medications.",
    link: "https://www.amazon.com/Organizer-Compartment-Travel-Friendly-Medicine-Supplements/dp/B094HXNDY6/ref=sr_1_7?crid=2CKH2AKE1GBVU&keywords=large+pill+organizer&qid=1643155114&smid=A1SMAH1VUOWY&sprefix=large+pill+organiz%2Caps%2C316&sr=8-7",
    logo: "https://m.media-amazon.com/images/I/61Jlmq2LhUL._AC_SL1500_.jpg",
    location_specific: false,
    location: "",
    tags: [
      "tracking",
      "memory care",
      "meds",
      "PRN",
      "pill case",
      "remember",
      "brain fog",
      "rx prescriptions",
      "pharmeceuticals",
      "supplements"
    ],
  },
  {
    title: "Reusable Gel Eye Masks",
    category: "Products",
    about:
      "Two individual eye masks, can be heated or chilled, to relieve eye/temple pain & pressure.",
    link: "https://www.worldmarket.com/product/reusable-cat-gel-eye-masks-2-pack.do",
    logo: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/82728_XXX_v1.tif&wid=2000&cvt=jpeg",
    location_specific: false,
    location: "",
    tags: [
      "headache",
      "hot cold",
      "migraine",
      "destim de-stim",
      "symptom relief",
      "overstimulated",
      "nausea",
    ],
  },
  {
    title: "Theraspecs",
    category: "Products",
    about:
      "Tinted glasses clinically proven to reduce photophobia symptoms.",
    link: "https://www.theraspecs.com/",
    logo: "https://ww1.prweb.com/prfiles/2013/09/09/11105782/TheraSpecs_logo_big.png",
    location_specific: false,
    location: "",
    tags: [
      "eye care",
      "blue light filter",
      "rose",
      "light sensitivity",
      "vision",
      "sensory processing",
      "migraine",
      "symptom management",
      "eye pain",
      "headache",
      "lenses",
      "post-concussion",
      "color",
      "eyeglasses",
      "sunglasses",
      "flourescent",
      "bright sunlight"
    ],
  },
  {
    title: "Weekly Checklist Whiteboard",
    category: "Products",
    about:
      "Magnetic whiteboard to easily view & track chores, meds, habits, symptoms, or anything you need.",
    link: "https://www.amazon.com/Whiteboard-Chore-Chart-Magnetic-Refrigerator/dp/B07S8Y35ML?th=1",
    logo: "https://m.media-amazon.com/images/I/81AhWtnxhIL._AC_SL1500_.jpg",
    location_specific: false,
    location: "",
    tags: [
      "brain fog",
      "tracking",
      "memory care",
      "daily meds",
      "meals",
      "habits",
      "scheduling",
      "calendar",
      "memory impairment",
      "medications",
      "dry erase",
      "magnetic",
      "week view"
    ],
  },
  {
    title: "Weekly Planner",
    category: "Products",
    about:
      "Compact, durable, & simple hardcover 18-month planner with month & week views, pocket, & elastic closure.",
    link: "https://www.etsy.com/listing/1074163989/2022-midi-azure-equinoxe-5-x-7-hardcover?click_key=f3f899e4d7f2de009d0969b9a6b4845b37da01dc%3A1074163989&click_sum=2f16966f&ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=hardcover+planner&ref=sr_gallery-1-2&organic_search_click=1",
    logo: "https://i.etsystatic.com/11293990/r/il/489428/3336393145/il_794xN.3336393145_jwjc.jpg",
    location_specific: false,
    location: "",
    tags: [
      "brain fog",
      "tracking",
      "memory care",
      "planning",
      "meals",
      "habits",
      "scheduling",
      "calendar",
      "memory impairment",
      "activities",
      "journaling",
      "week view",
      "year"
    ],
  },
  {
    title: "Allina Health: Courage Kenny Rehabilitation Institute",
    category: "Services",
    about:
      "Inpatient, outpatient & community-based services, including neuroophthalmology.",
    link: "https://account.allinahealth.org/services/591",
    logo: "https://adaptiveadventures.org/wp-content/uploads/2017/05/Courage-Kenny-Logo.jpg",
    location_specific: true,
    location: "*MN only",
    tags: [
      "Minnesota",
      "support groups",
      "concussion care",
      "therapy",
      "treatment",
      "medical doctor",
      "physical rehab",
      "speech therapy",
      "case management",
      "recovery"
    ],
  },
  {
    title: "Hennepin Health Traumatic Brain Injury Center",
    category: "Services",
    about:
      "Prevention, emergency care, neurosurgery, critical care, inpatient, & outpatient care.",
    link: "https://www.hennepinhealthcare.org/specialty/traumatic-brain-injury-center/",
    logo: "https://hereforlife.blog/wp-content/uploads/2018/03/featured-hennepin-healthcare-promo.jpg",
    location_specific: true,
    location: "*MN only",
    tags: [
      "Minnesota",
      "ER",
      "case management",
      "medical doctor",
      "rehabilitation",
      "treatment",
      "recovery",
      "therapy",
      "physical rehab"
    ],
  },
];

export default data;
