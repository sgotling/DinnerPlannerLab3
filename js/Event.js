var Event = function(){
	this.observers = [];

    this.addObserver = function(observer) {
    	this.observers.push(observer);
    }//addObserver end

   this.notifyObservers = function() {
    	for(var i = 0; i< this.observers.length; i++){
    		this.observers[i]();
    	}
    }

}//Event end
