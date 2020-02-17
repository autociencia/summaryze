System.register("ts/http.client/HttpClient", [], function (exports_1, context_1) {
    "use strict";
    var HttpClient;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            HttpClient = class HttpClient {
                fetchPage(url) {
                    if (self.fetch) {
                        let headers = new Headers({
                            'Content-Type': 'text/plain',
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Headers': '*'
                        });
                        let init = {
                            method: 'GET',
                            headers: headers,
                            mode: 'cors',
                            cache: 'default'
                        };
                        fetch(url, init).then((response) => {
                            if (response.ok) {
                                response.text();
                            }
                            else {
                                throw `Error on fetch data on '${url}'`;
                            }
                        });
                    }
                    return '';
                }
            };
            exports_1("HttpClient", HttpClient);
        }
    };
});
System.register("ts/http.client/index", ["ts/http.client/HttpClient"], function (exports_2, context_2) {
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
System.register("ts/app", ["ts/http.client/index"], function (exports_3, context_3) {
    "use strict";
    var index_1, App;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            App = class App {
                start() {
                    this.addBtnSearchEvent();
                }
                addBtnSearchEvent() {
                    let btn = document.querySelector('#url-search');
                    if (btn === undefined || btn === null) {
                        throw "URL Search Button not found";
                    }
                    btn.addEventListener('click', () => {
                        let url_input = document.querySelector('#url-input');
                        if (url_input == undefined || url_input == null) {
                            throw "URL Search Box not found";
                        }
                        let url = url_input.value.trim();
                        if (url === "") {
                            return;
                        }
                        let httpClient = new index_1.HttpClient();
                        let content = httpClient.fetchPage(url);
                        console.log(content);
                    });
                }
            };
            exports_3("App", App);
        }
    };
});
//# sourceMappingURL=app.js.map