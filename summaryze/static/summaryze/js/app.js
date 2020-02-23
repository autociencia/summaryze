System.register("summaryze/static/summaryze/ts/http/HttpClient", [], function (exports_1, context_1) {
    "use strict";
    var HttpClient;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            HttpClient = class HttpClient {
                fetchPage(url, callback, errorFunction) {
                    $.ajax({
                        type: 'GET',
                        cache: false,
                        url: url,
                        success: (data) => callback(data),
                        dataType: 'html',
                        contentType: 'text',
                        error: (response) => errorFunction(response.responseText)
                    });
                }
            };
            exports_1("HttpClient", HttpClient);
        }
    };
});
System.register("summaryze/static/summaryze/ts/http/index", ["summaryze/static/summaryze/ts/http/HttpClient"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_2(exports);
    }
    return {
        setters: [
            function (HttpClient_1_1) {
                exportStar_1(HttpClient_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/models/Summary", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/models/Style", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/models/index", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/views/SummaryView", ["prismjs"], function (exports_6, context_6) {
    "use strict";
    var prismjs_1, SummaryView;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (prismjs_1_1) {
                prismjs_1 = prismjs_1_1;
            }
        ],
        execute: function () {
            SummaryView = class SummaryView {
                constructor() {
                    this._element = $('#summary-content');
                }
                updateSummary(summary) {
                    const template = this.templateSummary(summary);
                    this._element.html(template);
                }
                updateHTML(summary) {
                    const template = this.templateHTML(summary);
                    this._element.html(template);
                    const code = document.querySelector('.language-markup');
                    prismjs_1.default.highlightElement(code);
                }
                updateCSS(style) {
                    const template = this.templateCSS(style);
                    this._element.html(template);
                    const code = document.querySelector('.language-css');
                    prismjs_1.default.highlightElement(code);
                }
                templateSummary(summary) {
                    let strStyle = '';
                    if (summary.style !== undefined) {
                        strStyle = summary.style.content;
                    }
                    return `
            <style>${strStyle}</style>
            ${summary.content.innerHTML}
        `;
                }
                templateHTML(summary) {
                    let strSummary = summary.content.innerHTML
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;");
                    return `
            <pre><code class="language-markup">${strSummary}</code></pre>
        `;
                }
                templateCSS(style) {
                    let strStyle = style.content.replace(/^\s+/gm, '');
                    return `
            <pre><code class="language-css">${strStyle}</code></pre>
        `;
                }
            };
            exports_6("SummaryView", SummaryView);
        }
    };
});
System.register("summaryze/static/summaryze/ts/views/StyleListView", [], function (exports_7, context_7) {
    "use strict";
    var StyleListView;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
            StyleListView = class StyleListView {
                constructor() {
                    this._element = $('#style-list');
                }
                update(styles) {
                    const strStyles = styles.map((style) => this.template(style)).join('');
                    this._element.html(strStyles);
                }
                template(style) {
                    return `<span id="${style.id}" class="style-list-item" title='Change current style to "${style.name}"'>${style.name}</span>`;
                }
            };
            exports_7("StyleListView", StyleListView);
        }
    };
});
System.register("summaryze/static/summaryze/ts/views/NotificationView", [], function (exports_8, context_8) {
    "use strict";
    var NotificationView;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {
            NotificationView = class NotificationView {
                constructor() {
                    this._element = $('#notification-area');
                }
                updateError(error) {
                    const template = this.templateError(error);
                    this._element.html(template);
                }
                templateError(error) {
                    return `
        <div class="notification is-danger is-light">
            <button class="delete"></button>
            <b>ERROR</b>: ${error}
        </div>
        `;
                }
            };
            exports_8("NotificationView", NotificationView);
        }
    };
});
System.register("summaryze/static/summaryze/ts/views/index", ["summaryze/static/summaryze/ts/views/SummaryView", "summaryze/static/summaryze/ts/views/StyleListView", "summaryze/static/summaryze/ts/views/NotificationView"], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    function exportStar_2(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_9(exports);
    }
    return {
        setters: [
            function (SummaryView_1_1) {
                exportStar_2(SummaryView_1_1);
            },
            function (StyleListView_1_1) {
                exportStar_2(StyleListView_1_1);
            },
            function (NotificationView_1_1) {
                exportStar_2(NotificationView_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/controllers/SummaryController", ["summaryze/static/summaryze/ts/views/index"], function (exports_10, context_10) {
    "use strict";
    var index_1, SummaryController;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            SummaryController = class SummaryController {
                updateSummary(summary) {
                    const view = new index_1.SummaryView();
                    view.updateSummary(summary);
                }
                updateHTML(summary) {
                    const view = new index_1.SummaryView();
                    view.updateHTML(summary);
                }
                updateCSS(style) {
                    const view = new index_1.SummaryView();
                    view.updateCSS(style);
                }
            };
            exports_10("SummaryController", SummaryController);
        }
    };
});
System.register("summaryze/static/summaryze/ts/utils/ObjectUtils", [], function (exports_11, context_11) {
    "use strict";
    var ObjectUtils;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [],
        execute: function () {
            ObjectUtils = class ObjectUtils {
                constructor() {
                    throw new Error(`${ObjectUtils.name} cannot be instantiated`);
                }
                static exists(obj) {
                    return !(obj === null || obj === undefined || obj === '' || obj === false || obj === []);
                }
                static nonExists(obj) {
                    return !ObjectUtils.exists(obj);
                }
            };
            exports_11("ObjectUtils", ObjectUtils);
        }
    };
});
System.register("summaryze/static/summaryze/ts/utils/index", ["summaryze/static/summaryze/ts/utils/ObjectUtils"], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    function exportStar_3(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_12(exports);
    }
    return {
        setters: [
            function (ObjectUtils_1_1) {
                exportStar_3(ObjectUtils_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/data/StyleList", ["summaryze/static/summaryze/ts/utils/index"], function (exports_13, context_13) {
    "use strict";
    var index_2, StyleList;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            StyleList = class StyleList {
                getAll() {
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
                get(styleId) {
                    const style = this.getAll().find((s) => s.id === styleId);
                    if (index_2.ObjectUtils.nonExists(style)) {
                        throw `"${styleId}" not found`;
                    }
                    return style;
                }
            };
            exports_13("StyleList", StyleList);
        }
    };
});
System.register("summaryze/static/summaryze/ts/data/index", ["summaryze/static/summaryze/ts/data/StyleList"], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    function exportStar_4(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_14(exports);
    }
    return {
        setters: [
            function (StyleList_1_1) {
                exportStar_4(StyleList_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/controllers/StyleListController", ["summaryze/static/summaryze/ts/data/index", "summaryze/static/summaryze/ts/views/index"], function (exports_15, context_15) {
    "use strict";
    var index_3, index_4, StyleListController;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            }
        ],
        execute: function () {
            StyleListController = class StyleListController {
                updateStyleList() {
                    const styleList = new index_3.StyleList();
                    const view = new index_4.StyleListView();
                    view.update(styleList.getAll());
                }
            };
            exports_15("StyleListController", StyleListController);
        }
    };
});
System.register("summaryze/static/summaryze/ts/controllers/NotificationController", ["summaryze/static/summaryze/ts/views/index"], function (exports_16, context_16) {
    "use strict";
    var index_5, NotificationController;
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            NotificationController = class NotificationController {
                updateError(error) {
                    const view = new index_5.NotificationView();
                    view.updateError(error);
                }
            };
            exports_16("NotificationController", NotificationController);
        }
    };
});
System.register("summaryze/static/summaryze/ts/controllers/index", ["summaryze/static/summaryze/ts/controllers/SummaryController", "summaryze/static/summaryze/ts/controllers/StyleListController", "summaryze/static/summaryze/ts/controllers/NotificationController"], function (exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    function exportStar_5(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_17(exports);
    }
    return {
        setters: [
            function (SummaryController_1_1) {
                exportStar_5(SummaryController_1_1);
            },
            function (StyleListController_1_1) {
                exportStar_5(StyleListController_1_1);
            },
            function (NotificationController_1_1) {
                exportStar_5(NotificationController_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/builder/SummaryBuilder", ["summaryze/static/summaryze/ts/data/index"], function (exports_18, context_18) {
    "use strict";
    var index_6, SummaryBuilder;
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [
            function (index_6_1) {
                index_6 = index_6_1;
            }
        ],
        execute: function () {
            SummaryBuilder = class SummaryBuilder {
                content(content) {
                    let htmlContent = document.createElement('div');
                    htmlContent.innerHTML = content;
                    this._summary = {
                        content: htmlContent
                    };
                    return this;
                }
                style(styleId) {
                    this._summary.style = new index_6.StyleList().get(styleId);
                    return this;
                }
                build() {
                    return this._summary;
                }
            };
            exports_18("SummaryBuilder", SummaryBuilder);
        }
    };
});
System.register("summaryze/static/summaryze/ts/builder/index", ["summaryze/static/summaryze/ts/builder/SummaryBuilder"], function (exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    function exportStar_6(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_19(exports);
    }
    return {
        setters: [
            function (SummaryBuilder_1_1) {
                exportStar_6(SummaryBuilder_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/events/NotificationEvent", ["summaryze/static/summaryze/ts/controllers/index"], function (exports_20, context_20) {
    "use strict";
    var index_7, NotificationEvent;
    var __moduleName = context_20 && context_20.id;
    return {
        setters: [
            function (index_7_1) {
                index_7 = index_7_1;
            }
        ],
        execute: function () {
            NotificationEvent = class NotificationEvent {
                notifyError(message) {
                    const controller = new index_7.NotificationController();
                    controller.updateError(message);
                    NotificationEvent.addCloseEvent();
                }
                static addCloseEvent() {
                    $('.notification .delete').on('click', (del) => {
                        const notification = del.target.parentNode;
                        notification.remove();
                    });
                }
            };
            exports_20("NotificationEvent", NotificationEvent);
        }
    };
});
System.register("summaryze/static/summaryze/ts/events/SearchBtn", ["summaryze/static/summaryze/ts/http/index", "summaryze/static/summaryze/ts/controllers/index", "summaryze/static/summaryze/ts/builder/index", "summaryze/static/summaryze/ts/events/index", "summaryze/static/summaryze/ts/utils/index", "summaryze/static/summaryze/ts/events/NotificationEvent"], function (exports_21, context_21) {
    "use strict";
    var index_8, index_9, index_10, index_11, index_12, NotificationEvent_1, SearchBtn;
    var __moduleName = context_21 && context_21.id;
    return {
        setters: [
            function (index_8_1) {
                index_8 = index_8_1;
            },
            function (index_9_1) {
                index_9 = index_9_1;
            },
            function (index_10_1) {
                index_10 = index_10_1;
            },
            function (index_11_1) {
                index_11 = index_11_1;
            },
            function (index_12_1) {
                index_12 = index_12_1;
            },
            function (NotificationEvent_1_1) {
                NotificationEvent_1 = NotificationEvent_1_1;
            }
        ],
        execute: function () {
            SearchBtn = class SearchBtn {
                searchAndShowSummary() {
                    const btn = document.querySelector('#url-search');
                    const url_input = document.querySelector('#url-input');
                    if (index_12.ObjectUtils.nonExists(btn) || index_12.ObjectUtils.nonExists(url_input)) {
                        throw 'Error: a problem ocurred in search box';
                    }
                    const url = url_input.value.trim();
                    if (url === "") {
                        return;
                    }
                    const endpoint = `/summary?url=${url}`;
                    const httpClient = new index_8.HttpClient();
                    const errorFunction = new NotificationEvent_1.NotificationEvent().notifyError;
                    httpClient.fetchPage(endpoint, SearchBtn.fetchEvent, errorFunction);
                }
                static fetchEvent(content) {
                    let cachedStyle = sessionStorage.getItem('summary_css');
                    if (index_12.ObjectUtils.nonExists(cachedStyle)) {
                        cachedStyle = 'default';
                    }
                    const summary = new index_10.SummaryBuilder()
                        .content(content)
                        .style(cachedStyle)
                        .build();
                    const controller = new index_9.SummaryController();
                    controller.updateSummary(summary);
                    sessionStorage.setItem('summary_html', summary.content.innerHTML);
                    sessionStorage.setItem('summary_css', cachedStyle);
                    index_11.StyleListBtns.updateBtn(cachedStyle);
                }
            };
            exports_21("SearchBtn", SearchBtn);
        }
    };
});
System.register("summaryze/static/summaryze/ts/events/HtmlBtn", ["summaryze/static/summaryze/ts/builder/index", "summaryze/static/summaryze/ts/controllers/index", "summaryze/static/summaryze/ts/utils/index"], function (exports_22, context_22) {
    "use strict";
    var index_13, index_14, index_15, HtmlBtn;
    var __moduleName = context_22 && context_22.id;
    return {
        setters: [
            function (index_13_1) {
                index_13 = index_13_1;
            },
            function (index_14_1) {
                index_14 = index_14_1;
            },
            function (index_15_1) {
                index_15 = index_15_1;
            }
        ],
        execute: function () {
            HtmlBtn = class HtmlBtn {
                showHTML() {
                    const content = sessionStorage.getItem('summary_html');
                    if (index_15.ObjectUtils.nonExists(content)) {
                        return;
                    }
                    const summary = new index_13.SummaryBuilder().content(content).build();
                    const controller = new index_14.SummaryController();
                    controller.updateHTML(summary);
                }
            };
            exports_22("HtmlBtn", HtmlBtn);
        }
    };
});
System.register("summaryze/static/summaryze/ts/events/CssBtn", ["summaryze/static/summaryze/ts/controllers/index", "summaryze/static/summaryze/ts/data/index", "summaryze/static/summaryze/ts/utils/index"], function (exports_23, context_23) {
    "use strict";
    var index_16, index_17, index_18, CssBtn;
    var __moduleName = context_23 && context_23.id;
    return {
        setters: [
            function (index_16_1) {
                index_16 = index_16_1;
            },
            function (index_17_1) {
                index_17 = index_17_1;
            },
            function (index_18_1) {
                index_18 = index_18_1;
            }
        ],
        execute: function () {
            CssBtn = class CssBtn {
                showCSS() {
                    const styleId = sessionStorage.getItem('summary_css');
                    if (index_18.ObjectUtils.nonExists(styleId)) {
                        return;
                    }
                    const style = new index_17.StyleList().get(styleId);
                    const controller = new index_16.SummaryController();
                    controller.updateCSS(style);
                }
            };
            exports_23("CssBtn", CssBtn);
        }
    };
});
System.register("summaryze/static/summaryze/ts/events/StyleListBtns", ["summaryze/static/summaryze/ts/builder/SummaryBuilder", "summaryze/static/summaryze/ts/controllers/index", "summaryze/static/summaryze/ts/utils/index"], function (exports_24, context_24) {
    "use strict";
    var SummaryBuilder_2, index_19, index_20, StyleListBtns;
    var __moduleName = context_24 && context_24.id;
    return {
        setters: [
            function (SummaryBuilder_2_1) {
                SummaryBuilder_2 = SummaryBuilder_2_1;
            },
            function (index_19_1) {
                index_19 = index_19_1;
            },
            function (index_20_1) {
                index_20 = index_20_1;
            }
        ],
        execute: function () {
            StyleListBtns = class StyleListBtns {
                applyStyle(event) {
                    const newStyleId = event.target.id;
                    const summary_text = sessionStorage.getItem('summary_html');
                    if (index_20.ObjectUtils.nonExists(summary_text)) {
                        return;
                    }
                    const summary = new SummaryBuilder_2.SummaryBuilder()
                        .content(summary_text)
                        .style(newStyleId)
                        .build();
                    const summaryController = new index_19.SummaryController();
                    summaryController.updateSummary(summary);
                    StyleListBtns.updateBtn(newStyleId);
                }
                static updateBtn(styleId) {
                    const btn = document.querySelector(`#${styleId}`);
                    const btns = document.querySelectorAll('.style-list-item');
                    btns.forEach((btn) => {
                        if (btn.classList.contains('style-list-item-active')) {
                            btn.classList.remove('style-list-item-active');
                        }
                    });
                    btn.classList.add('style-list-item-active');
                    sessionStorage.setItem('summary_css', styleId);
                }
            };
            exports_24("StyleListBtns", StyleListBtns);
        }
    };
});
System.register("summaryze/static/summaryze/ts/events/index", ["summaryze/static/summaryze/ts/events/SearchBtn", "summaryze/static/summaryze/ts/events/HtmlBtn", "summaryze/static/summaryze/ts/events/CssBtn", "summaryze/static/summaryze/ts/events/StyleListBtns", "summaryze/static/summaryze/ts/events/NotificationEvent"], function (exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
    function exportStar_7(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_25(exports);
    }
    return {
        setters: [
            function (SearchBtn_1_1) {
                exportStar_7(SearchBtn_1_1);
            },
            function (HtmlBtn_1_1) {
                exportStar_7(HtmlBtn_1_1);
            },
            function (CssBtn_1_1) {
                exportStar_7(CssBtn_1_1);
            },
            function (StyleListBtns_1_1) {
                exportStar_7(StyleListBtns_1_1);
            },
            function (NotificationEvent_2_1) {
                exportStar_7(NotificationEvent_2_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/cache/SummaryCache", ["summaryze/static/summaryze/ts/builder/index", "summaryze/static/summaryze/ts/controllers/index", "summaryze/static/summaryze/ts/utils/index"], function (exports_26, context_26) {
    "use strict";
    var index_21, index_22, index_23, SummaryCache;
    var __moduleName = context_26 && context_26.id;
    return {
        setters: [
            function (index_21_1) {
                index_21 = index_21_1;
            },
            function (index_22_1) {
                index_22 = index_22_1;
            },
            function (index_23_1) {
                index_23 = index_23_1;
            }
        ],
        execute: function () {
            SummaryCache = class SummaryCache {
                loadCache() {
                    const content = sessionStorage.getItem('summary_html');
                    const styleId = sessionStorage.getItem('summary_css');
                    if (index_23.ObjectUtils.nonExists(content) || index_23.ObjectUtils.nonExists(styleId)) {
                        return;
                    }
                    const summary = new index_21.SummaryBuilder().content(content).style(styleId).build();
                    const controller = new index_22.SummaryController();
                    controller.updateSummary(summary);
                }
            };
            exports_26("SummaryCache", SummaryCache);
        }
    };
});
System.register("summaryze/static/summaryze/ts/cache/ChangeStyleBtnCache", ["summaryze/static/summaryze/ts/utils/index"], function (exports_27, context_27) {
    "use strict";
    var index_24, StyleListBtnsCache;
    var __moduleName = context_27 && context_27.id;
    return {
        setters: [
            function (index_24_1) {
                index_24 = index_24_1;
            }
        ],
        execute: function () {
            StyleListBtnsCache = class StyleListBtnsCache {
                loadCache() {
                    const styleId = sessionStorage.getItem('summary_css');
                    if (index_24.ObjectUtils.nonExists(styleId)) {
                        return;
                    }
                    const btnStyle = document.querySelector(`#${styleId}`);
                    if (index_24.ObjectUtils.exists(btnStyle)) {
                        btnStyle.classList.add('style-list-item-active');
                    }
                }
            };
            exports_27("StyleListBtnsCache", StyleListBtnsCache);
        }
    };
});
System.register("summaryze/static/summaryze/ts/cache/index", ["summaryze/static/summaryze/ts/cache/SummaryCache", "summaryze/static/summaryze/ts/cache/ChangeStyleBtnCache"], function (exports_28, context_28) {
    "use strict";
    var __moduleName = context_28 && context_28.id;
    function exportStar_8(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_28(exports);
    }
    return {
        setters: [
            function (SummaryCache_1_1) {
                exportStar_8(SummaryCache_1_1);
            },
            function (ChangeStyleBtnCache_1_1) {
                exportStar_8(ChangeStyleBtnCache_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/app", ["summaryze/static/summaryze/ts/events/index", "summaryze/static/summaryze/ts/cache/index", "summaryze/static/summaryze/ts/controllers/index"], function (exports_29, context_29) {
    "use strict";
    var index_25, index_26, index_27, App;
    var __moduleName = context_29 && context_29.id;
    return {
        setters: [
            function (index_25_1) {
                index_25 = index_25_1;
            },
            function (index_26_1) {
                index_26 = index_26_1;
            },
            function (index_27_1) {
                index_27 = index_27_1;
            }
        ],
        execute: function () {
            App = class App {
                start() {
                    this.loadStyleList();
                    this.loadCache();
                    this.addBtnEvents();
                }
                loadCache() {
                    const summaryCache = new index_26.SummaryCache();
                    const changeStyleBtnCache = new index_26.StyleListBtnsCache();
                    summaryCache.loadCache();
                    changeStyleBtnCache.loadCache();
                }
                loadStyleList() {
                    const controller = new index_27.StyleListController();
                    controller.updateStyleList();
                }
                addBtnEvents() {
                    const btnUrlSearch = document.querySelector('#url-search');
                    const btnShowSummary = document.querySelector('#summary-btn');
                    const btnShowHTML = document.querySelector('#html-btn');
                    const btnShowCSS = document.querySelector('#css-btn');
                    const summarySearch = new index_25.SearchBtn();
                    const summaryCache = new index_26.SummaryCache();
                    const summaryHTML = new index_25.HtmlBtn();
                    const summaryCSS = new index_25.CssBtn();
                    btnUrlSearch.addEventListener('click', summarySearch.searchAndShowSummary);
                    btnShowSummary.addEventListener('click', summaryCache.loadCache);
                    btnShowHTML.addEventListener('click', summaryHTML.showHTML);
                    btnShowCSS.addEventListener('click', summaryCSS.showCSS);
                    const btnsStyleList = document.querySelectorAll('.style-list-item');
                    btnsStyleList.forEach((btn) => {
                        const event = new index_25.StyleListBtns();
                        btn.addEventListener('click', event.applyStyle);
                    });
                }
            };
            exports_29("App", App);
        }
    };
});
//# sourceMappingURL=app.js.map