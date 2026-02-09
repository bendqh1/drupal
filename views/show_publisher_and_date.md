### What I did to show “Published by” on all nodes

1. Created a **View** that outputs a **Block**.
2. Configured the View to show **Content (Fields)** instead of full content.
3. Added a **Contextual filter** (these may be hidden so locate them):  
   **Content → Content ID**, with default value **Content ID from URL**.
4. Added **Fields** to the View:
   - **Authored by** (publisher name)
   - **Authored on** (publish date)
5. Rewrote the field output to display:  
   **Published by [Authored by] on [Authored on]**
6. Placed the resulting **Views block** on node pages.

**Result:** One reusable block that shows publisher info for all content types, without Twig or per-type configuration.
