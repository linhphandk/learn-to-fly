# learn-to-fly

## To Run

Create a .env file with the AIRFLOW_UID by running the command `echo -e "AIRFLOW_UID=$(id -u)" > .env`

Run `docker-compose up airflow-init` to initialize the airflow database

After that visit localhost:8080