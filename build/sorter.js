"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
//abstract class only used as parent class
//cant be used to create object directly
//the implemented methods can refer to other methods that do not exist yet
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
