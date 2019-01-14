$(function() {
	// console.log('nesto');
	popolni();
});


//funkcija koja gi zema parametrite od url
function popolni(){
	// celosen momentalen url
	var url = new URL(window.location.href);
	
	//url samo od prateni parametri
	var parametersUrl = url.search;
	
	// parametri od toa url
	var search_params = new URLSearchParams(parametersUrl); 
	

	// ------------------------------------------------
	// novi varijabli bazirani od parametrite vo url
	var category = search_params.get('category');
	var title = search_params.get('title');
	

	// ------------------------------------------------
	//stavi gi parametrite vo dokumentot
	$('.game-page').html(`<h2>${title}</h2>
						  <p>${category}</p>`);
}