# Generated by Django 3.2 on 2022-02-13 10:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_articleimage'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='user',
        ),
    ]