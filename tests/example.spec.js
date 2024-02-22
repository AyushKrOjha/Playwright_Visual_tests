const { test, expect } = require("@playwright/test");

/*
Captures a screenshot of the entire viewport 
and saves it as computer.png.
*/
test("Visual Testing", async ({ page }) => {
  await page.goto("https://wework-co-in-dot-wework-staging.el.r.appspot.com/");
  await expect(page).toHaveScreenshot("computer.png");
});

/*
Captures a full-page screenshot 
and saves it as computer-fullpage.png.
Ideal for overview checks or testing layout across large pages.
*/
test("Visual Testing full page", async ({ page }) => {
  await page.goto("https://wework-co-in-dot-wework-staging.el.r.appspot.com/");
  await expect(page).toHaveScreenshot("computer-fullpage.png", {
    fullPage: true,
  });
});

/*
masks the specified element (carousel image) before comparison. 
Saves it as computer-masked.png.
This is useful for excluding dynamic 
or irrelevant content from the comparison.
*/
test("Visual Testing full page with masking", async ({ page }) => {
  await page.goto(
    "https://wework-co-in-dot-wework-staging.el.r.appspot.com/workspaces/on-demand/day-pass/"
  );
  await expect(page).toHaveScreenshot("computer-masked.png", {
    fullPage: true,
    mask: [page.locator("a img[alt='Cross selling carousel']")],
  });
});

/*
Captures a screenshot of the .Workspace_container element 
and saves it as computer-workspace-container.png.
Focuses on a specific section of the page for more targeted testing.
*/
test("Visual Testing specific section", async ({ page }) => {
  await page.goto(
    "https://wework-co-in-dot-wework-staging.el.r.appspot.com/bangalore/mg-road/galaxy-residency-road/"
  );
  await expect(page.locator("div.Workspace_container")).toHaveScreenshot(
    "computer-workspace-container.png"
  );
});

/*
Captures a screenshot of the 
".Workspace_container" element with a tighter tolerance for pixel differences (max 2%). 
Saves it as computer-workspace-container.png.
This test aims for higher visual fidelity 
and can be useful for critical UI elements.
*/
test.only("pixel ratio", async ({ page }) => {
  await page.goto(
    "https://wework-co-in-dot-wework-staging.el.r.appspot.com/bangalore/mg-road/galaxy-residency-road/"
  );
  await expect(page.locator("div.Workspace_container")).toHaveScreenshot(
    "computer-workspace-container.png",
    {
      maxDiffPixelRatio: 0.02,
    }
  );
});
