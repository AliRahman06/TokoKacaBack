import express, { NextFunction, Request, Response } from 'express';
const router = express.Router();
import Db from '../libs/db';

/* GET home page. */
router.get('/', async function(req: Request, res: Response, next: NextFunction) {
  try {
    const d = await Db.query('SELECT * FROM jenis_kaca');
    res.json(d);
  } catch(err) {
    console.log(err);
  }
  });

router.post('/', async function(req: Request, res: Response) {
  const input = req.body;
  try {
    await Db.query('INSERT INTO jenis_kaca VALUES(NULL, ?, ?, ?, ?)', [input.nama, input.panjang, input.lebar, input.tebal])
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
    await Db.query('UPDATE jenis_kaca SET nama = ?, panjang = ?, lebar = ?, tebal = ? WHERE id = ?', [input.nama, input.panjang, input.lebar, input.tebal, id])
  } catch(err) {
    console.log(err);
  } finally {
    res.json({ message: 'oke' });
  }
});

router.delete('/:id', async function(req: Request, res: Response) {
  const id = req.params.id;
  try {
    await Db.query('DELETE FROM jenis_kaca WHERE id = ?', [id])
  } catch(err) {
    console.log(err);
  } finally {
    res.json({ message: 'oke' });
  }
});

  export default router;