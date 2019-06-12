// Link + Imagem
var banner = [
["https://go.hotmart.com/O8551550G?src=rotator_336x280_lateral_topo", "https://1.bp.blogspot.com/-oBJzcljZyDE/XE82YbQM7sI/AAAAAAAAAEY/ACyje9i0oSUctB7ThLJrt4ETdegIztcqACLcBGAs/s320/O8551550G_images_336x280.jpg"],
];
// Embaralha
function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}
shuffle(banner);
// Printa
document.getElementById('336x280_lateral_topo').innerHTML = '<a href="'+banner[0][0]+'" target="_blank" rel="nofollow" title="CLIQUE AQUI PARA SABER MAIS..."><img src="'+banner[0][1]+'" style="width:100%;" alt="CLIQUE AQUI PARA SABER MAIS..." /></a>';