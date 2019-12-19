//coding challenge 4
//Find BMI from objects
var johnInfo = {
	fullName: "John Doe",
	mass: 76,
	height: 12,
	calcBMI: function(){
		this.BMI = this.mass / (this.height * this.height);
	}
};

var markInfo = {
	fullName: "Mark Doe",
	mass: 68,
	height: 9,
	calcBMI: function(){
		this.BMI = this.mass / (this.height * this.height);
	}
};

johnInfo.calcBMI();
markInfo.calcBMI();

if (johnInfo.BMI > markInfo.BMI){
	console.log("John has a greater BMI of "+ johnInfo.BMI);
} else if (johnInfo.BMI === markInfo.BMI) {
	console.log("John and Mark have the same BMI of "+ johnInfo.BMI);	
} else {
	console.log("Mark has the greater BMI of "+ markInfo.BMI);
}
