import { Summary } from '../models/index';
import { StyleList } from '../data/index';

export class SummaryBuilder {

    private _summary: Summary;

    content(content: string): SummaryBuilder {
        let htmlContent: HTMLElement = document.createElement('div');
        htmlContent.innerHTML = content;
        
        this._summary = {
            content: htmlContent
        };

        return this;
    }

    style(styleId: string): SummaryBuilder {
        this._summary.style = new StyleList().get(styleId);

        return this;
    }

    build(): Summary {
        return this._summary;
    }

}