import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

export function multiRangeSliders(id, min, max, start, end) {
    // Si le slider existe déjà, le détruire
    if (id.noUiSlider) {
        id.noUiSlider.destroy();
    }

    noUiSlider.create(id, {
        start: [start, end],
        range: {
            'min': min,
            'max': max
        },
        connect: true,
        tooltips: [true, true],
        format: {
            to: function (value) {
                return Math.round(value);
            },
            from: function (value) {
                return Math.round(value);
            }
        },
    });
};