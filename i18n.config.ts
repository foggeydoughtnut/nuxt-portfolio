export default defineI18nConfig(() => ({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en: {
        home: "Home",
        about: "About Me",
        projects: "Projects",
        github: "GitHub",
        linkedin: "LinkedIn",
        language: "Language"
      },
      ja: {
        home: "ホーム",
        about: "紹介",
        projects: "作品",
        github: "GitHub",
        linkedin: "LinkedIn",
        language: "言語"
      },
    }
  }))