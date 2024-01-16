I am trying to install the contrib theme [AdaptiveTheme][1].

```shell
composer require 'drupal/adaptivetheme:^5.2'
```

> ./composer.json has been updated
Running composer update drupal/adaptivetheme
Loading composer repositories with package information
Updating dependencies
Lock file operations: 1 install, 0 updates, 0 removals
>  - Locking drupal/adaptivetheme (5.2.0)
Writing lock file
Installing dependencies from lock file (including require-dev)
Package operations: 1 install, 0 updates, 0 removals
>  - Downloading drupal/adaptivetheme (5.2.0)
>  - Installing drupal/adaptivetheme (5.2.0): Extracting archive
Generating autoload files
44 packages you are using are looking for funding.
Use the `composer fund` command to find out more!
No security vulnerability advisories found.


  [1]: https://www.drupal.org/project/adaptivetheme

I didn't find the theme at `/admin/appearance` to enable it there, so I tried to remove it:

```shell
composer remove 'drupal/adaptivetheme:^5.2'
```

> ./composer.json has been updated
>
> Running composer update drupal/adaptivetheme:^5.2
> Loading composer repositories with package information
> Package "drupal/adaptivetheme:^5.2" listed for update is not locked.
>
> Updating dependencies
> Nothing to modify in lock file
>
> Installing dependencies from lock file (including require-dev)
> Nothing to install, update or remove
>
> Generating autoload files
> 44 packages you are using are looking for funding.
> Use the `composer fund` command to find out more!
> No security vulnerability advisories found.

## Question

Why can't I remove the theme package after it was apparently installed?

## Answer

In such case try a simple remove without quotes, version numbers, etc. as with:

```shell
composer remove drupal/adaptivetheme
```
