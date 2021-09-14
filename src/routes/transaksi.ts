import express, { NextFunction, Request, Response } from 'express';
const router = express.Router();
import Db from '../libs/db';

/* GET home page. */
router.get('/', async function(req: Request, res: Response, next: NextFunction) {
    try {
      const d = await Db.query('SELECT * FROM transaksi');
      res.json(d);
    } catch(err) {
      console.log(err);
    } finally {
      res.json({ message: process.env.DB_USER, status: true, timeStamp: 324234243 })
    }
  });

router.get('/tampil', async function(req: Request, res: Response, next: NextFunction) {
    try {
      const d = await Db.query('SELECT transaksi.*, pembeli.nama , pembeli.hp, pembeli.alamat FROM transaksi LEFT JOIN pembeli ON transaksi.id_pembeli = pembeli.id');
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
      await Db.query('INSERT INTO transaksi VALUES(NULL, ?, ?, ?, ?, ?)', [input.id_pembeli, input.tanggal, input.total, input.bayar, input.kembali])
    } catch(err) {
      
    } finally {
      res.json({ message: 'oke' });
    }
  });
  
  router.put('/:id', async function(req: Request, res: Response) {
    const input = req.body;
    const id = req.params.id;
    try {
      await Db.query('UPDATE transaksi SET id_pembeli = ?, tanggal = ?, total = ?, bayar = ?, kembali = ? WHERE transaksi.id = ?', [input.id_pembeli, input.tanggal, input.total, input.bayar, input.kembali, id])
    } catch(err) {
      
    } finally {
      res.json({ message: 'oke' });
    }
  });
  
  router.delete('/:id', async function(req: Request, res: Response) {
    const id = req.params.id;
    try {
      await Db.query('DELETE FROM transaksi WHERE transaksi.id = ?', [id])
    } catch(err) {
      
    } finally {
      res.json({ message: 'oke' });
    }
  });
  

export default router;
