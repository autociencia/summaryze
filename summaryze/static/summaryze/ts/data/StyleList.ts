import { Style } from '../models/index';
import { ObjectUtils } from '../utils/index';

/**
 * All styles is stored here.
 */

export class StyleList {

    /**
     * Gets all styles.
     * @returns a list of styles
     */
    getAll(): Style[] {
        return [
            {
                id: 'default',
                name: 'Default',
                content: ''
            },
            {
                id: 'autociencia',
                name: 'Autociência',
                content: `
                /*---Summary of Articles---*/
                .summary-post {
                    &nbsp;&nbsp;&nbsp;&nbsp;box-shadow: -2px 6px 2px #E0E0E0;
                    &nbsp;&nbsp;&nbsp;&nbsp;line-height: 32px;
                    &nbsp;&nbsp;&nbsp;&nbsp;display: inline-block;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-bottom: 20px;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-bottom-left-radius: 5px;
                }
                .summary-post a {
                    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: none;
                }
                .summary-post a:link, .summary-post a:visited {
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #1d8549 !important;
                }
                .summary-post a:hover, {
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #2C3E50 !important;
                }
                .summary-post ol {
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-reset: item;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-top: 0;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 10px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding-left: 0;
                }
                .summary-post b {
                    &nbsp;&nbsp;&nbsp;&nbsp;padding-left: 20px;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 14pt;
                }
                .summary-post li {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: block
                }
                .summary-post li:before {
                    &nbsp;&nbsp;&nbsp;&nbsp;content: counters(item, ".") " ";
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-increment: item
                }
                /*---End - Summary of Articles---*/`
            }
        ];
    }


    /**
     * Gets a style by id.
     * @param styleId style id
     * @returns a style
     */
    get(styleId: string): Style {
        const style = this.getAll().find((s) => s.id === styleId) as Style;
        
        if (ObjectUtils.nonExists(style)) {
            throw `"${styleId}" not found`;
        }

        return style;
    }
}