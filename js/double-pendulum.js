/**
 * Created by steam on 01.06.2018.
 */
$(document).ready(function () {
    var colorWheel = {
        hsl: [0, 1, 0.5],
        rgb: [255, 0, 0],
        hex: '#ff0000',
        velocity: 0.01,
        angle: 0,
        acceleration: 0,
        update: function () {
            this.velocity += this.acceleration;
            this.angle += this.velocity;
            this.hsl[0] = radToDeg(this.angle) / 360;
            this.rgb = hslToRgb(this.hsl[0], this.hsl[1], this.hsl[2]);
            this.hex = '#' + rgbToHex(this.rgb[0], this.rgb[1], this.rgb[2]);

        },
    };
    var d0 = {
        mass: 200,
        radius: 0,
        angle: 0,
        velocity: 0,
        acceleration: 0,
        position_x: 0,
        position_y: 0,
        name: 'd0'
    };
    var d1 = {
        mass: 200,
        radius: 250,
        angle: 0,
        velocity: 0,
        acceleration: 0,
        position_x: 0,
        position_y: 0,
        name: 'd1',
        updateMass: function (mass) {
            this.mass = parseInt(mass);
            // this.updateAcceleration();
            // this.updateVelocity();
            // this.updateAngle();
            // this.updatePosition();
            this.updateDraw();
        },
        updateVelocity: function () {
            this.velocity += this.acceleration;
            // this.velocity -= Math.abs(this.velocity * friction);
        },
        updateAcceleration: function () {
            var num = {
                a: -G * (2 * d1.mass + d2.mass) * Math.sin(d1.angle),
                b: -d2.mass * G * Math.sin(d1.angle - 2 * d2.angle),
                c: -2 * Math.sin(d1.angle - d2.angle) * d2.mass,
                d: d2.velocity * d2.velocity * d2.radius + d1.velocity * d1.velocity * Math.cos(d1.angle - d2.angle)
            };
            var den = {
                a: d1.radius * (2 * d1.mass + d2.mass - d2.mass * Math.cos(2 * d1.angle - 2 * d2.angle))
            };
            this.acceleration = (num.a + num.b + num.c * num.d) / den.a;
        },
        updateAngle: function () {
            this.angle += this.velocity;
        },

        updatePosition: function () {
            this.position_x = this.radius * Math.sin(this.angle);
            this.position_y = this.radius * Math.cos(this.angle);
        },
        updateDraw: function () {
            $pendulumCanvas.setLayer(this.name, {
                x: this.position_x, y: this.position_y,
                width: this.mass / 3, height: this.mass / 3

            });
        }
    };
    var d2 = {
        mass: 100,
        radius: 300,
        angle: 0,
        velocity: 0,
        acceleration: 0,
        position_x: 0,
        position_y: 0,
        old_x: 0,
        old_y: 0,
        name: 'd2',
        updateMass: function (mass) {
            this.mass = mass;
            this.updateDraw();
        },
        updateVelocity: function () {
            this.velocity += this.acceleration;
            // this.velocity -= Math.abs(this.velocity * friction);
        },
        updateAngle: function () {
            this.angle += this.velocity;
        },
        updatePosition: function () {
            this.old_x = this.position_x;
            this.old_y = this.position_y;
            this.position_x = this.radius * Math.sin(this.angle) + d1.position_x;
            this.position_y = this.radius * Math.cos(this.angle) + d1.position_y;
        },
        updateAcceleration: function () {
            var num = {
                a: 2 * Math.sin(d1.angle - d2.angle),
                b: (d1.velocity * d1.velocity * d1.radius * (d1.mass + d2.mass)),
                c: G * (d1.mass + d2.mass) * Math.cos(d1.angle),
                d: d2.velocity * d2.velocity * d2.radius * d2.mass * Math.cos(d1.angle - d2.angle)
            };
            var den = {
                a: d2.radius * (2 * d1.mass + d2.mass - d2.mass * Math.cos(2 * d1.angle - 2 * d2.angle))
            };
            this.acceleration = (num.a * (num.b + num.c + num.d)) / den.a;
        },
        updateDraw: function () {
            $pendulumCanvas.setLayer(this.name, {
                x: this.position_x, y: this.position_y,
                width: this.mass / 3, height: this.mass / 3
            });
        }

    };var d2 = {
        mass: 100,
        radius: 300,
        angle: 0,
        velocity: 0,
        acceleration: 0,
        position_x: 0,
        position_y: 0,
        old_x: 0,
        old_y: 0,
        name: 'd2',
        updateMass: function (mass) {
            this.mass = mass;
            this.updateDraw();
        },
        updateVelocity: function () {
            this.velocity += this.acceleration;
            // this.velocity -= Math.abs(this.velocity * friction);
        },
        updateAngle: function () {
            this.angle += this.velocity;
        },
        updatePosition: function () {
            this.old_x = this.position_x;
            this.old_y = this.position_y;
            this.position_x = this.radius * Math.sin(this.angle) + d1.position_x;
            this.position_y = this.radius * Math.cos(this.angle) + d1.position_y;
        },
        updateAcceleration: function () {
            var num = {
                a: 2 * Math.sin(d1.angle - d2.angle),
                b: (d1.velocity * d1.velocity * d1.radius * (d1.mass + d2.mass)),
                c: G * (d1.mass + d2.mass) * Math.cos(d1.angle),
                d: d2.velocity * d2.velocity * d2.radius * d2.mass * Math.cos(d1.angle - d2.angle)
            };
            var den = {
                a: d2.radius * (2 * d1.mass + d2.mass - d2.mass * Math.cos(2 * d1.angle - 2 * d2.angle))
            };
            this.acceleration = (num.a * (num.b + num.c + num.d)) / den.a;
        },
        updateDraw: function () {
            $pendulumCanvas.setLayer(this.name, {
                x: this.position_x, y: this.position_y,
                width: this.mass / 3, height: this.mass / 3
            });
        }

    };
    var trace = {
        distance: 0,
        relDistance: 0,
        strokeWith: 1,
        name: 'trace',

        updateDistance: function () {
            var num = {
                a: Math.pow(d0.position_x - d2.position_x, 2),
                b: Math.pow(d0.position_y - d2.position_y, 2)
            };
            this.distance = Math.sqrt(num.a + num.b);
            this.relDistance = ( this.distance / (d1.radius + d2.radius));
        },
        updatePosition: function () {
            this.updateDistance();
        },

        updateDraw: function () {
            $pendulumCanvas.addLayer({
                name: 'stroke' + frame,
                type: 'line',
                rounded: true,
                strokeStyle: colorWheel.hex,
                strokeWidth: this.strokeWith * (this.relDistance * 10),
                x1: d2.old_x, y1: d2.old_y,
                x2: d2.position_x, y2: d2.position_y
            });

        }

    };


    $('#start').click(start);
    $('#stop').click(stop);
    $('#reset').click(reset);
    $('#show_pendulum').change(function () {
        if (this.checked === true) {
            showPendulum = true;
        } else {
            showPendulum = false;
        }
        updateVisibility();
    });
    $('#mass-1').change(function () {
        d1.updateMass(parseInt($(this).val()));
    }).change(outputValue);
    $('#mass-2').change(function () {
        d2.updateMass(parseInt($(this).val()));
    }).change(outputValue);
    $('#radius-1').change(function () {
        d1.radius = parseInt($(this).val());
        stop();
        reset();
    }).change(outputValue);
    $('#radius-2').change(function () {
        d2.radius = parseInt($(this).val());
        stop();
        reset();
    }).change(outputValue);

    function outputValue() {
        console.log($(this).val());
        $(this).prev('label').find('span').html($(this).val());
    }


    var $pendulumCanvas = $('#double-pendulum');
    var centerX = 1200 / 2;
    var centerY = 1200 / 2;
    $pendulumCanvas.translateCanvas({
        translateX: centerX,
        translateY: centerY
    });
    var FPS = 90;
    var frame = 0;
    var loop;
    var loopStarted = false;
    Math.TAO = Math.PI * 2;
    var G = 1;
    var friction = 0.000005;
    var showPendulum = true;
    reset();

    function updateVisibility() {
        if (showPendulum === true) {
            $pendulumCanvas.setLayerGroup('pendulum', {opacity: 1});
        } else {
            $pendulumCanvas.setLayerGroup('pendulum', {opacity: 0});
        }
        $pendulumCanvas.drawLayers();
    }

    function update() {
        updateVisibility();
        d1.updateAcceleration();
        d2.updateAcceleration();
        d1.updateVelocity();
        d2.updateVelocity();
        d1.updateAngle();
        d2.updateAngle();
        d1.updatePosition();
        d2.updatePosition();
        d1.updateDraw();
        d2.updateDraw();
        colorWheel.update();
        trace.updatePosition();


        $pendulumCanvas.setLayer('line_1', {
            x1: d0.position_x, y1: d0.position_y,
            x2: d1.position_x, y2: d1.position_y,
            x3: d2.position_x, y3: d2.position_y
        });
        trace.updateDraw();


    }

    function draw() {
        $pendulumCanvas.drawLayers();
    }

    function updateOutput($element, element) {
        $element.find('.name').html(element.name);
        $element.find('.mass').html(Math.round(element.mass));
        $element.find('.radius').html(Math.round(element.radius));
        $element.find('.angle').html(Math.round(element.angle) + " | " + radToDeg(element.angle));
        $element.find('.acceleration').html(Math.round(element.acceleration * 100000));
        $element.find('.velocity').html(Math.round(element.velocity * 10000));
        $element.find('.position_x').html(Math.round(element.position_x));
        $element.find('.position_y').html(Math.round(element.position_y));
    }

    function start() {
        if (!loopStarted) {
            loopStarted = true;
            loop = setInterval(function () {
                update();
                draw();
                frame += 1;
            }, 1000 / FPS);
        }
    }

    function stop() {
        draw();
        clearInterval(loop);
        loop = {};
        loopStarted = false;

    }

    function reset() {
        $pendulumCanvas.removeLayers();
        $pendulumCanvas.clearCanvas();

        d1.velocity = 0;
        d2.velocity = 0;
        d1.angle = Math.PI + 0.5;
        d2.angle = Math.PI - 0.5;
        d1.updatePosition();
        d2.updatePosition();
        $pendulumCanvas.drawRect({
            layer: true,
            name: 'background',
            fillStyle: 'black',
            x: 0, y: 0,
            width: 1200,
            height: 1200,
        });

        $pendulumCanvas.drawLine({
            layer: true,
            name: 'line_1',
            groups: ['pendulum'],
            strokeStyle: 'DarkRed',
            rounded: true,
            strokeWidth: 4,
            x1: d0.position_x, y1: d0.position_y,
            x2: d1.position_x, y2: d1.position_y,
            x3: d2.position_x, y3: d2.position_y

        });
        $pendulumCanvas.drawEllipse({
            layer: true,
            name: d0.name,
            type: 'ellipse',
            groups: ['pendulum'],
            fillStyle: 'blue',
            strokeWidth: 2,
            x: d0.position_x, y: d0.position_y,
            fromCenter: true,
            width: d0.mass / 3,
            height: d0.mass / 3
        });
        $pendulumCanvas.drawEllipse({
            layer: true,
            name: d1.name,
            groups: ['pendulum'],
            fillStyle: 'yellow',
            strokeWidth: 2,
            x: d1.position_x, y: d1.position_y,
            fromCenter: true,
            width: d1.mass / 3,
            height: d1.mass / 3
        });
        $pendulumCanvas.drawEllipse({
            layer: true,
            name: d2.name,
            groups: ['pendulum'],
            fillStyle: 'red',
            strokeWidth: 2,
            x: d2.position_x, y: d2.position_y,
            fromCenter: true,
            width: d2.mass / 3,
            height: d2.mass / 3
        });
        updateVisibility();

    }


});


/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  l       The lightness
 * @return  Array           The RGB representation
 */
function hslToRgb(h, s, l) {
    var r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;

        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [r * 255, g * 255, b * 255];
}
function rgbToHex(R, G, B) {
    return toHex(R) + toHex(G) + toHex(B)
}
function toHex(n) {
    n = parseInt(n, 10);
    if (isNaN(n)) return "00";
    n = Math.max(0, Math.min(n, 255));
    return "0123456789ABCDEF".charAt((n - n % 16) / 16)
        + "0123456789ABCDEF".charAt(n % 16);
}

function radToDeg(angle) {
    return Math.round(Math.abs((((((((angle * 180 / Math.PI) % 360) + 360) % 360) + 180) % 360) - 360)));
}