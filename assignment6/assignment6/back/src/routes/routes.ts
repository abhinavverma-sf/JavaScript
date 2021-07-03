import express, { Request, Response } from "express";
import data from "../routes/data.json";
import fs from "fs";
const router = express.Router();
const app = express();

//GET ALL MEMBERS
router.get("/", (req, res) => {
  res.json(data);
});

// adding a member
router.post("/addMember", (req: Request, res: Response) => {
  let len = data.length;
  let last_id = data[data.length - 1].id;
  let newMember = {
    id: last_id + 1,
    firstname: req.body.firstname,
    middlename: req.body.middlename,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    role: req.body.role,
    address: req.body.address,
  };

  if (
    !newMember.id ||
    !newMember.firstname ||
    !newMember.middlename ||
    !newMember.lastname ||
    !newMember.email ||
    !newMember.phone ||
    !newMember.role ||
    !newMember.address
  ) {
    res.status(400).json({
      message: `Give Correct Input`,
    });
  } else {
    data.push(newMember);
    console.log(newMember);
    res.status(200).json({
      message: `Pushed member ${newMember}`,
    });
    const content = JSON.stringify(newMember);
    console.log(content);
    // reading JSON file
    var new_data = fs.readFileSync(
      "/home/abhinav.verma/Documents/Javascript/assignment6/back/src/routes/data.json",
      { encoding: "utf8" }
    );
    var json = JSON.parse(new_data);
    // pushing newmember

    json.push(newMember);

    //writing on to JSON file

    fs.writeFile(
      "/home/abhinav.verma/Documents/Javascript/assignment6/back/src/routes/data.json",
      JSON.stringify(json, null, 2),
      function (err) {
        if (err) {
          throw err;
        } else {
          console.log("File saved");
        }
      }
    );
  }
});

// edit member

router.put("/editMember/:id", (req: Request, res: Response) => {
  let given_id = Number(req.params.id);
  let index = 0;
  let found_index = false;
  while (index < data.length) {
    if (data[index].id == given_id) {
      found_index = true;
      break;
    }
    index++;
  }

  if (found_index == true) {
    data[index].firstname = req.body.firstname
      ? req.body.firstname
      : data[index].firstname;
    data[index].middlename = req.body.middlename
      ? req.body.middlename
      : data[index].middlename;
    data[index].lastname = req.body.lastname
      ? req.body.lastname
      : data[index].lastname;
    data[index].email = req.body.email ? req.body.email : data[index].email;
    data[index].phone = req.body.phone ? req.body.phone : data[index].phone;
    data[index].role = req.body.role ? req.body.role : data[index].role;
    data[index].address = req.body.address
      ? req.body.address
      : data[index].address;

    let edited_data = data[index];
    var new_data = fs.readFileSync(
      "/home/abhinav.verma/Documents/Javascript/assignment6/back/src/routes/data.json",
      { encoding: "utf8" }
    );
    var json = JSON.parse(new_data);
    // pushing newmember

    json[index] = edited_data;

    //writing on to JSON file

    fs.writeFile(
      "/home/abhinav.verma/Documents/Javascript/assignment6/back/src/routes/data.json",
      JSON.stringify(json, null, 2),
      function (err) {
        if (err) {
          throw err;
        } else {
          console.log("Data element edited");
        }
      }
    );

    res.status(200).json({
      message: `Edited member ${given_id}`,
    });
  } else {
    res.status(400).json({
      message: `No Member with Member ID ${given_id} Found`,
    });
  }
});

// delete member
router.delete("/deleteMember/:id", (req: Request, res: Response) => {
  let given_id = Number(req.params.id);
  let index = 0;
  let found_index = false;
  while (index < data.length) {
    if (data[index].id == given_id) {
      found_index = true;
      break;
    }
    index++;
  }
  if (found_index == true) {
    data.splice(index, 1);
    var new_data = fs.readFileSync(
      "/home/abhinav.verma/Documents/Javascript/assignment6/back/src/routes/data.json",
      { encoding: "utf8" }
    );
    var json = JSON.parse(new_data);
    // pushing newmember

    json.splice(index, 1);

    //writing on to JSON file

    fs.writeFile(
      "/home/abhinav.verma/Documents/Javascript/assignment6/back/src/routes/data.json",
      JSON.stringify(json, null, 2),
      function (err) {
        if (err) {
          throw err;
        } else {
          console.log("Data element deleted");
        }
      }
    );
    res.status(200).json({
      message: `Deleted member ${given_id}`,
    });
  } else {
    res.status(400).json({
      message: `No Member with Member ID ${given_id} Found`,
    });
  }
  console.log(data);
});

export { router };
