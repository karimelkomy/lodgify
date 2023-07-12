import { Chance } from "chance";

const chance = new Chance();

export const projectDetails = {
  projectName: chance.word() + chance.timestamp(),
  taskName: chance.word() + chance.timestamp(),
  taskDescription: chance.sentence(),
};
