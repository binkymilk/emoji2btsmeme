from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Image
from .serializers import *


@api_view(['GET'])
def image_list(request):

    data = Image.objects.all()
    serializer = ImageSerializer(
        data,
        context={'request': request},
        many=True
    )

    return Response({
        'data': serializer.data
    })
