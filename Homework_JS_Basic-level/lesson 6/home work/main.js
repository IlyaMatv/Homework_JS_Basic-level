var addRowBtn = document.getElementById('addRow'),
	tBody = document.getElementsByTagName('tbody')[0];

addRowBtn.onclick = function(event) {
	var	newRow = document.createElement('tr');
	newRow.innerHTML = '<td></td><td></td><td></td>';

	var firstRow = tBody.children[0];
	tBody.insertBefore(newRow, firstRow);
};

tBody.addEventListener('click', insertInput, false);
function insertInput (event) {
	var target = event.target;

	if (target.tagName === 'TD' && target.id !== 'addRow') {
		target.innerHTML = '<input type="text" onkeypress="entfunc(event);" onblur="setText(event);" value="' + target.innerText + '">';

		var input = document.getElementsByTagName('input')[0];
		input.focus();
	}
};

function entfunc(event) {
	if (event.keyCode == 13) {
		setText(event);
	};
};

function setText (event) {
	var target = event.target,
			parentTd = target.parentElement;

			parentTd.innerText = target.value;
};
