var dom= document.getElementById("clock");
var ctx=dom.getContext("2d");
var width=ctx.canvas.width;
var height=ctx.canvas.height;
var r = width / 2;
/*绘制时钟外边*/
function drowBackground(){
	ctx.translate(r,r);
	ctx.beginPath();
	ctx.lineWidth=10;
	ctx.arc(0,0,r -5, 0 ,2*Math.PI ,false);
	ctx.stroke();
	
	/*绘制时钟刻度数*/
	var hoursNum=[3,4,5,6,7,8,9,10,11,12,1,2];
	ctx.font="18px Arial";
	ctx.textAlign="center";
	ctx.textBaseline="middle";
	hoursNum.forEach(function(number,i){
		var rad = 2*Math.PI/12*i;
		var x = Math.cos(rad)*(r-30);
		var y = Math.sin(rad)*(r-30);
		ctx.fillText(number, x,y);
	});
	/*绘制60个点*/
	for( var i=0; i<60; i++){
		var rad=2*Math.PI/60 *i;
		var x = Math.cos(rad) *(r-18);
		var y =Math.sin(rad)*(r-18);
		ctx.beginPath();
		ctx.arc(x,y,2,0,2*Math.PI,false);
		if(i%5===0){
			ctx.fillStyle="#000";
		}else{
			ctx.fillStyle="#ccc";
		}
		ctx.fill();
		
		
	}
}

drowBackground();