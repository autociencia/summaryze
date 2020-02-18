import { SummaryBuilder } from '../builder/SummaryBuilder';
import { Summary } from '../models/index';
import { SummaryController } from '../controllers/index';

export class SummaryCache {

    /**
     * Loads summary content from sessionStorage and append to html page.
     */

    loadCache(): void {
        const summary_text = sessionStorage.getItem('summary_html') as string;

        if (summary_text === '' || undefined) {
            return;
        }

        const summary: Summary = new SummaryBuilder().content(summary_text).build();
        const controller: SummaryController = new SummaryController();

        controller.updateSummary(summary);   
    }
}