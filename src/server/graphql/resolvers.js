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
  Container: {
    image ({ imageName }) {
      return api.getImageByName(imageName)
    }
  }
}

export default resolvers
