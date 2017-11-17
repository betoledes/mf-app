function navegar(liga){
	window.location.assign(liga + '.html');
}

function extender(id){
	document.getElementById(id).classList.toggle('verOpcionPromo');
	document.getElementById(id).classList.toggle('verOpcionCafes');
	document.getElementById(id).classList.toggle('verOpcionVendido');
	document.getElementById('c-'+id).classList.toggle('fa-chevron-circle-down')
	document.getElementById('c-'+id).classList.toggle('fa-chevron-circle-up')
}

function expandir(id){
	document.getElementById(id).classList.toggle('verOpcionCom');
	document.getElementById(id).classList.toggle('verOpcionBe');
	document.getElementById(id).classList.toggle('verOpcionDe');	
	document.getElementById(id).classList.toggle('verOpcionPo');		
	document.getElementById('c-'+id).classList.toggle('fa-chevron-circle-down')
	document.getElementById('c-'+id).classList.toggle('fa-chevron-circle-up')

}

function editar(){
	document.getElementById('n').removeAttribute("disabled");
	document.getElementById('telefono').removeAttribute("disabled");
	document.getElementById('email').removeAttribute("disabled");
	document.getElementById('quitar').style.display = 'none';
	document.getElementById('ver').style.display = 'block';
}

function guardarEditado(){
	document.getElementById("n").setAttribute("disabled", "true")
	document.getElementById("telefono").setAttribute("disabled", "true")
	document.getElementById("email").setAttribute("disabled", "true")
	document.getElementById('quitar').style.display = 'block';
	document.getElementById('ver').style.display = 'none'
}