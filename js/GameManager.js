/* GAME MANAGER */
var canvas = document.getElementById('GameField'), //get the Canvas element, store as Global Var.
		ctx,
		manager;

// setup namespace for Game Manager
var GM = (function(){
	var game = {
		onload: function(){
			if (canvas.getContext){  
				ctx = canvas.getContext('2d');
				
				//Create Manager Obj
				manager = new GM.manager();
				manager.init();
			}
		},
		
		start: function(){
			//play the game
			manager.play();
		},
		
		end: function(){
			//end the game
			manager.end();
		}
	}	
	return game;
})();

