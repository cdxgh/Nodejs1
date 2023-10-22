const express = require("express");
const {handleGetAllUsers, handleGetUserById, handleUpdateById, handleCreateUser} = require('../controller/user')
const router = express.Router();
// router.get("/users", async(req,res)=>{
//     const allDbUsers = await User.find({});
//     const html =`
//     <ul>
//     ${allDbUsers
//     .map((user)=>`<li>${user.firstName}-${user.email}</li>`)
//     .join("")}
//     </ul>
//     `;
//     res.send(html);
// });
router.route("/").get(handleGetAllUsers).post(handleCreateUser);

router
.route("/:id")
.get(handleGetUserById)
.patch(handleUpdateById);

module.exports = router;
