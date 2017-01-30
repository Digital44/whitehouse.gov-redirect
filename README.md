# Whitehouse.gov Redirect Chrome Extension

On Jan 20th 2017, the contents of whitehouse.gov under the Obama administration
were migrated to obamawhitehouse.archives.gov. However, links and google
results were not updated, resulting in links failing.

This is a simple chrome extension that tries to redirect if the current
whitehouse.gov returns a 404.

# How to run as a developer

1. Clone the repo or download the zip

    > git clone https://github.com/liyanchang/whitehouse.gov-redirect.git

2. Open the Chrome extensions page at chrome://extensions

3. Turn on `Developer Mode`

    The `Developer mode` checkbox in the upper right hand corner should be checked.

4. Load the extenstion

    Click `Load unpacked extension` and navigate to the repo and click select.

    ![Final result](https://cloud.githubusercontent.com/assets/328073/22409746/ee64ae78-e65c-11e6-9741-d8c777a0c699.png)

5. Try it out:

    - https://whitehouse.gov/administration/eop/ostp/nstc/

6. If you make modifications to the code, click `Reload` for Chrome to refresh
   the extension.
