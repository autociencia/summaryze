import { ObjectUtils } from '../utils/index';

/**
 * Loads the selected summary style before refresh from sessionStorage and append to style menu.
 */

export class StyleListBtnsCache {

    /**
     * Loads the selected style before refresh on style list.   
     */
    loadCache(): void {
        const styleId = sessionStorage.getItem('summary_css') as string;

        if (ObjectUtils.nonExists(styleId)) {
            return;
        }

        const btnStyle = document.querySelector(`#${styleId}`) as HTMLElement;

        if (ObjectUtils.exists(btnStyle)) {
            btnStyle.classList.add('style-list-item-active');
        }

    }
}