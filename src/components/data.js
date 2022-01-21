const data = [
  {
    title: "Dark Reader",
    category: "Accessibility",
    about:
      "Dark Reader is an open-source browser extension that allows you to switch any website into dark mode, and gives you the ability to fully configure the theme to your preferences.",
    link: "https://darkreader.org/",
    logo: "https://repository-images.githubusercontent.com/26682105/4d22e080-070e-11eb-8930-c69a17260e45",
    location_specific: false,
    location: "",
  },
  {
    title: "f.lux",
    category: "Accessibility",
    about:
      "F.lux is eye-care software that adapts the color of your computer display based on the time of day (or toggled on/off), for reducing eye-strain.",
    link: "https://justgetflux.com/",
    logo: "https://tamezatu.com/wp-content/uploads/2015/05/flux.png",
    location_specific: false,
    location: "",
  },
  {
    title: "OpenDyslexic",
    category: "Accessibility",
    about:
      "Free, downloadable typeface that reduces the symptoms of dyslexia. This app uses this font!",
    link: "https://opendyslexic.org/",
    logo: "https://d144mzi0q5mijx.cloudfront.net/img/O/P/OpenDyslexic.png",
    location_specific: false,
    location: "",
  },
  {
    title: "Twilight",
    category: "Accessibility",
    about:
      "Fully-customizable mobile eye-care app for filtering your phone screen. Hue, color, contrast, brightness, and filter schedule are all fully adjustable.",
    link: "http://twilight.urbandroid.org/",
    logo: "https://play-lh.googleusercontent.com/gxoSf8gKOiXJSkRcMjLXOvntd36Jt8sX5dg8X3vrSjsctjbpReFle797xPnUfNaUm6U",
    location_specific: false,
    location: "",
  },
  {
    title: "Brain Injury Alliance",
    category: "Advocacy",
    about:
      "BIA works to raise awareness and enhance the quality of life for all people affected by brain injury with resource facilitation, education, outreach, events, and case management.",
    link: "https://usbia.org/",
    logo: "https://biacolorado.org/wp-content/uploads/2011/12/USBIA-Logo.jpg",
    location_specific: false,
    location: "",
  },
  {
    title: "Brain Trauma Foundation",
    category: "Education",
    about:
      "Brain Trauma Foundation develops evidence-based guidelines, research partnerships, and educational outreach for TBI.",
    link: "http://www.braintrauma.org/",
    logo: "https://med.stanford.edu/braincenter/research/_jcr_content/main/panel_builder/panel_1/panel_builder/panel_0/feature_box.img.620.high.png/neurosurgery_concussion_BTF.png",
    location_specific: false,
    location: "",
  },
  {
    title: "Concussion Alliance",
    category: "Education",
    about:
      "Concussion Alliance is an education and advocacy nonprofit that helps concussion patients learn to manage their recovery and find treatment options. ",
    link: "https://www.concussionalliance.org/",
    logo: "https://images.squarespace-cdn.com/content/v1/59979fb48419c2c65c51fe21/4352a9be-5f60-40e7-a411-11be6a4ce9af/NEW+LOGO+DARKER+BLUE.png?format=1500w",
    location_specific: false,
    location: "",
  },
  {
    title: "National Resource Center for Traumatic Brain Injury",
    category: "Education",
    about:
      "NRCTBI provides research-backed information for professionals, persons with brain injury, and family members.",
    link: "https://tbi.vcu.edu/",
    logo: "https://tbiresources.partnership.vcu.edu/media/tbi-resources/TBIresourceswebsiteheader_rev111021.png",
    location_specific: false,
    location: "",
  },
  {
    title: "Schroeder & Mandel",
    category: "Legal",
    about:
      "The experienced personal injury lawyers at Schroeder & Mandel in St Paul work with people who have been injured and need help making a financial recovery.",
    link: "https://schroeder-mandel.com/",
    logo: "https://media-exp1.licdn.com/dms/image/C5612AQEggkuEHNblKA/article-inline_image-shrink_1500_2232/0/1520188627674?e=1645056000&v=beta&t=qcok-oIuLoKDkgd0OXGbyK3aYbQawRAMEA8LG6x8RZo",
    location_specific: false,
    location: ": MN",
  },
  {
    title: "Bearable",
    category: "Products",
    about:
      "Mobile app for tracking everything in one place: mood, symptoms, sleep, food, steps, meds, daily activities, appointments, and more.",
    link: "https://bearable.app",
    logo: "https://bearable.app/wp-content/uploads/2020/08/Group-3449.jpg",
    location_specific: false,
    location: "",
  },
  {
    title: "Lucky Edibles Microdose Mints",
    category: "Products",
    about:
      "These tasty little mints are just a 2mg microdose of THC each, are easy to carry with you, and can provide symptom relief in about 45 minutes with minimal cognitive effect.",
    link: "https://www.luckyedibles.com/",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsbWfDTJxIMTiKxGkFfTtC6Ko2D36ySfIjBmOE5AsddCNCAOSSuYqp8jY1xrgwPQ3HWw&usqp=CAU",
    location_specific: false,
    location: ": CO & NV",
  },
  {
    title: "Hearprotek Earplugs",
    category: "Products",
    about:
      "Set of 2 silicone high fidelity 20db earplugs that effectively brings down the overall volume, while still preserving sound quality. Comes with a super-durable aluminum clip-on case.",
    link: "https://www.amazon.com/gp/product/B08PBQFQH6/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&th=1",
    logo: "https://m.media-amazon.com/images/I/61pjAx7azgL._AC_SL1080_.jpg",
    location_specific: false,
    location: "",
  },
  {
    title: "Reusable Gel Eye Masks",
    category: "Products",
    about:
      "Two individual little kitty faces that can be heated or chilled to relieve eye pain and pressure. Unlike single-piece masks, these can be placed in targeted spots to best suit your needs.",
    link: "https://www.worldmarket.com/product/reusable-cat-gel-eye-masks-2-pack.do",
    logo: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/82728_XXX_v1.tif&wid=2000&cvt=jpeg",
    location_specific: false,
    location: "",
  },
  {
    title: "Allina Health: Courage Kenny Rehabilitation Institute",
    category: "Services",
    about:
      "Comprehensive care and rehabilitation for mild to moderate brain injury. Provides inpatient, outpatient and community-based services. Neuro-ophthalmology provider.",
    link: "https://account.allinahealth.org/services/591",
    logo: "https://adaptiveadventures.org/wp-content/uploads/2017/05/Courage-Kenny-Logo.jpg",
    location_specific: true,
    location: ": MN",
  },
  {
    title: "Hennepin Health Traumatic Brain Injury Center",
    category: "Services",
    about:
      "Comprehensive patient care, education and research to serve Minnesotans with TBI. Services include prevention, emergency care, neurosurgery, critical care, inpatient, and outpatient care.",
    link: "https://www.hennepinhealthcare.org/specialty/traumatic-brain-injury-center/",
    logo: "https://hereforlife.blog/wp-content/uploads/2018/03/featured-hennepin-healthcare-promo.jpg",
    location_specific: true,
    location: ": MN",
  },
];

export default data;
