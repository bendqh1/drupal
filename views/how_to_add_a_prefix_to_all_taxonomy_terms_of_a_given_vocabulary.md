I wish that any `term` will have a prefix like `articles in the topic of`, so to get:

`Articles in the topic of term`.

How to do that?

## Answer:

**Configure contextual filter: Content: Has taxonomy term ID**.

**Override title:**

When the filter value is in the URL or a default is provided

מאמרים בנושא {{ arguments.tid }}

## Notes

* https://drupal.stackexchange.com/questions/318215/how-to-add-a-prefix-to-all-taxonomy-terms-of-a-given-vocabulary
