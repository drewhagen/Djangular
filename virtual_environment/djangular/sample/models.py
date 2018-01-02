# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
#from django.utils.encoding import python_2_unicode_compatible

# Create your models here.
#@python_2_unicode_compatible
class Original_Grep_By_Line_List(models.Model):
    file_path = models.CharField(max_length=50) # Check FilePathField in Django Docs
        #https://docs.djangoproject.com/en/2.0/ref/models/fields/#filepathfield
    line = models.IntegerField(null=True, blank=True)
    casing = models.CharField(max_length=30)

    def _str_(self):
        return "Original_List: {}".format(self.name)


# @python_2_unicode_compatible
class By_File_Extension_List(models.Model):
    file_path = models.CharField(max_length=50)  # Check FilePathField in Django Docs
    # https://docs.djangoproject.com/en/2.0/ref/models/fields/#filepathfield
    lines = models.TextField(null=True, blank=True)
    file_type = models.CharField(max_length=12, primary_key=True)
    ui_path = models.TextField(null=True, blank=True)
    quick_summary = models.TextField(null=True, blank=True)
    notes = models.TextField(null=True, blank=True)
    related_files = models.TextField(null=True, blank=True)
    includes_and_imports = models.TextField(null=True, blank=True)

    def _str_(self):
        return "Extension_List: {}".format(self.name)


#@python_2_unicode_compatible
class Src_Files_Master_List(models.Model):
    file_path = models.CharField(max_length=50) # Check FilePathField in Django Docs
        #https://docs.djangoproject.com/en/2.0/ref/models/fields/#filepathfield
    lines = models.TextField(null=True, blank=True)
    file_type = models.ForeignKey(By_File_Extension_List, related_name="src_files")
    #frequences range (tuple (min, max)) what kind of model field would this be??
    comment_subset = models.TextField(null=True, blank=True)
    front_end_subset = models.TextField(null=True, blank=True)


    def _str_(self):
        return "Master_List: {}".format(self.name)

