# MitarbeiterApp Strapi Template #

This Repository contains strapi configurations and is called by repository MitarbeiterAppStrapi to build mit-strapi.

### Creating a template ###

* To create a Strapi template, you need to publish a public GitHub repository that follows some      rules. First, a template's only concern should be to adapt Strapi to a use case. It should not deal with environment-specific configs, like databases, or upload and email providers. This is to make sure that templates stay maintainable.
* Version 0.1

### File structure ###

You can add as many files as you want to the root of your template repository. But it must at least have a ```template.json``` file and a ```template``` directory.

Only the following contents are allowed inside the template directory:

* ``` README.md ```: the readme of an app made with this template
* ``` .env.example ```: to specify required environment variables
* ``` api/ ```: for collections and single types
* ``` components/ ```: for components
* ``` config/ ```: can only include the functions directory (things like bootstrap.js or 404.js), because other config files are environment-specific.
* ``` data/ ```: to store the data imported by a seed script
* ``` plugins/ ```: for custom Strapi plugins
* ``` public/ ```:  to serve files
* ``` scripts/ ```: for custom scripts

If any unexpected file or directory is found, the installation will crash.