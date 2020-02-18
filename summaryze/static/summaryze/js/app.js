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
System.register("summaryze/static/summaryze/ts/views/SummaryView", [], function (exports_6, context_6) {
    "use strict";
    var SummaryView;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [],
        execute: function () {
            SummaryView = class SummaryView {
                constructor() {
                    this._element = $('#summary-content');
                }
                templateSummary(summary) {
                    let styleContent = '';
                    if (summary.style !== undefined) {
                        styleContent = summary.style.content;
                    }
                    return `
            <style>${styleContent}</style>
            ${summary.content.innerHTML}
        `;
                }
                templateHTML(summary) {
                    let strSummary = summary.content.innerHTML
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;");
                    return `
            <pre><code>${strSummary}</code></pre>
        `;
                }
                updateSummary(summary) {
                    let template = this.templateSummary(summary);
                    this._element.html(template);
                }
                updateHTML(summary) {
                    let template = this.templateHTML(summary);
                    this._element.html(template);
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
                template(style) {
                    return `<span id="${style.id}" class="style-list-item">${style.name}</span>`;
                }
                update(styles) {
                    const strStyles = styles.map((style) => this.template(style));
                    this._element.html(strStyles.join(''));
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
System.register("summaryze/static/summaryze/ts/builder/SummaryBuilder", [], function (exports_11, context_11) {
    "use strict";
    var SummaryBuilder;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [],
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
                style(style) {
                    return this;
                }
                build() {
                    return this._summary;
                }
            };
            exports_11("SummaryBuilder", SummaryBuilder);
        }
    };
});
System.register("summaryze/static/summaryze/ts/events/SearchBtn", ["summaryze/static/summaryze/ts/http/index", "summaryze/static/summaryze/ts/controllers/index", "summaryze/static/summaryze/ts/builder/SummaryBuilder"], function (exports_12, context_12) {
    "use strict";
    var index_2, index_3, SummaryBuilder_1, SearchBtn;
    var __moduleName = context_12 && context_12.id;
    function fetchEvent(content) {
        const summary = new SummaryBuilder_1.SummaryBuilder().content(content).build();
        const controller = new index_3.SummaryController();
        controller.updateSummary(summary);
        sessionStorage.setItem('summary_html', summary.content.innerHTML);
    }
    return {
        setters: [
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (SummaryBuilder_1_1) {
                SummaryBuilder_1 = SummaryBuilder_1_1;
            }
        ],
        execute: function () {
            SearchBtn = class SearchBtn {
                searchAndShowSummary() {
                    const btn = document.querySelector('#url-search');
                    const url_input = document.querySelector('#url-input');
                    if (isNull(btn)) {
                        throw 'URL Search Button not found';
                    }
                    if (isNull(url_input)) {
                        throw 'URL Search Box not found';
                    }
                    const url = url_input.value.trim();
                    if (url === "") {
                        return;
                    }
                    const endpoint = `/summary?url=${url}`;
                    const httpClient = new index_2.HttpClient();
                    httpClient.fetchPage(endpoint, fetchEvent);
                    function isNull(element) {
                        return (element == undefined || element == null);
                    }
                }
            };
            exports_12("SearchBtn", SearchBtn);
        }
    };
});
System.register("summaryze/static/summaryze/ts/events/index", ["summaryze/static/summaryze/ts/events/SearchBtn"], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    function exportStar_4(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_13(exports);
    }
    return {
        setters: [
            function (SearchBtn_1_1) {
                exportStar_4(SearchBtn_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/cache/SummaryCache", ["summaryze/static/summaryze/ts/builder/SummaryBuilder", "summaryze/static/summaryze/ts/controllers/index"], function (exports_14, context_14) {
    "use strict";
    var SummaryBuilder_2, index_4, SummaryCache;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [
            function (SummaryBuilder_2_1) {
                SummaryBuilder_2 = SummaryBuilder_2_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            }
        ],
        execute: function () {
            SummaryCache = class SummaryCache {
                loadCache() {
                    const summary_text = sessionStorage.getItem('summary_html');
                    if (summary_text === '' || undefined) {
                        return;
                    }
                    const summary = new SummaryBuilder_2.SummaryBuilder().content(summary_text).build();
                    const controller = new index_4.SummaryController();
                    controller.updateSummary(summary);
                }
            };
            exports_14("SummaryCache", SummaryCache);
        }
    };
});
System.register("summaryze/static/summaryze/ts/cache/index", ["summaryze/static/summaryze/ts/cache/SummaryCache"], function (exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    function exportStar_5(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_15(exports);
    }
    return {
        setters: [
            function (SummaryCache_1_1) {
                exportStar_5(SummaryCache_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/events/HtmlBtn", ["summaryze/static/summaryze/ts/builder/SummaryBuilder", "summaryze/static/summaryze/ts/controllers/index"], function (exports_16, context_16) {
    "use strict";
    var SummaryBuilder_3, index_5, HtmlBtn;
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [
            function (SummaryBuilder_3_1) {
                SummaryBuilder_3 = SummaryBuilder_3_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            HtmlBtn = class HtmlBtn {
                showHTML() {
                    const summary_text = sessionStorage.getItem('summary_html');
                    if (summary_text === '' || undefined) {
                        return;
                    }
                    const summary = new SummaryBuilder_3.SummaryBuilder().content(summary_text).build();
                    const controller = new index_5.SummaryController();
                    controller.updateHTML(summary);
                }
            };
            exports_16("HtmlBtn", HtmlBtn);
        }
    };
});
System.register("summaryze/static/summaryze/ts/data/StyleList", [], function (exports_17, context_17) {
    "use strict";
    var StyleList;
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [],
        execute: function () {
            StyleList = class StyleList {
                get() {
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
            };
            exports_17("StyleList", StyleList);
        }
    };
});
System.register("summaryze/static/summaryze/ts/data/index", ["summaryze/static/summaryze/ts/data/StyleList"], function (exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    function exportStar_6(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_18(exports);
    }
    return {
        setters: [
            function (StyleList_1_1) {
                exportStar_6(StyleList_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("summaryze/static/summaryze/ts/controllers/StyleListController", ["summaryze/static/summaryze/ts/data/index", "summaryze/static/summaryze/ts/views/index"], function (exports_19, context_19) {
    "use strict";
    var index_6, index_7, StyleListController;
    var __moduleName = context_19 && context_19.id;
    return {
        setters: [
            function (index_6_1) {
                index_6 = index_6_1;
            },
            function (index_7_1) {
                index_7 = index_7_1;
            }
        ],
        execute: function () {
            StyleListController = class StyleListController {
                updateStyleList() {
                    const styleList = new index_6.StyleList();
                    const view = new index_7.StyleListView();
                    view.update(styleList.get());
                }
            };
            exports_19("StyleListController", StyleListController);
        }
    };
});
System.register("summaryze/static/summaryze/ts/app", ["summaryze/static/summaryze/ts/events/index", "summaryze/static/summaryze/ts/cache/index", "summaryze/static/summaryze/ts/events/HtmlBtn", "summaryze/static/summaryze/ts/controllers/StyleListController"], function (exports_20, context_20) {
    "use strict";
    var index_8, index_9, HtmlBtn_1, StyleListController_1, App;
    var __moduleName = context_20 && context_20.id;
    return {
        setters: [
            function (index_8_1) {
                index_8 = index_8_1;
            },
            function (index_9_1) {
                index_9 = index_9_1;
            },
            function (HtmlBtn_1_1) {
                HtmlBtn_1 = HtmlBtn_1_1;
            },
            function (StyleListController_1_1) {
                StyleListController_1 = StyleListController_1_1;
            }
        ],
        execute: function () {
            App = class App {
                start() {
                    this.loadCache();
                    this.loadStyleList();
                    this.addSearchBtnEvent();
                    this.addSummaryBtnEvent();
                    this.addHtmlBtnEvent();
                }
                addSearchBtnEvent() {
                    let btn = document.querySelector('#url-search');
                    if (btn === undefined) {
                        throw "URL Search Button not found";
                    }
                    const btnEvent = new index_8.SearchBtn();
                    btn.addEventListener('click', btnEvent.searchAndShowSummary);
                }
                addSummaryBtnEvent() {
                    let btn = document.querySelector('#summary-btn');
                    if (btn === undefined) {
                        throw "Summary Button not found";
                    }
                    const summaryCache = new index_9.SummaryCache();
                    btn.addEventListener('click', summaryCache.loadCache);
                }
                addHtmlBtnEvent() {
                    let btn = document.querySelector('#html-btn');
                    if (btn === undefined) {
                        throw "HTML Button not found";
                    }
                    const btnEvent = new HtmlBtn_1.HtmlBtn();
                    btn.addEventListener('click', btnEvent.showHTML);
                }
                loadCache() {
                    const summaryCache = new index_9.SummaryCache();
                    summaryCache.loadCache();
                }
                loadStyleList() {
                    const controller = new StyleListController_1.StyleListController();
                    controller.updateStyleList();
                }
            };
            exports_20("App", App);
        }
    };
});
System.register("summaryze/static/summaryze/ts/builder/index", ["summaryze/static/summaryze/ts/builder/SummaryBuilder"], function (exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    function exportStar_7(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_21(exports);
    }
    return {
        setters: [
            function (SummaryBuilder_4_1) {
                exportStar_7(SummaryBuilder_4_1);
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=app.js.map