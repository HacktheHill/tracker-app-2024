import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get('/ping', (req: Request, res: Response) => {
  res.status(200).send('Pong!');
});

export default router;