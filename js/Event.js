var Event = function(){
	this.observers = [];

    this.addObserver = function(observer) {
    	this.observers.push(observer);
    }//addObserver end

   this.notifyObservers = function() {
    	for(var i = 0; i< this._observers.length; i++){
    		observers[i]();
    	}
    }

}//Event end
