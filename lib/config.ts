import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Quels sont vos meilleurs plats ?",
    prompt: "Quels sont vos meilleurs plats ?",
    icon: "sparkle",
  },
  {
    label: "Je veux faire une réservation",
    prompt: "Je veux faire une réservation",
    icon: "calendar",
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
// DÉBUT DE VOTRE THÈME PERSONNALISÉ (Structure Corrigée)
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
    radius: "round",

    // --- C'est ici que nous définissons les couleurs ---
    color: {
      // Les couleurs de "base" (juste pour que ça compile)
      grayscale: {
        hue: 30, // Teinte dorée/beige
        tint: 6, // Valeur valide (entre 0-9)
        shade: 0, // Valeur valide (entre 0-9)
      },
      
      // La couleur d'accent (le "bleu" d'origine)
      accent: {
        primary: colors.primary, // Votre couleur OR
        level: 1,
      },

      // -- Variables CSS personnalisées pour forcer le thème --
      // C'est cette partie qui compte vraiment.
      custom: {
        // Fond général du chat
        "--widget-background-color": colors.background,
        "--header-background-color": colors.background,
        "--composer-background-color": colors.botMessage,

        // Texte
        "--widget-text-color": colors.text,
        "--header-text-color": colors.text,
        "--composer-text-color": colors.text,

        // Bulles de Message
        "--widget-user-message-bg": colors.primary,      // Bulle utilisateur OR
        "--widget-user-message-text": colors.background, // Texte VERT FONCÉ
        "--widget-bot-message-bg": colors.botMessage,    // Bulle bot VERT CLAIR
        "--widget-bot-message-text": colors.text,        // Texte BLANC
      },
    },
  };
};

// ==========================================================
// FIN DE VOTRE THÈME PERSONNALISÉ
// ==========================================================
