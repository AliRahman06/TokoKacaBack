import express, { NextFunction, Request, Response } from 'express';
const router = express.Router();
import Db from '../libs/db';


    router.get('/stok/history/:id', async function(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id;
        let page = parseInt(req.query.page as string);
        let limit = parseInt(req.query.limit as string);
        const start = (page - 1) * limit;
        const d = await Db.query('SELECT * FROM stok_kaca WHERE id_jenis_kaca = ? LIMIT ?,?', [id,start,limit]);
        res.json(d);
    } catch(err) {
        console.log(err);
    }
    });

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
        let limit = parseInt(req.query.limit as string);
        const start = (page - 1) * limit;
        // if(page || 0){
        //     page = 1
        // }else{
        //     const start = (page - 1) * limit;
        // }
        const d = await Db.query('SELECT detil_transaksi.*, jenis_kaca.nama FROM detil_transaksi LEFT JOIN jenis_kaca ON detil_transaksi.id_jenis_kaca = jenis_kaca.id LIMIT ?,?', [start,limit]);
        res.json(d);
    } catch(err) {
        console.log(err);
    }
    });
    router.get('/transaksi', async function(req: Request, res: Response, next: NextFunction) {
    try {
        const d = await Db.query('SELECT transaksi.*, pembeli.nama, pembeli.hp, pembeli.alamat FROM transaksi LEFT JOIN pembeli ON transaksi.id_pembeli = pembeli.id');
        res.json(d);
    } catch(err) {
        console.log(err);
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

    router.get('/subpembeli/:id', async function(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    try {
        const d = await Db.query('SELECT * FROM pembeli WHERE id = ?', [id]);
        res.json(d);
    } catch(err) {
        console.log(err);
    }
    });
    
    router.get('/jenis', async function(req: Request, res: Response, next: NextFunction) {
    try {
        let page = parseInt(req.query.page as string);
        let limit = parseInt(req.query.limit as string);
        const start = (page - 1) * limit;
        const d = await Db.query('SELECT * FROM jenis_kaca LIMIT ?,?', [start,limit]);
        for ( const item of d){
          const d2 = await Db.query('SELECT SUM(stok) AS total FROM stok_kaca WHERE id_jenis_kaca = ? LIMIT ?,?', [item.id,start,limit]);
        item.stok = d2[0].total || 0;
        }
        res.json([d]);
    } catch(err) {
        console.log(err);
    }
    });

export default router;