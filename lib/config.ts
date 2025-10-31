import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Quels sont vos meilleurs plats ?",
    prompt: "Quels sont vos meilleurs plats ?",
    icon: "sparkles",
  },
  {
    label: "Je veux faire une réservation",
    prompt: "Je veux faire une réservation",
    icon: "calendar-days",
  },
  {
    label: "Où êtes-vous situés ?",
    prompt: "Où êtes-vous situés ?",
    icon: "map-pin",
  },
];

export const PLACEHOLDER_INPUT = "Posez votre question à AZAR...";

export const GREETING = "Bonjour, c'est AZAR ! Comment puis-je vous aider aujourd'hui au Taj Medina ?";

// ==========================================================
// DÉBUT DE VOTRE THÈME PERSONNALISÉ
// ==========================================================

export const getThemeConfig = (theme: ColorScheme): ThemeOption => {
  // Définition des couleurs de la marque Taj Medina
  const colors = {
    background: "#0e2a2a",   // Vert très foncé (fond)
    text: "#FFFFFF",         // Texte blanc
    primary: "#AA8453",     // Or / Beige (votre "bleu")
    botMessage: "#1a3d3d", // Vert plus clair (bulle du bot)
  };

  return {
    radius: "round", // Garde vos coins arrondis

    color: {
      // Couleur principale (bouton envoyer, accents)
      accent: {
        primary: colors.primary,
        level: 1,
      },
      
      // Fond général du chat
      background: {
        primary: colors.background,
      },

      // Texte général
      text: {
        primary: colors.text,
      },

      // Barre de titre
      header: {
        background: colors.background,
        text: colors.text,
      },

      // Champ de saisie
      composer: {
        background: colors.botMessage,
        text: colors.text,
      },

      // Bulle de l'UTILISATEUR (la bulle "or")
      message: {
        user: {
          background: colors.primary,
          text: colors.background, // Texte vert foncé sur bulle or
        },
        // Bulle du BOT (la bulle "vert foncé")
        bot: {
          background: colors.botMessage,
          text: colors.text,
        },
      },
    },
  };
};

// ==========================================================
// FIN DE VOTRE THÈME PERSONNALISÉ
// ==========================================================
