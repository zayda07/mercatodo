from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.
class UsersView(View):

  @method_decorator(csrf_exempt)
  def dispatch(self, request, *args, **kwargs):
    return super().dispatch(request, *args, **kwargs)

  def get(self,request, id=0):
    if(id>0):
      products = list(User.objects.filter(id=id).values())
      if len(products) > 0:
        product=products[0]
        data = {'message':"Sucesss",'usuario':product}
      else:
        data = {'message':"usuario no encontrado..."}
      return JsonResponse(data)          
    else:  
      products=list(User.objects.values())
      if len(products) > 0:
        data = {'message':"Sucesss",'usuarios':products}
      else:
        data = {'message':"usuario no encontrados..."}
      return JsonResponse(data) 