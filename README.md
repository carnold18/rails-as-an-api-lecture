# Instructions for Lecture:

1. Create your backend file structure for Rails. We suggest using PostgreSQL for deployment purposes. 
    - `rails new pokemon-teams-backend --api --database=postgresql`
    - The `--api` flag configures it to handle API calls
2. `gem install faker`
3. `gem install active_model_serializers`
    - Be sure to install this BEFORE you install your resources so that they are properly linked.
    - Your serializers allow access to specific attributes and creates the appropriate ActiveRecord associations when querying for data from your frontend
4. Generate resources for your models:
    - `rails g resource trainer name`
    - `rails g resource pokemon species nickname trainer:references`
5. Confirm that all your folders / files have been created successfully. Double check `seeds.rb`, `routes.rb`, controllers folder, models folder, and serializers folder.
    - You will have to create seeds for the database (provided by the lab's README)
    - Be sure to check for relationships in the models
6. Set up your application for Cross Origin Resource Sharing (CORS)
    - Uncomment `gem rack-cors` in the Gemfile
    - Uncomment the code within config --> initializers --> cors.rb
    - Replace `example.com` with `*`, allowing your frontend to access all routes on your backend
7. `rails db:create`
8. `rails db:migrate`
9. `rails db:seed`
10. Create `index` and `show` actions in your trainers controller.
11. Create `index`, `show`, `new`, `create`, & `destroy` actions in your pokemons controller.
