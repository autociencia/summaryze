System.register("summaryze/static/summaryze/ts/http/HttpClient", [], function (exports_1, context_1) {
    "use strict";
    var HttpClient;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            HttpClient = class HttpClient {
                fetchPage(url, callback) {
                    $.ajax({
                        type: 'GET',
                        cache: false,
                        url: url,
                        success: (data) => callback(data),
                        dataType: 'html',
                        contentType: 'text',
                        error: (response) => console.error(response.responseText)
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
System.register("summaryze/static/summaryze/ts/views/index", ["summaryze/static/summaryze/ts/views/SummaryView", "summaryze/static/summaryze/ts/views/StyleListView"], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    function exportStar_2(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_8(exports);
    }
    return {
        setters: [
            function (SummaryView_1_1) {
                exportStar_2(SummaryView_1_1);
            },
            function (StyleListView_1_1) {
                exportStar_2(StyleListView_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/controllers/SummaryController", ["summaryze/static/summaryze/ts/views/index"], function (exports_9, context_9) {
    "use strict";
    var index_1, SummaryController;
    var __moduleName = context_9 && context_9.id;
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
            exports_9("SummaryController", SummaryController);
        }
    };
});
System.register("summaryze/static/summaryze/ts/controllers/index", ["summaryze/static/summaryze/ts/controllers/SummaryController"], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    function exportStar_3(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_10(exports);
    }
    return {
        setters: [
            function (SummaryController_1_1) {
                exportStar_3(SummaryController_1_1);
            }
        ],
        execute: function () {
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
                    return !(obj === null || obj === undefined || obj === '' || obj === false);
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
    function exportStar_4(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_12(exports);
    }
    return {
        setters: [
            function (ObjectUtils_1_1) {
                exportStar_4(ObjectUtils_1_1);
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
    function exportStar_5(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_14(exports);
    }
    return {
        setters: [
            function (StyleList_1_1) {
                exportStar_5(StyleList_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/builder/SummaryBuilder", ["summaryze/static/summaryze/ts/data/index"], function (exports_15, context_15) {
    "use strict";
    var index_3, SummaryBuilder;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [
            function (index_3_1) {
                index_3 = index_3_1;
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
                    this._summary.style = new index_3.StyleList().get(styleId);
                    return this;
                }
                build() {
                    return this._summary;
                }
            };
            exports_15("SummaryBuilder", SummaryBuilder);
        }
    };
});
System.register("summaryze/static/summaryze/ts/events/SearchBtn", ["summaryze/static/summaryze/ts/http/index", "summaryze/static/summaryze/ts/controllers/index", "summaryze/static/summaryze/ts/builder/SummaryBuilder", "summaryze/static/summaryze/ts/events/index", "summaryze/static/summaryze/ts/utils/index"], function (exports_16, context_16) {
    "use strict";
    var index_4, index_5, SummaryBuilder_1, index_6, index_7, SearchBtn;
    var __moduleName = context_16 && context_16.id;
    function fetchEvent(content) {
        let cachedStyle = sessionStorage.getItem('summary_css');
        if (index_7.ObjectUtils.nonExists(cachedStyle)) {
            cachedStyle = 'default';
        }
        const summary = new SummaryBuilder_1.SummaryBuilder()
            .content(content)
            .style(cachedStyle)
            .build();
        const controller = new index_5.SummaryController();
        controller.updateSummary(summary);
        sessionStorage.setItem('summary_html', summary.content.innerHTML);
        sessionStorage.setItem('summary_css', cachedStyle);
        index_6.StyleListBtns.updateBtn(cachedStyle);
    }
    return {
        setters: [
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            },
            function (SummaryBuilder_1_1) {
                SummaryBuilder_1 = SummaryBuilder_1_1;
            },
            function (index_6_1) {
                index_6 = index_6_1;
            },
            function (index_7_1) {
                index_7 = index_7_1;
            }
        ],
        execute: function () {
            SearchBtn = class SearchBtn {
                searchAndShowSummary() {
                    const btn = document.querySelector('#url-search');
                    const url_input = document.querySelector('#url-input');
                    if (index_7.ObjectUtils.nonExists(btn) || index_7.ObjectUtils.nonExists(url_input)) {
                        throw 'Error: a problem ocurred in search box';
                    }
                    const url = url_input.value.trim();
                    if (url === "") {
                        return;
                    }
                    const endpoint = `/summary?url=${url}`;
                    const httpClient = new index_4.HttpClient();
                    httpClient.fetchPage(endpoint, fetchEvent);
                }
            };
            exports_16("SearchBtn", SearchBtn);
        }
    };
});
System.register("summaryze/static/summaryze/ts/events/HtmlBtn", ["summaryze/static/summaryze/ts/builder/SummaryBuilder", "summaryze/static/summaryze/ts/controllers/index", "summaryze/static/summaryze/ts/utils/index"], function (exports_17, context_17) {
    "use strict";
    var SummaryBuilder_2, index_8, index_9, HtmlBtn;
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [
            function (SummaryBuilder_2_1) {
                SummaryBuilder_2 = SummaryBuilder_2_1;
            },
            function (index_8_1) {
                index_8 = index_8_1;
            },
            function (index_9_1) {
                index_9 = index_9_1;
            }
        ],
        execute: function () {
            HtmlBtn = class HtmlBtn {
                showHTML() {
                    const content = sessionStorage.getItem('summary_html');
                    if (index_9.ObjectUtils.nonExists(content)) {
                        return;
                    }
                    const summary = new SummaryBuilder_2.SummaryBuilder().content(content).build();
                    const controller = new index_8.SummaryController();
                    controller.updateHTML(summary);
                }
            };
            exports_17("HtmlBtn", HtmlBtn);
        }
    };
});
System.register("summaryze/static/summaryze/ts/events/CssBtn", ["summaryze/static/summaryze/ts/controllers/index", "summaryze/static/summaryze/ts/data/index", "summaryze/static/summaryze/ts/utils/index"], function (exports_18, context_18) {
    "use strict";
    var index_10, index_11, index_12, CssBtn;
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [
            function (index_10_1) {
                index_10 = index_10_1;
            },
            function (index_11_1) {
                index_11 = index_11_1;
            },
            function (index_12_1) {
                index_12 = index_12_1;
            }
        ],
        execute: function () {
            CssBtn = class CssBtn {
                showCSS() {
                    const styleId = sessionStorage.getItem('summary_css');
                    if (index_12.ObjectUtils.nonExists(styleId)) {
                        return;
                    }
                    const style = new index_11.StyleList().get(styleId);
                    const controller = new index_10.SummaryController();
                    controller.updateCSS(style);
                }
            };
            exports_18("CssBtn", CssBtn);
        }
    };
});
System.register("summaryze/static/summaryze/ts/events/StyleListBtns", ["summaryze/static/summaryze/ts/builder/SummaryBuilder", "summaryze/static/summaryze/ts/controllers/index", "summaryze/static/summaryze/ts/utils/index"], function (exports_19, context_19) {
    "use strict";
    var SummaryBuilder_3, index_13, index_14, StyleListBtns;
    var __moduleName = context_19 && context_19.id;
    return {
        setters: [
            function (SummaryBuilder_3_1) {
                SummaryBuilder_3 = SummaryBuilder_3_1;
            },
            function (index_13_1) {
                index_13 = index_13_1;
            },
            function (index_14_1) {
                index_14 = index_14_1;
            }
        ],
        execute: function () {
            StyleListBtns = class StyleListBtns {
                applyStyle(event) {
                    const newStyleId = event.target.id;
                    const summary_text = sessionStorage.getItem('summary_html');
                    if (index_14.ObjectUtils.nonExists(summary_text)) {
                        return;
                    }
                    const summary = new SummaryBuilder_3.SummaryBuilder()
                        .content(summary_text)
                        .style(newStyleId)
                        .build();
                    const summaryController = new index_13.SummaryController();
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
            exports_19("StyleListBtns", StyleListBtns);
        }
    };
});
System.register("summaryze/static/summaryze/ts/events/index", ["summaryze/static/summaryze/ts/events/SearchBtn", "summaryze/static/summaryze/ts/events/HtmlBtn", "summaryze/static/summaryze/ts/events/CssBtn", "summaryze/static/summaryze/ts/events/StyleListBtns"], function (exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    function exportStar_6(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_20(exports);
    }
    return {
        setters: [
            function (SearchBtn_1_1) {
                exportStar_6(SearchBtn_1_1);
            },
            function (HtmlBtn_1_1) {
                exportStar_6(HtmlBtn_1_1);
            },
            function (CssBtn_1_1) {
                exportStar_6(CssBtn_1_1);
            },
            function (StyleListBtns_1_1) {
                exportStar_6(StyleListBtns_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/cache/SummaryCache", ["summaryze/static/summaryze/ts/builder/SummaryBuilder", "summaryze/static/summaryze/ts/controllers/index", "summaryze/static/summaryze/ts/utils/index"], function (exports_21, context_21) {
    "use strict";
    var SummaryBuilder_4, index_15, index_16, SummaryCache;
    var __moduleName = context_21 && context_21.id;
    return {
        setters: [
            function (SummaryBuilder_4_1) {
                SummaryBuilder_4 = SummaryBuilder_4_1;
            },
            function (index_15_1) {
                index_15 = index_15_1;
            },
            function (index_16_1) {
                index_16 = index_16_1;
            }
        ],
        execute: function () {
            SummaryCache = class SummaryCache {
                loadCache() {
                    const content = sessionStorage.getItem('summary_html');
                    const styleId = sessionStorage.getItem('summary_css');
                    if (index_16.ObjectUtils.nonExists(content) || index_16.ObjectUtils.nonExists(styleId)) {
                        return;
                    }
                    const summary = new SummaryBuilder_4.SummaryBuilder().content(content).style(styleId).build();
                    const controller = new index_15.SummaryController();
                    controller.updateSummary(summary);
                }
            };
            exports_21("SummaryCache", SummaryCache);
        }
    };
});
System.register("summaryze/static/summaryze/ts/cache/ChangeStyleBtnCache", ["summaryze/static/summaryze/ts/utils/index"], function (exports_22, context_22) {
    "use strict";
    var index_17, StyleListBtnsCache;
    var __moduleName = context_22 && context_22.id;
    return {
        setters: [
            function (index_17_1) {
                index_17 = index_17_1;
            }
        ],
        execute: function () {
            StyleListBtnsCache = class StyleListBtnsCache {
                loadCache() {
                    const styleId = sessionStorage.getItem('summary_css');
                    if (index_17.ObjectUtils.nonExists(styleId)) {
                        return;
                    }
                    const btnStyle = document.querySelector(`#${styleId}`);
                    if (index_17.ObjectUtils.exists(btnStyle)) {
                        btnStyle.classList.add('style-list-item-active');
                    }
                }
            };
            exports_22("StyleListBtnsCache", StyleListBtnsCache);
        }
    };
});
System.register("summaryze/static/summaryze/ts/cache/index", ["summaryze/static/summaryze/ts/cache/SummaryCache", "summaryze/static/summaryze/ts/cache/ChangeStyleBtnCache"], function (exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    function exportStar_7(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_23(exports);
    }
    return {
        setters: [
            function (SummaryCache_1_1) {
                exportStar_7(SummaryCache_1_1);
            },
            function (ChangeStyleBtnCache_1_1) {
                exportStar_7(ChangeStyleBtnCache_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/controllers/StyleListController", ["summaryze/static/summaryze/ts/data/index", "summaryze/static/summaryze/ts/views/index"], function (exports_24, context_24) {
    "use strict";
    var index_18, index_19, StyleListController;
    var __moduleName = context_24 && context_24.id;
    return {
        setters: [
            function (index_18_1) {
                index_18 = index_18_1;
            },
            function (index_19_1) {
                index_19 = index_19_1;
            }
        ],
        execute: function () {
            StyleListController = class StyleListController {
                updateStyleList() {
                    const styleList = new index_18.StyleList();
                    const view = new index_19.StyleListView();
                    view.update(styleList.getAll());
                }
            };
            exports_24("StyleListController", StyleListController);
        }
    };
});
System.register("summaryze/static/summaryze/ts/app", ["summaryze/static/summaryze/ts/events/index", "summaryze/static/summaryze/ts/cache/index", "summaryze/static/summaryze/ts/controllers/StyleListController", "summaryze/static/summaryze/ts/utils/index"], function (exports_25, context_25) {
    "use strict";
    var index_20, index_21, StyleListController_1, index_22, App;
    var __moduleName = context_25 && context_25.id;
    return {
        setters: [
            function (index_20_1) {
                index_20 = index_20_1;
            },
            function (index_21_1) {
                index_21 = index_21_1;
            },
            function (StyleListController_1_1) {
                StyleListController_1 = StyleListController_1_1;
            },
            function (index_22_1) {
                index_22 = index_22_1;
            }
        ],
        execute: function () {
            App = class App {
                start() {
                    this.loadStyleList();
                    this.loadCache();
                    this.addChangeStyleBtnEvent();
                    this.addSearchBtnEvent();
                    this.addSummaryBtnEvent();
                    this.addHtmlBtnEvent();
                    this.addCssBtnEvent();
                }
                addSearchBtnEvent() {
                    let btn = document.querySelector('#url-search');
                    if (index_22.ObjectUtils.nonExists(btn)) {
                        throw "URL Search Button not found";
                    }
                    const btnEvent = new index_20.SearchBtn();
                    btn.addEventListener('click', btnEvent.searchAndShowSummary);
                }
                addSummaryBtnEvent() {
                    let btn = document.querySelector('#summary-btn');
                    if (index_22.ObjectUtils.nonExists(btn)) {
                        throw "Summary Button not found";
                    }
                    const summaryCache = new index_21.SummaryCache();
                    btn.addEventListener('click', summaryCache.loadCache);
                }
                addHtmlBtnEvent() {
                    let btn = document.querySelector('#html-btn');
                    if (index_22.ObjectUtils.nonExists(btn)) {
                        throw "HTML Button not found";
                    }
                    const btnEvent = new index_20.HtmlBtn();
                    btn.addEventListener('click', btnEvent.showHTML);
                }
                addCssBtnEvent() {
                    let btn = document.querySelector('#css-btn');
                    if (index_22.ObjectUtils.nonExists(btn)) {
                        throw "CSS Button not found";
                    }
                    const btnEvent = new index_20.CssBtn();
                    btn.addEventListener('click', btnEvent.showCSS);
                }
                addChangeStyleBtnEvent() {
                    let btns = document.querySelectorAll('.style-list-item');
                    btns.forEach((btn) => {
                        const event = new index_20.StyleListBtns();
                        btn.addEventListener('click', event.applyStyle);
                    });
                }
                loadCache() {
                    const summaryCache = new index_21.SummaryCache();
                    const changeStyleBtnCache = new index_21.StyleListBtnsCache();
                    summaryCache.loadCache();
                    changeStyleBtnCache.loadCache();
                }
                loadStyleList() {
                    const controller = new StyleListController_1.StyleListController();
                    controller.updateStyleList();
                }
            };
            exports_25("App", App);
        }
    };
});
System.register("summaryze/static/summaryze/ts/builder/index", ["summaryze/static/summaryze/ts/builder/SummaryBuilder"], function (exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
    function exportStar_8(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_26(exports);
    }
    return {
        setters: [
            function (SummaryBuilder_5_1) {
                exportStar_8(SummaryBuilder_5_1);
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=app.js.map