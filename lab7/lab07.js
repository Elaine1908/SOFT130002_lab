const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

function write(number) {
    let genre = document.createElement("div");//紫色框
    genre.className="item";
    let tips = document.createElement("h4");
    tips.innerText = "Genre : " + works[number].tips;
    tips.style.margin = "5px 0 25px 0";//间距设置
    genre.appendChild(tips);

    let innerBox1 = document.createElement("div");//第一个蓝色框
    innerBox1.className = "inner-box";
    let author = document.createElement("h3");
    author.innerText = works[number].author;
    author.style.display = "inline";        //调整两个内容位于一行
    author.style.margin = "0 15px 0 0";     //调整两个内容的间距
    innerBox1.appendChild(author);

    let lifetime = document.createElement("h5");
    lifetime.innerText = "lifetime:" + works[number].lifetime;
    lifetime.style.display = "inline";      //调整两个内容位于一行
    innerBox1.appendChild(lifetime);

    let innerBox2 = document.createElement("div");//第二个蓝色框
    innerBox2.className = "inner-box";

    let photos = document.createElement("h3"); //第二个框中的文字内容
    photos.innerText="Popular Photos";
    innerBox2.appendChild(photos);

    for(let j = 0;j < works[number].photos.length;j++){//加入图片
        let img = document.createElement("img");
        img.src = works[number].photos[j];
        img.className = "photo";
        innerBox2.appendChild(img);//加进第二个框
    }

    let button = document.createElement("button");//按钮
    button.textContent = "Visit";//按钮内容

    genre.appendChild(innerBox1);
    genre.appendChild(innerBox2);
    genre.appendChild(button);
    document.body.appendChild(genre);
}

for(let i = 0; i < works.length; i++) {
    write(i);
}