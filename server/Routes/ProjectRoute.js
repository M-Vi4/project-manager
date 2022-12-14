import express from "express";
import {
  addComment,
  addProcess,
  createProject,
  deleteComment,
  deleteProcess,
  deleteProject,
  getProject,
  getTimeLinePosts,
  getUserProject,
  likeProject,
  updateProject,
} from "../Controllers/ProjectController.js";

const router = express.Router();

router.post("/createProject", createProject);
router.get("/:id/getProject", getProject);
router.put("/:id/updateProject", updateProject);
router.delete("/:id/deleteProject", deleteProject);
router.put("/:id/likeProject", likeProject);
router.put("/:id/addProcess", addProcess);
router.delete("/:id/deleteProcess", deleteProcess);
router.put("/:id/addComment", addComment);
router.delete("/:id/deleteComment", deleteComment);
router.get("/:id/timeLine", getTimeLinePosts);
router.get("/:id/getUserProjects", getUserProject);
export default router;
