import { HttpClient } from "./http.client/index";

export class App {

    start(): void {
        this.addBtnSearchEvent();
    }

    private addBtnSearchEvent(): void {
        let btn = document.querySelector('#url-search') as HTMLElement;

        if (btn === undefined || btn === null) {
            throw "URL Search Button not found";
        }
        
        btn.addEventListener('click', () => {
            let url_input = document.querySelector('#url-input') as HTMLInputElement;

            if (url_input == undefined || url_input == null) {
                throw "URL Search Box not found";
            }

            let url: string = url_input.value.trim();

            if (url === "") {
                return;
            }

            let httpClient: HttpClient = new HttpClient();
            let content: string = httpClient.fetchPage(url);
            console.log(content);
        });
    }
}