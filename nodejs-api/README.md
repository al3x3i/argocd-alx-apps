# nodejs-api

This project is a Node.js API that serves as the backend.
The API is designed to handle incoming requests.

## Build Docker image
`docker build -t alx-api .`

### Tag image
`docker tag alx-api:latest al3x3i/alx-api:latest`

### Push to docker hub
```shell
    docker login
    docker tag alx-api:latest al3x3i/alx-api:latest
    docker push al3x3i/alx-api:latest
```

## Run Docker image
`docker run -d -p 3030:3030 --name alx-api alx-api`

### Test running application
`curl localhost:3030`


## Usage
### Stop running process on particular port
```shell
    sudo netstat -nlp | grep :3030
    # OR fuser -k  3030/tcp
    PID=825225 # Running process from previous step
    kill -9 $PID # Stop running process 
```

## Deploy
`
k apply -f deploy/argocd/deployment.yaml
k port-forward alx-api-67466f69fd-f7tqx 3030
`
