//your JS code here. If required.
document.querySelector('input[type="button"]').addEventListener('click', function(){
	const color = document.getElementById('colorSelect');

	if(color.selectedIndex!==-1){
		color.remove(color.selectedIndex);
	}
})