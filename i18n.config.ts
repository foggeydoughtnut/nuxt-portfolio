export default defineI18nConfig(() => ({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    availableLocales: ['en', 'ja'],
    messages: {
      en: {

        // Nav Bar
        home: "Home",
        about: "About Me",
        projects: "Projects",
        github: "GitHub",
        linkedin: "LinkedIn",
        language: "Language",
        //

        // Home Page
        welcome_message: 'Welcome!',
        most_recent_project: 'Below is my most recent project',
        //

        // Project Card
        learn_more: "Learn More",
        //

        // Projects
        // Galaga
        galaga_title: "Galaga",
        galaga_description: 'A Galaga replica I created in Monogame.'
        //
      },
      ja: {
        // Nav Bar
        home: "ホーム",
        about: "自己紹介",
        projects: "作品",
        github: "GitHub",
        linkedin: "LinkedIn",
        language: "言語",
        //

        // Home Page
        welcome_message: 'こんにちは！',
        most_recent_project: "最近の作品",
        //

        // Project Card
        learn_more: "もっと情報",
        //

        // Projects
        // Galaga
        galaga_title: "ギャラガ",
        galaga_description: "ギャラガのレプリカがMonoGameで作りました"

        //
      },
    }
  }))