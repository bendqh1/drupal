# Preface

https://github.com/bendqh1/drupal/edit/main/language/language_detection/book.md

# Question

Shared hosting environment of a LAMP stack with Durpal 11 uncustomed core.
No access to Apache config files (I could create a `.htaccess` file on `$HOME/public_html` if it helps).


## My problem

I have some special directions in the `.htaccess` file of the website but if I upgrade Drupal even a minor upgrade, these will be lost.

## My question

How to preserve the `.htaccess` special directives so that Drupal will work according to them anyway even if the old `.htaccess` is deleted and a new one will be created in its stead?

## Notes

* I seek only a fully automatic solution.
* I am not going to install any contribution modules for this sake; I seek alternative ways to installing these. Share a few options.

Short answer, no emojis, no waffling.

# Answer (focus on answer 2, the best and also most common)

## 1) Use **environment-level configurations outside Drupal** 

If your host supports it, add directives via control panel tools (such as Cpanel), domain-level settings, or custom Apache includes managed by hosting provider.

## 2) Use a **parent directory `.htaccess`**  
Place your custom `.htaccess` in a directory **above Drupal’s root** (e.g., `$HOME/.htaccess`). Apache applies `.htaccess` files from the root down, so your rules will always apply before Drupal’s `.htaccess` is processed. This way, Drupal updates never touch your custom `.htaccess`.

Place the .htaccess at `$HOME/.htaccess.` It doesn't matter how many tiers up, as long as it's above `$HOME/public_html/example.com`. Apache processes .htaccess files from higher directories first.

Placing the .htaccess at `$HOME/public_html/.htaccess` could work, but it risks being overwritten or ignored if Drupal's root is directly in `$HOME/public_html` or if another application in that directory has its own .htaccess.<br>
Placing it at `$HOME/.htaccess` is safer because it’s higher up, outside any application’s root, ensuring Apache processes it first and Drupal updates won’t affect it.
