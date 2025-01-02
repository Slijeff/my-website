pipeline {
    agent any

    stages {
        stage('Cleanup') {
            steps {
                echo 'Cleaning up..'
                sh 'docker container rm my-website'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'docker build -t my-website:latest .'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'docker run --rm -d -p 9004:3000 my-website:latest --name my-website'
            }
        }
    }
}