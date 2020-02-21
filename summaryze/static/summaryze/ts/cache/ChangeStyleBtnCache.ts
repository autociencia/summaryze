import { ObjectUtils } from '../utils/index';

/**
 * Loads the previous selected summary style from sessionStorage and append to style menu.
 */

export class StyleListBtnsCache {

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