## Results in a view appear twice or more

Check that sort criteria is:

* **Sort criteria: Publishing date (descending)**

Instead of:

* **Sort criteria: Taxonomy term publishing date (descending)**

Choosing a sort criteria based on **a date in which the content was related to a term** will cause the number of results in each view to correspond with the number of taxonomy terms in the each node in this view.

Another reason for such a problem may be with translations filter criteria.

## How to prevent a view of taxonomy terms to appear in nodes?

I have created a view of taxonomy terms with the terms filitered by **published** and sorted by **random**.

My problem is that this view block appears both in nodes and in taxonomy term pages while I need it to appear in taxonomy term pages alone.

If I could, I would filter the view by URL relative path `/taxonomy/term/` but I didn't find such a filter cirteria.

How to prevent a view of taxonomy term to appear in nodes?

By the way I areadly went to `Advanced > Relationships > Content with Term` and filtered by content type and then choose not equals (all content types) but this didn't help because then no taxonomy terms appeard at all, not even in `/taxonomy/term/` pages, so I have canceled this relationship altogether

### Solution

Filtering the block of the view by `/taxonomy/term/*` wildcard helped.

## How to add a prefix to terms of a given vocabulary

* https://drupal.stackexchange.com/questions/318215/how-to-add-a-prefix-to-all-taxonomy-terms-of-a-given-vocabulary
