# Instructions for Lecture:

1. Create your backend file structure for Rails. We suggest using PostgreSQL for deployment purposes. 
    - `rails new pokemon-teams-backend --api --database=postgresql`
    - The `--api` flag configures it to handle API calls
2. `gem install faker`
3. `gem install active_model_serializers`
    - Be sure to install this BEFORE you install your resources so that they are properly linked.
4. `rails g resource trainer name`
5. `rails g resource pokemon species nickname trainer:references`
6. Set up your application for Cross Origin Resource Sharing (CORS)
    - Uncomment `gem rack-cors` in the Gemfile
    - Uncomment the code within config --> initializers --> cors.rb
7. 
