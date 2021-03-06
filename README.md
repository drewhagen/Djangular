# "Djangular" Application

This project intends to setup a front-end web application using Angular, which communicates with back-end Django project through Django REST API.
The purpose of such a web application is to utilize the responsiveness, speed and organization of the Angular platform and Typescript, while also utilizing
the ease of use and strength of the Python language, and its Data Science modules available through PIP and conda.

## Versions and Installation

Opted for backend that can run Legacy* Python scripts:

    Python -> 2.7.13

    Anaconda2 -> 5.0.1
    
        Installs via
        ON WINDOWS: "choco install anaconda2"
    (Optional) Conda -> 4.4.6
    
    

    Virtualenv -> 15.1.0

        Installs via
            CONDA:
                "conda install -c anaconda virtualenv=15.1.0"
            PIP ON WINDOWS with CMD:
                "cd {{path_to_Python\Python27\Scripts\}}"
                "pip install virtualenv"
                ?? Windows is not seeing my System Environment Variable paths?
                ... Windows is too difficult...
                OK... here's what I found... :
                http://timmyreilly.azurewebsites.net/python-pip-virtualenv-installation-on-windows/
                "pip install virtualenvwrapper-win"
                "mkvirtualenv virtual_environment"
                ^This automatically places into our home directory, but we rather 
                    move it over into our IDEA/VSCODE project folder.
                    It will automatically boot into env, so deactivate. Then...
                "workon virtual_environment"
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

