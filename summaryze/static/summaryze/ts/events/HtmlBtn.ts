import { SummaryBuilder } from '../builder/SummaryBuilder';
import { Summary } from '../models/index';
import { SummaryController } from '../controllers/index';
import { ObjectUtils } from '../utils/index';

/**
 * Button shows the HTML code of the summary.
 */

export class HtmlBtn {

    showHTML(): void {
        const content = sessionStorage.getItem('summary_html') as string;

        if (ObjectUtils.nonExists(content)) {
            return;
        }

        const summary: Summary = new SummaryBuilder().content(content).build();
        const controller: SummaryController = new SummaryController();

        controller.updateHTML(summary);
    }
}