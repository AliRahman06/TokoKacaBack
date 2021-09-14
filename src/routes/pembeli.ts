import express, { NextFunction, Request, Response } from 'express';
const router = express.Router();
import Db from '../libs/db';

/* GET home page. */
router.get('/', async function(req: Request, res: Response, next: NextFunction) {
    try {
      const d = await Db.query('SELECT * FROM pembeli');
      res.json(d);
    } catch(err) {
      console.log(err);
    } finally {
      res.json({ message: process.env.DB_USER, status: true, timeStamp: 324234243 })
    }
  });
  
  router.get('/nama', async function(req: Request, res: Response, next: NextFunction) {
    const input = req.body;
    try {
      const d = await Db.query('SELECT id, nama, hp, alamat FROM pembeli WHERE nama LIKE %?%',[input.nama]);
      res.json(d);
    } catch(err) {
      console.log(err);
    } finally {
      res.json({ message: process.env.DB_USER, status: true, timeStamp: 324234243 })
    }
  });
router.post('/', async function(req: Request, res: Response) {
    const input = req.body;
    try {
      await Db.query('INSERT INTO pembeli VALUES(NULL, ?, ?, ?)', [input.nama, input.hp, input.alamat])
    } catch(err) {
      
    } finally {
      res.json({ message: 'oke' });
    }
  });
  
router.put('/:id', async function(req: Request, res: Response) {
    const input = req.body;
    const id = req.params.id;
    try {
      await Db.query('UPDATE pembeli SET nama = ?, hp = ?, alamat = ? WHERE pembeli.id = ?', [input.nama, input.hp, input.alamat, id])
    } catch(err) {
      
    } finally {
      res.json({ message: 'oke' });
    }
  });
  
router.delete('/:id', async function(req: Request, res: Response) {
    const id = req.params.id;
    try {
      await Db.query('DELETE FROM pembeli WHERE pembeli.id = ?', [id])
    } catch(err) {
      
    } finally {
      res.json({ message: 'oke' });
    }
  });

  export default router;