# Summaryze
A script to generate summary for blogspot articles. You can try it online [here](https://summaryze.herokuapp.com/).

# How it works
Front-end receives an URL and send it to back-end. The front-end was made with TypeScript. Back-end receives the URL and pass it to its API, validate, process and (if valid) returns the generated HTML code of summary from that URL to front-end. Back-end was made in Python with Flask.

**Note**: article needs to have at least title (h1, h2, h3, h4, h5 or h6).

# How to use
First, visit a blog from Blogger.

Second, copy the URL of a post.

Then, paste the URL in the **input box** on app and click on **search**.
![Tutorial Usage - Summaryze](github/tutorial-usage1.png)

Below the search box has a link example. You may use it to test the app. Result:
![Tutorial Usage - Summaryze](github/tutorial-usage2.png)

# How to run
You need to some tools:

* [git](https://git-scm.com/downloads)
* [npm](https://nodejs.org/en/download/)
* [python](https://www.python.org/downloads/)
* [sass](https://sass-lang.com/install) (will be ported to Node dependencies)

## Clone
```bash
$ git clone https://github.com/autociencia/summaryze.git
```

```bash
$ cd summaryze
```

Currently, Blogger doesn't has a tool to generate summary for articles on its platform. So, we did it ourselves.

## Setup Python
After clone and enter in summaryze project, create a virtual environment:

```bash
$ python3 -m venv env
```

Active it:

```bash
$ . venv/bin/activate
```

Install Python dependencies:

```bash
$ pip3 install -r requirements.txt
```

## Setup TypeScript
After clone and enter in summaryze project, install Node dependencies:

```bash
$ npm install
```

## Run
After install all dependencies, simply:
```bash
$ ./run.py
```
Then, enter on http://localhost:5000.