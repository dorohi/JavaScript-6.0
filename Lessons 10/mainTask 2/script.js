class Options {
	constructor(height,	width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	
	//document.getElementById("myP").style.cssText = "background-color:pink;font-size:55px;border:2px dashed green;color:white;"
	printText (text){
		let div = document.createElement('div');

		div.textContent = text;
		div.style.cssText = `height:${this.height}px;background-color:${this.bg};width:${this.width}px;font-size:${this.fontSize};text-align:${this.textAlign};line-height:${this.height}px`;
		document.body.appendChild(div);
	}
}

let seyMyName = new Options(50, 400, 'yellow', 40, 'center');
seyMyName.printText('Дорогі Михайло Михайлович');