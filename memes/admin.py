from django.contrib import admin
from .models import Image, Emoji, ImageEmojiRelationship


admin.site.register(Image)
admin.site.register(Emoji)
admin.site.register(ImageEmojiRelationship)
