var carousel = (function()
{
	var container, running, carouselID;
	var styles = [], images = [];

	function createStyling(){
		var left = -images[0].getBoundingClientRect().width;
		var factor = -left;

		for(var i = 0; i < images.length; i++, left += factor){
			var z = (i == 0 ? 0 : 1);
			styles.push({'left' : left, 'top' : 0, 'zIndex' : z});
		}
	}

	function createImages(id){
		var temp = document.querySelectorAll('#' + id + ' > img');
		var height = temp[0].getBoundingClientRect().height;
		if(height != 0)
			container.style.height = height + 'px';

		for(var i = 1; i < temp.length; i++)
		{
			images.push(temp[i]);
		}
	}

	function applyStyling(){
		for(var i = 0; i < styles.length; i++){
			images[i].style.left = styles[i].left + 'px';
			images[i].style.top = styles[i].top + 'px';
			images[i].style.zIndex = styles[i].zIndex;
		}
	}

	function oneStepLeft(){
		images.push(images.shift());
		applyStyling();
	}

	function runCarousel(){
		if(!running){
			carouselID = setInterval(oneStepLeft, 8000);
			running = true;
		}
	}

	function init(obj){
		running = false;
		container = document.getElementById(obj.id);
		createImages(obj.id);
		createStyling();
		applyStyling();
		runCarousel();
	}

	return {
		init : init,
	};
})();