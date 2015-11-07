from django.conf.urls import url, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'todos', views.TodoViewset, base_name='todos')



urlpatterns = [
    url(r'^api/v1/', include(router.urls)),
    url(r'^$', views.index, name='index'),
]