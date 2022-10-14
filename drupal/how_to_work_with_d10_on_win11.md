I have found the way to install (and upgrade) Drupal 9 and above on Windows 11 extremely cumbersome and not worth the time.

An alternative, for those who need Windows 11 mechanics and keyboard behavior is to hire a shared hosting (which includes SSH and Composer) and install Drupal on that shared hosting while SSHing to this environment from Windows 11.<br>
If working this way, it's probably best to put the website on maintenance mode and `disallow: /` in robots.txt for development time.

If one takes the path I have suggested, while working form Windows 11 the installation pretty much narrows down to the following steps:

```shell
# Configure DNS records
# Configure database (say, with PHPMyAdmin)

cd WEB_APPLICATION_ROOT
composer create-project drupal/recommended-project WEB_APPLICATION_DIR_NAME
cd WEB_APPLICATION_DIR_NAME
composer require drush/drush
vendor/bin/drush site:install

# Configure web_application_root (example.com/web, done from "domains" in Cpanel)
# Install Drupal from web browser
```
