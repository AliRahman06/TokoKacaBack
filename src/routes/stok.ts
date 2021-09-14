import express, { NextFunction, Request, Response } from 'express';
const router = express.Router();
import Db from '../libs/db';

/* GET home page. */
router.get('/', async function(req: Request, res: Response, next: NextFunction) {
    try {
      const d = await Db.query('SELECT stok_kaca.*, jenis_kaca.nama , jenis_kaca.panjang, jenis_kaca.lebar , jenis_kaca.tebal  FROM stok_kaca LEFT JOIN jenis_kaca ON stok_kaca.id_jenis_kaca = jenis_kaca.id');
      res.json(d);
    } catch(err) {
      console.log(err);
    }
  });
  
  router.post('/', async function(req: Request, res: Response) {
    const input = req.body;
    try {
      await Db.query('INSERT INTO stok_kaca VALUES(NULL, ?, ?, ?, ?)', [input.id_jenis_kaca, input.tanggal, input.stok, input.harga])
    } catch(err) {
      console.log(err);
    } finally {
      res.json({ message: 'oke' });
    }
  });
  
  router.put('/:id', async function(req: Request, res: Response) {
    const input = req.body;
    const id = req.params.id;
    try {
      await Db.query('UPDATE stok_kaca SET id_jenis_kaca = ?, stok = ?, harga = ? WHERE id = ?', [input.id_jenis_kaca, input.stok, input.harga, id])
    } catch(err) {
      console.log(err);
    } finally {
      res.json({ message: 'oke' });
    }
  });
  
  router.delete('/:id', async function(req: Request, res: Response) {
    const id = req.params.id;
    try {
      await Db.query('DELETE FROM stok_kaca WHERE id = ?', [id])
    } catch(err) {
      console.log(err);
    } finally {
      res.json({ message: 'oke' });
    }
  });

  export default router;