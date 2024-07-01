// skills.ts
import { Skill } from './types';

const skills: Skill[] = [
    { label: 'AWS', id: '1', iconUrl: '/icons/AWS-Light.svg' },
    { label: 'Ember', id: '2', iconUrl: '/icons/Ember.svg' },
    { label: 'Material UI', id: '3', iconUrl: '/icons/MaterialUI-Light.svg' },
    { label: 'Remix', id: '4', iconUrl: '/icons/Remix-Light.svg' },
    { label: 'Ableton', id: '5', iconUrl: '/icons/Ableton-Light.svg' },
    { label: 'ActivityPub', id: '6', iconUrl: '/icons/ActivityPub-Light.svg' },
    { label: 'Actix', id: '7', iconUrl: '/icons/Actix-Light.svg' },
    { label: 'Adonis', id: '8', iconUrl: '/icons/Adonis.svg' },
    { label: 'After Effects', id: '9', iconUrl: '/icons/AfterEffects.svg' },
    { label: 'AiScript', id: '10', iconUrl: '/icons/AiScript-Light.svg' },
    { label: 'AlpineJS', id: '11', iconUrl: '/icons/AlpineJS-Light.svg' },
    { label: 'Anaconda', id: '12', iconUrl: '/icons/Anaconda-Light.svg' },
    { label: 'Android Studio', id: '13', iconUrl: '/icons/AndroidStudio-Light.svg' },
    { label: 'Astro', id: '14', iconUrl: '/icons/Astro.svg' },
    { label: 'Atom', id: '15', iconUrl: '/icons/Atom.svg' },
    { label: 'Audition', id: '16', iconUrl: '/icons/Audition.svg' },
    { label: 'AutoCAD', id: '17', iconUrl: '/icons/AutoCAD-Light.svg' },
    { label: 'Azul', id: '18', iconUrl: '/icons/Azul.svg' },
    { label: 'Azure', id: '19', iconUrl: '/icons/Azure-Light.svg' },
    { label: 'BSD', id: '20', iconUrl: '/icons/BSD-Light.svg' },
    { label: 'Babel', id: '21', iconUrl: '/icons/Babel.svg' },
    { label: 'Bun', id: '22', iconUrl: '/icons/Bun-Light.svg' },
    { label: 'C', id: '23', iconUrl: '/icons/C.svg' },
    { label: 'CLion', id: '24', iconUrl: '/icons/CLion-Light.svg' },
    { label: 'CMake', id: '25', iconUrl: '/icons/CMake-Light.svg' },
    { label: 'CSS', id: '26', iconUrl: '/icons/CSS.svg' },
    { label: 'Cassandra', id: '27', iconUrl: '/icons/Cassandra-Light.svg' },
    { label: 'Clojure', id: '28', iconUrl: '/icons/Clojure-Light.svg' },
    { label: 'Cloudflare', id: '29', iconUrl: '/icons/Cloudflare-Light.svg' },
    { label: 'CodePen', id: '30', iconUrl: '/icons/CodePen-Light.svg' },
    { label: 'CoffeeScript', id: '31', iconUrl: '/icons/CoffeeScript-Light.svg' },
    { label: 'Crystal', id: '32', iconUrl: '/icons/Crystal-Light.svg' },
    { label: 'D3', id: '33', iconUrl: '/icons/D3-Light.svg' },
    { label: 'Dart', id: '34', iconUrl: '/icons/Dart-Light.svg' },
    { label: 'DENO', id: '35', iconUrl: '/icons/DENO-Light.svg' },
    { label: 'Eclipse', id: '36', iconUrl: '/icons/Eclipse-Light.svg' },
    { label: 'Elasticsearch', id: '37', iconUrl: '/icons/Elasticsearch-Light.svg' },
    { label: 'Electron', id: '38', iconUrl: '/icons/Electron.svg' },
    { label: 'Elixir', id: '39', iconUrl: '/icons/Elixir-Light.svg' },
    { label: 'Elysia', id: '40', iconUrl: '/icons/Elysia-Light.svg' },
    { label: 'Emacs', id: '41', iconUrl: '/icons/Emacs.svg' },
    { label: 'Emotion', id: '42', iconUrl: '/icons/Emotion-Light.svg' },
    { label: 'ExpressJS', id: '43', iconUrl: '/icons/ExpressJS-Light.svg' },
    { label: 'FastAPI', id: '44', iconUrl: '/icons/FastAPI.svg' },
    { label: 'Fediverse', id: '45', iconUrl: '/icons/Fediverse-Light.svg' },
    { label: 'Figma', id: '46', iconUrl: '/icons/Figma-Light.svg' },
    { label: 'Firebase', id: '47', iconUrl: '/icons/Firebase-Light.svg' },
    { label: 'Flask', id: '48', iconUrl: '/icons/Flask-Light.svg' },
    { label: 'Flutter', id: '49', iconUrl: '/icons/Flutter-Light.svg' },
    { label: 'Forth', id: '50', iconUrl: '/icons/Forth.svg' },
    { label: 'Fortran', id: '51', iconUrl: '/icons/Fortran.svg' },
    { label: 'GCP', id: '52', iconUrl: '/icons/GCP-Light.svg' },
    { label: 'Gatsby', id: '53', iconUrl: '/icons/Gatsby.svg' },
    { label: 'Gherkin', id: '54', iconUrl: '/icons/Gherkin-Light.svg' },
    { label: 'Git', id: '55', iconUrl: '/icons/Git.svg' },
    { label: 'GitLab', id: '56', iconUrl: '/icons/GitLab-Light.svg' },
    { label: 'GitHub', id: '57', iconUrl: '/icons/Github-Light.svg' },
    { label: 'GitHub Actions', id: '58', iconUrl: '/icons/GithubActions-Light.svg' },
    { label: 'GoLang', id: '59', iconUrl: '/icons/GoLang.svg' },
    { label: 'Godot', id: '60', iconUrl: '/icons/Godot-Light.svg' },
    { label: 'Gradle', id: '61', iconUrl: '/icons/Gradle-Light.svg' },
    { label: 'GraphQL', id: '62', iconUrl: '/icons/GraphQL-Light.svg' },
    { label: 'GTK', id: '63', iconUrl: '/icons/GTK-Light.svg' },
    { label: 'GameMaker Studio', id: '64', iconUrl: '/icons/GameMakerStudio.svg' },
    { label: 'Haskell', id: '65', iconUrl: '/icons/Haskell-Light.svg' },
    { label: 'Haxe', id: '66', iconUrl: '/icons/Haxe-Light.svg' },
    { label: 'HaxeFlixel', id: '67', iconUrl: '/icons/HaxeFlixel-Light.svg' },
    { label: 'Hibernate', id: '68', iconUrl: '/icons/Hibernate-Light.svg' },
    { label: 'Heroku', id: '69', iconUrl: '/icons/Heroku.svg' },
    { label: 'HTML', id: '70', iconUrl: '/icons/HTML.svg' },
    { label: 'Htmx', id: '71', iconUrl: '/icons/Htmx-Light.svg' },
    { label: 'IPFS', id: '72', iconUrl: '/icons/IPFS-Light.svg' },
    { label: 'Idea', id: '73', iconUrl: '/icons/Idea-Light.svg' },
    { label: 'Illustrator', id: '74', iconUrl: '/icons/Illustrator.svg' },
    { label: 'Jest', id: '75', iconUrl: '/icons/Jest.svg' },
    { label: 'Julia', id: '76', iconUrl: '/icons/Julia-Light.svg' },
    { label: 'Kafka', id: '77', iconUrl: '/icons/Kafka.svg' },
    { label: 'Kali', id: '78', iconUrl: '/icons/Kali-Light.svg' },
    { label: 'Kotlin', id: '79', iconUrl: '/icons/Kotlin-Light.svg' },
    { label: 'Ktor', id: '80', iconUrl: '/icons/Ktor-Light.svg' },
    { label: 'Linux', id: '81', iconUrl: '/icons/Linux-Light.svg' },
    { label: 'Lit', id: '82', iconUrl: '/icons/Lit-Light.svg' },
    { label: 'Lua', id: '83', iconUrl: '/icons/Lua-Light.svg' },
    { label: 'LaTeX', id: '84', iconUrl: '/icons/LaTeX-Light.svg' },
    { label: 'Less', id: '85', iconUrl: '/icons/Less-Light.svg' },
    { label: 'Markdown', id: '86', iconUrl: '/icons/Markdown-Light.svg' },
    { label: 'Mastodon', id: '87', iconUrl: '/icons/Mastodon-Light.svg' },
    { label: 'MongoDB', id: '88', iconUrl: '/icons/MongoDB.svg' },
    { label: 'MySQL', id: '89', iconUrl: '/icons/MySQL-Light.svg' },
    { label: 'NeoVim', id: '90', iconUrl: '/icons/NeoVim-Light.svg' },
    { label: 'NestJS', id: '91', iconUrl: '/icons/NestJS-Light.svg' },
    { label: 'Netlify', id: '92', iconUrl: '/icons/Netlify-Light.svg' },
    { label: 'NextJS', id: '93', iconUrl: '/icons/NextJS-Light.svg' },
    { label: 'NodeJS', id: '94', iconUrl: '/icons/NodeJS-Light.svg' },
    { label: 'Npm', id: '95', iconUrl: '/icons/Npm-Light.svg' },
    { label: 'OCaml', id: '96', iconUrl: '/icons/OCaml.svg' },
    { label: 'Obsidian', id: '97', iconUrl: '/icons/Obsidian-Light.svg' },
    { label: 'OpenCV', id: '98', iconUrl: '/icons/OpenCV-Light.svg' },
    { label: 'OpenShift', id: '99', iconUrl: '/icons/OpenShift.svg' },
    { label: 'PHP', id: '100', iconUrl: '/icons/PHP-Light.svg' },
    { label: 'Pinia', id: '101', iconUrl: '/icons/Pinia-Light.svg' },
    { label: 'Pkl', id: '102', iconUrl: '/icons/Pkl-Light.svg' },
    { label: 'Pnpm', id: '103', iconUrl: '/icons/Pnpm-Light.svg' },
    { label: 'PostgreSQL', id: '104', iconUrl: '/icons/PostgreSQL-Light.svg' },
    { label: 'Powershell', id: '105', iconUrl: '/icons/Powershell-Light.svg' },
    { label: 'Prisma', id: '106', iconUrl: '/icons/Prisma.svg' },
    { label: 'Processing', id: '107', iconUrl: '/icons/Processing-Light.svg' },
    { label: 'Prometheus', id: '108', iconUrl: '/icons/Prometheus.svg' },
    { label: 'Pug', id: '109', iconUrl: '/icons/Pug-Light.svg' },
    { label: 'Python', id: '110', iconUrl: '/icons/Python-Light.svg' },
    { label: 'PyCharm', id: '111', iconUrl: '/icons/PyCharm-Light.svg' },
    { label: 'PyTorch', id: '112', iconUrl: '/icons/PyTorch-Light.svg' },
    { label: 'QT', id: '113', iconUrl: '/icons/QT-Light.svg' },
    { label: 'R', id: '114', iconUrl: '/icons/R-Light.svg' },
    { label: 'Rails', id: '115', iconUrl: '/icons/Rails.svg' },
    { label: 'React', id: '116', iconUrl: '/icons/React-Light.svg' },
    { label: 'ReactiveX', id: '117', iconUrl: '/icons/ReactiveX-Light.svg' },
    { label: 'Redis', id: '118', iconUrl: '/icons/Redis-Light.svg' },
    { label: 'RedHat', id: '119', iconUrl: '/icons/RedHat-Light.svg' },
    { label: 'Redux', id: '120', iconUrl: '/icons/Redux.svg' },
    { label: 'Regex', id: '121', iconUrl: '/icons/Regex-Light.svg' },
    { label: 'RollupJS', id: '122', iconUrl: '/icons/RollupJS-Light.svg' },
    { label: 'Ruby', id: '123', iconUrl: '/icons/Ruby.svg' },
    { label: 'Rust', id: '124', iconUrl: '/icons/Rust.svg' },
    { label: 'SQLite', id: '125', iconUrl: '/icons/SQLite.svg' },
    { label: 'Sass', id: '126', iconUrl: '/icons/Sass.svg' },
    { label: 'Scala', id: '127', iconUrl: '/icons/Scala-Light.svg' },
    { label: 'SciKitLearn', id: '128', iconUrl: '/icons/SciKitLearn-Light.svg' },
    { label: 'ScikitLearn', id: '129', iconUrl: '/icons/ScikitLearn-Dark.svg' },
    { label: 'Selenium', id: '130', iconUrl: '/icons/Selenium.svg' },
    { label: 'Sentry', id: '131', iconUrl: '/icons/Sentry.svg' },
    { label: 'Sequelize', id: '132', iconUrl: '/icons/Sequelize-Light.svg' },
    { label: 'Sketchup', id: '133', iconUrl: '/icons/Sketchup-Light.svg' },
    { label: 'SolidJS', id: '134', iconUrl: '/icons/SolidJS-Light.svg' },
    { label: 'Solidity', id: '135', iconUrl: '/icons/Solidity.svg' },
    { label: 'Spring', id: '136', iconUrl: '/icons/Spring-Light.svg' },
    { label: 'StackOverflow', id: '137', iconUrl: '/icons/StackOverflow-Light.svg' },
    { label: 'StyledComponents', id: '138', iconUrl: '/icons/StyledComponents.svg' },
    { label: 'Sublime', id: '139', iconUrl: '/icons/Sublime-Light.svg' },
    { label: 'Supabase', id: '140', iconUrl: '/icons/Supabase-Light.svg' },
    { label: 'Svelte', id: '141', iconUrl: '/icons/Svelte.svg' },
    { label: 'Swift', id: '142', iconUrl: '/icons/Swift.svg' },
    { label: 'Symfony', id: '143', iconUrl: '/icons/Symfony-Light.svg' },
    { label: 'TailwindCSS', id: '144', iconUrl: '/icons/TailwindCSS-Light.svg' },
    { label: 'Tauri', id: '145', iconUrl: '/icons/Tauri-Light.svg' },
    { label: 'TensorFlow', id: '146', iconUrl: '/icons/TensorFlow-Light.svg' },
    { label: 'Terraform', id: '147', iconUrl: '/icons/Terraform-Light.svg' },
    { label: 'ThreeJS', id: '148', iconUrl: '/icons/ThreeJS-Light.svg' },
    { label: 'Twitter', id: '149', iconUrl: '/icons/Twitter.svg' },
    { label: 'TypeScript', id: '150', iconUrl: '/icons/TypeScript.svg' },
    { label: 'Ubuntu', id: '151', iconUrl: '/icons/Ubuntu-Light.svg' },
    { label: 'Unity', id: '152', iconUrl: '/icons/Unity-Light.svg' },
    { label: 'UnrealEngine', id: '153', iconUrl: '/icons/UnrealEngine.svg' },
    { label: 'V', id: '154', iconUrl: '/icons/V-Light.svg' },
    { label: 'Vercel', id: '155', iconUrl: '/icons/Vercel-Light.svg' },
    { label: 'VIM', id: '156', iconUrl: '/icons/VIM-Light.svg' },
    { label: 'Vite', id: '157', iconUrl: '/icons/Vite-Light.svg' },
    { label: 'Vitest', id: '158', iconUrl: '/icons/Vitest-Light.svg' },
    { label: 'VueJS', id: '159', iconUrl: '/icons/VueJS-Light.svg' },
    { label: 'Vuetify', id: '160', iconUrl: '/icons/Vuetify-Light.svg' },
    { label: 'WebAssembly', id: '161', iconUrl: '/icons/WebAssembly.svg' },
    { label: 'WebStorm', id: '162', iconUrl: '/icons/WebStorm-Light.svg' },
    { label: 'Webflow', id: '163', iconUrl: '/icons/Webflow.svg' },
    { label: 'Webpack', id: '164', iconUrl: '/icons/Webpack-Light.svg' },
    { label: 'WindiCSS', id: '165', iconUrl: '/icons/WindiCSS-Light.svg' },
    { label: 'Windows', id: '166', iconUrl: '/icons/Windows-Light.svg' },
    { label: 'Wordpress', id: '167', iconUrl: '/icons/Wordpress.svg' },
    { label: 'Workers', id: '168', iconUrl: '/icons/Workers-Light.svg' },
    { label: 'XD', id: '169', iconUrl: '/icons/XD.svg' },
    { label: 'Yarn', id: '170', iconUrl: '/icons/Yarn-Light.svg' },
    { label: 'Yew', id: '171', iconUrl: '/icons/Yew-Light.svg' },
    { label: 'Zig', id: '172', iconUrl: '/icons/Zig-Light.svg' },
    { label: 'p5js', id: '173', iconUrl: '/icons/p5js.svg' }

    // Add more skills as needed
];




export default skills;
