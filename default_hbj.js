function nijitama_peopleHide() {
	document.querySelectorAll('.nijitama_people').forEach(function(element) {
		element.style.display = 'none';
	});
}

function Loadview_img_tmb() {
	//view-img-tmb
	document.getElementById('tm_b').addEventListener('click', function() {
		document.getElementById('view-img-tmb').innerHTML = '';
		document.getElementById('view-img-cg').innerHTML = '';
		document.getElementById('view-img-other').innerHTML = '';
		document.getElementById('view-img-tms').innerHTML = '';
		const imagePaths = [
			'view/tm_b/tm_b0001.png',
			'view/tm_b/tm_b0002.png',
			'view/tm_b/tm_b0003.png',
			'view/tm_b/tm_b0004.png',
			'view/tm_b/tm_b0005.png',
			'view/tm_b/tm_b0006.png',
			'view/tm_b/tm_b0007.png',
			'view/tm_b/tm_b0008.png',
			'view/tm_b/tm_b0009.png',
			'view/tm_b/tm_b0010.png',
			'view/tm_b/tm_b0011.png',
			'view/tm_b/tm_b0012.png',
			'view/tm_b/tm_b0013.png',
			'view/tm_b/tm_b0014.png',
			'view/tm_b/tm_b0015.png',
			'view/tm_b/tm_b0016.png',
			'view/tm_b/tm_b0017.png',
			'view/tm_b/tm_b0018.png',
			'view/tm_b/tm_b0019.png',
			'view/tm_b/tm_b0020.png',
			'view/tm_b/tm_b0021.png',
			'view/tm_b/tm_b0022.png',
			'view/tm_b/tm_b0023.png',
			'view/tm_b/tm_b0024.png',
			'view/tm_b/tm_b0025.png',
			'view/tm_b/tm_b0026.png',
			'view/tm_b/tm_b0027.png',
			'view/tm_b/tm_b0028.png',
			'view/tm_b/tm_b0029.png',
			'view/tm_b/tm_b0030.png',
			'view/tm_b/tm_b0031.png',
			'view/tm_b/tm_b0032.png',
			'view/tm_b/tm_b0033.png',
			'view/tm_b/tm_b0034.png',
			'view/tm_b/tm_b0035.png',
			'view/tm_b/tm_b0036.png',
			'view/tm_b/tm_b0037.png',
			'view/tm_b/tm_b0038.png',
			'view/tm_b/tm_b0039.png',
			'view/tm_b/tm_b0040.png',
			'view/tm_b/tm_b0041.png',
			'view/tm_b/tm_b0042.png',
			'view/tm_b/tm_b0043.png',
			'view/tm_b/tm_b0044.png',
			'view/tm_b/tm_b0045.png',
			'view/tm_b/tm_b0046.png',
			'view/tm_b/tm_b0047.png',
			'view/tm_b/tm_b0048.png',
			'view/tm_b/tm_b0049.png',
			'view/tm_b/tm_b0050.png',
			'view/tm_b/tm_b0051.png',
			'view/tm_b/tm_b0052.png',
			'view/tm_b/tm_b0053.png',
			'view/tm_b/tm_b0054.png',
			'view/tm_b/tm_b0055.png',
			'view/tm_b/tm_b0056.png',
			'view/tm_b/tm_b0057.png',
			'view/tm_b/tm_b0058.png'
		];

		// 创建一个新的div容器来存放图片
		const newDiv = document.createElement('div');
		newDiv.className = 'nijitama-hbj';

		// 遍历图片路径数组，创建并添加图片元素到新的div中
		imagePaths.forEach(function(path) {
			const imgElement = document.createElement('img');
			imgElement.src = path;
			newDiv.appendChild(imgElement);
		});

		nijitama_peopleHide();

		// 将新创建的div添加到view-img-tmb中
		const viewImgDiv = document.getElementById('view-img-tmb');
		viewImgDiv.innerHTML = ''; // 清空之前的内容
		viewImgDiv.appendChild(newDiv);

		// 在view-img-tmb中创建并添加一个按钮
		const restoreButton = document.createElement('button');
		restoreButton.id = 'restore-btn';
		restoreButton.textContent = '返回';
		restoreButton.addEventListener('click', restorePage);
		viewImgDiv.appendChild(restoreButton);

		// 显示view-img-tmb
		viewImgDiv.style.display = 'flex';
	});

}


function Loadcg_loading_nion() {
	//view-img-cg
	document.getElementById('cg_loading_nion').addEventListener('click', function() {
		document.getElementById('view-img-tmb').innerHTML = '';
		document.getElementById('view-img-cg').innerHTML = '';
		document.getElementById('view-img-other').innerHTML = '';
		document.getElementById('view-img-tms').innerHTML = '';
		const imagePaths = [
			'view/cg_loading_nion/cg_loading_nion001.png',
			'view/cg_loading_nion/cg_loading_nion002.png',
			'view/cg_loading_nion/cg_loading_nion003.png',
			'view/cg_loading_nion/cg_loading_nion004.png',
			'view/cg_loading_nion/cg_loading_nion005.png',
			'view/cg_loading_nion/cg_loading_nion006.png',
			'view/cg_loading_nion/cg_loading_nion007.png',
			'view/cg_loading_nion/cg_loading_nion008.png',
		];

		// 创建一个新的div容器来存放图片
		const newDiv = document.createElement('div');
		newDiv.className = 'nijitama-hbj';

		// 遍历图片路径数组，创建并添加图片元素到新的div中
		imagePaths.forEach(function(path) {
			const imgElement = document.createElement('img');
			imgElement.src = path;
			newDiv.appendChild(imgElement);
		});

		nijitama_peopleHide()

		// 将新创建的div添加到view-img-cg中
		const viewImgDiv = document.getElementById('view-img-cg');
		viewImgDiv.innerHTML = ''; // 清空之前的内容
		viewImgDiv.appendChild(newDiv);

		// 在view-img-cg中创建并添加一个按钮
		const restoreButton = document.createElement('button');
		restoreButton.id = 'restore-btn';
		restoreButton.textContent = '返回';
		restoreButton.addEventListener('click', restorePage);
		viewImgDiv.appendChild(restoreButton);

		// 显示view-img-cg
		viewImgDiv.style.display = 'flex';
	});
}

//cg_loading_r
function Loadcg_loading_r() {
	document.getElementById('cg_loading_r').addEventListener('click', function() {
		document.getElementById('view-img-tmb').innerHTML = '';
		document.getElementById('view-img-cg').innerHTML = '';
		document.getElementById('view-img-other').innerHTML = '';
		document.getElementById('view-img-tms').innerHTML = '';
		const imagePaths = [
			'view/cg_loading_r/cg_loading_r001.png',
			'view/cg_loading_r/cg_loading_r002.png',
			'view/cg_loading_r/cg_loading_r003.png',
			'view/cg_loading_r/cg_loading_r004.png'
		];

		// 创建一个新的div容器来存放图片
		const newDiv = document.createElement('div');
		newDiv.className = 'nijitama-hbj';

		// 遍历图片路径数组，创建并添加图片元素到新的div中
		imagePaths.forEach(function(path) {
			const imgElement = document.createElement('img');
			imgElement.src = path;
			newDiv.appendChild(imgElement);
		});

		nijitama_peopleHide();

		// 将新创建的div添加到view-img-other中
		const viewImgDiv = document.getElementById('view-img-other');
		viewImgDiv.innerHTML = ''; // 清空之前的内容
		viewImgDiv.appendChild(newDiv);

		// 在view-img-other中创建并添加一个按钮
		const restoreButton = document.createElement('button');
		restoreButton.id = 'restore-btn';
		restoreButton.textContent = '返回';
		restoreButton.addEventListener('click', restorePage);
		viewImgDiv.appendChild(restoreButton);

		// 显示view-img-other
		viewImgDiv.style.display = 'flex';
	});
}

function Loadview_img_tms() {
	//view-img-tms
	document.getElementById('tm_s').addEventListener('click', function() {
		document.getElementById('view-img-tmb').innerHTML = '';
		document.getElementById('view-img-cg').innerHTML = '';
		document.getElementById('view-img-other').innerHTML = '';
		document.getElementById('view-img-tms').innerHTML = '';
		const imagePaths = [
			'view/tm_s/tm_s0001.png',
			'view/tm_s/tm_s0002.png',
			'view/tm_s/tm_s0003.png',
			'view/tm_s/tm_s0004.png',
			'view/tm_s/tm_s0005.png',
			'view/tm_s/tm_s0006.png',
			'view/tm_s/tm_s0007.png'
		];

		// 创建一个新的div容器来存放图片
		const newDiv = document.createElement('div');
		newDiv.className = 'nijitama-hbj';

		// 遍历图片路径数组，创建并添加图片元素到新的div中
		imagePaths.forEach(function(path) {
			const imgElement = document.createElement('img');
			imgElement.src = path;
			newDiv.appendChild(imgElement);
		});

		nijitama_peopleHide();

		// 将新创建的div添加到view-img-tmb中
		const viewImgDiv = document.getElementById('view-img-tms');
		viewImgDiv.innerHTML = ''; // 清空之前的内容
		viewImgDiv.appendChild(newDiv);

		// 在view-img-tmb中创建并添加一个按钮
		const restoreButton = document.createElement('button');
		restoreButton.id = 'restore-btn';
		restoreButton.textContent = '返回';
		restoreButton.addEventListener('click', restorePage);
		viewImgDiv.appendChild(restoreButton);

		// 显示view-img-tms
		viewImgDiv.style.display = 'flex';
	});

}