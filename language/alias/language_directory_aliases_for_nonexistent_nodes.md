In Drupal 11.1.5 my problem is that after activating language detection with all options enabled, thousands of new language-directory-aliases (`/en/alias` or `/ar/alias` etc.) have been detected in my website by Google Search Console **for each node**, altough no new nodes were created. 

Therefore, people now arrive to non existing nodes in my website, such as:

```
/en/example-node-alias_1?language_content_entity=en
/ar/example-node-alias_2?language_content_entity=ar
/fa/example-node-alias_3?language_content_entity=fa
```

Instead of:

```
/example-node-alias_1
/example-node-alias_2
/example-node-alias_3
```


My problem is not caused by mere query strings (were it only query strings, the user would have been redirected to the alias without them)
rather
my problem is caused by language directories in URLs.

How to solve that problem?
