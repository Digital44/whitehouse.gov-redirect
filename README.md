# Whitehouse.gov Redirect Chrome Extension

On Jan 20th 2017, the contents of [whitehouse.gov](https://www.whitehouse.gov)
under the Obama administration were migrated to the National Archives and
hosted at [obamawhitehouse.archives.gov](https://obamawhitehouse.archives.gov/).
However, this resulted in broken links and unusable Google results.

This is a simple Chrome extension that tries to redirect if the current
[whitehouse.gov](https://www.whitehouse.gov) returns a 404.

## Install from the Chrome Web Store

You can install this from the [Chrome Web Store
here](https://chrome.google.com/webstore/detail/whitehousegov-archive-hel/bcllkdmaebllgfjplpjkdaaekpjnhmka).
Click `Add to Chrome` to install.

## How to run as a developer

For those of you interested in contributing and running this extension as a
developer, you can do so with the following instructions. Pull requests
welcome!

1. Clone the repo or download the zip

    > git clone https://github.com/liyanchang/whitehouse.gov-redirect.git

2. Open the Chrome extensions page at `chrome://extensions`

3. Turn on `Developer Mode`

    The `Developer mode` checkbox in the upper right hand corner should be
    checked.

4. Load the extension

    Click `Load unpacked extension` and navigate to the repo and click select.

    ![Final
    result](https://cloud.githubusercontent.com/assets/328073/22409746/ee64ae78-e65c-11e6-9741-d8c777a0c699.png)

5. Try it out:

    - https://whitehouse.gov/administration/eop/ostp/nstc/

6. If you make modifications to the code, click `Reload` on the
   `chrome://extensions` page for Chrome to refresh
   the extension.
