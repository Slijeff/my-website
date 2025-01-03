pipeline {
    agent any

    stages {
        
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'docker build -t my-website:latest .'
            }
        }
        stage('Cleanup') {
            steps {
                echo 'Cleaning up..'
                sh 'docker container rm -f my-website || true'
                sh 'yes | docker image prune'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'docker run -d --name my-website -p 9004:3000 my-website:latest'
            }
        }
    }
}