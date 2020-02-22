import { Summary } from '../models/index';
import { StyleList } from '../data/index';

/**
 * SummaryBuilder makes easy to build a summary model.
 */

export class SummaryBuilder {

    private _summary: Summary;

    /**
     * Set content to summary.
     * @param content of summary
     * @returns itself
     */
    content(content: string): SummaryBuilder {
        let htmlContent: HTMLElement = document.createElement('div');
        htmlContent.innerHTML = content;
        
        this._summary = {
            content: htmlContent
        };

        return this;
    }


    /**
     * Set style to summary.
     * @param styleId of style
     * @returns itself
     */
    style(styleId: string): SummaryBuilder {
        this._summary.style = new StyleList().get(styleId);

        return this;
    }


    /**
     * Build the summary.
     * @returns a summary
     */
    build(): Summary {
        return this._summary;
    }

}