"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: 'Wolverine' },
            { id: 2, name: 'Prof. X' },
            { id: 3, name: 'Magneto' },
            { id: 4, name: 'Quicksilver' },
            { id: 5, name: 'Jene Gray' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map