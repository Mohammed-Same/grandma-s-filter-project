const h = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');
const head = document.querySelector('header');

h.addEventListener('click',()=>{
    nav.classList.toggle('nav');
  

});
(function(){
    const button = document.querySelectorAll('.btn');
    const items = document.querySelectorAll('.item-box');
    button.forEach((button)=>{
        button.addEventListener('click',(e)=>{
            e.preventDefault()
            const filter = e.target.dataset.filter
            items.forEach((item)=>{
                if(filter ==='all'){
                    item.style.display='block'
                }else {
                    if(item.classList.contains(filter)){
                        item.style.display='block'
                    }else{
                        item.style.display='none'
                    }
                }
            })
        })
    })
})();

(function(){
    const searchBox = document.querySelector('#search-box')
    const storeItems = document.querySelectorAll('.item-box')
    
    searchBox.addEventListener('keyup', (e) => {
    
        const searchFilter = e.target.value.toLowerCase().trim()
        //display only items that contain filter input
    
        storeItems.forEach((item) => {
            if (item.textContent.includes(searchFilter)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })

})();


//wire up filter search box
