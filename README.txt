para iniciar nuestro proyecto usamos
$ git init

creamos nuestro entorno virtual
$ python3 -m venv venv

activamos el entorno virtual que vamos a estar utilizando en este proyecto
$ source venv/bin/activate

instalamos el framework que vamos a estar utilizando en este proyecto
$ python -m pip install Django

vamos a crear el proyecto
$ django-admin startproject mercatodo_back

creamos la app api dentro de una carpeta apps que crearemos
$ django-admin startapp api

instalamos los controladores DB que estaremos utilizando
$ pip install mysqlclient pymsql

si aparece un error usamos
$ sudo apt-get install python3-dev default-libmysqlclient-dev build-essential

hacemos una migracion del modelo
$ python3 manage.py migrate

para acceder al panel de administracion creamos un superusuario
$ python3 manage.py createsuperuser
admin - admin123

creamos la migracion del modelo
$ python3 manage.py makemigrations

corremos el servidor
$ python3 manage.py runserver
