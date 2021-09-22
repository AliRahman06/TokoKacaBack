import express, { NextFunction, Request, Response } from 'express';
const router = express.Router();
import Db from '../libs/db';

/* GET home page. */
  router.get('/detil', async function(req: Request, res: Response, next: NextFunction) {
    try {
        const d = await Db.query('SELECT detil_transaksi.*, transaksi.tanggal, transaksi.total, transaksi.bayar, transaksi.kembali, jenis_kaca.nama FROM detil_transaksi LEFT JOIN transaksi ON detil_transaksi.id_transaksi = transaksi.id LEFT JOIN jenis_kaca ON detil_transaksi.id_jenis_kaca= jenis_kaca.id');
        res.json(d);
    } catch(err) {
        console.log(err);
    }
    });
  
  router.get('/perdetil', async function(req: Request, res: Response, next: NextFunction) {
    try {
        let page = parseInt(req.query.page as string);
        if(page || 0){
            page = page
        }else{
            page = 1
        }
        let limit = parseInt(req.query.limit as string);
        if(limit || 0){
            limit = limit
        }else{
            limit = 5
        }
        const start = (page - 1) * limit;
        const d = await Db.query('SELECT detil_transaksi.*, jenis_kaca.nama FROM detil_transaksi LEFT JOIN jenis_kaca ON detil_transaksi.id_jenis_kaca = jenis_kaca.id LIMIT ?,?', [start,limit]);
        res.json(d);
    } catch(err) {
        console.log(err);
    }
    });
  
      router.get('/tampil/:id', async function(req: Request, res: Response, next: NextFunction) {
      const id = req.params.id;
    try {
      const d = await Db.query('SELECT detil_transaksi.*, transaksi.tanggal , transaksi.total, transaksi.bayar, transaksi.kembali, jenis_kaca.nama FROM detil_transaksi LEFT JOIN transaksi ON detil_transaksi.id_transaksi = transaksi.id LEFT JOIN jenis_kaca ON detil_transaksi.id_jenis_kaca = jenis_kaca.id WHERE id_transaksi = ?', [id]);
      res.json(d);
    } catch(err) {
      console.log(err);
    } finally {
      res.json({ message: process.env.DB_USER, status: true, timeStamp: 324234243 })
    }
  });

  router.get('/relasi4/:id', async function(req: Request, res: Response, next: NextFunction) {
      const id = req.params.id;
    try {
      const d = await Db.query('SELECT detil_transaksi.*, transaksi.tanggal , transaksi.total, transaksi.bayar, transaksi.kembali, jenis_kaca.nama AS nama_kaca, pembeli.nama, pembeli.hp, pembeli.alamat FROM detil_transaksi LEFT JOIN transaksi ON detil_transaksi.id_transaksi = transaksi.id LEFT JOIN jenis_kaca ON detil_transaksi.id_jenis_kaca = jenis_kaca.id LEFT JOIN pembeli ON transaksi.id_pembeli = pembeli.id WHERE id_transaksi = ?', [id]);
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
      await Db.query('INSERT INTO detil_transaksi VALUES(NULL, ?, ?, ?, ?, ?)', [input.id_transaksi, input.id_jenis_kaca, input.panjang, input.lebar, input.biaya]);
    } catch(err) {
      
    } finally {
      res.json({ message: 'oke' });
    }
  });
  
  router.put('/:id', async function(req: Request, res: Response) {
    const input = req.body;
    const id = req.params.id;
    try {
      await Db.query('UPDATE detil_transaksi SET id_transaksi = ?, id_jenis_kaca = ?, panjang = ?, lebar = ?, biaya = ? WHERE detil_transaksi.id = ?', [input.id_transaksi, input.id_jenis_kaca, input.panjang, input.lebar, input.biaya, id]);
    } catch(err) {
      
    } finally {
      res.json({ message: 'oke' });
    }
  });
  
  router.delete('/:id', async function(req: Request, res: Response) {
    const id = req.params.id;
    try {
      await Db.query('DELETE FROM detil_transaksi WHERE detil_transaksi.id = ?', [id]);
    } catch(err) {
      
    } finally {
      res.json({ message: 'oke' });
    }
  });

  export default router;