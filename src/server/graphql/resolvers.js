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
    },
    image (_, { id }) {
      return api.getImage(id)
    },
    imageList () {
      return api.getImageList()
        .then(images => {
          return images.map(i => api.getImage(i.Id))
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
    },
    restartContainer (_, { id }) {
      return api.restartContainer(id)
        .then(() => api.getContainerById(id))
    }
  },
  Container: {
    image ({ imageName }) {
      return api.getImage(imageName)
    }
  }
}

export default resolvers
