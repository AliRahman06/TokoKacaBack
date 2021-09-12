import express, { NextFunction, Request, Response } from 'express';
const router = express.Router();
import Db from '../libs/db';

/* GET home page. */
router.get('/tampil', async function(req: Request, res: Response, next: NextFunction) {
    try {
      const d = await Db.query('SELECT * FROM pembeli');
      res.json(d);
    } catch(err) {
      console.log(err);
    } finally {
      res.json({ message: process.env.DB_USER, status: true, timeStamp: 324234243 })
    }
  });
  
  router.post('/tambah', async function(req: Request, res: Response) {
    const input = req.body;
    try {
      await Db.query('INSERT INTO todolist VALUES(NULL, ?, ?)', [input.isi, input.status])
    } catch(err) {
      
    } finally {
      res.json({ message: 'oke' });
    }
  });
  
  router.put('/edit/:id', async function(req: Request, res: Response) {
    const input = req.body;
    const id = req.params.id;
    try {
      await Db.query('UPDATE todolist SET isi = ?, status = ? WHERE todolist.id = ?', [input.isi, input.status, id])
    } catch(err) {
      
    } finally {
      res.json({ message: 'oke' });
    }
  });
  
  router.delete('/hapus/:id', async function(req: Request, res: Response) {
    const id = req.params.id;
    try {
      await Db.query('DELETE FROM todolist WHERE todolist.id = ?', [id])
    } catch(err) {
      
    } finally {
      res.json({ message: 'oke' });
    }
  });
  

export default router;
