# React Cheat Sheet

Hi! Thanks for wanting to contribute. I hope your experience is pretty painless.

## Contributing

### Setup

#### Clone the and setup the project

    git clone https://github.com/chantastic/react-cheat-sheet.git
    cd react-cheat-sheet
    npm install
    npm start

`start` will start a webpack process that watches the filesystem for changes.

There's no web sever at the moment. I typically just open `index.html` from the file system. If you feel you need one, you can run `python -m SimpleHTTPServer 8000`

#### Build and PR

    npm run build:p
    
This script runs a script that minifies the browser bundle. This just makes it nice and compact for publishing to `gh-pages`.

If everything looks good, I'll merge it. Once merged, Github will update the page.

Cheers!

Chan
