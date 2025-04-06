Untested codes for changing global URL patterns with Pathauto

1. **Modify URL Patterns**:
   - Navigate to `/admin/config/search/path/patterns`.
   - Update the **Content** pattern to exclude language prefixes. For example:
     - Change the pattern to `/[node:title]` if you want URLs without a language prefix.
     - For language-specific content, set the pattern as `/[language]/[node:title]` to keep language prefixes where necessary.

2. **Adjust Patterns for Specific Content Types**:
   - Go to the "Content Type" section and adjust the patterns for each content type:
     - For non-language-specific URLs: `/[node:title]`
     - For language-specific URLs: `/[language]/[node:title]`

3. **Rebuild Aliases**:
   - Use the following Drush command to regenerate the aliases:
     ```bash
     drush pathauto:aliases
     ```
