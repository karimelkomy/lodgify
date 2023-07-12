import { urls } from "../data/urls";
import { projectDetails } from "../data/projectDetails";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import ProjectsApi from "../apis/ProjectsApi";

fixture`Todoist Tests`.page(urls.home);

test("Validate create task using UI", async (t) => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const projectPage = new ProjectPage();

  await homePage.openLoginPage();

  await loginPage.login();

  await projectPage.openProject({ projectDetails });

  await projectPage.createTask({ projectDetails });

  const response = await ProjectsApi.getTasks();
  const containsTask = response.some(
    (task) => task.content === projectDetails.taskName
  );

  await t.expect(containsTask).ok();
}).meta({
  customTest: "validate-create-task-using-ui",
});
