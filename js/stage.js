$(function(){
/*初始化THREE*/
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,10000);
	camera.position.set(0,800,5000);
	camera.lookAt(new THREE.Vector3(0,0,0));
	var renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
	renderer.setSize(window.innerWidth,window.innerHeight);
	renderer.shadowMapEnabled = true;
	window.addEventListener('resize', onWindowResize, false);
	/*添加坐标指示器*/
	//var axe = new THREE.AxisHelper(50);
	//scene.add(axe);
	window.addEventListener('resize', onWindowResize, false);
	window.addEventListener('load', onWindowResize, false);
	
/*自适应函数*/
function onWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();/*屏幕大小改变时，更新相机的投影矩阵*/
}


/*创建小鸟*/
	var bird = new THREE.Group();
	var Mat = new THREE.MeshBasicMaterial({
		color : 0x000000,
		opacity : 0.6,
		transparent : true,
		side : THREE.DoubleSide
	});
	var bodyShape = new THREE.Shape();
	bodyShape.moveTo(100,0);
	bodyShape.lineTo(0,-50);
	bodyShape.lineTo(-200,0);
	bodyShape.lineTo(100,0);
	
	var bodyGeo = new THREE.ShapeGeometry(bodyShape);
	var body = new THREE.Mesh(bodyGeo,Mat);
    
    var wingShape = new THREE.Shape();
    wingShape.moveTo(0,-50);
    wingShape.lineTo(-75,-50);
    wingShape.lineTo(-50,250);
    wingShape.lineTo(0,-50);
    
    var wingGeo = new THREE.ShapeGeometry(wingShape);
    var wing = new THREE.Mesh(wingGeo,Mat);
    
    var Twing = new THREE.Object3D();
    wing.position.set(0,50,0);
    Twing.add(wing);
    Twing.position.set(0,-25,0);
    Twing.rotation.x = Math.PI;
    var wing2 = Twing.clone();
	bird.add(body);
	bird.add(Twing);
	bird.add(wing2);
    scene.add(bird);    
//鸟2
var body2 = body.clone();
var Twing2 = Twing.clone();
var wing22 = wing2.clone();
var bird2 = new THREE.Group();
bird2.add(body2);
bird2.add(Twing2);
bird2.add(wing22);

bird2.position.set(100,200,0);
scene.add(bird2);
//鸟3
var body3 = body.clone();
var Twing3 = Twing.clone();
var wing23 = wing2.clone();
var bird3 = new THREE.Group();
bird3.add(body3);
bird3.add(Twing3);
bird3.add(wing23);
bird3.position.set(200,100,0);
scene.add(bird3);
//鸟4
var body4 = body.clone();
var Twing4 = Twing.clone();
var wing24 = wing2.clone();
var bird4 = new THREE.Group();
bird4.add(body4);
bird4.add(Twing4);
bird4.add(wing24);
bird4.position.set(-100,-200,0);
scene.add(bird4);
//鸟5
var body5 = body.clone();
var Twing5 = Twing.clone();
var wing25 = wing2.clone();
var bird5 = new THREE.Group();
bird5.add(body5);
bird5.add(Twing5);
bird5.add(wing25);
bird5.position.set(-200,-100,0);
scene.add(bird5);
/*鸟6*/
var body6 = body.clone();
var Twing6 = Twing.clone();
var wing26 = wing2.clone();
var bird6 = new THREE.Group();
bird6.add(body6);
bird6.add(Twing6);
bird6.add(wing26);
bird6.position.set(-200,150,0);
scene.add(bird6);


/*飞行变化*/
    /*直线*/
function line(){
    //鸟1
    new TWEEN.Tween(bird.position).to({x: 0,y: 500,z: -500}, 1500).start();
	//鸟2
	new TWEEN.Tween(bird2.position).to({x: 0,y: 400,z: -300}, 1500).start();
	//鸟3
	new TWEEN.Tween(bird3.position).to({x: 0,y: 300,z: -100}, 1500).start();
	//鸟4
	new TWEEN.Tween(bird4.position).to({x: 0,y: 200,z: 100}, 1500).start();
	//鸟5
	new TWEEN.Tween(bird5.position).to({x: 0,y: 100,z: 300}, 1500).start();
    //鸟6
	new TWEEN.Tween(bird6.position).to({x: 0,y: 0,z: 500},1500).start();
	moveAndLookAt(camera,new THREE.Vector3(300,900,6000),new THREE.Vector3(0,0,0),{duration:2500});
}
   /*圆圈*/
function cicle(){
	new TWEEN.Tween(bird.position).to({x: 0,y: 500,z: 500}, 1500).start();//1
	new TWEEN.Tween(bird2.position).to({x: 355,y: 500,z: 355}, 1500).start();//2
	new TWEEN.Tween(bird3.position).to({x: 355,y: 500,z: -355}, 1500).start();//3
	new TWEEN.Tween(bird4.position).to({x: 0,y: 500,z: -500}, 1500).start();//4
	new TWEEN.Tween(bird5.position).to({x: -355,y: 500,z: -355}, 1500).start();//5
	new TWEEN.Tween(bird6.position).to({x: -355,y: 500,z: 355}, 1500).start();//6
	moveAndLookAt(camera,new THREE.Vector3(0,-500,5050),new THREE.Vector3(0,500,0),{duration:2500});
}
function triangle(){
	new TWEEN.Tween(bird.position).to({x: 167,y: 500,z: -96}, 1500).start();//1
	new TWEEN.Tween(bird2.position).to({x: 167,y: 500,z: 96}, 1500).start();//2
	new TWEEN.Tween(bird3.position).to({x: 0,y: 500,z: -288}, 1500).start();//3
	new TWEEN.Tween(bird4.position).to({x: 0,y: 500,z: 288}, 1500).start();//4
	new TWEEN.Tween(bird5.position).to({x: -250,y: 500,z: -433}, 1500).start();//5
	new TWEEN.Tween(bird6.position).to({x: -250,y: 500,z: 433}, 1500).start();//6
	moveAndLookAt(camera,new THREE.Vector3(0,2500,5000),new THREE.Vector3(-100,200,0),{duration:3500});
}
function aroud(){
	new TWEEN.Tween(bird.position).to({x: 700,y: 400,z: 0}, 1500).start();//1
	new TWEEN.Tween(bird2.position).to({x: 400,y: 400,z: 0}, 1500).start();//2
	new TWEEN.Tween(bird3.position).to({x: 100,y: 400,z: 0}, 1500).start();//3
	new TWEEN.Tween(bird4.position).to({x: 400,y: 200,z: 0}, 1500).start();//4
	new TWEEN.Tween(bird5.position).to({x: 100,y: 200,z: 0}, 1500).start();//5
	new TWEEN.Tween(bird6.position).to({x:  100,y: 0,z: 0}, 1500).start();//6
	moveAndLookAt(camera,new THREE.Vector3(0,800,5000),new THREE.Vector3(0,0,0),{duration:2500});
}
   /*初始环绕*/
  /*定义鸟群*/
    birdGroup = new THREE.Group();
	birdGroup.add(bird);
	birdGroup.add(bird2);
	birdGroup.add(bird3);
	birdGroup.add(bird4);
	birdGroup.add(bird5);
	birdGroup.add(bird6);
	//环绕函数
	scene.add(birdGroup);
	
	
$('#stage').append(renderer.domElement);
var step = 0;//定义初始速度
	function render(){
	/*翅膀拍打*/
	step += 0.8;
/*鸟1*/
	Twing.rotation.x  = -Math.PI/2 + (Math.PI/6)*Math.sin(step);
	wing2.rotation.x = Math.PI/2 - (Math.PI/6)*Math.sin(step);
/*鸟2*/	
	Twing2.rotation.x  = -Math.PI/2 + (Math.PI/6)*Math.sin(step);
	wing22.rotation.x = Math.PI/2 - (Math.PI/6)*Math.sin(step);
/*鸟3*/	
	Twing3.rotation.x  = -Math.PI/2 + (Math.PI/6)*Math.sin(step);
	wing23.rotation.x = Math.PI/2 - (Math.PI/6)*Math.sin(step);
/*鸟4*/	
	Twing4.rotation.x  = -Math.PI/2 + (Math.PI/6)*Math.sin(step);
	wing24.rotation.x = Math.PI/2 - (Math.PI/6)*Math.sin(step);
/*鸟5*/	
	Twing5.rotation.x  = -Math.PI/2 + (Math.PI/6)*Math.sin(step);
	wing25.rotation.x = Math.PI/2 - (Math.PI/6)*Math.sin(step);
/*鸟6*/
    Twing6.rotation.x  = -Math.PI/2 + (Math.PI/6)*Math.sin(step);
	wing26.rotation.x = Math.PI/2 - (Math.PI/6)*Math.sin(step);
/*鸟群*/
    birdGroup.position.x = -2000*Math.cos(step*0.01); 
    birdGroup.position.y = 0 ;
    birdGroup.position.z = 2000*Math.sin(step*0.01);
    birdGroup.rotation.y = -Math.PI/2 + step*0.01;
    
/*渲染与循环*/	
    TWEEN.update();
	requestAnimationFrame(render);
	renderer.render(scene,camera);
	}
	render();
	
/*定义点击事件*/
	$('#line')[0].onclick = function(){
		line();
	}
	$('#cicle')[0].onclick = function(){
		cicle();
	}
	$('#triangle')[0].onclick = function(){
		triangle();
	}
	$('#aroud')[0].onclick = function(){
		aroud();
	}
	
	
	
	
	
})/*jquery结束*/




































































