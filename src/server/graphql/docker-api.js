import got from 'got'

const getContainerById = id => {
  return got(`unix:/var/run/docker.sock:/containers/${id}/json`, {
    json: true
  })
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
  return got(`unix:/var/run/docker.sock:/containers/json`, {
    json: true
  })
  .then(res => res.body)
  .catch(err => console.error(err))
}

const getImageByName = name => {
  return got(`unix:/var/run/docker.sock:/images/${name}/json`, {
    json: true
  })
  .then(res => res.body)
  .then(image => ({
    id: image.Id,
    name: name
  }))
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

export default {
  getContainerById,
  getContainerList,
  getImageByName,
  stopContainer,
  startContainer
}
