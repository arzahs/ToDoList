$(document).ready(function(){
	$('#sub').click(function(){
		var bisiness = $('#bisiness').val();
		$('#bisiness').val('');
		$('#todo').append(
			$('<li>').append(
				$('<input>').attr('type','checkbox')).append(
					$('<label>').attr('contenteditable','true').text(bisiness)).append(
					$('<div>').attr('class','destroy'))
					);
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
