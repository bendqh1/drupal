If language direction can't be changed from keyboard or **Left CTRL + Shift doesn't work on a right-to-left (Hebrew) website suddenly** read my following case report.

> My operating system is **Windows 11** and I operate my Drupal **10.1.5** through it.
> 
> Becuase my website is in Hebrew, a right-to-left written language, I often need to switch writing direction from Hebrew to English (from RTL to LTR), for example, when I edit the **source code of a node**.
> 
> In Windows 11, the way to switch writing direction from right to left is <kbd>Left CTRL</kbd> + <kbd>Left Shift</kbd>, **or**, from left to right is <kbd>Right CTRL</kbd> + <kbd>Right Shift</kbd>.
> 
> For some reason, in the last several days the directionality change doesn't work on Drupal but it continues to work regularly on other programs (such as Windows Notepad or Windows version of LibreOffice Writer). Therefore I can't easily edit nodes source code LTRwise and that's a serious problem for me.
>
> * My web browser is latest Microsoft Edge: Version **119.0.2151.58** Official build 64-bit
> * No error in web browser console after pressing <kbd>Left CTRL</kbd> + <kbd>Left Shift</kbd> either in regular edit mode or in source code edit mode
> * The theme is Olivero
> * No modules are installed on the website
> * The problem continues after turning off all browser extensions and then flushing all Drupal caches with Drush

The problem didn't happen in latest Google Chrome: Version 119.0.6045.160 Official Build 64-bit, so it was most probably a Microsoft Edge web browser bug.

Since then, the alleged bug in Microsoft Edge was fixed, if it was a bug.
