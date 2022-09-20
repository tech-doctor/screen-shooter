const startButton = document.querySelector('.container .button button');
const screen = document.querySelector('.screen');
const screenshotDiv = document.querySelector('.container .screenshot_div');
const requestDiv = document.querySelector('.request_div');
const form = document.querySelector('.form_result form');
const result = document.querySelector('.form_result .result');
const  share = document. querySelector('.share');

console.log(share)

const takeScreenshot = () => {
  const screenshotTarget = document.body;
  const audio = new Audio('/Assets/screenshot.mp3');
  audio.play();
  html2canvas(screenshotTarget,{x: window.scrollX,
		y: window.scrollY,
		width: window.innerWidth,
		height: window.innerHeight,
		logging: true,
  })
  .then((canvas) => {
    const imageSrc = canvas.toDataURL("image/png");
    localStorage.setItem("src", imageSrc);
    screen.innerHTML = `<img
    src="${imageSrc}">`
    startButton.style.display = "none"
    requestDiv.style.display = "block"
    //src="${"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"}">`
  }); 
}

const noComment = () => {
  requestDiv.style.display = "none";
  share.style.display = "block";
}

const allowComment = () => {
  requestDiv.style.display = "none";
  form.style.display = "block";
}

const onSubmitComment = (event) => {
  event.preventDefault();
  const src = localStorage.getItem("src");
  screen.style.display = "none"
  const form = document.querySelector('.form_result form');
  const data =  new FormData(form)
  const comment = data.get('comment');
  result.innerHTML = `
    <span>${comment}</span>
    <img src="${src}"/>`
  form.style.display = "none";
  result.style.display = "block";
  share.style.display = "block"
  
  console.log(comment)
}


  