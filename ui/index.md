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

{% highlight html %}
<vui-avatar alt="name" src="image.png"></vui-avatar>
{% endhighlight %}

{% raw %}
<div class="example">
<vui-avatar></vui-avatar>
<vui-avatar alt="lepture"></vui-avatar>
<vui-avatar alt="Hsiaoming Yang"></vui-avatar>
<vui-avatar alt="lepture" src="https://avatars0.githubusercontent.com/u/290496?v=3&s=80"></vui-avatar>
</div>
{% endraw %}

The color is calculated by the username (aka `alt` property). If `alt` is not
provided, it will render a pure black avatar.


## Toggle

A customized toggle checkbox. It will render a standard
`<input type="checkbox">` which can be used in a form directly,
so that you can give it a `name` property.

{% highlight html %}
<vui-toggle name="wifi"></vui-toggle>
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

{% highlight html %}
<vui-range-slider name="power"></vui-range-slider>
{% endhighlight %}

{% raw %}
<div class="example">
<vui-range-slider name="power"></vui-range-slider>
</div>
{% endraw %}


## Menu Button

A button designed for menu icon. You can toggle the status with a click.
The menu button has only one property `checked`.

{% highlight html %}
<vui-menu-button></vui-menu-button>
{% endhighlight %}

{% raw %}
<div class="example">
<vui-menu-button></vui-menu-button>
<vui-menu-button checked></vui-menu-button>
</div>
{% endraw %}
