# Aufgabe 1
Das Github Repo wurde geklont das Workflow-File wurde(ci-1.yml) wurde erstellt, dies alles wurde commitet und gepusht mit dem Namen "inital commit".

Pipeline crashed, weil noch nichts enthalten.

ci-1.yml wird angepasst hat manche fehler wie Node-Version deprecated sagt das wir Node 20 benutzen obwohl wir 24 spezifiziert haben und einen Build Fehler.

Das Workflow file reagiert auf den push und buildet das Projekt auf den Main Branch.

# Aufgabe 2
## ESLint
ESLint muss nicht mehr installiert werden, es ist bereits vorhanden, die Konfiguration verwendet die Standart-Konfiguration für NextJS, es ist also schon korrekt konfiguriert für das Projekt
In der Action muss dann noch der entsprechende Step hinzugefügt werden, indem der npm Befehl ausgeführt wird

KI wurde für die Verifizierung der Konfiguration verwendet, da die installierte Version von ES-Lint älter ist und deshalb mit der Doku nicht ganz übereinstimmt.
Der Chat ist im file AI-Dokumentation/eslint-claude-chat.md dokumentiert

## Jest Tests
Die Dokumentation wurde überflogen um ein kleines Verständings zu bekommen über die Library.
Die Tests wurden dann von AI gepromptet und alle depedencies wied die jest.config.js und jest.setup.js generiert.

Dann wurde von mir die Pipeline geänderted um die Tests durchzuführen

Die KI hatte sich entschieden das package-lock.json zu löschen, und dann hat es vergessen alle dependencies zu wiederherstellen und das folgten Dependenncy errors.
