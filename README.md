# Sass library

![CI](https://github.com/otsukasatoshi/sass-library/workflows/CI/badge.svg)

Collection of Sass mixins and functions.


## Setup

### Clone project

```
git clone git@github.com:otsukasatoshi/sass-library.git
```

### Install

```
yarn install
```


## Run the project

### Compile Sass to CSS

```
gulp
```

### Lint

```
yarn lint
```

### Format

```
yarn format
```


## Usage

### Write your Sass code in `./src/sass/app.scss`

```
.el {
  background-color: $bg-color;
  @include box(200px);
  @include center(xy);
}
```

### CSS code is output to `./dist/css/app.css`

```
.el {
  background-color: #cc6699;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### View HTML file

open `./dist/index.html` in your browser.
