## Question

In **10.3.10** I have approximately thirty content types and there is a boolean field I wish to bulk-add to all these content types, and may need to bulk-delete from all content types in the future.

How can I bulk-add a field to all content types and bulk-delete a field from all content types?

Doing this in Drush may require thirty times the following command set:

```shell
drush field:create CONTENT_TYPE_NAME dont_show_in_views boolean
drush field:instance:create CONTENT_TYPE_NAME dont_show_in_views boolean
drush field:settings CONTENT_TYPE_NAME dont_show_in_views --default-value=0 --required=false
drush cr
```

## Answer

One may want to write a Bash script but this may be unstable in Drupal 12 and above.
