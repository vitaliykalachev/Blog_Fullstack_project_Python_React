from django.contrib import admin
from .models import Article

# Register your models here.

# admin.site.register(Article)



@admin.action(description='Mark selected stories as published')
def make_published(modeladmin, request, queryset):
    queryset.update(status='p')

@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('title', 'description')
    list_display = ('title', 'description')
    actions = [make_published]



