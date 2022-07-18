

//JS code for dropdown menu
const dropdowns = document.querySelectorAll('.dropdown');



dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');
  

  select.addEventListener('click',()=>{
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  options.forEach(option =>{
    option.addEventListener('click',()=>{
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      options.forEach(option => {
        option.classList.remove('active');
      });
      option.classList.add('active');
    });
  });
});

// JS code for Close dropdown menu while mouse pointer click outside of dropdown menu
window.onclick = function(event){
  if(!event.target.matches('.select')){
    var dd = document.getElementsByClassName('menu');

    for(var i=0; i<dd.length; i++){
      var x=dd[i];
      if(x.classList.contains('menu-open')){
        x.classList.remove('menu-open')
      }
    }
  }
}


//JS code for dropdown menu end...........

//JS code for Infinite loading with help for json local server
let body1 = document.getElementsByClassName("home-link")
const loading = document.querySelector('.loading');

let limit = 6; //limit variable used to show number card that should be appear
let pageCount = 1;
let postCount = 1;

//code for json local server
const getPost = async () => {
  const response = await fetch(`https://fakejsonkali.herokuapp.com/user?_limit=${limit}$_page=${pageCount}`)
    .then(res => res.json())
    .then(json => {
      json.map(data => {
        console.log(data.card)
        body1[0].append(tdfun(data));
        loading.classList.remove('show');
        
      })
    })
}

getPost();

//code for load more data while scroll down
const showData = () => {
  loading.classList.add('show');
  setTimeout(() => {
    limit = limit + 3;
    getPost();

  }, 1000)
};

window.addEventListener('scroll', () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    showData();
  }
})


// Code create new element using div
function tdfun({ img, card, text, street, bedroom, bathroom, square, price }) {
  let g = document.createElement("div");
  console.log(g);
  g.innerHTML = `
    
    <div class="nav-item">
    <a href="./form.html" class="nav-link">
      <div class="card" style="width: auto;">
      <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <div class="tit-div d-flex justify-content-between align-items-center">
            <h5 class="card-title">${card}</h5>
            <p style="border: 1px solid rgb(157, 157, 157); padding: 10px;">Appartment</p>
          </div>
          <div class="card-text"><span class="color">${street}</span></div>
          <div class="icon-1" style="margin-bottom:10px;"><i class="fa fa-bed"></i> <span class="bold-txt">${bedroom}</span>
            Bedroom&nbsp;&nbsp;&nbsp;<i class="fa fa-bath"></i>&nbsp;<span class="bold-txt">${bathroom}</span> Bathroom</i>
          </div>
          <div class="icon-2" style="margin-bottom:10px;"><i class="bi bi-border-all"></i> <span
              class="bold-txt">${square}</span> Area</div>
          <div class="txt-1">$ <span class="bold-txt">${price}</span> <span class="color">/ Monthly Rent</span></div>

        </div>
      </div>
    </a>
  </div>
     
    `;
  return g

  
}

//JS code for Infinite loading with help for json local server end........
