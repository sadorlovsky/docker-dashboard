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
  Container: {
    running ({ id }) {
      return api.getContainer(id).then(data => data.running)
    }
  }
}

export default resolveFunctions
