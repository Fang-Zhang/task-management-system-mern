## Setup MySQL in CLI

`docker exec -it <container-name> <service-name> -p`

## Non-Root User

`docker inspect <container-name> --format='{{.Config.User}}'`
`docker inspect <container-name>`

## docker-compose.yaml

`docker-compose up`
`docker-compose up -d`
`docker-compose down`
`docker logs <container-name>`

## Enter Container Interactive Shell (Linux)

`docker exec -it backend_container sh`
`du`
`du -sh`