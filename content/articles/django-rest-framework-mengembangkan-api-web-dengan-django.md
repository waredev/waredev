---
title: 'Django REST Framework: Mengembangkan API Web dengan Django'
description: 'Django REST Framework (DRF) adalah sebuah library yang kuat dan populer yang digunakan untuk mengembangkan API web dengan menggunakan framework Django. DRF menyediakan berbagai alat dan fitur yang memudahkan pengembangan API yang fleksibel, efisien, dan dapat diandalkan.

Salah satu komponen utama dalam DRF adalah serializers. Serializers digunakan untuk mengubah data model Django menjadi format yang dapat dikirimkan melalui API, seperti JSON atau XML. Dengan serializers, Anda dapat dengan mudah melakukan validasi data, transformasi data, dan mengatur representasi data yang tepat untuk dikirimkan ke klien.'
date: 'Mei, 19 2023'
author: 'Pranto Soearno'
avatar: 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png'
image:
  src: 'https://blog.knoldus.com/wp-content/uploads/2020/06/python-django.png'
  alt: ''
  width: 400
  height: 300
head:
  meta:
    keywords:
      content: 'mobile app, bisnis digital, engagement pelanggan, branding, penjualan, kepuasan pelanggan, efisiensi bisnis'
    robots: 
      content: 'index, follow'
    author:
      content: 'Pranto Soearno'
    copyright:
      content: '© 2023 CV.Waredev Digital Solution'
---

Django REST Framework (DRF) adalah sebuah framework yang kuat dan populer untuk mengembangkan API web dengan menggunakan Django, sebuah framework pengembangan web Python yang terkenal. Dengan Django REST Framework, Anda dapat dengan mudah membangun API yang kuat, fleksibel, dan scalable untuk aplikasi web Anda. Artikel ini akan memberikan panduan + langkah demi + langkah tentang cara mengembangkan API web dengan Django REST Framework.


1. ### Apa itu Django REST Framework?

Django REST Framework (DRF) adalah sebuah framework yang dibangun di atas Django, framework pengembangan web Python yang populer. DRF menyediakan seperangkat alat dan konvensi yang kuat untuk mengembangkan API web dengan mudah dan efisien.

Berikut adalah beberapa keuntungan menggunakan Django REST Framework untuk mengembangkan API web:

+ Integrasi dengan Django: DRF terintegrasi secara sempurna dengan Django, memanfaatkan kekuatan dan kemudahan pengembangan yang dimiliki oleh Django. Ini memungkinkan Anda untuk menggabungkan kekuatan Django dalam hal manajemen database, autentikasi pengguna, dan fitur-fitur lainnya dengan kemampuan yang ditawarkan oleh DRF dalam membangun API yang kuat.

+ Serialization Otomatis: DRF menyediakan fitur serialisasi otomatis yang memungkinkan Anda dengan mudah mengonversi data model Django menjadi format yang dapat dikirimkan melalui API seperti JSON atau XML. Ini menghemat waktu dan upaya dalam mengelola transformasi data secara manual.

+ Views dan Generic Views: DRF menyediakan views yang dirancang khusus untuk mengelola operasi CRUD pada API Anda. Dengan menggunakan Generic Views, Anda dapat dengan cepat mengimplementasikan operasi dasar seperti pembuatan, pembacaan, pembaruan, dan penghapusan data tanpa menulis banyak kode boilerplate.

+ Autentikasi dan Otorisasi: DRF menyediakan berbagai pilihan autentikasi yang dapat Anda gunakan untuk mengamankan API Anda, seperti autentikasi berdasarkan token, autentikasi berbasis sesi, atau autentikasi OAuth. Selain itu, DRF juga menyediakan sistem izin yang fleksibel untuk mengontrol akses ke endpoint-endpoint API.

+ Paginasi dan Filtering: DRF menyediakan fitur paginasi bawaan yang memungkinkan Anda mengatur bagaimana data dikirimkan dalam jumlah yang terbatas. Selain itu, DRF juga menyediakan berbagai opsi filtering untuk memungkinkan penggunaan parameter pencarian dan pengurutan pada API Anda.

+ Validasi Data: DRF menyediakan mekanisme validasi data yang kuat untuk memastikan bahwa data yang diterima melalui API memenuhi kriteria yang diinginkan. Ini membantu dalam memastikan integritas dan keandalan data yang dikirimkan oleh pengguna.

+ Dokumentasi Otomatis: DRF memiliki fitur dokumentasi otomatis yang sangat berguna. Dengan sedikit konfigurasi, DRF dapat secara otomatis menghasilkan dokumentasi API yang interaktif berdasarkan kode yang Anda tulis. Ini memudahkan pengguna dan pengembang lain untuk memahami dan menggunakan API Anda dengan mudah.

+ Dalam keseluruhan, Django REST Framework adalah pilihan yang kuat dan populer untuk mengembangkan API web dengan Django. Dengan fitur-fitur yang lengkap dan kemudahan penggunaan yang ditawarkannya, DRF mempercepat proses pengembangan API dan membantu Anda membangun API yang kuat, aman, dan skalabel dengan mudah.



2. ### Persiapan Awal

+ Langkah 1: Persiapan
Pastikan Anda memiliki Python dan pip terinstal di komputer Anda sebelum memulai. Anda juga harus memiliki proyek Django yang sudah ada atau membuat proyek baru menggunakan perintah django-admin startproject nama_proyek.

+ Langkah 2: Instalasi Django REST Framework
Buka terminal atau command prompt, dan jalankan perintah berikut untuk menginstal Django REST Framework menggunakan pip:

Copy code
pip install djangorestframework
Ini akan mengunduh dan menginstal paket Django REST Framework serta dependensinya.

+ Langkah 3: Tambahkan 'rest_framework' ke INSTALLED_APPS
Buka file settings.py dalam direktori proyek Django Anda. Temukan variabel INSTALLED_APPS dan tambahkan 'rest_framework' ke dalam daftar. Contoh:

```text
INSTALLED_APPS = [
    ...
    'rest_framework',
    ...
]
```
Ini akan memasukkan Django REST Framework ke dalam aplikasi Django Anda.

+ Langkah 4: Konfigurasi URL
Buka file urls.py dalam direktori proyek Django Anda. Tambahkan import include dan DefaultRouter dari modul rest_framework.urls. Kemudian, tambahkan URL pattern untuk API menggunakan DefaultRouter. Contoh:

```text
from django.urls import include, path
from rest_framework import routers

router = routers.DefaultRouter()
# Tambahkan URL pattern untuk setiap viewset yang Anda inginkan
# router.register('nama-endpoint', NamaViewSet)

urlpatterns = [
    ...
    path('api/', include(router.urls)),
    ...
]
```
Pastikan untuk mengganti 'nama-endpoint' dengan nama endpoint yang sesuai dan NamaViewSet dengan nama viewset yang sesuai.

+ Langkah 5: Menjalankan Migrasi
Jalankan migrasi untuk memastikan tabel-tabel yang diperlukan oleh Django REST Framework telah dibuat. Jalankan perintah berikut:

```text
python manage.py migrate
```
Ini akan membuat tabel-tabel yang diperlukan oleh Django REST Framework di database Anda.

+ Langkah 6: Uji Instalasi
Untuk memastikan bahwa Django REST Framework terinstal dengan benar, jalankan server pengembangan Django menggunakan perintah:

```text
python manage.py runserver
```
Buka browser dan akses URL http://localhost:8000/api/. Jika Anda melihat halaman yang menampilkan dokumentasi API yang dibuat oleh Django REST Framework, maka instalasi dan integrasi telah berhasil.

Sekarang Anda telah menginstal Django REST Framework dan mengintegrasikannya dengan proyek Django Anda. Anda siap untuk mulai mengembangkan API web dengan Django REST Framework. Anda dapat membuat viewset, serializers, dan routes sesuai kebutuhan aplikasi Anda.



3. ### Serializers

Serializers dalam Django REST Framework (DRF) adalah komponen penting yang digunakan untuk mengubah data model Django menjadi representasi yang dapat dikirimkan melalui API, seperti JSON atau XML. Serializers berperan sebagai perantara antara model Django dan format data yang dikirimkan melalui API.

Dalam DRF, ada dua jenis utama serializers yang dapat digunakan:

+ ModelSerializer: ModelSerializer adalah serializer yang menyederhanakan proses pembuatan serializer untuk model Django. Dengan menggunakan ModelSerializer, Anda dapat dengan mudah menghasilkan serializer yang memiliki semua bidang model secara otomatis. Serializer ini juga memberikan dukungan bawaan untuk validasi dan pembuatan serta pembaruan objek model. ModelSerializer secara otomatis menentukan bidang yang harus disertakan dalam representasi API berdasarkan model yang digunakan.

+ Serializer: Serializer adalah serializer generik yang memberikan kontrol lebih langsung dalam menentukan bidang yang harus disertakan dalam representasi API. Anda harus menentukan secara eksplisit bidang-bidang yang ingin disertakan dalam serializer. Serializer juga memberikan dukungan untuk validasi data masukan dan pengubahan data sebelum disimpan dalam model.

Berikut adalah contoh penggunaan ModelSerializer untuk mengubah data model Django menjadi representasi JSON melalui API:

Buat sebuah file baru dengan nama serializers.py dalam direktori aplikasi Django Anda.

Impor modul serializers dari Django REST Framework:

```text
from rest_framework import serializers
```
Buat sebuah kelas serializer dengan mewarisi ModelSerializer dan tentukan model yang ingin di-serialize:
```text
from .models import NamaModel

class NamaModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = NamaModel
        fields = '__all__'  # atau tentukan bidang yang ingin disertakan
        ```
Di dalam kelas Meta, tentukan model yang akan digunakan dan bidang-bidang yang ingin disertakan dalam representasi API. Dalam contoh di atas, '__all__' digunakan untuk menyertakan semua bidang model. Namun, Anda juga dapat secara eksplisit menentukan bidang-bidang yang ingin disertakan.

Gunakan serializer dalam view atau viewset Anda untuk mengonversi objek model menjadi representasi JSON yang dapat dikirimkan melalui API:

```text
from .serializers import NamaModelSerializer

class NamaModelViewSet(viewsets.ModelViewSet):
    queryset = NamaModel.objects.all()
    serializer_class = NamaModelSerializer
```
Dalam contoh di atas, kita menggunakan NamaModelSerializer dalam NamaModelViewSet untuk mengonversi objek model menjadi representasi JSON saat mengambil data dari API.

Dengan menggunakan serializers dalam Django REST Framework, Anda dapat dengan mudah mengubah data model Django menjadi representasi yang dapat dikirimkan melalui API. Serializers menyediakan metode yang kuat untuk validasi data masukan dan mengonversi objek model menjadi format yang sesuai dengan kebutuhan Anda.

4. ### Views

Views dalam Django REST Framework (DRF) bertanggung jawab untuk menangani permintaan HTTP yang masuk dan memberikan respons yang sesuai. Views menghubungkan endpoint API dengan logika aplikasi yang relevan.

DRF menyediakan berbagai jenis views, dan salah satunya adalah Generic Views. Generic Views adalah tipe views yang telah ditentukan sebelumnya dengan logika yang sudah terdefinisi untuk operasi CRUD (Create, Read, Update, Delete) pada API. Penggunaan Generic Views dapat mempercepat proses pengembangan API dengan mengurangi kode boilerplate yang perlu ditulis.

Berikut adalah beberapa jenis Generic Views yang dapat digunakan dalam DRF:

+ APIView: Ini adalah view generik dasar yang memberikan fungsionalitas paling dasar untuk menangani permintaan HTTP. Anda dapat menentukan metode yang relevan seperti get(), post(), put(), dan delete() untuk menangani operasi CRUD.

+ ListAPIView: View ini digunakan untuk menampilkan daftar objek dalam format JSON. Metode get() akan menangani permintaan GET dan mengembalikan daftar objek dari model yang ditentukan.

+ RetrieveAPIView: View ini digunakan untuk mengambil objek spesifik berdasarkan ID atau slug. Metode get() akan menangani permintaan GET dan mengembalikan objek yang sesuai.

+ CreateAPIView: View ini digunakan untuk membuat objek baru. Metode post() akan menangani permintaan POST dan membuat objek baru berdasarkan data yang diberikan.

+ UpdateAPIView: View ini digunakan untuk memperbarui objek yang ada. Metode put() atau patch() akan menangani permintaan PUT atau PATCH dan memperbarui objek berdasarkan data yang diberikan.

+ DestroyAPIView: View ini digunakan untuk menghapus objek yang ada. Metode delete() akan menangani permintaan DELETE dan menghapus objek yang sesuai.

+ Selain Generic Views, DRF juga menyediakan views lainnya seperti ViewSet yang dapat digunakan untuk mengelola kelompok operasi CRUD dalam satu viewset, serta views kustom yang memungkinkan Anda untuk menulis logika view yang lebih spesifik sesuai kebutuhan.

Berikut adalah contoh penggunaan Generic Views untuk operasi CRUD pada API menggunakan DRF:

```text
from rest_framework import generics
from .models import NamaModel
from .serializers import NamaModelSerializer

class NamaModelListAPIView(generics.ListAPIView):
    queryset = NamaModel.objects.all()
    serializer_class = NamaModelSerializer

class NamaModelCreateAPIView(generics.CreateAPIView):
    queryset = NamaModel.objects.all()
    serializer_class = NamaModelSerializer

class NamaModelRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = NamaModel.objects.all()
    serializer_class = NamaModelSerializer
```
Dalam contoh di atas, kita menggunakan beberapa Generic Views yang disediakan oleh DRF. NamaModelListAPIView digunakan untuk menampilkan daftar objek, NamaModelCreateAPIView digunakan untuk membuat objek baru, dan NamaModelRetrieveUpdateDestroyAPIView digunakan untuk mengambil, memperbarui, dan menghapus objek yang ada.

Dengan menggunakan Generic Views, Anda dapat dengan cepat mengimplementasikan operasi CRUD pada API Anda tanpa perlu

5. ### Routing dan URLs

Django REST Framework (DRF) menggunakan Django's URL routing untuk memetakan permintaan HTTP ke views yang sesuai. Dalam DRF, ada beberapa cara yang dapat digunakan untuk mengatur routing dan URLs. Berikut adalah panduan langkah demi langkah tentang cara menggunakan routing dan URLs dalam DRF:

+ Langkah 1: Tambahkan URL patterns ke file urls.py
Buka file urls.py dalam direktori proyek Django Anda dan tambahkan URL patterns untuk API DRF Anda. Anda dapat menggunakan fungsi path() atau re_path() untuk mendefinisikan pola URL dan menghubungkannya ke views yang relevan.

Contoh:

``` text
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NamaModelViewSet

router = DefaultRouter()
router.register('nama-endpoint', NamaModelViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    # Tambahan URL patterns lainnya jika diperlukan
]
```

Dalam contoh di atas, kita menggunakan DefaultRouter dari rest_framework.routers untuk mengatur routing. Kita juga mendaftarkan NamaModelViewSet ke router dengan endpoint 'nama-endpoint'. Anda dapat menyesuaikan 'nama-endpoint' dengan endpoint yang sesuai untuk model dan views Anda.

+ Langkah 2: Tentukan views yang sesuai
Buat views yang sesuai untuk setiap endpoint yang didefinisikan dalam router. Dalam contoh di atas, kita menggunakan NamaModelViewSet sebagai contoh views yang terhubung dengan 'nama-endpoint'.

Contoh:

```text
from rest_framework import viewsets
from .models import NamaModel
from .serializers import NamaModelSerializer

class NamaModelViewSet(viewsets.ModelViewSet):
    queryset = NamaModel.objects.all()
    serializer_class = NamaModelSerializer
```
Pastikan untuk menyesuaikan queryset dan serializer_class dengan model dan serializer yang sesuai untuk proyek Anda.

+ Langkah 3: Sertakan URLs di proyek Django
Terakhir, pastikan untuk menyertakan URLs DRF Anda di file urls.py utama proyek Django. Buka file urls.py dalam direktori proyek Django dan sertakan URL patterns dari aplikasi DRF Anda.

Contoh:

```text
from django.urls import path, include

urlpatterns = [
    # URLs lainnya dalam proyek Anda
    path('', include('nama-aplikasi.urls')),
]
```
Pastikan untuk mengganti 'nama-aplikasi' dengan nama aplikasi Django Anda yang berisi URL patterns yang telah kita definisikan sebelumnya.

Dengan langkah-langkah di atas, Anda telah mengatur routing dan URLs dalam DRF. Permintaan HTTP yang masuk akan dipetakan ke views yang sesuai berdasarkan pola URL yang ditentukan dalam router. Anda dapat menambahkan lebih banyak URL patterns dan views sesuai kebutuhan aplikasi Anda, menggunakan berbagai metode HTTP seperti GET, POST, PUT, PATCH, dan DELETE untuk berinteraksi dengan API Anda.

6. ### Authentication dan Permissions

Untuk mengamankan API web Anda dengan Django REST Framework (DRF), Anda dapat menggunakan mekanisme autentikasi dan izin yang disediakan oleh DRF. Berikut adalah panduan langkah demi langkah tentang cara mengamankan API web dengan autentikasi dan izin di DRF:

+ Langkah 1: Menyiapkan Konfigurasi
Buka file settings.py dalam proyek Django Anda dan tambahkan konfigurasi autentikasi dan izin yang diperlukan. Pastikan modul autentikasi dan izin yang diperlukan telah ditambahkan ke INSTALLED_APPS.

Contoh:

```text
INSTALLED_APPS = [
    ...
    'rest_framework',
    'rest_framework.authtoken',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    ...
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
}
```
Pada contoh di atas, kita menggunakan TokenAuthentication sebagai mekanisme autentikasi dan SessionAuthentication sebagai mekanisme autentikasi alternatif untuk penggunaan antar sesi. IsAuthenticated digunakan sebagai izin default yang memerlukan pengguna terautentikasi untuk mengakses API.

+ Langkah 2: Menerapkan Autentikasi pada Views
Dalam views yang relevan, tambahkan dekorator autentikasi yang sesuai untuk membatasi akses ke API. Anda dapat menggunakan dekorator @authentication_classes dan @permission_classes untuk menentukan autentikasi dan izin yang digunakan pada view tersebut.

Contoh:

```text
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import authentication_classes, permission_classes

@authentication_classes([TokenAuthentication, SessionAuthentication])
@permission_classes([IsAuthenticated])
class NamaModelViewSet(viewsets.ModelViewSet):
    ...
```
Dalam contoh di atas, NamaModelViewSet di-dekorasi dengan @authentication_classes dan @permission_classes untuk menerapkan autentikasi menggunakan TokenAuthentication dan SessionAuthentication, serta izin IsAuthenticated untuk membatasi akses hanya kepada pengguna terautentikasi.

+ Langkah 3: Mengamankan URL Patterns
Anda juga dapat mengamankan URL patterns secara keseluruhan dengan menambahkan decorator pada level URL patterns di urls.py.

Contoh:

```text
from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

from .views import NamaModelViewSet

app_name = 'nama-aplikasi'

urlpatterns = [
    path('api-token-auth/', obtain_auth_token, name='api-token-auth'),  # URL untuk memperoleh token
    path('nama-endpoint/', NamaModelViewSet.as_view({'get': 'list'}), name='nama-list'),
    ...
]
```
Dalam contoh di atas, kita menggunakan obtain_auth_token dari rest_framework.authtoken.views untuk memperoleh token autentikasi. Anda dapat menyesuaikan URL patterns dan views sesuai dengan kebutuhan aplikasi Anda.

Dengan langkah-langkah di atas, Anda telah mengamankan API web Anda dengan menggunakan mekanisme autentikasi dan izin yang disediakan oleh DRF. Pengguna yang ingin mengakses API Anda akan memer


7. ### Pagination dan Filtering

Menerapkan paginasi dan filtering pada API adalah praktik yang umum digunakan untuk mengatur jumlah data yang dikirimkan kepada klien dan memberikan kemampuan pencarian yang fleksibel. Dalam Django REST Framework (DRF), Anda dapat dengan mudah menerapkan paginasi dan filtering dengan menggunakan komponen yang telah disediakan. Berikut adalah penjelasan tentang cara menerapkannya:

Paginasi:
Paginasi memungkinkan Anda membagi data menjadi beberapa halaman, sehingga klien hanya menerima sejumlah data tertentu pada satu waktu. DRF menyediakan beberapa kelas paginasi yang dapat Anda gunakan, seperti PageNumberPagination, LimitOffsetPagination, atau CursorPagination.

+ Langkah 1: Tentukan kelas paginasi yang ingin Anda gunakan dalam pengaturan DRF (settings.py):

```text
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,
}
```
Dalam contoh di atas, kami menggunakan PageNumberPagination sebagai kelas paginasi default dan mengatur ukuran halaman (PAGE_SIZE) menjadi 10.

+ Langkah 2: Terapkan paginasi pada view yang sesuai:

```text
from rest_framework.pagination import PageNumberPagination

class NamaModelViewSet(viewsets.ModelViewSet):
    pagination_class = PageNumberPagination
    ...
```
Dalam contoh di atas, NamaModelViewSet menggunakan PageNumberPagination untuk menerapkan paginasi.

Filtering:
Filtering memungkinkan klien untuk melakukan pencarian data berdasarkan parameter yang diberikan. DRF menyediakan beberapa cara untuk menerapkan filtering, termasuk penggunaan query parameters atau menggunakan fitur FilterSet dan SearchFilter.

+ Langkah 1: Konfigurasikan pengaturan filtering dalam pengaturan DRF (settings.py):

```text
REST_FRAMEWORK = {
    'DEFAULT_FILTER_BACKENDS': ['rest_framework.filters.SearchFilter'],
}
```
Dalam contoh di atas, kami mengatur SearchFilter sebagai filter backend default.

+ Langkah 2: Terapkan filtering pada view yang sesuai:

```text
from rest_framework.filters import SearchFilter

class NamaModelViewSet(viewsets.ModelViewSet):
    filter_backends = [SearchFilter]
    search_fields = ['field1', 'field2', ...]
    ...
```
Dalam contoh di atas, NamaModelViewSet menggunakan SearchFilter untuk menerapkan filtering. search_fields adalah daftar field yang dapat dijadikan acuan pencarian.

+ Langkah 3: Menggunakan query parameters untuk filtering:
Klien dapat mengirimkan query parameters untuk melakukan filtering. Misalnya, jika Anda memiliki field name dan ingin melakukan pencarian berdasarkan nama, klien dapat mengirimkan permintaan GET seperti GET /api/nama-endpoint/?search=John.

Dengan menerapkan paginasi dan filtering pada API Anda, Anda memberikan kemampuan kepada klien untuk mengatur jumlah data yang dikirimkan dan melakukan pencarian yang fleksibel sesuai dengan kebutuhan mereka.






## Kesimpulan:
Dalam kesimpulannya, Django REST Framework (DRF) adalah pilihan yang kuat untuk mengembangkan API web dengan Django. DRF menyediakan alat dan fitur yang kuat, termasuk serializers, views, routing, autentikasi, paginasi, dan filtering, yang memudahkan pengembangan API web yang fleksibel dan efisien. Dengan DRF, Anda dapat dengan mudah mengubah data model Django menjadi representasi yang dapat dikirimkan melalui API, mengembangkan operasi CRUD, mengatur autentikasi dan izin, serta menerapkan paginasi dan filtering. Penggunaan DRF mempercepat pengembangan API web dan memastikan kualitas dan stabilitas API Anda.

