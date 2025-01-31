## Question

In Drupal 11 I have composer-required a Drupal 10 module, yet I can patch that module to work with Drupal 11 this way:

> 1) Backup all website data.
>
> 2) Change `composer.json`:
>
> ```json
> "extra": {
>  "patches": {
>    "drupal/convert_bundles": {
>      "Patch for issue [description]": "https://git.drupalcode.org/project/convert_bundles/-/commit/ff84148fcfad099d2d89dda6c8733044013caed7.patch"
>    }
>  }
>}
> ```
>
> 3) Run `composer install`.
>
> 4) Enable the module with `drush en NAME`.

The added JSON Object may stay in composer.json after the Drupal 11 version of the module would come out and I don't know if after some composer update a version conflict will begin.

Should a Composer patch to make one major version module fit another major version, cause any version conflict in the future?


  [1]: https://github.com/cweagans/composer-patches

## Answer

If the issue to make the module compatible for Drupal 11 is `12345`, then put as patch:

> `drupal.org/project/convert_bundles/issues/12345`

But, you may just want to apply latest patch with GNU patch directly or wait for official release or find a workaround.
