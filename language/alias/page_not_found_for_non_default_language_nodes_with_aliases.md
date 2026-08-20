If a node in a language which is not the default language got an alias and from that moment got a "Page not found" (404) error, here is why.

Drupal 11 is designed in such a way that aliases in languages other than the default language need **must be the relevant predefined language prefix**, so such aliases should read like this:

* `/en/SOMETHING` for English.
* `/zh-hans/SOMETHING` for Simplified Chinese.

There is no must for aliases in the website's default language to get an **alias language prefix** but it's a best practice to do so.

---

The list of alias language prefixes in Drupal is predefined and it can be problematic to change existing alias language prefixes, but in rare cases where this is needed, it can be done at `/admin/config/regional/language/detection/url`. 

## Notes

* It is possible to force Drupal to respect a non default language alias from the **Drupal path alias interface** (`/admin/config/search/path`) but it has to be done manually for each alias.
* The [Language Neutral Aliases](https://www.drupal.org/project/language_neutral_aliases) module stops Drupal from requiring language prefixes but module dependency may cause problems in the long run.
