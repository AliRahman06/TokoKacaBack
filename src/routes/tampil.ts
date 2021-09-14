import express, { NextFunction, Request, Response } from 'express';
const router = express.Router();
import Db from '../libs/db';

/* GET home page. */
    router.get('/stok', async function(req: Request, res: Response, next: NextFunction) {
    try {
        const d = await Db.query('SELECT stok_kaca.*, jenis_kaca.nama, jenis_kaca.panjang, jenis_kaca.lebar, jenis_kaca.tebal FROM stok_kaca LEFT JOIN jenis_kaca ON stok_kaca.id_jenis_kaca = jenis_kaca.id');
        res.json(d);
    } catch(err) {
        console.log(err);
    }
    });

    router.get('/stok/history/:id', async function(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    try {
        const d = await Db.query('SELECT * FROM stok_kaca WHERE id_jenis_kaca = ?', [id]);
        res.json(d);
    } catch(err) {
        console.log(err);
    }
    });

    router.get('/detil', async function(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    try {
        const d = await Db.query('SELECT detil_transaksi.*, transaksi.tanggal, transaksi.total, transaksi.bayar, transaksi.kembali, jenis_kaca.nama FROM detil_transaksi LEFT JOIN transaksi ON detil_transaksi.id_transaksi = transaksi.id LEFT JOIN jenis_kaca ON detil_transaksi.id_jenis_kaca= jenis_kaca.id');
        res.json(d);
    } catch(err) {
        console.log(err);
    }
    });

    router.get('/perdetil', async function(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    try {
        const d = await Db.query('SELECT detil_transaksi.*, jenis_kaca.nama FROM detil_transaksi LEFT JOIN jenis_kaca ON detil_transaksi.id_jenis_kaca = jenis_kaca.id');
        res.json(d);
    } catch(err) {
        console.log(err);
    }
    });

    router.get('/transaksi', async function(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
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
        const d = await Db.query('SELECT detil_transaksi.*, transaksi.tanggal, transaksi.total, transaksi.bayar, transaksi.kembali, jenis_kaca.nama FROM detil_transaksi LEFT JOIN transaksi ON detil_transaksi.id_transaksi = transaksi.id LEFT JOIN jenis_kaca ON detil_transaksi.id_jenis_kaca= jenis_kaca.id WHERE id_transaksi = ?', [id]);
        res.json(d);
    } catch(err) {
        console.log(err);
    }
    });

    router.get('/stok', async function(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    try {
        const d = await Db.query('SELECT stok_kaca.*, jenis_kaca.nama, jenis_kaca.panjang, jenis_kaca.lebar, jenis_kaca.tebal FROM stok_kaca FULL JOIN jenis_kaca ON stok_kaca.id_jenis_kaca = jenis_kaca.id');
        res.json(d);
    } catch(err) {
        console.log(err);
    }
    });
    
    

export default router;