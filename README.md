# API-Invoice
  API Invoice Rest para consultar el numero total de facturas.

## Parámetros

  Los parámetros de conexión son.

  * `url`: http://74.208.222.55:3001/facturas
  * `id`: 9918808d-8c8f-4b2e-8d7f-d53b89395f45
  * `start`: una fecha en formato YYYY-MM-DD
  * `finish`: una fecha en formato YYYY-MM-DD

## Respuesta

  La respuesta en formato JSON.

  * "Te faltan parámetros" si te falta algún dato.
  * "Hay más de 100 resultados" si hay más de 100 resultados.
  * El número de resultados caso de que sean menos de 100.

## Ejemplos

```bash
$ curl http://74.208.222.55:3001/facturas
> {"response":"Te faltan parámetros"}
```

```bash
$ curl http://74.208.222.55:3001/facturas?id=9918808d-8c8f-4b2e-8d7f-d53b89395f45&start=2017-05-01&finish=2017-05-30
> {"response":"Hay más de 100 resultados"}
```

```bash
$ curl http://74.208.222.55:3001/facturas?id=9918808d-8c8f-4b2e-8d7f-d53b89395f45&start=2017-05-01&finish=2017-05-05
> {"response":90}
```
