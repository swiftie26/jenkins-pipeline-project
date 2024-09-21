pipeline {
    agent any
    
    tools {
        nodejs "NodeJS" // This is the name you gave to the NodeJS installation in Jenkins
    }
    
    stages {
        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
    }
}
