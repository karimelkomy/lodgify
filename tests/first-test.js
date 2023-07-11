import { urls } from "../data/urls";

fixture`First fixture`.page(urls.home).beforeEach(async (t) => {
  await t.setNativeDialogHandler(() => true);
});

test("first test", async (t) => {}).meta({
  customTest: "first-test",
});
