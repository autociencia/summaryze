# Summaryze
![Summaryze icon](github/summaryze-icon.ico)
A web solution to generate summary for blogspot articles. You can try it online [here](https://summaryze.herokuapp.com/).

# :information_source: How it works
Front-end receives an URL and send it to back-end. The front-end was made with TypeScript. Back-end receives the URL and pass it to its API, it validates, process and (if valid) returns the generated HTML code of summary from that URL to front-end. Back-end was made in Python with Flask.

**Note**: article needs to have at least title (h1, h2, h3, h4, h5 or h6).

# :information_source: How to use
First, visit a blog from Blogger.

Second, copy the URL of a post.

Then, paste the URL in the **input box** on app and click on **search**.
![Tutorial Usage - Summaryze](github/tutorial-usage1.png)

Below, the search box has a link example. You may use it to test the app. Result:
![Tutorial Usage - Summaryze](github/tutorial-usage2.png)

# :arrow_forward: How to run
You need to some tools:

* [git](https://git-scm.com/downloads)
* [npm](https://nodejs.org/en/download/)
* [python](https://www.python.org/downloads/)
* [sass](https://sass-lang.com/install) (will be ported to Node dependencies)

## :clipboard: Clone
```bash
$ git clone https://github.com/autociencia/summaryze.git
$ cd summaryze
```

## :wrench: Setup Python
After clone and enter in summaryze project, create a virtual environment:

```bash
$ python3 -m venv env
```

Active it:

```bash
$ . env/bin/activate
```

Install Python dependencies:

```bash
$ pip3 install -r requirements.txt
```

## :wrench: Setup TypeScript
After clone and enter in summaryze project, install Node dependencies:

```bash
$ npm install
```

## :arrow_forward: Run
After install all dependencies, simply:
```bash
$ ./run.py
```
Then, enter on http://localhost:5000.

### :syringe: Tests
To test the API, enter into summaryze module (it contains \_\_init\_\_.py file) and run:
```bash
$ python -m unittest discover
```

### :hammer_and_wrench: Build
To build TS files, enter in summaryze project and run:
```bash
$ grunt
```

## :whale: Docker
You can run this app using Docker. Enter on project and run (as superuser):
```bash
docker build -t summaryze:latest .
docker run --name summaryze -d -p 5000:5000 autociencia/summaryze:latest
docker ps
```
You may omit ``-d`` argument to run this app as non daemon and see server logs on terminal.

# :globe_with_meridians: Technologies
**Front-end** was developed using:
* [Bulma CSS framework](https://bulma.io/)
* [SASS](https://sass-lang.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [Grunt](https://gruntjs.com/) as task runner and [npm](https://nodejs.org/en/) to manage packages
* Baisc of JavaScript, CSS3 and HTML5

**Back-end** was developed using Python with [Flask Framework](https://palletsprojects.com/p/flask/).


# :triangular_ruler: Architecture
Summaryze was designed in MVC pattern.

## Python
Summaryze module has structured as:
* :books: **api**: contains the core application that generate summaries (model).
* :bar_chart: **templates**: are HTML pages where the summary will be displayed (views).
* :twisted_rightwards_arrows: **routes.py**: controllers that handle requests and serves its responses with model binding in view.
* :gear: **config**: app configuration. You need to generate a new SECRET KEY to production usage.
* :page_facing_up: **static**: static files like images, favicons, CSS, JS...
* :syringe: **tests**: unit tests for Python code.
* :arrow_forward: **\_\_init\_\_.py**: initialize the Flask App.

## TypeScript
TypeScript files are located in **static/summaryze/ts**. TypeScript structure:

* :hammer_and_wrench: **builder**: contains classes with builder pattern.
* :floppy_disk: **cache**: classes that manipulate data from browser session.
* :twisted_rightwards_arrows: **controllers**: bind models on views.
* :books: **data**: contains all summary styles.
* :fireworks: **events**: where the logic is performed to do something on page.
* :link: **http**: makes http ajax requests.
* :page_with_curl: **models**: where Summary and Style are located.
* :outbox_tray: **utils**: to aggregate reusable functions.
* :bar_chart: **views**: where models are displayed.
* :arrow_forward: **app.ts**: is the main file; it initializes the TS app.


# Final Considerations
Currently, Blogger doesn't has a tool to generate summary for articles on its platform. So, we did it ourselves.

We developed Summaryze in Python for command line (CLI). But we seen the possibility to expand the App to other people who have the same problem. So, is that. You can use the API from command-line using ``python3 -m summaryze <<URL>>`` on dir **/api**. The API was designed standalone from project.

**Roadmap**

* [ ] Expand project to Medium, Wordpress and others.
* [ ] Possibility to generate summary from other sources (like directly or via files)
* [ ] Port SASS to Node dependencies.
