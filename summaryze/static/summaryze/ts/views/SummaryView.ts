import { Summary, Style } from '../models/index';
import Prism from 'prismjs';

/**
 * This class is responsible to present the summary and its HTML/CSS code.
 */

export class SummaryView {

    private _element: JQuery;

    constructor() {
        this._element = $('#summary-content');
    }


    /**
     * Shows a formated summary on page.
     * @param summary to be displayed
     */
    updateSummary(summary: Summary): void {
        const template = this.templateSummary(summary);
        this._element.html(template);
    }


    /**
     * Shows an HTML summary on page.
     * @param summary to be used
     */
    updateHTML(summary: Summary): void {
        const template = this.templateHTML(summary);
        this._element.html(template);
        
        const code = document.querySelector('.language-markup') as HTMLElement;
        Prism.highlightElement(code);
    }


    /**
     * Shows summary style on page.
     * @param style to be used
     */
    updateCSS(style: Style): void {
        const template = this.templateCSS(style);
        this._element.html(template);

        const code = document.querySelector('.language-css') as HTMLElement;
        Prism.highlightElement(code);
    }


    /**
     * Template of summary.
     * @param summary to be used
     */
    private templateSummary(summary: Summary): string {
        let strStyle: string = '';

        if (summary.style !== undefined) {
            strStyle = summary.style.content;
        }

        return `
            <style>${strStyle}</style>
            ${summary.content.innerHTML}
        `;
    }


    /**
     * Template of HTML summary.
     * @param summary to be used
     */
    private templateHTML(summary: Summary): string {
        let strSummary = summary.content.innerHTML
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        return `
            <pre><code class="language-markup">${strSummary}</code></pre>
        `;
    }


    /**
     * Template of summary style.
     * @param style to be used
     */
    private templateCSS(style: Style): string {
        let strStyle = style.content.replace(/^\s+/gm, '');
        return `
            <pre><code class="language-css">${strStyle}</code></pre>
        `;
    }
}