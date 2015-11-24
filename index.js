var state = {
	items: []
};

var data = localStorage.getItem('data');
if(data){
	state = JSON.parse(data);
}


window.addEventListener("load", function () {
	var button = document.querySelector('button');
	var list = document.querySelector('ul');
	var input = document.querySelector('input');
	

	update();
	
	function update () {
		list.innerHTML = '';
		for (var i = 0; i < state.items.length; i++){
			var checkbox = document.createElement('input');
			var el = document.createElement('label');
			var li = document.createElement('li')
			var div = document.createElement('div');
			div.classList.add('destroy');
			el.innerText = state.items[i];
			checkbox.type = 'checkbox';
			li.appendChild(checkbox);
			li.appendChild(el);
			li.appendChild(div);
			li.id = i;
			list.appendChild(li);
		} 
	}
	
	list.addEventListener('click', function (e) {
		if(e.target.classList.contains('destroy')){
			var parent = e.target.parentNode;
			var iter = parent.id;
			list.removeChild(parent);
			state.items.splice(iter, 1);
			localStorage.setItem('data', JSON.stringify(state));
		}



	});

	button.addEventListener('click', function () {
		var l = input.value;
		state.items.push(l);
		update();
		localStorage.setItem('data', JSON.stringify(state));
		input.value = '';
	}); 
}); 