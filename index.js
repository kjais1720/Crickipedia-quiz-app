// To set the theme 
const setTheme = () => {
    let darkModeIsSelected = localStorage.getItem('isDarkMode');
    const themeToggleBtn = document.querySelector('.theme-toggle-btn');
    if(darkModeIsSelected===undefined){
        localStorage.setItem(true)
    } else{
        if(darkModeIsSelected === 'true'){
            document.body.className = '';
            themeToggleBtn.children[0].classList.replace('fa-moon','fa-sun')
            document.body.classList.add('dark-mode');
        } else {
            themeToggleBtn.children[0].classList.replace('fa-sun','fa-moon')
            document.body.className = ''
        }
    }
}


const themeToggleBtn = document.querySelector('.theme-toggle-btn');
themeToggleBtn.addEventListener('click', ()=> {
    let darkModeIsSelected = localStorage.getItem('isDarkMode');
    darkModeIsSelected =  darkModeIsSelected === 'false' ? true : false;
    
    localStorage.isDarkMode = darkModeIsSelected;
    setTheme();
})

setTheme();

// To fire the alert for the given amount of time 
const fireAlert = duration => {
    const alert = document.querySelector('.tr-alert')
    alert.classList.remove('hide');
    setTimeout(()=>alert.classList.add('hide'), duration)
}

// Code to change the width and color of the timerbar of the questions 
const decimalToHexa = num => Number(num).toString(16);

const changeWidthAndColorWithTime = timeLeft => {
    const timerBar = document.querySelector('.time-indicator-bar');
    const timer = document.querySelector('.ques-info .timer');
    timer.innerText = timeLeft;
    let timerColor = '00ff00';
    let timerWidth = 100;
    let redHex = 0;
    let greenHex = 255;
    const changeWidthBy = Math.ceil(100 / timeLeft);
    const changeHexBy = Math.floor(255 / timeLeft);
    const timerId = setInterval(()=>{
        if(timeLeft<=0) {
            clearInterval(timerId);
            fireAlert(5000)
        }
        else{
            timeLeft--;
            timer.innerText=timeLeft;
            greenHex -= changeHexBy;
            redHex += changeHexBy;
            timerWidth -= changeWidthBy;
            timerColor = `#${decimalToHexa(redHex)+decimalToHexa(greenHex)}00`
            timerBar.style.backgroundColor = timerColor;

            if(timerWidth < 0) timerBar.style.width = 0;
            
            else timerBar.style.width = timerWidth+'%';
        }
    },1000)
}

const toggleClassOfTarget = (togglerBtnId, toggleClass) =>{
    const togglerBtn = document.getElementById(togglerBtnId);
    const target = document.getElementById(togglerBtn.getAttribute('data-target'));
    togglerBtn.addEventListener('click', () => target.classList.toggle(toggleClass) );
}

toggleClassOfTarget('modal-btn', 'hide');
toggleClassOfTarget('modal-close-btn', 'hide');
