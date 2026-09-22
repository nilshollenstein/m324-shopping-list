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
Der Chat ist im file AI-Dokumentation/eslint-claude-chat.md dokumentiert

## Pipeline-Optimierung
Bei der Pipeline-Optimierung wurde zuerst eine AI hinzugezogen, um Ideen zu erhalten, wie die Pipeline am besten strukturiert werden könnte. 

Dieser Chat ist im File "AI-Dokumentation/ci-pipeline-split-claude-chat.md" dokumentiert. Danach haben wir besprochen, was der beste Vorschlag ist.
Unsere Entscheidung war der dritte, da er für uns am saubersten ist. Er lässt Tests und Linting gleichzeitig laufen, buildet dann das Projekt und dann kommt das Deployment (simuliert).  

Auf diese Art könnte man sauber an verschiedene Orte deployen, ohne mehrmals builden zu müssen

Die AI wurde noch verwendet, um einen Fehler beim Artifact-Upload zu beheben, dieser lag daran, dass die Pipeline standartmässig Hidden Files (. vor dem Namen) nicht ausliest, das hat sie danach auch selbst nochmals im selben File dokumentiert 