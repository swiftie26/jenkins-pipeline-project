pipeline {
    agent any
    
    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
        
        stage('Code Quality Analysis') {
            steps {
                script {
                    sh 'npx eslint .'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Stop and remove the running container if it exists
                    sh '''
                       CONTAINER_ID=$(docker ps -aq -f name=my-node-app-container)
                       if [ "$CONTAINER_ID" ]; then
                         docker stop $CONTAINER_ID || true
                         docker rm $CONTAINER_ID || true
                       fi
                    '''
                    
                    // Build the Docker image
                    sh '/usr/local/bin/docker build -t my-node-app .'
                    
                    // Run the Docker container
                    sh '/usr/local/bin/docker run -d -p 3000:3000 --name my-node-app-container my-node-app'
                }
            }
        }

        stage('Release') {
            steps {
                script {
                    // Stop and remove the running container if it exists
                    sh '''
                       CONTAINER_ID=$(docker ps -aq -f name=my-node-app-container)
                       if [ "$CONTAINER_ID" ]; then
                         docker stop $CONTAINER_ID || true
                         docker rm $CONTAINER_ID || true
                       fi
                    '''
                    
                    // Start a new container in "production"
                    sh '/usr/local/bin/docker run -d -p 80:3000 --name my-node-app-container my-node-app'
                }
            }
        }
    }
}
