const burger=document.querySelector('#burger')
const popup=document.querySelector('#popup');

burger.addEventListener('click', burgerHandler);
function burgerHandler(e){
e.preventDefault();
popup.classlist.toggle("open");
renderPopup();
}
function renderPopup(){
popup.appenChild(menu);
}