import { Summary } from '../models/index';

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

    style(style: string): SummaryBuilder {
        //TODO

        return this;
    }

    build(): Summary {
        return this._summary;
    }

}