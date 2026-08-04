# 🚀 Workflow Git — De VS Code à GitHub

## 1️⃣ Initialisation (une seule fois par projet)

```bash
git init
git add .
git commit -m "chore: initial commit"
git branch -M main
git remote add origin https://github.com/BrahimElGhachi/NomDuRepo.git
git push -u origin main
```

---

## 2️⃣ Au quotidien (chaque modification)

```bash
git add .
git commit -m "feat: description de ce que tu as fait"
git push
```

---

## 3️⃣ Commandes utiles

```bash
git status          # voir les fichiers modifiés
git log --oneline   # voir l'historique des commits
git pull            # récupérer les dernières modifications
```

---

## 📝 Convention des commits (Conventional Commits)

| Préfixe | Usage |
|---------|-------|
| `feat:` | nouvelle fonctionnalité |
| `fix:` | correction de bug |
| `chore:` | installation, configuration |
| `docs:` | documentation |
| `refactor:` | restructuration du code |
| `style:` | mise en forme, indentation |
| `test:` | ajout ou modification de tests |

---

## ⚠️ Points importants

- Toujours faire `git add .` + `git commit` **avant** `git push`
- La première fois, utiliser `git push -u origin main` (le `-u` relie la branche locale à GitHub)
- Les fois suivantes, un simple `git push` suffit
- Ne jamais committer de fichiers sensibles (mots de passe, clés API) → utiliser un fichier `.env` et l'ajouter dans `.gitignore`

---

## 🔧 Configuration initiale (une seule fois)

```bash
git config --global user.name "BrahimElGhachi"
git config --global user.email "belghachi@gmail.com"
```
