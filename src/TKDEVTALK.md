# Was ist TypeScript (5 Minuten)

- JS Erweiterung
- Neue Sprach-Features (Classen, Enums, Module... mehr oder minder irrelavnt)
- statisches (!) TypSystem

# Basics (20 Minuten)

- Dynamische Typisierung in JS
- Statische Typisierung in TS

- Type inference
- explizite Type Definitione
- Nullable Types
- Type Aliase (?)
- Objekte

# Type Guards (20 Minuten, Grundlagen notwendig)

- Beispiel: fetch
- Union Types: Response = Error | Success
- asserts
- is ...

# Tagged Unions (10-15 Minuten)

- Auch hier unterscheidung,aber an Hand einer Variablen
- Beispiel: Actions in einer View (Actions kommen vom Server, wir erzeugen sie nicht)
  - verifyBic, verifyAge

# Typen Ableiten für die Actions (10 Minuten mit Diskussion)

- ReturnType
- Pro und Contra Action Creators

# fachliche Primitive Typen (10 Minuten)

- saveBIC
- loadBIC

# Mapped Types (5 Minuten)

- readonly und/oder Partial
- Ausblick: conditional types für recursive readonly
