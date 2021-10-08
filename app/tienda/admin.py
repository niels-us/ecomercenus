from django.contrib import admin

# Register your models here.

from .models import *


@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('pk', 'nombre', 'categoria',
                    'precio_venta', 'stock', 'estado')
    list_display_links = ('pk', 'nombre')
    list_editable = ('categoria', 'precio_venta', 'stock', 'estado')
    search_fields = ['nombre']



@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('pk', 'nombre', 'descripcion', 'estado')
    list_display_links = ('pk', 'nombre')
    list_editable = ('descripcion', 'estado')
    search_fields = ['nombre']


@admin.register(Proveedor)
class ProveedorAdmin(admin.ModelAdmin):
    list_display = ('pk', 'razon_social', 'representante', 'pais', 'estado')
    list_display_links = ('pk', 'razon_social')
    list_editable = ('representante', 'pais', 'estado')
    search_fields = ['razon_social']


@admin.register(Rol)
class RolAdmin(admin.ModelAdmin):
    list_display = ('pk', 'nombre', 'descripcion', 'estado')
    list_display_links = ('pk', 'nombre')
    list_editable = ('descripcion', 'estado')
    search_fields = ['nombre']



@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('pk', 'nombre', 'rol', 'tipo_documento', 'email', 'estado')
    list_display_links = ('pk', 'nombre')
    list_editable = ('rol', 'tipo_documento', 'email', 'estado')
    search_fields = ['nombre']

# @admin.register(Ingresos)
# class IngresosAdmin(admin.ModelAdmin):
#     list_display = ('pk', 'proveedor', 'usuario', 'fecha', 'estado')
#     list_display_links = ('pk', 'proveedor')
#     list_editable = ('usuario', 'fecha', 'estado')
#     search_fields = ['proveedor']


# @admin.register(DetalleIngreso)
# class DetalleIngresoAdmin(admin.ModelAdmin):
#     list_display = ('pk', 'producto', 'tipo_comprobante',
#                     'descripcion', 'cantidad', 'precio')
#     list_display_links = ('pk', 'producto')
#     list_editable = ('tipo_comprobante', 'descripcion', 'cantidad', 'precio')
#     search_fields = ['producto']


class DetalleIngresoInline(admin.TabularInline):
    model = DetalleIngreso
    
class IngresoAdmin(admin.ModelAdmin):
    inlines = (DetalleIngresoInline,)
    list_display = ('pk', 'tipo_comprobante','serie_comprobante','numero_comprobante','fecha','total','moneda','estado')
    search_fields = ['pk']

admin.site.register(Ingreso, IngresoAdmin)


# @admin.register(Ventas)
# class VentasAdmin(admin.ModelAdmin):
#     list_display = ('pk', 'cliente', 'usuario',
#                     'tipo_comprobante', 'fecha', 'total', 'estado')
#     list_display_links = ('pk', 'cliente')
#     list_editable = ('usuario',
#                      'tipo_comprobante', 'fecha', 'total', 'estado')
#     search_fields = ['cliente']

# @admin.register(DetalleVenta)
# class DetalleVentaAdmin(admin.ModelAdmin):
#     list_display = ('pk', 'producto', 'ventas',
#                     'descripcion', 'cantidad', 'precio', 'descuento')
#     list_display_links = ('pk', 'producto')
#     list_editable = ('ventas',
#                      'descripcion', 'cantidad', 'precio', 'descuento')
#     search_fields = ['producto']

class DetalleVentaInline(admin.TabularInline):
    model = DetalleVenta

class VentaAdmin(admin.ModelAdmin):
    inlines = (DetalleVentaInline,)
    list_display = ('pk', 'tipo_comprobante','serie_comprobante','numero_comprobante','fecha','total','moneda','estado')
    search_fields = ['pk']


admin.site.register(Venta, VentaAdmin)



admin.site.register(Pais)
admin.site.register(Ciudad)
admin.site.register(Departamento)
admin.site.register(UnidadMedida)
admin.site.register(Moneda)
admin.site.register(TipoUsuario)
admin.site.register(TipoDocumento)
admin.site.register(TipoComprobante)
