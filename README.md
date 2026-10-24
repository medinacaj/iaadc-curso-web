# IA Aplicada desde Cero — portal público
Sitio educativo estático (8 módulos, 24 lecciones, rutas oficina/estudio/negocio).
La inscripción no está habilitada; no se recopilan datos desde este sitio.

## Videoteca
- `videos.html` presenta el catálogo curricular y solo enlaza videos aprobados mediante `videos-catalog.json`.
- El catálogo inicia vacío. No se inventan enlaces o estadísticas.
- Las credenciales, borradores, guiones y operaciones de publicación se conservan fuera de este repositorio público.
- Un video debe incorporarse a `videos-catalog.json` **únicamente después de su publicación real** y aprobación editorial.
- Ejemplo de fila (sustituir el identificador real verificado):
```json
{"lesson_id":"IAADC-M01-L01","status":"published","url":"https://www.youtube.com/watch?v=ABCDEFGHIJK"}
```
- Ejecutar `python3 scripts/validate_videos.py` y `node --check videos.js`.

La producción audiovisual de IAADC es independiente de MultiX. MultiX sirve únicamente como referencia de experiencia; no existe integración, conexión ni sincronización entre ambos sistemas.
