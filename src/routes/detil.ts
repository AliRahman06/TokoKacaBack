import express, { NextFunction, Request, Response } from 'express';
const router = express.Router();
import Db from '../libs/db';

/* GET home page. */
router.get('/', async function(req: Request, res: Response, next: NextFunction) {
    try {
      const d = await Db.query('SELECT * FROM detil_transaksi');
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
      await Db.query('INSERT INTO detil_transaksi VALUES(NULL, ?, ?, ?, ?, ?)', [input.id_transaksi, input.id_jenis_kaca, input.panjang, input.lebar, input.biaya])
    } catch(err) {
      
    } finally {
      res.json({ message: 'oke' });
    }
  });
  
  router.put('/:id', async function(req: Request, res: Response) {
    const input = req.body;
    const id = req.params.id;
    try {
      await Db.query('UPDATE detil_transaksi SET id_transaksi = ?, id_jenis_kaca = ?, panjang = ?, lebar = ?, biaya = ? WHERE detil_transaksi.id = ?', [input.id_transaksi, input.id_jenis_kaca, input.panjang, input.lebar, input.biaya, id])
    } catch(err) {
      
    } finally {
      res.json({ message: 'oke' });
    }
  });
  
  router.delete('/:id', async function(req: Request, res: Response) {
    const id = req.params.id;
    try {
      await Db.query('DELETE FROM detil_transaksi WHERE detil_transaksi.id = ?', [id])
    } catch(err) {
      
    } finally {
      res.json({ message: 'oke' });
    }
  });

  export default router;