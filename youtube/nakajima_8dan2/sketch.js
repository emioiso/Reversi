class GBOARD{
	constructor(parent){
	  this.parent = document.getElementById(parent);

  //  64マスの情報を保持する配列
	  this.sq = new Array(64);

	  for(let i = 0; i < 64; i++){
		let e = document.createElement('div');
		e.className = "sq";

		let x = (i % 8) * 29 + 12;
		let y = Math.floor(i / 8) * 29 + 12;
		e.style.left = x + "px";
		e.style.top  = y + "px";

		let d = document.createElement('div');
		d.className = "disc";
		d.style.display = "none";
		e.appendChild( d );
		e.disc = d;

		this.parent.appendChild( e );
		this.sq[i] = e;
	  }
	}
  //   (x,y)のマスに石を置く
  //   d = 0; 石を消す
  //   d = 1; 黒石を置く
  //   d = 2; 白石を置く
	setDisc(x,y,d){
	  let p = y * 8 + x;
	  this.sq[p].disc.style.display = d == 0 ? "none" : "block";

	  if(d > 0){
		this.sq[p].disc.style.backgroundColor = d == 1 ? "black" : "white";
		}
	}
  }
  let gBoard = null;

  function setup()
  {
	noLoop();
	gBoard = new GBOARD( "board" );
	gBoard.setDisc(3,3,2);//白
	gBoard.setDisc(4,3,1);//黒
	gBoard.setDisc(3,4,1);//黒
	gBoard.setDisc(4,4,2);//白
  }

  function draw() {
  }

