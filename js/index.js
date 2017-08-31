$(document).ready(function() {
		$("#dowebok").fullpage({
			'verticalCentered': false,
			'anchors': ['page1', 'page2', 'page3', 'page4','page5'],
			'css3': true,
			'slidesColor': ['#F0F2F4', '#fff', '#fff', '#eeeff0','#fff'],
			'sectionsColor':['#fff','#fff','#fff','#f4f4f4','#f2f1f1'],
			'navigation': true,
			'navigationPosition': 'right',
			'navigationTooltips': ['回到顶部', '三步到账', '四大特色', '合作伙伴','联系我们'],
			
			'afterLoad': function(anchorLink, index){
				if(index == 2){
					$('#section2 .l1').animate({
						left: '0',
						opacity:'1'
					}, 300);
					$('#section2 .l2').animate({
						top: '0',
						opacity:'1'
					}, 300);
					$('#section2 .l3').animate({
						left: '900',
						opacity:'1'
					}, 300);
				}
				if(index == 4){
					
					for(var i = 1;i<11;i++){
						var str = '.delay'+i;
						$('#section4 ul').find(str).fadeIn(250*i)
					}
				}
				$('#infoMenu').toggleClass('whiteLinks', index ==4);
				
			},
			
			'onLeave': function(index, direction){
				if(index == 4){
					$('#section4 ul li').stop().fadeOut(0)
						
				}
				if(index==2){
					$('#section2 .l1').animate({
						left: '-100px',
						opacity:'0'
					}, 100);
					$('#section2 .l2').animate({
						top: '100px',
						opacity:'0'
					}, 100);
					$('#section2 .l3').animate({
						left: '1000',
						opacity:'0'
					}, 100);
				}
				if (index == 3 && direction == 'down'){
					$('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
				}
				else if(index == 3 && direction == 'up'){
					$('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
				}
				
				$('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
				$('#staticImg').toggleClass('moveDown', index == 3 && direction == 'down');	
			},
			
			afterRender: function(){
				$('#infoMenu').appendTo('body');
				
				$('#githubLink, .twitter-share-button').appendTo('body');
			}

		});
	});