Router querry pertabel sesuai nama file masing-masing sesuai kebutuhan request 
Ex:

/transaksi : GET , POST , PUT , DELETE 
/detil : GET , POST , PUT , DELETE 
/stok : GET , POST , PUT , DELETE 
/jenis : GET , POST , PUT , DELETE 
/pembeli : GET , POST , PUT , DELETE 

Router khusus tampil.ts untuk querry yang sudah direlasikan\
Ex:

Page 1 :
/tampil/transaksi : Untuk request GET (tabel sebelah kiri)
/tampil/subtransaksi/:id : Untuk request GET sesuai id index yang hendak dilihat detailnya (tabel sebalah kanan)

Page 2 :
/jenis : Untuk request GET , POST (Tabel input data pertransaksi bagian kiri atas)
/tampil/perdetil : Untuk request GET setelah melakukan semiPOST setelah melakukan pembelian kaca pertransaksi (tabel kiri bagian bawah)
/pembeli : Untuk request GET , POST pembeli pertransaksi (tabel kanan bagian atas)

Page 3 :
/tampil/stok : Untuk req GET menampilkan nama jenis kaca beserta stok yang dimiliki (Tabel bagian kiri)
/tampil/history/:id : Untuk req GET menampilkan resource stok sesuai id yang hendak di edit jumlah stoknya (Tabel bagian kanan)
 