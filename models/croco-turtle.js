var CrocoTurtle = (function () {
    function CrocoTurtle(level) {
        Unit.call(this, 100, 400, level);
    }

    CrocoTurtle.prototype = Object.create(Unit.prototype);
    CrocoTurtle.prototype.constructor = CrocoTurtle;
    CrocoTurtle.prototype.step = function (){
        console.log('Step');
    };

    CrocoTurtle.prototype.attak = function(monster){
        this.health -= monster.damage;
    }
    return CrocoTurtle;
}());
