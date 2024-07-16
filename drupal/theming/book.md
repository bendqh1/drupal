## Access a deep pathed theming file from the root directory of a sub theme

```shell
cd MY_SUB_THEME_DIR
ln -s templates/layout/page.html.twig .
```

Note the `.` after the file name, indicating that here we created the soft link.
