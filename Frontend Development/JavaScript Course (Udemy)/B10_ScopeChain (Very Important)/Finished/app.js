
function a() {
	console.log("'this' from a(): " + this); //Window
	var myVar = 2;
	
	function c() {
		console.log("'this' from c(): " + this); //Window
		console.log("c) What is myVar? Ans: " + myVar); //Prints '2', value picked up by c() from its lexical-outer-scope that is a()
		//Stack-trace logs are same about b() and c().
		console.log("c) Using printStackTrace(): " + printStackTrace().join('\n')); //Uses 'stacktrace-0.3.js'
		console.log("c) Using console.trace(): "); console.trace(); //Mozilla and Chrome (Feb2017)
		console.log("c) Using arguments.callee.caller.name: " + arguments.callee.caller.name);
	}

    b(); 
	c();
}

function b() {
	console.log("'this' from b(): " + this); //Window
	console.log("b) What is myVar? Ans: " + myVar); //Prints '1', value picked up by b() from its lexical-outer-scope that is 'global' scope, and not from the execution context of next function on execution-stack that is a()
	console.log("b) Using printStackTrace(): " + printStackTrace().join('\n')); //Uses 'stacktrace-0.3.js'
	console.log("b) Using console.trace(): "); console.trace(); //Mozilla and Chrome (Feb2017)
	console.log("b) Using arguments.callee.caller.name: " + arguments.callee.caller.name);
}

function d(){
	console.log("Constructor for 'd' called using 'new'. 'this' from d(): ", this); //dgetMyVar: ()myVar: 3, __proto__: Object

	this.myVar = 3;
	this.getMyVar = function(){
		console.log("d) What is myVar? Ans: " + this.myVar);
	}
}

console.log("'this' from global-context: " + this);	//Window
var myVar = 1;
a();

var objD = new d();
objD.getMyVar();
/*----------------------------------------------------*/

var objE = {
    name: 'The objE object',
    log: function() {
        this.name = 'Updated objE object';
        console.log(this); //objE
        
        var setname = function(newname) {
            this.name = newname; //The 'this' keyword in a function internal to a function still refers to the 'window' object. A feature that many developers look at as a bug.
        }
        setname('Updated again! The objE object');
        console.log(this); //objE
    }
}

objE.log();
console.log("Checking 'this' keyword in a function internal to a function refers to the 'window': " + window.name); //'Updated again! The objE object'

var objF = {
    name: 'The objF object',
    log: function() {
        var self = this;
        
        self.name = 'Updated objF object';
        console.log(self); //objF.name = 'Updated objF object'
        
        var setname = function(newname) {
            self.name = newname;   
        }
        setname('Updated again! The objF object');
        console.log(self); //objF.name = 'Updated again! The objF object'
    }
}

objF.log();
