pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // Install Node.js and dependencies
                script {
                    nodejs('NodeJS') {
                        sh 'npm install'
                    }
                }
            }
        }
    }
}
