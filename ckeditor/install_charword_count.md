To enable Word Count in CKEditor 5 on Drupal without using Drupal modules **or** Node.JS package manager (npm):

1. [Download the **Word Count plugin** from CKEditor GitHub](https://github.com/ckeditor/ckeditor5/tree/master/packages/ckeditor5-word-count).
1. Upload the plugin to your Drupal site under `/libraries/ckeditor5/word-count`.
1. In Drupal (?) modify the CKEditor configuration in `Configuration > Content authoring > Text formats and editors by adding`:

```
CKEDITOR.replace('edit-body', {
    extraPlugins: 'wordcount',
    wordcount: {
        showWordCount: true,
        showCharacterCount: true
    }
});
```

After that, flush Drupal cache.
