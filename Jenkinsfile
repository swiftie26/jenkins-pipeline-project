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
                       if [ $(/usr/local/bin/docker ps -q -f name=my-node-app-container) ]; then
                         /usr/local/bin/docker stop my-node-app-container
                         /usr/local/bin/docker rm my-node-app-container
                       fi
                    '''
                    
                    // Start a new container in "production"
                    sh '/usr/local/bin/docker run -d -p 80:3000 --name my-node-app-container my-node-app'
                }
            }
        }
    }
}
