// 挂载vue
var vm = new Vue({
	el: ".container",
	data: {
		idCardZUrl: '',
		idCardFUrl: '',
	},
	methods: {
		// 调用上传图片接口
		updata(f, config) {
			this.$http.post('/index/shops_apply/uploadPic',
				f, config
			).then(function(res) {
				console.log(res.body)
			}, function(err) {
				console.log('请求失败处理' + err);
			});
		},
		// 打开图片上传
		uploadIdcardz: function() {
			this.$el.querySelector('#zInput').click()
		},
		uploadIdcardf: function() {
			this.$el.querySelector('#fInput').click()
		},
		// 将图片显示
		handleFilez: function(e) {
			let $target = e.target || e.srcElement;
			let file = $target.files[0];
			let formData = new FormData();
			formData.append('file', file);
			let config = {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
			this.updata(formData, config);
			var reader = new FileReader();
			reader.onload = (data) => {
				let res = data.target || data.srcElement
				this.idCardZUrl = res.result;
			}
			reader.readAsDataURL(file)
		},
		handleFilef: function(e) {
			let $target = e.target || e.srcElement;
			let file = $target.files[0];
			let formData = new FormData();
			formData.append('file', file);
			let config = {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
			this.updata(formData, config);
			var reader = new FileReader();
			reader.onload = (data) => {
				let res = data.target || data.srcElement
				this.idCardFUrl = res.result;
			}
			reader.readAsDataURL(file)//把图片转成base64位
		},
	},
	mounted() {},
})
