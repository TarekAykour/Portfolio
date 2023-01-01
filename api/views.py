from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt,ensure_csrf_cookie,csrf_protect
from pyOutlook import OutlookAccount
import requests
import environ
import os
from django.core.mail import send_mail
from django.utils.decorators import method_decorator
from django.template.loader import render_to_string
from django.conf import settings


# env
env = environ.Env()
environ.Env.read_env()




# connect to mail
# EMAIL = os.environ.get('EMAIL')
# PASSWORD = os.environ.get('PASSWORD')








# Create your views here.


@csrf_protect
def send_email(request):
    if request.method == "POST":
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')
        # check email
        if not name or len(name.strip()) < 3 or not name.strip():
            return JsonResponse({"error": "invalid name"}, status=400)
        # check email
        elif not email  or not email.strip():
            return JsonResponse({"error": "invalid email"}, status=400)
        # check subject
        elif not subject or len(subject.strip()) < 3 or not subject.strip():
            return JsonResponse({"error": "invalid subject"}, status=400)

        # check message
        elif not message or len(message.strip()) < 5 or not message.strip():
            return JsonResponse({"error": "invalid message"}, status=400)
        else:
            send_mail(
                f'{str(subject)}', #title
                str(f'{str(name)} [{email}] said: \n\n{message}'), #message
                str(settings.EMAIL_HOST_USER), #email adress of sender
                [str(settings.EMAIL_HOST_USER)], #receiver
                fail_silently=False,
                )
            return JsonResponse({"message": "email send"}, status=200)

    else:
        return JsonResponse({"error": "not post"}, status=400)