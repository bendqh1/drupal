In Drupal 11.1.5 my problem is that after activating *Language Detection* mechanism with all options enabled, thousands of new language-directory-aliases (`/en/alias` or `/ar/alias` etc.) have been detected in my website by Google Search Console **for each node**, altough no new nodes were created. 

Therefore, people now arrive to non-existing nodes in my website, such as:

```
/en/example-node-alias_1
/ar/example-node-alias_2
/fa/example-node-alias_3
```

Instead of arriving to existing nodes such as:

```
/example-node-alias_1
/example-node-alias_2
/example-node-alias_3
```

## What I have tried to solve this problem

Totally disabling *Language Detection* and then flushing all caches didn't help.

Merely installing and enabling the [Redirect](https://www.drupal.org/project/redirect) module and then flushing all caches didn't help.

## Notes

* I don't want to use PathAuto module.
* I don't want to create manual redirects for each non-existant node.
* I don't want to revert language Detection Settings because I don't want language detection at all.

## My question

How to solve that problem?
