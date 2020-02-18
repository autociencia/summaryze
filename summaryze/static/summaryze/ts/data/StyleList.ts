import { Style } from "../models/index";

export class StyleList {
    get(): Style[] {
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
                    box-shadow: -2px 6px 2px #E0E0E0;
                    display: inline-block;
                    margin-left: 5px;
                    margin-bottom: 20px;
                    border-bottom-left-radius: 5px;
                }
                .summary-post a:link, .summary-post a:visited {
                    color: #1d8549 !important;
                }
                .summary-post a:hover, {
                    color: #2C3E50 !important;
                }
                .summary-post ol {
                    counter-reset: item;
                    padding-left: 10px;
                }
                .summary-post b {
                    padding-left: 20px;
                    font-size: 14pt;
                }
                .summary-post li {
                    display: block
                }
                .summary-post li:before {
                    content: counters(item, ".") " ";
                    counter-increment: item
                }
                /*---End - Summary of Articles---*/`
            }
        ];
    }
}