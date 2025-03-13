const {Course} = require("../../../../schema/index");

const getAllCourse = async (req, res) => {
  try {
    const course = await Course.find().lean();
    res.send(course);
  } catch (err) {
    console.log(err);
    res.status(200).send(err);
  }
};

const getCourse = async (req, res) => {
  const course = await Course.find().lean();
  try {
    const { id } = req.params;
    const final = course.find((c) => c.id === Number(id));
    if (!final) {
      res.status(404).send("Not Found");
    }
    res.send(final);
  } catch (err) {
    console.log(err);
  }
};

const updateCourse = (req, res) => {
  const { name } = req.body;
  let courses = [];
  const course = {
    id: courses.length + 1,
    name,
  };
  courses.push(course);
  res.status(200).send(courses);
};

const createCourse = async (req, res) => {
  const { name, author, type } = req.body;
  try {
    const course = new Course({
      name: name,
      author: author,
      type: type,
      isPublished: true,
    });

    const create = await course.save();

    res.send({ create });
  } catch (error) {
    res.status(200).send(error);
  }
};

module.exports = {
  getAllCourse,
  getCourse,
  updateCourse,
  createCourse,
};
