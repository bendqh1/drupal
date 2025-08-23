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

Place custom directives in a `.htaccess` in a directory **above Drupal’s root** such as:

* **Tier 2:** `$HOME/public_html/.htaccess`
* **Tier 1:** `$HOME/public_html/.htaccess`

Drupal upgrades may rarely change the tier 2 but should never change tier 1.

### Directives

#### Apache

Add to the correct .htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine on
  RewriteCond %{REQUEST_URI} ^/([a-z]{2})/(.*)$
  RewriteRule ^ /%2 [R=301,L]
```

That caused me a problem were an `/en/` page was not found because it's `/en/` language prefix that I myself added was taken down as well. Just don't use Language Detection as in Drupal 11.2.3.

#### Nginx

```nginx
if ($request_uri ~ ^/([a-z]{2})/(.*)$) {
    return 301 /$2;
}
```
