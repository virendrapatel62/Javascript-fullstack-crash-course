const express = require("express");
const {
  getAllStudents,
  getStudentById,
} = require("../controllers/student-controller");

const router = express.Router();
// /api/students

router.get("/", getAllStudents);
router.get("/:id", getStudentById);

module.exports = router;
