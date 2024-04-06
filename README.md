
# Examn project, Hans August
For our final examn in front-end development we had a week to build this fitness dance app. I was granted the grade of 12, which is as good as it gets (just bragging).

## Instructions for viewers
- Please use the `integratedApi` branch instead of `main` (as `main` is set differently(*)).
- The project UI is found here: `/landrup_root`. Note that this is not a design assignment, the job was to closely imitate the supplied Figma file.
- The API that was handed out, containing activity data, user/trainer data etc, is located at `/landrup-dans-api`.
- To launch the project, run `npm run dev` in the UI folder (set to port 3000) and `npm start` in the API folder (set to port 4000). Of course first you have to run `npm install` for both directories.
- Note that the UI is optimized for a 411x823 screen res, matching the supplied Figma file, but given the dynamic CSS values I've used, it works fairly well in other formats as well.

## Notable notes
- The files in this (root) folder are mostly assignment specifications, if you're interested, though they're written in Danish.
- `Dokumentation.md` (Danish) is the project documentation written by me. It was part of the assignment and includes my tech stack, description of it, code highlight, my own additions and corrections, chosen optional assignment(s), as well as a reflection.
- (*) Project is also hosted at https://landrup-vercel-host.vercel.app/, using `main` branch, though some activity registration features are lacking, and the activity data is a local copy, as Vercel don't support express.js applications = the API.
- The git flow is not representive of my workflow, as this is a copy of a classroom repository.
- I like to write a lot of comments to better remember my intentions of the code, you will see these when reading through the project files. They too are written in Danish.
- You can find the available user information in `/landrup-dans-api/README.md`, in order to try out the login feature.
