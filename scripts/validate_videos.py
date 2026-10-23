#!/usr/bin/env python3
"""Valida catálogo público de episodios; no consulta servicios externos."""
import json
import pathlib
import re
import sys
from urllib.parse import parse_qs, urlsplit
ROOT=pathlib.Path(__file__).resolve().parents[1]
data=json.loads((ROOT/"videos-catalog.json").read_text(encoding="utf-8"))
assert data.get("version")==1 and isinstance(data.get("videos"),list)
ids=set()
for row in data["videos"]:
    assert isinstance(row,dict)
    ident=row.get("lesson_id")
    assert re.fullmatch(r"IAADC-M0[1-8]-L0[1-3]",str(ident)),ident
    assert ident not in ids,"duplicado: "+ident
    ids.add(ident)
    assert row.get("status")=="published"
    u=urlsplit(row.get("url",""))
    assert u.scheme=="https" and u.hostname in {"www.youtube.com","youtube.com"} and u.path=="/watch"
    assert re.fullmatch(r"[A-Za-z0-9_-]{11}",parse_qs(u.query).get("v",[""])[0])
source=(ROOT/"course-data.js").read_text(encoding="utf-8")
assert source.count("lessons:[")==8,"No se detectan los 8 módulos originales"
assert len(re.findall(r"\{id:\d+,title:",source))==8
for f in ["videos.html","videos.js","videos.css"]:
    assert (ROOT/f).is_file(),f
print(f"PASS: ocho módulos, catálogo válido con {len(ids)} videos publicados")
