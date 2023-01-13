// console.log('hello');
(()=>{
	//classありバージョンを書くよ
	class accordion{
		//初期化
		constructor(obj){

			console.log('obj',obj.hookName);

			const $elm = document.querySelector(obj.hookName);
			const $trigger = $elm.getElementsByTagName(obj.tagN);

			const $triggerlen = $trigger.length;
			let index = 0;
			while(index < $triggerlen){
				$trigger[index].addEventListener('click',(e) => this.clickHandler (e));
				index++;
			}
		}
			//クリックされたら実行される処理
			clickHandler(e){
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

	const pontaAccordion = new Accordion({
		hookName:'#ponta-faq',
		tagName:'p'
	});
})();
