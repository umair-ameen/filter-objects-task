var Human = (function () {
    function Human(name1, name2) {
        this.setName(name1, name2);
    }
    Human.prototype.setName = function (name1, name2) {
        this.firstName = name1;
        this.lastName = name2;
    };
    Human.prototype.getFullName = function () {
        var container = this.firstName + " " + this.lastName;
        return container;
    };
    return Human;
}());
var adeel = new Human('Muhammad', 'Adeel');
console.log(adeel.getFullName());
//# sourceMappingURL=Classes.js.map