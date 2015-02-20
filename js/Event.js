var Event = function(){
	this.observers

    this.addObserver = function(observer) {
    	observers.push(observer);
    }//addObserver end

   this.notifyObservers = function(obj) {
    	for(var i = 0; i< this._observers.length; i++){
    		observers[i](this, obj);
    	}
    }

}//Event end
