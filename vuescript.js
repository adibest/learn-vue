new Vue({
	el	: "#app",
	data: {
		judul 	: 'Latihan',
		isi 	: 'Praktek Vue',
		kondisi	: 1 + 1 == 2,
		titles 	: [
			'Ganti Presiden',
			'Politisasi Kampus',
			'Lagu Libur',
			'Mama Love You'
		]
	},
	methods: {
		gantiJudul(value) {
			this.judul = value;
		},
		gantiIsi() {
			this.isi = "Learning and Do";
		}
	}
});