const colorChangerbtn = document.querySelectorAll('.button');
const body = document.querySelector("body");
colorChangerbtn.forEach(function(button){
    // console.log(button);
    
    button.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
    });
});

const purplebtn = document.querySelector('#purple');
purplebtn.style.backgroundColor = "purple";
