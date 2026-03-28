from django.http import Http404
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from .models import Article

def archive(request):
    return render(request, 'archive.html', {'posts': Article.objects.all()})

def get_article(request, article_id):
    try:
        post = Article.objects.get(id=article_id)
        return render(request, 'article.html', {'post': post})
    except Article.DoesNotExist:
        raise Http404

def create_post(request):
    if request.user.is_authenticated:
        if request.method == "POST":
            form = {
                'text': request.POST.get("text", ""),
                'title': request.POST.get("title", "")
            }
            if form["text"] and form["title"]:
                if Article.objects.filter(title=form["title"]).exists():
                    form['errors'] = "Статья с таким названием уже существует"
                    return render(request, 'create_post.html', {'form': form})
                else:
                    article = Article.objects.create(
                        text=form["text"],
                        title=form["title"],
                        author=request.user
                    )
                    return redirect('get_article', article_id=article.id)
            else:
                form['errors'] = "Не все поля заполнены"
                return render(request, 'create_post.html', {'form': form})
        else:
            return render(request, 'create_post.html', {})
    else:
        raise Http404

def register(request):
    if request.method == "POST":
        username = request.POST.get("username", "")
        email = request.POST.get("email", "")
        password = request.POST.get("password", "")
        password2 = request.POST.get("password2", "")
        
        # Проверка на пустые поля
        if not username or not email or not password or not password2:
            return render(request, 'register.html', {'error': "Все поля обязательны для заполнения"})
        
        # Проверка совпадения паролей
        if password != password2:
            return render(request, 'register.html', {'error': "Пароли не совпадают"})
        
        # Проверка уникальности имени пользователя
        if User.objects.filter(username=username).exists():
            return render(request, 'register.html', {'error': "Пользователь с таким именем уже существует"})
        
        # Создание пользователя
        User.objects.create_user(username, email, password)
        return redirect('login')
    else:
        return render(request, 'register.html', {})

def user_login(request):
    if request.method == "POST":
        username = request.POST.get("username", "")
        password = request.POST.get("password", "")
        
        # Проверка на пустые поля
        if not username or not password:
            return render(request, 'login.html', {'error': "Все поля обязательны для заполнения"})
        
        # Аутентификация
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('archive')
        else:
            return render(request, 'login.html', {'error': "Неверное имя пользователя или пароль"})
    else:
        return render(request, 'login.html', {})

def user_logout(request):
    logout(request)
    return redirect('archive')