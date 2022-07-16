
from django.urls import path, include, re_path
from .views import ArticleViewSet, UserViewSet
from rest_framework.routers import DefaultRouter
#article_list, article_details, ArticleList, ArticleDetails
# from django.views.generic import TemplateView

router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')
router.register('users', UserViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
    # re_path('.*', TemplateView.as_view())
    #path('articles/', ArticleList.as_view()),
    #path('articles/<int:id>/', ArticleDetails.as_view())
    # path('articles/', article_list),
    # path('articles/<int:pk>/', article_details),
]
