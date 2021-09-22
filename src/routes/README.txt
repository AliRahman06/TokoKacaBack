Router querry pertabel sesuai nama file masing-masing sesuai kebutuhan request 
Ex:

/transaksi : GET , POST , PUT , DELETE 
/detil : GET , POST , PUT , DELETE 
/stok : GET , POST , PUT , DELETE 
/jenis : GET , POST , PUT , DELETE 
/pembeli : GET , POST , PUT , DELETE 

Page 1 :
/transaksi : Untuk request GET (tabel sebelah kiri)
/transaski/subtransaksi/:id : Untuk request GET sesuai id index yang hendak dilihat detailnya (tabel sebalah kanan)

Page 2 :
/jenis : Untuk request GET value nama kaca pada tabel jenis
/stok/harga : Untuk perhitungan harga jenis kaca per(cm)
/detil/perdetil : Untuk request GET setelah melakukan semiPOST pembelian kaca pertransaksi (tabel kiri bagian bawah)
/pembeli : Untuk request GET , POST pembeli pertransaksi (tabel kanan bagian atas)
/pembeli/:nama : Untuk request nama pembeli ( AUTO COMPLETE )

Page 3 :
/jenis/listjenis : Untuk request GET menampilkan nama jenis kaca beserta Stok ( tabel bagian kiri )
/stok/history/:id : Untuk request GET menampilkan resource stok sesuai id yang hendak di edit jumlah stoknya (Tabel bagian kanan)
 