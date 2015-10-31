---
title: UI Components
layout: vue
---

# UI Components

Resuable UI components, built with [Vue](https://vuejs.org). Each component
contains one or more properties, with `v-bind` support.

* TOC
{:toc}

## Avatar

A smart avatar component. When image is not available, it will create a colorful
text based avatar.

+ `alt`: text based username
+ `src`: image source url
+ `size`: number for the size, e.g. `48`

### Circle Avatar

Default avatars are circled, size of 48px.

{% highlight html %}
<vui-avatar alt="name" src="image.png"></vui-avatar>
{% endhighlight %}

{% raw %}
<div class="example">
<vui-avatar></vui-avatar>
<vui-avatar alt="Hsiaoming Yang"></vui-avatar>
<vui-avatar alt="李太白"></vui-avatar>
<vui-avatar alt="lepture" src="https://avatars0.githubusercontent.com/u/290496?v=3&s=80"></vui-avatar>
</div>
{% endraw %}

The color is calculated by the username (aka `alt` property). If `alt` is not
provided, it will render a pure black avatar.

### Squared Avatar

Add a class `squared` to make `<vui-avatar>` a squared avatar. It is not real
squared, it has a `2px` border radius.

{% highlight html %}
<vui-avatar class="squared"></vui-avatar>
{% endhighlight %}

{% raw %}
<div class="example">
<vui-avatar class="squared"></vui-avatar>
<vui-avatar class="squared" alt="Hsiaoming Yang"></vui-avatar>
<vui-avatar class="squared" alt="李太白"></vui-avatar>
<vui-avatar class="squared" alt="lepture" src="https://avatars0.githubusercontent.com/u/290496?v=3&s=80"></vui-avatar>
</div>
{% endraw %}


## Toggle

A customized toggle checkbox. It will render a standard
`<input type="checkbox">` which can be used in a form directly,
so that you can give it a `name` property.

+ `name`: name property of the input
+ `checked`: is toggle on or off

{% highlight html %}
<vui-toggle name="wifi"></vui-toggle>
<vui-toggle name="wifi" checked></vui-toggle>
{% endhighlight %}

{% raw %}
<div class="example">
<vui-toggle name="wifi"></vui-toggle>
<vui-toggle name="wifi" checked></vui-toggle>
</div>
{% endraw %}


## Range Slider

A customized range input. It will render a standard
`<input type="range">` which can be used in a form directly,
so that you can give it a `name` property.

+ `name`: name property of the input
+ `min`: min property for range input
+ `max`: max property for range input
+ `step`: step property for range input
+ `value`: value property for range input

### Pure Range

A pure range is a `<input type="range">` wrapped in a `div`.

{% highlight html %}
<vui-range-slider name="power"></vui-range-slider>
{% endhighlight %}

{% raw %}
<div class="example">
<vui-range-slider name="power"></vui-range-slider>
</div>
{% endraw %}


### Range with Labels

Range can contains two labels, one left one right, which can be
specified with `slot` property.

{% highlight html %}
<vui-range-slider name="power">
  <span slot="left">L</span>
  <span slot="right">H</span>
</vui-range-slider>
{% endhighlight %}

{% raw %}
<div class="example">
<vui-range-slider name="power">
  <span slot="left">L</span>
  <span slot="right">H</span>
</vui-range-slider>
</div>
{% endraw %}


## Menu Button

A button designed for menu icon. You can toggle the status with a click.
The menu button has only one property `checked`.

+ `checked`: is menu button open

{% highlight html %}
<vui-menu-button></vui-menu-button>
<vui-menu-button checked></vui-menu-button>
{% endhighlight %}

{% raw %}
<div class="example">
<vui-menu-button></vui-menu-button>
<vui-menu-button checked></vui-menu-button>
</div>
{% endraw %}

You can example the menu with an inner text content.

{% highlight html %}
<vui-menu-button>Site Menu</vui-menu-button>
{% endhighlight %}
