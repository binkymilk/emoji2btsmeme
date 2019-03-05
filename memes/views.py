from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Image, Emoji, ImageEmojiRelationship
from .serializers import *


@api_view(['GET'])
def all_images_list(request):

    data = Image.objects.all()
    serializer = ImageSerializer(
        data,
        context={'request': request},
        many=True
    )

    return Response({
        'data': serializer.data
    })


@api_view(['GET'])
def image_list(request, slug):

    # Get emoji
    images = ImageEmojiRelationship.objects.filter(emoji__name__exact=slug)

    relSerializer = ImageEmojiRelSerializer(
        images,
        context={'request': request},
        many=True
    )

    memes = []
    for relObject in relSerializer.data:
        meme = Image.objects.get(pk=relObject['image'])
        memes.append(meme)

    imageSerializer = ImageSerializer(
        memes,
        context={'request': request},
        many=True
    )

    return Response({
        'data': imageSerializer.data
    })


@api_view(['GET'])
def emoji_list(request):

    data = Emoji.objects.all()
    serializer = EmojiSerializer(
        data,
        context={'request': request},
        many=True
    )

    return Response({
        'data': serializer.data
    })
