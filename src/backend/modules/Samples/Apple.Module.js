var Q           = require(SP_NODE_MODULES + 'q');

module.exports = function (params) {
    var self = new BASEMODULE(params.initialAttributes);
    self.req = params.req;

    self.load = PROMISIFY(load)

    function load(params, resolve, reject) {
        var anApple = { id: 1, name: 'gala' }
        self.set(anApple);
        resolve();
    }

    return self;
}

module.exports.Collection = function(params) {
    var collection = new BASECOLLECTION(params.initialItems);
    collection.req = params.req;

    collection.load = PROMISIFY(load);
    
    function load(params, resolve, reject) {

        var fakeApples = [ { id: 1, name: 'gala' }, { id: 2, name: 'fuji' }, { id: 3, name: 'green' } ];
        collection.add(fakeApples);

        resolve();

    }

    return collection;
}


