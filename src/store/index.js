import { createStore } from 'vuex'
// Импортируйте все ваши модули

const store = createStore({
    modules: {
        // Здесь перечислите все ваши модули
    },
    state() {
        return {
            categories: [
                'Bathroom',
                'Bedroom',
                'Kitchen',
                'Living Area'
            ],
            followProjectsData: [
                {
                    name: 'Modern Kitchen',
                    text:'Decor / Architecture',
                    imgUrl: require('../assets/img/project_1.png')
                },
                {
                    name: 'Modern Kitchen',
                    text:'Decor / Architecture',
                    imgUrl: require('../assets/img/project_2.png')
                },
                {
                    name: 'Modern Kitchen',
                    text:'Decor / Architecture',
                    imgUrl: require('../assets/img/project_3.png')
                },
                {
                    name: 'Modern Kitchen',
                    text:'Decor / Architecture',
                    imgUrl: require('../assets/img/project_4.png')
                }
            ],
            statisticsData: [
                {
                    number: 12,
                    title: 'Years Of Experience'
                },
                {
                    number: 85,
                    title: 'Success Project'
                },
                {
                    number: 15,
                    title: 'Active Project'
                },
                {
                    number: 95,
                    title: 'Happy Customers'
                }
            ],
            articlesAndNewsOptions: [
                {
                isSubtitle: true,
                numberOfTitles: 3,
                titleAlign: 'center',
                },
                {
                    isSubtitle: false,
                    numberOfTitles: 6,
                    titleAlign: 'left',
                }
            ],
            mainPageStartedImgURL: [
                require('../assets/img/start_img.png'),
            ],
            articlesAndNews: [
                {
                    backgroundImg: require('../assets/img/article_1.png'),
                    name: 'Kitchen Design',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022'
                },
                {
                    backgroundImg: require('../assets/img/article_2.png'),
                    name: 'Living Design',
                    title: 'Low Cost Latest Invented Interior Designing\n' +
                        'Ideas.',
                    date: '22 December,2022'
                },
                {
                    backgroundImg: require('../assets/img/article_3.png'),
                    name: 'Interior Design',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022'
                },
                {
                    backgroundImg: require('../assets/img/article_4.png'),
                    name: 'Kitchen Design',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022'
                },
                {
                    backgroundImg: require('../assets/img/article_5.png'),
                    name: 'Living Design',
                    title: 'Low Cost Latest Invented Interior Designing\n' +
                        'Ideas.',
                    date: '22 December,2022'
                },
                {
                    backgroundImg: require('../assets/img/article_6.png'),
                    name: 'Interior Design',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022'
                }
            ],
            largeMainImgs: [
                {
                    imgUrl: require('../assets/img/articles-main.png'),
                    isTitle: true,
                    title:'Articles & News',
                    subtitle:'Home / Blog',
                },
                {
                    imgUrl: require('../assets/img/blog_details_main.png'),
                    isTitle: false,
                    title:'',
                    subtitle:'',
                },
                {
                    imgUrl: require('../assets/img/projects_main.png'),
                    isTitle: true,
                    title: 'Our Project',
                    subtitle: 'Home / Project',
                },
                {
                    imgUrl: require('../assets/img/project_details_main_img.png'),
                    isTitle: false,
                    title:'',
                    subtitle:'',
                }
            ],
            latestPostData: [
                {
                    img: require('../assets/img/latest-post.png'),
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    textFirst: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.',
                    textSecond: 'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
                },
            ],
            articlesList: [
                {
                    tags: ['Kitchen', 'Kitchen Planning'],
                    firstTitle: 'Let’s Get Solution For Building Construction Work',
                    firstImg: require("../assets/img/kitchen_img_1.png"),
                    date: '26 December,2022',
                    firstParagraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.',
                    secondParagraph: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    secondTitle: 'Design sprints are great',
                    thirdParagraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    textList: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'],
                    secondImg: require("../assets/img/kitchen_img_2.png"),
                    fourthParagraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    quote: true,
                    paragraphList: [
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                        'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                    ],
                },
                {
                    tags: ['Architecture', 'Kitchen Planning'],
                    firstTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    firstImg: require("../assets/img/kitchen_plan.jpg"),
                    date: '26 December,2022',
                    quote: false,
                    firstParagraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.',
                },
                {
                    tags: ['Building', 'Architecture'],
                    firstTitle: 'Best For Any Office & Business Interior Solution',
                    firstImg: require("../assets/img/building.jpg"),
                    date: '26 December,2022',
                    quote: false,
                    firstParagraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.',
                },
                {
                    tags: ['Bathroom'],
                    firstTitle: 'Unveiling Tranquility: Crafting Your Dream Bathroom',
                    firstImg: require("../assets/img/bathroom.jpg"),
                    date: '26 December,2022',
                    quote: false,
                    firstParagraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.',
                },
                {
                    tags: ['Bedroom'],
                    firstTitle: 'The Art of Sanctuary: Transforming Your Bedroom Retreat',
                    firstImg: require("../assets/img/bedroom.jpg"),
                    date: '26 December,2022',
                    quote: false,
                    firstParagraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.',
                },
            ],
            tagList: [
                'Kitchen',
                'Bathroom',
                'Building',
                'Architecture',
                'Kitchen Planning',
                'Bedroom'
            ],
            projectsData: [
                {
                  id: 0,
                  name: 'Minimal Bedroom',
                  text:'Decor / Architecture',
                  imgUrl: require('../assets/img/project_img_1.png'),
                  isFavourite: true,
                  tags: ['Bathroom', 'Bedroom']
                },
                {
                    name: 'Minimal Bedroom',
                    text:'Decor / Architecture',
                    imgUrl: require('../assets/img/project_img_2.png'),
                    isFavourite: false,
                    tags: ['Bedroom', 'Kitchen']
                },
                {
                    name: 'Modern Bedroom',
                    text:'Decor / Architecture',
                    imgUrl: require('../assets/img/project_img_3.png'),
                    isFavourite: false,
                    tags: ['Kitchen', 'Living Area']
                },
                {
                    name: 'Classic Minimal Bedroom',
                    text:'Decor / Architecture',
                    imgUrl: require('../assets/img/project_img_4.png'),
                    isFavourite: true,
                    tags: ['Bathroom', 'Living Area']
                },
                {
                    name: 'Minimal Bedroom table',
                    text:'Decor / Architecture',
                    imgUrl: require('../assets/img/project_img_5.png'),
                    isFavourite: false,
                    tags: ['Bathroom', 'Kitchen']
                },
                {
                    name: 'System Table',
                    text:'Decor / Architecture',
                    imgUrl: require('../assets/img/project_img_6.png'),
                    isFavourite: false,
                    tags: ['Bedroom', 'Living Area']
                },
                {
                    name: 'Modern Bedroom',
                    text:'Decor / Architecture',
                    imgUrl: require('../assets/img/project_img_7.png'),
                    isFavourite: false,
                    tags: ['Bathroom', 'Bedroom']
                },
                {
                    name: 'Modern Bedroom',
                    text:'Decor / Architecture',
                    imgUrl: require('../assets/img/project_img_8.png'),
                    isFavourite: false,
                    tags: ['Kitchen', 'Living Area']
                },
            ],
            projectDetailsText: [
                {
                    title:'Minimal Look Bedrooms',
                    text: {
                        text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
                        text2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
                    }
                }
            ],
            carouselImgs: [
                require('../assets/img/carousel_img_1.png'),
            ]
        }
    },
    mutations: {

    },
    actions: {
        // Общие действия для выполнения асинхронных операций и коммита мутаций, если необходимо
    },
    getters: {
        getCategories: (state) => state.categories,
        getFollowProjectsData: (state) => state.followProjectsData,
        getStatisticsData: (state) => state.statisticsData,
        getArticlesAndNewsOptions: (state) => state.articlesAndNewsOptions,
        getMainPageStartedImgURL: (state) => state.mainPageStartedImgURL,
        getArticlesAndNews: state => state.articlesAndNews,
        getLargeMainImgs: state => state.largeMainImgs,
        getLatestPostData: state => state.latestPostData,
        getArticlesList: state => state.articlesList,
        getTagList: state => state.tagList,
        getProjectsData: state => state.projectsData,
        getProjectDetailsText: state => state.projectDetailsText,
    }
})

export default store
