var Ennemy = function(name, color, position, direction) {

    this.name = name;
    this.position = position;
    this.life = 1;
    this.bullets = new Array();
    this.direction = direction;

    this.material = new THREE.MeshLambertMaterial({
        color: color,
    });

    var singleGeometry = new THREE.Geometry();

    vehiculeMesh = new THREE.ConeGeometry(5, 20, 32);
    this.graphic = new THREE.Mesh(vehiculeMesh, this.material);
    this.graphic.position.z = 6;

    this.graphic.rotateOnAxis(new THREE.Vector3(0,0,1), this.direction+(3*Math.PI/2));
};

Ennemy.prototype.move = function () {
    var moveTo = new THREE.Vector3(
        Math.cos(this.direction) + this.position.x,
        Math.sin(this.direction) + this.position.y,
        this.graphic.position.z
    );

    this.position = moveTo;

    this.graphic.position.x = this.position.x;
    this.graphic.position.y = this.position.y;
}

Player.prototype.turnLeft = function (angle) {
    this.direction += angle;
    this.graphic.rotateOnAxis(new THREE.Vector3(0,0,1), angle);
};