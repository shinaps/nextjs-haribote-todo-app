import { expect, test } from "@playwright/test";

const APP_URL = "http://127.0.0.1:3000";

test("add task by click Submit button", async ({ page }) => {
  await page.goto(APP_URL);

  // add task
  const msgPromise = page.waitForEvent("console");
  await page.getByPlaceholder("add new task...").click();
  await page.getByPlaceholder("add new task...").fill("add new task");
  await page.getByRole("button", { name: "Submit" }).click();
  const msg = await msgPromise;
  expect(msg.text()).toBe("create {task: add new task}");
});

test("add task by Enter", async ({ page }) => {
  await page.goto(APP_URL);

  // add task
  const msgPromise = page.waitForEvent("console");
  await page.getByPlaceholder("add new task...").click();
  await page.getByPlaceholder("add new task...").fill("add new task");
  await page.getByPlaceholder("add new task...").press("Enter");
  const msg = await msgPromise;
  expect(msg.text()).toBe("create {task: add new task}");
});

test("update task by Enter", async ({ page }) => {
  await page.goto(APP_URL);

  // update task
  const msgPromise = page.waitForEvent("console");
  await page
    .getByRole("row", { name: "hop 2024-01-01 Open menu" })
    .getByRole("button")
    .click();
  await page.getByRole("menuitem", { name: "Edit" }).click();
  await page.getByPlaceholder("update task...").click();
  await page.getByPlaceholder("update task...").fill("update task");
  await page.getByPlaceholder("update task...").press("Enter");
  const msg = await msgPromise;
  expect(msg.text()).toBe("update hop to update task");
});

test("update task by click Submit button", async ({ page }) => {
  await page.goto(APP_URL);

  // update task
  const msgPromise = page.waitForEvent("console");
  await page
    .getByRole("row", { name: "hop 2024-01-01 Open menu" })
    .getByRole("button")
    .click();
  await page.getByRole("menuitem", { name: "Edit" }).click();
  await page.getByPlaceholder("update task...").click();
  await page.getByPlaceholder("update task...").fill("update task");
  await page.getByRole("button", { name: "Submit" }).click();
  const msg = await msgPromise;
  expect(msg.text()).toBe("update hop to update task");
});

test("delete task by click Delete button", async ({ page }) => {
  await page.goto(APP_URL);

  // delete task
  const msgPromise = page.waitForEvent("console");
  await page
    .getByRole("row", { name: "hop 2024-01-01 Open menu" })
    .getByRole("button")
    .click();
  await page.getByRole("menuitem", { name: "Delete" }).click();
  const msg = await msgPromise;
  expect(msg.text()).toBe("delete hop");
});
