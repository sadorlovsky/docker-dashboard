import got from 'got'

const fetch = (url, method = 'get', opts) => {
  const baseUrl = 'unix:/var/run/docker.sock:'
  return got[method](baseUrl + url, Object.assign({}, { json: true }, opts))
}

const getContainerById = id => {
  return fetch(`/containers/${id}/json`)
    .then(res => res.body)
    .then(container => ({
      id: container.Id,
      created: container.Created,
      name: container.Name,
      running: container.State.Running,
      imageName: container.Config.Image
    }))
    .catch(err => console.error(err))
}

const getContainerList = () => {
  return fetch('/containers/json')
    .then(res => res.body)
    .catch(err => console.error(err))
}

const getImage = nameOrId => {
  const id = nameOrId.startsWith('sha256:')
    ? nameOrId.split(':')[1]
    : nameOrId
  return fetch(`/images/${id}/json`)
    .then(res => res.body)
    .then(image => ({
      id: image.Id,
      name: image.RepoTags[0].split(':')[0]
    }))
}

const getImageList = () => {
  return fetch('/images/json')
    .then(res => res.body)
    .catch(err => console.error(err))
}

const stopContainer = id => {
  return got.post(`unix:/var/run/docker.sock:/containers/${id}/stop`)
    .then(res => res.statusCode)
}

const startContainer = id => {
  return got.post(`unix:/var/run/docker.sock:/containers/${id}/start`)
    .then(res => res.statusCode)
}

const restartContainer = id => {
  return got.post(`unix:/var/run/docker.sock:/containers/${id}/restart`)
    .then(res => res.statusCode)
}

export default {
  getContainerById,
  getContainerList,
  getImageList,
  getImage,
  stopContainer,
  startContainer,
  restartContainer
}
