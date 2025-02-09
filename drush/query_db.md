## Get a list of any node that contains at least one `<img>` tag

```shell
drush sql-query 'SELECT nid 
FROM node 
WHERE nid IN (
  SELECT entity_id 
  FROM node__body 
  WHERE body_value LIKE "%<img%"
);'
```
