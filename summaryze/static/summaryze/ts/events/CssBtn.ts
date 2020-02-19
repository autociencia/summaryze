import { SummaryController } from '../controllers/index';
import { StyleList } from '../data/index';
import { Style } from '../models/index';

export class CssBtn {
    showCSS(): void {
        const styleId = sessionStorage.getItem('summary_css') as string;

        if (styleId == '' || styleId == undefined || styleId == null) {
            return;
        }

        const style: Style = new StyleList().get(styleId);
        const controller: SummaryController = new SummaryController();

        controller.updateCSS(style);
    }
}