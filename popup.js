document.addEventListener("DOMContentLoaded", function() {
	// 获取弹框和内容部分
	const popup = document.getElementById("popup");
	const okButton = document.getElementById("ok-btn");

	// 禁用页面滚动
	function disableScroll() {
		document.body.classList.add("no-scroll");
	}

	// 恢复页面滚动
	function enableScroll() {
		document.body.classList.remove("no-scroll");
	}

	// 显示弹框
	popup.style.display = "flex"; // 弹框显示时，隐藏页面内容
	disableScroll(); // 禁止滚动

	// 点击 OK 按钮后，隐藏弹框并显示页面内容
	okButton.addEventListener("click", function() {
		popup.style.display = "none"; // 隐藏弹框
		enableScroll(); // 恢复页面滚动
	});
});