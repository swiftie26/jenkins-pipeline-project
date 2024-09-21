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
                    sh '//usr/local/bin/docker run -d -p 3000:3000 --name my-node-app-container my-node-app'
                }
            }
        }
    }
}
