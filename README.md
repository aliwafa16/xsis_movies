# xsis_movies
XSIS movie dibuat dengan menggunakan framework express js dan menggunakan database Mysql untuk proses management data. Didalam nya terdapat beberapa endpoint untuk mengelola data movie, diantaranya adalah mengambil data film, menambah data film, mengubah data film dan menghapus data film. Didalamnya aplikasi tesebut sudah ditambahkan validasi pada saat menambahkan data film, yaitu data title, description, dan rating harus diisi. Selain itu ada validasi pada saat proses penambahan data jika terdapat data film yang sama, maka data film tidak dapat ditambahkan. Dalam aplikasi juga terdapat unit testing menggunakan mocha



Berikut spefisikasi dan package dari aplikasi yang dibuat : 
  1. Versi Node JS : 16.17.0
  2. Versi Express JS : 4.18.2
  3. Nodemon : 2.0.20
  4. Mysql 2 : 3.1.2
  5. Sequelize ORM : 6.28.0
  6. Dotenv : 16.0.3
  7. Babel-cli : 6.26.0
  8. Babel-preset-env : 1.7
  9. Chai Unit Test : 4.3.7
  10. Chai HTTP : 4.3.0
  11. Mocha Unit Test : 10.2.0
  
#Quick Start#
  1. Setelah melakukan clone, lakukan proses instalasi modules dengan mengetikan npm install
  2. Kemudian setelah itu import database yang ada pada repository
  3. Buat file .env
  4. ketik npm start untuk menjalankan server


#Endpoint#

  1. GET    : /movies      (Mengambil seluruh data film)
  2. GET    : /movies/:id  (Mengambil data film berdasarkan id)
  3. POST   : /movies      (Menambahkan data film)
  4. PATCH  : /movies/:id  (Mengubah data film)
  5. DELETE : /movies/:id  (Menghapus data film)


#Collection Postman#

Untuk collection postman dapat didownload pada link gdrive dibawah
https://drive.google.com/drive/folders/14aiiwWxXBlZt5rrUQ5ZH21OsJ35a-Hlo?usp=share_link


#Unit Test#

Pada saat menjalankan unit test yang terdapat didalam folder test/moviesTest.js pastikan untuk mengecek id yang terdapat pada unit test tersebut. Id tersebut harus disesuaikan dengan data id yang ada pada tabel di database
