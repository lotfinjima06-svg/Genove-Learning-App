import React, { useState, useMemo } from 'react';
import {
  Smartphone,
  Code2,
  Download,
  Copy,
  Check,
  Search,
  SlidersHorizontal,
  Clock,
  Star,
  User,
  GraduationCap,
  Sparkles,
  BookOpen,
  FileCode,
  Image as ImageIcon,
  FolderTree,
  ChevronRight,
  ChevronDown,
  Camera,
  ChevronLeft,
  CheckCircle2,
  X,
  LogIn,
  UserPlus,
  ArrowRight,
  ShieldCheck,
  Lock,
  Mail,
  Heart,
  Eye,
  EyeOff
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CourseItem {
  id: number;
  titleEn: string;
  titleFr: string;
  descriptionEn: string;
  descriptionFr: string;
  category: string;
  categoryNameEn: string;
  categoryNameFr: string;
  levelEn: string;
  levelFr: string;
  hours: number;
  rating: number;
  reviewsCount: number;
  instructor: string;
  image: string;
  drawableName: string;
  tagColor: string;
}

export const COURSE_CATEGORIES = [
  { id: 'all', nameEn: 'All', nameFr: 'Tous' },
  { id: 'development', nameEn: 'Development', nameFr: 'Développement' },
  { id: 'ai', nameEn: 'Artificial Intelligence', nameFr: 'Intelligence Artificielle' },
  { id: 'data', nameEn: 'Data & BI', nameFr: 'Data & BI' },
  { id: 'design', nameEn: 'Design & UI/UX', nameFr: 'Design & UI/UX' },
  { id: 'security', nameEn: 'Cyber Security', nameFr: 'Cybersécurité' },
  { id: 'cloud', nameEn: 'Cloud & DevOps', nameFr: 'Cloud & DevOps' },
  { id: 'business', nameEn: 'Business', nameFr: 'Business & Gestion' },
];

export const I18N = {
  en: {
    welcomeBack: "Welcome Back",
    loginSubtitle: "Sign in with your email or social accounts",
    loginJourney: "Login to continue your journey",
    emailOrUser: "Email or Username",
    emailLabel: "Email",
    emailPlaceholder: "Enter your email",
    passwordLabel: "Password",
    passwordPlaceholder: "Password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot Password?",
    loginBtn: "Login",
    orContinueWith: "or continue with",
    dontHaveAccount: "Don't have an account?",
    signUpLink: "Sign Up",
    createAccount: "Create Account",
    joinUsSubtitle: "Sign up to get started with your dashboard.",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "Enter your name",
    confirmPasswordLabel: "Confirm Password",
    confirmPasswordPlaceholder: "Confirm your password",
    createPasswordPlaceholder: "Create a password",
    orDivider: "Or",
    termsAgree: "I agree to the Terms & Privacy",
    createAccountBtn: "Create Account",
    alreadyHaveAccount: "Already have an account?",
    signInLink: "Sign In",
    hello: "Hello",
    readyToLearn: "Ready to continue learning today?",
    continueActive: "Continue your enrolled active paths",
    discoverTracks: "Discover career tracks & specializations",
    searchPlaceholder: "Search courses, skills, instructors...",
    resetFilters: "Reset filters",
    catalogHeading: "Course Catalog",
    byInstructor: "By",
    hoursUnit: "hrs",
    startLearning: "Start Learning Now",
    enrolledCoursesTitle: "My Enrolled Courses (3 Active)",
    browseAll: "Browse All",
    progressLabel: "Progress",
    exploreTracksTitle: "Explore Career Tracks",
    certProgram: "Professional Certificate",
    reviews: "reviews",
    tabCatalog: "Catalog",
    tabMyCourses: "My Courses",
    tabExplore: "Explore",
    tabProfile: "Profile",
    editProfile: "Edit Profile",
    changeAvatar: "Change 3D Avatar",
    changeOverlay: "Change",
    currentPasswordLabel: "Current Password",
    newPasswordLabel: "New Password",
    enterNewPassword: "Enter new password",
    saveChangesBtn: "Save Changes",
    savedSuccess: "Changes saved successfully!",
    chooseAvatar: "Choose a 3D Avatar",
    chooseAvatarSubtitle: "Select an avatar or upload your custom photo",
    filterAll: "All",
    filterGirls: "Girls",
    filterBoys: "Boys",
    uploadPhoto: "Upload Photo",
    applyAvatar: "Apply Avatar",
  },
  fr: {
    welcomeBack: "Bon retour",
    loginSubtitle: "Connectez-vous avec votre e-mail ou réseaux",
    loginJourney: "Connectez-vous pour continuer votre parcours",
    emailOrUser: "E-mail ou nom d'utilisateur",
    emailLabel: "E-mail",
    emailPlaceholder: "Entrez votre e-mail",
    passwordLabel: "Mot de passe",
    passwordPlaceholder: "Mot de passe",
    rememberMe: "Se souvenir de moi",
    forgotPassword: "Mot de passe oublié ?",
    loginBtn: "Se connecter",
    orContinueWith: "ou continuer avec",
    dontHaveAccount: "Vous n'avez pas de compte ?",
    signUpLink: "S'inscrire",
    createAccount: "Créer un compte",
    joinUsSubtitle: "Inscrivez-vous pour commencer votre tableau de bord.",
    fullNameLabel: "Nom complet",
    fullNamePlaceholder: "Entrez votre nom",
    confirmPasswordLabel: "Confirmer le mot de passe",
    confirmPasswordPlaceholder: "Confirmez votre mot de passe",
    createPasswordPlaceholder: "Créez un mot de passe",
    orDivider: "Ou",
    termsAgree: "J'accepte les Conditions & Confidentialité",
    createAccountBtn: "Créer un compte",
    alreadyHaveAccount: "Vous avez déjà un compte ?",
    signInLink: "Se connecter",
    hello: "Bonjour",
    readyToLearn: "Prêt à continuer d'apprendre aujourd'hui ?",
    continueActive: "Reprenez vos formations en cours",
    discoverTracks: "Découvrez nos filières et spécialisations",
    searchPlaceholder: "Rechercher cours, compétences, formateurs...",
    resetFilters: "Réinitialiser les filtres",
    catalogHeading: "Catalogue de cours",
    byInstructor: "Par",
    hoursUnit: "h",
    startLearning: "Commencer à apprendre",
    enrolledCoursesTitle: "Mes cours inscrits (3 actifs)",
    browseAll: "Voir tout",
    progressLabel: "Progression",
    exploreTracksTitle: "Filières Métiers & Certifications",
    certProgram: "Certificat Professionnel",
    reviews: "avis",
    tabCatalog: "Catalogue",
    tabMyCourses: "Mes cours",
    tabExplore: "Explorer",
    tabProfile: "Profil",
    editProfile: "Modifier le profil",
    changeAvatar: "Changer d'avatar 3D",
    changeOverlay: "Changer",
    currentPasswordLabel: "Ancien mot de passe",
    newPasswordLabel: "Nouveau mot de passe",
    enterNewPassword: "Entrez le nouveau mot de passe",
    saveChangesBtn: "Enregistrer les modifications",
    savedSuccess: "Modifications enregistrées avec succès !",
    chooseAvatar: "Choisir un avatar 3D",
    chooseAvatarSubtitle: "Sélectionnez un avatar ou importez votre photo",
    filterAll: "Tous",
    filterGirls: "Filles",
    filterBoys: "Garçons",
    uploadPhoto: "Importer une photo",
    applyAvatar: "Appliquer l'avatar",
  }
};

const COURSES_DATA: CourseItem[] = [
  {
    id: 1,
    titleEn: "Android App Development with Kotlin",
    titleFr: "Développement Android avec Kotlin",
    descriptionEn: "Build modern native Android applications using Kotlin, XML Views, View Binding, and Material Design 3.",
    descriptionFr: "Créez des applications Android natives modernes avec Kotlin, XML, View Binding et Material Design 3.",
    category: "development",
    categoryNameEn: "Development",
    categoryNameFr: "Développement",
    levelEn: "Intermediate",
    levelFr: "Intermédiaire",
    hours: 32,
    rating: 4.9,
    reviewsCount: 2150,
    instructor: "Alex Martin",
    image: "/courses/img_course_android.jpg",
    drawableName: "img_course_android.jpg",
    tagColor: "bg-blue-600"
  },
  {
    id: 2,
    titleEn: "Web Development with React & TypeScript",
    titleFr: "Développement Web avec React & TypeScript",
    descriptionEn: "Design high-performance, reactive web interfaces with React 19, TypeScript, and modern Tailwind CSS.",
    descriptionFr: "Concevez des interfaces web ultra-performantes et réactives avec React 19, TypeScript et Tailwind CSS.",
    category: "development",
    categoryNameEn: "Development",
    categoryNameFr: "Développement",
    levelEn: "Intermediate",
    levelFr: "Intermédiaire",
    hours: 28,
    rating: 4.8,
    reviewsCount: 1840,
    instructor: "Sarah Benali",
    image: "/courses/img_course_react.jpg",
    drawableName: "img_course_react.jpg",
    tagColor: "bg-cyan-600"
  },
  {
    id: 3,
    titleEn: "Introduction to Artificial Intelligence",
    titleFr: "Introduction à l'Intelligence Artificielle",
    descriptionEn: "Understand neural networks, Deep Learning, Generative AI models, and real-world enterprise use cases.",
    descriptionFr: "Comprenez les réseaux de neurones, le Deep Learning, l'IA Générative et les cas d'usage réels en entreprise.",
    category: "ai",
    categoryNameEn: "Artificial Intelligence",
    categoryNameFr: "Intelligence Artificielle",
    levelEn: "Beginner",
    levelFr: "Débutant",
    hours: 14,
    rating: 4.9,
    reviewsCount: 3200,
    instructor: "Dr. Karim Trabelsi",
    image: "/courses/img_course_ai.jpg",
    drawableName: "img_course_ai.jpg",
    tagColor: "bg-purple-600"
  },
  {
    id: 4,
    titleEn: "Data Analytics with Power BI",
    titleFr: "Analyse de Données avec Power BI",
    descriptionEn: "Analyze, model, and visualize complex datasets through high-impact interactive dashboards.",
    descriptionFr: "Analysez, modélisez et visualisez des jeux de données complexes grâce à des tableaux de bord interactifs.",
    category: "data",
    categoryNameEn: "Data & BI",
    categoryNameFr: "Data & BI",
    levelEn: "Intermediate",
    levelFr: "Intermédiaire",
    hours: 20,
    rating: 4.7,
    reviewsCount: 980,
    instructor: "Elena Rostova",
    image: "/courses/img_course_powerbi.jpg",
    drawableName: "img_course_powerbi.jpg",
    tagColor: "bg-emerald-600"
  },
  {
    id: 5,
    titleEn: "Relational Databases & SQL Queries",
    titleFr: "Bases de Données & Requêtes SQL",
    descriptionEn: "Master advanced SQL querying, multi-table joins, indexing, query optimization, and schema design.",
    descriptionFr: "Maîtrisez le SQL avancé, les jointures complexes, l'indexation, l'optimisation et la modélisation.",
    category: "data",
    categoryNameEn: "Data & BI",
    categoryNameFr: "Data & BI",
    levelEn: "Beginner",
    levelFr: "Débutant",
    hours: 18,
    rating: 4.8,
    reviewsCount: 1420,
    instructor: "Mehdi Gharbi",
    image: "/courses/img_course_sql.jpg",
    drawableName: "img_course_sql.jpg",
    tagColor: "bg-teal-600"
  },
  {
    id: 6,
    titleEn: "Python for Beginners & Automation",
    titleFr: "Python pour Débutants & Automatisation",
    descriptionEn: "Learn programming fundamentals step by step with Python: core data structures, algorithms, and projects.",
    descriptionFr: "Apprenez la programmation pas à pas avec Python : structures de données et automatisation de tâches.",
    category: "development",
    categoryNameEn: "Development",
    categoryNameFr: "Développement",
    levelEn: "Beginner",
    levelFr: "Débutant",
    hours: 16,
    rating: 4.9,
    reviewsCount: 4100,
    instructor: "Thomas Dubois",
    image: "/courses/img_course_python.jpg",
    drawableName: "img_course_python.jpg",
    tagColor: "bg-amber-600"
  },
  {
    id: 7,
    titleEn: "Machine Learning & Deep Neural Nets",
    titleFr: "Machine Learning & Réseaux Neuronaux",
    descriptionEn: "Explore predictive modeling, linear and logistic regression, classification, clustering, and neural nets.",
    descriptionFr: "Explorez la modélisation prédictive, régression, classification, clustering et réseaux neuronaux.",
    category: "ai",
    categoryNameEn: "Artificial Intelligence",
    categoryNameFr: "Intelligence Artificielle",
    levelEn: "Advanced",
    levelFr: "Avancé",
    hours: 30,
    rating: 4.9,
    reviewsCount: 2600,
    instructor: "Dr. Sonia Mansour",
    image: "/courses/img_course_ml.jpg",
    drawableName: "img_course_ml.jpg",
    tagColor: "bg-indigo-600"
  },
  {
    id: 8,
    titleEn: "Business Intelligence & Strategy",
    titleFr: "Business Intelligence & Stratégie",
    descriptionEn: "Drive corporate performance with actionable insights, executive KPIs, and decision support systems.",
    descriptionFr: "Pilotez la performance d'entreprise avec des KPI stratégiques et des systèmes d'aide à la décision.",
    category: "business",
    categoryNameEn: "Business",
    categoryNameFr: "Business & Gestion",
    levelEn: "Intermediate",
    levelFr: "Intermédiaire",
    hours: 22,
    rating: 4.7,
    reviewsCount: 870,
    instructor: "Yassine Ayari",
    image: "/courses/img_course_bi.jpg",
    drawableName: "img_course_bi.jpg",
    tagColor: "bg-rose-600"
  },
  {
    id: 9,
    titleEn: "UI/UX Design & 3D Claymorphism",
    titleFr: "Design UI/UX & Claymorphisme 3D",
    descriptionEn: "Craft viral, claymorphic 3D mobile and web interfaces with soft lighting, depth, and micro-interactions.",
    descriptionFr: "Concevez des interfaces mobiles et web 3D claymorphic avec éclairage réaliste, profondeur et animations.",
    category: "design",
    categoryNameEn: "Design & UI/UX",
    categoryNameFr: "Design & UI/UX",
    levelEn: "Intermediate",
    levelFr: "Intermédiaire",
    hours: 24,
    rating: 4.9,
    reviewsCount: 1930,
    instructor: "Camille Laurent",
    image: "/courses/img_course_react.jpg",
    drawableName: "img_course_react.jpg",
    tagColor: "bg-fuchsia-600"
  },
  {
    id: 10,
    titleEn: "Mobile Design System with Figma",
    titleFr: "Design System Mobile avec Figma",
    descriptionEn: "Build scalable component libraries, interactive prototypes, and auto-layout mobile screens in Figma.",
    descriptionFr: "Créez des bibliothèques de composants, prototypes interactifs et maquettes mobiles fluides sur Figma.",
    category: "design",
    categoryNameEn: "Design & UI/UX",
    categoryNameFr: "Design & UI/UX",
    levelEn: "Beginner",
    levelFr: "Débutant",
    hours: 18,
    rating: 4.8,
    reviewsCount: 1520,
    instructor: "Nour Hamdi",
    image: "/courses/img_course_android.jpg",
    drawableName: "img_course_android.jpg",
    tagColor: "bg-pink-600"
  },
  {
    id: 11,
    titleEn: "Ethical Hacking & Cyber Defense",
    titleFr: "Hacking Éthique & Cyberdéfense",
    descriptionEn: "Understand vulnerability assessments, penetration testing, malware defense, and security hardening.",
    descriptionFr: "Comprenez l'audit de vulnérabilités, les tests d'intrusion (pentest) et la protection contre les cyberattaques.",
    category: "security",
    categoryNameEn: "Cyber Security",
    categoryNameFr: "Cybersécurité",
    levelEn: "Intermediate",
    levelFr: "Intermédiaire",
    hours: 26,
    rating: 4.9,
    reviewsCount: 1780,
    instructor: "Adam Khemir",
    image: "/courses/img_course_sql.jpg",
    drawableName: "img_course_sql.jpg",
    tagColor: "bg-red-600"
  },
  {
    id: 12,
    titleEn: "Network Security & Cryptography",
    titleFr: "Sécurité Réseau & Cryptographie",
    descriptionEn: "Secure enterprise protocols, VPNs, SSL/TLS handshakes, encryption algorithms, and zero-trust models.",
    descriptionFr: "Sécurisez les protocoles d'entreprise, les VPN, le chiffrement asymétrique et l'architecture Zero-Trust.",
    category: "security",
    categoryNameEn: "Cyber Security",
    categoryNameFr: "Cybersécurité",
    levelEn: "Advanced",
    levelFr: "Avancé",
    hours: 22,
    rating: 4.8,
    reviewsCount: 1120,
    instructor: "Farah Belhadj",
    image: "/courses/img_course_ai.jpg",
    drawableName: "img_course_ai.jpg",
    tagColor: "bg-slate-700"
  },
  {
    id: 13,
    titleEn: "Docker, Kubernetes & CI/CD Pipelines",
    titleFr: "Docker, Kubernetes & Pipelines CI/CD",
    descriptionEn: "Containerize applications, orchestrate clusters, and automate automated release deployments.",
    descriptionFr: "Conteneurisez vos applications, orchestrez des clusters et automatisez vos déploiements continus.",
    category: "cloud",
    categoryNameEn: "Cloud & DevOps",
    categoryNameFr: "Cloud & DevOps",
    levelEn: "Intermediate",
    levelFr: "Intermédiaire",
    hours: 25,
    rating: 4.9,
    reviewsCount: 2310,
    instructor: "Lucas Bernard",
    image: "/courses/img_course_python.jpg",
    drawableName: "img_course_python.jpg",
    tagColor: "bg-sky-600"
  },
  {
    id: 14,
    titleEn: "Cloud Architecture with AWS & GCP",
    titleFr: "Architecture Cloud avec AWS & GCP",
    descriptionEn: "Design highly available, scalable, serverless, and fault-tolerant infrastructure in the cloud.",
    descriptionFr: "Concevez des infrastructures hautement disponibles, scalables et serverless sur le cloud public.",
    category: "cloud",
    categoryNameEn: "Cloud & DevOps",
    categoryNameFr: "Cloud & DevOps",
    levelEn: "Advanced",
    levelFr: "Avancé",
    hours: 28,
    rating: 4.8,
    reviewsCount: 1650,
    instructor: "Sami Ben Salah",
    image: "/courses/img_course_ml.jpg",
    drawableName: "img_course_ml.jpg",
    tagColor: "bg-cyan-700"
  },
  {
    id: 15,
    titleEn: "Agile Project Management & Scrum",
    titleFr: "Gestion de Projet Agile & Scrum",
    descriptionEn: "Lead cross-functional teams, manage product backlogs, sprint planning, and accelerate delivery.",
    descriptionFr: "Pilotez des équipes agiles, gérez le backlog produit, planifiez les sprints et accélérez les livraisons.",
    category: "business",
    categoryNameEn: "Business",
    categoryNameFr: "Business & Gestion",
    levelEn: "Beginner",
    levelFr: "Débutant",
    hours: 15,
    rating: 4.7,
    reviewsCount: 920,
    instructor: "Maya Guiga",
    image: "/courses/img_course_bi.jpg",
    drawableName: "img_course_bi.jpg",
    tagColor: "bg-emerald-700"
  }
];

export interface ClayAvatar {
  id: string;
  name: string;
  gender: 'girl' | 'boy';
  src: string;
  drawable: string;
  tag: string;
}

export const CLAY_AVATARS: ClayAvatar[] = [
  // 8 Girls
  {
    id: 'girl_1',
    name: 'Sarah',
    gender: 'girl',
    src: '/img_avatar_girl_1.png',
    drawable: 'img_avatar_girl_1',
    tag: 'Lilac Hoodie'
  },
  {
    id: 'girl_2',
    name: 'Yasmine',
    gender: 'girl',
    src: '/img_avatar_girl_2.png',
    drawable: 'img_avatar_girl_2',
    tag: 'Mint & Headband'
  },
  {
    id: 'girl_3',
    name: 'Nour',
    gender: 'girl',
    src: '/img_avatar_girl_3.png',
    drawable: 'img_avatar_girl_3',
    tag: 'Blonde & Glasses'
  },
  {
    id: 'girl_4',
    name: 'Maya',
    gender: 'girl',
    src: '/img_avatar_girl_4.png',
    drawable: 'img_avatar_girl_4',
    tag: 'Curly & Coral'
  },
  {
    id: 'girl_5',
    name: 'Chloe',
    gender: 'girl',
    src: '/img_avatar_girl_5.png',
    drawable: 'img_avatar_girl_5',
    tag: 'Headphones & Mint'
  },
  {
    id: 'girl_6',
    name: 'Amira',
    gender: 'girl',
    src: '/img_avatar_girl_6.png',
    drawable: 'img_avatar_girl_6',
    tag: 'Lavender Space Buns'
  },
  {
    id: 'girl_7',
    name: 'Lea',
    gender: 'girl',
    src: '/img_avatar_girl_7.png',
    drawable: 'img_avatar_girl_7',
    tag: 'Bob & Round Glasses'
  },
  {
    id: 'girl_8',
    name: 'Emma',
    gender: 'girl',
    src: '/img_avatar_girl_8.png',
    drawable: 'img_avatar_girl_8',
    tag: 'Auburn & Yellow Headband'
  },
  // 8 Boys
  {
    id: 'boy_1',
    name: 'Adam',
    gender: 'boy',
    src: '/img_avatar_boy_1.png',
    drawable: 'img_avatar_boy_1',
    tag: 'Pastel Purple'
  },
  {
    id: 'boy_2',
    name: 'Karim',
    gender: 'boy',
    src: '/img_avatar_boy_2.png',
    drawable: 'img_avatar_boy_2',
    tag: 'Curly & Aqua'
  },
  {
    id: 'boy_3',
    name: 'Sami',
    gender: 'boy',
    src: '/img_avatar_boy_3.png',
    drawable: 'img_avatar_boy_3',
    tag: 'Glasses & Orange'
  },
  {
    id: 'boy_4',
    name: 'Leo',
    gender: 'boy',
    src: '/img_avatar_boy_4.png',
    drawable: 'img_avatar_boy_4',
    tag: 'Blonde & Navy'
  },
  {
    id: 'boy_5',
    name: 'Marcus',
    gender: 'boy',
    src: '/img_avatar_boy_5.png',
    drawable: 'img_avatar_boy_5',
    tag: 'Afro & Ochre'
  },
  {
    id: 'boy_6',
    name: 'Ryan',
    gender: 'boy',
    src: '/img_avatar_boy_6.png',
    drawable: 'img_avatar_boy_6',
    tag: 'Spiky & Emerald'
  },
  {
    id: 'boy_7',
    name: 'Alex',
    gender: 'boy',
    src: '/img_avatar_boy_7.png',
    drawable: 'img_avatar_boy_7',
    tag: 'Side Part & Burgundy'
  },
  {
    id: 'boy_8',
    name: 'Noah',
    gender: 'boy',
    src: '/img_avatar_boy_8.png',
    drawable: 'img_avatar_boy_8',
    tag: 'Buzz Cut & Sportswear'
  }
];

const CODE_FILES = [
  {
    id: 'activity_register',
    title: 'activity_register.xml',
    folder: 'app/src/main/res/layout/activity_register.xml',
    group: 'register',
    language: 'xml',
    badge: 'Create Account Screen (Claymorphism)',
    description: 'Complete registration layout matching design: pastel backdrop #F8F6F2, 3D clay avatar with badge, typography, Full Name, Email, Password, Confirm Password, purple gradient button and Google, Apple, LinkedIn buttons.',
    code: `<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@drawable/bg_clay_screen"
    android:fillViewport="true"
    android:fitsSystemWindows="true">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:gravity="center_horizontal"
        android:orientation="vertical"
        android:paddingHorizontal="22dp"
        android:paddingTop="16dp"
        android:paddingBottom="28dp">

        <!-- Top Navigation with Back Arrow -->
        <RelativeLayout
            android:layout_width="match_parent"
            android:layout_height="40dp">

            <ImageButton
                android:id="@+id/btnBackToLogin"
                android:layout_width="38dp"
                android:layout_height="38dp"
                android:layout_centerVertical="true"
                android:background="?attr/selectableItemBackgroundBorderless"
                android:contentDescription="Retour à la connexion"
                android:scaleType="centerInside"
                android:src="@drawable/ic_back_arrow"
                app:tint="#372A5B" />
        </RelativeLayout>

        <!-- Circular Avatar with Plus Badge (Matching Screenshot) -->
        <FrameLayout
            android:layout_width="92dp"
            android:layout_height="92dp"
            android:layout_marginTop="2dp">

            <ImageView
                android:id="@+id/imgRegisterAvatar"
                android:layout_width="match_parent"
                android:layout_height="match_parent"
                android:contentDescription="Photo de profil"
                android:scaleType="centerCrop"
                android:src="@drawable/img_register_avatar" />
        </FrameLayout>

        <!-- Typography matching Login Page ("Welcome Back" style) -->
        <TextView
            android:id="@+id/tvCreateAccountTitle"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="12dp"
            android:text="Create Account"
            android:textColor="#1E1B2E"
            android:textSize="26sp"
            android:textStyle="bold" />

        <TextView
            android:id="@+id/tvCreateAccountSubtitle"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="3dp"
            android:text="Sign up to get started with your dashboard."
            android:textColor="#7E789B"
            android:textSize="13sp" />

        <!-- Form Fields Container with exact claymorphic style and labels -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="18dp"
            android:orientation="vertical">

            <!-- Field 1: Full Name -->
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginStart="4dp"
                android:layout_marginBottom="6dp"
                android:text="Full Name"
                android:textColor="#372A5B"
                android:textSize="12sp"
                android:textStyle="bold" />

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="48dp"
                android:background="@drawable/bg_input_register"
                android:gravity="center_vertical"
                android:orientation="horizontal"
                android:paddingHorizontal="14dp">

                <EditText
                    android:id="@+id/etRegisterName"
                    android:layout_width="match_parent"
                    android:layout_height="match_parent"
                    android:background="@null"
                    android:hint="Enter your name"
                    android:importantForAutofill="no"
                    android:inputType="textPersonName|textCapWords"
                    android:textColor="#372A5B"
                    android:textColorHint="#968EA8"
                    android:textSize="13sp" />
            </LinearLayout>

            <!-- Field 2: Email -->
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginStart="4dp"
                android:layout_marginTop="12dp"
                android:layout_marginBottom="6dp"
                android:text="Email"
                android:textColor="#372A5B"
                android:textSize="12sp"
                android:textStyle="bold" />

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="48dp"
                android:background="@drawable/bg_input_register"
                android:gravity="center_vertical"
                android:orientation="horizontal"
                android:paddingHorizontal="14dp">

                <EditText
                    android:id="@+id/etRegisterEmail"
                    android:layout_width="match_parent"
                    android:layout_height="match_parent"
                    android:background="@null"
                    android:hint="Enter your email"
                    android:importantForAutofill="no"
                    android:inputType="textEmailAddress"
                    android:textColor="#372A5B"
                    android:textColorHint="#968EA8"
                    android:textSize="13sp" />
            </LinearLayout>

            <!-- Field 3: Password -->
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginStart="4dp"
                android:layout_marginTop="12dp"
                android:layout_marginBottom="6dp"
                android:text="Password"
                android:textColor="#372A5B"
                android:textSize="12sp"
                android:textStyle="bold" />

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="48dp"
                android:background="@drawable/bg_input_register"
                android:gravity="center_vertical"
                android:orientation="horizontal"
                android:paddingHorizontal="14dp">

                <EditText
                    android:id="@+id/etRegisterPassword"
                    android:layout_width="0dp"
                    android:layout_height="match_parent"
                    android:layout_weight="1"
                    android:background="@null"
                    android:hint="Create a password"
                    android:importantForAutofill="no"
                    android:inputType="textPassword"
                    android:textColor="#372A5B"
                    android:textColorHint="#968EA8"
                    android:textSize="13sp" />

                <ImageButton
                    android:id="@+id/btnToggleRegPassword"
                    android:layout_width="32dp"
                    android:layout_height="32dp"
                    android:background="?attr/selectableItemBackgroundBorderless"
                    android:contentDescription="Toggle Password"
                    android:scaleType="centerInside"
                    android:src="@drawable/ic_eye_clay" />
            </LinearLayout>

            <!-- Field 4: Confirmation de password (demandé explicitement) -->
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginStart="4dp"
                android:layout_marginTop="12dp"
                android:layout_marginBottom="6dp"
                android:text="Confirmation de mot de passe"
                android:textColor="#372A5B"
                android:textSize="12sp"
                android:textStyle="bold" />

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="48dp"
                android:background="@drawable/bg_input_register"
                android:gravity="center_vertical"
                android:orientation="horizontal"
                android:paddingHorizontal="14dp">

                <EditText
                    android:id="@+id/etRegisterConfirmPassword"
                    android:layout_width="0dp"
                    android:layout_height="match_parent"
                    android:layout_weight="1"
                    android:background="@null"
                    android:hint="Confirm your password"
                    android:importantForAutofill="no"
                    android:inputType="textPassword"
                    android:textColor="#372A5B"
                    android:textColorHint="#968EA8"
                    android:textSize="13sp" />

                <ImageButton
                    android:id="@+id/btnToggleRegConfirmPassword"
                    android:layout_width="32dp"
                    android:layout_height="32dp"
                    android:background="?attr/selectableItemBackgroundBorderless"
                    android:contentDescription="Toggle Confirm Password"
                    android:scaleType="centerInside"
                    android:src="@drawable/ic_eye_clay" />
            </LinearLayout>

            <!-- Primary Action Button: Create Account (Gradient Clay Violet identique au bouton Login) -->
            <Button
                android:id="@+id/btnSubmitRegister"
                android:layout_width="match_parent"
                android:layout_height="50dp"
                android:layout_marginTop="20dp"
                android:background="@drawable/bg_clay_button"
                android:elevation="6dp"
                android:stateListAnimator="@null"
                android:text="Create Account"
                android:textAllCaps="false"
                android:textColor="#FFFFFF"
                android:textSize="15sp"
                android:textStyle="bold" />
        </LinearLayout>

        <!-- Divider: Or with line dividers -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="18dp"
            android:gravity="center"
            android:orientation="horizontal">

            <View
                android:layout_width="0dp"
                android:layout_height="1dp"
                android:layout_weight="1"
                android:background="#E5DFD7" />

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginHorizontal="12dp"
                android:text="Or"
                android:textColor="#8E85A8"
                android:textSize="12sp"
                android:textStyle="bold" />

            <View
                android:layout_width="0dp"
                android:layout_height="1dp"
                android:layout_weight="1"
                android:background="#E5DFD7" />
        </LinearLayout>

        <!-- Social Round Buttons: Google, Apple, LinkedIn -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="16dp"
            android:gravity="center"
            android:orientation="horizontal">

            <!-- Google -->
            <ImageButton
                android:id="@+id/btnRegisterGoogle"
                android:layout_width="44dp"
                android:layout_height="44dp"
                android:layout_marginEnd="14dp"
                android:background="@drawable/bg_clay_social_circle"
                android:contentDescription="Google Sign In"
                android:elevation="3dp"
                android:scaleType="centerInside"
                android:src="@drawable/ic_google_logo" />

            <!-- Apple -->
            <ImageButton
                android:id="@+id/btnRegisterApple"
                android:layout_width="44dp"
                android:layout_height="44dp"
                android:layout_marginHorizontal="7dp"
                android:background="@drawable/bg_clay_social_circle"
                android:contentDescription="Apple Sign In"
                android:elevation="3dp"
                android:scaleType="centerInside"
                android:src="@drawable/ic_apple_logo" />

            <!-- LinkedIn -->
            <ImageButton
                android:id="@+id/btnRegisterLinkedIn"
                android:layout_width="44dp"
                android:layout_height="44dp"
                android:layout_marginStart="14dp"
                android:background="@drawable/bg_clay_social_circle"
                android:contentDescription="LinkedIn Sign In"
                android:elevation="3dp"
                android:scaleType="centerInside"
                android:src="@drawable/ic_linkedin_logo" />
        </LinearLayout>

        <!-- Bottom Link to Login: "Already have an account? Sign In" -->
        <TextView
            android:id="@+id/tvGoToLogin"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="20dp"
            android:clickable="true"
            android:focusable="true"
            android:padding="8dp"
            android:text="Already have an account? Sign In"
            android:textColor="#7E789B"
            android:textSize="12sp"
            android:textStyle="bold" />

    </LinearLayout>
</ScrollView>`
  },
  {
    id: 'register_activity_kt',
    title: 'RegisterActivity.kt',
    folder: 'app/src/main/java/com/genove/learning/RegisterActivity.kt',
    group: 'register',
    language: 'kotlin',
    badge: 'Registration Controller',
    description: 'Kotlin activity managing full validation (Full Name, Email, Password, Confirm Password), password visibility toggles, and social login redirects.',
    code: `package com.genove.learning

import android.content.Intent
import android.os.Bundle
import android.text.method.HideReturnsTransformationMethod
import android.text.method.PasswordTransformationMethod
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.genove.learning.databinding.ActivityRegisterBinding

class RegisterActivity : AppCompatActivity() {
    private lateinit var b: ActivityRegisterBinding
    private var isPasswordVisible = false
    private var isConfirmPasswordVisible = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        b = ActivityRegisterBinding.inflate(layoutInflater)
        setContentView(b.root)

        // Retour à la connexion
        b.btnBackToLogin.setOnClickListener { finish() }
        b.tvGoToLogin.setOnClickListener { finish() }

        // Toggle visibilité mot de passe
        b.btnToggleRegPassword.setOnClickListener {
            isPasswordVisible = !isPasswordVisible
            b.etRegisterPassword.transformationMethod = if (isPasswordVisible) {
                HideReturnsTransformationMethod.getInstance()
            } else {
                PasswordTransformationMethod.getInstance()
            }
            b.etRegisterPassword.setSelection(b.etRegisterPassword.text?.length ?: 0)
        }

        // Toggle visibilité confirmation mot de passe
        b.btnToggleRegConfirmPassword.setOnClickListener {
            isConfirmPasswordVisible = !isConfirmPasswordVisible
            b.etRegisterConfirmPassword.transformationMethod = if (isConfirmPasswordVisible) {
                HideReturnsTransformationMethod.getInstance()
            } else {
                PasswordTransformationMethod.getInstance()
            }
            b.etRegisterConfirmPassword.setSelection(b.etRegisterConfirmPassword.text?.length ?: 0)
        }

        // Inscription rapide avec Apple
        b.btnRegisterApple.setOnClickListener {
            Toast.makeText(this, "Compte créé avec Apple ! Bienvenue sur Genove Learning.", Toast.LENGTH_SHORT).show()
            goToCatalog()
        }

        // Inscription rapide avec Google
        b.btnRegisterGoogle.setOnClickListener {
            Toast.makeText(this, "Compte créé avec Google ! Bienvenue sur Genove Learning.", Toast.LENGTH_SHORT).show()
            goToCatalog()
        }

        // Fast sign up with LinkedIn
        b.btnRegisterLinkedIn.setOnClickListener {
            Toast.makeText(this, "Account created with LinkedIn! Welcome to Genove Learning.", Toast.LENGTH_SHORT).show()
            goToCatalog()
        }

        // Soumission du formulaire d'inscription
        b.btnSubmitRegister.setOnClickListener {
            val name = b.etRegisterName.text.toString().trim()
            val email = b.etRegisterEmail.text.toString().trim()
            val password = b.etRegisterPassword.text.toString().trim()
            val confirmPassword = b.etRegisterConfirmPassword.text.toString().trim()

            if (name.isEmpty()) {
                Toast.makeText(this, "Veuillez entrer votre nom complet", Toast.LENGTH_SHORT).show()
                b.etRegisterName.requestFocus()
                return@setOnClickListener
            }

            if (email.isEmpty() || !android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
                Toast.makeText(this, "Veuillez entrer une adresse email valide", Toast.LENGTH_SHORT).show()
                b.etRegisterEmail.requestFocus()
                return@setOnClickListener
            }

            if (password.length < 6) {
                Toast.makeText(this, "Le mot de passe doit comporter au moins 6 caractères", Toast.LENGTH_SHORT).show()
                b.etRegisterPassword.requestFocus()
                return@setOnClickListener
            }

            if (password != confirmPassword) {
                Toast.makeText(this, "Les mots de passe ne correspondent pas", Toast.LENGTH_SHORT).show()
                b.etRegisterConfirmPassword.requestFocus()
                return@setOnClickListener
            }

            Toast.makeText(this, "Compte créé avec succès ! Bienvenue, $name.", Toast.LENGTH_LONG).show()
            goToCatalog()
        }
    }

    private fun goToCatalog() {
        val intent = Intent(this, MainActivity::class.java)
        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        startActivity(intent)
        finish()
    }
}`
  },
  {
    id: 'activity_welcome',
    title: 'activity_welcome.xml',
    folder: 'app/src/main/res/layout/activity_welcome.xml',
    group: 'login',
    language: 'xml',
    badge: 'Login Screen (3D Claymorphism)',
    description: 'Claymorphic design matching screenshot: lilac pastel background, porcelain rounded container, 3D heart, "Welcome Back" typography, 3D character girl artwork, circular 3D icon inputs with eye toggle, purple gradient Login button, and Google, Apple, LinkedIn buttons.',
    code: `<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@drawable/bg_clay_screen"
    android:fillViewport="true"
    android:fitsSystemWindows="true">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:gravity="center_horizontal"
        android:orientation="vertical"
        android:paddingHorizontal="20dp"
        android:paddingTop="20dp"
        android:paddingBottom="28dp">

        <!-- Cœur 3D rose tout en haut -->
        <ImageView
            android:id="@+id/imgHeart"
            android:layout_width="26dp"
            android:layout_height="26dp"
            android:contentDescription="@null"
            android:src="@drawable/ic_heart_clay" />

            <!-- "Welcome Back" avec rayons jaunes -->
            <LinearLayout
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginTop="8dp"
                android:gravity="center_vertical"
                android:orientation="horizontal">

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_marginEnd="6dp"
                    android:text="\\\\  /"
                    android:textColor="#F59E0B"
                    android:textSize="14sp"
                    android:textStyle="bold" />

                <TextView
                    android:id="@+id/tvWelcomeBackTitle"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="Welcome Back"
                    android:textColor="#6655CC"
                    android:textSize="28sp"
                    android:textStyle="bold" />

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_marginStart="6dp"
                    android:text="/  \\\\"
                    android:textColor="#F59E0B"
                    android:textSize="14sp"
                    android:textStyle="bold" />
            </LinearLayout>

            <!-- Sous-titre -->
            <TextView
                android:id="@+id/tvSubtitle"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginTop="4dp"
                android:text="Login to continue your journey"
                android:textColor="#7E789B"
                android:textSize="13sp" />

            <!-- Illustration 3D de la fille sans cadre (bras poses sur le rebord de la carte) -->
            <ImageView
                android:id="@+id/imgClayGirl"
                android:layout_width="160dp"
                android:layout_height="wrap_content"
                android:layout_marginTop="6dp"
                android:adjustViewBounds="true"
                android:contentDescription="Clay Girl 3D"
                android:elevation="8dp"
                android:scaleType="fitCenter"
                android:src="@drawable/img_clay_girl"
                android:translationZ="8dp" />

            <!-- Carte formulaire blanche en relief 3D (exactement au-dessous des bras) -->
            <LinearLayout
                android:id="@+id/formCard"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginTop="-8dp"
                android:background="@drawable/bg_clay_card"
                android:elevation="4dp"
                android:orientation="vertical"
                android:paddingHorizontal="18dp"
                android:paddingTop="18dp"
                android:paddingBottom="20dp">

                <!-- Champ 1: Email or Username avec badge icone 3D authentique -->
                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="52dp"
                    android:background="@drawable/bg_clay_field"
                    android:gravity="center_vertical"
                    android:orientation="horizontal"
                    android:paddingHorizontal="6dp">

                    <ImageView
                        android:layout_width="38dp"
                        android:layout_height="38dp"
                        android:contentDescription="3D User Icon"
                        android:src="@drawable/ic_clay_3d_user" />

                    <EditText
                        android:id="@+id/etEmail"
                        android:layout_width="0dp"
                        android:layout_height="match_parent"
                        android:layout_marginStart="10dp"
                        android:layout_marginEnd="10dp"
                        android:layout_weight="1"
                        android:background="@null"
                        android:hint="Email or Username"
                        android:importantForAutofill="no"
                        android:inputType="textEmailAddress"
                        android:textColor="#372A5B"
                        android:textColorHint="#968EA8"
                        android:textSize="14sp" />
                </LinearLayout>

                <!-- Champ 2: Password avec badge icone 3D authentique -->
                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="52dp"
                    android:layout_marginTop="12dp"
                    android:background="@drawable/bg_clay_field"
                    android:gravity="center_vertical"
                    android:orientation="horizontal"
                    android:paddingHorizontal="6dp">

                    <ImageView
                        android:layout_width="38dp"
                        android:layout_height="38dp"
                        android:contentDescription="3D Lock Icon"
                        android:src="@drawable/ic_clay_3d_lock" />

                    <EditText
                        android:id="@+id/etPassword"
                        android:layout_width="0dp"
                        android:layout_height="match_parent"
                        android:layout_marginStart="10dp"
                        android:layout_marginEnd="6dp"
                        android:layout_weight="1"
                        android:background="@null"
                        android:hint="Password"
                        android:importantForAutofill="no"
                        android:inputType="textPassword"
                        android:textColor="#372A5B"
                        android:textColorHint="#968EA8"
                        android:textSize="14sp" />

                    <ImageView
                        android:id="@+id/btnTogglePassword"
                        android:layout_width="32dp"
                        android:layout_height="32dp"
                        android:layout_marginEnd="6dp"
                        android:clickable="true"
                        android:contentDescription="Toggle password"
                        android:focusable="true"
                        android:padding="6dp"
                        android:src="@drawable/ic_eye_clay" />
                </LinearLayout>

                <!-- Lien Forgot Password? -->
                <TextView
                    android:id="@+id/tvForgotPassword"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_gravity="end"
                    android:layout_marginTop="10dp"
                    android:clickable="true"
                    android:focusable="true"
                    android:text="Forgot Password?"
                    android:textColor="#7B6ADB"
                    android:textSize="12sp"
                    android:textStyle="bold" />

                <!-- Bouton Login -->
                <androidx.appcompat.widget.AppCompatButton
                    android:id="@+id/btnSubmitEmail"
                    android:layout_width="match_parent"
                    android:layout_height="50dp"
                    android:layout_marginTop="14dp"
                    android:background="@drawable/bg_clay_button"
                    android:elevation="6dp"
                    android:text="Login"
                    android:textAllCaps="false"
                    android:textColor="#FFFFFF"
                    android:textSize="16sp"
                    android:textStyle="bold" />

                <!-- Séparateur : or continue with -->
                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:layout_marginTop="16dp"
                    android:gravity="center_vertical"
                    android:orientation="horizontal">

                    <View
                        android:layout_width="0dp"
                        android:layout_height="1dp"
                        android:layout_weight="1"
                        android:background="#E5DFD7" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:layout_marginHorizontal="12dp"
                        android:text="or continue with"
                        android:textColor="#8E85A8"
                        android:textSize="12sp" />

                    <View
                        android:layout_width="0dp"
                        android:layout_height="1dp"
                        android:layout_weight="1"
                        android:background="#E5DFD7" />
                </LinearLayout>

                <!-- Social Round Buttons: Google, Apple, LinkedIn -->
                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:layout_marginTop="14dp"
                    android:gravity="center"
                    android:orientation="horizontal">

                    <!-- Google -->
                    <FrameLayout
                        android:id="@+id/btnGoogle"
                        android:layout_width="48dp"
                        android:layout_height="48dp"
                        android:background="@drawable/bg_clay_social_circle"
                        android:clickable="true"
                        android:elevation="3dp"
                        android:focusable="true">

                        <ImageView
                            android:layout_width="22dp"
                            android:layout_height="22dp"
                            android:layout_gravity="center"
                            android:contentDescription="Google"
                            android:src="@drawable/ic_google_logo" />
                    </FrameLayout>

                    <!-- Apple -->
                    <FrameLayout
                        android:id="@+id/btnApple"
                        android:layout_width="48dp"
                        android:layout_height="48dp"
                        android:layout_marginHorizontal="20dp"
                        android:background="@drawable/bg_clay_social_circle"
                        android:clickable="true"
                        android:elevation="3dp"
                        android:focusable="true">

                        <ImageView
                            android:layout_width="22dp"
                            android:layout_height="22dp"
                            android:layout_gravity="center"
                            android:contentDescription="Apple"
                            android:src="@drawable/ic_apple_logo" />
                    </FrameLayout>

                    <!-- LinkedIn -->
                    <FrameLayout
                        android:id="@+id/btnLinkedIn"
                        android:layout_width="48dp"
                        android:layout_height="48dp"
                        android:background="@drawable/bg_clay_social_circle"
                        android:clickable="true"
                        android:elevation="3dp"
                        android:focusable="true">

                        <ImageView
                            android:layout_width="22dp"
                            android:layout_height="22dp"
                            android:layout_gravity="center"
                            android:contentDescription="LinkedIn"
                            android:src="@drawable/ic_linkedin_logo" />
                    </FrameLayout>
                </LinearLayout>

                <!-- Don't have an account? Sign Up -->
                <LinearLayout
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_gravity="center_horizontal"
                    android:layout_marginTop="16dp"
                    android:orientation="horizontal">

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="Don't have an account? "
                        android:textColor="#7E789B"
                        android:textSize="13sp" />

                    <TextView
                        android:id="@+id/tvToggleMode"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:clickable="true"
                        android:focusable="true"
                        android:text="Sign Up"
                        android:textColor="#7864E6"
                        android:textSize="13sp"
                        android:textStyle="bold" />
                </LinearLayout>

            </LinearLayout>

    </LinearLayout>
</ScrollView>`
  },
  {
    id: 'welcome_activity_kt',
    title: 'WelcomeActivity.kt',
    folder: 'app/src/main/java/com/genove/learning/WelcomeActivity.kt',
    group: 'login',
    language: 'kotlin',
    badge: 'Welcome / Login Controller',
    description: 'Kotlin controller with Google, Apple, LinkedIn handlers, password visibility toggle, field validation, and navigation to RegisterActivity.',
    code: `package com.genove.learning

import android.content.Intent
import android.os.Bundle
import android.text.method.HideReturnsTransformationMethod
import android.text.method.PasswordTransformationMethod
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.genove.learning.databinding.ActivityWelcomeBinding

class WelcomeActivity : AppCompatActivity() {
    private lateinit var b: ActivityWelcomeBinding
    private var isPasswordVisible: Boolean = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        b = ActivityWelcomeBinding.inflate(layoutInflater)
        setContentView(b.root)

        // Fast sign in with Google
        b.btnGoogle.setOnClickListener {
            Toast.makeText(this, "Signed in with Google successfully!", Toast.LENGTH_SHORT).show()
            goToCatalog()
        }

        // Fast sign in with Apple
        b.btnApple.setOnClickListener {
            Toast.makeText(this, "Signed in with Apple successfully!", Toast.LENGTH_SHORT).show()
            goToCatalog()
        }

        // Fast sign in with LinkedIn
        b.btnLinkedIn.setOnClickListener {
            Toast.makeText(this, "Signed in with LinkedIn successfully!", Toast.LENGTH_SHORT).show()
            goToCatalog()
        }

        // Afficher / Masquer le mot de passe
        b.btnTogglePassword.setOnClickListener {
            isPasswordVisible = !isPasswordVisible
            if (isPasswordVisible) {
                b.etPassword.transformationMethod = HideReturnsTransformationMethod.getInstance()
            } else {
                b.etPassword.transformationMethod = PasswordTransformationMethod.getInstance()
            }
            b.etPassword.setSelection(b.etPassword.text.length)
        }

        // Mot de passe oublié
        b.tvForgotPassword.setOnClickListener {
            Toast.makeText(this, "Lien de réinitialisation envoyé à votre adresse.", Toast.LENGTH_LONG).show()
        }

        // Lien "Sign Up" -> Ouvre l'interface RegisterActivity
        b.tvToggleMode.setOnClickListener {
            startActivity(Intent(this, RegisterActivity::class.java))
        }

        // Bouton Login principal
        b.btnSubmitEmail.setOnClickListener {
            val emailOrUsername = b.etEmail.text.toString().trim()
            val password = b.etPassword.text.toString().trim()

            if (emailOrUsername.isEmpty()) {
                Toast.makeText(this, "Veuillez entrer votre Email ou Nom d'utilisateur", Toast.LENGTH_SHORT).show()
                b.etEmail.requestFocus()
                return@setOnClickListener
            }

            if (password.length < 6) {
                Toast.makeText(this, "Le mot de passe doit comporter au moins 6 caractères", Toast.LENGTH_SHORT).show()
                b.etPassword.requestFocus()
                return@setOnClickListener
            }

            Toast.makeText(this, "Connexion réussie ! Bienvenue sur Genove Learning.", Toast.LENGTH_SHORT).show()
            goToCatalog()
        }
    }

    private fun goToCatalog() {
        val intent = Intent(this, MainActivity::class.java)
        startActivity(intent)
        finish()
    }
}`
  },
  {
    id: 'fragment_profile',
    title: 'fragment_profile.xml',
    folder: 'app/src/main/res/layout/fragment_profile.xml',
    group: 'profil',
    language: 'xml',
    badge: 'Profile Screen (Claymorphism & 3D)',
    description: 'Profile interface with pastel background #F8F6F2, circular 3D avatar with camera badge, removed Date of Birth & Country fields, and the 4 clean fields: Full Name, Email, Current Password, and New Password with eye toggle buttons.',
    code: `<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@drawable/bg_clay_screen"
    android:fillViewport="true"
    android:fitsSystemWindows="true">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:gravity="center_horizontal"
        android:orientation="vertical"
        android:paddingHorizontal="22dp"
        android:paddingTop="16dp"
        android:paddingBottom="28dp">

        <!-- Top Navigation Bar -->
        <RelativeLayout
            android:layout_width="match_parent"
            android:layout_height="40dp">

            <ImageButton
                android:id="@+id/btnBack"
                android:layout_width="38dp"
                android:layout_height="38dp"
                android:layout_centerVertical="true"
                android:background="?attr/selectableItemBackgroundBorderless"
                android:contentDescription="Retour"
                android:scaleType="centerInside"
                android:src="@drawable/ic_back_arrow"
                app:tint="#372A5B" />

            <TextView
                android:id="@+id/tvTitle"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_centerInParent="true"
                android:text="Edit Profile"
                android:textColor="#1E1B2E"
                android:textSize="17sp"
                android:textStyle="bold" />
        </RelativeLayout>

        <!-- 3D Circular Avatar with Camera/Edit Badge -->
        <FrameLayout
            android:id="@+id/btnChangeAvatarContainer"
            android:layout_width="100dp"
            android:layout_height="100dp"
            android:layout_marginTop="10dp"
            android:clickable="true"
            android:focusable="true">

            <com.google.android.material.card.MaterialCardView
                android:layout_width="96dp"
                android:layout_height="96dp"
                android:layout_gravity="center"
                app:cardCornerRadius="48dp"
                app:cardElevation="6dp"
                app:strokeColor="#FFFFFF"
                app:strokeWidth="2.5dp">

                <ImageView
                    android:id="@+id/imgAvatar"
                    android:layout_width="match_parent"
                    android:layout_height="match_parent"
                    android:contentDescription="Photo de profil"
                    android:scaleType="centerCrop"
                    android:src="@drawable/img_avatar_girl_1" />
            </com.google.android.material.card.MaterialCardView>

            <!-- Camera Badge in bottom right corner -->
            <com.google.android.material.card.MaterialCardView
                android:id="@+id/btnChangePhoto"
                android:layout_width="32dp"
                android:layout_height="32dp"
                android:layout_gravity="bottom|end"
                app:cardBackgroundColor="#6655CC"
                app:cardCornerRadius="16dp"
                app:cardElevation="8dp"
                app:strokeColor="#FFFFFF"
                app:strokeWidth="1.5dp">

                <ImageView
                    android:layout_width="16dp"
                    android:layout_height="16dp"
                    android:layout_gravity="center"
                    android:contentDescription="Modifier avatar"
                    android:src="@drawable/ic_camera"
                    app:tint="#FFFFFF" />
            </com.google.android.material.card.MaterialCardView>
        </FrameLayout>

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="6dp"
            android:text="Touchez l'avatar pour choisir un personnage 3D"
            android:textColor="#7E789B"
            android:textSize="11sp"
            android:textStyle="bold" />

        <!-- Form Fields : Full Name, Email, Ancien Password, Nouveau Password -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="16dp"
            android:orientation="vertical">

            <!-- Field 1: Full Name -->
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginStart="4dp"
                android:layout_marginBottom="6dp"
                android:text="Full Name"
                android:textColor="#372A5B"
                android:textSize="12sp"
                android:textStyle="bold" />

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="48dp"
                android:background="@drawable/bg_input_register"
                android:gravity="center_vertical"
                android:orientation="horizontal"
                android:paddingHorizontal="14dp">

                <EditText
                    android:id="@+id/etProfileName"
                    android:layout_width="match_parent"
                    android:layout_height="match_parent"
                    android:background="@null"
                    android:hint="Enter your full name"
                    android:importantForAutofill="no"
                    android:inputType="textPersonName|textCapWords"
                    android:textColor="#372A5B"
                    android:textColorHint="#968EA8"
                    android:textSize="13sp" />
            </LinearLayout>

            <!-- Field 2: Email -->
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginStart="4dp"
                android:layout_marginTop="12dp"
                android:layout_marginBottom="6dp"
                android:text="Email"
                android:textColor="#372A5B"
                android:textSize="12sp"
                android:textStyle="bold" />

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="48dp"
                android:background="@drawable/bg_input_register"
                android:gravity="center_vertical"
                android:orientation="horizontal"
                android:paddingHorizontal="14dp">

                <EditText
                    android:id="@+id/etProfileEmail"
                    android:layout_width="match_parent"
                    android:layout_height="match_parent"
                    android:background="@null"
                    android:hint="Enter your email"
                    android:importantForAutofill="no"
                    android:inputType="textEmailAddress"
                    android:textColor="#372A5B"
                    android:textColorHint="#968EA8"
                    android:textSize="13sp" />
            </LinearLayout>

            <!-- Field 3: Ancien mot de passe -->
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginStart="4dp"
                android:layout_marginTop="12dp"
                android:layout_marginBottom="6dp"
                android:text="Ancien mot de passe"
                android:textColor="#372A5B"
                android:textSize="12sp"
                android:textStyle="bold" />

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="48dp"
                android:background="@drawable/bg_input_register"
                android:gravity="center_vertical"
                android:orientation="horizontal"
                android:paddingHorizontal="14dp">

                <EditText
                    android:id="@+id/etProfileOldPassword"
                    android:layout_width="0dp"
                    android:layout_height="match_parent"
                    android:layout_weight="1"
                    android:background="@null"
                    android:hint="••••••••••"
                    android:importantForAutofill="no"
                    android:inputType="textPassword"
                    android:textColor="#372A5B"
                    android:textColorHint="#968EA8"
                    android:textSize="13sp" />

                <ImageButton
                    android:id="@+id/btnToggleOldPassword"
                    android:layout_width="32dp"
                    android:layout_height="32dp"
                    android:background="?attr/selectableItemBackgroundBorderless"
                    android:contentDescription="Toggle Old Password"
                    android:scaleType="centerInside"
                    android:src="@drawable/ic_eye_clay" />
            </LinearLayout>

            <!-- Field 4: Nouveau mot de passe -->
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginStart="4dp"
                android:layout_marginTop="12dp"
                android:layout_marginBottom="6dp"
                android:text="Nouveau mot de passe"
                android:textColor="#372A5B"
                android:textSize="12sp"
                android:textStyle="bold" />

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="48dp"
                android:background="@drawable/bg_input_register"
                android:gravity="center_vertical"
                android:orientation="horizontal"
                android:paddingHorizontal="14dp">

                <EditText
                    android:id="@+id/etProfileNewPassword"
                    android:layout_width="0dp"
                    android:layout_height="match_parent"
                    android:layout_weight="1"
                    android:background="@null"
                    android:hint="••••••••••"
                    android:importantForAutofill="no"
                    android:inputType="textPassword"
                    android:textColor="#372A5B"
                    android:textColorHint="#968EA8"
                    android:textSize="13sp" />

                <ImageButton
                    android:id="@+id/btnToggleNewPassword"
                    android:layout_width="32dp"
                    android:layout_height="32dp"
                    android:background="?attr/selectableItemBackgroundBorderless"
                    android:contentDescription="Toggle New Password"
                    android:scaleType="centerInside"
                    android:src="@drawable/ic_eye_clay" />
            </LinearLayout>

            <!-- Save Changes Button -->
            <Button
                android:id="@+id/btnSaveProfile"
                android:layout_width="match_parent"
                android:layout_height="50dp"
                android:layout_marginTop="24dp"
                android:background="@drawable/bg_clay_button"
                android:elevation="6dp"
                android:stateListAnimator="@null"
                android:text="Enregistrer les modifications"
                android:textAllCaps="false"
                android:textColor="#FFFFFF"
                android:textSize="15sp"
                android:textStyle="bold" />
        </LinearLayout>

    </LinearLayout>
</ScrollView>`
  },
  {
    id: 'profile_fragment_kt',
    title: 'ProfileFragment.kt',
    folder: 'app/src/main/java/com/genove/learning/ProfileFragment.kt',
    group: 'profil',
    language: 'kotlin',
    badge: 'Profile Controller & 3D Avatars',
    description: 'Kotlin controller with 16 3D clay avatars chooser (8 girls & 8 boys), password visibility toggles, and profile updates.',
    code: `package com.genove.learning

import android.os.Bundle
import android.text.method.HideReturnsTransformationMethod
import android.text.method.PasswordTransformationMethod
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.appcompat.app.AlertDialog
import androidx.fragment.app.Fragment
import com.genove.learning.databinding.FragmentProfileBinding

class ProfileFragment : Fragment() {
    private var _b: FragmentProfileBinding? = null
    private val b get() = _b!!

    private var isOldPasswordVisible = false
    private var isNewPasswordVisible = false

    // 16 3D Clay Avatar options (8 Girls & 8 Boys)
    private val avatarOptions = arrayOf(
        AvatarItem("Girl 1: Lilac Hoodie", R.drawable.img_avatar_girl_1),
        AvatarItem("Girl 2: Mint & Headband", R.drawable.img_avatar_girl_2),
        AvatarItem("Girl 3: Blonde & Glasses", R.drawable.img_avatar_girl_3),
        AvatarItem("Girl 4: Curly & Coral", R.drawable.img_avatar_girl_4),
        AvatarItem("Girl 5: Headphones & Mint", R.drawable.img_avatar_girl_5),
        AvatarItem("Girl 6: Lavender Space Buns", R.drawable.img_avatar_girl_6),
        AvatarItem("Girl 7: Bob & Round Glasses", R.drawable.img_avatar_girl_7),
        AvatarItem("Girl 8: Auburn & Yellow Headband", R.drawable.img_avatar_girl_8),
        AvatarItem("Boy 1: Pastel Purple", R.drawable.img_avatar_boy_1),
        AvatarItem("Boy 2: Curly & Aqua", R.drawable.img_avatar_boy_2),
        AvatarItem("Boy 3: Glasses & Orange", R.drawable.img_avatar_boy_3),
        AvatarItem("Boy 4: Blonde & Navy", R.drawable.img_avatar_boy_4),
        AvatarItem("Boy 5: Afro & Ochre", R.drawable.img_avatar_boy_5),
        AvatarItem("Boy 6: Spiky & Emerald", R.drawable.img_avatar_boy_6),
        AvatarItem("Boy 7: Side Part & Burgundy", R.drawable.img_avatar_boy_7),
        AvatarItem("Boy 8: Buzz Cut & Electric Blue", R.drawable.img_avatar_boy_8)
    )

    data class AvatarItem(val name: String, val resId: Int)

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View {
        _b = FragmentProfileBinding.inflate(inflater, container, false)
        return b.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        // Back button
        b.btnBack.setOnClickListener {
            parentFragmentManager.popBackStack()
        }

        // Default profile values
        b.etProfileName.setText("Melissa Peters")
        b.etProfileEmail.setText("melpeters@gmail.com")
        b.etProfileOldPassword.setText("••••••••••")
        b.etProfileNewPassword.setText("")

        // 3D Avatar chooser dialog
        val showAvatarChooser = {
            val names = avatarOptions.map { it.name }.toTypedArray()
            AlertDialog.Builder(requireContext())
                .setTitle("Choose a 3D Avatar")
                .setItems(names) { _, which ->
                    val chosen = avatarOptions[which]
                    b.imgAvatar.setImageResource(chosen.resId)
                    Toast.makeText(requireContext(), "Avatar updated!", Toast.LENGTH_SHORT).show()
                }
                .setNegativeButton("Cancel", null)
                .show()
        }

        b.btnChangeAvatarContainer.setOnClickListener { showAvatarChooser() }
        b.btnChangePhoto.setOnClickListener { showAvatarChooser() }

        // Toggle old password visibility
        b.btnToggleOldPassword.setOnClickListener {
            isOldPasswordVisible = !isOldPasswordVisible
            b.etProfileOldPassword.transformationMethod = if (isOldPasswordVisible) {
                HideReturnsTransformationMethod.getInstance()
            } else {
                PasswordTransformationMethod.getInstance()
            }
            b.etProfileOldPassword.setSelection(b.etProfileOldPassword.text?.length ?: 0)
        }

        // Toggle new password visibility
        b.btnToggleNewPassword.setOnClickListener {
            isNewPasswordVisible = !isNewPasswordVisible
            b.etProfileNewPassword.transformationMethod = if (isNewPasswordVisible) {
                HideReturnsTransformationMethod.getInstance()
            } else {
                PasswordTransformationMethod.getInstance()
            }
            b.etProfileNewPassword.setSelection(b.etProfileNewPassword.text?.length ?: 0)
        }

        // Save profile changes
        b.btnSaveProfile.setOnClickListener {
            val name = b.etProfileName.text.toString().trim()
            val email = b.etProfileEmail.text.toString().trim()

            if (name.isEmpty()) {
                Toast.makeText(requireContext(), "Please enter your full name", Toast.LENGTH_SHORT).show()
                b.etProfileName.requestFocus()
                return@setOnClickListener
            }

            if (email.isEmpty()) {
                Toast.makeText(requireContext(), "Please enter your email", Toast.LENGTH_SHORT).show()
                b.etProfileEmail.requestFocus()
                return@setOnClickListener
            }

            Toast.makeText(requireContext(), "Profile updated successfully!", Toast.LENGTH_LONG).show()
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _b = null
    }
}`
  }
];

export default function App() {
  // Navigation: Login is the primary entry point
  const [currentScreen, setCurrentScreen] = useState<'login' | 'register' | 'catalog' | 'profile'>('login');
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'images' | 'guide'>('preview');
  const [activeCodeFileId, setActiveCodeFileId] = useState<string>('activity_register');
  const [codeFilter, setCodeFilter] = useState<'all' | 'register' | 'login' | 'profil'>('register');
  const [copiedFileId, setCopiedFileId] = useState<string | null>(null);

  // Login inputs (Empty by default as requested!)
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Register inputs (Empty by default as requested!)
  const [regFullName, setRegFullName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showRegConfirmPassword, setShowRegConfirmPassword] = useState(false);

  const [authSuccessToast, setAuthSuccessToast] = useState<string | null>(null);

  // Profile Form State (Persistent avatar across Catalog, Profile & Page navigation)
  const [profileName, setProfileName] = useState("Melissa Peters");
  const [profileEmail, setProfileEmail] = useState("melpeters@gmail.com");
  const [profileOldPassword, setProfileOldPassword] = useState("••••••••••");
  const [profileNewPassword, setProfileNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('genove_selected_avatar');
      if (saved) return saved;
    }
    return "/img_avatar_girl_1.png";
  });
  const [isAvatarPickerOpen, setIsAvatarPickerOpen] = useState(false);
  const [avatarCategoryFilter, setAvatarCategoryFilter] = useState<'all' | 'girl' | 'boy'>('all');
  const [isSavedFeedback, setIsSavedFeedback] = useState(false);

  // Synchronize and persist avatar across all screens & reloads
  const handleSelectAvatar = (src: string) => {
    setSelectedAvatar(src);
    try {
      localStorage.setItem('genove_selected_avatar', src);
    } catch {
      // Local storage fallback
    }
  };

  // Language State: 'en' (Britain) or 'fr' (France)
  const [language, setLanguage] = useState<'en' | 'fr'>(() => {
    try {
      const saved = localStorage.getItem('genove_app_lang');
      if (saved === 'fr' || saved === 'en') return saved;
    } catch {}
    return 'en';
  });

  const handleSetLanguage = (lang: 'en' | 'fr') => {
    setLanguage(lang);
    try {
      localStorage.setItem('genove_app_lang', lang);
    } catch {}
  };

  // Helper translation function
  const t = (key: keyof typeof I18N['en']) => {
    return I18N[language][key] || I18N['en'][key] || (key as string);
  };

  // Catalog State
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [catalogBottomNav, setCatalogBottomNav] = useState<'catalog' | 'courses' | 'explore' | 'profile'>('catalog');

  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
      const title = language === 'fr' ? course.titleFr : course.titleEn;
      const desc = language === 'fr' ? course.descriptionFr : course.descriptionEn;
      const cat = language === 'fr' ? course.categoryNameFr : course.categoryNameEn;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        title.toLowerCase().includes(q) ||
        desc.toLowerCase().includes(q) ||
        cat.toLowerCase().includes(q) ||
        course.instructor.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  const displayedCodeFiles = useMemo(() => {
    if (codeFilter === 'all') return CODE_FILES;
    if (codeFilter === 'register') return CODE_FILES.filter(f => f.group === 'register');
    if (codeFilter === 'login') return CODE_FILES.filter(f => f.group === 'login');
    return CODE_FILES.filter(f => f.group === 'profil');
  }, [codeFilter]);

  const activeCodeFile = useMemo(() => {
    return CODE_FILES.find((f) => f.id === activeCodeFileId) || CODE_FILES[0];
  }, [activeCodeFileId]);

  const handleCopyCode = (fileId: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedFileId(fileId);
    setTimeout(() => {
      setCopiedFileId(null);
    }, 2500);
  };

  const handleLoginSubmit = (provider?: string) => {
    const text = provider ? `Signed in with ${provider}! Welcome.` : `Login successful! Welcome back.`;
    setAuthSuccessToast(text);
    setTimeout(() => {
      setAuthSuccessToast(null);
      setCurrentScreen('catalog');
    }, 800);
  };

  const handleRegisterSubmit = (provider?: string) => {
    const text = provider ? `Account created via ${provider}! Welcome.` : `Account created successfully! Welcome ${regFullName || "to Genove Learning"}.`;
    setAuthSuccessToast(text);
    setTimeout(() => {
      setAuthSuccessToast(null);
      setCurrentScreen('catalog');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <header className="border-b border-slate-800/80 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  Genove Learning
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                  Authentication, Registration &amp; Profile
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Pixel-perfect 3D Claymorphism design with 16 avatars (8 girls &amp; 8 boys)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/GenoveLearning_updated.zip"
              download="GenoveLearning_updated.zip"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Full Project (.zip)</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 lg:px-8 py-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-3 overflow-x-auto">
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              activeTab === 'preview'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Interactive Mobile Simulator</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('code');
              setActiveCodeFileId('fragment_profile');
              setCodeFilter('profil');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              activeTab === 'code'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Copy Android Code</span>
            <span className="text-xs px-1.5 py-0.2 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
              Updated
            </span>
          </button>

          <button
            onClick={() => setActiveTab('images')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              activeTab === 'images'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>3D Assets &amp; 16 Avatars</span>
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              activeTab === 'guide'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <FolderTree className="w-4 h-4" />
            <span>Integration Guide</span>
          </button>
        </div>

        {/* Tab 1: Interactive Preview */}
        {activeTab === 'preview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Android Phone Mockup (Interactive) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              {/* Screen Flow Switcher */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800 mb-3 shadow-inner flex-wrap justify-center">
                <button
                  onClick={() => setCurrentScreen('login')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    currentScreen === 'login'
                      ? 'bg-purple-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>1. Login (3D Clay)</span>
                </button>
                <button
                  onClick={() => setCurrentScreen('register')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    currentScreen === 'register'
                      ? 'bg-yellow-500 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>2. Register (Clay)</span>
                </button>
                <button
                  onClick={() => setCurrentScreen('catalog')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    currentScreen === 'catalog'
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>3. Course Catalog</span>
                </button>
                <button
                  onClick={() => setCurrentScreen('profile')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    currentScreen === 'profile'
                      ? 'bg-[#6655CC] text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>4. Profile (16 3D Avatars)</span>
                </button>
              </div>

              {/* Smartphone Frame */}
              <div className="relative w-[340px] sm:w-[370px] h-[730px] bg-slate-900 rounded-[50px] p-3 shadow-2xl shadow-blue-900/30 border-4 border-slate-700/80 ring-1 ring-white/10 flex flex-col overflow-hidden">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800" />
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-950/60" />
                </div>

                {/* Inner Device Screen */}
                <div
                  className={`w-full h-full rounded-[40px] flex flex-col overflow-hidden relative shadow-inner ${
                    currentScreen === 'login' || currentScreen === 'register' || currentScreen === 'profile'
                      ? 'bg-[#F8F6F2] text-slate-900'
                      : 'bg-[#F8FAFC] text-slate-900'
                  }`}
                >
                  {/* Status Bar */}
                  <div className={`h-9 px-6 pt-2 flex items-center justify-between text-xs font-medium select-none z-20 opacity-90 ${
                    currentScreen === 'login' || currentScreen === 'register' || currentScreen === 'profile' ? 'text-slate-700' : 'text-slate-900'
                  }`}>
                    <span className="font-semibold text-[11px]">9:41</span>
                    <div className="flex items-center gap-1.5 text-[10px]">
                      <span>5G</span>
                      <div className="w-4 h-2 border border-current rounded-[2px] p-[1px] flex items-center">
                        <div className="w-full h-full bg-current rounded-[1px]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Toast Feedback */}
                  <AnimatePresence>
                    {authSuccessToast && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-12 inset-x-4 z-40 bg-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg flex items-center gap-2"
                      >
                        <Check className="w-4 h-4 shrink-0" />
                        <span>{authSuccessToast}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* =========================================
                      SCREEN 1: LOGIN (CLAYMORPHISM)
                      3D Chibi Girl + Welcome Back + Clay Form + Google/Apple/LinkedIn
                      ========================================= */}
                  {currentScreen === 'login' && (
                    <div className="flex-1 overflow-y-auto bg-[#F8F6F2] px-4 pb-6 pt-1 flex flex-col items-center scrollbar-none relative">
                      {/* Top Action Bar with 🇬🇧 / 🇫🇷 Language Switcher */}
                      <div className="w-full flex items-center justify-between py-1 px-1">
                        <div className="w-6" />
                        {/* 3D Heart centered */}
                        <div className="flex justify-center">
                          <Heart className="w-6 h-6 text-pink-400 fill-pink-400 drop-shadow-sm" />
                        </div>
                        {/* Language Selector */}
                        <div className="flex items-center gap-1 bg-[#F4F1FD] p-0.5 rounded-full border border-[#DDD5F8] shadow-xs shrink-0">
                          <button
                            onClick={() => handleSetLanguage('en')}
                            className={`flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold transition-all ${
                              language === 'en'
                                ? 'bg-gradient-to-b from-[#A896F5] via-[#9783E8] to-[#866FE0] text-white shadow-[0_2px_6px_rgba(151,131,232,0.4)]'
                                : 'text-slate-600 hover:text-[#7864E6]'
                            }`}
                            title="English"
                          >
                            <span>🇬🇧</span>
                            <span>EN</span>
                          </button>
                          <button
                            onClick={() => handleSetLanguage('fr')}
                            className={`flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold transition-all ${
                              language === 'fr'
                                ? 'bg-gradient-to-b from-[#A896F5] via-[#9783E8] to-[#866FE0] text-white shadow-[0_2px_6px_rgba(151,131,232,0.4)]'
                                : 'text-slate-600 hover:text-[#7864E6]'
                            }`}
                            title="Français"
                          >
                            <span>🇫🇷</span>
                            <span>FR</span>
                          </button>
                        </div>
                      </div>

                      {/* "Welcome Back" with yellow sparkle rays */}
                      <div className="flex items-center justify-center gap-1.5 mt-0.5">
                        <span className="text-amber-500 font-black text-xs tracking-widest">\ /</span>
                        <h2 className="text-xl sm:text-2xl font-black text-[#6655CC] tracking-tight">
                          {t('welcomeBack')}
                        </h2>
                        <span className="text-amber-500 font-black text-xs tracking-widest">/ \</span>
                      </div>
                      <p className="text-[11px] text-[#7E789B] font-medium text-center mt-0.5">
                        {t('loginJourney')}
                      </p>

                      {/* Cute 3D Cartoon Clay Girl Illustration - Sans Cadre (transparent borderless, crisp HD) */}
                      {/* Les bras et coudes reposent directement sur le rebord supérieur de la carte formulaire */}
                      <div className="relative w-full flex justify-center -mb-2 mt-1 z-20 pointer-events-none">
                        <img
                          src="/img_clay_girl_3d.png"
                          alt="3D Clay Girl"
                          className="w-36 sm:w-40 h-auto object-contain select-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.14)]"
                        />
                      </div>

                      {/* Form Card positioned exactly directly beneath girl's arms */}
                      <div className="w-full bg-[#FAF8F5] rounded-3xl pt-3.5 pb-4 px-4 shadow-xl border border-[#ECE7E0] relative z-10 space-y-2.5">
                        {/* Email or Username */}
                        <div className="bg-[#F2EEE9] border border-[#E6E0D6] rounded-full p-1 flex items-center shadow-inner">
                          <div className="w-9 h-9 shrink-0 flex items-center justify-center">
                            <img
                              src="/ic_clay_3d_user.png"
                              alt="3D User Icon"
                              className="w-9 h-9 object-contain drop-shadow-sm select-none"
                            />
                          </div>
                          <input
                            type="text"
                            placeholder={t('emailOrUser')}
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            className="bg-transparent text-xs text-[#372A5B] placeholder:text-[#968EA8] w-full px-2.5 outline-none font-medium"
                          />
                        </div>

                        {/* Password with Eye toggle */}
                        <div className="bg-[#F2EEE9] border border-[#E6E0D6] rounded-full p-1 flex items-center shadow-inner">
                          <div className="w-9 h-9 shrink-0 flex items-center justify-center">
                            <img
                              src="/ic_clay_3d_lock.png"
                              alt="3D Lock Icon"
                              className="w-9 h-9 object-contain drop-shadow-sm select-none"
                            />
                          </div>
                          <input
                            type={showPassword ? "text" : "password"}
                            placeholder={t('passwordPlaceholder')}
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            className="bg-transparent text-xs text-[#372A5B] placeholder:text-[#968EA8] w-full px-2.5 outline-none font-medium"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="p-1 text-[#8E85A8] hover:text-[#6655CC] transition-colors"
                            title="Toggle password visibility"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>

                        {/* Forgot Password? */}
                        <div className="text-right -mt-0.5">
                          <button
                            type="button"
                            onClick={() => setAuthSuccessToast("Password reset link sent to your email address!")}
                            className="text-[10px] font-bold text-[#7B6ADB] hover:underline"
                          >
                            {t('forgotPassword')}
                          </button>
                        </div>

                        {/* 3D Clay Login Button with puffy claymorphic depth */}
                        <button
                          onClick={() => handleLoginSubmit()}
                          className="w-full h-11 bg-gradient-to-b from-[#A896F5] via-[#9783E8] to-[#866FE0] hover:from-[#B1A0F8] hover:to-[#7E65DE] text-white font-extrabold text-sm rounded-full shadow-[0_6px_16px_rgba(151,131,232,0.42),inset_0_2px_3px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(70,40,140,0.2)] active:translate-y-0.5 active:shadow-[0_2px_8px_rgba(151,131,232,0.4)] transition-all flex items-center justify-center tracking-wide"
                          style={{ textShadow: "0 1px 2px rgba(60,40,120,0.3)" }}
                        >
                          {t('loginBtn')}
                        </button>

                        {/* Divider: or continue with */}
                        <div className="flex items-center gap-2 pt-0.5">
                          <div className="flex-1 h-[1px] bg-[#E5DFD7]" />
                          <span className="text-[10px] text-[#8E85A8] font-medium">{t('orContinueWith')}</span>
                          <div className="flex-1 h-[1px] bg-[#E5DFD7]" />
                        </div>

                        {/* Social Round Buttons: Google, Apple, LinkedIn */}
                        <div className="flex items-center justify-center gap-3.5 pt-0.5">
                          {/* Google */}
                          <button
                            onClick={() => handleLoginSubmit("Google")}
                            className="w-10 h-10 rounded-full bg-white border border-[#EBE6DE] shadow-md hover:bg-slate-50 flex items-center justify-center active:scale-95 transition-all"
                            title="Google"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88,-3.05c-1.08,.72 -2.45,1.16 -4.05,1.16 -3.12,0 -5.77,-2.1 -6.72,-4.93H1.25v3.15C3.26,21.36 7.34,24 12,24z"/>
                              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72 -.38,-1.49 -.38,-2.27s.14,-1.55 .38,-2.27V6.58H1.25C.45,8.18 0,9.98 0,12s.45,3.82 1.25,5.42l4.03,-3.15z"/>
                              <path fill="#EA4335" d="M12 4.75c1.77,0 3.35,.61 4.6,1.8l3.42,-3.42C17.95,1.19 15.24,0 12,0 7.34,0 3.26,2.64 1.25,6.58l4.03,3.15c.95,-2.83 3.6,-4.98 6.72,-4.98z"/>
                            </svg>
                          </button>

                          {/* Apple */}
                          <button
                            onClick={() => handleLoginSubmit("Apple")}
                            className="w-10 h-10 rounded-full bg-white border border-[#EBE6DE] shadow-md hover:bg-slate-50 flex items-center justify-center active:scale-95 transition-all"
                            title="Apple"
                          >
                            <svg className="w-4 h-4 fill-black" viewBox="0 0 170 170">
                              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35 0.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.33-6.61-9.98-11.65-20.72-15.11-32.22-3.47-11.5-5.2-22.14-5.2-31.92 0-14.75 3.82-26.78 11.45-36.1 7.63-9.31 17.1-14.07 28.43-14.28 4.8 0 10.05 1.25 15.76 3.75 5.71 2.5 9.53 3.86 11.45 4.09 1.57-0.23 5.56-1.64 11.96-4.22 6.4-2.58 11.83-3.72 16.29-3.41 12.06 0.65 21.75 4.97 29.07 12.96-10.57 6.42-15.75 15.22-15.54 26.4 0.22 8.79 3.58 16.14 10.08 22.06 6.5 5.91 14.18 9.38 23.03 10.42-2.18 6.53-4.9 12.83-8.16 18.91zM119.22 31.84c0-7.39 2.65-14.45 7.95-21.18 5.3-6.73 11.75-10.66 19.34-11.8 0.11 0.98 0.17 1.85 0.17 2.62 0 7.39-2.82 14.39-8.46 21-5.64 6.61-12.35 10.42-20.14 11.44-0.1-0.77-0.16-1.46-0.16-2.08z"/>
                            </svg>
                          </button>

                          {/* LinkedIn */}
                          <button
                            onClick={() => handleLoginSubmit("LinkedIn")}
                            className="w-10 h-10 rounded-full bg-white border border-[#EBE6DE] shadow-md hover:bg-slate-50 flex items-center justify-center active:scale-95 transition-all"
                            title="LinkedIn"
                          >
                            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
                              <rect width="24" height="24" rx="5" fill="#0A66C2" />
                              <path fill="#FFFFFF" d="M19 19h-3.1v-5.2c0-1.3-.5-2.2-1.7-2.2-1 0-1.5.7-1.8 1.4-.1.3-.1.6-.1.9V19h-3.1s.04-10.2 0-11.2h3.1v1.6c.4-.6 1.1-1.6 2.8-1.6 2 0 3.6 1.4 3.6 4.3V19zM5.5 6.4c-1 0-1.7.7-1.7 1.6s.7 1.6 1.7 1.6 1.7-.7 1.7-1.6c-.1-.9-.7-1.6-1.7-1.6zm-1.5 12.6h3.1V7.8H4v11.2z" />
                            </svg>
                          </button>
                        </div>

                        {/* Don't have an account? Sign Up */}
                        <div className="text-center pt-1.5">
                          <p className="text-[11px] text-[#7E789B]">
                            {t('dontHaveAccount')}{" "}
                            <button
                              onClick={() => setCurrentScreen('register')}
                              className="font-bold text-[#7864E6] hover:underline"
                            >
                              {t('signUpLink')}
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* =========================================
                      SCREEN 2: CREATE ACCOUNT (DÉDIÉ)
                      Même design, couleurs et principes
                      ========================================= */}
                  {currentScreen === 'register' && (
                    <div className="flex-1 overflow-y-auto bg-[#F8F6F2] px-5 pb-6 pt-1 flex flex-col scrollbar-none">
                      {/* Top Action Bar with Back Button & Language Selector */}
                      <div className="flex items-center justify-between py-1">
                        <button
                          onClick={() => setCurrentScreen('login')}
                          className="w-8 h-8 rounded-full flex items-center justify-center text-[#372A5B] hover:bg-black/5 transition-colors"
                          title="Back to login"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        
                        {/* Language Selector */}
                        <div className="flex items-center gap-1 bg-[#F4F1FD] p-0.5 rounded-full border border-[#DDD5F8] shadow-xs shrink-0">
                          <button
                            onClick={() => handleSetLanguage('en')}
                            className={`flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold transition-all ${
                              language === 'en'
                                ? 'bg-gradient-to-b from-[#A896F5] via-[#9783E8] to-[#866FE0] text-white shadow-[0_2px_6px_rgba(151,131,232,0.4)]'
                                : 'text-slate-600 hover:text-[#7864E6]'
                            }`}
                            title="English"
                          >
                            <span>🇬🇧</span>
                            <span>EN</span>
                          </button>
                          <button
                            onClick={() => handleSetLanguage('fr')}
                            className={`flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold transition-all ${
                              language === 'fr'
                                ? 'bg-gradient-to-b from-[#A896F5] via-[#9783E8] to-[#866FE0] text-white shadow-[0_2px_6px_rgba(151,131,232,0.4)]'
                                : 'text-slate-600 hover:text-[#7864E6]'
                            }`}
                            title="Français"
                          >
                            <span>🇫🇷</span>
                            <span>FR</span>
                          </button>
                        </div>
                      </div>

                      {/* 3D Circular Avatar with Plus Badge (Exact capture match) */}
                      <div className="flex justify-center -mt-0.5">
                        <div className="relative w-20 h-20 rounded-full shadow-md overflow-hidden border-2 border-white/80 bg-white">
                          <img
                            src="/img_register_avatar.png"
                            alt="Profile Avatar"
                            className="w-full h-full object-cover select-none"
                          />
                        </div>
                      </div>

                      {/* Title & Subtitle matching Login typography */}
                      <div className="text-center mt-2.5">
                        <h2 className="text-xl sm:text-2xl font-black text-[#1E1B2E] tracking-tight">
                          {t('createAccount')}
                        </h2>
                        <p className="text-[11px] text-[#7E789B] font-medium mt-0.5">
                          {t('joinUsSubtitle')}
                        </p>
                      </div>

                      {/* Registration Form Fields with exact labels and rounded inputs */}
                      <div className="space-y-2 mt-3.5">
                        {/* 1. Full Name */}
                        <div>
                          <label className="block text-[11px] font-bold text-[#372A5B] mb-1 ml-0.5">
                            {t('fullNameLabel')}
                          </label>
                          <div className="bg-white border border-[#E6E0D6] rounded-2xl px-3.5 py-2.5 flex items-center shadow-sm focus-within:border-[#7864E6] focus-within:ring-2 focus-within:ring-[#7864E6]/20 transition-all">
                            <input
                              type="text"
                              placeholder={t('fullNamePlaceholder')}
                              value={regFullName}
                              onChange={(e) => setRegFullName(e.target.value)}
                              className="bg-transparent text-xs text-[#372A5B] placeholder:text-[#968EA8] w-full outline-none font-medium"
                            />
                          </div>
                        </div>

                        {/* 2. Email */}
                        <div>
                          <label className="block text-[11px] font-bold text-[#372A5B] mb-1 ml-0.5">
                            {t('emailLabel')}
                          </label>
                          <div className="bg-white border border-[#E6E0D6] rounded-2xl px-3.5 py-2.5 flex items-center shadow-sm focus-within:border-[#7864E6] focus-within:ring-2 focus-within:ring-[#7864E6]/20 transition-all">
                            <input
                              type="email"
                              placeholder={t('emailPlaceholder')}
                              value={regEmail}
                              onChange={(e) => setRegEmail(e.target.value)}
                              className="bg-transparent text-xs text-[#372A5B] placeholder:text-[#968EA8] w-full outline-none font-medium"
                            />
                          </div>
                        </div>

                        {/* 3. Password with Eye Toggle */}
                        <div>
                          <label className="block text-[11px] font-bold text-[#372A5B] mb-1 ml-0.5">
                            {t('passwordLabel')}
                          </label>
                          <div className="bg-white border border-[#E6E0D6] rounded-2xl px-3.5 py-2.5 flex items-center shadow-sm focus-within:border-[#7864E6] focus-within:ring-2 focus-within:ring-[#7864E6]/20 transition-all">
                            <input
                              type={showRegPassword ? "text" : "password"}
                              placeholder={t('createPasswordPlaceholder')}
                              value={regPassword}
                              onChange={(e) => setRegPassword(e.target.value)}
                              className="bg-transparent text-xs text-[#372A5B] placeholder:text-[#968EA8] w-full outline-none font-medium"
                            />
                            <button
                              type="button"
                              onClick={() => setShowRegPassword(!showRegPassword)}
                              className="p-0.5 text-[#8E85A8] hover:text-[#6655CC] transition-colors ml-1.5"
                              title="Toggle password visibility"
                            >
                              {showRegPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>

                        {/* 4. Confirm Password with Eye Toggle */}
                        <div>
                          <label className="block text-[11px] font-bold text-[#372A5B] mb-1 ml-0.5">
                            {t('confirmPasswordLabel')}
                          </label>
                          <div className="bg-white border border-[#E6E0D6] rounded-2xl px-3.5 py-2.5 flex items-center shadow-sm focus-within:border-[#7864E6] focus-within:ring-2 focus-within:ring-[#7864E6]/20 transition-all">
                            <input
                              type={showRegConfirmPassword ? "text" : "password"}
                              placeholder={t('confirmPasswordPlaceholder')}
                              value={regConfirmPassword}
                              onChange={(e) => setRegConfirmPassword(e.target.value)}
                              className="bg-transparent text-xs text-[#372A5B] placeholder:text-[#968EA8] w-full outline-none font-medium"
                            />
                            <button
                              type="button"
                              onClick={() => setShowRegConfirmPassword(!showRegConfirmPassword)}
                              className="p-0.5 text-[#8E85A8] hover:text-[#6655CC] transition-colors ml-1.5"
                              title="Toggle confirmation visibility"
                            >
                              {showRegConfirmPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>

                        {/* Submit Button: Create Account (Gradient Clay Violet identique au bouton Login) */}
                        <button
                          onClick={() => handleRegisterSubmit()}
                          className="w-full h-11 bg-gradient-to-b from-[#A896F5] via-[#9783E8] to-[#866FE0] hover:from-[#B1A0F8] hover:to-[#7E65DE] text-white font-extrabold text-sm rounded-full shadow-[0_6px_16px_rgba(151,131,232,0.42),inset_0_2px_3px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(70,40,140,0.2)] active:translate-y-0.5 active:shadow-[0_2px_8px_rgba(151,131,232,0.4)] transition-all flex items-center justify-center tracking-wide !mt-3"
                          style={{ textShadow: "0 1px 2px rgba(60,40,120,0.3)" }}
                        >
                          {t('createAccountBtn')}
                        </button>
                      </div>

                      {/* Divider: Or */}
                      <div className="flex items-center gap-2 pt-2.5">
                        <div className="flex-1 h-[1px] bg-[#E5DFD7]" />
                        <span className="text-[10px] text-[#8E85A8] font-bold">{t('orDivider')}</span>
                        <div className="flex-1 h-[1px] bg-[#E5DFD7]" />
                      </div>

                      {/* Social Round Buttons: Google, Apple, LinkedIn */}
                      <div className="flex items-center justify-center gap-3.5 pt-2">
                        {/* Google */}
                        <button
                          onClick={() => handleRegisterSubmit("Google")}
                          className="w-10 h-10 rounded-full bg-white border border-[#EBE6DE] shadow-md hover:bg-slate-50 flex items-center justify-center active:scale-95 transition-all"
                          title="Google"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88,-3.05c-1.08,.72 -2.45,1.16 -4.05,1.16 -3.12,0 -5.77,-2.1 -6.72,-4.93H1.25v3.15C3.26,21.36 7.34,24 12,24z"/>
                            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72 -.38,-1.49 -.38,-2.27s.14,-1.55 .38,-2.27V6.58H1.25C.45,8.18 0,9.98 0,12s.45,3.82 1.25,5.42l4.03,-3.15z"/>
                            <path fill="#EA4335" d="M12 4.75c1.77,0 3.35,.61 4.6,1.8l3.42,-3.42C17.95,1.19 15.24,0 12,0 7.34,0 3.26,2.64 1.25,6.58l4.03,3.15c.95,-2.83 3.6,-4.98 6.72,-4.98z"/>
                          </svg>
                        </button>

                        {/* Apple */}
                        <button
                          onClick={() => handleRegisterSubmit("Apple")}
                          className="w-10 h-10 rounded-full bg-white border border-[#EBE6DE] shadow-md hover:bg-slate-50 flex items-center justify-center active:scale-95 transition-all"
                          title="Apple"
                        >
                          <svg className="w-4 h-4 fill-black" viewBox="0 0 170 170">
                            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35 0.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.33-6.61-9.98-11.65-20.72-15.11-32.22-3.47-11.5-5.2-22.14-5.2-31.92 0-14.75 3.82-26.78 11.45-36.1 7.63-9.31 17.1-14.07 28.43-14.28 4.8 0 10.05 1.25 15.76 3.75 5.71 2.5 9.53 3.86 11.45 4.09 1.57-0.23 5.56-1.64 11.96-4.22 6.4-2.58 11.83-3.72 16.29-3.41 12.06 0.65 21.75 4.97 29.07 12.96-10.57 6.42-15.75 15.22-15.54 26.4 0.22 8.79 3.58 16.14 10.08 22.06 6.5 5.91 14.18 9.38 23.03 10.42-2.18 6.53-4.9 12.83-8.16 18.91zM119.22 31.84c0-7.39 2.65-14.45 7.95-21.18 5.3-6.73 11.75-10.66 19.34-11.8 0.11 0.98 0.17 1.85 0.17 2.62 0 7.39-2.82 14.39-8.46 21-5.64 6.61-12.35 10.42-20.14 11.44-0.1-0.77-0.16-1.46-0.16-2.08z"/>
                          </svg>
                        </button>

                        {/* LinkedIn */}
                        <button
                          onClick={() => handleRegisterSubmit("LinkedIn")}
                          className="w-10 h-10 rounded-full bg-white border border-[#EBE6DE] shadow-md hover:bg-slate-50 flex items-center justify-center active:scale-95 transition-all"
                          title="LinkedIn"
                        >
                          <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
                            <rect width="24" height="24" rx="5" fill="#0A66C2" />
                            <path fill="#FFFFFF" d="M19 19h-3.1v-5.2c0-1.3-.5-2.2-1.7-2.2-1 0-1.5.7-1.8 1.4-.1.3-.1.6-.1.9V19h-3.1s.04-10.2 0-11.2h3.1v1.6c.4-.6 1.1-1.6 2.8-1.6 2 0 3.6 1.4 3.6 4.3V19zM5.5 6.4c-1 0-1.7.7-1.7 1.6s.7 1.6 1.7 1.6 1.7-.7 1.7-1.6c-.1-.9-.7-1.6-1.7-1.6zm-1.5 12.6h3.1V7.8H4v11.2z" />
                          </svg>
                        </button>
                      </div>

                      {/* Back to Login Link: "Already have an account? Sign In" */}
                      <div className="text-center pt-3 pb-1">
                        <p className="text-[11px] text-[#7E789B]">
                          {t('alreadyHaveAccount')}{" "}
                          <button
                            onClick={() => setCurrentScreen('login')}
                            className="font-bold text-[#7864E6] hover:underline"
                          >
                            {t('signInLink')}
                          </button>
                        </p>
                      </div>
                    </div>
                  )}

                  {/* =========================================
                      SCREEN 3: CATALOGUE
                      ========================================= */}
                  {currentScreen === 'catalog' && (
                    <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                      {/* 1. Scrollable Catalog Content (Takes available height, never covered by bottom nav) */}
                      <div className="flex-1 overflow-y-auto px-4 pb-8 pt-1 scrollbar-none">
                        {/* Top Greeting & Synchronized Avatar */}
                        <div className="flex items-center justify-between mt-1">
                          <div>
                            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
                              {t('hello')}, {regFullName.split(' ')[0] || "Amen"} 👋
                            </h1>
                            <p className="text-xs text-slate-500">
                              {catalogBottomNav === 'courses'
                                ? t('continueActive')
                                : catalogBottomNav === 'explore'
                                ? t('discoverTracks')
                                : t('readyToLearn')}
                            </p>
                          </div>
                          {/* Dynamic Persistent 3D Avatar (Synchronized with Profile & LocalStorage) */}
                          <button
                            onClick={() => {
                              setCatalogBottomNav('profile');
                              setCurrentScreen('profile');
                            }}
                            className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md hover:ring-2 hover:ring-[#7864E6] transition-all bg-[#EDE8E3] relative group shrink-0"
                            title={t('tabProfile')}
                          >
                            <img
                              src={selectedAvatar}
                              alt="Profile Avatar"
                              className="w-full h-full object-cover"
                            />
                          </button>
                        </div>

                        {/* Search & Filter */}
                        <div className="mt-3 flex items-center gap-2">
                          <div className="flex-1 bg-[#F1F5F9] rounded-2xl flex items-center px-3 py-2.5 border border-slate-200/70 focus-within:border-[#9783E8] focus-within:ring-2 focus-within:ring-[#9783E8]/20 transition-all">
                            <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                            <input
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              placeholder={t('searchPlaceholder')}
                              className="bg-transparent text-xs text-slate-900 outline-none w-full placeholder:text-slate-400 font-medium"
                            />
                            {searchQuery && (
                              <button
                                onClick={() => setSearchQuery("")}
                                className="text-slate-400 hover:text-[#7864E6] p-0.5"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                          <button
                            onClick={() => {
                              setSelectedCategory("all");
                              setSearchQuery("");
                              setCatalogBottomNav("catalog");
                            }}
                            className="w-10 h-10 rounded-2xl bg-[#F4F1FD] border border-[#DDD5F8] text-[#7864E6] flex items-center justify-center shrink-0 hover:bg-[#EAE4FB] hover:border-[#9783E8] transition-all shadow-sm active:scale-95"
                            title={t('resetFilters')}
                          >
                            <SlidersHorizontal className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Categories - Active pill styled identically to Login/Register button */}
                        <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1 scrollbar-none -mx-1 px-1">
                          {COURSE_CATEGORIES.map((cat) => {
                            const isSelected = selectedCategory === cat.id;
                            const catName = language === 'fr' ? cat.nameFr : cat.nameEn;
                            return (
                              <button
                                key={cat.id}
                                onClick={() => {
                                  setSelectedCategory(cat.id);
                                  setCatalogBottomNav('catalog');
                                }}
                                className={`px-3.5 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all duration-200 ${
                                  isSelected
                                    ? 'bg-gradient-to-b from-[#A896F5] via-[#9783E8] to-[#866FE0] text-white font-extrabold shadow-[0_4px_14px_rgba(151,131,232,0.42),inset_0_1.5px_2px_rgba(255,255,255,0.45),inset_0_-1px_2px_rgba(70,40,140,0.2)] border-t border-white/40 scale-[1.02]'
                                    : 'bg-white text-slate-600 font-semibold border border-slate-200/90 hover:border-[#9783E8]/50 hover:text-[#7864E6] hover:bg-[#F9F7FE]'
                                }`}
                                style={isSelected ? { textShadow: "0 1px 2px rgba(60,40,120,0.3)" } : undefined}
                              >
                                {catName}
                              </button>
                            );
                          })}
                        </div>

                        {/* Main Content based on Bottom Navigation */}
                        {catalogBottomNav === 'courses' ? (
                          /* My Courses Active View */
                          <div className="mt-4 space-y-3">
                            <div className="flex items-center justify-between">
                              <h2 className="text-sm font-bold text-slate-900">
                                {t('enrolledCoursesTitle')}
                              </h2>
                              <button
                                onClick={() => setCatalogBottomNav('catalog')}
                                className="text-xs font-bold text-[#7864E6] hover:underline"
                              >
                                {t('browseAll')}
                              </button>
                            </div>

                            {COURSES_DATA.slice(0, 3).map((course, idx) => {
                              const progress = idx === 0 ? 75 : idx === 1 ? 45 : 20;
                              const cTitle = language === 'fr' ? course.titleFr : course.titleEn;
                              return (
                                <div
                                  key={course.id}
                                  onClick={() => setSelectedCourse(course)}
                                  className="group bg-white rounded-2xl p-3 border border-slate-200/90 shadow-sm hover:border-[#9783E8] hover:shadow-[0_8px_24px_rgba(151,131,232,0.18)] hover:-translate-y-0.5 transition-all cursor-pointer flex gap-3"
                                >
                                  <img
                                    src={course.image}
                                    alt={cTitle}
                                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                                  />
                                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                                    <div>
                                      <h3 className="text-xs font-bold text-slate-900 group-hover:text-[#6655CC] truncate transition-colors">
                                        {cTitle}
                                      </h3>
                                      <p className="text-[10px] text-slate-500 mt-0.5">
                                        {course.instructor} &bull; {course.hours} {t('hoursUnit')}
                                      </p>
                                    </div>
                                    <div>
                                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-600 mb-1">
                                        <span>{t('progressLabel')}</span>
                                        <span className="text-[#7864E6]">{progress}%</span>
                                      </div>
                                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                          className="h-full bg-gradient-to-r from-[#A896F5] via-[#9783E8] to-[#866FE0] rounded-full"
                                          style={{ width: `${progress}%` }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : catalogBottomNav === 'explore' ? (
                          /* Explore Tracks View */
                          <div className="mt-4 space-y-3">
                            <div className="flex items-center justify-between">
                              <h2 className="text-sm font-bold text-slate-900">
                                {t('exploreTracksTitle')}
                              </h2>
                              <button
                                onClick={() => setCatalogBottomNav('catalog')}
                                className="text-xs font-bold text-[#7864E6] hover:underline"
                              >
                                {t('browseAll')}
                              </button>
                            </div>

                            {[
                              { titleEn: "Artificial Intelligence & ML", titleFr: "Intelligence Artificielle & ML", catId: "ai", coursesEn: "4 Courses", coursesFr: "4 Cours", icon: "🤖", color: "from-[#866FE0] to-[#5B43D6]" },
                              { titleEn: "Full-Stack Web Development", titleFr: "Développement Web Full-Stack", catId: "development", coursesEn: "6 Courses", coursesFr: "6 Cours", icon: "💻", color: "from-[#A896F5] to-[#7864E6]" },
                              { titleEn: "Cyber Security & Defense", titleFr: "Cybersécurité & Défense", catId: "security", coursesEn: "3 Courses", coursesFr: "3 Cours", icon: "🛡️", color: "from-[#7864E6] to-[#6042E8]" },
                              { titleEn: "UI/UX & Mobile Design", titleFr: "Design UI/UX & Mobile", catId: "design", coursesEn: "3 Courses", coursesFr: "3 Cours", icon: "🎨", color: "from-[#B1A0F8] to-[#866FE0]" }
                            ].map((track, i) => (
                              <div
                                key={i}
                                onClick={() => {
                                  setSelectedCategory(track.catId);
                                  setCatalogBottomNav('catalog');
                                }}
                                className="group p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#9783E8] hover:shadow-[0_8px_24px_rgba(151,131,232,0.18)] hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-between"
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${track.color} text-white flex items-center justify-center text-lg shadow-sm`}>
                                    {track.icon}
                                  </div>
                                  <div>
                                    <h3 className="text-xs font-bold text-slate-900 group-hover:text-[#6655CC] transition-colors">
                                      {language === 'fr' ? track.titleFr : track.titleEn}
                                    </h3>
                                    <span className="text-[10px] text-slate-500">
                                      {language === 'fr' ? track.coursesFr : track.coursesEn} &bull; {t('certProgram')}
                                    </span>
                                  </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#7864E6] group-hover:translate-x-0.5 transition-all" />
                              </div>
                            ))}
                          </div>
                        ) : (
                          /* Standard Catalog View with all courses */
                          <>
                            {/* Section Title & Language Switcher strictly on a single clean line */}
                            <div className="mt-4 flex items-center justify-between gap-2">
                              <h2 className="text-sm font-bold text-slate-900 whitespace-nowrap">
                                {t('catalogHeading')} ({filteredCourses.length})
                              </h2>

                              {/* Flag Selector (Britain 🇬🇧 EN & France 🇫🇷 FR) replacing Sign Out */}
                              <div className="flex items-center gap-1 bg-[#F4F1FD] p-0.5 rounded-full border border-[#DDD5F8] shadow-xs shrink-0">
                                <button
                                  onClick={() => handleSetLanguage('en')}
                                  className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold transition-all ${
                                    language === 'en'
                                      ? 'bg-gradient-to-b from-[#A896F5] via-[#9783E8] to-[#866FE0] text-white shadow-[0_2px_8px_rgba(151,131,232,0.4)] scale-[1.02]'
                                      : 'text-slate-600 hover:text-[#7864E6]'
                                  }`}
                                  title="English (Britain)"
                                >
                                  <span className="text-xs">🇬🇧</span>
                                  <span>EN</span>
                                </button>
                                <button
                                  onClick={() => handleSetLanguage('fr')}
                                  className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold transition-all ${
                                    language === 'fr'
                                      ? 'bg-gradient-to-b from-[#A896F5] via-[#9783E8] to-[#866FE0] text-white shadow-[0_2px_8px_rgba(151,131,232,0.4)] scale-[1.02]'
                                      : 'text-slate-600 hover:text-[#7864E6]'
                                  }`}
                                  title="Français (France)"
                                >
                                  <span className="text-xs">🇫🇷</span>
                                  <span>FR</span>
                                </button>
                              </div>
                            </div>

                            {/* Course Grid with Purple Hover Accents */}
                            <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                              {filteredCourses.map((c) => {
                                const cTitle = language === 'fr' ? c.titleFr : c.titleEn;
                                const cLevel = language === 'fr' ? c.levelFr : c.levelEn;
                                return (
                                  <div
                                    key={c.id}
                                    onClick={() => setSelectedCourse(c)}
                                    className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden cursor-pointer hover:border-[#9783E8] hover:shadow-[0_8px_24px_rgba(151,131,232,0.22)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 flex flex-col"
                                  >
                                    <div className="relative h-24 overflow-hidden">
                                      <img
                                        src={c.image}
                                        alt={cTitle}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                      />
                                      <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-lg bg-white/95 text-[#7864E6] border border-purple-100 shadow-sm">
                                        {cLevel}
                                      </span>
                                    </div>
                                    <div className="p-2.5 flex flex-col flex-1">
                                      <div className="flex items-center gap-1 text-[10px] font-bold text-slate-800">
                                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                                        <span>{c.rating}</span>
                                      </div>
                                      <h3 className="text-xs font-bold text-slate-900 mt-1 line-clamp-2 leading-snug group-hover:text-[#6655CC] transition-colors">
                                        {cTitle}
                                      </h3>
                                      <p className="text-[10px] text-slate-500 mt-0.5">
                                        {t('byInstructor')} {c.instructor}
                                      </p>
                                      <div className="mt-2 pt-1 border-t border-slate-100 flex items-center justify-between">
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 group-hover:bg-[#F4F1FD] group-hover:text-[#7864E6] text-[10px] font-medium text-slate-700 transition-colors">
                                          <Clock className="w-2.5 h-2.5 text-slate-500 group-hover:text-[#7864E6] transition-colors" />
                                          {c.hours} {t('hoursUnit')}
                                        </span>
                                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#7864E6] group-hover:translate-x-0.5 transition-all" />
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        )}
                      </div>

                      {/* 2. Fixed Bottom Navigation Bar - Pinned at bottom of screen, NEVER covers the courses */}
                      <div className="shrink-0 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2 flex flex-col z-20 shadow-[0_-4px_16px_rgba(0,0,0,0.03)]">
                        <div className="flex items-center justify-around w-full">
                          {/* Catalog */}
                          <button
                            onClick={() => {
                              setCatalogBottomNav('catalog');
                              setSelectedCategory('all');
                            }}
                            className={`flex flex-col items-center gap-0.5 transition-colors relative py-0.5 px-2.5 ${
                              catalogBottomNav === 'catalog'
                                ? 'text-[#7864E6]'
                                : 'text-slate-400 hover:text-[#7864E6]'
                            }`}
                          >
                            <GraduationCap className="w-4 h-4 stroke-[2.2]" />
                            <span className={`text-[9px] whitespace-nowrap ${catalogBottomNav === 'catalog' ? 'font-bold' : 'font-medium'}`}>
                              {t('tabCatalog')}
                            </span>
                            {catalogBottomNav === 'catalog' && (
                              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#A896F5] to-[#866FE0] shadow-[0_2px_4px_rgba(151,131,232,0.4)]" />
                            )}
                          </button>

                          {/* My Courses */}
                          <button
                            onClick={() => setCatalogBottomNav('courses')}
                            className={`flex flex-col items-center gap-0.5 transition-colors relative py-0.5 px-2.5 ${
                              catalogBottomNav === 'courses'
                                ? 'text-[#7864E6]'
                                : 'text-slate-400 hover:text-[#7864E6]'
                            }`}
                          >
                            <BookOpen className="w-4 h-4 stroke-[2.2]" />
                            <span className={`text-[9px] whitespace-nowrap ${catalogBottomNav === 'courses' ? 'font-bold' : 'font-medium'}`}>
                              {t('tabMyCourses')}
                            </span>
                            {catalogBottomNav === 'courses' && (
                              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#A896F5] to-[#866FE0] shadow-[0_2px_4px_rgba(151,131,232,0.4)]" />
                            )}
                          </button>

                          {/* Explore */}
                          <button
                            onClick={() => setCatalogBottomNav('explore')}
                            className={`flex flex-col items-center gap-0.5 transition-colors relative py-0.5 px-2.5 ${
                              catalogBottomNav === 'explore'
                                ? 'text-[#7864E6]'
                                : 'text-slate-400 hover:text-[#7864E6]'
                            }`}
                          >
                            <Sparkles className="w-4 h-4 stroke-[2.2]" />
                            <span className={`text-[9px] whitespace-nowrap ${catalogBottomNav === 'explore' ? 'font-bold' : 'font-medium'}`}>
                              {t('tabExplore')}
                            </span>
                            {catalogBottomNav === 'explore' && (
                              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#A896F5] to-[#866FE0] shadow-[0_2px_4px_rgba(151,131,232,0.4)]" />
                            )}
                          </button>

                          {/* Profile */}
                          <button
                            onClick={() => {
                              setCatalogBottomNav('profile');
                              setCurrentScreen('profile');
                            }}
                            className={`flex flex-col items-center gap-0.5 transition-colors relative py-0.5 px-2.5 ${
                              catalogBottomNav === 'profile'
                                ? 'text-[#7864E6]'
                                : 'text-slate-400 hover:text-[#7864E6]'
                            }`}
                          >
                            <div className={`w-4 h-4 rounded-full overflow-hidden border transition-all ${
                              catalogBottomNav === 'profile'
                                ? 'border-[#7864E6] ring-2 ring-[#7864E6]/30'
                                : 'border-slate-300'
                            }`}>
                              <img src={selectedAvatar} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <span className={`text-[9px] whitespace-nowrap ${catalogBottomNav === 'profile' ? 'font-bold' : 'font-medium'}`}>
                              {t('tabProfile')}
                            </span>
                            {catalogBottomNav === 'profile' && (
                              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#A896F5] to-[#866FE0] shadow-[0_2px_4px_rgba(151,131,232,0.4)]" />
                            )}
                          </button>
                        </div>

                        {/* Mobile Home Indicator pill */}
                        <div className="w-24 h-1 bg-slate-300/80 rounded-full mx-auto mt-2 mb-0.5" />
                      </div>

                      {/* 3. Course Detail Bottom Sheet Modal - Fixed over phone screen (never jumps or collapses scroll) */}
                      <AnimatePresence>
                        {selectedCourse && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-50 bg-slate-950/65 backdrop-blur-[2px] flex flex-col justify-end"
                            onClick={() => setSelectedCourse(null)}
                          >
                            <motion.div
                              initial={{ y: "100%" }}
                              animate={{ y: 0 }}
                              exit={{ y: "100%" }}
                              transition={{ type: "spring", damping: 28, stiffness: 320 }}
                              className="bg-white rounded-t-[30px] p-4 shadow-2xl border-t border-white/80 flex flex-col max-h-[88%] text-slate-900"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {/* Drag handle */}
                              <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-2.5" />

                              <div className="relative h-32 rounded-2xl overflow-hidden mb-3 shadow-sm">
                                <img
                                  src={selectedCourse.image}
                                  alt={language === 'fr' ? selectedCourse.titleFr : selectedCourse.titleEn}
                                  className="w-full h-full object-cover"
                                />
                                <button
                                  onClick={() => setSelectedCourse(null)}
                                  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors shadow"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                                <span className="absolute bottom-2.5 left-2.5 text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-white/95 text-[#7864E6] shadow">
                                  {language === 'fr' ? selectedCourse.levelFr : selectedCourse.levelEn} &bull; {selectedCourse.hours} {t('hoursUnit')}
                                </span>
                              </div>

                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 text-xs font-bold text-slate-800">
                                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                  <span>{selectedCourse.rating} ({selectedCourse.reviewsCount} {t('reviews')})</span>
                                </div>
                                <span className="text-slate-300">&bull;</span>
                                <span className="text-xs text-[#7864E6] font-semibold">
                                  {language === 'fr' ? selectedCourse.categoryNameFr : selectedCourse.categoryNameEn}
                                </span>
                              </div>

                              <h3 className="text-base font-extrabold text-slate-900 mt-1">
                                {language === 'fr' ? selectedCourse.titleFr : selectedCourse.titleEn}
                              </h3>
                              <p className="text-xs text-slate-500 mt-0.5">
                                {t('byInstructor')} <span className="font-semibold text-slate-800">{selectedCourse.instructor}</span>
                              </p>

                              <p className="text-xs text-slate-600 mt-2 leading-relaxed bg-[#F8F6F2] p-2.5 rounded-xl border border-slate-200/60">
                                {language === 'fr' ? selectedCourse.descriptionFr : selectedCourse.descriptionEn}
                              </p>

                              {/* Button with exact Login/Register 3D clay gradient */}
                              <div className="mt-3.5 flex items-center gap-2">
                                <button
                                  onClick={() => setSelectedCourse(null)}
                                  className="flex-1 h-11 bg-gradient-to-b from-[#A896F5] via-[#9783E8] to-[#866FE0] hover:from-[#B1A0F8] hover:to-[#7E65DE] text-white font-extrabold text-xs rounded-full shadow-[0_6px_16px_rgba(151,131,232,0.42),inset_0_2px_3px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(70,40,140,0.2)] active:translate-y-0.5 transition-all flex items-center justify-center tracking-wide"
                                  style={{ textShadow: "0 1px 2px rgba(60,40,120,0.3)" }}
                                >
                                  {t('startLearning')}
                                </button>
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* =========================================
                      SCREEN 4: PROFILE
                      ========================================= */}
                  {currentScreen === 'profile' && (
                    <div className="flex-1 overflow-y-auto px-5 pb-8 pt-1 flex flex-col scrollbar-none relative">
                      {/* Top Bar matching Android fragment_profile.xml with Language Selector */}
                      <div className="relative flex items-center justify-between py-2 mb-2">
                        <button
                          onClick={() => {
                            setCurrentScreen('catalog');
                            setCatalogBottomNav('catalog');
                          }}
                          className="w-8 h-8 rounded-full flex items-center justify-center text-[#372A5B] hover:bg-slate-200/60 active:scale-95 transition-all"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <h2 className="text-base font-extrabold text-[#1E1B2E] tracking-tight">
                          {t('editProfile')}
                        </h2>
                        
                        {/* Language Selector */}
                        <div className="flex items-center gap-1 bg-[#F4F1FD] p-0.5 rounded-full border border-[#DDD5F8] shadow-xs shrink-0">
                          <button
                            onClick={() => handleSetLanguage('en')}
                            className={`flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold transition-all ${
                              language === 'en'
                                ? 'bg-gradient-to-b from-[#A896F5] via-[#9783E8] to-[#866FE0] text-white shadow-[0_2px_6px_rgba(151,131,232,0.4)]'
                                : 'text-slate-600 hover:text-[#7864E6]'
                            }`}
                            title="English"
                          >
                            <span>🇬🇧</span>
                            <span>EN</span>
                          </button>
                          <button
                            onClick={() => handleSetLanguage('fr')}
                            className={`flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold transition-all ${
                              language === 'fr'
                                ? 'bg-gradient-to-b from-[#A896F5] via-[#9783E8] to-[#866FE0] text-white shadow-[0_2px_6px_rgba(151,131,232,0.4)]'
                                : 'text-slate-600 hover:text-[#7864E6]'
                            }`}
                            title="Français"
                          >
                            <span>🇫🇷</span>
                            <span>FR</span>
                          </button>
                        </div>
                      </div>

                      {/* 3D Circular Avatar with Hover Overlay & Camera Button */}
                      <div className="flex flex-col items-center mt-1 mb-4">
                        <div
                          className="relative group cursor-pointer"
                          onClick={() => setIsAvatarPickerOpen(true)}
                          title="Click to customize 3D avatar"
                        >
                          {/* Avatar Circle with clay border & 3D shadow */}
                          <div className="w-24 h-24 rounded-full overflow-hidden border-[3.5px] border-white shadow-xl bg-gradient-to-b from-[#EDE8E3] to-[#DED6CC] relative flex items-center justify-center transition-transform group-hover:scale-105">
                            <img
                              src={selectedAvatar}
                              alt={profileName}
                              className="w-full h-full object-cover"
                            />

                            {/* Hover Overlay: "Change" appears when hovering */}
                            <div className="absolute inset-0 bg-slate-950/55 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-1 select-none">
                              <Camera className="w-5 h-5 text-white drop-shadow" />
                              <span className="text-[10px] font-bold tracking-wide">{t('changeOverlay')}</span>
                            </div>
                          </div>

                          {/* Camera Badge button in bottom right corner */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsAvatarPickerOpen(true);
                            }}
                            className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#6655CC] hover:bg-[#5744BC] text-white flex items-center justify-center shadow-lg border-2 border-white transition-transform active:scale-90"
                            title="Choose from 3D clay avatars"
                          >
                            <Camera className="w-4 h-4 text-white" />
                          </button>
                        </div>

                        {/* Interactive hint */}
                        <button
                          onClick={() => setIsAvatarPickerOpen(true)}
                          className="text-[11px] font-bold text-[#7E789B] hover:text-[#6655CC] mt-2 flex items-center gap-1 transition-colors"
                        >
                          <Sparkles className="w-3 h-3 text-[#F59E0B]" />
                          <span>{t('changeAvatar')}</span>
                        </button>
                      </div>

                      {/* The 4 Requested Fields (Date of birth & Country REMOVED) */}
                      <div className="space-y-3 flex-1">
                        {/* Field 1: Full Name */}
                        <div>
                          <label className="block text-xs font-bold text-[#372A5B] mb-1.5 ml-1">
                            {t('fullNameLabel')}
                          </label>
                          <div className="bg-[#EDE8E3] border border-[#DDD5CB] rounded-xl px-3.5 py-2.5 flex items-center shadow-inner focus-within:border-[#6655CC] focus-within:ring-2 focus-within:ring-[#6655CC]/20 transition-all">
                            <input
                              type="text"
                              value={profileName}
                              onChange={(e) => setProfileName(e.target.value)}
                              placeholder={t('fullNamePlaceholder')}
                              className="bg-transparent text-sm text-[#372A5B] font-medium w-full outline-none placeholder-[#968EA8]"
                            />
                          </div>
                        </div>

                        {/* Field 2: Email */}
                        <div>
                          <label className="block text-xs font-bold text-[#372A5B] mb-1.5 ml-1">
                            {t('emailLabel')}
                          </label>
                          <div className="bg-[#EDE8E3] border border-[#DDD5CB] rounded-xl px-3.5 py-2.5 flex items-center shadow-inner focus-within:border-[#6655CC] focus-within:ring-2 focus-within:ring-[#6655CC]/20 transition-all">
                            <input
                              type="email"
                              value={profileEmail}
                              onChange={(e) => setProfileEmail(e.target.value)}
                              placeholder={t('emailPlaceholder')}
                              className="bg-transparent text-sm text-[#372A5B] font-medium w-full outline-none placeholder-[#968EA8]"
                            />
                          </div>
                        </div>

                        {/* Field 3: Current Password */}
                        <div>
                          <label className="block text-xs font-bold text-[#372A5B] mb-1.5 ml-1">
                            {t('currentPasswordLabel')}
                          </label>
                          <div className="bg-[#EDE8E3] border border-[#DDD5CB] rounded-xl px-3.5 py-2 flex items-center shadow-inner focus-within:border-[#6655CC] focus-within:ring-2 focus-within:ring-[#6655CC]/20 transition-all">
                            <input
                              type={showOldPassword ? "text" : "password"}
                              value={profileOldPassword}
                              onChange={(e) => setProfileOldPassword(e.target.value)}
                              placeholder="••••••••••"
                              className="bg-transparent text-sm text-[#372A5B] font-medium w-full outline-none placeholder-[#968EA8]"
                            />
                            <button
                              type="button"
                              onClick={() => setShowOldPassword(!showOldPassword)}
                              className="p-1 text-[#7E789B] hover:text-[#372A5B] transition-colors"
                              title={showOldPassword ? "Hide" : "Show"}
                            >
                              {showOldPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        {/* Field 4: New Password */}
                        <div>
                          <label className="block text-xs font-bold text-[#372A5B] mb-1.5 ml-1">
                            {t('newPasswordLabel')}
                          </label>
                          <div className="bg-[#EDE8E3] border border-[#DDD5CB] rounded-xl px-3.5 py-2 flex items-center shadow-inner focus-within:border-[#6655CC] focus-within:ring-2 focus-within:ring-[#6655CC]/20 transition-all">
                            <input
                              type={showNewPassword ? "text" : "password"}
                              value={profileNewPassword}
                              onChange={(e) => setProfileNewPassword(e.target.value)}
                              placeholder={t('enterNewPassword')}
                              className="bg-transparent text-sm text-[#372A5B] font-medium w-full outline-none placeholder-[#968EA8]"
                            />
                            <button
                              type="button"
                              onClick={() => setShowNewPassword(!showNewPassword)}
                              className="p-1 text-[#7E789B] hover:text-[#372A5B] transition-colors"
                              title={showNewPassword ? "Hide" : "Show"}
                            >
                              {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Save Button with Purple Clay Gradient */}
                      <div className="pt-5 pb-1">
                        <button
                          onClick={() => {
                            setIsSavedFeedback(true);
                            setTimeout(() => setIsSavedFeedback(false), 2500);
                          }}
                          className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#6655CC] to-[#806EE8] hover:from-[#5744BC] hover:to-[#725FDE] text-white font-bold text-sm tracking-wide shadow-lg shadow-purple-600/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                        >
                          {isSavedFeedback ? (
                            <>
                              <Check className="w-4 h-4 text-emerald-300 stroke-[3]" />
                              <span>{t('savedSuccess')}</span>
                            </>
                          ) : (
                            <span>{t('saveChangesBtn')}</span>
                          )}
                        </button>
                      </div>

                      {/* 3D Avatar Picker Modal / Drawer */}
                      <AnimatePresence>
                        {isAvatarPickerOpen && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-50 bg-slate-950/65 backdrop-blur-[2px] flex flex-col justify-end"
                            onClick={() => setIsAvatarPickerOpen(false)}
                          >
                            <motion.div
                              initial={{ y: "100%" }}
                              animate={{ y: 0 }}
                              exit={{ y: "100%" }}
                              transition={{ type: "spring", damping: 26, stiffness: 320 }}
                              className="bg-[#F8F6F2] rounded-t-[28px] p-4 shadow-2xl border-t border-white/80 flex flex-col max-h-[88%] text-slate-900"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {/* Modal Header */}
                              <div className="flex items-center justify-between pb-2.5 border-b border-[#E5DFD7]">
                                <div>
                                  <h3 className="text-sm font-extrabold text-[#1E1B2E]">
                                    {t('chooseAvatar')}
                                  </h3>
                                  <p className="text-[10px] text-[#7E789B] font-medium">
                                    {t('chooseAvatarSubtitle')}
                                  </p>
                                </div>
                                <button
                                  onClick={() => setIsAvatarPickerOpen(false)}
                                  className="w-7 h-7 rounded-full bg-[#EDE8E3] hover:bg-[#E0D8D0] flex items-center justify-center text-[#372A5B] transition-colors"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              {/* Gender Filters (Clean labels WITHOUT numbers) */}
                              <div className="flex gap-1.5 my-2.5 bg-[#EDE8E3] p-1 rounded-xl">
                                <button
                                  onClick={() => setAvatarCategoryFilter('all')}
                                  className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all ${
                                    avatarCategoryFilter === 'all'
                                      ? 'bg-[#6655CC] text-white shadow-sm'
                                      : 'text-[#7E789B] hover:text-[#372A5B]'
                                  }`}
                                >
                                  {t('filterAll')}
                                </button>
                                <button
                                  onClick={() => setAvatarCategoryFilter('girl')}
                                  className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all ${
                                    avatarCategoryFilter === 'girl'
                                      ? 'bg-[#6655CC] text-white shadow-sm'
                                      : 'text-[#7E789B] hover:text-[#372A5B]'
                                  }`}
                                >
                                  {t('filterGirls')}
                                </button>
                                <button
                                  onClick={() => setAvatarCategoryFilter('boy')}
                                  className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all ${
                                    avatarCategoryFilter === 'boy'
                                      ? 'bg-[#6655CC] text-white shadow-sm'
                                      : 'text-[#7E789B] hover:text-[#372A5B]'
                                  }`}
                                >
                                  {t('filterBoys')}
                                </button>
                              </div>

                              {/* Grid of Avatars (Clean avatar circles WITHOUT text underneath) */}
                              <div className="grid grid-cols-4 gap-2.5 overflow-y-auto p-1 max-h-56 scrollbar-none">
                                {CLAY_AVATARS.filter(
                                  (av) => avatarCategoryFilter === 'all' || av.gender === avatarCategoryFilter
                                ).map((av) => {
                                  const isSelected = selectedAvatar === av.src;
                                  return (
                                    <button
                                      key={av.id}
                                      onClick={() => handleSelectAvatar(av.src)}
                                      className={`relative flex items-center justify-center p-2 rounded-2xl bg-white border-2 transition-all aspect-square ${
                                        isSelected
                                          ? 'border-[#6655CC] ring-2 ring-[#6655CC]/30 shadow-md scale-[1.04]'
                                          : 'border-[#EDE8E3] hover:border-[#DDD5CB] hover:bg-slate-50'
                                      }`}
                                      title={av.name}
                                    >
                                      <div className="w-12 h-12 rounded-full overflow-hidden bg-[#F8F6F2] border border-white shadow-inner">
                                        <img
                                          src={av.src}
                                          alt={av.name}
                                          className="w-full h-full object-cover"
                                        />
                                      </div>

                                      {isSelected && (
                                        <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#6655CC] text-white flex items-center justify-center shadow">
                                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                                        </div>
                                      )}
                                    </button>
                                  );
                                })}
                              </div>

                              {/* Custom Upload and Apply */}
                              <div className="mt-2.5 pt-2.5 border-t border-[#E5DFD7] flex items-center gap-2">
                                <label className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-[#EDE8E3] hover:bg-[#E2D9CF] cursor-pointer text-[#372A5B] font-bold text-xs transition-colors">
                                  <Camera className="w-3.5 h-3.5" />
                                  <span>{t('uploadPhoto')}</span>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      if (file) {
                                        const reader = new FileReader();
                                        reader.onload = (event) => {
                                          if (event.target?.result) {
                                            handleSelectAvatar(event.target.result as string);
                                          }
                                        };
                                        reader.readAsDataURL(file);
                                      }
                                    }}
                                  />
                                </label>
                                <button
                                  onClick={() => setIsAvatarPickerOpen(false)}
                                  className="flex-1 py-2 px-3 rounded-xl bg-[#6655CC] hover:bg-[#5744BC] text-white font-bold text-xs shadow-md shadow-purple-600/20 transition-all"
                                >
                                  {t('applyAvatar')}
                                </button>
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Summary of Changes & Quick Navigation */}
            <div className="lg:col-span-7 space-y-6">
              {/* Highlight Card for Registration & 3D Avatars */}
              <div className="bg-gradient-to-r from-[#050C33] via-[#0C2AD6] to-[#020620] border border-yellow-500/40 rounded-2xl p-6 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 border border-yellow-400/50 flex items-center justify-center text-yellow-300 shrink-0 shadow-lg">
                    <UserPlus className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white">
                        Registration, Profile &amp; 16 3D Clay Avatars
                      </h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 font-semibold">
                        Updated
                      </span>
                    </div>
                    <p className="text-sm text-slate-200 mt-1.5 leading-relaxed">
                      All features customized to your exact requirements:
                      <br />
                      &bull; <strong>Harmonized Catalog Palette:</strong> Active filter category pills use the exact same clay purple gradient as Login/Register buttons (`#A896F5` to `#866FE0`), with purple focus/reset styling.
                      <br />
                      &bull; <strong>Course Card Hover Highlight:</strong> Hovering any course card triggers a purple border glow, title hover accent (`#6655CC`), duration badge, and arrow transition.
                      <br />
                      &bull; <strong>Unified Bottom Navigation:</strong> Catalog, My Courses, Explore, and Profile all use the identical purple active/hover color scheme (`#7864E6`) with an active indicator dot.
                      <br />
                      &bull; <strong>16 High-Definition 3D Avatars:</strong> 8 girls and 8 boys with persistent synchronization across all screens and reloads.
                      <br />
                      &bull; <strong>Clean 4-Field Profile:</strong> Full Name, Email, Current Password, New Password with matching clay button.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2 text-xs">
                      <button
                        onClick={() => {
                          setActiveTab('code');
                          setActiveCodeFileId('fragment_profile');
                          setCodeFilter('profil');
                        }}
                        className="px-3.5 py-1.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold flex items-center gap-1.5 shadow"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Copy fragment_profile.xml</span>
                      </button>

                      <button
                        onClick={() => {
                          setActiveTab('code');
                          setActiveCodeFileId('profile_fragment_kt');
                          setCodeFilter('profil');
                        }}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold flex items-center gap-1.5 border border-slate-700"
                      >
                        <FileCode className="w-3.5 h-3.5 text-yellow-400" />
                        <span>Copy ProfileFragment.kt</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Source Code Files Overview */}
              <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-5">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <FolderTree className="w-4 h-4 text-yellow-400" />
                  Android Studio Source Code Files
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {CODE_FILES.map((f) => (
                    <div
                      key={f.id}
                      onClick={() => {
                        setActiveCodeFileId(f.id);
                        setActiveTab('code');
                        if (f.group === 'register') setCodeFilter('register');
                        else if (f.group === 'login') setCodeFilter('login');
                        else setCodeFilter('profil');
                      }}
                      className="group p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-yellow-500/50 hover:bg-slate-800/40 cursor-pointer transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono text-xs font-bold text-yellow-400 flex items-center gap-1.5">
                            <FileCode className="w-3.5 h-3.5" />
                            {f.title}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                            {f.language}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1">
                          {f.folder}
                        </p>
                      </div>

                      <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-800/60">
                        <span className="text-[11px] text-slate-500 truncate max-w-[180px]">
                          {f.badge}
                        </span>
                        <span className="text-xs text-yellow-400 group-hover:translate-x-0.5 transition-transform font-medium">
                          View code →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Project Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/60 to-slate-900 border border-blue-900/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Download Complete Project Archive (.zip)
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Includes all 16 3D avatars, RegisterActivity, WelcomeActivity, Catalog, Profile, and drawables.
                  </p>
                </div>
                <a
                  href="/GenoveLearning_updated.zip"
                  download="GenoveLearning_updated.zip"
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download .zip</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Code Viewer & Copier */}
        {activeTab === 'code' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-xl border border-slate-800">
                <button
                  onClick={() => setCodeFilter('profil')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                    codeFilter === 'profil' ? 'bg-[#6655CC] text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Profile (3D)
                </button>
                <button
                  onClick={() => setCodeFilter('register')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                    codeFilter === 'register' ? 'bg-yellow-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Register
                </button>
                <button
                  onClick={() => setCodeFilter('login')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                    codeFilter === 'login' ? 'bg-yellow-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setCodeFilter('all')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                    codeFilter === 'all' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All
                </button>
              </div>

              <div className="space-y-1.5">
                {displayedCodeFiles.map((f) => {
                  const isActive = activeCodeFileId === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setActiveCodeFileId(f.id)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex flex-col gap-1 ${
                        isActive
                          ? 'bg-yellow-500/10 border-yellow-500 text-white shadow-sm'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-slate-200 flex items-center gap-1.5">
                          <FileCode className={`w-3.5 h-3.5 ${isActive ? 'text-yellow-400' : 'text-slate-500'}`} />
                          {f.title}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-400">
                          {f.language}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-mono truncate">
                        {f.folder}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Code Box */}
            <div className="lg:col-span-8 flex flex-col bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
              <div className="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-white">
                      {activeCodeFile.title}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 font-medium">
                      {activeCodeFile.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Target directory: <span className="text-yellow-300 font-semibold">{activeCodeFile.folder}</span>
                  </p>
                </div>

                <button
                  onClick={() => handleCopyCode(activeCodeFile.id, activeCodeFile.code)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-semibold text-xs transition-all ${
                    copiedFileId === activeCodeFile.id
                      ? 'bg-emerald-600 text-white shadow-emerald-500/20 shadow-md'
                      : 'bg-yellow-500 hover:bg-yellow-400 text-slate-950 shadow-md shadow-yellow-500/20 active:scale-95'
                  }`}
                >
                  {copiedFileId === activeCodeFile.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy full code</span>
                    </>
                  )}
                </button>
              </div>

              <div className="px-5 py-2.5 bg-slate-900/50 border-b border-slate-800/80 text-xs text-slate-300">
                {activeCodeFile.description}
              </div>

              <div className="p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-200 bg-slate-950/90 max-h-[560px]">
                <pre>
                  <code>{activeCodeFile.code}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Generated Photos & 3D Assets */}
        {activeTab === 'images' && (
          <div className="space-y-6">
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2 mb-1">
                <Sparkles className="w-5 h-5 text-purple-400" />
                High-Definition 3D Claymorphism Assets (Zero Blur &amp; Frame-Free)
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                All assets are high resolution (1024x1024), cleanly isolated with crisp transparent outlines and soft clay studio lighting.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 3D Girl HD */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                  <div className="w-36 h-36 rounded-2xl p-2 bg-[#F8F6F2] flex items-center justify-center border border-white/20 shadow-inner mb-3 overflow-hidden">
                    <img
                      src="/img_clay_girl_3d.png"
                      alt="3D Clay Girl HD"
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-white">img_clay_girl.png</h4>
                  <p className="text-xs text-purple-400 font-mono mt-0.5">R.drawable.img_clay_girl</p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    High definition 3D chibi girl character, crisp isolation with arms resting on the card edge.
                  </p>
                  <a
                    href="/img_clay_girl_3d.png"
                    download="img_clay_girl.png"
                    className="mt-3 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download HD</span>
                  </a>
                </div>

                {/* 3D User Icon */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                  <div className="w-36 h-36 rounded-2xl p-4 bg-[#F8F6F2] flex items-center justify-center border border-white/20 shadow-inner mb-3">
                    <img
                      src="/ic_clay_3d_user.png"
                      alt="3D User Icon"
                      className="w-24 h-24 object-contain drop-shadow-md"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-white">ic_clay_3d_user.png</h4>
                  <p className="text-xs text-purple-400 font-mono mt-0.5">R.drawable.ic_clay_3d_user</p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Circular 3D lilac badge with tactile white user silhouette in ultra-sharp relief.
                  </p>
                  <a
                    href="/ic_clay_3d_user.png"
                    download="ic_clay_3d_user.png"
                    className="mt-3 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download HD</span>
                  </a>
                </div>

                {/* 3D Lock Icon */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                  <div className="w-36 h-36 rounded-2xl p-4 bg-[#F8F6F2] flex items-center justify-center border border-white/20 shadow-inner mb-3">
                    <img
                      src="/ic_clay_3d_lock.png"
                      alt="3D Lock Icon"
                      className="w-24 h-24 object-contain drop-shadow-md"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-white">ic_clay_3d_lock.png</h4>
                  <p className="text-xs text-purple-400 font-mono mt-0.5">R.drawable.ic_clay_3d_lock</p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Circular 3D lilac badge with tactile white lock icon in ultra-sharp relief.
                  </p>
                  <a
                    href="/ic_clay_3d_lock.png"
                    download="ic_clay_3d_lock.png"
                    className="mt-3 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download HD</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-yellow-400" />
                3D Application Logo (Login &amp; Register Screens)
              </h3>
              <p className="text-xs text-slate-400 mt-1 mb-4">
                Directory: <code className="text-blue-400 bg-slate-800 px-1.5 py-0.5 rounded">app/src/main/res/drawable/img_login_logo_3d.jpg</code>
              </p>

              <div className="flex items-center gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800 max-w-md">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/20 shadow-lg bg-slate-900 shrink-0">
                  <img
                    src="/login_logo_3d.jpg"
                    alt="Logo 3D"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">img_login_logo_3d.jpg</h4>
                  <p className="text-xs text-yellow-400 font-mono mt-0.5">R.drawable.img_login_logo_3d</p>
                  <p className="text-xs text-slate-400 mt-1">Metallic blue 3D rounded cube with glowing "GL" monogram.</p>
                </div>
              </div>
            </div>

            {/* Collection of 16 3D Claymorphism Avatars (8 Girls & 8 Boys) */}
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <User className="w-5 h-5 text-purple-400" />
                    Collection of 16 3D Claymorphism Avatars (8 Girls &amp; 8 Boys)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    High definition 3D character avatars for the Profile screen and persistent Catalog display.
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  16 Avatars Included
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mt-4">
                {CLAY_AVATARS.map((av) => (
                  <div
                    key={av.id}
                    className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-col items-center text-center group hover:border-purple-500/50 transition-all"
                  >
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-[#F8F6F2] border-2 border-white/30 shadow-md mb-2 group-hover:scale-105 transition-transform">
                      <img
                        src={av.src}
                        alt={av.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs font-bold text-white truncate w-full">{av.name}</span>
                    <span className="text-[10px] text-purple-400 font-mono mt-0.5">
                      {av.drawable}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5">
                      {av.gender === 'girl' ? 'Girl 3D' : 'Boy 3D'}
                    </span>
                    <a
                      href={av.src}
                      download={`${av.drawable}.png`}
                      className="mt-2 w-full py-1 px-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-bold flex items-center justify-center gap-1 shadow"
                    >
                      <Download className="w-3 h-3" />
                      <span>HD</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Guide */}
        {activeTab === 'guide' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FolderTree className="w-5 h-5 text-yellow-400" />
                  Integration Guide: Registration, Login &amp; Profile (Android Studio)
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <h4 className="text-sm font-bold text-white">
                  1. Add Registration &amp; Profile Layouts
                </h4>
                <p className="text-xs text-slate-300">
                  Copy <code className="text-yellow-400 font-mono">activity_register.xml</code> and <code className="text-yellow-400 font-mono">fragment_profile.xml</code> into <code className="text-white">app/src/main/res/layout/</code>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <h4 className="text-sm font-bold text-white">
                  2. Add Kotlin Controllers &amp; Activities
                </h4>
                <p className="text-xs text-slate-300">
                  Copy <code className="text-yellow-400 font-mono">RegisterActivity.kt</code> and <code className="text-yellow-400 font-mono">ProfileFragment.kt</code> into <code className="text-white">app/src/main/java/com/genove/learning/</code>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <h4 className="text-sm font-bold text-white">
                  3. 16 3D Clay Avatars in Res/Drawable
                </h4>
                <p className="text-xs text-slate-300">
                  All 16 3D avatar PNGs (<code className="text-purple-300 font-mono">img_avatar_girl_1</code> to <code className="text-purple-300 font-mono">8</code> and <code className="text-purple-300 font-mono">img_avatar_boy_1</code> to <code className="text-purple-300 font-mono">8</code>) are located in <code className="text-white">app/src/main/res/drawable/</code>.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950 py-4 px-4 text-center text-xs text-slate-500">
        <p>Genove Learning — e-Learning Authentication, Registration, Catalog &amp; Profile System for Android &amp; Web</p>
      </footer>
    </div>
  );
}
