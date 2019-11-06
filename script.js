//Bills, total bills, and tips using objc and methods

var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTip: function (){
    this.tips = [];
    this.totalBill = [];
     for (var i=0; i < this.bills.length; i++) {
       var percentage;
       var bill = this.bills[i];
        
       if (bill < 50 ) {
         percentage = .2;
       } else if (bill > 50 && bill < 200) {
         percentage = .15;
       } else if (bill < 200) {
         percentage = .10;
       }
      
       this.tips[i] = bill * percentage;
       this.totalBill[i] = bill + (bill * percentage);
             
     }
   }
};

var Mark = {
  fullName: "Mark Lin",
  bills: [77, 375, 110, 45],
  calcTip: function (){
    this.tips = [];
    this.totalBill = [];
     for (var i=0; i < this.bills.length; i++) {
       var percentage;
       var bill = this.bills[i];
        
       if (bill < 100 ) {
         percentage = .20;
       } else if (bill > 100 && bill < 300) {
         percentage = .10;
       } else if (bill < 300) {
         percentage = .25;
       }
      
       this.tips[i] = bill * percentage;
       this.totalBill[i] = bill + (bill * percentage);
             
     }
   }
};


var calcAverage = function () {
	
};
















