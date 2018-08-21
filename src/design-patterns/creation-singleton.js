

/** 
 * Singleton
 * 
 */

var CircleGeneratorSingleton = (function () {
    var instance;
    
    function init() {
        return {}
    }
    
    return {
        getInstance: function () {

            if (!instance) instance = init();

            return instance;
        }
    }
})();

var cg = CircleGeneratorSingleton.getInstance();