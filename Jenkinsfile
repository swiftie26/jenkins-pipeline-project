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
    }
}
