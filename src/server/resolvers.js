import api from './docker'

const resolveFunctions = {
  Query: {
    getContainer (_, { id }) {
      return api.getContainer(id)
    },
    getContainerList () {
      return api.getContainerList()
    }
  }
}

export default resolveFunctions
