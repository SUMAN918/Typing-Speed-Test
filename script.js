const setOfWords = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequuntur quam quasi nemo ipsa nulla impedit corrupti voluptatem sunt reprehenderit?",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nesciunt exercitationem a beatae voluptates nostrum perferendis at esse voluptatibus recusandae optio dolorum ipsam ipsum placeat, rerum architecto in eligendi adipisci.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos recusandae eos aut illo sunt in rerum pariatur provident ratione porro, dolor dignissimos laboriosam architecto nulla tempore. Iste, blanditiis? Officia totam excepturi iste fugiat assumenda recusandae, veniam accusamus exercitationem. Ducimus ipsam nobis enim itaque laboriosam cupiditate, illum nihil suscipit voluptas voluptatum!",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis esse, earum pariatur illum voluptates praesentium vitae expedita rem sit, provident sint. Ad at qui quaerat sequi fugiat possimus dicta sunt, ex necessitatibus, dolorem sapiente amet quas odio rem reiciendis totam."
];
const msg = document.getElementById("msg");
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endTime;

const playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    // console.log(randomNumber);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
};

const endGame = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    // console.log(totalTime);
    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount/totalTime)*60);
    
    let finalMsg = " You typed total at "+speed+" words per minutes";
    finalMsg += compareWord(msg.innerText, totalStr);

    msg.innerText = finalMsg;
};

const compareWord = (str1, str2) =>{
    let words1 = str1.split("");
    let words2 = str2.split("");
    let cnt = 0;

    words1.forEach((item, index) => {
        if(item == words2[index]){
            cnt++;
        }
    });
    let errorWords = (words1.length - cnt);
    return(cnt + " correct out of " + words1.length + " words and the total number of errror are " + errorWords + ".");
};

const wordCounter = (str) =>{
    let response = str.split("").length;
    return response;
};

btn.addEventListener("click", ()=>{
    // console.log(btn);
    if(btn.innerText == "Start"){
        typeWords.disabled = false;
        playGame();
    }else if(btn.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerText == "Start"
        endGame();
    }
});