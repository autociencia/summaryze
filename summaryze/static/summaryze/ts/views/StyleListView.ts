import { Style } from '../models/index';

export class StyleListView {

    private _element: JQuery;

    constructor() {
        this._element = $('#style-list');
    }

    private template(style: Style): string {
        return `<span id="${style.id}" class="style-list-item">${style.name}</span>`;
    }

    update(styles: Style[]): void {
        const strStyles: string[] = styles.map((style) => this.template(style));
        this._element.html(strStyles.join(''));
    }

}