import { SummaryController } from '../controllers/index';
import { StyleList } from '../data/index';
import { Style } from '../models/index';
import { ObjectUtils } from '../utils/index';

/**
 * Button shows the CSS code of the summary.
 */

export class CssBtn {

    showCSS(): void {
        const styleId = sessionStorage.getItem('summary_css') as string;

        if (ObjectUtils.nonExists(styleId)) {
            return;
        }

        const style: Style = new StyleList().get(styleId);
        const controller: SummaryController = new SummaryController();

        controller.updateCSS(style);
    }
}