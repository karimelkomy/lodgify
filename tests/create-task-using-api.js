import { urls } from "../data/urls";
import { taskDetails } from "../data/taskDetails";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import InboxPage from "../pages/InboxPage";
import TasksApi from "../apis/TasksApi";

fixture`Todoist Tests`.page(urls.home);

test("Validate create task using API", async (t) => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const inboxPage = new InboxPage();

  await TasksApi.createTask({ taskDetails });

  await homePage.openLoginPage();

  await loginPage.login();

  await inboxPage.openInbox();
  await inboxPage.validateTask({ taskDetails });
}).meta({
  customTest: "validate-create-task-using-api",
});
