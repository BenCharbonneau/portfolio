$('nav a').on('click',(e) => {
	section = $(e.currentTarget).attr('href');
	$('#container section').addClass('hidden');
	$(section).removeClass('hidden');

})