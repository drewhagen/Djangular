# "Djangular" Application

This project intends to setup a front-end web application using Angular, which communicates with back-end Django project through Django REST API.
The purpose of such a web application is to utilize the responsiveness, speed and organization of the Angular platform and Typescript, while also utilizing
the ease of use and strength of the Python language, and its Data Science modules available through PIP and conda.

## Versions and Installation

Opted for backend that can run Legacy* Python scripts:
    Python -> 2.7.13
    djConda -> 4.4.6
    Virtualenv -> 15.1.0
        Installs via
            "conda install -c anaconda virtualenv=15.1.0"
        Initializes Virtual Environment via
            "virtualenv --no-site-packges virtual_environment"
        "Boots" into the Virtualenv via
            "Source virtual_environment/bin/activate"
    >>ON VIRTUALENV:
    Pip -> 9.0.1
    Django -> 1.11.9
        Installs via
            "pip install 'django<2.0'"
        Initializes Project via
            "django-admin.py startproject djangular"
        "Boots" up Django Server via
            "cd djangular"
            "python manage.py runserver"
    >>>>OTHER NOTES MANUAL SETUP LOG
        ran "python manage.py startapp sample"
        added "sample" into djangular/djangular/settings.py -> INSTALLED_APPS list
        created a model to match each Excel Sheet of data Luke and I collected
        ran "python manage.py makemigrations"
        ran "python manage.py migrate"
        


Opted for Angular 4:



*The choice to use Python 2.7 was merely to meet my needs: to use existing .py scripts writen
in 2.7.

## Pycharm Django Run Configurations



## Build

@TODO

## Running unit tests

@TODO

## Running end-to-end tests

@TODO

## Further help

@TODO

## Bibliography

