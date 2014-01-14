var GM = GM || {};

GM.player = function(){
	var speed = 35,
			x = 0,
			y = gameHeight - 40,
			rotation = 0,
			width = 40,
			height = 40,
			health = 130,
			ang = 15,
			pi = Math.PI;
			
	var pub = {

		moveRight: function() {
			x += speed;
		},
		
		moveLeft: function() {
			x -= speed;
		},

		reflectLeftRight: function(){
			rotation = -1 * (rotation + 180);
		},
		
		reflectTopBottom: function(){
			rotation = -1 * (rotation);
		},
		
		takeDamage: function(){
			height -=.25;
			width -=.25;
			speed +=.025;
			health -=1;
		},
		
		headForX: function(newX, newY){
			var dY = y - newY;
			var dX = newX - x;
			rotation = 360 - Math.round(Math.atan2(dY,dX)*180/ pi);
		},
		howfar:function(){
			var goalPt,
					startPt;
			goalPt = {x: newX, y:newY};
			var vDistance = Math.round(Math.sqrt(((goalPt.x - x)^2) + ((y - goalPt.y)^2)));
			return vDistance;
		},
		
		fwd:function(){
			 if(x<0 || x+width > gameWidth){
      	pub.reflectLeftRight();
       }
        ctx.fillStyle = "rgb(248,236,194)";
        ctx.fillRect(x, y, width, height);
		},
		
		getX:function(){
			return x;
		},
		
		getY:function(){
			return y;
		},
		getHiWi:function(){
			return {w:width, h:height}; 
		},
		getRotation:function(){
			return rotation;
		},	
		getHealth: function(){
			return health;
		}
	};
	return pub;
	
};