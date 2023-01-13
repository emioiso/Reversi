// console.log('hello');
(()=>{
	const $elm = document.querySelector('#js-accordion');
	const $trigger = $elm.getElementsByTagName('a');

	const $triggerlen = $trigger.length;
	let index = 0;
	while(index < $triggerlen){
		$trigger[index].addEventListener('click',(e) => clickHandler (e));
		index++;
	}

	//クリックされたら実行される処理
	const clickHandler = (e) =>{
		e.preventDefault();
		// console.log('clicked')
	const $target = e.currentTarget;
	const $content = $target.nextElementSibling;
		if($content.style.display === 'block'){
			$content.style.display = 'none';
		} else {
			$content.style.display = 'block';
		}
	}
}
)();
