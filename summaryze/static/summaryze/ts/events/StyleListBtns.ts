import { Summary } from '../models/index';
import { SummaryBuilder } from '../builder/SummaryBuilder';
import { SummaryController } from '../controllers/index';
import { ObjectUtils } from '../utils/index';

/**
 * Buttons that changes style of a summary and its state to clicked.
 */

export class StyleListBtns {

    /**
     * Changes the style of a summary when the button is pressed.
     * @param event that contains the button/style id
     */
    applyStyle(event: Event): void {
        const newStyleId: string = (<HTMLElement>event.target).id;
        const summary_text = sessionStorage.getItem('summary_html') as string;

        if (ObjectUtils.nonExists(summary_text)) {
            return;
        }

        const summary: Summary = new SummaryBuilder()
            .content(summary_text)
            .style(newStyleId)
            .build();

        const summaryController: SummaryController = new SummaryController();
        summaryController.updateSummary(summary);
        
        StyleListBtns.updateBtn(newStyleId);
    }


    /**
     * Hightlights a selected style by id
     * @param styleId of style
     */
    static updateBtn(styleId: string): void {
        const btn = document.querySelector(`#${styleId}`) as HTMLElement;
        const btns = document.querySelectorAll('.style-list-item');
        
        btns.forEach((btn) => {
            if (btn.classList.contains('style-list-item-active')) {
                btn.classList.remove('style-list-item-active');
            }
        });

        btn.classList.add('style-list-item-active');
        sessionStorage.setItem('summary_css', styleId);
    }
}