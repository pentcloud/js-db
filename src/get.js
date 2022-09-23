/**
 * Retrieves a stored value for input key
 * @method
 * @param {string} key - The key name for the item to retrieve.
 */ 
JSDB.prototype.get = function (key){
    // Validate key existence or throw error
    if (!key){
        throw new Error("Must provide a key");
    };

    // Use PersistJS to get data
    var value = this.store.get(key);

    // Try to decompress, in case of object.
    try{
        value = JSONC.unpack(value, true);
    }catch(err){
        
    }

    // Check data type and parse int if necessary
    if(!isNaN(value)){
        value = +value;
    }

    return value;
};