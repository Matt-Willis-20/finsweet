export const blogsContent = [
    {
        id: 1,
        category: "startup",
        title: "How to build rapport with your web design clients",
        src: "blog01",
        alt: 'alt text',
        intro: "Duis aute dalor in reprehendrition volutpe veili esses cillm dalore su figure nulla pariator. Execptur sint occat cupidator non proident."
    },
    {
        id: 2,
        category: "startup",
        title: "Top 10 Hackathon Ideas 2018",
        src: "blog02",
        alt: 'alt text',
        intro: "Duis aute dalor in reprehendrition volutpe veili esses cillm dalore su figure nulla pariator. Execptur sint occat cupidator non proident."
    },
    {
        id: 3,
        category: "economy",
        src: "blog03",
        title: "6 Steps to Closed-Loop Communications",
        alt: 'alt text',
        intro: "Duis aute dalor in reprehendrition volutpe veili esses cillm dalore su figure nulla pariator. Execptur sint occat cupidator non proident."
    },
    {
        id: 4,
        category: "economy",
        src: "blog04",
        title: "The Mad Men’s Guide to Job Titles at an Advertising Agency",
        alt: 'alt text',
        intro: "Duis aute dalor in reprehendrition volutpe veili esses cillm dalore su figure nulla pariator. Execptur sint occat cupidator non proident."
    },
    {
        id: 5,
        category: "technology",
        src: "blog05",
        title: "How to build rapport with your web design clients",
        alt: 'alt text',
        intro: "Duis aute dalor in reprehendrition volutpe veili esses cillm dalore su figure nulla pariator. Execptur sint occat cupidator non proident."
    },
    {
        id: 6, 
        category: "technology",
        src: "blog06",
        title: "Microsoft Teams Vs Slack: Extended With Quick Infographic",
        alt: 'alt text',
        intro: "Duis aute dalor in reprehendrition volutpe veili esses cillm dalore su figure nulla pariator. Execptur sint occat cupidator non proident."
    },
    {
        id: 7,
        category: "business",
        src: "blog07",
        title: "How to Write an Email Asking for a Referral or Recommendation",
        alt: 'alt text',
        intro: "Duis aute dalor in reprehendrition volutpe veili esses cillm dalore su figure nulla pariator. Execptur sint occat cupidator non proident."
    },
    {
        id: 8,
        category: "startup",
        src: "blog08",
        title: "How to build rapport with your web design clients",
        alt: 'alt text',
        intro: "Duis aute dalor in reprehendrition volutpe veili esses cillm dalore su figure nulla pariator. Execptur sint occat cupidator non proident."
    },
    {
        id: 9,
        category: "business",
        src: "blog09",
        title: "How to build rapport with your web design clients",
        alt: 'alt text',
        intro: "Duis aute dalor in reprehendrition volutpe veili esses cillm dalore su figure nulla pariator. Execptur sint occat cupidator non proident."
    },
    {
        id: 10,
        category: "technology",
        src: "blog10",
        title: "How to Integrate Shopify With WordPress",
        alt: 'alt text',
        intro: "Duis aute dalor in reprehendrition volutpe veili esses cillm dalore su figure nulla pariator. Execptur sint occat cupidator non proident."
    },
    {
        id: 11,
        category: "business",
        src: "blog11",
        title: "How to build rapport with your web design clients",
        alt: 'alt text',
        intro: "Duis aute dalor in reprehendrition volutpe veili esses cillm dalore su figure nulla pariator. Execptur sint occat cupidator non proident."
    },
    {
        id: 12,
        category: "business",
        src: "blog12",
        title: "How to build rapport with your web design clients",
        alt: 'alt text',
        intro: "Duis aute dalor in reprehendrition volutpe veili esses cillm dalore su figure nulla pariator. Execptur sint occat cupidator non proident."
    },
    {
        id: 13, 
        category: "business",
        src: "blog13",
        title: "How to build rapport with your web design clients",
        alt: 'alt text',
        intro: "Duis aute dalor in reprehendrition volutpe veili esses cillm dalore su figure nulla pariator. Execptur sint occat cupidator non proident."
    },
    {
        id: 14, 
        category: "startup",
        title: "How to build rapport with your web design clients",
        src: "blog01",
        alt: 'alt text',
        intro: "Duis aute dalor in reprehendrition volutpe veili esses cillm dalore su figure nulla pariator. Execptur sint occat cupidator non proident."
    },
    {
        id: 15,
        category: "startup",
        title: "Top 10 Hackathon Ideas 2018",
        src: "blog02",
        alt: 'alt text',
        intro: "Duis aute dalor in reprehendrition volutpe veili esses cillm dalore su figure nulla pariator. Execptur sint occat cupidator non proident."
    },
    {
        id: 16,
        category: "economy",
        src: "blog03",
        title: "6 Steps to Closed-Loop Communications",
        alt: 'alt text',
        intro: "Duis aute dalor in reprehendrition volutpe veili esses cillm dalore su figure nulla pariator. Execptur sint occat cupidator non proident."
    },
    {
        id: 17,
        category: "economy",
        src: "blog04",
        title: "The Mad Men’s Guide to Job Titles at an Advertising Agency",
        alt: 'alt text',
        intro: "Duis aute dalor in reprehendrition volutpe veili esses cillm dalore su figure nulla pariator. Execptur sint occat cupidator non proident."
    },
];


let categoryList = [];
blogsContent.map(blog => categoryList.push(blog.category));
export let uniqueCategories = [...new Set(categoryList)];