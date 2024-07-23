This is probably caused by a clashing of CSS conditionings on very specific taxonomy term pages (<= 1% of all taxonomy term pages) with any relevant taxonomy term page itself.

This could be solved by changing `/admin/structure/views/view/taxonomy_term` to show only headings at the `Fields` area just under the `Format` area.<br>
By this article I have found it and added "Content headings" (my free translation) and then after saving the view without an error, I finally got a view of linked headings.
