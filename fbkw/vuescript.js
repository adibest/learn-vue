new Vue({
	el: "#app",
	data: {
		input: '',
		status: [
			{ text: 'status 1', like: false },
			{ text: 'status 2', like: false },
		]
	},
	methods: {
		newStatus() {
			var status_baru = { text: this.input, like: false };
			this.status.push(status_baru);
			this.input = '';
		},
		likeStatus(id) {
			this.status[id].like = !this.status[id].like;
		}
	}
})