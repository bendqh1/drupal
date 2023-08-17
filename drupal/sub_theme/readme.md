In `/themes/globalrs` add the files available in this directory (and edit accordingly).

* YAML files can't contain tabulations, only whitespaces.
* Flush all caches before testing.
* Don't forget to **both** install the sub theme and set it as default.

Regions are not inherited by sub themes, you have to copy the regions from the parent to your theme's `globalrs.info.yml` file, or else the default system themes are used.
