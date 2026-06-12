# globalrs

The name **globalrs** means "global resources" and it is a basic starter sub-theme of a Drupal general core theme Olivero.

## Defining the sub-theme

In `/themes/globalrs` add the files available in this repository and edit accordingly and then Both install the sub-theme and set it as default.

## Create a sub theme

Sub-themes do not necessarily include data that define regions, but we can copy these data from the parent directory and edit `globalrs.info.yml` as explained below.

### 1)

Go to `/core/themes/THEME/THEME.info.yml` and copy the following into `/themes/globalrs/globalrs.info.yml`.

```
regions:
  header: Header
  ...
```

### 2) 

Copy any relevant file from `/core/themes/THEME/templates/layout` to the sub-theme directory `/themes/THEME/templates/layout`.

## Notes

* Flush all caches after changes to yaml-twig files.
* YAML files can't contain tabulations, only whitespaces; we need to indent region-values with two whitespaces.
