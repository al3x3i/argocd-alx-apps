# argocd-alx-apps
This project combines a Node.js API with Argo CD deployment files to create a seamless and automated deployment process 
for the API.

## Usage:
1. Start minikube
2. Deploy Argo CD
    ```shell
    kubectl create namespace argocd
    kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
    
    # Get admin password
    kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
    
    kubectl port-forward svc/argocd-server -n argocd 8080:443
    ```
3. Install new app in UI http://localhost:8080
4. (Optional) Install app by Argo CD CLI
    ```shell
    curl --insecure https://localhost:8080/download/argocd-linux-amd64 -o argocd
    chmod +x argocd
    # Use admin password
    ./argocd login --insecure --username admin --password h4vHPtl2WnnDhPYP localhost:8080
    ./argocd app list
    
    # For creating an application
    argocd app create my-apps --upsert -f my-apps.yaml
    
    # For applying an application YAML file
    argocd app apply my-apps --upsert -f my-apps.yaml
    ```
