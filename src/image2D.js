import {
    image2D,

    treeLayout,
    pieLayout,
    Matrix4,
    animation,
    cardinal,
    rotate,
    move,
    scale,
    dot,
    formatColor,
    getRandomColors,
    stopPropagation,
    preventDefault,
    map,

    appendTo,
    prependTo,
    afterTo,
    beforeTo,
    remove,
    filter,
    text,
    html,
    size,
    css,
    attr,
    datum,
    data,
    enter,
    exit,
    loop,
    bind,
    unbind,
    position,
    painter,
    painterCanvas2D,
    painterSVG,
    layer

} from 'image2d/src/export.js';

// 挂载需要的静态方法
image2D.extend({

    animation,
    rotate

});

// 挂载需要的类方法
image2D.prototype.extend({

    css,
    attr,
    size,
    painter: painterCanvas2D,
    appendTo

});

export default image2D;