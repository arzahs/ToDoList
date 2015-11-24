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
			list.appendChild(li);
		} 
	}
	
	button.addEventListener('click', function () {
		var l = input.value;
		state.items.push(l);
		update();
		localStorage.setItem('data', JSON.stringify(state));
	}); 
}); 