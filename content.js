// content.js
const replacements = {
  1: "<div class='storycat'><img src='" + chrome.runtime.getURL('images/aeb255a66e9c9a39.png') + "' alt='A fine boi (1 points)' /><div>A fine boi</div><div class='points'>(1)</div></div>",
  3: "<div class='storycat'><img src='" + chrome.runtime.getURL('images/f8da5f0333091411.png') + "' alt='He chonk (3 points)' /><div>He chonk</div><div class='points'>(3)</div></div>",
  5: "<div class='storycat'><img src='" + chrome.runtime.getURL('images/0c81e6f0863bfb41.png') + "' alt='A heckin chonker (5 points)' /><div>A heckin' chonker</div><div class='points'>(5)</div></div>",
  8: "<div class='storycat'><img src='" + chrome.runtime.getURL('images/d052ca45d297daae.png') + "' alt='Hefty chonk (8 points)' /><div>Hefty chonk</div><div class='points'>(8)</div></div>",
  13: "<div class='storycat'><img src='" + chrome.runtime.getURL('images/6e592faf692f4da6.png') + "' alt='Megachonker (13 points)' /><div>Megachonker</div><div class='points'>(13)</div></div>",
  21: "<div class='storycat'><img src='" + chrome.runtime.getURL('images/4d82cac667bebaa6.png') + "' alt='OH LAWD, HE COMIN (21 points)' /><div>OH LAWD, HE COMIN'</div><div class='points'>(21)</div></div>",
};

function replaceText() {
  const elements = document.querySelectorAll(
    '[data-testid="issue-field-classic-story-point.ui.inline-view-field"], .MuiTypography-root.MuiTypography-h3'
  );
  elements.forEach((element) => {
    const value = element.textContent.trim();
    if (replacements[value]) {
      element.innerHTML = replacements[value];
    }
  });
}

replaceText();

// Listen for DOM changes and replace text
const observer = new MutationObserver(replaceText);
observer.observe(document, { subtree: true, childList: true });
