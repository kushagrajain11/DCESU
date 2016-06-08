from django import forms
from .import models

class DepartmentForm(forms.Form):
	name = forms.CharField(max_length = 20)
	description = forms.CharField(max_length = 1000)
