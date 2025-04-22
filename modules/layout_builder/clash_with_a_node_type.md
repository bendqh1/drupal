## I have deleted the default taxonomy term view and I have trouble restoring it from a backup, how to proceed?

### Question

10.2.6 core with no PHP customization.

I have deleted the default taxonomy term view based on the thought that I might have changed it in the past and don't recall if, when and how.

Now I am stuck with empty taxonomy term pages (all taxonomy term pages exist but don't show any associated nodes).

Pasting all content of `web/core/modules/taxonomy/config/optional/views.view.taxonomy_term.yml`<br> into:<br>
`/admin/config/development/configuration/single/import` brings this error:

> The configuration cannot be imported because it failed validation for the following reasons: 
>
> **Configuration core.entity_view_display.node.dp_byt.default** depends on the **field.field.node.dp_byt.layout_builder__layout** configuration that will not exist after import.

I don't know what it means.

The error might be related to the fact that the main language of my website is not English (the original taxonomy term view page was translated).<br>
English is enabled as well, but as a secondary language.

I have deleted the default taxonomy term view and I have trouble restoring it from a backup, how to proceed? Perhaps the better question should be how to create a minimal taxonomy term View?

### Answer

t appears that the layout_builder__layout field has been deleted from your dp_byt content type, which is causing the issue. You can try re-creating this field and then attempt the import again.

[Credit to Jagraj Singh Gill](https://drupal.stackexchange.com/a/320331/114794)
