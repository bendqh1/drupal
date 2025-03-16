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
1. Enable **Language detection by user preferences** and set it to detect the language based on the user's language preference.
1. Configure accordingly.
1. Flush all caches.

### Another way

1. Keep **Hebrew** as the default language for the website in `/admin/config/regional/language/configure`.
2. Go to `/admin/config/regional/language/detection`.
3. Enable **Language detection by user preferences** and set it to detect the language based on the user's language preference.
4. Set the "English" language detection rule higher in the order to ensure it takes precedence for users who have chosen English.
5. Go to `/admin/structure/block`.
6. Edit the "Language Switcher" block and place it in a region, ensuring it's accessible for users to switch the language.
7. Under `/admin/config/people/accounts`, ensure users have the option to choose their preferred language (Hebrew or English).
8. Make sure to clear the cache.
