#  Question post

In Drupal 11.1.5 core without any contribution themes or modules and without any customizations.

## My problem

My problem is that after activating *Language Detection* with all options enabled, thousands of new language-directory-aliases such as `/en/alias` or `/ar/alias` etc. have been detected in my website by Google Search Console **for each node**, altough no new nodes were created. 

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

I have already installed and enabled the [Redirect](https://www.drupal.org/project/redirect) module and then flushed all caches but it didn't help.

I have already disabled *Language Detection* and then flushed all caches but it won't help because the new webpages were already crawled and indexed by search engines.

## Notes

* I don't want to use PathAuto module.
* I don't want to create manual redirects for each non-existant node.
* I don't want to revert language Detection Settings because I don't want language detection at all.

## My question

How to solve that problem?

---

# Answer post

## 1) Web server rewrite rules

### Apache

Go to `example.com/web/.htaccess` and under:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine on
```

Add:

```apache
RewriteEngine On
  RewriteCond %{REQUEST_URI} ^/([a-z]{2})/(.*)$
  RewriteRule ^ /%2 [R=301,L]
```

### Nginx

```nginx
if ($request_uri ~ ^/([a-z]{2})/(.*)$) {
    return 301 /$2;
}
```

## 2) Prevent Google from Indexing Language URLs Permanently

```shell
Disallow: /en/
Disallow: /ar/
Disallow: /fa/
```

## 3) Use PHP redirects

Add to settings.php or similar file the following or similar code.

```php
// Redirect language-prefixed URLs
$request_uri = $_SERVER['REQUEST_URI'];
if (preg_match('/^\/([a-z]{2})\/(.*)$/', $request_uri, $matches)) {
  $url = '/' . $matches[2];
  drupal_goto($url, array('query' => $_GET));
}
```
