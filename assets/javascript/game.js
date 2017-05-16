$(document).ready(function(){
	
	var gameStart = false;
	var userChoice;


	var characters = [
		uzi = {
			name: "Lil Uzi Vert",
			headImage: "<img data="uzi" src="assets/images/drake.png">",
			healthPoints: "",
			attackPower: "",
			counterAttackPower: "",
		},

		drake = {
			name: "Drake",
			headImage: "",
			healthPoints: "",
			attackPower: "",
			counterAttackPower: "",
		},

		jcole = {
			name: "J Cole",
			headImage: "",
			healthPoints: "",
			attackPower: "",
			counterAttackPower: "",
		},

		kendrick = {
			name: "Kendrick Lamar",
			headImage: "",
			healthPoints: "",
			attackPower: "",
			counterAttackPower: "",
		}
	];

	$(".characters").on("click", function() {
		userChoice = this.data;
		for (i = 0; i < characters.length; i++) {
			if (userChoice == characters[i]) {
				$("#userSlot").html(this)
			}
			else () {

			}
		} 
	});

};

});