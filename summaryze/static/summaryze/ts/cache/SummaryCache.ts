import { SummaryBuilder } from '../builder/index';
import { Summary } from '../models/index';
import { SummaryController } from '../controllers/index';
import { ObjectUtils } from '../utils/index';

/**
 * Loads summary content from sessionStorage and append to html page.
 */

export class SummaryCache {

    /**
     * Loads the summary and style before refresh on style list.
     */
    loadCache(): void {
        const content = sessionStorage.getItem('summary_html') as string;
        const styleId = sessionStorage.getItem('summary_css') as string;

        if (ObjectUtils.nonExists(content) || ObjectUtils.nonExists(styleId)) {
            return;
        }

        const summary: Summary = new SummaryBuilder().content(content).style(styleId).build();
        const controller: SummaryController = new SummaryController();

        controller.updateSummary(summary);
    }
}