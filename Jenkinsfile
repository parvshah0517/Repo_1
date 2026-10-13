
pipeline {
    agent any

    environment {
        APP_NAME = 'space-web'
        APP_PORT = '3000'
        HOST_PORT = '3000'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            agent {
                docker {
                    image 'node:22'
                }
            }
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:22'
                }
            }
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker rm -f ${APP_NAME} || true

                    docker run -d \
                      --name ${APP_NAME} \
                      --restart unless-stopped \
                      -p ${HOST_PORT}:${APP_PORT} \
                      -w /app \
                      -v "$WORKSPACE:/app" \
                      -v /app/node_modules \
                      node:22 \
                      sh -c "npm install && npm start"
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment completed successfully!'
            echo 'If your app listens on port 3000, open http://localhost:3000'
        }
        failure {
            echo 'Pipeline failed. Check Console Output.'
        }
    }
}
