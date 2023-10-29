const button = document.getElementById('button');
// const container = document.querySelector('.container');
const content = document.querySelector('.nav--expanded-part');
// button.addEventListener('click', () => {
//     if(container.style.height === container.scrollHeight + "px") {
//        collapsingIn();
//     } else {collapsingOut();}
// });

// const collapsingOut = () => {
//     container.style.animationName = 'collapsing';
//     container.style.height = container.scrollHeight + "px";
//     button.disabled = true
//     setTimeout(()=>{
//         button.disabled = false
//         container.style.animationName = ''; 
//     },500);
// };

// const collapsingIn = () => {
//     container.style.animationName = 'collapsing';
//     container.style.animationDirection = 'reverse';
//     container.style.height = '50px';
//     button.disabled = true
//     setTimeout(()=>{
//         button.disabled = false
//         container.style.animationDirection = '';
//         container.style.animationName = ''; 
//     },500);
// };

button.addEventListener('click', () => {
    if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
});