import express, { Request, Response } from "express";
import data from "../routes/data.json";
import fs from "fs";
import { pool } from "./pgdb";
const router = express.Router();
const app = express();

//GET ALL MEMBERS
router.get("/members", (req: Request, res: Response) => {
  pool.query("SELECT * from members", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});
//join on members and customers
router.get("/members&customer", (req: Request, res: Response) => {
  pool.query(
    "SELECT members.*,customers.name FROM members INNER JOIN customers ON members.id=customers.cust_id",
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
});
// GET MEMBERS BY ID
router.get("/members/:id", (req: Request, res: Response) => {
  const given_id = parseInt(req.params.id);
  pool.query(
    "SELECT * FROM members WHERE id = $1",
    [given_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (results.rows.length == 0) {
        res.status(400).json({
          message: `No Member with Member ID ${given_id} Found`,
        });
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
});

// adding a member
router.post("/members/addMember", (req: Request, res: Response) => {
  let newMember = {
    firstname: req.body.firstname,
    middlename: req.body.middlename,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    role: req.body.role,
    address: req.body.address,
  };

  if (
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
    pool.query(
      "INSERT INTO members (firstname, middlename,lastname,email,phone,role,address) VALUES ($1, $2,$3,$4,$5,$6,$7)",
      [
        newMember.firstname,
        newMember.middlename,
        newMember.lastname,
        newMember.email,
        newMember.phone,
        newMember.role,
        newMember.address,
      ],
      (error, results) => {
        if (error) {
          throw error;
        }

        res.status(201).send(`User added`);
      }
    );
  }
});

// edit member

router.put("/members/editMember/:id", async (req: Request, res: Response) => {
  let given_id = parseInt(req.params.id);
  const val = await pool.query(`SELECT * FROM members WHERE id=$1`, [given_id]);

  let orig_firstname = val.rows[0].firstname;
  let orig_middlename = val.rows[0].middlename;
  let orig_lastname = val.rows[0].lastname;
  let orig_email = val.rows[0].email;
  let orig_role = val.rows[0].role;
  let orig_address = val.rows[0].address;

  orig_firstname = req.body.firstname ? req.body.firstname : orig_firstname;
  orig_middlename = req.body.middlename ? req.body.middlename : orig_middlename;
  orig_lastname = req.body.lastname ? req.body.lastname : orig_lastname;
  orig_email = req.body.email ? req.body.email : orig_email;
  orig_role = req.body.role ? req.body.role : orig_role;
  orig_address = req.body.address ? req.body.address : orig_address;

  pool.query(
    "UPDATE members SET firstname = $1, middlename = $2, lastname=$3, email=$4,role=$5,address=$6 WHERE id = $7",
    [
      orig_firstname,
      orig_middlename,
      orig_lastname,
      orig_email,
      orig_role,
      orig_address,
      given_id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (results.rows.length == 0) {
        res.status(400).json({
          message: `No Member with Member ID ${given_id} Found`,
        });
      } else {
        res.status(200).send(`User modified with ID: ${given_id}`);
      }
    }
  );
});
// saving data from frontend
router.put(
  "/members/editMember&Customer/:id",
  async (req: Request, res: Response) => {
    let given_id = parseInt(req.params.id);
    //console.log(`given is ${given_id}`);
    const val = await pool.query(`SELECT * FROM members WHERE id=$1`, [
      given_id,
    ]);
    const cust_val = await pool.query(
      `SELECT name FROM customers WHERE cust_id=$1`,
      [given_id]
    );

    let orig_firstname = val.rows[0].firstname;
    let orig_middlename = val.rows[0].middlename;
    let orig_lastname = val.rows[0].lastname;
    let orig_email = val.rows[0].email;
    let orig_role = val.rows[0].role;
    let orig_address = val.rows[0].address;
    let orig_custname = cust_val.rows[0].name;
    //console.log(`starting original role is ${orig_role}`);
    orig_firstname = req.body.firstname ? req.body.firstname : orig_firstname;
    orig_middlename = req.body.middlename
      ? req.body.middlename
      : orig_middlename;
    orig_lastname = req.body.lastname ? req.body.lastname : orig_lastname;
    orig_email = req.body.email ? req.body.email : orig_email;
    orig_role = req.body.role ? req.body.role : orig_role;
    orig_address = req.body.address ? req.body.address : orig_address;
    orig_custname = req.body.custname ? req.body.custname : orig_custname;
    //console.log(`orig role is ${orig_role} ${typeof(orig_role)}`);
    pool.query(
      "UPDATE members SET firstname = $1, middlename = $2, lastname=$3, email=$4,role=$5,address=$6 WHERE id = $7",
      [
        orig_firstname,
        orig_middlename,
        orig_lastname,
        orig_email,
        parseInt(orig_role),
        orig_address,
        given_id,
      ],
      (error, results) => {
        if (error) {
          throw error;
        }
        if (results.rows.length == 0) {
          res.status(400).json({
            message: `No Member with Member ID ${given_id} Found`,
          });
        } else {
          res.status(200).send(`User modified with ID: ${given_id}`);
        }
      }
    );

    pool.query(
      "UPDATE customers SET name = $1 WHERE cust_id = $2",
      [orig_custname, given_id],
      (error, results) => {
        if (error) {
          throw error;
        }
        if (results.rows.length == 0) {
          res.status(400).json({
            message: `No Member with Member ID ${given_id} Found`,
          });
        } else {
          res.status(200).send(`User modified with ID: ${given_id}`);
        }
      }
    );
  }
);
// delete member
router.delete("/members/deleteMember/:id", (req: Request, res: Response) => {
  let given_id = parseInt(req.params.id);

  pool.query(
    "DELETE FROM members WHERE id = $1",
    [given_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (results.rows.length == 0) {
        res.status(400).json({
          message: `No Member with Member ID ${given_id} Found`,
        });
      } else {
        res.status(200).send(`User deleted with ID: ${given_id}`);
      }
    }
  );
});
// delete from both
router.delete("/members/deleteFromBoth/:id", (req: Request, res: Response) => {
  let given_id = parseInt(req.params.id);

  pool.query(
    "DELETE FROM customers WHERE cust_id = $1",
    [given_id],
    (error, results) => {
      if (error) {
        throw error;
      }
       {
        res.status(200).send(`User deleted with ID: ${given_id}`);
      }
    }
  );
  pool.query(
    "DELETE FROM members WHERE id = $1",
    [given_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (results.rows.length == 0) {
        res.status(400).json({
          message: `No Member with Member ID ${given_id} Found`,
        });
      } else {
        res.status(200).send(`User deleted with ID: ${given_id}`);
      }
    }
  );
});
export { router };
