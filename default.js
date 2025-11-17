//地魂男儿
const names = ["awn", "awt", "bic", "bin", "biz", "bun", "ckg", "ckz", "ecg", "ecz", "har", "hit", "hiz", "hyu", "iga", "iki", "ina",
	"iwm",
	"iyo", "izu", "kag", "kai", "kaw", "kaz", "kii", "mik", "mus", "nag", "not", "oki", "osu", "oum", "owa", "sag",
	"san", "sim", "sin", "smt", "smu", "suo", "sur", "taj", "tnb", "tos", "tou", "wak", "ymt", "yzm"
];
//基础npc
const names_npc = ["n000", "n001", "n002", "n003", "n004", "n005", "n006", "n007", "n008", "n009", "n010", "n011"];
//妖兽
const names_a = ["a000", "a001", "a002", "a003", "a005", "a006", "a007", "a011", "a012", "a015", "a016", "a018", "a019"];
//剧情人物
const names_s = ["s000", "s001", "s002", "s003", "s004", "s005", "s006", "s007", "s008", "s008_kid", "s011", "s012",
	"s013", "s014", "s015"
];
//汇总
const names_all = names.concat(names_npc, names_a, names_s);

//角色概览-地魂男儿
const Character_overview = names.map(name => `character/${name}/f_${name}.png`);
//角色概览-基础NPC
const Character_overview_npc = names_npc.map(name => `character/${name}/f_${name}.png`);
//角色概览-妖兽
const Character_overview_a = names_a.map(name => `character/${name}/f_${name}.png`);
//角色概览-剧情人物
const Character_overview_s = names_s.map(name => `character/${name}/f_${name}.png`);
//角色技能图
const Character_skill = names_all.map(name => `character/${name}/c_${name}.png`);
//角色表情图
const Character_def_face = names_all.flatMap(name => {
	return Array.from({
			length: 21
		}, (_, number) =>
		`character/${name}/s_${name}_def_face_${String(number).padStart(2, '0')}.png`
	);
});
//默认-站立
const Character_def_body = names_all.map(name => `character/${name}/s_${name}_def_body.png`);
//默认-战斗
const Character_b_def_body = names_all.map(name => `character/${name}/b_${name}_def_body.png`);
//默认-战损
const Character_b_def_dbody = names_all.map(name => `character/${name}/b_${name}_def_dbody.png`);
//春夏服-站立
const Character_ss_body = names_all.map(name => `character/${name}/s_${name}_ss_body.png`);
//春夏服-战斗
const Character_b_ss_body = names_all.map(name => `character/${name}/b_${name}_ss_body.png`);
//春夏服-战损
const Character_b_ss_dbody = names_all.map(name => `character/${name}/b_${name}_ss_dbody.png`);
//秋冬服-站立
const Character_aw_body = names_all.map(name => `character/${name}/s_${name}_aw_body.png`);
//秋冬服-战斗
const Character_b_aw_body = names_all.map(name => `character/${name}/b_${name}_aw_body.png`);
//秋冬服-战损
const Character_b_aw_dbody = names_all.map(name => `character/${name}/b_${name}_aw_dbody.png`);
//相扑
const Character_sumo = names_all.map(name => `character/${name}/s_${name}_sumo_body.png`);
//洗澡
const Character_bath = names_all.map(name => `character/${name}/s_${name}_bath_body.png`);
//新年
const Character_ny = names_all.map(name => `character/${name}/s_${name}_ny_body.png`);
//赞助
const Character_patronag = names_all.map(name => `character/${name}/s_${name}_pa_body.png`);
//泳装
const Character_swim = names_all.map(name => `character/${name}/s_${name}_swim_body.png`);
//圣诞节
const Character_christmas = names_all.map(name => `character/${name}/s_${name}_xmas_body.png`);
//情人节
const Character_ev = names_all.map(name => `character/${name}/s_${name}_ev_body.png`);
//职业装
const Character_skin1 = names_all.map(name => `character/${name}/s_${name}_skin1_body.png`);
//浴室
const Character_y_bath = names_all.map(name => `character/${name}/y_${name}_body.png`);
// 加载角色概览图
function LoadOverview() {
	// 获取展示角色概览图的父容器
	const overviewContainer = document.getElementById('character-overview');
	const overview_npcContainer = document.getElementById('character-overview-npc');
	const overview_aContainer = document.getElementById('character-overview-a');
	const overview_sContainer = document.getElementById('character-overview-s');

	// 遍历 names(地魂男儿) 数组中的每个角色
	names.forEach((name, index) => {
		// 创建新的 div 元素，id 为角色的名字
		const characterDiv = document.createElement('div');
		characterDiv.id = name;
		characterDiv.className = 'chararcter-all';

		// 创建 img 元素，src 为对应角色的概览图路径
		const characterImage = document.createElement('img');
		characterImage.src = Character_overview[index];

		// 设置图片加载失败时的处理
		characterImage.onerror = () => {
			//characterDiv.style.display = 'none'; // 隐藏包含图片的 div
		};

		// 为图片添加点击事件，触发 select 方法
		characterImage.onclick = () => select(name);

		// 将图片添加到 div 中
		characterDiv.appendChild(characterImage);

		// 将创建的 div 添加到容器中
		overviewContainer.appendChild(characterDiv);
	});
	// 遍历 names_npc(基础npc) 数组中的每个角色
	names_npc.forEach((name, index) => {
		// 创建新的 div 元素，id 为角色的名字
		const characterDiv = document.createElement('div');
		characterDiv.id = name;
		characterDiv.className = 'chararcter-all-npc';

		// 创建 img 元素，src 为对应角色的概览图路径
		const characterImage = document.createElement('img');
		characterImage.src = Character_overview_npc[index];

		// 设置图片加载失败时的处理
		characterImage.onerror = () => {
			//characterDiv.style.display = 'none'; // 隐藏包含图片的 div
			//用对应角色的第一个表情代替
			characterImage.src = Character_def_face[names_all.indexOf(name) * 21 + 0];
		};

		// 为图片添加点击事件，触发 select 方法
		characterImage.onclick = () => select(name);

		// 将图片添加到 div 中
		characterDiv.appendChild(characterImage);

		// 将创建的 div 添加到容器中
		overview_npcContainer.appendChild(characterDiv);
	});
	// 遍历 names_a(妖兽) 数组中的每个角色
	names_a.forEach((name, index) => {
		// 创建新的 div 元素，id 为角色的名字
		const characterDiv = document.createElement('div');
		characterDiv.id = name;
		characterDiv.className = 'chararcter-all-a';

		// 创建 img 元素，src 为对应角色的概览图路径
		const characterImage = document.createElement('img');
		characterImage.src = Character_overview_a[index];

		// 设置图片加载失败时的处理
		characterImage.onerror = () => {
			//characterDiv.style.display = 'none'; // 隐藏包含图片的 div
			//用对应角色的第一个表情代替
			characterImage.src = Character_def_face[names_all.indexOf(name) * 21 + 0];
		};

		// 为图片添加点击事件，触发 select 方法
		characterImage.onclick = () => select(name);

		// 将图片添加到 div 中
		characterDiv.appendChild(characterImage);

		// 将创建的 div 添加到容器中
		overview_aContainer.appendChild(characterDiv);
	});
	// 遍历 names_s(剧情人物) 数组中的每个角色
	names_s.forEach((name, index) => {
		// 创建新的 div 元素，id 为角色的名字
		const characterDiv = document.createElement('div');
		characterDiv.id = name;
		characterDiv.className = 'chararcter-all-s';

		// 创建 img 元素，src 为对应角色的概览图路径
		const characterImage = document.createElement('img');
		characterImage.src = Character_overview_s[index];

		// 设置图片加载失败时的处理
		characterImage.onerror = () => {
			//characterDiv.style.display = 'none'; // 隐藏包含图片的 div
			//用对应角色的第一个表情代替
			characterImage.src = Character_def_face[names_all.indexOf(name) * 21 + 0];
		};

		// 为图片添加点击事件，触发 select 方法
		characterImage.onclick = () => select(name);

		// 将图片添加到 div 中
		characterDiv.appendChild(characterImage);

		// 将创建的 div 添加到容器中
		overview_sContainer.appendChild(characterDiv);
	});
}

// 当点击图片时，将该图插入到 #character-avatar 中，并插入对应的技能图到 #character-skill
function select(name) {
	// 清空 avatar 和 skill 和 def-face 等容器
	// 获取对应的图片路径
	// 创建新的 img 元素，设置 src 为点击图片的路径
	// 将图片插入到对应容器
	let fallbackAttempted = false; // 标志位，确保备用图像只尝试一次
	
	const avatarContainer = document.getElementById('character-avatar'); // 角色头像容器
	avatarContainer.innerHTML = ''; // 清空之前的内容
	
	let characterImageSrc;
	if (names.includes(name)) {
	    // 地魂男儿
	    characterImageSrc = Character_overview[names.indexOf(name)];
	} else if (names_npc.includes(name)) {
	    // NPC
	    characterImageSrc = Character_overview_npc[names_npc.indexOf(name)];
	} else if (names_a.includes(name)) {
	    // 妖兽
	    characterImageSrc = Character_overview_a[names_a.indexOf(name)];
	} else if (names_s.includes(name)) {
	    // 妖兽
	    characterImageSrc = Character_overview_s[names_s.indexOf(name)];
	}
	
	const avatarImage = document.createElement('img'); // 创建图片元素
	avatarImage.src = characterImageSrc; // 尝试加载角色头像
	
	avatarImage.onerror = function() {
	    if (!fallbackAttempted) { // 检查是否已经尝试过备用图像
	        avatarImage.src = Character_def_face[names_all.indexOf(name) * 21 + 0]; // 使用默认表情图像
	        console.log("该角色不存在默认头像，用第一张表情图代替");
	        fallbackAttempted = true; // 标记备用图像已尝试
	    }
	};
	
	avatarContainer.appendChild(avatarImage);
	
	// 处理表情图容器
	const defFaceContainer = document.getElementById('character-def-face'); // 表情图容器
	defFaceContainer.innerHTML = ''; // 清空之前的表情图

	
	// 防止缓存，添加一个随机查询参数，确保每次加载时强制重新请求
	const randomTimestamp = new Date().getTime();  // 获取当前时间戳，确保唯一性
	
	const skillContainer = document.getElementById('character-skill'); //技能
	skillContainer.innerHTML = '';
	const skillImageSrc = Character_skill[names_all.indexOf(name)];
	const skillImage = document.createElement('img'); //技能
	skillImage.src = skillImageSrc;
	skillImage.src = `${skillImageSrc}?t=${randomTimestamp}`; // 添加时间戳以避免缓存
	skillImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    skillImage.src = `https://tukitama.com/tamacolle/resources/c_${name}.png?t=${randomTimestamp}`; // 防止缓存
	    skillImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    skillImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        skillImage.src = 'error/error_skill.png';
	        skillImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	skillContainer.appendChild(skillImage);
	
	const defaultbodyContainer = document.getElementById('character-default-body'); //默认1
	defaultbodyContainer.innerHTML = ''; //默认1
	const defaultbodyImageSrc = Character_def_body[names_all.indexOf(name)]; //默认1
	const defaultbodyImage = document.createElement('img'); //默认1
	defaultbodyImage.src = defaultbodyImageSrc;
	defaultbodyImage.src = `${defaultbodyImageSrc}?t=${randomTimestamp}`; // 添加时间戳以避免缓存
	defaultbodyImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    defaultbodyImage.src = `https://tukitama.com/tamacolle/resources/s_${name}_def_body.png?t=${randomTimestamp}`;
	    defaultbodyImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    defaultbodyImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        defaultbodyImage.src = 'error/error_defult_body.png';
	        defaultbodyImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	defaultbodyContainer.appendChild(defaultbodyImage); //默认1



	const defaultbodyfightContainer = document.getElementById('character-default-body-fight'); //默认-战斗2
	defaultbodyfightContainer.innerHTML = ''; //默认-战斗2
	const defaultbodyfightImageSrc = Character_b_def_body[names_all.indexOf(name)]; //默认-战斗2
	const defaultbodyfightImage = document.createElement('img'); //默认-战斗2
	defaultbodyfightImage.src = defaultbodyfightImageSrc;
	defaultbodyfightImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    defaultbodyfightImage.src = `https://tukitama.com/tamacolle/resources/b_${name}_def_body.png?t=${randomTimestamp}`;
	    defaultbodyfightImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    defaultbodyfightImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        defaultbodyfightImage.src = 'error/error_defult_body_fight.png';
	        defaultbodyfightImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	defaultbodyfightContainer.appendChild(defaultbodyfightImage); //默认-战斗2


	const defaultbodyfightinjuredContainer = document.getElementById('character-default-body-fight-injured'); //默认-战损3
	defaultbodyfightinjuredContainer.innerHTML = ''; //默认-战损3
	const defaultbodyfightinjuredImageSrc = Character_b_def_dbody[names_all.indexOf(name)]; //默认-战损3
	const defaultbodyfightinjuredImage = document.createElement('img'); //默认-战损3
	defaultbodyfightinjuredImage.src = defaultbodyfightinjuredImageSrc;
	defaultbodyfightinjuredImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    defaultbodyfightinjuredImage.src = `https://tukitama.com/tamacolle/resources/b_${name}_def_dbody.png?t=${randomTimestamp}`;
	    defaultbodyfightinjuredImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    defaultbodyfightinjuredImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        defaultbodyfightinjuredImage.src = 'error/error_defult_body_fight_injured.png';
	        defaultbodyfightinjuredImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	defaultbodyfightinjuredContainer.appendChild(defaultbodyfightinjuredImage); //默认-战损3


	const character_ss_bodyContainer = document.getElementById('character-ss-body'); //春夏服-站立4
	character_ss_bodyContainer.innerHTML = ''; //春夏服-站立4
	const character_ss_bodyImageSrc = Character_ss_body[names_all.indexOf(name)]; //春夏服-站立4
	const character_ss_bodyImage = document.createElement('img'); //春夏服-站立4
	character_ss_bodyImage.src = character_ss_bodyImageSrc;
	character_ss_bodyImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    character_ss_bodyImage.src = `https://tukitama.com/tamacolle/resources/s_${name}_ss_body.png?t=${randomTimestamp}`;
	    character_ss_bodyImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    character_ss_bodyImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        character_ss_bodyImage.src = 'error/error_ss_body.png';
	        character_ss_bodyImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	character_ss_bodyContainer.appendChild(character_ss_bodyImage); //春夏服-站立4


	const character_b_ss_bodyContainer = document.getElementById('character-ss-body-fight'); //春夏服-战斗5
	character_b_ss_bodyContainer.innerHTML = ''; //春夏服-战斗5
	const character_b_ss_bodyImageSrc = Character_b_ss_body[names_all.indexOf(name)]; //春夏服-战斗5
	const character_b_ss_bodyImage = document.createElement('img'); //春夏服-战斗5
	character_b_ss_bodyImage.src = character_b_ss_bodyImageSrc;
	character_b_ss_bodyImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    character_b_ss_bodyImage.src = `https://tukitama.com/tamacolle/resources/b_${name}_ss_body.png?t=${randomTimestamp}`;
	    character_b_ss_bodyImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    character_b_ss_bodyImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        character_b_ss_bodyImage.src = 'error/error_ss_body_fight.png';
	        character_b_ss_bodyImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	character_b_ss_bodyContainer.appendChild(character_b_ss_bodyImage); //春夏服-战斗5


	const character_b_ss_dbodyContainer = document.getElementById('character-ss-body-fight-injured'); //春夏服-战损6
	character_b_ss_dbodyContainer.innerHTML = ''; //春夏服-战损6
	const character_b_ss_dbodyImageSrc = Character_b_ss_dbody[names_all.indexOf(name)]; //春夏服-战损6
	const character_b_ss_dbodyImage = document.createElement('img'); //春夏服-战损6
	character_b_ss_dbodyImage.src = character_b_ss_dbodyImageSrc;
	character_b_ss_dbodyImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    character_b_ss_dbodyImage.src = `https://tukitama.com/tamacolle/resources/b_${name}_ss_dbody.png?t=${randomTimestamp}`;
	    character_b_ss_dbodyImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    character_b_ss_dbodyImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        character_b_ss_dbodyImage.src = 'error/error_ss_body_fight_injured.png';
	        character_b_ss_dbodyImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	character_b_ss_dbodyContainer.appendChild(character_b_ss_dbodyImage); //春夏服-战损6


	const character_aw_bodyContainer = document.getElementById('character-aw-body'); //秋冬服-站立7
	character_aw_bodyContainer.innerHTML = ''; //秋冬服-站立7
	const character_aw_bodyImageSrc = Character_aw_body[names_all.indexOf(name)]; //秋冬服-站立7
	const character_aw_bodyImage = document.createElement('img'); //秋冬服-站立7
	character_aw_bodyImage.src = character_aw_bodyImageSrc;
	character_aw_bodyImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    character_aw_bodyImage.src = `https://tukitama.com/tamacolle/resources/s_${name}_aw_body.png?t=${randomTimestamp}`;
	    character_aw_bodyImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    character_aw_bodyImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        character_aw_bodyImage.src = 'error/error_aw_body.png';
	        character_aw_bodyImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	character_aw_bodyContainer.appendChild(character_aw_bodyImage); //秋冬服-站立7


	const character_b_aw_bodyContainer = document.getElementById('character-aw-body-fight'); //秋冬服-战斗8
	character_b_aw_bodyContainer.innerHTML = ''; //秋冬服-战斗8
	const character_b_aw_bodyImageSrc = Character_b_aw_body[names_all.indexOf(name)]; //秋冬服-战斗8
	const character_b_aw_bodyImage = document.createElement('img'); //秋冬服-战斗8
	character_b_aw_bodyImage.src = character_b_aw_bodyImageSrc;
	character_b_aw_bodyImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    character_b_aw_bodyImage.src = `https://tukitama.com/tamacolle/resources/b_${name}_aw_body.png?t=${randomTimestamp}`;
	    character_b_aw_bodyImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    character_b_aw_bodyImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        character_b_aw_bodyImage.src = 'error/error_aw_body_fight.png';
	        character_b_aw_bodyImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	character_b_aw_bodyContainer.appendChild(character_b_aw_bodyImage); //秋冬服-战斗8


	const character_b_aw_dbodyContainer = document.getElementById('character-aw-body-fight-injured'); //秋冬服-战损9
	character_b_aw_dbodyContainer.innerHTML = ''; //秋冬服-战损9
	const character_b_aw_dbodyImageSrc = Character_b_aw_dbody[names_all.indexOf(name)]; //秋冬服-战损9
	const character_b_aw_dbodyImage = document.createElement('img'); //秋冬服-战损9
	character_b_aw_dbodyImage.src = character_b_aw_dbodyImageSrc;
	character_b_aw_dbodyImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    character_b_aw_dbodyImage.src = `https://tukitama.com/tamacolle/resources/b_${name}_aw_dbody.png?t=${randomTimestamp}`;
	    character_b_aw_dbodyImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    character_b_aw_dbodyImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        character_b_aw_dbodyImage.src = 'error/error_aw_body_fight_injured.png';
	        character_b_aw_dbodyImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	character_b_aw_dbodyContainer.appendChild(character_b_aw_dbodyImage); //秋冬服-战损9


	const character_sumoContainer = document.getElementById('character-sumo'); //相扑10
	character_sumoContainer.innerHTML = ''; //相扑10
	const character_sumoImageSrc = Character_sumo[names_all.indexOf(name)]; //相扑10
	const character_sumoImage = document.createElement('img'); //相扑10
	character_sumoImage.src = character_sumoImageSrc;
	character_sumoImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    character_sumoImage.src = `https://tukitama.com/tamacolle/resources/s_${name}_sumo_body.png?t=${randomTimestamp}`;
	    character_sumoImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    character_sumoImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        character_sumoImage.src = 'error/error_sumo.png';
	        character_sumoImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	character_sumoContainer.appendChild(character_sumoImage); //相扑10


	const bathContainer = document.getElementById('character-bath'); //洗澡11
	bathContainer.innerHTML = ''; //洗澡11
	const bathImageSrc = Character_bath[names_all.indexOf(name)]; //洗澡11
	const bathImage = document.createElement('img'); //洗澡11
	bathImage.src = bathImageSrc;
	bathImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    bathImage.src = `https://tukitama.com/tamacolle/resources/s_${name}_bath_body.png?t=${randomTimestamp}`;
	    bathImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    bathImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        bathImage.src = 'error/error_bath.png';
	        bathImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	bathContainer.appendChild(bathImage); //洗澡11


	const character_nyContainer = document.getElementById('character-ny'); //新年12
	character_nyContainer.innerHTML = ''; //新年12
	const character_nyImageSrc = Character_ny[names_all.indexOf(name)]; //新年12
	const character_nyImage = document.createElement('img'); //新年12
	character_nyImage.src = character_nyImageSrc;
	character_nyImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    character_nyImage.src = `https://tukitama.com/tamacolle/resources/s_${name}_ny_body.png?t=${randomTimestamp}`;
	    character_nyImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    character_nyImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        character_nyImage.src = 'error/error_ny.png';
	        character_nyImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	character_nyContainer.appendChild(character_nyImage); //新年12


	const partronagContainer = document.getElementById('character-patronag'); //赞助13
	partronagContainer.innerHTML = ''; //赞助13
	const partronagImageSrc = Character_patronag[names_all.indexOf(name)]; //赞助13
	const partronagImage = document.createElement('img'); //赞助13
	partronagImage.src = partronagImageSrc;
	partronagImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    partronagImage.src = `https://tukitama.com/tamacolle/resources/s_${name}_pa_body.png?t=${randomTimestamp}`;
	    partronagImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    partronagImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        partronagImage.src = 'error/error_pa.png';
	        partronagImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	partronagContainer.appendChild(partronagImage); //赞助13


	const swimContainer = document.getElementById('character-swim'); //泳装14
	swimContainer.innerHTML = ''; //泳装14
	const swimImageSrc = Character_swim[names_all.indexOf(name)]; //泳装14
	const swimImage = document.createElement('img'); //泳装14
	swimImage.src = swimImageSrc;
	swimImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    swimImage.src = `https://tukitama.com/tamacolle/resources/s_${name}_swim_body.png?t=${randomTimestamp}`;
	    swimImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    swimImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        swimImage.src = 'error/error_swim.png';
	        swimImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	swimContainer.appendChild(swimImage); //泳装14


	const christmasContainer = document.getElementById('character-christmas'); //圣诞节15
	christmasContainer.innerHTML = ''; //圣诞节15
	const christmasImageSrc = Character_christmas[names_all.indexOf(name)]; //圣诞节15
	const christmasImage = document.createElement('img'); //圣诞节15
	christmasImage.src = christmasImageSrc;
	christmasImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    christmasImage.src = `https://tukitama.com/tamacolle/resources/s_${name}_xmas_body.png?t=${randomTimestamp}`;
	    christmasImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    christmasImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        christmasImage.src = 'error/error_xmas.png';
	        christmasImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	christmasContainer.appendChild(christmasImage); //圣诞节15


	const evContainer = document.getElementById('character-ev'); //情人节16
	evContainer.innerHTML = ''; //情人节16
	const evImageSrc = Character_ev[names_all.indexOf(name)]; //情人节16
	const evImage = document.createElement('img'); //情人节16
	evImage.src = evImageSrc;
	evImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    evImage.src = `https://tukitama.com/tamacolle/resources/s_${name}_ev_body.png?t=${randomTimestamp}`;
	    evImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    evImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        evImage.src = 'error/error_ev.png';
	        evImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	evContainer.appendChild(evImage); //情人节16


	const skin1Container = document.getElementById('character-skin1'); //职业装17
	skin1Container.innerHTML = ''; //职业装17
	const skin1ImageSrc = Character_skin1[names_all.indexOf(name)]; //职业装17
	const skin1Image = document.createElement('img'); //职业装17
	skin1Image.src = skin1ImageSrc;
	skin1Image.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    skin1Image.src = `https://tukitama.com/tamacolle/resources/s_${name}_skin1_body.png?t=${randomTimestamp}`;
	    skin1Image.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    skin1Image.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        skin1Image.src = 'error/error_skin1_body.png';
	        skin1Image.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	skin1Container.appendChild(skin1Image); //职业装17


	const character_y_bathContainer = document.getElementById('character-y-bath'); //浴室18
	character_y_bathContainer.innerHTML = ''; //浴室18
	const character_y_bathImageSrc = Character_y_bath[names_all.indexOf(name)]; //浴室18
	const character_y_bathImage = document.createElement('img'); //浴室18
	character_y_bathImage.src = character_y_bathImageSrc;
	character_y_bathImage.onerror = function() {
	    // 如果原图加载失败，尝试使用新的 URL 格式
	    character_y_bathImage.src = `https://tukitama.com/tamacolle/resources/y_${name}_body.png?t=${randomTimestamp}`;
	    character_y_bathImage.style.border = '5px dashed red'; // 设置为红色虚线边框
	    // 重新设置 onerror，处理新的 URL 如果也失败
	    character_y_bathImage.onerror = function() {
	        // 如果新的 URL 也加载失败，设置为默认错误图像
	        character_y_bathImage.src = 'error/error_y_body.png';
	        character_y_bathImage.style.border = '1px dashed white'; // 默认错误图像的边框
	    };
	};
	character_y_bathContainer.appendChild(character_y_bathImage); //浴室18


	// 创建用于覆盖的 back.png 图片
	const backImage = document.createElement('img');
	backImage.src = 'error/back.png';
	backImage.className = 'back-overlay';
	backImage.onerror = function() {
		backImage.style.display = 'none'; // 如果 back.png 加载失败，隐藏它
	};

	// 将覆盖图片和头像图片一起插入到 avatar 容器
	avatarContainer.appendChild(avatarImage);
	avatarContainer.appendChild(backImage);


	// 获取并插入对应的表情图
	for (let number = 0; number < 21; number++) {
		const faceDiv = document.createElement('div'); // 创建容器 div
		const faceImage = document.createElement('img');
		faceImage.src = Character_def_face[names_all.indexOf(name) * 21 + number];
		// 如果表情图加载失败，隐藏对应的 div
		faceImage.onerror = function() {
			faceDiv.style.display = 'none'; // 隐藏包含表情图的 div
		};

		// 将 faceImage 添加到 faceDiv 中，然后再添加到 defFaceContainer
		faceDiv.appendChild(faceImage);
		defFaceContainer.appendChild(faceDiv);
	}

	// 隐藏角色概览容器
	document.getElementById('character-overview').style.display = 'none';
	document.getElementById('nijitama-character').style.display = 'none';
	document.getElementById('nijitama-npc').style.display = 'none';
	document.getElementById('character-overview-npc').style.display = 'none';
	document.getElementById('nijitama-a').style.display = 'none';
	document.getElementById('character-overview-a').style.display = 'none';
	document.getElementById('nijitama-s').style.display = 'none';
	document.getElementById('character-overview-s').style.display = 'none';
	document.getElementById('nijitama-view').style.display = 'none';
	document.getElementById('view-all').style.display = 'none';

	// 为 avatarImage 添加点击事件，点击时恢复页面初始状态
	avatarImage.onclick = function() {
		restorePage();
	};
}



// 恢复页面初始状态
function restorePage() {
	// 清空 avatar 和 skill 容器
	document.getElementById('character-avatar').innerHTML = '';
	document.getElementById('character-skill').innerHTML = '';
	document.getElementById('character-def-face').innerHTML = '';
	document.getElementById('character-default-body').innerHTML = ''; //默认1
	document.getElementById('character-default-body-fight').innerHTML = ''; //默认-战斗2
	document.getElementById('character-default-body-fight-injured').innerHTML = ''; //默认-战损3
	document.getElementById('character-ss-body').innerHTML = ''; //春夏服-站立4
	document.getElementById('character-ss-body-fight').innerHTML = ''; //春夏服-战斗5
	document.getElementById('character-ss-body-fight-injured').innerHTML = ''; //春夏服-战损6
	document.getElementById('character-aw-body').innerHTML = ''; //秋冬服-站立7
	document.getElementById('character-aw-body-fight').innerHTML = ''; //秋冬服-战斗8
	document.getElementById('character-aw-body-fight-injured').innerHTML = ''; //秋冬服-战损9
	document.getElementById('character-sumo').innerHTML = ''; //相扑10
	document.getElementById('character-bath').innerHTML = ''; //洗澡11
	document.getElementById('character-ny').innerHTML = ''; //新年12
	document.getElementById('character-patronag').innerHTML = ''; //赞助13
	document.getElementById('character-swim').innerHTML = ''; //泳装14
	document.getElementById('character-christmas').innerHTML = ''; //圣诞节15
	document.getElementById('character-ev').innerHTML = ''; //情人节16
	document.getElementById('character-skin1').innerHTML = ''; //职业装(特殊)17
	document.getElementById('character-y-bath').innerHTML = ''; //浴室18
	document.getElementById('view-img-tmb').innerHTML = ''; //魂守景趣
	document.getElementById('view-img-cg').innerHTML = ''; //加载图
	document.getElementById('view-img-other').innerHTML = ''; //其他
	document.getElementById('view-img-tms').innerHTML = ''; //小魂守

	// 显示角色概览容器
	document.getElementById('character-overview').style.display = 'flex';
	document.getElementById('nijitama-character').style.display = 'flex';
	document.getElementById('nijitama-npc').style.display = 'flex';
	document.getElementById('character-overview-npc').style.display = 'flex';
	document.getElementById('nijitama-a').style.display = 'flex';
	document.getElementById('character-overview-a').style.display = 'flex';
	document.getElementById('nijitama-s').style.display = 'flex';
	document.getElementById('character-overview-s').style.display = 'flex';
	document.getElementById('nijitama-view').style.display = 'flex';
	document.getElementById('view-all').style.display = 'flex';

	document.querySelectorAll('.nijitama_people').forEach(function(element) {
		element.style.display = 'flex';
	});

}

// 页面加载完成后调用 LoadOverview 方法
//window.onload = LoadOverview;

// 确保在页面加载完成后执行代码
window.onload = function() {
	//加载全部角色头像概览图
	LoadOverview();
	Loadcg_loading_nion();
	Loadcg_loading_r();
	Loadview_img_tmb();
	Loadview_img_tms();

	//让表情图区域鼠标滚轮能控制左右滑动
	// 获取 character-def-face 容器元素
	const defFaceContainer = document.getElementById('character-def-face');

	// 如果 defFaceContainer 存在，绑定事件
	if (defFaceContainer) {
		// 当鼠标进入 character-def-face 容器时
		defFaceContainer.addEventListener('mouseenter', function() {
			// 改变滚动行为，监听水平滚动
			defFaceContainer.addEventListener('wheel', handleHorizontalScroll);
		});

		// 当鼠标离开 character-def-face 容器时
		defFaceContainer.addEventListener('mouseleave', function() {
			// 恢复垂直滚动行为
			defFaceContainer.removeEventListener('wheel', handleHorizontalScroll);
		});
	} else {
		console.error('#character-def-face 元素未找到');
	}

	// 滚轮事件的处理函数，控制左右滚动
	function handleHorizontalScroll(event) {
		// 阻止默认的垂直滚动行为
		event.preventDefault();

		// 根据滚轮的方向设置水平滚动
		defFaceContainer.scrollLeft += event.deltaY; // 使用 deltaY 来控制 scrollLeft
	}
};