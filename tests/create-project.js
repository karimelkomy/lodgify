import ProjectsApi from "../apis/ProjectsApi";
import { urls } from "../data/urls";
import { projectDetails } from "../data/projectDetails";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import AppPage from "../pages/AppPage";

fixture`Todoist Tests`.page(urls.home);

test("Validate create project", async (t) => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const appPage = new AppPage();

  const response = await ProjectsApi.createProject({ projectDetails });

  await t.expect(response.name).eql(projectDetails.projectName);

  await homePage.openLoginPage();

  await loginPage.login();

  await appPage.validateProject({ projectDetails });
}).meta({
  customTest: "validate-create-project",
});
