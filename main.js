var example = new Vue({
	el: "#app",
	methods: {
		clickFunc: function()
				{
					if (this.layout == 'grid') 
					{
						this.layout = 'list',
						this.status = false
					}
					else 
					{
						this.layout = 'grid',
						this.status = true
					}
				},
			ss: function(){
				console.log(this.status)
			}	
			},
	data: {
		layout: 'grid',
		status: true,
		items: [{
			"title": "Офис компании Google",
			"url": "http://google.ru",
			"descr":"Перейти на сайт компании Google",
			"image": {
				"small": "http://3.bp.blogspot.com/-eAsmRa6ohJw/UB4ov2zC_aI/AAAAAAAAAa0/olo_BDadIpA/s1600/Google-Hyderabad.jpg",
				"large": "https://good.co/blog/wp-content/uploads/2016/04/evo_Google-Zurich_30_supersize-500x500.jpg",
					}
				},
			{
				"title": "Офис компании Apple",
			"url": "http://apple.com",
			"descr":"Перейти на сайт компании Apple",
			"image": {
				"small": "https://i-cdn.phonearena.com/images/article/91254-image/The-spaceship-Apple-Park-campus-will-be-Apples-new-official-HQ-starting-this-April.jpg",
				"large": "https://cdn.lifehacker.ru/wp-content/uploads/2013/06/mr-25.jpg",
					}
			},
			{
			"title": "Офис компании Facebook",
			"url": "http://facebook.com",
			"descr":"Перейти на сайт компании Facebook",
			"image": {
				"small": "http://lamcdn.net/lookatme.ru/post-cover/oj-QCeBvKXejOGhaRc2vzg-default.png",
				"large": "http://i.obozrevatel.com/13/1704620/gallery/854959.jpg",
					}
			},
			{
				"title": "Офис компании Amazon",
			"url": "http://amazon.com",
			"descr":"Перейти на сайт компании Amazon",
			"image": {
				"small": "http://promokodozavr.ru/assets/img/shops_kodozavr/amazon.png",
				"large": "https://img.grouponcdn.com/coupons/dsh9cCJiSizPRWtZH7DRrg/amazon_com-500x500",
					}
			}]
	}
	
	
	

});