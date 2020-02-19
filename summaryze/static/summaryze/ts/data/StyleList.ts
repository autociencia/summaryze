import { Style } from "../models/index";

export class StyleList {
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
                    &nbsp;&nbsp;&nbsp;&nbsp;padding-left: 10px;
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

    get(styleId: string): Style {
        return this.getAll().filter((s) => s.id === styleId)[0];
    }
}