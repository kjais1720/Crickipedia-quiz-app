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
