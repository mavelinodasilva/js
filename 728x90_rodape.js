// Link + Imagem
var banner = [
["https://go.hotmart.com/A5166248S?src=rotator_728x90_rodape", "https://3.bp.blogspot.com/-tkkdrWqNUDc/XE8YmdVAZ8I/AAAAAAAAACs/yCNwBTFbQMQ6ZLqekYOzg12BhapDdfBBQCLcBGAs/s1600/A5166248S_images_728x90.jpg"],
["https://go.hotmart.com/B7368341I?src=rotator_728x90_rodape", "https://3.bp.blogspot.com/-c9X1_NChFpQ/XE8aOOQPYAI/AAAAAAAAAD0/2A_OZSMGtQYPcCYvcCHtCkWhD0RST8ZNgCLcBGAs/s1600/I2938479M_images_728x90.jpg"],
["https://go.hotmart.com/B7460556X?src=rotator_728x90_rodape", "https://2.bp.blogspot.com/-r-JMSiHEo_c/XE8YmQeMvbI/AAAAAAAAACk/kvfJB-acaAMw7RLEo2fu8Ch1nIT0A5REgCLcBGAs/s1600/B7460556X_images_728x90.jpg"],
["https://go.hotmart.com/M5085367G?src=rotator_728x90_rodape", "https://4.bp.blogspot.com/-uSfO6VjCUbI/XE8YmTsgeyI/AAAAAAAAACo/y70lMM7OdMUJC2sIDWMF4JaU-vhKGytfwCLcBGAs/s1600/H3004461M_images_728x90.jpg"],
["https://go.hotmart.com/I2938479M?src=rotator_728x90_rodape", "https://3.bp.blogspot.com/-c9X1_NChFpQ/XE8aOOQPYAI/AAAAAAAAAD0/2A_OZSMGtQYPcCYvcCHtCkWhD0RST8ZNgCLcBGAs/s1600/I2938479M_images_728x90.jpg"],
["https://go.hotmart.com/I4928943O?src=rotator_728x90_rodape", "https://1.bp.blogspot.com/-qnH2GnKGbrU/XE8YmzlU5vI/AAAAAAAAACw/-XufYIIrN8MgVvBlaaGla3KCB2bBmr8HwCLcBGAs/s1600/I4928943O_images_728x90.jpg"],
["https://go.hotmart.com/I7349246G?src=rotator_728x90_rodape", "https://3.bp.blogspot.com/-QcI-f0grml0/XE8YnSDBlBI/AAAAAAAAAC0/KZX5dMDoPgYs_aFE8-2NSjdMc8vNSs3vACLcBGAs/s1600/I7349246G_images_728x90.jpg"],
["https://go.hotmart.com/M5085367G?src=rotator_728x90_rodape", "https://3.bp.blogspot.com/-9m0UWMs5LL8/XE8Yn4BskyI/AAAAAAAAAC4/7H_IjuioPak23hFSGRsdrlkINsxGZ1FJQCLcBGAs/s1600/M5085367G_images_728x90.jpg"],
["https://go.hotmart.com/O5209957G?src=rotator_728x90_rodape", "https://1.bp.blogspot.com/-rMPEpZhEdsk/XE8aOIa1ERI/AAAAAAAAADs/XYP-8fSnTzAdJSsJxSGhKT-UQAI_WyBCgCLcBGAs/s1600/O5209957G_images_728x90.jpg"],
["https://go.hotmart.com/O8551550G?src=rotator_728x90_rodape", "https://4.bp.blogspot.com/-IeXlpCu4yA4/XE8YoPfdOVI/AAAAAAAAAC8/HQI4zk5xvDEmvFxxjqPFuJTEO5dAJ6bLQCLcBGAs/s1600/O8551550G_images_728x90.gif"],
["https://go.hotmart.com/P4619028G?src=rotator_728x90_rodape", "https://1.bp.blogspot.com/-Pe7lIPLqnx8/XE8aOXUbHoI/AAAAAAAAAD4/Q3RiXtPwrq0aeJYNeBYdG_TUJsBqEVYkgCLcBGAs/s1600/P4619028G_images_728x90.jpg"],
["https://go.hotmart.com/P5127414M?src=rotator_728x90_rodape", "https://3.bp.blogspot.com/-AI6MdoeBHnI/XE8YoUuUTNI/AAAAAAAAADA/Xd98Nd72EhQT8Z3VtP24SUKZn5H5xfgwACLcBGAs/s1600/P5127414M_images_728x90.jpg"],
["https://go.hotmart.com/P5306343E?src=rotator_728x90_rodape", "https://4.bp.blogspot.com/-9FSskvioWF4/XE8aOoOzUfI/AAAAAAAAAD8/wg1krpWyoJsYfyhW1FK_6xs2tWPlGPJpgCLcBGAs/s1600/P5306343E_images_728x90.jpg"],
["https://pay.hotmart.com/E7546984C?src=rotator_728x90_rodape", "https://2.bp.blogspot.com/-NkOr22ybeDc/XE8Yo1C55AI/AAAAAAAAADE/lDNrb63SSg0YCW2L-MFpi0vujBb6yS9yACLcBGAs/s1600/S5255545V_images_728x90.jpg"],
["https://go.hotmart.com/U3615855M?src=rotator_728x90_rodape", "https://1.bp.blogspot.com/-5FLpH4g3x2c/XE8Yo2w1c1I/AAAAAAAAADI/QylVWwb0DTovMvOJzIpUcovGiOuGYpxXgCLcBGAs/s1600/U3615855M_images_728x90.jpg"],
["https://go.hotmart.com/A7411977V?src=rotator_728x90_rodape", "https://3.bp.blogspot.com/-arfmL2qL3yo/XE8YpJaEytI/AAAAAAAAADM/1guJa5b8S5w2vktx4FPmP1omF8eMO09EQCLcBGAs/s1600/U4805487K_images_728x90.jpg"],
["https://go.hotmart.com/V14279414X?src=rotator_728x90_rodape", "https://3.bp.blogspot.com/-zhE_C2MVaso/XE8YpMCus7I/AAAAAAAAADQ/puevLRWt1V4nrPEBs7UdrExavf3AgwP3gCLcBGAs/s1600/W5065217K_images_728x90.jpg"],
["https://go.hotmart.com/X7092466A?src=rotator_728x90_rodape", "https://3.bp.blogspot.com/-edpWsLM2aeE/XE8aPEF8GlI/AAAAAAAAAEA/d_sPRKlyckgdqf1HFYlmDqH68OVGIf1HwCLcBGAs/s1600/X7092466A_images_728x90.jpg"]
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
document.getElementById('728x90_rodape').innerHTML = '<a href="'+banner[0][0]+'" target="_blank" rel="nofollow" title="CLIQUE AQUI PARA SABER MAIS..."><img src="'+banner[0][1]+'" style="width:100%;" alt="CLIQUE AQUI PARA SABER MAIS..." /></a>';