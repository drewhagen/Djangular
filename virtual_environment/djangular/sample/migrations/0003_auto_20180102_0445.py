# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-01-02 04:45
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sample', '0002_auto_20180102_0428'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='by_file_extension_list',
            name='id',
        ),
        migrations.AlterField(
            model_name='by_file_extension_list',
            name='file_type',
            field=models.CharField(max_length=12, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='src_files_master_list',
            name='file_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='src_files', to='sample.By_File_Extension_List'),
        ),
    ]
