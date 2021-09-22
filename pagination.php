<?php 

                        $jumlah_data_perhalaman = 8; 
                        $query_count = mysqli_query($koneksi,"SELECT * FROM daftar_tiket");
                        $jumlah_data_di_database = mysqli_num_rows($query_count);
                        $jumlah_halaman = ceil($jumlah_data_di_database / $jumlah_data_perhalaman);
                        
                        if (isset($_GET ['halaman'])) {
                            $halaman_aktif = $_GET ['halaman'];
                        }
                        else {
                            $halaman_aktif = 1 ; 
                        }
                        $awal_halaman = ($jumlah_data_perhalaman * $halaman_aktif) - $jumlah_data_perhalaman ; 


 ?>