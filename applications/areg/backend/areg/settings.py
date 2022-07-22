"""
Django settings for the MNP Checkout project.

Generated by 'django-admin startproject' using Django 3.2.12.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""

import os
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-81kv$0=07xac7r(pgz6ndb5t0at4-z@ae6&f@u6_3jo&9d#4kl"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False if os.environ.get("PRODUCTION", None) else True

ALLOWED_HOSTS = [
    "*",
]

# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    'django.middleware.csrf.CsrfViewMiddleware',
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "cloudharness.middleware.django.CloudharnessMiddleware",
]


ROOT_URLCONF = "areg.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "areg.wsgi.application"


# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"


PROJECT_NAME = "areg".upper()

# Persistent storage
PERSISTENT_ROOT = os.path.join(BASE_DIR, "persistent")

# ***********************************************************************
# * areg settings
# ***********************************************************************
from cloudharness.applications import get_configuration
from cloudharness.utils.config import ALLVALUES_PATH, CloudharnessConfig

# ***********************************************************************
# * import base CloudHarness Django settings
# ***********************************************************************
from cloudharness_django.settings import *

# add the local apps
INSTALLED_APPS += [
    "api",
    "areg"
]

# override django admin base template with a local template
# to add some custom styling
TEMPLATES[0]["DIRS"] = [BASE_DIR / "templates"]

# Static files (CSS, JavaScript, Images)
MEDIA_ROOT = PERSISTENT_ROOT
STATIC_ROOT = os.path.join(BASE_DIR, "static")
MEDIA_URL = "/media/"
STATIC_URL = "/static/"

# KC Client & roles
KC_CLIENT_NAME = PROJECT_NAME.lower()

# areg specific roles

# Default KC roles
KC_ADMIN_ROLE = f"{KC_CLIENT_NAME}-administrator"  # admin user
KC_MANAGER_ROLE = f"{KC_CLIENT_NAME}-manager"  # manager user
KC_USER_ROLE = f"{KC_CLIENT_NAME}-user"  # customer user
KC_ALL_ROLES = [
    KC_ADMIN_ROLE,
    KC_MANAGER_ROLE,
    KC_USER_ROLE,
]
KC_PRIVILEGED_ROLES = [
    KC_ADMIN_ROLE,
    KC_MANAGER_ROLE,
]

KC_DEFAULT_USER_ROLE = None  # don't add the user role to the realm default role
