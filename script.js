var slideitem_cert = 0;
var slideitem_skill = 0;
var slidewidth_cert = document.getElementsByClassName("row-cert")[0].offsetWidth;
var slidewidth_skill = document.getElementsByClassName("row-skill")[0].offsetWidth;

window.onload = function() {
	setInterval(passarSlide, 2000);
	setInterval(passarSlideSkill, 2000);

	
	var objsS = document.getElementsByClassName("item-slider-skill");
	for (var i = 0; i < objsS; i++) {
		objsS[i].style.width = slidewidth_skill;
	}
	
	var objs = document.getElementsByClassName("item-slider-cert");
	for (var i = 0; i < objs; i++) {
		objs[i].style.width = slidewidth_cert;
	}
}
function passarSlide(){
	slide_item_size = (document.getElementsByClassName('item-slider-cert')[0].offsetWidth) + (slideitem_cert==0 ? 9 : 6 ) ;
	size_in_row = Math.floor(slidewidth_cert/slide_item_size)
	if(slideitem_cert>=(document.getElementsByClassName("item-slider-cert").length - size_in_row) ){
		slideitem_cert = 0;
	}
	else {
		slideitem_cert++;
	}

	document.getElementsByClassName("slider-area")[0].style.marginLeft = "-"+(slideitem_cert* slide_item_size )+"px";
	console.log(document.getElementsByClassName("slider-area")[0].style.marginLeft)

}

function passarSlideSkill(){
	slide_item_size = (document.getElementsByClassName('item-slider-skill')[0].offsetWidth) + (slideitem_skill==0 ? 9 : 6 ) ;
	size_in_row = Math.floor(slidewidth_skill/slide_item_size)
	if(slideitem_skill>=(document.getElementsByClassName("item-slider-skill").length - size_in_row) ){
		slideitem_skill = 0;
	}
	else {
		slideitem_skill++;
	}

	document.getElementsByClassName("skill-slider-area")[0].style.marginLeft = "-"+(slideitem_skill* slide_item_size )+"px";

}

function createBackgrounComponents(){
	let divbg = document.querySelector('.bg-grid')
	let divsAdd = '<div class="bg-item"></div> '
	for(let i = 0; i < 400; i++){
		divsAdd += '<div class="bg-item"></div> '

	}
	divbg.innerHTML = divsAdd
}

createBackgrounComponents()