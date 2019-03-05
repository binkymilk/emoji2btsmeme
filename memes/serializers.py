from rest_framework import serializers
from .models import Image, Emoji, ImageEmojiRelationship


class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        fields = '__all__'


class EmojiSerializer(serializers.ModelSerializer):

    class Meta:
        model = Emoji
        fields = '__all__'


class ImageEmojiRelSerializer(serializers.ModelSerializer):

    class Meta:
        model = ImageEmojiRelationship
        fields = '__all__'
