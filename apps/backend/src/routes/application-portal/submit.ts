import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.post('/submit', (req: Request, res: Response) => {
  // write to db...
  res.status(200).send('Submitted!');
});

export default router;