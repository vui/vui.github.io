---
title: UI Components
layout: doc
---

# UI Components

Resuable UI components, built with [Vue](https://vuejs.org). Each component
contains one or more properties, with `v-bind` support.

* TOC
{:toc}


## Buttons

Buttons are essential part of any mobile/desktop experiences. Create buttons
with `.v-button` class.

{% highlight html %}
<button class="v-button">Default Button</button>
<a class="v-button" role="button">A Tag Button</a>
<button class="v-button v-button--white">White Button</button>
<button class="v-button" disabled>Disabled Button</button>
{% endhighlight %}

{% raw %}
<div class="example">
<button class="v-button">Default Button</button>
<a class="v-button" role="button">A Tag Button</a>
<button class="v-button v-button--white">White Button</button>
<button class="v-button" disabled>Disabled Button</button>
</div>
{% endraw %}


### Block Button

Block button is applied a `display: block` style. It will cover 100% of the
parent block. Create block buttons by adding a `.v-button--block` class.

{% highlight html %}
<button class="v-button v-button--block">Block Button</button>
{% endhighlight %}

{% raw %}
<div class="example">
<button class="v-button v-button--block">Block Button</button>
</div>
{% endraw %}


### Menu Button

A button is designed for menu icon. You can toggle the status with a click.
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

You can explain the menu with an inner text content.

{% highlight html %}
<vui-menu-button>Site Menu</vui-menu-button>
{% endhighlight %}


### Progress Button

A progress button shows the current progress, it is useful for async form
submition. Create them with `<vui-progress-button>`.

+ `progress`: current progress, can be a number between 0 to 100, or a percentage.

{% highlight html %}
<vui-progress-button progress="60%">
  Text Content
</vui-progress-button>
{% endhighlight %}


{% raw %}
<div class="example">
<vui-progress-button progress="60%">Text Content</vui-progress-button>
<vui-progress-button class="v-button--white" progress="60%">Text Content</vui-progress-button>
</div>
{% endraw %}

You can still add modifier classes for progress buttons, e.g. `.v-button--white`,
`.v-button--block`.

{% highlight html %}
<vui-progress-button class="v-button--white" progress="60%">
  Text Content
</vui-progress-button>
{% endhighlight %}


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

Add a class `.v-avatar--squared` to make `<vui-avatar>` a squared avatar. It is not real
squared, it has a `2px` border radius.

{% highlight html %}
<vui-avatar class="v-avatar--squared"></vui-avatar>
{% endhighlight %}

{% raw %}
<div class="example">
<vui-avatar class="v-avatar--squared"></vui-avatar>
<vui-avatar class="v-avatar--squared" alt="Hsiaoming Yang"></vui-avatar>
<vui-avatar class="v-avatar--squared" alt="李太白"></vui-avatar>
<vui-avatar class="v-avatar--squared" alt="lepture" src="https://avatars0.githubusercontent.com/u/290496?v=3&s=80"></vui-avatar>
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

### Toggle for iOS

Toggle has a special style for iOS, which looks like the iOS toggle.
Wrap the toggle under a `.ios` class.

{% highlight html %}
<div class="ios">
  <vui-toggle name="wifi"></vui-toggle>
  <vui-toggle name="wifi" checked></vui-toggle>
</div>
{% endhighlight %}

{% raw %}
<div class="example ios">
<vui-toggle name="wifi"></vui-toggle>
<vui-toggle name="wifi" checked></vui-toggle>
</div>
{% endraw %}


### Toggle for Android

Toggle has a special style for Android, which looks like the material
toggle. Wrap the toggle under a `.android` class.

{% highlight html %}
<div class="android">
  <vui-toggle name="wifi"></vui-toggle>
  <vui-toggle name="wifi" checked></vui-toggle>
</div>
{% endhighlight %}

{% raw %}
<div class="example android">
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


### Range for iOS

Range has a special style for iOS, which looks like the one in iOS.

{% highlight html %}
<div class="ios">
  <vui-range-slider name="power"></vui-range-slider>
</div>
{% endhighlight %}

{% raw %}
<div class="example ios">
<vui-range-slider name="power"></vui-range-slider>
</div>
{% endraw %}


### Range for Android

Range has a special style for Android, which looks like the one in
Material Design.

{% highlight html %}
<div class="android">
  <vui-range-slider name="power"></vui-range-slider>
</div>
{% endhighlight %}

{% raw %}
<div class="example android">
<vui-range-slider name="power"></vui-range-slider>
</div>
{% endraw %}


## Radio

Radio is designed with native `<input type="radio">`, applies a `.v-radio`
class to change the default browser style.

{% highlight html %}
<label class="v-radio">
  <input name="vpn" type="radio">
  Turn on VPN
</label>
{% endhighlight %}

{% raw %}
<div class="example">
  <label class="v-radio">
    <input name="vpn" type="radio">
    Turn on VPN
  </label>
</div>
{% endraw %}

### Radio as Group

Radio is usually used as a group, apply `.v-radio` on `<ul>` to create
the radio group.

{% highlight html %}
<ul class="v-radio">
  <li>
    <label>
      <input name="vpn" type="radio">
      VPN Japan
    </label>
  </li>
   <li>
    <label>
      <input name="vpn" type="radio">
      VPN Taiwan
    </label>
  </li>
</ul>
{% endhighlight %}

{% raw %}
<div class="example">
  <h4>Default</h4>
  <ul class="v-radio">
    <li>
      <label>
        <input name="vpn" type="radio">
        VPN Japan
      </label>
    </li>
    <li>
      <label>
        <input name="vpn" type="radio">
        VPN Taiwan
      </label>
    </li>
  </ul>

<div class="ios">
  <h4>iOS <code>class="ios"</code></h4>
  <ul class="v-radio">
    <li>
      <label>
        <input name="vpn" type="radio">
        VPN America
      </label>
    </li>
    <li>
      <label>
        <input name="vpn" type="radio">
        VPN Singapore
      </label>
    </li>
  </ul>
</div>

<div class="android">
  <h4>Android <code>class="android"</code></h4>
  <ul class="v-radio">
    <li>
      <label>
        <input name="vpn" type="radio">
        VPN United Kingdom
      </label>
    </li>
    <li>
      <label>
        <input name="vpn" type="radio">
        VPN Hong Kong
      </label>
    </li>
  </ul>
</div>
</div>
{% endraw %}
