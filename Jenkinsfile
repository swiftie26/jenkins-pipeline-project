pipeline {
    agent any
    
    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Install dependencies
                    sh 'npm install'
                    
                    // Build the Docker image as an artifact
                    sh '/usr/local/bin/docker build -t my-node-app .'
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    // Run tests with Jest
                    sh 'npm test'
                }
            }
        }
        
        stage('Code Quality Analysis') {
            steps {
                script {
                    // Run ESLint to check code quality
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
                    
                    // Run the Docker container for testing on port 3000
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
                    
                    // Start a new container in "production" on port 80
                    sh '/usr/local/bin/docker run -d -p 80:3000 --name my-node-app-container my-node-app'
                }
            }
        }
    }
}
