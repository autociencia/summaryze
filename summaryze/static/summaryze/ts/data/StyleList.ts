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
                    &nbsp;&nbsp;&nbsp;&nbsp;font-family: sans-serif;
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
                .summary-post a:hover {
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
            },
            {
                id: 'wikipedia',
                name: 'Wikipedia',
                content: `
                /*---Summary of Articles---*/
                .summary-post {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: inline-block;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-bottom: 20px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 7px;
                    &nbsp;&nbsp;&nbsp;&nbsp;line-height: 25px;
                    &nbsp;&nbsp;&nbsp;&nbsp;background-color: #f8f9fa;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-family: sans-serif;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 14px;
                    &nbsp;&nbsp;&nbsp;&nbsp;border: 1px solid #a2a9b1;
                }
                .summary-post a {
                    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: none;
                }
                .summary-post a:link, .summary-post a:visited {
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #0645ad !important;
                }
                .summary-post a:hover {
                    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: underline;
                }
                .summary-post ol {
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-reset: item;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-top: 0;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 10px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding-left: 0;
                }
                .summary-post b {
                    &nbsp;&nbsp;&nbsp;&nbsp;padding-left: 20px;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 16px;
                }
                .summary-post li {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: block
                }
                .summary-post li:before {
                    &nbsp;&nbsp;&nbsp;&nbsp;content: counters(item, ".") " ";
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-increment: item
                }
                /*---End - Summary of Articles---*/
                `
            },
            {
                id: 'simple-blue',
                name: 'Simple Blue',
                content: `
                /*---Summary of Articles---*/
                .summary-post {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: inline-block;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-bottom: 20px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 7px;
                    &nbsp;&nbsp;&nbsp;&nbsp;line-height: 30px;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-family: sans-serif;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 13pt;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-left: 5px solid #027DFF;
                }
                .summary-post a {
                    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: none;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-bottom: 2px solid transparent;
                }
                .summary-post a:link, .summary-post a:visited {
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #333 !important;
                }
                .summary-post a:hover {
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #027DFF !important;
                }
                .summary-post ol {
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-reset: item;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-top: 0;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 10px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding-left: 0;
                }
                .summary-post b {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: inline-block;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 20px;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-bottom: 10px;
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #027DFF;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 14pt;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-bottom: 2px solid #027DFF;
                }
                .summary-post li {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: block
                }
                .summary-post li:before {
                    &nbsp;&nbsp;&nbsp;&nbsp;content: counters(item, ".") " ";
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-increment: item
                }
                /*---End - Summary of Articles---*/
                `
            },
            {
                id: 'little-girl',
                name: 'Litle Girl',
                content: `
                /*---Summary of Articles---*/
                .summary-post {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: inline-block;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-bottom: 20px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 7px;
                    &nbsp;&nbsp;&nbsp;&nbsp;line-height: 25px;
                    &nbsp;&nbsp;&nbsp;&nbsp;background-color: #FFE4F5;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-family: serif;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 14pt;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-radius: 15px;
                    &nbsp;&nbsp;&nbsp;&nbsp;box-shadow: 2px 3px 15px #FFA4DD;
                }
                .summary-post a {
                    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: none;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-bottom: 2px solid transparent;
                }
                .summary-post a:link, .summary-post a:visited {
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #FA67C3 !important;
                    &nbsp;&nbsp;&nbsp;&nbsp;transition: ease-in 0.1s;
                }
                .summary-post a:hover {
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #AD006C !important;
                    &nbsp;&nbsp;&nbsp;&nbsp;transition: ease-in 0.1s;
                }
                .summary-post ol {
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-reset: item;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-top: 0;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 10px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding-left: 0;
                }
                .summary-post b {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: block;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 20px;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 16pt;
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #FA67C3;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-bottom: 2px solid #FA67C3;
                }
                .summary-post li {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: block
                }
                .summary-post li:before {
                    &nbsp;&nbsp;&nbsp;&nbsp;content: counters(item, ".") " ";
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-increment: item;
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #FF32B2;
                }
                /*---End - Summary of Articles---*/
                `
            },
            {
                id: 'green-land',
                name: 'Green Land',
                content: `
                /*---Summary of Articles---*/
                .summary-post {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: inline-block;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-bottom: 20px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 7px;
                    &nbsp;&nbsp;&nbsp;&nbsp;line-height: 30px;
                    &nbsp;&nbsp;&nbsp;&nbsp;background-color: #F0F0F0;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-family: sans-serif;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 12pt;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-radius: 15px;
                    &nbsp;&nbsp;&nbsp;&nbsp;border: 1px solid #ddd;
                }
                .summary-post a {
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: none;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-bottom: 2px solid transparent;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-radius: 3px;
                }
                .summary-post a:link, .summary-post a:visited {
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #333 !important;
                    &nbsp;&nbsp;&nbsp;&nbsp;transition: ease-in 0.1s;
                }
                .summary-post a:hover {
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #fff !important;
                    &nbsp;&nbsp;&nbsp;&nbsp;background-color: #21C500;
                    &nbsp;&nbsp;&nbsp;&nbsp;transition: ease-in 0.1s;
                }
                .summary-post ol {
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-reset: item;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-top: 0;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 10px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding-left: 0;
                }
                .summary-post b {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: block;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 16pt;
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #fff;
                    &nbsp;&nbsp;&nbsp;&nbsp;background: #21C500;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-top-left-radius: 15px;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-top-right-radius: 15px;
                    &nbsp;&nbsp;&nbsp;&nbsp;text-align: center;
                }
                .summary-post li {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: block
                }
                .summary-post li:before {
                    &nbsp;&nbsp;&nbsp;&nbsp;content: counters(item, ".") " ";
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-increment: item;
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #147A00;
                }
                /*---End - Summary of Articles---*/
                `
            },
            {
                id: 'everything-pink',
                name: 'Everything is Pink',
                content: `
                /*---Summary of Articles---*/
                .summary-post {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: inline-block;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-bottom: 20px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 7px;
                    &nbsp;&nbsp;&nbsp;&nbsp;line-height: 25px;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-family: sans-serif;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 11pt;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-bottom: 3px dashed #FF00A0;
                }
                .summary-post a {
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: none;
                    &nbsp;&nbsp;&nbsp;&nbsp; border-bottom: 3px solid transparent;
                }
                .summary-post a:link, .summary-post a:visited {
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #FF00A0 !important;
                    &nbsp;&nbsp;&nbsp;&nbsp;transition: 0.3s;
                }
                .summary-post a:hover {
                    &nbsp;&nbsp;&nbsp;&nbsp;border-bottom: 2px solid #FF00A0;
                    &nbsp;&nbsp;&nbsp;&nbsp;transition: 0.3s;
                }
                .summary-post ol {
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-reset: item;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-top: 0;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 10px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding-left: 0;
                }
                .summary-post b {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: block;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 16pt;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #FF00A0;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-bottom: 3px dashed #FF00A0;
                    &nbsp;&nbsp;&nbsp;&nbsp;text-align: center;
                }
                .summary-post li {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: block
                }
                .summary-post li:before {
                    &nbsp;&nbsp;&nbsp;&nbsp;content: counters(item, ".") " ";
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-increment: item;
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #AD0D71;
                }
                /*---End - Summary of Articles---*/
                `
            },
            {
                id: 'cherry',
                name: 'Cherry',
                content: `
                /*---Summary of Articles---*/
                .summary-post {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: inline-block;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-bottom: 20px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 7px;
                    &nbsp;&nbsp;&nbsp;&nbsp;line-height: 30px;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-family: sans-serif;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 12pt;
                    &nbsp;&nbsp;&nbsp;&nbsp;box-shadow: 0 3px 15px #dbdbdb;
                }
                .summary-post a {
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: none;
                }
                .summary-post a:link, .summary-post a:visited {
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #7a7a7a !important;
                    &nbsp;&nbsp;&nbsp;&nbsp;transition: 0.3s;
                }
                .summary-post a:hover {
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #FF00A0 !important;
                    &nbsp;&nbsp;&nbsp;&nbsp;transition: 0.3s;
                }
                .summary-post ol {
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-reset: item;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-top: 0;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 10px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding-left: 0;
                }
                .summary-post b {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: block;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding-left: 15px;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 18pt;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #FF00A0;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-bottom: 3px solid #FF00A0;
                }
                .summary-post li {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: block
                }
                .summary-post li:before {
                    &nbsp;&nbsp;&nbsp;&nbsp;content: counters(item, ".") " ";
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-increment: item;
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #7a7a7a;
                }
                `
            },
            {
                id: 'paper',
                name: 'Paper',
                content: `
                /*---Summary of Articles---*/
                .summary-post {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: inline-block;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-bottom: 20px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 7px;
                    &nbsp;&nbsp;&nbsp;&nbsp;line-height: 30px;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-family: sans-serif;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 12pt;
                    &nbsp;&nbsp;&nbsp;&nbsp;box-shadow: 0 3px 15px #dbdbdb;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-left: 15px dotted rgb(235, 235, 235);
                }
                .summary-post a {
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: none;
                }
                .summary-post a:link, .summary-post a:visited {
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #7a7a7a !important;
                    &nbsp;&nbsp;&nbsp;&nbsp;transition: 0.3s;
                }
                .summary-post a:hover {
                    &nbsp;&nbsp;&nbsp;&nbsp;color: blue !important;
                    &nbsp;&nbsp;&nbsp;&nbsp;transition: 0.3s;
                }
                .summary-post ol {
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-reset: item;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-top: 0;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 0 !important;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding-left: 0 !important;
                }
                .summary-post li {
                    &nbsp;&nbsp;&nbsp;&nbsp;border-top: 1px solid #A8D1DE;
                }
                .summary-post > ol > li:last-child {
                    &nbsp;&nbsp;&nbsp;&nbsp;border-bottom: 1px solid #A8D1DE;
                }
                .summary-post b {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: block;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding-bottom: 0;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 18pt;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #a0a0a0;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-bottom: 3px solid #969696;
                    &nbsp;&nbsp;&nbsp;&nbsp;text-align: right;
                }
                .summary-post b::after, .summary-post b::before  {
                    &nbsp;&nbsp;&nbsp;&nbsp;content: "/";
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #A8D1DE;
                }
                .summary-post li {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: block
                }
                .summary-post li:before {
                    &nbsp;&nbsp;&nbsp;&nbsp;content: counters(item, ".") " ";
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-increment: item;
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #7a7a7a;
                }
                /*---End - Summary of Articles---*/
                `
            },
            {
                id: 'forum',
                name: 'Forum',
                content: `
                /*---Summary of Articles---*/
                .summary-post {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: inline-block;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-bottom: 20px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 7px;
                    &nbsp;&nbsp;&nbsp;&nbsp;line-height: 25px;
                    &nbsp;&nbsp;&nbsp;&nbsp;background-color: #3f3f3f;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-family: sans-serif;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 12pt;
                    &nbsp;&nbsp;&nbsp;&nbsp;border: 1px solid #a2a9b1;
                }
                .summary-post a {
                    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: none;
                }
                .summary-post a:link, .summary-post a:visited {
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #ebebeb !important;
                }
                .summary-post a:hover {
                    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: underline;
                }
                .summary-post ol {
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-reset: item;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-top: 0;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 10px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding-left: 0;
                }
                .summary-post b {
                    &nbsp;&nbsp;&nbsp;&nbsp;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #34c063;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding-left: 20px;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 18pt;
                }
                .summary-post li {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: block
                }
                .summary-post li:before {
                    &nbsp;&nbsp;&nbsp;&nbsp;content: counters(item, ".") " ";
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-increment: item;
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #ebebeb;
                }
                /*---End - Summary of Articles---*/
                `
            },
            {
                id: 'violetta',
                name: 'Violetta',
                content: `
                /*---Summary of Articles---*/
                .summary-post {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: inline-block;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-bottom: 20px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 7px;
                    &nbsp;&nbsp;&nbsp;&nbsp;line-height: 25px;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-family: cursive;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 13pt;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-bottom: 2px dashed #b192ce;
                }
                .summary-post a {
                    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: none;
                    &nbsp;&nbsp;&nbsp;&nbsp;transition: ease-in-out 0.1s;
                }
                .summary-post a:link, .summary-post a:visited {
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #9679B2 !important;
                }
                .summary-post a:hover {
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #6A448E !important;
                    &nbsp;&nbsp;&nbsp;&nbsp;transition: ease-in-out 0.1s;
                }
                .summary-post ol {
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-reset: item;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-top: 0;
                    &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 10px;
                    &nbsp;&nbsp;&nbsp;&nbsp;padding-left: 0;
                }
                .summary-post b {
                    &nbsp;&nbsp;&nbsp;&nbsp;padding: 5px;
                    &nbsp;&nbsp;&nbsp;&nbsp;display: block;
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #6A448E;
                    &nbsp;&nbsp;&nbsp;&nbsp;background-color: #f5f0fa;
                    &nbsp;&nbsp;&nbsp;&nbsp;font-size: 18pt;
                    &nbsp;&nbsp;&nbsp;&nbsp;text-align: center;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-top: #a776d4 2px solid;
                    &nbsp;&nbsp;&nbsp;&nbsp;border-bottom: #a776d4 2px solid;
                }
                .summary-post b::after, .summary-post b::before {
                    &nbsp;&nbsp;&nbsp;&nbsp;content: "×";
                }
                .summary-post li {
                    &nbsp;&nbsp;&nbsp;&nbsp;display: block
                }
                .summary-post li:before {
                    &nbsp;&nbsp;&nbsp;&nbsp;content: counters(item, ".") " ";
                    &nbsp;&nbsp;&nbsp;&nbsp;counter-increment: item;
                    &nbsp;&nbsp;&nbsp;&nbsp;color: #9679B2;
                }
                /*---End - Summary of Articles---*/
                `
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