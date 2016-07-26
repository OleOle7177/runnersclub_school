# config valid only for current version of Capistrano
lock '3.5.0'

set :application, "camp"
set :repo_url, 'git@github.com:OleOle7177/runnersclub_school.git'

# Для удобства работы мы рекомендуем вам настроить авторизацию
# SSH по ключу. При работе capistrano будет использоваться
# ssh-agent, который предоставляет возможность пробрасывать
# авторизацию на другие хосты.
# Если вы не используете авторизацию SSH по ключам И ssh-agent,
# закомментируйте эту опцию.
set :ssh_options, { :forward_agent => true }

# Имя вашего проекта в панели управления.
# Не меняйте это значение без необходимости, оно используется дальше.

# Не включать в поставку разработческие инструменты и пакеты тестирования.
set :bundle_without,  [:development, :test]

p '*' * 10
set :deployer,        'hosting_oleole7177'
set :use_sudo,        false
set :deploy_to,       "/home/hosting_oleole7177/projects/camp"
set :unicorn_conf,    "/etc/unicorn/camp.oleole7177.rb"
set :unicorn_pid,     "/var/run/unicorn/hosting_oleole7177/camp.oleole7177.pid"
p '*' * 10

p "#{fetch(:shared_path)}"
# set :bundle_dir,      File.join(fetch(:shared_path), 'gems')
p '*' * 10
role :web,             "phosphorus.locum.ru"
role :app,             "phosphorus.locum.ru"
role :db,              "phosphorus.locum.ru", :primary => true

p '*' * 10

# Следующие строки необходимы, т.к. ваш проект использует rvm.
set :rvm_ruby_string, "2.2.2"
set :rake,            "rvm use #{fetch(:rvm_ruby_string)} do bundle exec rake"
set :bundle_cmd,      "rvm use #{fetch(:rvm_ruby_string)} do bundle"
set :rack_env, :production

p '*' * 10

# Настройка системы контроля версий и репозитария,
# по умолчанию - git, если используется иная система версий,
# нужно изменить значение scm.
set :scm,             :git

## --- Ниже этого места ничего менять скорее всего не нужно ---

# before 'deploy:finalize_update', 'set_current_release'
# task :set_current_release, :roles => :app do
#     set :current_release, latest_release
# end

set :unicorn_start_cmd, "(cd #{fetch(:deploy_to)}/current; rvm use #{fetch(:rvm_ruby_string)} do bundle exec unicorn_rails -Dc #{fetch(:unicorn_conf)})"

# Default value for keep_releases is 5
set :keep_releases, 5

# - for unicorn - #
namespace :deploy do
  desc "Start application"
  task :start do
    on primary roles :app do
      run unicorn_start_cmd
    end
  end

  desc "Stop application"
  task :stop do
    on primary roles :app do
      run "[ -f #{unicorn_pid} ] && kill -QUIT `cat #{unicorn_pid}`"
    end
  end

  desc "Restart Application"
  task :restart do
    on primary roles :app do
      run "[ -f #{unicorn_pid} ] && kill -USR2 `cat #{unicorn_pid}` || #{unicorn_start_cmd}"
    end
  end
end



# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, '/var/www/my_app_name'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: 'log/capistrano.log', color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

# Default value for linked_dirs is []
# set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'public/system')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }
