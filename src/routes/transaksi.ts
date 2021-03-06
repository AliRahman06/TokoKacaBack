import { error } from 'console';
import { defaultMaxListeners } from 'events';
import express, { NextFunction, Request, Response } from 'express';
import { type } from 'os';
const router = express.Router();
import Db from '../libs/db';

/* GET home page. */
  router.get('/', async function(req: Request, res: Response, next: NextFunction) {
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
      const start = (page-1) * limit;
      const d = await Db.query('SELECT transaksi.*, pembeli.nama, pembeli.hp, pembeli.alamat FROM transaksi LEFT JOIN pembeli ON transaksi.id_pembeli = pembeli.id LIMIT ?,?', [start,limit]);
      res.json(d);
    }catch(err) {
      console.log(err);
    }
  });

  router.get ('/data', async function(req: Request, res: Response, next: NextFunction) {
    try{
      const d = await Db.query('SELECT transaksi.*, pembeli.nama, pembeli.hp, pembeli.alamat FROM transaksi LEFT JOIN pembeli ON transaksi.id_pembeli = pembeli.id ');
      res.json(d);
    } catch(err) {
      console.log(err)
    }
  });
  
  router.get('/subtransaksi/:id', async function(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    try {
        const d = await Db.query('SELECT detil_transaksi.*, transaksi.tanggal, transaksi.total, transaksi.bayar, transaksi.kembali, pembeli.nama, pembeli.hp, pembeli.alamat, jenis_kaca.nama AS nama_kaca FROM detil_transaksi LEFT JOIN transaksi ON detil_transaksi.id_transaksi = transaksi.id LEFT JOIN pembeli ON transaksi.id_pembeli = pembeli.id LEFT JOIN jenis_kaca ON detil_transaksi.id_jenis_kaca= jenis_kaca.id WHERE id_transaksi = ?', [id]);
        res.json(d);
    } catch(err) {
        console.log(err);
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
  
  router.post('/tambah', async function(req: Request, res: Response) {
    const input = req.body;
    try {
      let id_pembeli;
      let id_transaksi: Promise<any>;
      if(parseInt(input.id_pembeli)>0){
        id_pembeli = input.id_pembeli;
      }else{
      const p = await Db.query('INSERT INTO pembeli VALUES(NULL, ?, ?, ?)', [input.nama, input.hp, input.alamat]);
      id_pembeli = p.insertId;
      }
      const t = await Db.query('INSERT INTO transaksi VALUES(NULL, ?, ?, ?, ?, ?)', [id_pembeli, input.tanggal, input.total, input.bayar, input.kembali]);
      id_transaksi = t.insertId;
      input.detil.forEach(async (detil: any) => {
        await Db.query('INSERT INTO detil_transaksi VALUES(NULL, ?, ?, ?, ?, ?)',[id_transaksi, detil.id_jenis_kaca, detil.panjang, detil.lebar, detil.biaya])
      });
       res.json({ message: 'oke' })
    } catch(err) {
      error(err)
    } finally {
      res.json({ message: 'oke' });
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
