pipeline {
  agent {
    docker {
      image 'node:14.17.0'
      args '--network jenkins-net'
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