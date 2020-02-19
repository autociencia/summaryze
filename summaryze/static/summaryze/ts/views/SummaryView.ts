import { Summary, Style } from '../models/index';

/**
 * This class is responsible to present the summary
 * and its code.
 */

export class SummaryView {

    private _element: JQuery;

    constructor() {
        this._element = $('#summary-content');
    }

    private templateSummary(summary: Summary): string {
        let styleContent: string = '';

        if (summary.style !== undefined) {
            styleContent = summary.style.content;
        }

        return `
            <style>${styleContent}</style>
            ${summary.content.innerHTML}
        `;
    }

    private templateHTML(summary: Summary): string {
        let strSummary = summary.content.innerHTML
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        return `
            <pre><code>${strSummary}</code></pre>
        `;
    }

    private templateCSS(style: Style): string {
        let strStyle = style.content.replace(/^\s+/gm, '');
        return `
            <pre><code>${strStyle}</code></pre>
        `;
    }

    updateSummary(summary: Summary): void {
        let template = this.templateSummary(summary);
        this._element.html(template);
    }

    updateHTML(summary: Summary): void {
        let template = this.templateHTML(summary);
        this._element.html(template);
    }

    updateCSS(style: Style): void {
        let template = this.templateCSS(style);
        this._element.html(template);
    }
}