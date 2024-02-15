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

      // About Page
      about_title: 'About Me',
      bio: 'My name is Jeff Anderson. I am a frontend engineer at Conxx Inc/Komodo Systems where I help develop their GridObserver platform as well as the Komodo Eye platform using tools like Nuxt and Vue. ',
      notable_works: 'Notable Works',
      american_resume: "Resume",
      japanese_resume: "Japanese Style Resume",
      //

      // Projects Page
      projects_page_title: "Projects",
      projects_page_description: "These are some of the projects that I have worked on.",
      web_development: 'Web Development',
      game_development: 'Game Development',
      other_development: 'Other',
      //

      // Project Card
      learn_more: "Learn More",
      //

      // Projects
      // Komodo Eye
      komodo_eye_title: 'Komodo Eye',
      komodo_eye_description: 'Helped develop the Komodo Eye tool that allows you to easily monitor your network with minimal setup.',
      //
      // Grid Observer
      grid_observer_title: 'Grid Observer',
      grid_observer_description: 'Helped maintain and develop features on the GridObserver Platform.',
      //
      // Aspire Power Visualization
      aspire_power_title: "Aspire's Power Visualization",
      aspire_power_description: "A visualization server I created to visualize energy in and outflow as well as Aspire's energy management system. It also shows the Salt Lake City and Ogden electric bus information",
      //
      // Charger Reservation App
      charger_reservation_title: 'Charger Reservation Application',
      charger_reservation_description: 'A mobile friendly website I created to reserve electric vehicle chargers.',
      //
      // Astro Portfolio
      astro_portfolio_title: 'Previous Astro Portfolio Website',
      astro_portfolio_description: 'This is my old portfolio website created using Astro.js',
      //
      // Galaga
      galaga_title: "Galaga",
      galaga_description: 'A Galaga replica I created in Monogame.',
      //
      // Pong
      pong_title: 'Pong',
      pong_description: 'A Pong replica I created in Monogame following the ECS architectural pattern.',
      //
      // Space Guy
      space_guy_title: 'Space Guy',
      space_guy_description: 'This is a top-down 2d game that I created in Unity.',
      //
      // Hack USU 2023
      hack_usu_2023_title: 'Hack USU 2023 JRPG',
      hack_usu_2023_description: 'Developed this game in 24 hours with two other people. We built out a JRPG built out in Unity and took second place out of hundreds of people.',
      //
      // Hack USU 2022
      hack_usu_2022_title: 'Hack USU 2022 Crypt',
      hack_usu_2022_description: 'Developed this game in 24 hours with two other people. Created a side scrolling game in Unity and took first place in the game category.',
      //
      // Mountain Climb
      mountain_climb_title: 'Mountain Climb',
      mountain_climb_description: 'This project used a RL agent to make the car climb up the hill and reach the flag.',
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
      welcome_message: 'はじめまして！',
      most_recent_project: "最近の作品",
      //

      // About Page
      about_title: '自己紹介',
      bio: 'はじめまして。ジェフと申します。現在はフロントエンドエンジニアをしています。Conxx Inc/Komodo Systemsで働いています。Conxx Inc/Komodo Eyeを開発するためにNuxt とVueを使いました。',
      notable_works: '主な作品',
      // american_resume: "アメリカ式履歴書",
      american_resume: "履歴書",
      japanese_resume: "日本式履歴書",
      //

      // Projects Page
      projects_page_title: "作品",
      projects_page_description: 'これらの作品を開発しました。',
      web_development: 'ウェブ開発',
      game_development: 'ゲーム開発',
      other_development: '他の開発',
      //

      // Project Card
      learn_more: "もっと情報",
      //


      // Projects
      // Komodo Eye
      komodo_eye_title: 'Komodo Eye',
      komodo_eye_description: 'このソフトウェアを開発しました。これは簡単なネットワークの監視道具です。',
      //
      // Grid Observer
      grid_observer_title: 'Grid Observer',
      grid_observer_description: 'GridObserverを開発します。この道具はネットワーク監視をします。',
      //
      // Aspire Power Visualization
      aspire_power_title: 'Aspire電力ビジュアライザーション道具',
      aspire_power_description: 'このソフトウェアは電力ビジュアライザーション道具のためにAspireのエンジニア技術者を使いました。',
      //
      // Charger Reservation App
      charger_reservation_title: '車の充電器予約道具',
      charger_reservation_description: 'このソフトウェアは車の充電器を予約できます。',
      //
      // Astro Portfolio
      astro_portfolio_title: '以前のAstro.jsのポートフォリオウェブサイト',
      astro_portfolio_description: 'このサイトは以前のポートフォリオです。このサイトはAstro.jsを使いました。',
      //
      // Galaga
      galaga_title: "ギャラガ",
      galaga_description: "MonoGameでギャラガのレプリカを作りました。",
      //
      // Pong
      pong_title: 'Pong',
      pong_description: 'MonoGameでPongのレプリカを作りました。このゲームはECS体系に従いました。',
      //
      // Space Guy
      space_guy_title: 'Space Guy',
      space_guy_description: 'このゲームはUnityでトップダウンなゲームを作りました。',
      //
      // Hack USU 2023
      hack_usu_2023_title: 'Hack USU 2023 JRPG',
      hack_usu_2023_description: 'このゲームは２４時間で二人とJRPGを作りました。',
      //
      // Hack USU 2022
      hack_usu_2022_title: 'Hack USU 2022 Crypt',
      hack_usu_2022_description: 'このゲームは２４時間で二人と作りました。これは横スクロールの作品です。',
      //
      // Mountain Climb
      mountain_climb_title: 'Mountain Climb',
      mountain_climb_description: 'このソフトウェアは強化学習AIを作りました。',
      //
    },
  }
}))