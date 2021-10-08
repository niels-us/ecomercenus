from django.db import models
from cloudinary.models import CloudinaryField



class Categoria(models.Model):
    nombre = models.CharField(
        max_length=200, unique=True, null=False, blank=False)
    descripcion = models.CharField(max_length=255, null=True, blank=True)
    estado = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre


class Pais(models.Model):
    nombre = models.CharField(
        max_length=20, unique=True, null=False, blank=False)

    def __str__(self):
        return self.nombre


class Ciudad(models.Model):
    nombre = models.CharField(
        max_length=20, unique=True, null=False, blank=False)

    def __str__(self):
        return self.nombre


class Departamento(models.Model):
    nombre = models.CharField(
        max_length=20, unique=True, null=False, blank=False)

    def __str__(self):
        return self.nombre


class Proveedor(models.Model):
    pais = models.ForeignKey(Pais, on_delete=models.RESTRICT)
    ciudad = models.ForeignKey(Ciudad, on_delete=models.RESTRICT)
    departamento = models.ForeignKey(Departamento, on_delete=models.RESTRICT)
    razon_social = models.CharField(
        max_length=200, unique=True, null=False, blank=False)
    representante = models.CharField(max_length=50, null=False, blank=False)
    direccion = models.CharField(max_length=255, null=False, blank=False)
    telefono = models.CharField(max_length=20, null=True, blank=True)
    email = models.EmailField(
        max_length=50, unique=True, null=False, blank=False)
    estado = models.BooleanField(default=True)

    def __str__(self):
        return self.razon_social

class Moneda(models.Model):
    nombre = models.CharField(
        max_length=20, unique=True, null=False, blank=False)

    def __str__(self):
        return self.nombre

class UnidadMedida(models.Model):
    nombre = models.CharField(
        max_length=20, unique=True, null=False, blank=False)

    def __str__(self):
        return self.nombre


class Producto(models.Model):
    proveedor = models.ForeignKey(Proveedor, on_delete=models.RESTRICT)
    categoria = models.ForeignKey(Categoria, on_delete=models.RESTRICT)
    nombre = models.CharField(
        max_length=200, unique=True, null=False, blank=False)
    descripcion = models.CharField(max_length=255)
    unidad_medida = models.ForeignKey(UnidadMedida, on_delete=models.RESTRICT)
    precio_venta = models.DecimalField(max_digits=10, decimal_places=2)
    moneda = models.ForeignKey(Moneda, on_delete=models.RESTRICT)
    stock = models.IntegerField(default=0)
    # imagen = models.ImageField(
    #     upload_to='productos', blank=True, null=True)
    imagen = CloudinaryField('image',default='')
    estado = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre


class Rol(models.Model):
    nombre = models.CharField(
        max_length=50, unique=True, null=False, blank=False)
    descripcion = models.CharField(max_length=255)
    estado = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre

class TipoUsuario(models.Model):
    nombre = models.CharField(
        max_length=20, unique=True, null=False, blank=False)

    def __str__(self):
        return self.nombre


class TipoDocumento(models.Model):
    nombre = models.CharField(
        max_length=200, unique=True, null=False, blank=False)

    def __str__(self):
        return self.nombre


class Usuario(models.Model):
    rol = models.ForeignKey(Rol, on_delete=models.RESTRICT)
    tipo_usuario = models.ForeignKey(TipoUsuario, on_delete=models.RESTRICT)
    nombre = models.CharField(
        max_length=200, unique=True, null=False, blank=False)
    tipo_documento = models.ForeignKey(TipoDocumento, on_delete=models.RESTRICT)
    numro_documento = models.CharField(max_length=25, null=False, blank=False)
    direccion = models.CharField(max_length=255, null=False, blank=False)
    telefono = models.CharField(max_length=20, null=False, blank=False)
    email = models.EmailField(max_length=50, null=True, blank=True)
    username = models.CharField(
        max_length=50, unique=True, null=False, blank=False)
    clave = models.CharField(max_length=50, null=False, blank=False)
    estado = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre

class TipoComprobante(models.Model):
    nombre = models.CharField(
        max_length=200, unique=True, null=False, blank=False)

    def __str__(self):
        return self.nombre

class Ingreso(models.Model):
    proveedor = models.ForeignKey(Proveedor, on_delete=models.RESTRICT)
    usuario = models.ForeignKey(Usuario, on_delete=models.RESTRICT)
    tipo_comprobante = models.ForeignKey(TipoComprobante, on_delete=models.RESTRICT)
    serie_comprobante = models.CharField(
        max_length=50, null=False, blank=False)
    numero_comprobante = models.CharField(
        max_length=50, null=False, blank=False)
    fecha = models.DateField('Fecha de Ingreso')
    moneda = models.ForeignKey(Moneda, on_delete=models.RESTRICT)
    impuesto = models.DecimalField(max_digits=4, decimal_places=2,default=0.18)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    estado = models.BooleanField(default=True)

    def __str__(self):
        return  self.serie_comprobante + " - " + self.numero_comprobante

class DetalleIngreso(models.Model):
    ingreso = models.ForeignKey(Ingreso, on_delete=models.RESTRICT)
    producto = models.ForeignKey(Producto, on_delete=models.RESTRICT)
    cantidad = models.IntegerField(default=1)
    precio = models.DecimalField(max_digits=10, decimal_places=2)


class Venta(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.RESTRICT)
    tipo_comprobante = models.ForeignKey(TipoComprobante, on_delete=models.RESTRICT)
    serie_comprobante = models.CharField(
        max_length=50, null=False, blank=False)
    numero_comprobante = models.CharField(
        max_length=50, null=False, blank=False)
    fecha = models.DateField('Fecha de Ingreso')
    moneda = models.ForeignKey(Moneda, on_delete=models.RESTRICT)
    impuesto = models.DecimalField(max_digits=4, decimal_places=2, default=0.18)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    estado = models.BooleanField(default=True)

    def __str__(self):
        return self.serie_comprobante + " - " + self.numero_comprobante


class DetalleVenta(models.Model):
    ventas = models.ForeignKey(Venta, on_delete=models.RESTRICT)
    producto = models.ForeignKey(Producto, on_delete=models.RESTRICT)
    cantidad = models.IntegerField(default=1)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    descuento = models.DecimalField(max_digits=4, decimal_places=2)

    # def __str__(self):
    #     return self.descripcion

