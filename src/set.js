/**
 * Stores a new key-value pair in the DB.
 * @method
 * @param {string} key - The key name for the item.
 * @param {string} value - The value to be stored.
 */
 
JSDB.prototype.set = function(key, value){
	// Validate key existence or throw error
	if (!key){
    	throw new Error("Must provide a key");
	};

	// Validate value existence or throw error
    if (!value){
    	throw new Error("Must provide a value to store");
    };

    // Check if value is object, if so, compress that sh*t
    if(typeof value === "object"){
    	value = JSONC.pack(value, true);
    };

    // Use PersistJS to store
    this.store.set(key, value);
    console.log('stored');
    console.log(this.store.get(key))
};