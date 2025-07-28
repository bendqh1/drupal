Drupal core 11.1.5 without any contribution modules or contribution themes and without any PHP customizations.

The default language of the website is Arabic and a secondary language of the website is English.

The following core language modules are enabled:

* Language
* Interface Translation
* Configuration Translation
* Content Translation

## More background data

* I don't use URL language prefixes.
* I don't use the Language Detection feature and I also don't want to use it due to past unexpected creation of various robotic aliases for nodes.

## My problem

If I create a node and set its language to English and also give it an alias in English (such as `/example-alias-1`), then I get an error according to which "the page wasn't found".

I can access the node by its node ID (NID) and also edit the node by that NID from `/node/940/edit?destination=/admin/content` but when I try to access the node by its alias, I get the error.

The website otherwise works fine and there is no special error in Cron, Watchdog, etc.

Flushing all caches didn't solve the problem.

### More about this problem

* There is no indication that this problem is a matter of permissions.

## Things I have tried to solve this problem

1. By default, Drupal aliases can only be given to nodes of the default language unless determined otherwise at `/admin/config/regional/content-language` where I have unchecked both "Content" and "Alias", saved the webpage, and flushed all caches, but both options ("Content" and "Alias") keep being rechecked automatically, and it may be a bug.
1. At `/admin/config/search/path` I have changed the language of any relevant alias to `- Not specified -` and then I could access the node from the alias regularly without the error, but, this approach is repetitive and I don't think it's efficient.
1. A possible radically different approach might be to just "change attitude" and not giving aliases to nodes in languages different than the default language at all.

## My question

How to solve that problem?

## Possible solution

1) Create a node type which its language is `- Not specified -` and add all content to it (you may need to manually move some content to it with a module such as [this one][1]).

2) Add the following or similar user script to your web browser's userscript manager:

```js
// ==UserScript==
// @name         Make node edit page LTR-Left
// @match        https://benaharoni.com/node/add/dp_ltr
// ==/UserScript==

document.querySelectorAll('*').forEach( (element)=>{
    element.setAttribute('dir', 'all');
});
```

  [1]: https://www.drupal.org/project/convert_bundles
