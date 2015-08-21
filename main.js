$(document).ready(function(){
	$('#sub').click(function(){
		addPost();
});
	/*$('<input').click(function(){
		$($(this)).destroy();
	});*/
	/*$('input:checkbox').click(function(){
		if(this.checked){
			$(this).next().addClass('text-done');

		}
		else{
			$(this).next().removeClass('text-done');
		}
	});*/

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
  $(this).parent().remove();
});
$('input[type="text"]').on('keypress', function(e) {
    if (e.which == 13) {
        addPost();
    }
  });

function addPost(){
	var bisiness = $('#bisiness').val();
		if(bisiness !== ''){
		$('#bisiness').val('');
		$('#todo').append(
			$('<li>').append(
				$('<input>').attr('type','checkbox')).append(
					$('<label>').attr('contenteditable','true').text(bisiness)).append(
					$('<div>').attr('class','destroy'))
					);
	}
}
