## Installation

```shell
composer require 'drupal/convert_bundles:^2.0@beta'
drush en convert_bundles
```

## Uninstallation

```shell
drush un convert_bundles
composer remove 'drupal/convert_bundles:^2.0@beta'
```

## Patching

### Get latest patch

1. Find latest patch at: [https://git.drupalcode.org/project/convert_bundles/-/commits](https://git.drupalcode.org/project/convert_bundles/-/commits).
2. Isolate latest path executable

### Install CWE-GANS patching tool for your project

```shell
composer require cweagans/composer-patches
```

### Edit `composer.json`

```json
"extra": {
  "patches": {
    "drupal/convert_bundles": {
      "Patch for issue [description]": "https://git.drupalcode.org/project/convert_bundles/-/commit/ff84148fcfad099d2d89dda6c8733044013caed7.patch"
    }
  }
}
```

### Apply the patch

```shell
composer install
```

### Enable the module

drush en convert_bundles
