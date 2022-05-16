All special page names are available here.

https://en.wikipedia.org/wiki/Help:Special_page

* For Lockdown extension, we lockdown actions, then pages and to lockdown pages
  * Go to home directory
  * Create a file with a list of the names
  * Wrap each list item in a Lockdown command and redirect the output to a new file
  * Paste content of the processed list in LocalSettings.php

```shell
curl https://en.wikipedia.org/wiki/Help:Special_page -s | grep -oP 'Special:\K[a-zA-Z0-9]*' | sort -u > special_page_names.txt
# curl -s means silent
# grep -o means "empty parts of a matching line" or perhaps "empty strings in a line"
# grep -P means "--perl-regexp" for \K
# \K means "pretend to start from this point" (so to omit the "Special" we use for exact matching)
# [a-zA-Z0-9]* means until anything which isn't what's being matched --- such as a colon and/or whitespace
# We refer the sort FILTER software output into a file
# DON'T MATCH WHITESPACES HERE
  # BECAUSE SOME LINKS HAVE PARENTEHSES NOTE COMING AFTER WHITESPACE 
    # AND WE DON'T WANT IT BECAUSE IT'S NOT PART OF THE SPECIAL PAGE NAME !!!
```

## Deleted Lockdown directives

```php
# MediaWiki as Drupal !!! No more redundant webpages to crawl !!!
    wfLoadExtension( 'Lockdown' );
    // $wgActionLockdown['history'] = [ 'user' ];
    $wgActionLockdown['edit'] = array( 'sysop' );
    $wgActionLockdown['delete'] = array( 'sysop' );
    $wgActionLockdown['move'] = array('sysop');
    $wgActionLockdown['protect'] = array( 'sysop' );
    $wgActionLockdown['history'] = array( 'sysop' );
    $wgActionLockdown['createtalk'] = array('sysop');

    // $wgSpecialPageLockdown['Export'] = [ 'user' ];
    // $wgSpecialPageLockdown['Longpages'] = array('sysop');
    $wgSpecialPageLockdown['Recentchanges'] = array('sysop');
```

## Original backup

* For Lockdown extension, we lock actions, then lock pages
  * Go to home directory
  * Create a file with a list of the names
  * Wrap each list item in a Lockdown command and redirect the output to a new file
  * Paste content of the processed list in LocalSettings.php

[All special page names are available here](
https://www.mediawiki.org/w/api.php?action=query&meta=siteinfo&siprop=specialpagealiases).


Copy paste this webpage, as rendered in the web browser, into a `nano special_page_names.txt

Then.

```shell
cd ~
apt update -y
apt upgrade -y
pandoc -t plain 'https://www.mediawiki.org/w/api.php?action=query&meta=siteinfo&siprop=specialpagealiases' |
  grep -oP '"realname": \K"[A-Za-z0-9]*",' |
  sort -u |
  tr -d '[,"]' |
  tr -s ' ' \
  > special_page_names.txt

awk '{ print "$wgSpecialPageLockdown[\47"$0"\47] = array(\47sysop\47);" }' special_page_names.txt > special_page_names_processed.txt
# `\47` means `'`
# Due to \K we don't get Special: before each name
```
