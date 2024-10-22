const box = document.getElementById('box');
const time = document.getElementById('time');
const nums = document.getElementById('number');
const score = document.getElementById('score');
const end = document.getElementById('end')
const container = document.getElementById('container')
const button = document.getElementById('button')
const currScore = document.getElementById('currScore')
boxNumber();

nums.innerText = Math.floor(Math.random()*10)
 
function boxNumber(){
    let a = 1, b = 2, c = 3 ,d = 4
    for(let i = 0; i <= 272; i++) {
        let child = document.createElement('div');
        child.className = 'one';
        child.innerText = Math.floor(Math.random()* 10);
        // if(a === 1) {
        //     child.style.backgroundColor = "yellow";
        //     a = 2;
        // }
        // else if(b === 2) {
        //     child.style.backgroundColor = "red"
        //     b = 1
        // }
        // else if(c === 3) {
        //     child.style.backgroundColor = "pink"
        //     c = 2;
        // }
        // else if(d === 4) {
        //     child.style.backgroundColor = "green";
        //     a=  1;
        //     b = 2;
        //     c = 3;
        //     d = 4;
        // }

        function getRandomColor() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }
        child.style.backgroundColor = getRandomColor();
        box.appendChild(child);
    }
}


box.addEventListener('click',(e)=>{
    if(Number(nums.innerText) === Number(e.target.innerText)) {
        let scoreNum = Number(score.innerText)
        score.innerText = scoreNum += 10;
        nums.innerText = Math.floor(Math.random()*10);
        box.innerText = "";
        boxNumber();
    }
});


let left = 29;
function timer() {
    setInterval(()=>{
        if(left < 0) {
            return;
        }

        else if(left === 0) {
            container.style.display = "none"
            end.style.display = "flex";
            currScore.innerText = score.innerText;
            
            
            button.addEventListener('click',()=>{
                container.style.display = "flex"
                end.style.display = "none";
                left = 29;
                score.innerText = "00";
                time.style.color = "greenyellow"
            })
        }
        else {
            time.innerText = left;
            left--;
        }
        if(left < 9) {
            time.style.color = "red"
        }
    },1000)
}

timer();


