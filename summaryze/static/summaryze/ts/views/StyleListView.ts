import { Style } from '../models/index';

/**
 * This class is responsible to present all the summary styles.
 */

export class StyleListView {

    private _element: JQuery;

    constructor() {
        this._element = $('#style-list');
    }

    update(styles: Style[]): void {
        const strStyles: string = styles.map((style) => this.template(style)).join('');
        this._element.html(strStyles);
    }

    private template(style: Style): string {
        return `<span id="${style.id}" class="style-list-item" title='Change current style to "${style.name}"'>${style.name}</span>`;
    }
}