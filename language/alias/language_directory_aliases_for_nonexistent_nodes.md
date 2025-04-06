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

## 1. Set Up a Global Redirect for Language URLs
Since you don't want to use manual redirects or PathAuto, you can configure **Global Redirect** to handle these non-existent language URLs. The idea is to set up a rule that automatically redirects any language-prefixed URL to the base URL without the language prefix.

Here’s how you can do that:
- Go to **Configuration** > **Search and metadata** > **URL redirects**.
- Create a **Redirect** rule where the **Source** is `/*/*` (which matches any URL with a language prefix), and the **Redirect** is `/`.
- This would ensure that any URL like `/en/example-node-alias_1` is redirected to `/example-node-alias_1` automatically.

## 2. Web server rewrite rules

### Apache

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

## 3. Prevent Google from Indexing Language URLs Permanently

```shell
Disallow: /en/
Disallow: /ar/
Disallow: /fa/
```

.
