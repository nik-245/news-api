let sources = 'the-times-of-india';
let apiKey = '680b38e57b74438f879fe741ec4f0285';

// news container grabing 
let newsAccording = document.getElementById("newsAccording");

//make new ajax request to make reqaust from the news api 
let xhr = new XMLHttpRequest();

xhr.open('get' , `https://newsapi.org/v2/top-headlines?sources=${sources}&apikey=${apiKey}` , true);

xhr.onload = function(){
    if(this.status === 200){
        let json =  JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(json.articles);
        let newshtml = "";
        articles.forEach(function(element , index){
            let news = `

                        <div class="accordion accordion-flush" id="newsAccording">
                                <div class="accordion-item border">
                                    <h2 class="accordion-header" id="flush-heading${index}">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                                        <b>Breaking News ${index+1}:</b> ${element["title"]}
                                        </button>
                                    </h2>
                                    <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#newsAccording">
                                        <div class="accordion-body">${element["content"]}.<a href="${element['url']}" target="_blank" >Read more here</a></div>
                                    </div>
                                </div>
                        </div>
            
            `;
            newshtml += news;
        }); 
        newsAccording.innerHTML = newshtml;
    }
    else{
        console.log("some erorr");
    }
}

xhr.send();




/*

// fecth api syntex 
//fecth api is the alternative of ajax object

function getData(){
    let url = 'somthing.txt';

    fetch(url).then((response)=>{
        return response.text;
    }).then((data)=>{
        return data;
    })
}

// data jernarate using api //get request

function getData(){
    let url = 'apilink';

    fetch(url).then((response)=>{
        return response.json(); //parse the data
    }).then((data)=>{   //json are return the data as js object
        return data;
    })
}

//fetch api is return two promise so in the synetx we give thw two time then function.



// post request using fetch api

function postData(){
    let url ="postlink";
    data = 'string or object'  // if data is oject then need to nake there string using strigify

    let params = {
         method : 'post',
         headers : {
                'content-type' : 'aplication/json'
         },
         body : data // if data is object then body : Json.stringify(data);
    }

    fecth(url , params).then(response => response.json()).then(data => console.log(data))
} 

*/




















