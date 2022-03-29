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

class Product {
    constructor(id, img, type, name, des, price, bestSeller) {
        this.id = id,
            this.img = img, this.type = type, this.name = name, this.des = des, this.price = price, this.bestSeller = bestSeller
    }
}

const newsList = [
    new News(0001, 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/KOL6YFOCSZK2ZENHC7TIWJXO7Y.jpg', 'COVID in Europe: An updated list of travel restrictions for every European country', 'des1', 'panuwat', '2022/02/02'),
    new News(0002, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQOF3qPyiRzz7hQFLI5G_MGuBigt5jF84LewIKOcOiGVQUGgcDWRgWlmb0H-G7fh2rQQ&usqp=CAU', 'As BA.2 subvariant of Omicron rises, lab studies point to signs of severity', 'des1', 'panuwat', '2022/02/02'),
    new News(0003, 'https://static.toiimg.com/thumb/89950912.cms?width=680&height=512&imgsize=19850', 'New omicron subvariant has new COVID symptoms', 'des1', 'panuwat', '2022/02/02'),
    new News(0004, 'https://static.toiimg.com/thumb/89559747.cms?width=680&height=512&imgsize=29486', 'Coronavirus symptoms: Pain in these two places could be sign of an Omicron infection', 'des1', 'panuwat', '2022/02/02'),
    new News(0005, 'https://static01.nyt.com/images/2022/03/01/us/01virus-briefing-cdc-contact-tracing1/merlin_172696629_a1ec7ad9-86bd-4813-942a-ff78805fb307-superJumbo.jpg?quality=75&auto=webp', 'Covid News: C.D.C. Drops Contact Tracing Recommendation', 'des1', 'panuwat', '2022/02/02'),
]

const productList = [
    new Product('pd001', './assets/images/nDroCare.png', 'antivirus product', 'N-Dro Care', 'N-Dro Care Description', 120, true),
    new Product('pd002', './assets/images/nDroClean.png', 'antivirus product', 'N-Dro Clean', 'N-Dro Care Description', 120, false),
    new Product('pd003', './assets/images/nDroCare.png', 'antivirus product', 'N-Dro Care', 'N-Dro Care Description', 120, true),
    new Product('pd004', './assets/images/nDroCare.png', 'antivirus product', 'N-Dro Care', 'N-Dro Care Description', 120, false),
    new Product('pd0015', './assets/images/nDroCare.png', 'antivirus product', 'N-Dro Care', 'N-Dro Care Description', 120, true)
]


function loadNews() {
    let newItems = document.getElementById('newsItems');
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
        let btnRead = document.createElement('div')
        btnRead.className = "btn-read-more"
        btnRead.innerHTML = 'Read More <i class="las la-arrow-right"></i>'
        infoItem.appendChild(title)
        infoItem.appendChild(btnRead)
        diveItem.appendChild(img)
        diveItem.appendChild(infoItem)
        newItems.appendChild(diveItem)
    });
}

function loadProduct() {
    let productBlog = document.getElementById('products');
    productList.forEach(element => {
        let productItem = document.createElement('div');
        productItem.className = 'productItem';
        let productItemImg = document.createElement('img');
        productItemImg.src = `${element.img}`;
        let productItemName = document.createElement('div');
        productItemName.className = 'productItemName'
        productItemName.innerHTML = element.name
        let productItemDes = document.createElement('div');
        productItemDes.className = 'productItemDes'
        productItemDes.innerHTML = element.des
        if(element.bestSeller) {
            let bestSeller = document.createElement('div');
            bestSeller.className = 'bestSeller'
            bestSeller.innerHTML = 'สินค้าขายดี'
            productItem.appendChild(bestSeller)
        }
        productItem.appendChild(productItemImg);
        productItem.appendChild(productItemName);
        productItem.appendChild(productItemDes);
        productBlog.appendChild(productItem);
    });
}