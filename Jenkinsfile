
pipeline {
    agent {
        docker {
            image 'node:22'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Check') {
            steps {
                sh 'node --check app.js'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: Node.js pipeline completed!'
        }
        failure {
            echo 'FAILED: Check the console output for errors.'
        }
    }
}
