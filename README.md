Gulp Boilerplate for generic CSS/HTML/JS development
=============
<a href="http://riverco.de" target="_blank">riverco.de</a> gulp boilerplate.

Structure
=============
`/src` - thats where you write code.

`/site` - compiled code.

We have two options for building html
`/src/index.html` and `/src/partials/` - will be parsed with gulp-rigger.

Optinally one can use jade (it's commented in gulpfile.js). Basic templated is in `/src/jade/`

What is happening
=============
_Sass_ is compiled and postprocessed with wonderfull Autoprefixer.

`src/img/icons` are joined into sprite, which could be used in Sass like this
```
.icon
    +s(icon_name)
```

`src/img/svg` are joined into font, and can be used like this
```
<i class="icon-svgname"></i>
```

Naming blocks
=============
I use BEM naming, meaning `.block` for independent block. `.block__element` for elements inside that block. And `.block_modification` for modification of the block.

`layouts.sass` consists of all the columns-header-footer stuff, all with `.l-*` prefixes. So you know it's layout.

States of the blocks use prefix `.is-*`. For example `.is-running`, `.is-hidden`, `.is-open`.

Hooks for js should use prefix `.js-*`.