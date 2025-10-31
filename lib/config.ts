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
// THÈME CORRIGÉ (Structure Valide)
// ==========================================================

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    // Teinte des fonds et bulles du bot (Basé sur votre Vert Émeraude)
    grayscale: {
      hue: 180, // 180 est la teinte HSL pour le Vert Émeraude (#0e2a2a)
      tint: 6,  // Chiffre valide (0-9)
      shade: 1, // Chiffre valide (0-9)
    },
    
    // Couleur d'accent (Bouton Envoyer et Bulle Utilisateur)
    accent: {
      primary: "#AA8453", // Votre couleur OR
      level: 1,
    },
  },
  radius: "round",
});
// ==========================================================
// FIN DU CODE
// ==========================================================
