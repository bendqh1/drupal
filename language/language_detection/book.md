Language Detection component can cause various problems.

## Problem 1 ##

I thought to utilize language detection to change the directionality of RTL-English to LTR-English but I was wrong.

* Language detection doesn't change node output directionality at all.
* Language detection automatically switches to a readily-avilable manual-translation of a node (even if there is one).

Besides that, Language Detection created robotic extra aliases for nodes. That was an aesthetic and SEO problem.

## Problem 2 ##

Thousands of new language-directory-aliases such as `/en/alias` or `/ar/alias` etc. have been detected in my website by Google Search Console **for each node**, altough no new nodes were created. 

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

## Solving both problems

### 1) Web server rewrite rules

#### Apache

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

#### Nginx

```nginx
if ($request_uri ~ ^/([a-z]{2})/(.*)$) {
    return 301 /$2;
}
```

### 2) Prevent Google from Indexing Language URLs Permanently

```shell
Disallow: /en/
Disallow: /ar/
Disallow: /fa/
```

### 3) Use PHP redirects

Add to settings.php or similar file the following or similar code.

```php
// Redirect language-prefixed URLs
$request_uri = $_SERVER['REQUEST_URI'];
if (preg_match('/^\/([a-z]{2})\/(.*)$/', $request_uri, $matches)) {
  $url = '/' . $matches[2];
  drupal_goto($url, array('query' => $_GET));
}
```
