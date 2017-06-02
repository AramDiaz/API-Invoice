# API-Invoice
  API Invoice Rest para consultar el numero total de facturas.

## Parámetros

  Los parámetros de conexión son.

  * url: http://34.209.24.195/facturas
  * id: 9918808d-8c8f-4b2e-8d7f-d53b89395f45
  * start una fecha en formato YYYY-MM-DD
  * finish una fecha en formato YYYY-MM-DD

## Respuesta

  La respuesta en formato JSON.

  * "Te faltan parámetros" si te falta algún dato.
  * "Hay más de 100 resultados" si hay más de 100 resultados.
  * El número de resultados caso de que sean menos de 100.

## Ejemplos

```bash
$ curl http://34.209.24.195/facturas
> {response:"Te faltan parámetros"}
```

```bash
$ curl http://34.209.24.195/facturas
> {response:"Hay más de 100 resultados"}
```

```bash
$ curl http://34.209.24.195/facturas
> {response:34}
```
