pipeline {
  agent {
    docker {
      image 'node:14.17.0'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

  }
}