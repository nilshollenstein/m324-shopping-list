# Reflexion
## Pipeline
Die Pipeline ist am laufen. Es gab Probleme damit, dass gewisse Actions verhalten hatten (Artifact Upload und Hidden Files), die wir schwer debuggen konnten. Sie wurde in mehrere Steps unterteilt um die lesbarkeit zu erweitern, aber auch, damit es optimaler zu erweitern ist.

Die Pipeline ist in 4 Steps unterteilt. Sie testet und lintet den Code zuerst, und nur wenn beide diese Steps durchlaufen, kann sie das Projekt builden und dann deployen. Das Building und Deploying sind in separaten Schritten, da wenn man auf verschiedene Server müsste deployen, kann man dann für jeden einen einzelnen Schritt machen, der unabhängig von den anderen ist

### Verbesserungen
Die Pipeline könnte durch ein Caching der Node-Modules deutlich beschleunigt werden, da immer wieder npm ci gemacht wird. Es ist allerdings bei einem so kleinen Projekt unnötig.

## KI-Nutzung Aufgabe 1-3
Bei der 1.Aufgabe haben wir keine KI verwendet.
Bei der 2. Aufgabe haben wir es verwendet, um die Tests zu schreiben und zum laufen zu bringen, und um ESLint zu kontrollieren
Bei der 3. Aufgabe hat uns die AI die Ideen geliefert, von denen wir dann eine Implementiert haben, ausserdem hat sie uns noch den Fehler mit den Hidden-Files behoben, den wir selber nicht erkannt hatten.
Die KI hat bei der Test Implementation einen grösseren Fehler gemacht, es hat das package-lock.json gelöscht und dann die falschen Dependencies wieder installiert. Dies hat dann das Projekt zeitweise lahmgelegt.

## Arbeitsaufteilung
Gioele und ich haben uns die Aufgaben folgendermassen aufgeteilt. Beim 1. Schritt hat er die Dokumentation geschrieben und dabei dokumentiert was wir zusammen besprochen haben, während ich das YAML dementsprechend gebaut habe.

Bei der zweiten hat er sich um den JEST-Teil gekümmert wärend ich das Linting übernommen hatte.

Da er am JEST länger beschäftigt war, habe ich im 3 Teil die AI gefragt, wir haben dann die Vorschläge besprochen. Hier hat er angefangen die Reflexion zu schreiben, während ich noch kurz die Pipeline fertgigestellt habe