import { test, expect } from "@playwright/test";

test("upload flow works", async ({ page }) => {
    await page.goto("http://localhost:3000/upload");

    await expect(page).toHaveTitle(/The Chat/);
});