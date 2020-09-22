// 路径

export default ["color.black", "num.one", "num.required", "str.required", "array.null", function ($colorBlack, $numOne, $numRequired, $strRequired, $arrayNull) {
    return {
        attrs: {
            'fill-color': $colorBlack,
            'stroke-color': $colorBlack,
            'line-width': $numOne,
            dash: $arrayNull,
            type: { type: "string", default: "stroke" }
        },
        subAttrs: {
            "move-to": {
                'x': $numRequired,
                'y': $numRequired
            },
            "line-to": {
                'x': $numRequired,
                'y': $numRequired
            },
            "bezier-to": {
                'x': $numRequired,
                'y': $numRequired,
                'cp1x': $numRequired,
                'cp1y': $numRequired,
                'cp2x': $numOne,
                'cp2y': $numOne,
                'type': $strRequired
            }
        },
        link(painter, attr) {

            debugger
            painter.config({
                "fillStyle": attr['fill-color'],
                "strokeStyle": attr['stroke-color'],
                "lineWidth": attr['line-width'],
                "lineDash": attr.dash,
            });
            console.log(attr)
            for (let i = 0; i < attr.lines.length; i++) {
                if (i = 0) {
                    painter.beginPath();
                }
                if (attr.lines[i].series == 'move-to') {
                    painter.moveTo(attr.lines[i].attr.x, attr.lines[i].attr.y);
                } else if (attr.lines[i].series == 'line-to') {
                    painter.lineTo(attr.lines[i].attr.x, attr.lines[i].attr.y);
                } else if (attr.lines[i].series == 'bezier-to') {
                    if (attr.lines[i].attr.type == '2') {
                        painter.quadraticCurveTo(attr.lines[i].attr.cpx, attr.lines[i].attr.cpy, attr.lines[i].attr.x, attr.lines[i].attr.y);
                    }
                    else if (attr.lines[i].attr.type == '3') {
                        painter.bezierCurveTo(attr.lines[i].attr.cp1x, attr.lines[i].attr.cp1y,
                            attr.lines[i].attr.cp2x, attr.lines[i].attr.cp2y, attr.lines[i].attr.x, attr.lines[i].attr.y);
                    }
                }
                if (attr.type == 'stroke') {
                    painter.stroke();
                } else if (attr.type == 'fill') {
                    painter.fill();
                } else if (attr.type == 'full') {
                    painter.full();
                }
                if (i = attr.lines.length - 1 && attr.close == 'true') {
                    painter.closePath();
                }
            }
        }
    };
}];