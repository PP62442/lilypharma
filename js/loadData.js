class News {
    constructor(id, img, title, des, owner, date) {
        this.id = id,
            this.img = img,
            this.title = title,
            this.des = des,
            this.owner = owner,
            this.date = date
    }
}

const newsList = [
    new News(0001, 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/KOL6YFOCSZK2ZENHC7TIWJXO7Y.jpg', 'COVID in Europe: An updated list of travel restrictions for every European country', 'des1', 'panuwat', '2022/02/02'),
    new News(0002, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQOF3qPyiRzz7hQFLI5G_MGuBigt5jF84LewIKOcOiGVQUGgcDWRgWlmb0H-G7fh2rQQ&usqp=CAU', 'As BA.2 subvariant of Omicron rises, lab studies point to signs of severity', 'des1', 'panuwat', '2022/02/02'),
    new News(0003, 'https://static.toiimg.com/thumb/89950912.cms?width=680&height=512&imgsize=19850', 'New omicron subvariant has new COVID symptoms', 'des1', 'panuwat', '2022/02/02'),
    new News(0004, 'https://static.toiimg.com/thumb/89559747.cms?width=680&height=512&imgsize=29486', 'Coronavirus symptoms: Pain in these two places could be sign of an Omicron infection', 'des1', 'panuwat', '2022/02/02'),
    new News(0005, 'https://static01.nyt.com/images/2022/03/01/us/01virus-briefing-cdc-contact-tracing1/merlin_172696629_a1ec7ad9-86bd-4813-942a-ff78805fb307-superJumbo.jpg?quality=75&auto=webp', 'Covid News: C.D.C. Drops Contact Tracing Recommendation', 'des1', 'panuwat', '2022/02/02'),
]


function loadNews() {
    let newItems = document.getElementById('newsItems');
    console.log(newItems)
    newsList.forEach(element => {
        let diveItem = document.createElement('div');
        diveItem.className = 'newsItem'
        let img = document.createElement('img')
        img.className = "img-news-rigth"
        img.src = `${element.img}`
        let infoItem = document.createElement('div')
        infoItem.className = "itemInfo"
        let title = document.createElement('div')
        title.className = "title"
        title.innerHTML = `${element.title}`
        infoItem.appendChild(title)
        diveItem.appendChild(img)
        diveItem.appendChild(infoItem)
        newItems.appendChild(diveItem)
    });
}