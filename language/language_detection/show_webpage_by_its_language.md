Language detection is a dangerous tool as it may cause the creation of a new sub-alias for each alias, doubling the webpage detections by search engines. I suggest to avoid it if it's not necessary.

## Question

### Drupal 11 website in Hebrew (RTL) with Olivero as the main theme and no contribution moduloes and no code customizations.

* Olivero supports both Hebrew and Enlgish (both RTL and LTR).
* English is already enabled for the website alongside Hebrew.
* All **Multilingual** core modules are enabled.

I want that if a node is in English (LTR), then the theme would appear as if the entire website is in English.

How could I achieve this situation without CSS changes?

#### Notes

* If possible, then I would prefer a backend solution over JavaScript.
* Language negotiation by domain isn't feasible in this case.
* Language negotiation by URL sub-paths such as /en or /he isn't feasible in this case.
* There are no language options at /admin/appearance/settings/olivero.

Short answer. Only steps. No commentary.

## Answer

### One way

1. Go to `/admin/config/regional/language/detection`.
1. Enable language detection by all options.
1. Flush all caches.
