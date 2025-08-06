If a node in a language which is not the default language got an alias and from that moment got a "Page not found" (404) error, here is why.

Drupal 11 is designed in such a way that aliases in languages other than the default language need to have an alias that contains one of the predefined language prefixes, so such aliases should read like this:

* `/en/SOMETHING` for English.
* `/zh-hans/SOMETHING` for Simplified Chinese.

Aliases in the default language shouldn't get an **alias language prefix** so if the default language of the website is Hebrew, we can do:

<pre>/SOMETHING</pre>

The list of alias language prefixes in Drupal is predefined and it can be hard to change it in case we prefer more explicit language prefixes such as:

* `/english/SOMETHING` for any preffered kind of English.
* `/chinese/SOMETHING` for any preferred kind of Chinese.

A good approach is just avoiding giving language prefix for aliases of the default language but do giving them for non-default langage aliases (SEOwise it may be good to give for both).

## Notes

* A language prefix is called a **language reference** and can be defined at `/admin/config/regional/language/detection/url`. 
* It is possible to force Drupal to respect a non default language alias from the **Drupal path alias interface** (`/admin/config/search/path`) but it has to be done manually for each alias.
* The [Language Neutral Aliases](https://www.drupal.org/project/language_neutral_aliases) module stops Drupal from requiring language prefixes but module dependency may not be correct in the long term.
