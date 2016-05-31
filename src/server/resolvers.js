import api from './docker'

const resolveFunctions = {
  Query: {
    getContainer (_, { id }) {
      return api.getContainer(id)
    },
    getContainerList () {
      return api.getContainerList()
    }
  },
  Mutation: {
    stopContainer (_, { id }) {
      console.log('stop container', id)
      return api.stopContainer(id)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    },
    startContainer (_, { id }) {
      console.log('start container', id)
      return api.startContainer(id)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }
  },
  Container: {
    running ({ id }) {
      return api.getContainer(id).then(data => data.running)
    }
  }
}

export default resolveFunctions
