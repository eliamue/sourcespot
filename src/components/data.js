const data = [
  {
    title: "Dark Reader",
    category: "Accessibility",
    about:
      "Browser extension to switch any website into dark mode with full customizability.",
    link: "https://darkreader.org/",
    logo: "https://repository-images.githubusercontent.com/26682105/4d22e080-070e-11eb-8930-c69a17260e45",
    location_specific: false,
    location: "",
  },
  {
    title: "f.lux",
    category: "Accessibility",
    about:
      "Eye-care software that adapts the color of your computer display.",
    link: "https://justgetflux.com/",
    logo: "https://tamezatu.com/wp-content/uploads/2015/05/flux.png",
    location_specific: false,
    location: "",
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
  },
  {
    title: "Brain Injury Alliance",
    category: "Advocacy",
    about:
      "Resource facilitation, education, outreach, events, and case management.",
    link: "https://usbia.org/",
    logo: "https://biacolorado.org/wp-content/uploads/2011/12/USBIA-Logo.jpg",
    location_specific: false,
    location: "",
  },
  {
    title: "Brain Trauma Foundation",
    category: "Education",
    about:
      "Develops evidence-based guidelines, research partnerships, and educational outreach.",
    link: "http://www.braintrauma.org/",
    logo: "https://med.stanford.edu/braincenter/research/_jcr_content/main/panel_builder/panel_1/panel_builder/panel_0/feature_box.img.620.high.png/neurosurgery_concussion_BTF.png",
    location_specific: false,
    location: "",
  },
  {
    title: "Concussion Alliance",
    category: "Education",
    about:
      "Education and advocacy nonprofit: helps manage recovery and find treatment options. ",
    link: "https://www.concussionalliance.org/",
    logo: "https://images.squarespace-cdn.com/content/v1/59979fb48419c2c65c51fe21/4352a9be-5f60-40e7-a411-11be6a4ce9af/NEW+LOGO+DARKER+BLUE.png?format=1500w",
    location_specific: false,
    location: "",
  },
  {
    title: "National Resource Center for Traumatic Brain Injury",
    category: "Education",
    about:
      "Evidence-based research and educational sources.",
    link: "https://tbi.vcu.edu/",
    logo: "https://tbiresources.partnership.vcu.edu/media/tbi-resources/TBIresourceswebsiteheader_rev111021.png",
    location_specific: false,
    location: "",
  },
  {
    title: "Schroeder & Mandel",
    category: "Legal",
    about:
      "Personal injury lawyers in St Paul, MN: Work Comp as well as auto, bike, and pedestrain accidents.",
    link: "https://schroeder-mandel.com/",
    logo: "https://media-exp1.licdn.com/dms/image/C5612AQEggkuEHNblKA/article-inline_image-shrink_1500_2232/0/1520188627674?e=1645056000&v=beta&t=qcok-oIuLoKDkgd0OXGbyK3aYbQawRAMEA8LG6x8RZo",
    location_specific: false,
    location: ": MN",
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
  },
  {
    title: "Lucky Edibles Microdose Mints",
    category: "Products",
    about:
      "Mints with 2mg THC microdose: Symptom relief in about 45 minutes with low cognitive effect.",
    link: "https://www.luckyedibles.com/",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsbWfDTJxIMTiKxGkFfTtC6Ko2D36ySfIjBmOE5AsddCNCAOSSuYqp8jY1xrgwPQ3HWw&usqp=CAU",
    location_specific: false,
    location: ": CO & NV",
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
  },
  {
    title: "Reusable Gel Eye Masks",
    category: "Products",
    about:
      "Two individual eye masks, can be heated or chilled, to relieve eye/temple pain and pressure.",
    link: "https://www.worldmarket.com/product/reusable-cat-gel-eye-masks-2-pack.do",
    logo: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/82728_XXX_v1.tif&wid=2000&cvt=jpeg",
    location_specific: false,
    location: "",
  },
  {
    title: "Allina Health: Courage Kenny Rehabilitation Institute",
    category: "Services",
    about:
      "Inpatient, outpatient and community-based services, including neuro-ophthalmology.",
    link: "https://account.allinahealth.org/services/591",
    logo: "https://adaptiveadventures.org/wp-content/uploads/2017/05/Courage-Kenny-Logo.jpg",
    location_specific: true,
    location: ": MN",
  },
  {
    title: "Hennepin Health Traumatic Brain Injury Center",
    category: "Services",
    about:
      "Prevention, emergency care, neurosurgery, critical care, inpatient, and outpatient care.",
    link: "https://www.hennepinhealthcare.org/specialty/traumatic-brain-injury-center/",
    logo: "https://hereforlife.blog/wp-content/uploads/2018/03/featured-hennepin-healthcare-promo.jpg",
    location_specific: true,
    location: ": MN",
  },
];

export default data;
