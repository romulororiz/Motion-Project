# Generated by Django 3.1.2 on 2020-10-09 14:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0004_auto_20201009_1323'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='fans_of_post',
            new_name='liked_by',
        ),
    ]