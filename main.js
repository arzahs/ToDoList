$(document).ready(function(){
	outList();
	$('#sub').click(function(){
		addPost();
});

});

$(document).on('change', 'input[type="checkbox"]', function() {
 	if(this.checked){
			$(this).next().addClass('text-done');

		}
		else{
			$(this).next().removeClass('text-done');
		}
});
$(document).on('click', 'div[class="destroy"]', function() {
  	  var key = ($(this).parent().attr('data-itm'));
  	  console.log(key);
      localStorage.removeItem(key);
      outList();

  

});
$('input[type="text"]').on('keypress', function(e) {
    if (e.which == 13) {
        addPost();
    }
  });

function addPost(){
	var bisiness = $('#bisiness').val();
		if(bisiness !== ''){
		countPost=localStorage.length;
		localStorage.setItem(countPost , bisiness);
		outList();
		
}
}

function outList(){
	$('ul').each(function(){
	$(this).children().remove(); });
	if(localStorage.length>0){
    for(var i=0; i<localStorage.length; i++){
	//$('#bisiness').val('');
	if(localStorage.getItem(i)!== null){
		$('#todo').append(
			$('<li>').attr('data-itm', i).append(
				$('<input>').attr('type','checkbox')).append(
					$('<label>').attr('contenteditable','true').text(localStorage.getItem(i))).append(
					$('<div>').attr('class','destroy'))
					);
	}}
	}
}

