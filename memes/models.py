from django.db import models


class Image(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200, blank=True, null=True)
    width = models.DecimalField(max_digits=5, decimal_places=2)
    height = models.DecimalField(max_digits=5, decimal_places=2)


class Emoji(models.Model):
    name = models.CharField(max_length=100)


class ImageEmojiRelationship(models.Model):
    image = models.ForeignKey(Image, on_delete=models.CASCADE)
    emoji = models.ForeignKey(Emoji, on_delete=models.CASCADE)
