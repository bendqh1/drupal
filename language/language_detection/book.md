Drupal's **Language Detection** component can cause various problems.

I thought to utilize language detection to change the directionality of RTL-English to LTR-English but it was a mistake, first and foremost because Language Detection doesn't change node output directionality at all, but also because it created several problems as described below.

## Problem 1 ##

* Language Detection created robotic extra aliases for nodes. That was an aesthetic problem as well as an SEO problem.

## Problem 2 ##

Thousands of new language-directory-aliases such as `/he/alias` or `/en/alias` etc. have been detected in my website by Google Search Console **for each node**, although no new nodes were created. 

Therefore, people now arrive to non-existing nodes in my website, such as:

```
/he/example-node-alias_1
/en/example-node-alias_2
```

Instead of arriving to existing nodes such as:

```
/example-node-alias_1
/example-node-alias_2
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

#### Nginx

```nginx
if ($request_uri ~ ^/([a-z]{2})/(.*)$) {
    return 301 /$2;
}
```
