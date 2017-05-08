# imagemagick-macos-font-setup

This is a little utility for making ImageMagick aware of any user fonts you've installed in macOS.

## Prerequisites

This will explode if you haven't installed ImageMagick. First, do that with [Homebrew](https://brew.sh):

```
$ brew install imagemagick
```

## Usage

### CLI

From the command line, run:

```
$ imagemagick-macos-font-setup
```

Which will evaluate [this Perl script](http://www.imagemagick.org/Usage/scripts/imagick_type_gen) and overwrite your ImageMagick font definition in `~/.config/ImageMagick/type.xml`.

### API

You can also invoke this via JavaScript with a simple callback interface:

``` js
require('imagemagick-macos-font-setup')(function (er) {
  if (er) throw er
  console.log('Fonts configured!')
})
```
