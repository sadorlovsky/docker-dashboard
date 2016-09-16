import got from 'got'
import api from './docker-api'

const resolvers = {
  Query: {
    container (_, { id }) {
      return api.getContainerById(id)
    },
    containerList () {
      return api.getContainerList()
        .then(containers => {
          return containers.map(c => api.getContainerById(c.Id))
        })
        .then(promises => Promise.all(promises))
        .catch(err => console.error(err))
    }
  },
  Mutation: {
    stopContainer (_, { id }) {
      return api.stopContainer(id)
        .then(() => api.getContainerById(id))
    },
    startContainer (_, { id }) {
      return api.startContainer(id)
        .then(() => api.getContainerById(id))
    }
  },
  Container: {
    image ({ imageName }) {
      return api.getImageByName(imageName)
    }
  }
}

export default resolvers
