import { SummaryController } from '../controllers/index';
import { SummaryBuilder } from '../builder/index';
import { Summary } from '../models/index';
import { StyleListBtns } from './index';
import { ObjectUtils } from '../utils/index';

/**
 * All performed actions on send buttons are structured here.
 */

export abstract class GetSummaryBtn {

    /**
     * Gets and shows a summary by HTML (if valid).
     */
    abstract sendAndShow(): void;


    /**
     * Shows a summary with the content recovered from backend.
     * @param content recovered from backend as HTML code
     */
    static fetchEvent(content: string): void {
        let cachedStyle = sessionStorage.getItem('summary_css') as string;

        if (ObjectUtils.nonExists(cachedStyle)) {
            cachedStyle = 'default';
        }

        const summary: Summary = new SummaryBuilder()
            .content(content)
            .style(cachedStyle)
            .build();

        const controller = new SummaryController();
        controller.updateSummary(summary);
        sessionStorage.setItem('summary_html', summary.content.innerHTML);
        sessionStorage.setItem('summary_css', cachedStyle);
        StyleListBtns.updateBtn(cachedStyle);
    }
}