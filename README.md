# FamiListe

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

FamiListe est une application de gestion de courses conçue avec une attention particulière pour l'accessibilité et l'utilisation hors-ligne. L'application permet de créer et gérer vos listes de courses, d'organiser vos articles par rayons, et de stocker vos cartes de fidélité, le tout dans une interface accessible et adaptée à tous les utilisateurs.

## 🌟 Caractéristiques

- **Mode hors-ligne** : Utilisable sans connexion internet
- **Accessibilité avancée** : Interface adaptée aux personnes avec des difficultés visuelles
- **Synchronisation** : Partagez vos listes entre plusieurs appareils
- **Gestion des cartes de fidélité** : Stockez vos cartes de fidélité numériquement
- **Auto-hébergement** : Gardez le contrôle sur vos données
- **Multiplateforme** : Application web React et mobile React Native (en développement)

## 🔍 Aperçu

FamiListe a été conçue pour simplifier le processus des courses en tenant compte des besoins spécifiques des utilisateurs, notamment ceux ayant des difficultés visuelles ou de connexion. L'application propose :

- Des interfaces simples et intuitives
- Des textes et contrastes ajustables
- Une organisation optimisée par magasin et par rayon
- Un mode d'économie de données avec fonctionnement hors-ligne

## 🛠️ Technologies utilisées

### Frontend
- React 19
- React Router DOM
- Zustand (gestion d'état)
- Lucide React (icônes)
- Zod (validation des données)

### Backend
- Supabase (backend as a service)
- PostgreSQL (base de données)
- SQLite (stockage local)

### DevOps
- Docker
- GitHub Actions
- ESLint
- Prettier
- Commitlint

## 📋 Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn
- Docker (optionnel, pour le déploiement)

## 🚀 Installation

### Cloner le dépôt
```bash
git clone https://github.com/techmefr/FamiListe-react.git
cd familiste
```

### Installation des dépendances
```bash
npm install
```

### Démarrer en mode développement
```bash
npm run dev
```

### Construire pour la production
```bash
npm run build
```

## 🐳 Utilisation avec Docker

FamiListe peut être facilement déployé avec Docker :

```bash
docker-compose up -d
```

Cela va démarrer l'application sur le port 5173.

## 🔒 Configuration

Pour configurer l'application, créez un fichier `.env` à la racine du projet avec les variables suivantes :

```
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_clé_anonyme_supabase
```

## 🧪 Tests

```bash
npm run test
```

## 🔄 Synchronisation

FamiListe utilise un système de synchronisation robuste :
- Stockage local avec SQLite pour un fonctionnement hors-ligne
- Synchronisation avec Supabase quand une connexion est disponible
- Gestion intelligente des conflits par horodatage

## 👨‍💻 Contribution

Les contributions sont les bienvenues ! Veuillez suivre ces étapes pour contribuer :

1. Forkez le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Committez vos changements (`git commit -m 'feat: add amazing feature'`)
4. Poussez vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

Veuillez noter que ce projet utilise des conventions de commit strictes avec Commitlint.

## 📜 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- La Wild Code School pour la formation
- La Région Auvergne-Rhône-Alpes pour le financement de la formation
- Ma famille pour leur soutien et leur participation aux tests utilisateurs

---

Développé par Gaëtan COMPIGNI dans le cadre du titre professionnel "Concepteur Développeur d'Applications" (RNCP37873)
