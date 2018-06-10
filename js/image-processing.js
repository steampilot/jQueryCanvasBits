$(document).ready(function () {
    var $imageCanvas = $('#image-processing');
    var source = $('#source');
    var image = {
        source: source[0],
        fromCenter: false,
        x: 0, y: 0,
        width: 1200, height: 1200

    };
    console.log(source);
    $imageCanvas.drawImage(image);

});
