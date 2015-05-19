# Brix Page Generator

## Usage

Install `yo`, `bower`, `gulp` and `generator-brix-page`:

```bash
npm install -g yo bower gulp generator-brix-page
```

Make a new directory, and cd into it:

```bash
mkdir my-new-project && cd $_
```

Run yo brix-page, optionally passing an app name

```bash
yo brix-page my-new-project
```

## Develop Project

```bash
gulp
```

open `http://localhost:8989/my-new-project.html`

## Generators

Available generators:

* [brix-page](#app)
* [brix-page:layout](#layout)
* [brix-page:view](#view)
* [brix-page:model](#model)


### App

Example:

```bash
yo brix-page
```

### Layout

Example:

```bash
yo brix-page:layout myLayout
```

### View

Example:

```bash
yo brix-page:view common/header
```

### Model

Example:

```bash
yo brix-page:model user
```
